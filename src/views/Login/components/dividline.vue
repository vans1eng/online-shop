<template>
  <div class="divid-line" :style="{height:`${height}px`}"></div>
</template>

<script setup>
const { height } = defineProps({
    height:{
        type: Number,
        default:20
    },
});
</script>

<style>
.divid-line{
    width: 1.5px;
    background-color: var(--color-gray);
}

</style>