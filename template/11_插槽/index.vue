<template>
  <div class="home-view">
    <SlotCom>
      <template #contain>
        这是中间内容
      </template>
      <template #default="{text}">
        这是匿名插槽 <span class="text-purple">{{ text }}</span>
      </template>
      <!-- 作用域插槽中，子组件传递值的结构和使用 -->
      <template #[slotName]>
        {{ slotName == 'header'? '这是头部' : '这是底部' }}
      </template>
    </SlotCom>
    <button @click="changeSlotName">切换展示的插槽</button>
  </div>
</template>

<script lang="ts" setup>
import SlotCom from '@/components/SlotCom.vue';
import { ref } from 'vue';
let slotName = ref('header')
const changeSlotName = () => {
  slotName.value == 'header' ? slotName.value = 'footer' : slotName.value = 'header'
}
</script>

<style lang="less" scoped></style>
