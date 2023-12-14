- route指单个路由，routes指一组路由，router指管理一组路由的路由器
- ```
  import UserDetails from './views/UserDetails.vue'
  替换成
  const UserDetails = () => import('./views/UserDetails.vue')
  ```
- router有hash和history两种模式，
- 最明显之差别：
- （1）在url显示： hash有 ； history无
- （2）回车刷新： hash 可以加载到hash值对应页面 ； history一般就是404掉了
- （3）支持版本： hash支持低版本浏览器和IE浏览器 ； historyHTML5新推出的API
- history用pushstate保存历史记录，但url改变时，会重新刷新页面，而hash不会