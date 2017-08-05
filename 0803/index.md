# 2017年8月3号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


## 使用CSS样式的方式

### (一) HTML `<!DOCTYPE>` 声明标签

1. 定义和用法：`<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于` <html> `标签之前。

   `<!DOCTYPE>` 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。在 HTML 4.01 中，
   
   `<!DOCTYPE> `声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。
   HTML5 不基于 SGML，所以不需要引用 DTD。

2. 各版本的声明

   (1). HTML5

   ```html
			<!DOCTYPE html>
			<meta charset="utf-8">
   ```

   (2). HTML 4.01

   ```html
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
   ```

   该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
   `<meta http-equiv=Content-Type content="text/html;charset=utf-8">`

   注意的规则：

   单标记必须闭合：比如`<br>`必须写为`<br /> `，` <input />`

   单属性必须添加属性值：`<input typr="radio" checked >`必须写为`<input typr="radio" checked="checked" />`

   标记和属性必须使用小写：`<Body><BODY>`是错的必须写为`<body>`
   
   属性的属性值必须使用`""` ，在HTML4.01之前可以使用`<body bgcolor=red>`,HTML4.01必须写为`<body bgcolor="red">`

### (二) 内链样式表
	
   格式为： `<body style="background-color:green; margin:0; padding:0;"></body>`

### (三) 嵌入式样式表

   格式为：`<style type="text/css"></style>`，需要将样式放在`<head></head>`中。

### (四) 引入式样式表

   格式为：`<link rel="StyleSheet" type="text/css" href="style.css">`

## 定义样式表

### (一) HTML标记定义

   格式：`<p>...</p>`，`p { 属性:属性值 ；属性1:属性值1 }`

   p可以叫做选择器，定义那个标记中的内容执行其中的样式，一个选择器可以控制若干个样式属性，他们之间需要用英语的“;”隔开，最后一个可以不应加“;”。

### (二) Class定义

   格式：`<p class="p">...</p>`，class定义是以“.”开始，`.p { 属性:属性值 ；属性1:属性值1 }`

### (三) ID定义
	
   格式：`<p id="p">...</p>`，ID定义是“#”开始的，`#p { 属性:属性值 ；属性1:属性值1 }`

### (四) 优先级问题

1. ID>Class>HTML

2. 同级时选择离元素最近的一个的：

    ```css
    #p { color: red }
    #p { color: #f60 }
    ```

   执行颜色为#f60的。

### (五) 组合选择器（同时控制多个元素）

   `h1,h2,h3 { font-size: 14px; color: red;  }`，选择器组合可以使用“,”隔开。

### (六) 伪元素选择器

1. `a:link` 正常连接的样式。

2. `a:hover` 鼠标放上去的样式。

3. `a:active` 选择链接时的样式。

4. `a:visited` 已经访问过的链接的样式。

## 常见属性

### (一) 颜色属性

   color属性定义文本的颜色，color：green ，color：#ff6600 (简写： color：#f60)

   简写式：

   color：rgb（255,255,255）红(R)、绿(G)、蓝(B) 每个的取值范围0~255。

   color：rgba（255,255,255,1）RGBA是代表Red（红色） Green（绿色） Blue（蓝色）和 Alpha的(色彩空间)透明度。

### (二) 字体属性

1. font-size 字体大小：`font-size:14px`

2. font-family 定义字体：`font-family：微软雅黑，serif；`可以使用“，”隔开，以确保当字体不存在的时候直接使用下一个

3. font-weight 字体加粗：normal(默认值)、bold(粗)、bolder(更粗)、lighter(更细)、100、200、300~900、400 = normal，而 700 = bold。

### (三) 背景属性

1. 背景颜色： `background-color`

2. 背景图片：` background-image`

    ```css
        background-image:url(图片路径);
        background-image:none;
    ```

3. 背景重复： `background-repeat`

|    属性值  |   作用  |
|-----------|---------|
 |  repeat  |  重复平铺满|
 |  repeat-x | 向Y轴重复|
 |  repeat-y | 向Y轴重复|
 |  no-repeat | 不重复|

4. 背景位置：` background-position`

   横向（left,center,right），纵向（top,center,bottom）

   简写方式：

   ```css
	background:背景颜色 url(图像) 重复 位置
	background:#f60 url(images/bg,jpg) no-repeat top center
   ```

## 项目练习

   [制作一个简单的知识点应用](https://super456.github.io/study-html-css-2017/0803/color-font-bg.html)

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**