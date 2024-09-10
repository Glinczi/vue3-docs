<template>
  <div>
    <h5>ref</h5>
    <p>{{ person }}</p>
    <button @click="changeRef">改变</button>
    <div ref="dom">我是DOM</div>
  </div>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
import type { Ref } from 'vue'

/**
 * ref 用来包裹响应式对象
 */
interface Person {
  name: string
}
// 写法
const person = ref<Person>({ name: 'John' })
const person2: Ref<Person> = ref({ name: 'John' })

/**
 * isRef 用来判断是否是 ref 类型
 */

/**
 * shallowRef 浅层次的响应
 * 不能和ref混写 修改ref的时候会影响shallowRef
 */

/**
 * triggerRef 强制更新页面DOM
 */

/**
 * customRef 自定义响应式
 */
const MyRef = <T,>(value: T) => {
  customRef((track, trigger) => {
    return {
      get() {
        track() // 收集
        return value
      },
      set(newVal) {
        value = newVal
        trigger() // 更新
      }
    }
  })
}

const changeRef = () => {
  person.value.name = 'Jack'
  console.log(dom.value)
}

/**
 * ref 也可以获取 DOM
 */
const dom = ref<HTMLDivElement>()
</script>

<style scoped></style>
