<script setup lang="ts">
import { reactive, isRef, toRef } from 'vue'

const userInfo = reactive({
  userName: '张三',
  userAge: 18,
})

let { userName } = userInfo
const isUserNameisRef = isRef(userName)
let userAge = toRef(userInfo, 'userAge')
const isUserAgeisRef = isRef(userAge)

const changeName = () => {
  userName = '李四'
}
const changeAge = () => {
  userAge.value++
}
</script>

# To 相关的 API

## toRef

作用：将一个响应式对象中的某个属性变成 `ref` 对象

```vue
<script setup lang="ts">
import { reactive, isRef, toRef } from 'vue'

const userInfo = reactive({
  userName: '张三',
  userAge: 18,
})

let { userName } = userInfo
const isUserNameisRef = isRef(userName)
let userAge = toRef(userInfo, 'userAge')
const isUserAgeisRef = isRef(userAge)

const changeName = () => {
  userName.value = '李四'
}
const changeAge = () => {
  userAge.value++
}
</script>
```

::: info 例子

<div style="display: flex; justify-content: space-evenly;">
  <div>
    这是用户名字：<span>{{ userName }}</span><br/>
    用户名字是否是 Ref：<span>{{ isUserNameisRef }}</span><br/>
    <button style="padding: 5px; border: 1px solid #999; border-radius: 6px" @click="changeName">点击修改用户名</button>
  </div>
  <div>
    这是用户年龄：<span>{{ userAge }}</span><br/>
    用户年龄是否是 Ref：<span>{{ isUserAgeisRef }}</span><br/>
    <button style="padding: 5px; border: 1px solid #999; border-radius: 6px" @click="changeAge">点击+1</button>
  </div>
</div>
:::

## toRefs

作用：批量创建 `ref` 对象，方便解构的时候使用

```vue
<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const userInfo = reactive({
  userName: '张三',
  userAge: 18,
})

let { userName, userAge } = toRefs(userInfo) // [!code focus]
</script>
```

::: info 手写 toRefs
```ts
const MyToRefs = <T extends Object>(object: T) => {
  const refsObj: RefsObj<T> = {} as RefsObj<T>
  for (let key in object) {
    refsObj[key] = toRef(object, key)
  }
  return refsObj
}

let { sex, name } = MyToRefs(userInfo)
console.log(sex, name)
```
:::

## toRaw

`toRaw` 是 `toRefs` 的逆操作，将 `reactive` 对象转为普通对象。