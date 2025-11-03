<template>
  <CHeader />
  <div class="goods-detail-container">
    <LeftInfoBox />
    <RightBuyBox />
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import CHeader from "@/components/CHeader.vue"
import LeftInfoBox from "./components/LeftInfoBox.vue"
import RightBuyBox from "./components/RightBuyBox.vue"
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

</script>

<style>
.goods-detail-container {
  min-width: 1040px;
  padding-top: 60px;
  padding-inline: 80px;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>