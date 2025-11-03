<template>
    <el-form class="loginBox-form">
        <div class="username-input">
            <el-input v-model="username" placeholder="用户名/邮箱/手机号"></el-input>
        </div>
        <div class="password-input">
            <el-input v-model="password" type="password" placeholder="请输入登录密码"></el-input>
            <span class="forgetpassword">忘记密码</span>
        </div>
        <div class="warningMessage-box" :class="{ 'warning-visible': isWarning, 'warning-hidden': !isWarning }">
            <svg t="1761703479550" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2999" width="16" height="16">
                <path
                    d="M997.12 771.968L623.488 141.952C561.856 37.952 462.08 38.08 400.512 141.952L27.008 771.968C-34.624 875.968 12.8 960 132.928 960h758.208c119.808 0 167.552-84.16 105.92-188.032z m-421.248-130.56v174.656c0 4.032-2.24 8.192-6.848 11.328a29.824 29.824 0 0 1-16.512 4.608H471.36a29.696 29.696 0 0 1-16.512-4.608C450.24 824.256 448 820.096 448 816v-175.936l0.512-112.064c0-4.096 2.24-8.064 6.848-11.2a29.248 29.248 0 0 1 16.384-4.608L552.512 512a28.608 28.608 0 0 1 16.64 4.544c4.608 3.072 6.848 7.232 6.848 11.392l-0.128 113.472zM576 413.12c0 8.96-2.24 17.792-6.848 24.64-4.48 6.848-10.56 10.24-16.512 10.24h-81.28c-5.952 0-11.904-3.392-16.512-10.24A44.16 44.16 0 0 1 448 413.12v-58.304c0-8.96 2.24-17.92 6.848-24.576 4.608-6.912 10.56-10.24 16.512-10.24h81.28c5.952 0 12.032 3.328 16.512 10.24A43.904 43.904 0 0 1 576 354.816v58.24z"
                    fill="#ea9518" p-id="3000"></path>
            </svg>
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
    <ConfirmBox @CheckConfirm="ConfirmHandle" v-show="isConfirming" />
</template>
<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { findUserByUsername } from '@/apis/api';
import dividline from './dividline.vue';
import { ref } from 'vue';
import ConfirmBox from './ConfirmBox.vue';

const router = useRouter();
const userStore = useUserStore();

const username = ref('');
const password = ref('');
const confirmed = ref(false);
const isConfirming = ref(false);
const isWarning = ref(false);
const warningMsg = ref('');
const isLoading = ref(false);
const ConfirmHandle = (agreed) => {
    isConfirming.value = false;
    confirmed.value = agreed;
    if (agreed)
        LoginHandle();
}

function generateToken(username) {
    var token = username + Date.now().toString();
    console.log(token);
    return token;
}

function LoginCheck(username, password) {
    let ret = 0;
    findUserByUsername(username)
        .then(res => {
            var truePassword;
            truePassword = res.password;
            if (truePassword === password) {
                var token = generateToken(username)
                userStore.login(username, token);
                router.push('/home')
            }
            else {
                warningMsg.value = '用户名或密码不正确'
                isWarning.value = true;
            }
        }).catch(e => {
            console.log(e)
            warningMsg.value = '用户名或密码不正确'
            isWarning.value = true;
        })
    return ret;
}

const LoginHandle = () => {
    if (username.value === '') {
        isWarning.value = true;
        warningMsg.value = '请输入用户名'
    }
    else {
        if (password.value === '') {
            warningMsg.value = '请输入密码'
            isWarning.value = true;
        }
        else {
            if (confirmed.value === true) {
                isWarning.value = false;
                isLoading.value = true;
                setTimeout(() => {
                    isLoading.value = false;
                    LoginCheck(username.value, password.value);
                }, 1000)
            }
            else {
                isConfirming.value = true;
            }
        }
    }
}
</script>

<style>
.loginBox-form {
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.username-input .el-input {
    width: 300px;
    height: 45px;
    font-size: 15px;
}

.password-input {
    margin-top: 25px;
}

.password-input .el-input {
    width: 300px;
    height: 45px;
    font-size: 15px;
}

.forgetpassword {
    width: 120px;
    height: 45px;
    font-size: 13px;
    transform: translate(-120px);
    line-height: 45px;
    position: absolute;
    text-align: right;
    padding-right: 10px;
    color: gray;
}

.forgetpassword:hover {
    cursor: pointer;
}

.warningMessage-box {
    height: 18.5px;
    margin-top: 10px;
    padding-inline: 80px;
    width: 100%;
    display: flex;
    align-items: center;
}

.warning-visible {
    opacity: 1;
}

.warning-hidden {
    opacity: 0;
}

.warningMessage {
    margin-left: 5px;
    font-size: 13px;
    line-height: 18.5px;
    color: gray;
}

.loginBtn-box {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.loginBtn {
    width: 300px;
    height: 45px !important;
    background-color: var(--color-normal) !important;
    color: white !important;
}

.loginBtn:hover {
    background-color: var(--color-darker) !important;
}

.action-box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.action-box span {
    font-size: 13px;
    margin-inline: 10px;
}

.action-box span:hover {
    cursor: pointer;
}

.confirm-check-box {
    width: 100%;
    height: 50px;
}

.confirm-check-box label {
    padding-inline: 70px;
    display: flex;
}

.confirm-checkbox span {
    font-size: 13px;
}

.confirm-checkbox span:hover {
    cursor: default;
}

.confirm-checkbox a:hover {
    cursor: pointer;
}

.el-checkbox__inner {
    border-radius: 50% !important;
}

.el-checkbox__label {
    white-space: normal;
    display: flex;
    width: 350px;
    word-wrap: break-word;
    line-height: 20px;
    margin-top: 20px;
}

.el-checkbox__input.is-checked+.el-checkbox__label {
    color: var(--el-checkbox-text-color) !important;
}
</style>