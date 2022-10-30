import request from '@/utils/request'
import { BaseQueryModel, BaseResponseModel } from '@/base-models'

export const getUsers = (params: BaseQueryModel): Promise<BaseResponseModel> =>
  request({
    url: '/users',
    params,
  })
