<template>
  <div @click="SwitchCartList" class="cart-box">
    <svg t="1761735414571" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4372" width="30" height="30"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z" p-id="4373"></path></svg>
    <span>购物车</span>
  </div>
  <div class="cartList-box" :class="{'cartList-box-show':cartListShow,'cartList-box-hidden':!cartListShow}">
    <svg @click="CloseCartList" t="1761736960914" class="icon cartList-closeBtn" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6321" width="24" height="24"><path d="M646.4 512l345.6-345.6c38.4-38.4 38.4-96 0-134.4-38.4-38.4-96-38.4-134.4 0L512 377.6 166.4 32C128-6.4 70.4-6.4 32 32c-38.4 38.4-38.4 96 0 134.4L377.6 512l-345.6 345.6c-38.4 38.4-38.4 96 0 134.4 19.2 19.2 44.8 25.6 70.4 25.6s51.2-6.4 70.4-25.6L512 646.4l345.6 345.6c19.2 19.2 44.8 25.6 70.4 25.6s51.2-6.4 70.4-25.6c38.4-38.4 38.4-96 0-134.4L646.4 512z" fill="#9d4edd" p-id="6322"></path></svg>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cartListShow = ref(false);

function CloseCartList(){
    cartListShow.value = false;
}

function SwitchCartList(){
    cartListShow.value = !cartListShow.value;
}
</script>

<style>
.cart-box{
    min-width: 100px;
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
}

.cart-box:hover{
    cursor: pointer;
}


.cart-box span{
    margin-left: 5px;
    font-size: 18px;
}

.cartList-box{
    transition: .3s;
    right: 0;
    z-index: 100;
    background-color: white;
    border-left: solid 1px var(--color-gray-darker);
    position: fixed;
    top: 60px;
    width: 350px;
    height: calc(100vh - 60px);
}

.cartList-box-show{
    transform: translate(0);
}

.cartList-box-hidden{
    transform: translate(350px);
}

.cartList-closeBtn{
    margin-left: 10px;
    margin-top: 10px;
    transform: rotate(0);
    transition: .3s;
}

.cartList-closeBtn:hover{
    cursor: pointer;
    transform: rotate(180deg);
}
</style>