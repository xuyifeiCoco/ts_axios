import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  xhr(config) //测试
}
export default axios
