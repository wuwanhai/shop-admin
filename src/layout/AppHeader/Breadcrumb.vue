<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in routes" :to="{ path: item.path }" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
   import {useRouter} from "vue-router";
   import {computed} from "vue";

   const router = useRouter()

   const routes = computed(()=> {
     // filter 过滤掉没值的
     // router.currentRoute.value.matched 是当前路由的相关信息
     return router.currentRoute.value.matched.filter(item => item.meta.title)
   })
</script>

<style scoped>

</style>
