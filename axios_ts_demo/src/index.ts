import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  xhr(config) //密码存储
}
export default axios
