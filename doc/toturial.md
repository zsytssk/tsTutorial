## demo1

js 和 ts 的区别;

```ts
function greeter(person: {}) {
  console.log('hello ' + person);
}

greeter('world');
```

ts = js + 类型;
所有的 js 语法在 ts 中都可以使用;

基本类型 number string function Array object null
https://www.typescriptlang.org/play 试试

https://www.tslang.cn/docs/home.html 5 分钟 + handbook

## demo2

服务端的接口

实际的项目中的代码, 如果跨文件怎么办...

作用:
如果改了, 所有地方都需要改..., 如果你没有改 就会报错
现在直接一个 f2

## demo3

面向接口编程 --> 地图元素

展示页面 --> 我需要实现的功能
[玩家 怪物...] 在小地图根据类型的不同显示不同的图标, 移动

而有了这些数据, 我可以组织地图的元素 -> 通过 id 找到元素...
离开时候清理...

(将我的依赖变成接口, 而不依赖具体实现)

## 高级

所有的其实都是代码的复用(类型的复用)

泛型 -> promise

向服务端的接口中加一个字段(list)
类型的运算 & |

## 提问环节

很小的项目无所谓, 大项目一定要这个功能呢...
