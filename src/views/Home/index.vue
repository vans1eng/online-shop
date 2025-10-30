<template>
  <div class="home-body">
    <CHeader />
    <div class="line-container">
        <CategoryBox />
        <HomeCarousel />
        <ColRight />
    </div>
    <GoodsContainer />
  </div>
</template>

<script>
import ColRight from './components/ColRight.vue'
import CategoryBox from '@/views/Home/components/CategoryBox.vue'
import HomeCarousel from '@/views/Home/components/HomeCarousel.vue'
import CHeader from "@/components/CHeader.vue"
import GoodsContainer from "./components/GoodsContainer.vue"
export default {
  components:{
    GoodsContainer,
    CHeader,
    HomeCarousel,
    CategoryBox,
    ColRight
}
}
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
  padding-inline: 40px;
  width: 100%;
    margin: 0 auto; /* 在大屏下居中 */
    height: 400px;
    display: flex;
    margin-bottom: 50px;
    margin-top: 100px;
}

</style>