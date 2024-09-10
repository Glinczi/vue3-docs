<template>
  <div
    class="watch-effect-container h-100vh w-100vw"
    :class="{
      'bg-dark': theme === 'dark',
      'text-light': theme === 'dark',
      'bg-light': theme === 'light',
      'text-dark': theme === 'light'
    }"
  >
    <SelfNavHeader
      ref="navHeaderRef"
      title="这是传递过去的标题"
      :theme="theme"
      @set-theme="setTheme"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import SelfNavHeader from '@/components/common/SelfNavHeader.vue'

const navHeaderRef = ref<InstanceType<typeof SelfNavHeader>>()
/**
 * 父子传参
 */
let theme = ref('light')

const setTheme = (themeValue: string) => {
  theme.value = themeValue
}

/**
 * 父组件读取子组件的值
 */
onMounted(() => {
  const { wordsfromchild } = navHeaderRef.value as { wordsfromchild: string }
  console.log('子组件中读取的值', wordsfromchild);
})
</script>

<style lang="less" scoped></style>
