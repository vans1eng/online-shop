<template>
  <div class="login-page">
    <span class="logo"></span>
    <LoginBox />
  </div>
</template>

<script setup>
import LoginBox from "./components/LoginBox.vue";
</script>

<style>
.logo{
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--color-normal);
  position: absolute;
  left: 25px;
  top:25px;
}
.login-page{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-gray);
}

</style>