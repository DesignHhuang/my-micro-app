<template>
  <div class="sidebar-app">
    <div class="div-logo">
      <img class="logo" src="../assets/logo.png" />
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :router="true"
      :default-active="activeIndex"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>一级菜单</span>
        </template>
        <el-menu-item-group title="项目一">
          <el-menu-item index="1-1">任务一</el-menu-item>
          <el-menu-item index="1-2">任务二</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">项目一</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>项目一</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="/react16/">
        <i class="el-icon-menu"></i>
        <span slot="title">react16</span>
      </el-menu-item>
      <el-menu-item index="/react17/">
        <i class="el-icon-menu"></i>
        <span slot="title">react17</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>导航四</span>
      </el-menu-item>
      <el-menu-item index="/self/">
        <i class="el-icon-s-platform"></i>
        <span slot="title">自身页面</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref, watch, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus";

const handleOpen = (key:any, keyPath:any) => {
  console.log(key, keyPath);
};
const handleClose = (key:any, keyPath:any) => {
  console.log(key, keyPath);
};

const activeIndex = ref("/react16/");
const { currentRoute } = useRouter();
watch(currentRoute, (newVal, oldVal) => {
  activeIndex.value = currentRoute.value.fullPath;
});
</script>