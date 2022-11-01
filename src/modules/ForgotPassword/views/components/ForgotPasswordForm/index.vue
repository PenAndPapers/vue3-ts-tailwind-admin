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
      <el-input
        autofocus
        placeholder="john.doe@email.com"
        v-model="form.email"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="w-full"
        @click="handleSendPasswordUpdateLink"
        :loading="isProcessing"
        >Send update password link</el-button
      >
    </el-form-item>
  </el-form>
  <el-divider class="my-3 border-t border-t-gray-200" />
  <p class="text-center">
    <router-link class="text-blue-600" :to="{ name: 'Login' }"
      >Back</router-link
    >
  </p>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useForgotPasswordStore } from '@/modules/ForgotPassword/store'
import { ForgotPasswordFormRules } from '@/modules/ForgotPassword/views/components/ForgotPasswordForm/ForgotPasswordFormRules'

const forgotPasswordStore = useForgotPasswordStore()
const isProcessing = computed(() => forgotPasswordStore._isProcessing)

const rules = reactive(ForgotPasswordFormRules as FormRules)
const formRef = ref({} as FormInstance)
const form = reactive({
  email: '',
})

const handleSendPasswordUpdateLink = async () => {
  const isFormValid = await formRef.value.validate((valid) => valid)
  if (isFormValid) forgotPasswordStore.sendPasswordUpdateLink(form)
}
</script>

<style scoped></style>
