# computed

## 选项式写法

支持一个对象传入 `get` 函数和 `set` 函数，可以通过 `set` 修改值

``` vue
<script setup lang="ts">
import { ref, computed } from 'vue'
let fN = ref('')
let lN = ref('')
let fullName = computed<string>({
  get() {
    return `${fN.value}-${lN.value}`
  },
  set(val: string) {
    [fN.value, lN.value] = val.split('-')
  }
})
let fullName1 = computed<string>(() => `${fN.value}-${lN.value}`)
const setName = () => {
  fullName.value = '烧-饼'
}
</script>
```

## 函数式写法

只能支持一个 `getter` 函数，只读属性不能修改

``` vue
<script setup lang="ts">
import { ref, computed } from 'vue'

let fN = ref('')
let lN = ref('')
let fullName1 = computed<string>(() => `${fN.value}-${lN.value}`)
</script>
```