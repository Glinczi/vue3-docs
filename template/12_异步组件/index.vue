<template>
  <div class="home-view">
    <AsyncCom />
    <Suspense>
      <template #default>
        <AsyncCom />
      </template>
      <template #fallback>
        加载中....
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import LoadingCom from '@/components/LoadingCom.vue'
import ErrorCom from '@/components/ErrorCom.vue'
const AsyncCom = defineAsyncComponent({
  loader: () => import('@/components/AsyncCom.vue'),
  loadingComponent: LoadingCom,
  delay: 200,
  errorComponent: ErrorCom,
  timeout: 100
})
</script>

<style lang="less" scoped></style>
