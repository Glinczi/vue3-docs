<script lang="ts" setup>
/**
 * watchEffect
 * 立即执行传入一个函数 同时响应式追踪其依赖 并在其依赖变更时重新运行该函数
 * 用到几个监听几个 而且是非惰性 会默认调用一次（监听多个值，如果多个值同时变化，也执行一次）
 */

import { watchEffect, ref } from 'vue'

// 基本使用
let message = ref('这是一段消息')
let prefix = ref('这是原始的数据')
let sumMsg = ref('')
const changeMessage = () => {
  message.value = 'Message消息被修改了'
  prefix.value = '这是被修改的数据'
}
watchEffect(()=>{
  console.log('watchEffect 执行了');
  sumMsg.value = `${prefix.value} ${message.value}`
})

</script>

<template>
  <div class="watch-effect-container">
    <div>{{ sumMsg }}</div>
    <button @click="changeMessage">修改message的值</button>
  </div>
</template>

<style lang="less" scoped></style>
