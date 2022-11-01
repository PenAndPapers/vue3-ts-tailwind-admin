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
        >Register</el-button
      >
    </el-form-item>
  </el-form>
  <el-divider class="my-3 border-t border-t-gray-200" />
  <p class="text-center">
    Already have an account?&nbsp;
    <router-link class="text-blue-600" :to="{ name: 'Login' }"
      >Login</router-link
    >
  </p>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRegisterStore } from '@/modules/Register/store'
import { RegisterFormRules } from '@/modules/Register/views/components/RegisterForm/RegisterFormRules'

const registerStore = useRegisterStore()
const isProcessing = computed(() => registerStore._isProcessing)

const rules = reactive(RegisterFormRules as FormRules)
const formRef = ref({} as FormInstance)
const form = reactive({
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
})

const handleLogin = async () => {
  const isFormValid = await formRef.value.validate((valid) => valid)
  if (isFormValid) {
    registerStore.register(form)
    handleReset()
  }
}

const handleReset = () => {
  formRef.value.resetFields()
}
</script>

<style scoped></style>
