<template>
  <div class="carousel-box">
    <el-carousel trigger="click" arrow="hover">
      <el-carousel-item v-for="item,index in items" :key="index" :style="{ backgroundImage: `url(${item.bgUrl})` }">
        <h1 class="carousel_title_first" text="2xl">{{ item.title_first }}</h1>
        <h1 class="carousel_title_second" text="2xl">{{ item.title_second }}</h1>
        <p class="carousel_title_third" text="2xl">{{ item.title_third }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return {
            items:[
                {
                    bgUrl:'https://img.alicdn.com/imgextra/i2/O1CN01b9mI4s1lMHnTIGMuq_!!6000000004804-2-tps-2112-800.png',
                    title_first:'家享生活',
                    title_second:'叠国补低至5折',
                    title_third:'大牌享钜惠'
                },
                {
                    bgUrl:'https://img.alicdn.com/imgextra/i4/O1CN01cnXk8C1vvgZEz1KSi_!!6000000006235-2-tps-2112-800.png',
                    title_first:'采购就上XX网',
                    title_second:'企业专享5大福利',
                    title_third:'官方立减爆款8.5折起'
                },
                {
                    bgUrl:'https://img.alicdn.com/imgextra/i2/O1CN01iKp5Dz22ksX2x04nf_!!6000000007159-2-tps-2112-800.png',
                    title_first:'服饰时尚',
                    title_second:'大牌不止5折',
                    title_third:'券后低至7折起'
                },
                {
                    bgUrl:'https://img.alicdn.com/imgextra/i3/O1CN01FxEPk31D64qPKtws4_!!6000000000166-2-tps-2112-800.png',
                    title_first:'爆款清单',
                    title_second:'跟买不出错',
                    title_third:'官方立减爆款8.5折起'
                },
                {
                    bgUrl:'https://img.alicdn.com/imgextra/i2/O1CN016hY6UC1Nu8I32zIvy_!!6000000001629-2-tps-2112-800.png',
                    title_first:'超级大放价',
                    title_second:'爆款秒杀低至5折',
                    title_third:'券后低至7.7折起'
                },
            ]
        }
    }
}
</script>

<style>
.carousel-box{
    width: 100%;
    min-width: 800px; /* 最小宽度限制 */
    display: flex;
    justify-content: center;
}
.el-carousel{
    width: 100%; /* 自适应父容器宽度 */
    height: 400px;
    border-radius: 10px;
}

.el-carousel__item{
    height: 400px;
    overflow: hidden;
    display: block;
     background-size: cover;
     background-position: 80%;
}

.el-carousel__item:hover{
    cursor: pointer;
}

/* 轮播指示器按钮样式 */
.el-carousel__button {
    height: 8px !important;
    width: 8px !important;
    border-radius: 50%;
}

.el-carousel__indicator.is-active button {
    width: 20px !important; /* active 状态时显示更宽 */
    border-radius: 4px !important; /* 圆角矩形 */
}

.el-carousel__indicators--horizontal {
    position: relative;
    top: 60px;
    left: calc(50% + 15px);
}
.el-carousel__arrow--left {
    left: 0;
}

.el-carousel__arrow--right {
    right: 0;
}

.el-carousel__arrow--right.el-carousel__arrow{
    border-radius: 50% 0 0 50%;
}

.el-carousel__arrow--left.el-carousel__arrow{
    border-radius: 0 50% 50% 0;
}

.carousel_title_first{
    color: white;
    font-weight: 400;
    position: relative;
    top:75px;
    left: 40px;
}
.carousel_title_second{
    color: white;
    font-weight: 400;
    position: relative;
    top:75px;
    left: 40px;
}
.carousel_title_third{
    color: white;
    position: relative;
    top:90px;
    font-size: 16px;
    left: 45px;
}
</style>