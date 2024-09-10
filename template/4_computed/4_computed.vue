<template>
  <div>
    姓：<input type="text" v-model="fN"><br>
    名：<input type="text" v-model="lN"><br>
    可修改的fullName：{{ fullName }} <button @click="setName">修改名字为烧饼</button><br>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

let fN = ref('')
let lN = ref('')
/**
 * computed 两种写法
 */
// 选项式写法（支持一个对象传入get函数和set函数） 可以通过set修改值
let fullName = computed<string>({
  get() {
    return `${fN.value}-${lN.value}`
  },
  set(val: string) {
    [fN.value, lN.value] = val.split('-')
  }
})
// 函数式写法（只能支持一个getter函数） 只读属性 不能修改
let fullName1 = computed<string>(() => `${fN.value}-${lN.value}`)
const setName = () => {
  fullName.value = '烧-饼'
}


</script>

<style scoped></style>
