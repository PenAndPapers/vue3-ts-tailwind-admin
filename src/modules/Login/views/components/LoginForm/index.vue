<template>
  <el-form
    class="4"
    ref="formRef"
    label-position="top"
    require-asterisk-position="right"
    :model="form"
    :rules="rules"
    :status-icon="false"
  >
    <el-form-item label="Email" prop="email" class="mb-6">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Password" prop="password" class="mb-8">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="w-full"
        @click="handleLogin"
        :loading="isProcessing"
        >Login</el-button
      >
    </el-form-item>
  </el-form>
  <p class="text-center">
    <router-link class="text-blue-600" :to="{ name: 'ForgotPassword' }"
      >Forgot password?</router-link
    >
  </p>
  <el-divider class="my-3 border-t border-t-gray-200" />
  <p class="text-center">
    Dont have an account?&nbsp;
    <router-link class="text-blue-600" :to="{ name: 'Register' }"
      >Register</router-link
    >
  </p>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useLoginStore } from '@/modules/Login/store'
import { LoginFormRules } from './LoginFormRules'

const loginStore = useLoginStore()
const isProcessing = computed(() => loginStore._isProcessing)

const rules = reactive(LoginFormRules as FormRules)
const formRef = ref({} as FormInstance)
const form = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
})

const handleLogin = async () => {
  const isFormValid = await formRef.value.validate((valid) => valid)
  if (isFormValid) {
    loginStore.login(form)
    handleReset()
  }
}

const handleReset = () => {
  formRef.value.resetFields()
}
</script>

<style scoped></style>
