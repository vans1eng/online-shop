<template>
    <CHeader />
  <div class="goods-detail">
    <h3>Goods Detail Page</h3>
    <p>Goods ID: {{ id }}</p>
  </div>
</template>

<script>
import CHeader from "@/components/CHeader.vue"
export default {
    components:{
        CHeader
    },
  name: 'GoodsDetail',
  props: {
    id: {
      type: String,
      required: true
    },
    goodsData:{
        type:Object,
        required:true
    }
  }
}
</script>

<style>

</style>