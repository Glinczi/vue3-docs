<template>
  <div class="home-view">
    <button @click.self="changeTestRef">改变ref</button>
    <button @click.self="changeReactive">改变reactive</button>
    <button @click.self="changeReactiveFood">改变reactive中的food</button>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, reactive } from 'vue'
/**
 * watch 的用法
 * 第一个参数监听数据源
 * 第二个参数回调 (new,old)
 * 第三个参数是options配置项 比如深度监听，立即调用
 */

// 1 监听ref
let testRef = ref({
  name: 'Xz',
  like: {
    food: true,
    code: true
  }
})
watch(
  testRef,
  (to, from) => {
    console.log('监听ref to', to)
    console.log('监听ref from', from)
  },
  {
    deep: true
  }
)

const changeTestRef = () => {
  testRef.value.like.food = false
  testRef2.value = 3
}

// 2 监听多个ref 需要通过数组包裹

let testRef2 = ref<number>(1)
watch(
  [testRef, testRef2],
  (to, from) => {
    console.log('监听多个ref to', to)
    console.log('监听多个ref from', from)
  },
  { deep: true }
)

// 3 监听Reactive 监听reactive对象 开启或者不开启deep都是一样的

let testReavtive = reactive({
  name: 'Xz',
  like: {
    food: true,
    code: true
  }
})
watch(testReavtive, (to, from) => {
  console.log('监听reactive to', to)
  console.log('监听reactive from', from)
})

const changeReactive = () => {
  testReavtive.like.code = false
}

// 4 监听reactive的某个属性 需要通过回调的形式
watch(
  () => testReavtive.like.food,
  (to, from) => {
    console.log('监听reactive中的 food to', to)
    console.log('监听reactive中的 food from', from)
  }
)

const changeReactiveFood = () => {
  testReavtive.like.food = false
}

// 5 监听多个reactive属性

watch(
  [() => testReavtive.like.food, () => testReavtive.like.code],
  (to, from) => {
    console.log('监听reactive中的 food和code to', to)
    console.log('监听reactive中的 food和code from', from)
  }
)
</script>

<style lang="scss" scoped></style>
