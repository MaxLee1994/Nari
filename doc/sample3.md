#文档风格
inspired by Arale
version 1.0.0

##书写
+ 尽量使用中文
+ 中文段落使用全角标点
+ 中英文混杂时，中英文之间保持一个空格

##README.md
每个组件目录下，必须有该文件，用来描述组件的基本情况，模板如下：	
	
	# 模块名称

	该模块的概要介绍。

	---

	## 模块依赖

	* seajs

	## 使用说明

	如何使用该模块，可以根据组件的具体特征，合理组织。
	需要提供 API 说明，如有继承父类的参数也需要说明。

上面两部分是必须的，可以根据实际情况，加入其他部分。

##HISTORY.md
有正式版本更新的组件，必须要有该文件，用来描述版本变更情况，模板如下：


	### 1.1.0

	* [bug fix] #18 修复了 XXX 问题
	* [bug fix] #29 修复了 YYY 问题
	* [feature] 增加了 ZZZ 功能
	* [improve] 优化了 BBB 代码

	### 1.0.0

	* 第一个发布版本