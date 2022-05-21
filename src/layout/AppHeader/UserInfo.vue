<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{$store.state.user?.account}}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="logoutHandle">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import {ElMessage, ElMessageBox} from "element-plus";
import {useRouter} from "vue-router";
import {logout} from "@/api/common";
import {store} from "@/store";

const router = useRouter()
const logoutHandle = () => {
  ElMessageBox.confirm(
      '是否退出？',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(async () => {

        // 调用退出接口
        await logout()

        await ElMessage({
          type: 'success',
          message: '退出成功',
        })

        store.commit('setUser',null)

        // 退出
        await router.push({
          name: 'login'
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        })
      })

   }
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
