<template>
  <!-- 定高虚拟滚动列表 -->
  <div class="virtual-list mx-auto w-500px h-500px">
    <div class="virtual-list-container h-full w-full overflow-y-auto" @scroll="handleScroll($event)">
      <div ref="virtualRealList" class="virtual-real-list" :style="{ height: containerHeight + 'px' }">
        <div class="virtual-list-item text-center border border-amber border-solid"
          :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }" v-for="item in currentList" :key="item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const props = defineProps<{
  list: any[];
}>()
let bufferNum = 3 // 缓存区
let itemHeight = ref(50)
let startIndex = ref(0)
let endIndex = ref(0 + 10)
let virtualRealList = ref<HTMLDivElement>()
const dataLengthHeight = props.list.length * itemHeight.value
let containerHeight = ref(dataLengthHeight)
// 当前展示的列表项数据有哪些
let currentList = ref<Array<any>>([])

const handleScroll = (event: Event) => {
  let e = event.target as HTMLElement
  const scrollTop = e.scrollTop
  // 计算实际展示列表的statIndex
  startIndex.value = Math.floor(scrollTop / itemHeight.value)
  const startIndexWithBuffer = startIndex.value - bufferNum < 0 ? 0 : startIndex.value - bufferNum
  endIndex.value = startIndex.value + 10
  const endIndexWithBuffer = endIndex.value + bufferNum > props.list.length ? props.list.length : endIndex.value + bufferNum
  // 
  if (endIndex.value > props.list.length) return
  currentList.value = props.list.slice(startIndexWithBuffer, endIndexWithBuffer)
  containerHeight.value = dataLengthHeight - scrollTop
  // 控制展示的列表实时位置
  if (virtualRealList.value) virtualRealList.value.style.transform = `translateY(${scrollTop}px)`
}



onMounted(() => {
  currentList.value = props.list.slice(startIndex.value, endIndex.value)
})

</script>

<style lang="scss" scoped></style>