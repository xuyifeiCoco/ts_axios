export type Methods =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Methods,
  headers?: any,
  data?: any
  params?: any,
  responseType?: XMLHttpRequestResponseType //响应 的数据类型
  // timeout?: number
}

// axios响应
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {

}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

// // 类的公共方法
// export interface Axios {
//   request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

//   get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

//   delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

//   head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

//   options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

//   post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

//   put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

//   patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
// }

// // 混合接口
// export interface AxiosInstance extends Axios {
//   <T = any>(config: AxiosRequestConfig): AxiosPromise<T>

//   <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
// }


