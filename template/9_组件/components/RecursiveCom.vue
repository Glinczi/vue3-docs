<template>
  <div class="recursive-com">
    {{ recursiveData?.nodeName }}
    <div class="p-l-20px" v-for="item in recursiveData?.children" :key="item.id">
      <RecursiveCom :recursive-data="item" v-if="recursiveData?.children?.length"></RecursiveCom>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  recursiveData: RecursiveData
}
withDefaults(defineProps<Props>(), {
  recursiveData: undefined
})
</script>

<style lang="scss" scoped></style>
