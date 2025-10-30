<template>
  <div class="loginBox">
    <QRCodeBox />
    <dividline height="400" />
    <AccountBox />
  </div>
</template>

<script setup>
import AccountBox from './AccountBox.vue';
import QRCodeBox from './QRCodeBox.vue';
import dividline from './dividline.vue';
</script>

<style>
.loginBox{
  min-width: 850px;
  width: 850px;
  height: 550px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>