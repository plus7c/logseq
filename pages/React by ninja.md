- package.json很重要，一般从GitHub上下载下来的项目都没有node_module，通过npm install能自动下载package.json中的依赖
- 在jsx文件中使用className的原因是js中class也是一个关键字
- react v17不用在文件顶部import react
- react中不能将对象和布尔值返回给浏览器，numbers和string可以
- 当要给onClick（）中的函数传值时，可以用一个没有参数的箭头函数来保存需要被传值调用的函数。
- ```
    const handleClick = (e) => {
      console.log('hello ninjas', e);
    }
    const handleClickAgain = (name, e) => {
      console.log('hello ' + name, e.target);
    }
  
  <button onClick={handleClick}>Click me</button>
  <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
  ```
-
-
- react hook是react中的特殊函数。
- 若要在组件中使用client组件，要在开头加上
- ```
  'use client';
  ```
- props
- 组件间传值，可以使用（{blogs,title}）=>{。。。}来直接获取其他组件传过来的值<BlogList blogs={blogs} title='All blogs!'>，无需重新定义🧡
- 箭头函数（map、filter）就像一把手术刀一样，见缝插针，无处不在。
-
- useEffect不能在useState中使用，不然会无限循环
- useEffect中的回调函数后可以加上[variable，。。],用来展示变更了的variable
-
- {}里面的是JS的语句 可以在template里用{}来写条件渲染
- 请求错误处理，useState（error），在不用的情况对error进行相应的改变
-
- customHook
	- 有点像用来处理JS逻辑的component，目的也是为了提高代码的复用性。
	- 可以给customHook传值，customHook中的useEffect检测到传过来的值有变化后，就会进行相应操作
	- customHook需要返回一些数据给调用它的页面
- react-router
	- 当路由变更时用来在前端进行组件更新，而不用每次都向服务器进行页面请求
	- 在主页写路由更新的时候，要用Exact Match Routes，不然可能会匹配不到想要的页面
	- <route>要写在<switch>里，<switch>写在<router>里
	- <link to='/'>相当于<a>，但是无需访问服务器
	- abortController用来当fetch的过程中检测到路由的signal有变化时，中断请求。
	- useParam()可以用来传递<Link>的参数，供Link to的页面使用，比如说，传递id值，其他页面使用自定义的useFetch来获取博客detail
- submit form
	- fetch post 上传到服务器。
	- 利用ispending来处理上传过程中的页面显示
- useHistory
	- 可以在触发事件之后重定向
	- history.push() history.go()