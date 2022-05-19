<template>
    <ToggleSidebar />
   <Breadcrumb />
   <FullScreen />
</template>

<script>
import Breadcrumb from "./Breadcrumb.vue";
import ToggleSidebar from "@/layout/AppHeader/ToggleSidebar.vue";
import FullScreen from "@/layout/AppHeader/FullScreen.vue";
export default {
  name: "index",
  components: {FullScreen, ToggleSidebar, Breadcrumb}
}
</script>

<style scoped>

</style>
