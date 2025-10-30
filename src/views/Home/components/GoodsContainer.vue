<template>
  <div class="goods-container">
    <GoodsCard v-for="g,index of goods" :key="index" :goodsData="g" />
  </div>
</template>

<script setup>
import { getAllGoods } from "@/apis/api";
import GoodsCard from "@/views/Home/components/GoodsCard.vue"
import { ref,onMounted } from 'vue'
const goods = ref([]);

onMounted(() => {
    getAllGoods()
    .then(res => {
        goods.value = res;
    })
    .catch((e)=>{
        console.log('error:'+e);
    })
})
</script>

<style scoped>

.goods-container{
    padding-inline: 34px;
    min-width: 1300px;
    margin: 0 auto; /* 居中 */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 最小250px，最大自适应 */
    grid-auto-rows: 380px; /* 固定行高 */
    gap: 20px;
}
</style>