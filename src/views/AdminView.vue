<template>
  <el-container class="h-lvh">
    <el-menu default-active="2" active-text-color="#ffd04b" text-color="#fff" background-color="#545c64"
      :collapse="isCollapse" @open="handleOpen" @close="handleClose" style="background-color: #101726; border: none"
      class="w-64">
      <!-- <div class="h-10 flex justify-center items-center">
        <h5 class="w-fit text-center items-center text-white uppercase">dashboard</h5>
      </div> -->
      <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="w-full h-[50px]" fit="fill" />
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>

        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <setting />
        </el-icon>

        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-header class="flex justify-between items-center">
        <div @click="isCollapse = !isCollapse" class="cursor-pointer">
          <i class="ri-menu-line"></i>
        </div>
        <div class="w-[330px] flex justify-between items-center">
          <el-input style="width: 240px" size="large" placeholder="Search" :suffix-icon="Search" />
          <el-badge :value="3" circle>
            <i class="ri-notification-3-line text-xl"></i>
          </el-badge>

          <el-dropdown trigger="click">
            <el-avatar
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-avatar>
            <template #dropdown>
              <el-dropdown-menu class="w-60">
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="bg-[#F5F7FA]">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
