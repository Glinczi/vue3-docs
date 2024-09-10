<template>
  <div>
    <div>年龄：{{ age }}</div>
    <button @click="changeAge">增加一岁</button>
  </div>
</template>

<script setup lang="ts">
import { toRef, toRefs, toRaw, reactive } from 'vue'
import type { Ref } from 'vue'

/**
 * toRef
 * 使用场景：reactive对象中的值被结构出来后丢失了响应式 这个时候需要用toRef对其处理成响应式数据
 * 只能修改响应式对象的值 非响应式视图没有变化
 */

const userInfo = reactive({
  name: 'Xz',
  age: 18,
  sex: '男'
})

let age = toRef(userInfo, 'age')

const changeAge = () => {
  age.value += 1
  console.log(age)
}

/**
 * toRefs
 * 批量创建ref对象 方便解构的时候使用
 */

// let { sex, name } = toRefs(userInfo)
// console.log(sex, name)

type RefsObj<T> = {
  [item in keyof T]: Ref<T[item]>
}

// 手写toRefs
const MyToRefs = <T extends Object>(object: T) => {
  const refsObj: RefsObj<T> = {} as RefsObj<T>
  for (let key in object) {
    refsObj[key] = toRef(object, key)
  }
  return refsObj
}

let { sex, name } = MyToRefs(userInfo)
console.log(sex, name)

/**
 * toRaw
 * 将响应式对象转换成普通对象
 */
</script>

<style scoped></style>
