export class BaseModelModel {
  id: number | null = null
  createdDate: number | string | null = null
  createdTime: number | string | null = null
  createdBy: string | null = null
  updatedDate: number | string | null = null
  updatedTime: number | string | null = null
}

export class BaseQueryModel {
  page?: number | string | null = null
  search?: string | null = null
  sortBy?: string | null = null
  sortDirection?: string | null = null
}

export class BaseResponseModel {
  data?: unknown
  error?: unknown
}