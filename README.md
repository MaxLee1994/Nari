# Nari（百合）
**Arashi API Doc Server**

## 快速安装

需安装Node环境，命令行执行以下命令

    git clone https://github.com/MaxLee1994/Nari.git Nari
    
    cd Nari
    
    node server.js

浏览器中访问：`http://localhost:3000/`
    
## 生成API

### description.json

位于项目目录`doc/`下，用于描述所有API文档的相关信息。  
字段解释如下：

+ `"page-title"` : 文档页面标题
+ `"table"` : Array, 描述所有API文档结构
	+ `"title"` : 一级API标题
	+ `"list"`: Array, 描述一级API下的具体接口信息
		- `"title"` : 接口标题
		- `"url"` : 接口对应Markdown文件名