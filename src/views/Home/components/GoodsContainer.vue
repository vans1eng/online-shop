<template>
  <div class="goods-container">
    <GoodsCard v-for="(g, index) of goods" :key="index" :goodsData="g" />
    <!-- 哨兵元素：用于触发无限滚动加载 -->
    <div ref="sentinelRef" class="sentinel"></div>
  </div>
</template>

<script setup>
import { getGoodsLimitAndOffset } from "@/apis/api";
import GoodsCard from "@/views/Home/components/GoodsCard.vue"
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const goods = ref([]);
const offset = ref(0);
const limit = ref(20);
const isLoading = ref(false);
const hasMore = ref(true);

const observer = ref(null);
const sentinelRef = ref(null);

function initIntersectionObserver() {
  // 创建 Intersection Observer 实例
  observer.value = new IntersectionObserver(
    // 回调函数，当观察目标进入视口时触发
    (entries) => {
      entries.forEach(entry => {
        // 当目标元素进入视口，且不在加载中，且还有更多数据时
        if (entry.isIntersecting && !isLoading.value && hasMore.value) {
          updateGoods();
        }
      });
    },
    {
      // 配置选项
      root: null,           // 根元素，null 表示视口
      rootMargin: '100px',  // 提前100px触发（在距离视口100px时就开始加载）
      threshold: 0.1        // 当目标元素10%进入视口时触发
    }
  );

  // 等待 DOM 更新后观察哨兵元素
  nextTick(() => {
    if (sentinelRef.value && observer.value) {
      observer.value.observe(sentinelRef.value);
    }
  });
}

async function updateGoods() {
  if (isLoading.value || !hasMore.value) return;

  isLoading.value = true;

  try {
    const res = await getGoodsLimitAndOffset(limit.value, offset.value * limit.value);

    if (res.content && res.content.length > 0) {
      res.content.forEach(item => {
        goods.value.push(item);
      });
      offset.value++;

      // 如果返回的数据少于 limit，说明没有更多数据了
      if (res.content.length < limit.value) {
        hasMore.value = false;
        // 如果没有更多数据，断开观察器
        if (observer.value && sentinelRef.value) {
          observer.value.unobserve(sentinelRef.value);
        }
      }
    } else {
      hasMore.value = false;
      if (observer.value && sentinelRef.value) {
        observer.value.unobserve(sentinelRef.value);
      }
    }
  } catch (e) {
    console.error('加载商品失败:', e);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  updateGoods();
  initIntersectionObserver();
})

onUnmounted(() => {
  // 组件卸载时清理观察器
  if (observer.value) {
    observer.value.disconnect();
    observer.value = null;
  }
})
</script>

<style scoped>
.goods-container {
  padding-inline: 94px;
  min-width: 1452px;
  margin: 0 auto;
  /* 居中 */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  /* 最小250px，最大自适应 */
  grid-auto-rows: 380px;
  /* 固定行高 */
  gap: 20px;
}

.sentinel {
  height: 1px;
  width: 100%;
  grid-column: 1 / -1;
  /* 哨兵元素占据整个网格宽度 */
}
</style>
