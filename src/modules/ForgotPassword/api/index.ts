import request from '@/utils/request'
import type {
  ForgotPasswordForm,
  ForgotPasswordResponse,
} from '@/modules/ForgotPassword/models'

export const sendPasswordUpdateLink = (
  data: ForgotPasswordForm
): Promise<ForgotPasswordResponse> =>
  request({
    method: 'POST',
    url: '/login',
    data,
  })
