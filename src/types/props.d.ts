// 组件传参相关类型声明
type RecursiveData = {
  id: number
  nodeName: string
  children?: Array<RecursiveData> | []
}