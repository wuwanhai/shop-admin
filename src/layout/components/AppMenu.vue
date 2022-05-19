<template>
  <el-row class="tac">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="/order" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>订单</span>
          </template>
          <el-menu-item index="/order/order_list">
            <el-icon><icon-menu /></el-icon>
            <span>列表</span>
          </el-menu-item>
          <el-menu-item index="/order/order_offline">
            <el-icon><icon-menu /></el-icon>
            <span>结束订单</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/permission" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>媒体</span>
          </template>
          <el-menu-item index="/permission/permission_role">
            <el-icon><icon-menu /></el-icon>
            <span>角色</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/product" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>商品</span>
          </template>

          <el-menu-item index="/product/product_attr">
            <el-icon><icon-menu /></el-icon>
            <span>商品规则</span>
          </el-menu-item>
          <el-menu-item index="/product/product_classify">
            <el-icon><icon-menu /></el-icon>
            <span>商品类别</span>
          </el-menu-item>
          <el-menu-item index="/product/product_list">
            <el-icon><icon-menu /></el-icon>
            <span>商品列表</span>
          </el-menu-item>
          <el-menu-item index="/product/product_reply">
            <el-icon><icon-menu /></el-icon>
            <span>商品评价</span>
          </el-menu-item>


        </el-sub-menu>

        <el-sub-menu index="/permission" >
          <template #title>
            <i class="el-icon-location"></i>
            <span>权限</span>
          </template>
          <el-menu-item index="/permission/permission_role">
            <el-icon><icon-menu /></el-icon>
            <span>角色</span>
          </el-menu-item>
          <el-menu-item index="/permission/permission_admin">
            <el-icon><icon-menu /></el-icon>
            <span>管理员</span>
          </el-menu-item>
          <el-menu-item index="/permission/permission_rule">
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
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
