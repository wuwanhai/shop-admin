<template>
   <h1>{{msg}}</h1>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/store";
import User from '@/api/user'
const msg = ref('我是首页')

// 使用自定义的  use store
const store = useStore()
console.log(store.state.count)
console.log(User)
</script>
<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
