<template>
   <h1>{{count}}</h1>
   <h2>{{props.msg}}</h2>
   <h3>{{props.obj.name}}</h3>
   <h3>{{props.obj.age}}</h3>
   <Foot  msg="我是陈奕迅"/>
   <button @click="increment">click</button>
</template>
<script lang="tsx" setup>
import {PropType, ref} from "vue";
import Foot from "./foot";

// 接口类型

interface User {
  name: '',
  age: '',
}

const props = defineProps({
  msg: {
    type: String
  },
  obj:{
    type: Object as PropType<User>
  }
})

const count = ref(0)
const increment = () => {
  // props.msg
  count.value ++
}
</script>
