<template>
  <el-form
    ref="accountSecurityFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="180px"
    status-icon
    label-position="left"
    require-asterisk-position="right"
  >
    <h2 class="text-lg mb-4">Password</h2>
    <el-form-item label="Current password" prop="currentPassword">
      <el-input
        type="password"
        v-model="ruleForm.currentPassword"
        show-password
      />
    </el-form-item>
    <el-form-item label="Confirm password" prop="confirmPassword">
      <el-input
        type="password"
        v-model="ruleForm.confirmPassword"
        show-password
      />
    </el-form-item>
    <el-divider />
    <h2 class="text-lg mb-4">One time pin</h2>
    <el-form-item label="Email">
      <el-switch v-model="ruleForm.otpEmail" />
    </el-form-item>
    <el-form-item label="Mobile">
      <el-switch v-model="ruleForm.otpMobile" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleUpdateSecurity(accountSecurityFormRef)"
        >Create</el-button
      >
      <el-button @click="hadndleResetForm(accountSecurityFormRef)"
        >Reset</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const accountSecurityFormRef = ref<FormInstance>()
const ruleForm = reactive({
  currentPassword: 'P@ssw0rd123',
  confirmPassword: '',
  otpEmail: true,
  otpMobile: true,
})

const rules = reactive<FormRules>({
  currentPassword: [
    {
      required: true,
      message: 'Current password is required',
      trigger: 'blur',
    },
    { min: 8, max: 20, message: 'Length should be 8 to 20', trigger: 'blur' },
  ],
  confirmPassword: [
    {
      required: true,
      message: 'Confirm password is required',
      trigger: 'blur',
    },
    { min: 8, max: 20, message: 'Length should be 8 to 20', trigger: 'blur' },
  ],
})

const handleUpdateSecurity = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const hadndleResetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped></style>
