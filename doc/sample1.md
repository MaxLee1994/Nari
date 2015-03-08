#HTML代码风格
inspired by Bootstrap
version 1.0.0

##语法
+ 缩进规则与js风格一致
+ 属性定义使用双引号
+ 在自闭元素(self-closing)的尾部添加结束斜线
+ 尽量不要使用js生成标签（只对传统页面适用）
+ 为html根元素指定lang属性

##meta
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta charset="UTF-8">

+ IE=edge means IE should use the latest (edge) version of its rendering engine
+ chrome=1 means IE should use the Chrome rendering engine if installed
+ 通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。

##属性
+ 属性内容采用全小写字母和破折号
+ 属性书写顺序：class,id,name,data,other
+ js模块需要的属性统一遵守`data-*`格式
