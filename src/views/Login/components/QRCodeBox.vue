<template>
  <div class="QRCodeBox">
    <span class="QRCodeTitle">手机扫码登录</span>
    <img class="QRCodeImg" src="@/assets/images/qrcode.jpg" alt="">
    <div class="QRCodeTip-line"><span class="QRCodeTip">打开手机</span><span class="QRCodeTip" style="color: var(--color-normal)">APP</span><span class="QRCodeTip">点击左上角扫一扫</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.QRCodeBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    margin-right: 10px;
}

.QRCodeTitle{
    font-size: 22px;
    font-weight: 600;
}

.QRCodeImg{
    margin-top: 60px;
    width: 180px;
    height: 180px;
    border: solid 1px var(--color-gray);
    border-radius: 10px;
}

.QRCodeTip-line{
    margin-top: 40px;
}

.QRCodeTip{
    font-size: 13px;
    line-height: 18.5px;
}

</style>