<template>
  <h1>{{msg}}</h1>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getBlogInfo} from '@/api/common'
import {IgetBlogInfo} from "@/api/tyeps/common";

const msg = ref('我是登录')

// 用于限制定义的值
const status = ref<IgetBlogInfo['status']>(200)

onMounted(() => {
  getBlogInfo().then(res=>{
    debugger
    if (res.code === status) {

    }
    // console.log(res.data,'1111111111')
  })
})

</script>
