<template>
  <div class="bkg">
    <div class="main">
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <h1>登录</h1>
        <el-form-item>
          <el-input v-model="form.name" prop="name"/>
        </el-form-item>
        <el-form-item >
          <el-input v-model="form.password" prop="password"/>
        </el-form-item>
        <el-form-item >
          <el-input v-model="form.captcha" prop="captcha"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type {FormInstance, FormRules} from "element-plus";

const ruleFormRef = ref<FormInstance>()
const form = reactive({
  name: '',
  password: '',
  captcha: '',
})
const rules = reactive<FormRules>({
   name:[
     { required: true, message: '请输入用户名', trigger: 'blur' },
   ],
  password:[
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  captcha:[
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],


})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped lang="scss">
.bkg {
   width: 100%;
   height: 100vh;
   background: #2c3e50;
   position: fixed;
  top: 0;

}
   .main {
      width: 500px;
     text-align: center;
     height: 40vh;
     background: white;
     border: 1px solid black;
     padding: 0.5% 3%;
     border-radius: 1rem;
     margin: 10% auto;
     h1 {
       margin: 5% 0;
     }
   }
</style>
0
