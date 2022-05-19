<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
<!--        左侧-->
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
<!--            顶部-->
           <AppHeader />
        </el-header>
        <el-main>
<!--          子路由-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.common-layout {
  .el-header,
  .el-footer,
  .el-main,
  .el-aside {
    display: flex;
    //justify-content: center;
    //align-items: center;
  }

  .el-header,
  .el-footer {
    //justify-content: center;
    align-items: center;
    //background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    //text-align: center;
  }

  .el-aside {
    background-color: var(--el-color-primary-light-8);
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-main {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-text-color-primary);
    text-align: center;

    height: 150px;
  }
  .el-container {
    height: 100vh;
  }
}
</style>
<script setup lang="ts">
import AppMenu from "./components/AppMenu.vue";
import AppHeader from "./AppHeader/index.vue";

</script>
