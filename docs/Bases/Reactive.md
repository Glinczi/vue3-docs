# Reactive

## reactive和ref之间的区别

1. `ref` 支持所有类型 `reacteive`, 只支持 `Object` `Array` `Map` `Set`
2. `ref` 取值和赋值都需要加 `.value`, `reactive` 不需要
3. `reactive` 是通过 `proxy` 代理的 不能直接复制 会破坏响应式
   如何解决这个问题
   1. 通过数组方法修改
   2. 把数组方在一个对象里面

## readOnly

作用：把 `reactive` 的对象变成只读的

## shallowReactive

作用：只代理对象本身，不代理对象内部的属性

::: warning 注意
`shallowReactive` 和 `reactive` 不能混用
:::
