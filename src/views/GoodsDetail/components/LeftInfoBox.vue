<template>
    <div class="left-info-box">
        <ShopHeader />
        <GoodsGallery />
    </div>
</template>

<script setup>
import GoodsGallery from "./GoodsGallery.vue";
import ShopHeader from "./ShopHeader.vue";
</script>

<style>
.left-info-box {
    padding-top: 30px;
    width: calc(60% - 48px);
}
</style>