<template>
  <el-icon :size="20" >
    <i @click="toggleFullScreen">
      <FullScreen/>
    </i>
  </el-icon>
</template>

<script setup lang="ts">

import { FullScreen } from '@element-plus/icons-vue'

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

</script>

<style scoped>

</style>
