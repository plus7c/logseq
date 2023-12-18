- Mobx是除了redux之外的react状态管理器，和vuex的原理相似
-
- 高阶函数（Higher-order function），至少满足下列一个条件的函数 #card #react
  collapsed:: true
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2023-12-22T02:04:43.358Z
  card-last-reviewed:: 2023-12-18T02:04:43.358Z
  card-last-score:: 5
	- 1、接受一个或多个函数作为输入
	  2、输出一个函数
	  在React中，高阶组件即接受一个或多个组件作为参数并且返回一个组件，本质也就是一个函数，并不是一个组件，例如：
	  ```
	  const EnhancedComponent = highOrderComponent(WrappedComponent);
	  ```
	  上述代码中，该函数接受一个组件 WrappedComponent 作为参数，返回加工过的新组件 EnhancedComponent
	- 高阶组件的这种实现方式，本质上是一个**装饰者**设计模式
- 如何提高组件的渲染效率 #card #react
  collapsed:: true
  card-last-interval:: -1
  card-repeats:: 0
  card-ease-factor:: 2.5
  card-next-schedule:: nil
  card-last-reviewed:: nil
  card-last-score:: nil
	- 类组件：
		- 1. 继承PureComponent
		  2. 使用shouldComponentUpdate优化
	- 函数组件：
		- 1. memo模拟PureComponent
		  2. 使用useMemo缓存变量
		  3. 使用useCallback缓存函数
		  4. 循环添加key, key最好用数组项的唯一值，不推荐用 index
- 函数式组件有没有生命周期？#card
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2023-12-22T02:06:53.839Z
  card-last-reviewed:: 2023-12-18T02:06:53.839Z
  card-last-score:: 5
  collapsed:: true
	- 它没有提供生命周期概念，不像 class 组件继承 React.component，可以让你使用生命周期以及特意强调相关概念
- 使用Hooks要遵守哪些原则？ #card
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2023-12-22T02:09:25.631Z
  card-last-reviewed:: 2023-12-18T02:09:25.631Z
  card-last-score:: 5
  collapsed:: true
	- 1. 只在最顶层使用 Hook
	- 2. 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
	- 3. 只在 React 函数中调用 Hook
	- 4. 不要在普通的 JavaScript 函数中调用 Hook。你可以：
	- ✅ 在 React 的函数组件中调用 Hook
	  ✅ 在自定义 Hook 中调用其他 Hook
- 类组件和函数组件的异同？ #card
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2023-12-22T02:04:22.406Z
  card-last-reviewed:: 2023-12-18T02:04:22.407Z
  card-last-score:: 5
  collapsed:: true
	- 相同点：都是构建UI的最小单元，它们之间可以相互转化，但在开发过程中没有这个必要，在闭包的性能上两者没有太大的区别
	- 不同点：
		- 主要是心智模型上的不同，类组件基于面向对象编程，有生命周期和继承的特点，一些设计模式上会用到继承，而函数组件的思想是函数式编程，主打immutable数据不可变，没有副作用。
		- 使用场景不同，类组件可用于有生命周期的场景，以及用到继承这个特点的一些设计模式。而如果使用react hooks，则使用函数组件。官方更推荐使用函数组件。
		- 性能优化上，类组件依靠shouldComponentUpdate阻断渲染提升性能，而函数组件依靠react.memo缓存渲染结果提升性能。
		-
- Rreconciliation（和解算法） #card
  card-last-interval:: 4
  card-repeats:: 1
  card-ease-factor:: 2.6
  card-next-schedule:: 2023-12-22T02:11:25.447Z
  card-last-reviewed:: 2023-12-18T02:11:25.448Z
  card-last-score:: 5
  collapsed:: true
	- 背景：在比较两棵树的所有节点是否相同时，递归遍历的时间复杂度是O(n^3)，而一棵react树中有很多结点，这样比较显然是性能低下的，因此提出了启发式算法来进行DOM tree diff。
	- 两大原则：
		- 当react树的根节点的类型不一样时，用新生成DOM结点直接取代旧的DOM结点，否则继续递归遍历
		- 当在兄弟结点中插入一个新结点时，仅发生了一处变更，但传统diff算法会重新匹配其余结点，性能低下，所以给兄弟结点添加key，相当于给每个结点一个ID，在进行diff对比的时候免去多余的匹配。
		- 但应注意的是，尽量避免使用可迭代数组或对象的index作为ID，否则当数组或对象发生变更时，diff对比会发生混乱，例如：
		  collapsed:: true
			- ```
			  const arr = [1,2,3]
			  
			  <div>
			  	{arr.map((val,index)=>{
			      	<child key={index}></child>
			      })}
			  </div>
			  
			  arr:    1,2,3
			  index:  0,1,2
			  key:    a,b,c
			  
			  arr:    4,2,1
			  index:  0,1,2
			  key:    e,b,a
			  
			  用index的情况：
			  4,2,1
			  0,1,2
			  
			  用key的情况：
			  1,2,4
			  a,b,e
			  
			  
			  ```
		- keys的设置需要稳定，可预测（自增）和唯一性，否则会造成子组件性能下降和状态丢失。
- Hook总结
	- useState [useState中文教程](https://zh-hans.react.dev/reference/react/useState#updating-objects-and-arrays-in-state) #card
		- 用于添加状态变量,useState(initialState)
		- state相当于是一个快照,直到下一次渲染前,setSomething()的值都不会起作用
		- ```
		  const [state,setState] = useState(null)
		  
		  funtion handleClick(){
		  	setState(1)//延迟执行,批处理更新
		      console.log(state) // 打印出来的是null,在下一次渲染时将state改为1
		  }
		  ```
		- state是只读不可写的,set方法是对整个state的替换,不能只修改state的某个地方,还要保存不变的属性,除非引入`immer`简化更新逻辑
		- 可以给set方法传入一个更新函数而不是下一个状态,使得同一事件可以进行多次更新
		- 可以对组件的key传入不同的值来重置组件的状态,每次渲染时react会对比组件key,若不同则会更新
	- ### useEffect
		- 用于将组件与外部系统同步
		- `useEffect(setup, dependencies?)`
		- > 当组件被添加到 DOM 的时候，React 将运行 setup 函数。在每次依赖项变更重新渲染后，React 将首先使用旧值运行 cleanup 函数（如果你提供了该函数），然后使用新值运行 setup 函数。在组件从 DOM 中移除后，React 将最后一次运行 cleanup 函数。
		- setup选择性返回一个cleanup函数,用于清理旧值.而useEffect本身返回undefined,所以要单独使用
	- useRef，用于引用一个不需要渲染的值
	  collapsed:: true
		- 用法：
		- ```
		  import {useRef} form "react"
		  function Test(){
		  
		  let ref = useRef(initValue);
		  value = ref.current//测试普通变量引用
		  let inputRef = useRef(null);//测试DOM引用
		  
		  function handleChange(){
		  	value = value + 1;
		      inputRef.current.focus();
		  }
		  
		  return (<>
		  <buttom onClick={handleChange}></buttom>
		  <input ref={inputRrf}>
		  	{value}
		  </input>
		  </>)
		  }
		  
		  ```
		- `forwardRef`
		- ```
		  //默认情况下，组件间不能直接调用ref,要使用forwardRef方法来传递ref给DOM
		  MyInput = forwardRef((props,ref)=>{
		  return (
		  <input 
		  {...props}
		  ref={ref}></input>
		  )
		  })
		  - function Form(){
		  let inputRef = useRef(null)
		  <MyIuput value={value} onClick={handleClick} ref={inputRef}>
		  </MyInput>
		  }
		  ```
		- 用于绑定dom元素，h5标签上有ref属性，通过useref定义的变量，在普通函数中可以修改dom
		- useref还可以用来保存重新渲染时不需要更新的值
		- 注意：**不要在渲染期间写入或者读取 `ref.current`**
	- useMemo [useMemo中文教程](https://zh-hans.react.dev/reference/react/useMemo#) #card
	  collapsed:: true
		- > 在每次重新渲染的时候能够缓存计算的结果
		- 用法：memo = useMemo(calculateValue,denpendencies)
		- 如果依赖项数组中的值没有改变，则不会重新计算calculateValue
		- 如果memo值没有改变，则传递给子组件的props也没有改变，可以让子组件避免重复渲染
		- 除了普通memo值外，因函数也可以作为props传递给子组件，所以也可以对函数进行memo化，具体的步骤是将事件处理函数包裹在一个箭头函数中，然后返回它。为了避免重复嵌套，可以将函数包装到useCallback而不是useMemo中。
		- 如果一个记忆化的计算函数中使依赖于在组件主体的对象，会破环记忆化，正确的写法应该把这个对象写入计算函数中,让这个对象也被记忆化。
-
-
-
-
-
-
- React的生命周期
  collapsed:: true
	- ![](https://cdn.nlark.com/yuque/0/2021/png/1500604/1611914193870-a5a93315-a094-40aa-959a-e3e3c58c8a96.png){:height 368, :width 586}
	-
-