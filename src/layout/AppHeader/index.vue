<template>
    <ToggleSidebar />
   <Breadcrumb />
</template>

<script>
import Breadcrumb from "./Breadcrumb.vue";
import ToggleSidebar from "@/layout/AppHeader/ToggleSidebar.vue";
export default {
  name: "index",
  components: {ToggleSidebar, Breadcrumb}
}
</script>

<style scoped>

</style>
