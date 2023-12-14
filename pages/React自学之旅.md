- 井字游戏小节
- 组件化思想，开发的过程中用大组件包裹小组件
  logseq.order-list-type:: number
- 用空标签<>来包裹需要return的DOM
  logseq.order-list-type:: number
- 组件标签中传参和普通函数类似，有实参和形参，使用{}来传递和接受，自定义参数名字，一般on开头的表示形参，handle开头的表示实参，在组件标签中调用函数时需要使用箭头函数，否则会循环触发页面的渲染。
  logseq.order-list-type:: number
- state钩子用来更新数据时重新加载组件，可以传递给子组件使用。当一个变量依赖于一个state时，不用重新定义state，如：
  logseq.order-list-type:: number
  ```
  const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
  ```
- 数组的map方法，第一个参数是对应的数组元素，第二个参数是数组下标，当要使用数组下标时，数组元素不可省略，要在参数列表中当占位符使用。
  logseq.order-list-type:: number
- 与返回模板无关的函数无需写在组件中，统一放到文件尾部。
  logseq.order-list-type:: number
-
- Thinking in React
- 如何确定数据是否是state，先确认哪些不是：不随时间推移而改变、父组件传入的props、基于其他数据计算得来
  logseq.order-list-type:: number
- props和state的区别
  logseq.order-list-type:: number
  props是父给子组件传值的道具，而state是组件的记忆数据。父组件可通过props向子组件传递state。
- 如何确认state该放在哪
  logseq.order-list-type:: number
  识别基于该状态呈现某些内容的每个组件
  找到它们最接近的公共父组件，即层次结构中位于它们之上的组件
  如果没找到的话，创建一个公共父组件来保存state
- 结合内嵌方法
  logseq.order-list-type:: number
  ```
  onChange={(e) => onFilterTextChange(e.target.value)} />
  ```
- logseq.order-list-type:: number
- logseq.order-list-type:: number