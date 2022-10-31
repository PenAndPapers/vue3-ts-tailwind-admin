import request from '@/utils/request'
import type { BaseQueryModel, BaseResponseModel } from '@/base/models'

export const getUsers = (params: BaseQueryModel): Promise<BaseResponseModel> =>
  request({
    url: '/users',
    params,
  })
