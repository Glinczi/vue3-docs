<template>
  <div class="h-full">
    <!-- <VirtualList :list="list"></VirtualList> -->
    <VirtualListRandom :list="list" />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import VirtualList from '@/components/VirtualList.vue';
import VirtualListRandom from '@/components/VirtualListRandom.vue';
const list = ref<Array<any>>([]);
onBeforeMount(() => {
  
})
</script>

<style lang="scss" scoped></style>