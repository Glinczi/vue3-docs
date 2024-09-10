<template>
  <div class="slot-com">
    这是插槽组件
    <!-- 具名插槽 -->
    <div>
      <slot name="header"></slot>
    </div>
    <!-- 匿名插槽 -->
    <div>
      <slot :text="slotText"></slot>
    </div>
    <div>
      <slot name="contain"></slot>
    </div>
    <div>
      <!-- 作用域插槽 -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let slotText = ref('这是来自子组件的文本')

</script>

<style lang="scss" scoped></style>
