<template>
  <div class="bkg">
    <div class="main">
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <h1>登录</h1>
        <el-form-item prop="name" label="用户名">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item prop="captcha" label="验证码">
          <el-input v-model="form.captcha" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="large" :loading="loading" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from 'vue'
import type {FormInstance, FormItemRule, FormRules} from "element-plus";
import {getCaptcha, login} from "@/api/common";
import {useRouter} from "vue-router";
import {IFormRule} from "@/types/element-plus";
import {useStore} from "@/store";

const store = useStore()
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const form = reactive({
  name: '132',
  password: '132456',
  captcha: '132',
})

const captchaSrc = ref('')

const loading = ref(false)

// 规则
// TS 提示规则
const rules = ref<IFormRule>({
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

// 加载完
onMounted(() => {

})


const submitForm = async (formEl: FormInstance | undefined) => {

  // 如果表单验证不通过，拒绝
  if (!formEl) return

  await formEl.validate((valid, fields) => {
    if (valid) {
      // 显示 loading
      loading.value = true
      // 登录
      login(form).then(res=> {
        // console.log(store.state.count)
        // debugger
        store.commit('setUser',{
          // 合并 token 对象
          ...res.user_info,token:res.token
        })
        // 不需要保持历史记录，所以rplace
        router.replace({
          name:'home'
        })
      })
          .finally(() =>{
            // 执行结束后，处理 loading
            loading.value = false
          })

    } else {
      console.log('error submit!', fields)
    }
  })
}
// 获取验证码，需后端配合
const loadCaptcha = async () => {
  const data = await getCaptcha()
  // 将图片数据转化成 src
  captchaSrc.value = URL.createObjectURL(data)
}
</script>
<style lang="scss">
.bkg {
   width: 100%;
   height: 100vh;
   background: #2c3e50;
   position: fixed;
  top: 0;
  .main {
    width: 500px;
    text-align: center;
    height: 40vh;
    background: white;
    border: 1px solid black;
    padding: 0.5% 3%;
    border-radius: 1rem;
    margin: 10% auto;
    .el-form-item__content {
      justify-content: center;
    }
    h1 {
      margin: 20% 0 10% 0;
    }
  }

}
</style>
0
