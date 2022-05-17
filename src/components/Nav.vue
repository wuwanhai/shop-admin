<template>
<h1>{{count}}</h1>
  <h2>{{obj.name}}</h2>
  <h2>{{obj.age}}</h2>
  <h2 ref="domTree"></h2>
</template>

<script lang="ts">

import {defineComponent, PropType, ref} from "vue";
interface User {
  name: string,
  age: number,
}
export default defineComponent({
  name: "Nav",
  props: {
    // 如果要指定更具体的 props 类型，使用 as propType 语法，结合接口模板
    obj: {
      type: Object as PropType<User>
    }
  },
  setup: (props) => {
    const count = ref(0)

    return { count,props}
  }
})
</script>

<style scoped>

</style>
