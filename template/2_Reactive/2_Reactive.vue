<template>
  <div></div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'

/**
 * reactive 和 ref 之间的区别
 * 1. ref 支持所有类型reacteive, 只支持 Object Array Map Set
 * 2. ref 取值和赋值都需要加 .value, reactive 不需要
 */

/**
 * reactive 是通过proxy代理的 不能直接复制 会破坏响应式
 * 解决办法
 * 1. 通过数组方法修改
 * 2. 把数组放在一个对象里面 const list = reactive({showList: [1, 2, 3]})
 */

/**
 * readonly
 * 把reactive值变成只读的
 */

/**
 * shallowReactive
 * 浅层的响应式
 * shallowReactive 和 reactive 不能混用
 */
</script>

<style scoped></style>
