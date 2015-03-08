#JavaScript代码风格
inspired by [Arale](http://aralejs.org/)	
version 1.0.0

##编码
统一使用utf-8

##单行代码长度
不超过**80**个字符

##缩进
使用**4**个空格，禁用Tab（大多数IDE可以将Tab键设置成空格）

##花括号
**花括号不换行，所有block都遵守这个风格**	
> 好的做法 

	if (true) {
	}
> 不好的做法
	
	if (false) 
	{
	}
**不允许使用单行判断，一律加花括号换行**

##变量命名
**与java风格一致**	

+ 常量：UPPERCASE_WORD
+ 变量：camelName
+ 类名：CamelName

##空格
**操作符之间需要空格**
> 例子

	//变量操作
	var a = 1 + 2;
	
	//if语句
	if (a) {
	}
	
	//for语句
	for (var i = 0; i++; i < 10) {
	}
	
	//键值对
	{
		a: 'onlyOneSpace',
		bbbbbbb: 'onlyOneSpace'
	}

##JSON对象书写格式
**最后一个key-value pair后不加逗号**

	{
		a: 'a',
		b: 'b',
		c: 'c'
	}

##变量声明
**必须先声明变量再使用**	
单var或多var风格均可，但在同一组件或模块内要保持统一。	
推荐使用多var，修改方便。

##注释原则
+ **如无必要，勿增注释**
+ **如有必要，尽量详细**

目的：**提高代码的可读性，从而提高代码的可维护性**。

##需要注释的地方
1. 关键代码，如业务核心或者重要逻辑部分
2. 复杂结构，添加注释方便阅读
3. 一切当别人第一次读代码，或者2个月后自己来读代码时会产生疑惑的地方

##注释风格
###文件头
**采用JSDoc风格**，主要说明**fileOverview**,**author**

	/**
 	 * @fileOverview this is the description of this file
 	 * @author Max
	 */

开发公用模块如基础模块或不涉及业务逻辑的模块不需要写author，推崇团队贡献。但是业务逻辑相关的文件头必须写author，方便直接快速找到作者。

###文件体
**采用Backbone风格的注释**
[典型示例](https://github.com/jashkenas/backbone/blob/master/backbone.js)

###书写风格
1. 源码中的注释，推荐用英文。
2. 含有中文时，标点符号用中文全角。
3. 中英文夹杂时，英文与中文之间要用一个空格分开。
4. 注释标识符与注释内容要用一个空格分开：`// annotation` 与 `/* annotation */`。