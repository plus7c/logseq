- 隐式转换
	- 用‘+’时，字符数字会变成字符，如2+‘3’会变成23，true+’3‘等于ture3
	- 用‘-’、‘*’、‘/’时，字符数字会变成数字，如’4‘-’2‘等于2
		- 此时true等于1，false和null等于0，如’5‘-null等于5
	- 两个非数字字符间进行加减乘除会等于NaN（Not a Number）
	- number、Boolean、null与undefined做运算结果都是NaN
- 循环
	- 对于数组对象来说，最好使用for...of，因为不用定义型变量来跟踪数组元素
- 箭头函数
	- arrowFunc = (a , b) => a + b
- 闭包
  collapsed:: true
	- 定义：In JavaScript,when we return a function from another function,we are effectively returning a combination of the function definition along with the function's scope.This would let the function definition have an associated persistent memory which could hold on to live data between executions.That combination of the function and its scope chain is what is called a closure in JavaScript.
	- ```
	  function outer() {
	      let counter = 0
	      function inner() {
	          counter++
	          console.log(counter)
	      }
	      return inner
	  }
	  
	  const fn = outer()
	  fn()
	  fn()//此时console显示2，magic！
	  ```
- Currying（柯里化）
	- 最大的好处是可以减少重复的参数，简化代码
	- 可以将小function组合起来变成更复杂的逻辑、
	- {{video https://www.youtube.com/watch?v=5lY7caTLyXA&t=306s}}
	-