<template>
  <el-header class="home-header">
    <span class="logo-icon"></span>
    <div class="user-info-box">
      <span v-if="!isLogined" @click="loginHandle" class="home-loginBtn">请先登录</span>
      <span v-else>你好！{{ userStore.username }}<span @click="logoutHandle" class="home-logoutBtn">登出</span></span>
    </div>
    <CSearchBox />
    <CCart />
  </el-header>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
import CCart from "./CCart.vue";
import { useRouter } from "vue-router"
import { ref } from "vue";

const userStore = useUserStore();

const isLogined = ref(userStore.isLogined);

const router = useRouter();
import CSearchBox from "@/components/CSearchBox.vue"
function loginHandle() {
  router.push('/login')
}

function logoutHandle() {
  userStore.logout();
  isLogined.value = userStore.isLogined;
}
</script>

<style scoped>
.home-header {
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

.logo-icon {
  min-width: 100px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--color-normal);
}

.home-loginBtn {
  min-width: 60px;
  color: var(--color-darker);
  font-size: 15px;
}

.home-loginBtn:hover {
  cursor: pointer;
}

.home-logoutBtn {
  margin-left: 10px;
  color: var(--color-normal);
  font-size: 13px;
}

.home-logoutBtn:hover {
  cursor: pointer;
}

.user-info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 20px;
  min-width: 160px;
}
</style>