<template>
  <div class="virtual-list-random mx-auto w-500px h-500px">
    <div class="virtual-list-container h-full w-full overflow-y-auto relative" @scroll="handleScroll($event)">
      <div ref="virtualRealList" class="virtual-real-list absolute top-0 left-0 right-0"
        :style="{ height: `${listHeight}px` }"></div>
      <div class="absolute top-0 right-0 left-0" :style="{top:`${top}px`}">
        <div ref="virtualRealNodes" :id="item.id"
          class="virtual-list-item text-center border border-amber border-solid " v-for="(item) in currentList"
          :key="item.id">
          <div>{{ item.data }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faker } from '@faker-js/faker';
import { onMounted, onUpdated, computed, nextTick } from 'vue'
const list = ref<Array<any>>([])
const virtualRealList = ref<HTMLElement | null>(null)
const virtualRealNodes = ref<Array<HTMLElement>>([])
let currentList = ref<Array<any>>([])
let listPostion = ref<Array<any>>([])
const stableHeight = ref(50) // 预设的高度
let startIndex = ref(0)
let endIndex = ref(10)
let top = ref(0)

let listHeight = computed(() => {
  if (listPostion.value.length === 0) return 0
  return listPostion.value[listPostion.value.length - 1].bottom
})

const init = () => {
  for (let i = 0; i < 50; i++) {
    list.value.push({
      id: i,
      data: faker.lorem.sentences()
    })
  }
  currentList.value = list.value.slice(startIndex.value, endIndex.value)
  // 创建一个记录数据高度的数组
  list.value.forEach((item, index) => {
    listPostion.value.push({
      index,
      height: stableHeight.value,
      top: index * stableHeight.value,
      bottom: (index + 1) * stableHeight.value
    })
  })
}

onMounted(() => {
  init()
  nextTick(() => {
    // 页面更新后更新渲染列表的真实DOM高度
    virtualRealNodes.value.forEach((node) => {
      const rect = node.getBoundingClientRect()
      const id = parseInt(node.id)
      const realHeight = rect.height
      const dfValue = realHeight - stableHeight.value
      if (dfValue) {
        // 遍历每一个节点 对比真实高度和预设高度的差值
        let origenal = listPostion.value[id]
        origenal.bottom += dfValue
        origenal.height = realHeight
        // 后续的节点根据这个节点值改变
        for (let i = id + 1; i < listPostion.value.length; i++
        ) {
          listPostion.value[i].top = listPostion.value[i - 1].bottom
          listPostion.value[i].bottom += dfValue
        }
      }
    })
  })
})

const getStartIndex = (scrollTop = 0) => {
  console.log('getStartIndex');
  let item = listPostion.value.find(i => i && i.bottom > scrollTop);
  return item.index;
}

const handleScroll = (event: Event) => {
  console.log('handleScroll');
  const scrollTop = (event.target as HTMLElement).scrollTop
  startIndex.value = getStartIndex(scrollTop)
  endIndex.value = startIndex.value + 10
  currentList.value = list.value.slice(startIndex.value, endIndex.value)
  top.value = listPostion.value[startIndex.value].top
}
</script>

<style lang="scss" scoped></style>