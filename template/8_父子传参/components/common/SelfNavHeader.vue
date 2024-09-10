<template>
  <div class="self-nav-header flex justify-between items-center">
    <div></div>
    <div>{{ defaultProps.title }}</div>
    <button @click="changeTheme">切换主题</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
/**
 * 子组件如何获取父组件传递的参数
 */

// 1. 不带默认值非 ts 的写法

// defineProps({
//   title: {
//     default: '',
//     type: string
//   },
//   data: Array
// })

// 2. 不带默认值 ts 写法
type Props = {
  title?: string
  theme?: string
}

// defineProps<Props>()

// 3. 带默认值的props
// withDefaults 是个函数也是无须引入开箱即用接受一个props函数,第二个参数是一个对象设置默认值
const defaultProps = withDefaults(defineProps<Props>(), {
  title: '这是默认的标题',
  theme: 'light'
})

/**
 * 定义emit事件
 * defineEmits
 */
const setThemeEmit = defineEmits<{ (e: 'set-theme', name: string): void }>()
const changeTheme = () => {
  if (defaultProps.theme === 'dark') setThemeEmit('set-theme', 'light')
  if (defaultProps.theme === 'light') setThemeEmit('set-theme', 'dark')
}

/**
 * 通过 defineExpose 暴露子组件的值给父组件
 */
const wordsfromchild = ref('这是子组件中的值')
defineExpose({
  wordsfromchild
})

</script>

<style lang="less" scoped></style>
