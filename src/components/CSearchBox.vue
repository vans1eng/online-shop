<template>
  <div class="search-box">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link search-title">
        {{ searchMode }}
        <svg t="1761665964900" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="1315" width="20" height="20">
          <path d="M185.884 327.55 146.3 367.133 512.021 732.779 877.7 367.133 838.117 327.55 511.997 653.676Z"
            p-id="1316"></path>
        </svg>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="notSelectedMode">{{ notSelectedMode }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span class="searchBox-dividline">|</span>
    <input type="text" class="searchBox-input" />
    <el-button class="searchBox-searchBtn">搜索</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const searchMode = ref('宝贝');
const notSelectedMode = ref('店铺');
const handleCommand = (command) => {
  searchMode.value = command;
  notSelectedMode.value = (command == '店铺') ? '宝贝' : '店铺'
}
</script>

<style scoped>
.search-box {
  min-width: 400px;
  width: 1000px;
  height: 40px;
  border-radius: 10px;
  border: solid 2px var(--color-normal);
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.search-title {
  display: flex;
  height: 40px;
  line-height: 40px;
  color: var(--color-yellow-darker);
  align-items: center;
}

.el-dropdown * {
  outline: none;
}

.searchBox-dividline {
  margin-inline: 8px;
  font-size: 20px;
}

.searchBox-input {
  border: none;
  outline: none;
  font-size: 15px;
  flex: 1 1 auto;
  /* 占据剩余空间并可缩放 */
  min-width: 0;
  /* 避免内容导致溢出 */
  padding-right: 10px;
}

.el-dropdown-menu__item {
  color: var(--color-normal);
}

.searchBox-searchBtn {
  margin-right: 5px;
  width: 70px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: var(--color-normal);
}
</style>