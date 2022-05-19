<template>
  <el-icon :size="20" >
    <i @click="$store.commit('setIsCollapse',!$store.state.isCollapse)">
      <Expand v-if="$store.state.isCollapse"/>
      <Fold v-else/>
    </i>
  </el-icon>
</template>

<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
</script>

<style scoped>

</style>
