# 分支开发规范
	- 开发新需求
		- git checkout release
		- git pull origin release
		- git checkout -b feature/jiaqian_xxxx_1228
		- git push -u orgin feature/jiaqian_xxxx_1228 //-u用来将本地和远程分支关联起来，之后直接git push就能推送
	- STG staging environment 演示环境
		- 常规提测，发布测试前先看有没有最近发布，确认没有同学占用
	- PRE 测试环境 用于联测
		- 测试同学测完STG，开发同学将代码发到PRE
	- PRD 生产环境 用于发布
		- 发布完成后，要将自己的feature分支git rebase release
			- Q：为什么要做 rebase release 操作呢？🧐
			- A：这样一来，每次提的 Merge Request 里就不会带上别人的 commit。而 merge release => 你的分支，会将别人的 commit 带到你的 Merge Request 里，不利于比较代码 diff。
		- gitlab上feature => release 走MR流程
		- 发布窗口时，将release分支发布到PRD环境
	- 当开发完一个需求后要将dev合并到master上
-
- # 开发完后如何部署到van的stg环境上
	- 先commit和push 自己的开发分支到服务器上
	- 再转到stg分支 pull最新版本的stg
	- 再在stg分支下merge 自己的开发分支进来 合并时加上git merge --no-ff feature
	- 处理冲突 然后再push stg分支
	- 在van上选择stg环境进行部署
-
- # git-cz 日志说明
  
  test:       Adding missing tests
  feat:       A new feature
  fix:          A bug fix
  chore:    Build process or auxiliary tool changes
  docs:      Documentation only changes
  refactor: A code change that neither fixes a bug or adds a feature
  style:      Markup, white-space, formatting, missing semi-colons...
  ci:            CI related changes
  perf:       A code change that improves performance
-
-
- feat: 新功能（feature）
  fix: 修补bug
  docs: 文档（documentation）
  style: 格式（不影响代码运行的变动）
  refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
  chore: 构建过程或辅助工具的变动
  revert: 撤销，版本回退
  perf: 性能优化
  test： 测试
  improvement: 改进
  build: 打包
  ci: 持续集成