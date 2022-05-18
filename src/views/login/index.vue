<template>
  <h1>{{msg}}</h1>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getBlogInfo} from '@/api/common'
import type {IgetBlogInfo} from "@/api/tyeps/common";

const msg = ref('我是登录')

// 用于限制定义的值
const status = ref<IgetBlogInfo['status']>(200)

onMounted(() => {
  getBlogInfo().then(res=>{
    // debugger
    // if (res.code === status) {
        // favarite 不存在于预定义的类型中，所以会提示错误
       // console.log(res.favarite)
    // }
    // console.log(res.data,'1111111111')
  })
})

</script>
