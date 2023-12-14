- 还没弄懂graphQL是怎么用的
- Gatsby有很多插件
- blog主要用md语法
- graphQL
	- restful架构使用uri操作资源，而graphQL是根据类型来操作资源
	- root（处理器）的数据要满足schema类型定义
	- 解构，常用于提取数组和对象中的值，对象利用同属性名的变量来匹配对象中对应的值，而数组解构则是根据数组中元素的顺序来匹配。此外，还常见于函数传参
	- ```
	  //数组解构
	  const arr = [1, 2];
	  const [a, b, c] = arr;
	  
	  console.log(a); // 输出 1
	  console.log(b); // 输出 2
	  console.log(c); // 输出 undefined
	  
	  //对象解构
	  const obj = { x: 1, y: 2 };
	  const { y, x } = obj;
	  //与顺序无关
	  console.log(x); // 输出 1
	  console.log(y); // 输出 2
	  ```
	-
	- mutation修改
	- middleware中间件 用来检查客户端有没有访问后端的权限
	- 实战中后端会生成一个token，发送给前端 前端每次发送请求时携带该token在后端进行身份验证