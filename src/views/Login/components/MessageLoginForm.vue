<template>
  <el-form class="loginBox-form">
    <div class="phone-input">
        <el-dropdown class="phoneRegion-dropdown" trigger="click">
            <span class="el-dropdown-link">
            {{ nowExNum }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>  
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="PhoneHandle(region)"  v-for="region,index of regions" :key="index">{{ region[0] }}  {{ region[1] }}</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-input v-model="phoneNumber" placeholder="请输入手机号"></el-input>
    </div>
    <div class="captchaCode-input">
        <el-input v-model="captchaCode" type="text" placeholder="请输入验证码" maxlength="4"></el-input>
            <span @click="GetCaptchaCode(phoneNumber)" class="getCaptchaCode" :class="{'getCaptchaCode-ungetable':(phoneNumber.length != 11),'getCaptchaCode-getable':(phoneNumber.length==11),'getCaptchaCode-getting':(isGetttingCaptchaCode)}"> 
                <span v-show="isGetttingCaptchaCode">{{ getCaptchaCodeCount }}</span>
                {{ captchaCodeText }}
            </span>
    </div>
    <div class="warningMessage-box" :class="{'warning-visible':isWarning,'warning-hidden':!isWarning}">
        <svg t="1761703479550" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2999" width="16" height="16"><path d="M997.12 771.968L623.488 141.952C561.856 37.952 462.08 38.08 400.512 141.952L27.008 771.968C-34.624 875.968 12.8 960 132.928 960h758.208c119.808 0 167.552-84.16 105.92-188.032z m-421.248-130.56v174.656c0 4.032-2.24 8.192-6.848 11.328a29.824 29.824 0 0 1-16.512 4.608H471.36a29.696 29.696 0 0 1-16.512-4.608C450.24 824.256 448 820.096 448 816v-175.936l0.512-112.064c0-4.096 2.24-8.064 6.848-11.2a29.248 29.248 0 0 1 16.384-4.608L552.512 512a28.608 28.608 0 0 1 16.64 4.544c4.608 3.072 6.848 7.232 6.848 11.392l-0.128 113.472zM576 413.12c0 8.96-2.24 17.792-6.848 24.64-4.48 6.848-10.56 10.24-16.512 10.24h-81.28c-5.952 0-11.904-3.392-16.512-10.24A44.16 44.16 0 0 1 448 413.12v-58.304c0-8.96 2.24-17.92 6.848-24.576 4.608-6.912 10.56-10.24 16.512-10.24h81.28c5.952 0 12.032 3.328 16.512 10.24A43.904 43.904 0 0 1 576 354.816v58.24z" fill="#ea9518" p-id="3000"></path></svg>
        <span class="warningMessage">{{ warningMsg }}</span>
    </div>
    <div class="loginBtn-box">
        <el-button @click="LoginHandle" class="loginBtn" :loading="isLoading">登录</el-button>
    </div>
    <div class="action-box">    
        <span>忘记账号</span>
        <dividline />
        <span>免费注册</span>
    </div>
    <div class="confirm-check-box">
        <el-checkbox class="confirm-checkbox" v-model="confirmed">
                <span>已阅读并同意以下协议
                <a style="color: var(--color-normal);">平台服务协议</a>、
                <a style="color: var(--color-normal);">隐私权政策</a>、
                <a style="color: var(--color-normal);">法律声明</a>
            </span>
        </el-checkbox>
    </div>
  </el-form>
  <ConfirmBox @CheckConfirm="ConfirmHandle" v-show="isConfirming"/>
</template>

<script setup>
import dividline from './dividline.vue'
import ConfirmBox from './ConfirmBox.vue';
import { ArrowDown } from '@element-plus/icons-vue'
import { ref,computed } from 'vue';

const captchaCodeText = computed(() => {
    if(isGetttingCaptchaCode.value==true){
        return '秒后重发';
    }
    else{
        if(firstTimeGet.value==true){
            return '获取验证码';
        }
        else{
            return '重新发送';
        }
    }
});
const confirmed = ref(false);
const isConfirming = ref(false);
const firstTimeGet = ref(true);
const phoneNumber = ref('');
const captchaCode = ref('');
const isWarning = ref(false);
const warningMsg = ref('');
const getCaptchaCodeCount = ref(10);
const isGetttingCaptchaCode = ref(false);
const nowExNum = ref('+86');
const isLoading = ref(false)
const ConfirmHandle = (agreed) => {
    console.log('ss')
    isConfirming.value = false;
    confirmed.value = agreed;
    if(agreed)
        LoginHandle();
}
const LoginHandle = () => {
    if(phoneNumber.value===''){
        isWarning.value = true;
        warningMsg.value = '请输入手机号'
    }
    else{
        if(phoneNumber.value.length != 11){
            isWarning.value = true;
            warningMsg.value = '手机号码格式不正确，请重新输入'
        }
        else{
            if(captchaCode.value.length==0){
                isWarning.value=true;
                warningMsg.value = '请输入短信验证码';
            }
            else if(captchaCode.value.length != 4){
                isWarning.value = true;
                warningMsg.value = '验证码错误';
            }
            else{
                //检验验证码
                if(confirmed.value===true){
                    isWarning.value = false;
                    isLoading.value = true;
                    setTimeout(() => {
                        isLoading.value = false;
                    },2000)
                }
                else{
                    isConfirming.value = true;
                }
            }
        }
    }
}
const PhoneHandle = (region) => {
    nowExNum.value = region[1];
}
const regions = ref([
        ['中国大陆','+86'],
        ['中国香港','+852'],
        ['中国澳门','+853']
    ]);
const GetCaptchaCode = () => {
    if(isGetttingCaptchaCode.value==false){
        if(phoneNumber.value===''){
        isWarning.value = true;
        warningMsg.value = '请输入手机号'
        }
        else{
            if(phoneNumber.value.length!=11){
                isWarning.value = true;
                warningMsg.value = '手机号码格式不正确，请重新输入'
            }
            else{
                // 发送验证码api

                isWarning.value = false;
                isGetttingCaptchaCode.value = true;
                firstTimeGet.value = false;
                getCaptchaCodeCount.value = 10;
                var i = setInterval(() => {
                    if(getCaptchaCodeCount.value>0)
                        getCaptchaCodeCount.value-=1;
                }, 1000);
                setTimeout(() => {
                    isGetttingCaptchaCode.value = false;
                    clearInterval(i)
                }, 10000);
            }
        }
    }
}
</script>

<style>
.phone-input{
    display: flex;
}

.phone-input .el-input{
    padding-left: 10px;
    width: 220px;
    height: 45px;
    font-size: 15px;
}

.phoneRegion-dropdown{
    width: 80px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px var(--color-gray-dark);
    border-radius: 4px;
    padding-inline: 10px;
}

.el-dropdown-link:hover{
    cursor: pointer;
}

.captchaCode-input{
    margin-top: 25px;
}

.captchaCode-input .el-input{
    width: 300px;
    height: 45px;
    font-size: 15px;
}

.getCaptchaCode{
    width: 80px;
    height: 45px;
    font-size: 13px;
    line-height: 45px;
    position: absolute;
    text-align: right;
    transform: translate(-80px);
    padding-right: 10px;
}

.getCaptchaCode:hover{
    cursor: pointer;
}

.getCaptchaCode-ungetable{
    color: gray;
}

.getCaptchaCode-getable{
    color: var(--color-normal);
}

.getCaptchaCode-getting{
    color: var(--color-gray-darker);
}
</style>