<template>
   <ToggleSidebar/>
   <Breadcrumb />

   <div class="r-side">
     <FullScreen />
     <UserInfo />
   </div>

</template>

<script>
import Breadcrumb from "./Breadcrumb.vue";
import ToggleSidebar from "@/layout/AppHeader/ToggleSidebar.vue";
import FullScreen from "@/layout/AppHeader/FullScreen.vue";
import UserInfo from "@/layout/AppHeader/UserInfo.vue";
export default {
  name: "index",
  components: {UserInfo, FullScreen, ToggleSidebar, Breadcrumb}
}
</script>

<style scoped lang="scss">
.r-side {
   position: absolute;
   right: 1%;
}
</style>
