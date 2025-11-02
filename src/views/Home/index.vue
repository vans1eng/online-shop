<template>
  <div class="home-body">
    <CHeader />
    <div class="line-container">
        <CategoryBox />
        <HomeCarousel />
        <ColRight />
    </div>
    <GoodsContainer />
    <ScrollToTopButton />
  </div>
</template>

<script setup>
import ColRight from './components/ColRight.vue'
import CategoryBox from '@/views/Home/components/CategoryBox.vue'
import HomeCarousel from '@/views/Home/components/HomeCarousel.vue'
import CHeader from "@/components/CHeader.vue"
import GoodsContainer from "./components/GoodsContainer.vue"
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'

</script>

<style scoped>
.home-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 600px;
}

.line-container{
  padding-inline: 100px;
  width: 100%;
    margin: 0 auto; /* 在大屏下居中 */
    height: 400px;
    display: flex;
    margin-bottom: 50px;
    margin-top: 100px;
}

</style>