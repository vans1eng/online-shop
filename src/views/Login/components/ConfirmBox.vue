<template>
  <div class="confirm-box">
    <div class="confirm-bg"></div>
    <div class="confirm-dialog-box">
        <p class="confirm-dialog-title">服务协议及隐私保护</p>
        <p class="confirm-dialog-detail">为了更好地保障您的合法权益，请您阅读并同意以下协议<span class="confirm-dialog-detail-protocol">《淘宝平台服务协议》《隐私权政策》《法律声明》《支付宝及客户端服务协议》</span>，未注册手机号将自动为您创建账号。</p>
        <div class="confirm-dialog-button-line">
            <el-button @click="DisagreeHandle" class="confirm-dialog-button confirm-dialog-button-disagree">不同意</el-button>
            <el-button @click="AgreeHandle" class="confirm-dialog-button confirm-dialog-button-agree">同意</el-button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['CheckConfirm'])
const AgreeHandle = () => {
    emit('CheckConfirm',true);
}
const DisagreeHandle = () => {
    emit('CheckConfirm',false);
}
</script>

<style>
.confirm-box{
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.confirm-bg{
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.3;
    position: absolute;
}

.confirm-dialog-box{
    width: 350px;
    height: 230px;
    border-radius: 20px;
    background-color: white;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.confirm-dialog-detail{
    width: 280px;
    font-size: 13px;
    margin-top: 15px;
    color: gray;
}

.confirm-dialog-detail-protocol{
    color: black;
}

.confirm-dialog-detail-protocol:hover{
    cursor: pointer;
}

.confirm-dialog-title{
    margin-top: 30px;
    font-size: 16px;
}

.confirm-dialog-button-line{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}

.confirm-dialog-button{
    width: 150px;
    height: 50px;
    border-radius: 40px;
}

.confirm-dialog-button-disagree{
    border:solid 1px var(--color-normal);
    color: var(--color-normal);
}

.confirm-dialog-button-disagree:hover{
    border:solid 1px gray;
    color: white;
    background-color: gray;
}

.confirm-dialog-button-agree{
    border:solid 1px gray;
    color: white;
    background-color: var(--color-normal);
}

.confirm-dialog-button-agree:hover{
    border:solid 1px gray;
    color: white;
    background-color: var(--color-light);
}
</style>