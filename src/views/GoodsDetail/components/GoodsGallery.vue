<template>
    <div class="goodsGallery">
        <div class="goodsGallery-left-box">
            <div class="goodsCarousel" ref="carouselRef" :style="{ height: carouselHeight }">
                <div ref="carouselListRef" class="goodsCarousel-list">
                    <span class="goodsCarousel-item" @mouseleave="stopScroll"
                        @mouseenter="startScroll(); carouselItemMouseEnter(index)" v-for="item, index in imgList"
                        :key="index">
                        <img src="" alt="">
                    </span>
                </div>
            </div>
        </div>
        <div class="goodsGallery-right-box">
            <span class="goodsGallery-arrow goodsGallery-arrow-left">
                <svg t="1762167446550" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2867" width="200" height="200">
                    <path
                        d="M670.954667 86.826667L269.44 488.362667a32 32 0 0 0-2.090667 42.965333l2.090667 2.282667L670.933333 935.168a8.533333 8.533333 0 0 0 6.037334 2.496h66.368a8.533333 8.533333 0 0 0 6.037333-14.570667L337.28 511.018667 749.397333 98.901333a8.533333 8.533333 0 0 0-6.037333-14.570666h-66.346667a8.533333 8.533333 0 0 0-6.058666 2.496z"
                        fill="#333333" p-id="2868"></path>
                </svg>
            </span>
            <div class="goodsGallery-img-select-box">
                <img class="goodsImg-big" ref="bigImgRef" src="" alt="" @load="updateCarouselHeight">
            </div>
            <span class="goodsGallery-arrow goodsGallery-arrow-right">
                <svg t="1762167467419" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3036" width="200" height="200">
                    <path
                        d="M353.045333 86.826667L754.56 488.362667a32 32 0 0 1 2.090667 42.965333l-2.090667 2.282667L353.066667 935.168a8.533333 8.533333 0 0 1-6.037334 2.496h-66.368a8.533333 8.533333 0 0 1-6.037333-14.570667L686.72 511.018667 274.602667 98.901333a8.533333 8.533333 0 0 1 6.037333-14.570666h66.346667a8.533333 8.533333 0 0 1 6.058666 2.496z"
                        fill="#333333" p-id="3037"></path>
                </svg>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const carouselRef = ref(null);
const carouselListRef = ref(null);
const bigImgRef = ref(null);
const carouselHeight = ref('auto');
let resizeObserver = null;
let scrollInterval = null;

const nowImgIndex = ref(0);
const imgElementList = ref([]);
const imgList = ref([1, 1, 1, 1, 1, 1, 1, 1]);

function carouselScroll(index) {
    if (!carouselListRef.value) return;

    // 每次向上滚动80px（大约一个item的高度）
    const scrollAmount = 20 * (index - nowImgIndex.value);
    const currentScrollTop = carouselListRef.value.scrollTop;

    // 平滑滚动
    carouselListRef.value.scrollTo({
        top: Math.max(0, currentScrollTop - scrollAmount),
        behavior: 'smooth'
    });
}

// 持续滚动函数（鼠标悬停时）
function startScroll() {
    var xIndex = nowImgIndex.value;
    if (scrollInterval) return;

    scrollInterval = setInterval(() => {
        carouselScroll(xIndex);
    }, 50); // 每50ms滚动一次
}

function stopScroll() {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
}

function updateCarouselHeight() {
    if (bigImgRef.value) {
        carouselHeight.value = `${bigImgRef.value.offsetHeight}px`;
    }
}

function handleResize() {
    updateCarouselHeight();
}

function carouselItemMouseEnter(index) {
    if (nowImgIndex.value !== index) {
        nowImgIndex.value = index;
        updateCarousel();
    }
}

function updateCarousel() {
    for (let i = 0; i < imgElementList.value.length; i++) {
        if (i === nowImgIndex.value) {
            imgElementList.value[i].classList.add('goodsCarousel-item-active');
        } else {
            imgElementList.value[i].classList.remove('goodsCarousel-item-active');
        }
    }
}

onMounted(async () => {
    // 等待 DOM 渲染完成后再初始化高度
    imgElementList.value = carouselRef.value.querySelectorAll('.goodsCarousel-item');
    await nextTick();
    updateCarouselHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    // 使用 ResizeObserver 监听图片尺寸变化
    await nextTick();
    if (bigImgRef.value) {
        resizeObserver = new ResizeObserver(() => {
            updateCarouselHeight();
        });
        resizeObserver.observe(bigImgRef.value);
    }
    updateCarousel();
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
    }
    // 清理滚动定时器
    stopScroll();
});
</script>

<style>
.goodsGallery {
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.goodsGallery-left-box {
    width: 70px;
}

.goodsGallery-right-box {
    margin-left: 20px;
    overflow: hidden;
    flex: 1;
    display: flex;
    height: 100%;
    width: auto;
    position: relative;
}

.goodsGallery-img-select-box {
    width: 100%;
    padding-inline: 50px;
    display: flex;
    justify-content: center;
}

.goodsImg-big {
    border-radius: 20px;
    background-color: var(--color-gray);
    min-width: 300px;
    width: 80%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
}

.goodsCarousel {
    border-radius: 10px;
    width: 70px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scrollup-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: block;
}

.scrolldown-area {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: block;
}

/* 顶部淡出效果 */
.goodsCarousel::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: 2;
}

/* 底部淡出效果 */
.goodsCarousel::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: 2;
}

.goodsCarousel-list::-webkit-scrollbar {
    width: 0;
}

.goodsCarousel-list {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 70px;
}

.goodsCarousel-item {
    background-color: gray;
    padding: 5px;
    border-radius: 10px;
    height: 70px;
    width: 70px;
    flex-shrink: 0;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
}

.goodsCarousel-item-active {
    border: solid 3px var(--color-normal);
}

.goodsCarousel-item:hover {
    cursor: pointer;
}

.goodsGallery-arrow-left {
    transform: translate(-50px, -50%);
    left: 0;
}

.goodsGallery-arrow-right {
    transform: translate(50px, -50%);
    right: 0;
}

.goodsGallery-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    border: solid 1px var(--color-gray-dark);
    z-index: 10;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.goodsGallery-arrow-left .icon,
.goodsGallery-arrow-right .icon {
    width: 20px;
    height: 20px;
}

.goodsGallery-right-box:hover .goodsGallery-arrow-left {
    transform: translate(0px, -50%);
}

.goodsGallery-right-box:hover .goodsGallery-arrow-right {
    transform: translate(0px, -50%);
}
</style>