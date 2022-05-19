<template>
   <ToggleSidebar/>
   <Breadcrumb />

   <div class="r-side">
     <FullScreen />
   </div>

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

<style scoped lang="scss">
.r-side {
   position: absolute;
   right: 5%;
}
</style>
