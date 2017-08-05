# 2017年8月5号学习内容：

## DIV+CSS布局

### (一) 布局相关属性

1. position 定位方式

   (1).正常定位relative

   (2).根据父元素进行定位absolute

   (3).根据浏览器窗口进行定位fixed

   (4).没有定位static

   (5).继承inherit

2. 定位：left（左），right（右），top（上），bottom（下）离页面顶点的距离

3. z-index 层覆盖先后顺序（优先级）值为：0、1、2...

4. display 显示属性

```css
	display：none; 层不显示
	display：block; 块状显示，在元素后面换行，显示下一个块元素
	display：inline; 内联显示，多个块可以显示在一行内
```

5. float 浮动属性：left 左浮动、right 右浮动

6. clear 清除浮动：`clear：both`

7. overflow 溢出处理

|  属性值| 作用  |
|-------|-------|
|hidden |隐藏超出层大小的内容|
|scroll |无论内容是否超出层大小都添加滚动条|
|auto |超出时自动添加滚动条|

### (二) 兼容问题及高效开发工具

1. 兼容性测试工具

   (1)、IE Tester

   (2)、Multibrowser

2. 常用的浏览器

   (1)、Google chrome

   (2)、Firefox

   (3)、opera

3. 高效的开发工具

   轻量级的:

   (1). Notepad++

   (2). sbulime Text

   (3). Atom

   (4). VScode

   重量级的

   (1). WebStorm

   (2). Dreamweaver

   根据自己的需要来选择

### (三) 网页设计工具

1. fireworks

2. photoshop

### (四) 判断IE的方法

   条件判断格式：`<!--[if 条件 版本]> 那么显示 <![endif]-->`

1. 不等于：`[if !IE 8] ` 除了IE8都可以显示

2. 小于： `[if lt IE 5.5]` 如果IE浏览器版本小于5.5的显示

3. 大于：`[if gt IE 5]` 如果IE浏览器版本大于5的显示

4. 小于或者等于： `[if lte IE 6]` 如果IE浏览器版本小于6的显示

5. 大于或等于：`[if gte IE 7]` 如果IE浏览器版本小于7的显示

6. 大于和小于之间： `[if (gt IE 5)&(lt IE 7)]` 如果IE浏览器版本大于IE5小于7的显示 
   
7. 或： `[if (IE 6)|(IE 7)]` 如果是IE6或者IE7显示
		
8. 仅： `<!--[if IE 8]>` 如果是IE8

**注意：** 条件注释只有在IE浏览器下才能执行，这样就达到了我们的效果！

## 项目练习

   [使用HTML+CSS实现简单网页布局实战](https://super456.github.io/study-html-css-2017/0805/html-css.html)