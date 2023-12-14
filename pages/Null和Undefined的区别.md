- null表示没有对象，即该处不应该有值
	- 作为函数的参数，表示此函数的参数不是对象
	  collapsed:: true
		- ```
		  function greet(name) {
		      if (name === null) {
		          console.log("Hello, anonymous!");
		      } else {
		          console.log("Hello, " + name + "!");
		      }
		  greet(null); // 输出 "Hello, anonymous!"
		  greet("Alice"); // 输出 "Hello, Alice!"
		  ```
	- 作为对象原型链的终点
- undefined表示缺少值，此处应该有值，但是还没有定义
	- 调用函数时，应该提供的参数没有提供，该参数等于undefined。
		- ```
		  function greet(name) {
		      if (name === undefined) {
		          console.log("Hello, anonymous!");
		      } else {
		          console.log("Hello, " + name + "!");
		      }
		  }
		  
		  greet(); // 输出 "Hello, anonymous!"，因为没有为name参数提供值
		  greet("Alice"); // 输出 "Hello, Alice!"，因为为name参数提供了值
		  ```
	- 对象没有赋值的属性，该属性的值为undefined。
	- 函数没有返回值时，默认返回undefined。
- #JS笔记
-
-