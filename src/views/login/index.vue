<template>
  <h1>{{msg}}</h1>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getLoginInfo} from '@/api/common'

const msg = ref('我是登录')

onMounted(() => {
  getLoginInfo().then(res=>{
    console.log(res,'1111111111')
  })
})

</script>
