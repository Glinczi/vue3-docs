<template>
  <div class="home-view">
    <GlobalCom></GlobalCom>
    <RecursiveCom
      v-for="item in recursiveData"
      :key="item.id"
      :recursive-data="item"
    ></RecursiveCom>
  </div>
</template>

<script lang="ts" setup>
import RecursiveCom from '@/components/RecursiveCom.vue'

const recursiveData = ref<Array<RecursiveData>>([
  {
    id: 1,
    nodeName: 'node-1',
    children: [
      {
        id: 1,
        nodeName: 'inside-1'
      }
    ]
  },
  {
    id: 2,
    nodeName: 'node-2',
    children: [
      {
        id: 1,
        nodeName: 'inside-1'
      },
      {
        id: 2,
        nodeName: 'inside-2',
        children: [
          {
            id: 1,
            nodeName: 'ininside-1'
          }
        ]
      }
    ]
  }
])
</script>

<style lang="less" scoped></style>
