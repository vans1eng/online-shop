<template>
    <div class="shopHeader">
        <div class="shopHeader-left-box">
            <img class="shopAvatar" src="" alt="">
        </div>
        <div class="shopHeader-mid-box">
            <span class="shopName">深圳华强北正品甄选总店</span>
            <span class="shopRateStar">★★★★☆<span class="shopRate">4.0</span></span>
        </div>
        <div class="shopHeader-right-box">
            <el-button class="customServiceBtn shopHeader-right-button"><svg t="1762153591245" class="icon"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="200"
                    height="200">
                    <path
                        d="M927.616 465.6C923.328 236.704 745.888 51.808 528 51.808h-32c-217.888 0-395.328 184.896-399.616 413.76C58.112 487.744 32 528.672 32 576v64c0 70.592 57.408 128 128 128s128-57.408 128-128v-64a128.064 128.064 0 0 0-126.784-127.872C173.728 262.688 318.912 115.808 496 115.808h32c177.12 0 322.272 146.88 334.784 332.32A128.064 128.064 0 0 0 736 576v64c0 57.792 38.72 106.176 91.392 122.016a337.504 337.504 0 0 1-191.936 124.48A79.712 79.712 0 0 0 560 832a80 80 0 1 0 0 160 79.68 79.68 0 0 0 67.872-38.112 402.432 402.432 0 0 0 278.24-193.6C955.968 742.816 992 695.776 992 640v-64c0-47.328-26.112-88.256-64.384-110.4zM224 576v64c0 35.296-28.704 64-64 64s-64-28.704-64-64v-64c0-35.296 28.704-64 64-64s64 28.704 64 64z m704 64c0 34.304-27.2 62.176-61.12 63.712l-2.496-1.184c-0.224 0.512-0.576 0.928-0.8 1.408A64 64 0 0 1 800 640v-64c0-35.296 28.704-64 64-64s64 28.704 64 64v64z"
                        p-id="2422" fill="#c77dff"></path>
                </svg>客服</el-button>
            <el-button class="enterShopBtn shopHeader-right-button"><svg t="1762153725625" class="icon"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3735"
                    id="mx_n_1762153725626" width="200" height="200">
                    <path
                        d="M864 617.6c-19.2 0-32 12.8-32 32v195.2c0 9.6-9.6 19.2-19.2 19.2H211.2c-9.6 0-19.2-9.6-19.2-19.2v-195.2c0-19.2-12.8-32-32-32s-32 12.8-32 32v195.2C128 889.6 166.4 928 211.2 928h601.6c44.8 0 83.2-38.4 83.2-83.2v-195.2c0-19.2-12.8-32-32-32zM956.8 316.8l-105.6-204.8c-6.4-9.6-16-16-28.8-16h-640c-12.8 0-25.6 9.6-28.8 22.4l-83.2 208c-6.4 6.4-3.2 22.4-3.2 25.6v80c0 80 67.2 147.2 147.2 147.2H256c48 0 86.4-16 112-44.8 25.6 28.8 70.4 44.8 124.8 44.8h41.6c54.4 0 99.2-16 124.8-44.8 25.6 25.6 64 41.6 112 41.6h41.6c80 0 147.2-67.2 147.2-147.2v-83.2c0-3.2 0-22.4-3.2-28.8zM204.8 160h598.4l67.2 128H150.4l54.4-128z m608 352h-41.6c-19.2 0-83.2-3.2-83.2-64 0-19.2-12.8-32-32-32s-32 12.8-32 32v12.8c0 51.2-76.8 54.4-92.8 54.4h-41.6c-16 0-92.8-3.2-92.8-54.4v-6.4-3.2c0-19.2-12.8-32-32-32s-32 12.8-32 32c0 48-41.6 64-83.2 64H211.2c-44.8 0-83.2-38.4-83.2-83.2V352h768v76.8c0 44.8-35.2 83.2-83.2 83.2z"
                        fill="#666666" p-id="3736"></path>
                </svg>进店</el-button>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.shopHeader {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.shopAvatar {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 1px var(--color-gray-dark);
}

.shopHeader-left-box {
    width: 70px;
    height: 100%;
    padding-right: 20px;
}

.shopHeader-right-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 100%;
}

.shopHeader-mid-box {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.shopName {
    font-weight: 600;
    font-size: 15px;
    flex: 1;
}

.shopRateStar {
    color: var(--color-orange);
}

.shopRate {
    margin-left: 10px;
    color: var(--color-orange);
}

.shopHeader-right-button {
    width: 80px;
    height: 40px;
    border-radius: 7px;
    border: solid 1px var(--color-gray-dark);
}

.shopHeader-right-button .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
</style>