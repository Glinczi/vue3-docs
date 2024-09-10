<template>
  <div class="home-view">
    <!-- 动态组件 -->
    <component :is="tabList[comName]"></component>
    <button @click="changeCom">切换组件</button>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, ref, onMounted, defineComponent } from 'vue'
import ACom from '@/components/ACom.vue'
import BCom from '@/components/BCom.vue'
const comName = ref('ACom')
onMounted(() => {})

type Com = {
  [comName: string]: ReturnType<typeof defineComponent>
}

const tabList = shallowRef<Com>({
  ACom,
  BCom
})

const changeCom = () => {
  if (comName.value == 'ACom') {
    comName.value = 'BCom'
  }else {
    comName.value = 'ACom'
  }
}
</script>

<style lang="less" scoped></style>
