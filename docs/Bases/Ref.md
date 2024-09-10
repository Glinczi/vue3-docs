# Ref

## ref

<script setup lang="ts">
import { ref, isRef } from 'vue'
interface Person {
  name: string
}
const person = ref<Person>({ name: 'John' })
const cat = {name: '烧饼'}
const isRefCat = isRef(cat)
const isRefPerson = isRef(person)
</script>

作用：用来包裹响应式对象

```vue
<script setup lang="ts">
import { ref } from 'vue'
interface Person {
  name: string
}
const person = ref<Person>({ name: 'John' })
</script>
```

::: info 例子
这是人的名字: {{person.name}}
:::

## isRef

作用：用来判断一个变量是否为 `ref` 对象

```vue
<script setup lang="ts">
const person = ref<Person>({ name: 'John' })
const cat = { name: '烧饼' }
const isRefCat = isRef(cat) // [!code focus]
const isRefPerson = isRef(person) // [!code focus]
</script>
```

::: info 例子
isRefCat 是不是 ref 对象: <span style="font-weight: bold">{{isRefCat}}</span> <br/>
isRefPerson 是不是 ref 对象: <span style="font-weight: bold">{{isRefCat}}</span>
:::

## shallowRef

作用：用来创建一个 `ref` 对象，但只监听对象的第一层属性变化，即只监听对象的第一层属性变化，不会监听对象的属性的变化。

## triggerRef

作用：手动触发一个 ref 对象的依赖，强制更新页面 DOM

## customRef

作用：手动创建一个 ref 对象，并手动控制其依赖项的收集与触发。

```vue
<script setup>
import { customRef } from 'vue'
const MyRef = <T>(value: T) => {
  customRef((track, trigger) => {
    return {
      get() {
        track() // 收集
        return value
      },
      set(newVal) {
        value = newVal
        trigger() // 更新
      },
    }
  })
}
</script>
```
