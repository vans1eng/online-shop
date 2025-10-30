<template>
  <div class="accountBox">
    <div class="loginMode-line">
        <span @click="SwitchLoginMode('password')" :class="{ 'loginMode-active':loginMode==='password' }">密码登录</span>
        <dividline />
        <span @click="SwitchLoginMode('message')" :class="{ 'loginMode-active':loginMode==='message' }">短信登录</span>
    </div>
    <PasswordLoginForm v-if="loginMode==='password'"/>
    <MessageLoginForm v-if="loginMode==='message'"/>
  </div>
</template>

<script setup>
import MessageLoginForm from './MessageLoginForm.vue';
import PasswordLoginForm from './PasswordLoginForm.vue';
import dividline from './Dividline.vue';
import { ref } from 'vue';
const loginMode = ref('password');
const SwitchLoginMode = (mode) => {
    loginMode.value = mode;
}
</script>

<style>
.accountBox{
    width: 450px;
    height: 400px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}

.loginMode-line{
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginMode-line span{
    font-size: 22px;
    font-weight: 600;
    margin-inline: 20px;
}

.loginMode-line span:hover{
    cursor: pointer;
}

.loginMode-active{
    color: var(--color-normal);
}

</style>