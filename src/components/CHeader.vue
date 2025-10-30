<template>
  <el-header class="home-header">
    <span class="logo-icon"></span>
    <span v-if="!isLogined" @click="loginHandle" class="home-loginBtn">请先登录</span>
    <span v-else>用户名</span>
    <CSearchBox />
    <CCart />
  </el-header>
</template>

<script setup>
import CCart from "./CCart.vue";
import { useRouter } from "vue-router"
import { ref } from "vue";

const router = useRouter();
import CSearchBox from "@/components/CSearchBox.vue"
const isLogined = ref(false);
function loginHandle(){
  router.push('/login')
}
</script>

<style scoped>
.home-header{
  z-index: 100;
  top: 0;
  position: fixed;
  width: 100vw;
  min-width: 1000px;
  background-color: var(--color-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px var(--color-yellow-dark);
}

.logo-icon{
  min-width: 100px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--color-normal);
}
.home-loginBtn{
  min-width: 60px;
  margin-inline: 40px;
  color: var(--color-darker);
  font-size: 15px;
}

.home-loginBtn:hover{
  cursor: pointer;
}
</style>