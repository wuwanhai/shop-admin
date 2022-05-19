<template>
  <el-icon :size="20" >
    <i @click="handleCollapse">
      <Expand v-if="$store.state.isCollapse"/>
      <Fold v-else/>
    </i>
  </el-icon>
</template>

<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from '@/store'
// import {computed} from "vue";

const store = useStore()
const handleCollapse = () => {
   store.commit('setIsCollapse',!store.state.isCollapse)
}

</script>

<style scoped>

</style>
