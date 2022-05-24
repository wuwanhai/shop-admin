<template>
  <div class="container">
    <div class="tag">
      <div>
        管理员列表
      </div>
    </div>
  <div class="main">
    <div class="header">
      <el-form :inline="true" :model="listParams" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="listParams.name" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="listParams.status" placeholder="Approved by" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="body">
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="account" label="account" width="180" />
        <el-table-column prop="id" label="id" width="180" />
        <el-table-column prop="pwd" label="pwd" width="180" />
        <el-table-column prop="head_pic" label="head_pic" width="180" />
        <el-table-column prop="real_name" label="real_name" width="180" />
        <el-table-column prop="status" label="status" width="180" />
      </el-table>
    </div>
    <div class="footer">
      <el-pagination
          v-model:currentPage="listParams.page"
          v-model:page-size="listParams.limit"
          :page-sizes="[5, 10, 15, 20]"
          small="small"
          :disabled="disabled"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
   import {getAdmins} from "@/api/admin";
   import type {Admin, IListParams} from "@/api/tyeps/admin";

   const listParams = reactive({
     page: 1,
     limit: 10,
     name: '',
     rules: '',
     status: '' as IListParams['status'],  // 使用的类型不匹配，使用 as 套用
   })

   const currentPage = ref(4)
   const listCount = ref(0)
   const pageSize = ref(100)
   const disabled = ref(false)

   const list = ref<Admin[]>([])

   const loadList = async () => {
     const data = await getAdmins(listParams)
     list.value = data.list
     listCount.value = data.count
   }

   onMounted(() => {
     loadList()
   })

   const handleQuery = async () => {
      await loadList()
   }

   const handleSizeChange = (size: number) => {
      listParams.limit = size
      listParams.page = 1
      loadList()
   }
   const handleCurrentChange = (page: number) => {
      listParams.page = page
     debugger
     loadList()
   }
</script>

<style scoped lang="scss">
   .container {
     width: 100%;
     text-align: left;
     overflow: hidden;
     .tag {
       padding: 0 3% ;
       height: 3rem;
       line-height: 3rem;
       margin: 2% 5px;
       background: white;
     }
     .main {
       width: 100%;
       height: auto;
       background: white;
       padding: 3%;
        .header {

        }
        .body {
           //border-top: 1px solid gray;
        }
     }
     .footer {
       margin-top: 25px;
     }
   }
</style>
