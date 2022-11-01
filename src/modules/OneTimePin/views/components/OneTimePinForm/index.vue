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
    <el-form-item label="OTP" prop="otp" class="mb-6">
      <el-input
        placeholder="Enter otp"
        minlength="8"
        maxlength="8"
        v-model="form.otp"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="w-full"
        @click="handleVerifyOtp"
        :loading="isProcessing"
        >Verify</el-button
      >
    </el-form-item>
  </el-form>
  <el-button type="Primary" class="text-left" link>Resend</el-button>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useOneTimePinStore } from '@/modules/OneTimePin/store'
import { OneTimePinFormRules } from '@/modules/OneTimePin/views/components/OneTimePinForm/OneTimePinFormRules'

const oneTimePinStore = useOneTimePinStore()
const isProcessing = computed(() => oneTimePinStore._isProcessing)

const rules = reactive(OneTimePinFormRules as FormRules)
const formRef = ref({} as FormInstance)
const form = reactive({
  otp: '',
})

const handleVerifyOtp = async () => {
  const isFormValid = await formRef.value.validate((valid) => valid)
  if (isFormValid) oneTimePinStore.verifyOtp(form)
}
</script>

<style scoped></style>
