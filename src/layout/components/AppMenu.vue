<template>
  <el-row class="tac">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
          :collapse="$store.state.isCollapse"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="/">
          <el-icon><icon-menu /></el-icon>
<!--           <i class="el-icon-menu" />-->
           <template #title>
             首页
           </template>
        </el-menu-item>
        <el-sub-menu index="/order" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>订单</span>
          </template>
          <el-menu-item index="/order/list">

            <el-icon><icon-menu /></el-icon>
            <span>列表</span>
          </el-menu-item>
          <el-menu-item index="/order/offline">
            <el-icon><icon-menu /></el-icon>
            <span>结束订单</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/permission" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>媒体</span>
          </template>
          <el-menu-item index="/permission/role">
            <el-icon><icon-menu /></el-icon>
            <span>角色</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/product" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>商品</span>
          </template>

          <el-menu-item index="/product/attr">
            <el-icon><icon-menu /></el-icon>
            <span>商品规则</span>
          </el-menu-item>
          <el-menu-item index="/product/classify">
            <el-icon><icon-menu /></el-icon>
            <span>商品类别</span>
          </el-menu-item>
          <el-menu-item index="/product/list">
            <el-icon><icon-menu /></el-icon>
            <span>商品列表</span>
          </el-menu-item>
          <el-menu-item index="/product/reply">
            <el-icon><icon-menu /></el-icon>
            <span>商品评价</span>
          </el-menu-item>


        </el-sub-menu>

        <el-sub-menu index="/permission" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>权限</span>
          </template>
          <el-menu-item index="/permission/role">
            <el-icon><icon-menu /></el-icon>
            <span>角色</span>
          </el-menu-item>
          <el-menu-item index="/permission/admin">
            <el-icon><icon-menu /></el-icon>
            <span>管理员</span>
          </el-menu-item>
          <el-menu-item index="/permission/rule">
            <el-icon><icon-menu /></el-icon>
            <span>规则</span>
          </el-menu-item>
        </el-sub-menu>

      </el-menu>
<!--    </el-col>-->
  </el-row>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
import {ref} from "vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
