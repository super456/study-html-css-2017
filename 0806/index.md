# 2017年8月6号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

##  HTML5基础学习

### (一) 什么是HTML5

   首先了解HTML：HTML即超文本标记语言（HyperText Markup language）,这是一种语法简单、结构清晰的语解释型文档,他不同于其他的编程语言。

   HTML5就是HTML网页标记语言的第五次重大更新产品，在这个版本中，新功能不断推出，以帮助Web应用程序的作者，努力提高新元素互操作性。

### (二) HTML5的目标

   HTML5他的产生，最简单的目标就是，用更简洁的HTML代码创建更多功能的网页程序！并且HTML5让网页结构变得更加的清楚明了，增加了更加语义化的结构标签，这样一个网页的结构就非常清晰，那个部位显示的什么内容，让人一目了然！

### (三) HTML5的好处

   为开发人员节约时间，这句好话怎么理解，因为之前我们所使用的HTML/XHTML在各大浏览器之间存在的不兼容问题显示的非常严重的问题，然而HTML5的出现就是为了解决这一个问题，HTML5的目标就是将HTML5网页上的音视频、图像、动画等等都带入一个国际标准化！

### (四) HTML5其他

   结构清晰的HTML5，在HTML5中增加了主体元素，比如新增的NAV标签，表示的就是导航的意思，而之间呢，就是用DIV并没有实际的意义！

   兼容性：HTML5在老版本的浏览器上面也可以完美运行。实用性：HTML5抛弃了不切实际的功能，一切按照实用性的线路出发！

## HTML5网页骨架

### (一) 新的网页结构

```html
<!DOCTYPE html>
<html>
<head lang="en">
   <meta charset="UTF-8">
   <title></title>
</head>
<body>
  <header>...</header>
  <nav>...</nav>
  <article>...</article>
  <section>...</section>
  <aside>...</aside>
  <footer>...</footer>
</body>
</html>
```
1. DOCTYPE声明格式区别：

   HTML4中的DOCTYPE声明格式：`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

   HTML5中的DOCTYPE声明格式：`<!DOCTYPE html>`

2. 网页字符编码

   在HTML4中的格式：`<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`
	
   在HTML5中的格式：`<meta charset=UTF-8" />`

3. header元素表示页面中的一个内容区块或者整个页面的标题

   HTML5中使用方法：`<header></header>`

4. nav元素表示页面中的导航链接部分、翻页操作、侧边栏导航。

   HTML5中使用方法：`<nav>...</nav>`

5. article元素表示页面中的一块与上下文不相关的的独立内容，比如一篇文章中的文章

   HTML5的使用方法：`<article></article>`

6. section表示页面中的一块内容区块，比如章节的页眉、页脚等等。也可以和Hn（h1、h2..)等一起使用，标示出文档的结构

   HTML5的使用方法：`<section></section>`

7. aside元素表示article元素的内容之外的，和内容相关的辅助信息

   使用方法：`<aside></aside>`

8. footer表示页面或者是页面中的一块区域的页脚，比如存放文件的创建时间、作者、联系方式等等

   使用方法：`<footer></footer>`

### (二) 新增的主体结构元素

1. article元素

2. section元素

   [HTML5轮廓工具](https://gsnedders.html5.org/outliner/)

3. aside元素

4. nav元素

   使用场合：1、传统的导航条，2、侧边栏导航，3、内页导航，4、翻页操作。

5. time元素

6. pubdate属性

### (三) 新增的非主体结构元素

1. header元素

   header元素是一种具有引导和导航作用的结构元素，通常用来放置整个页面或页面内的一个内容区块的标题，但也可以包含其他的内容，比如在header里面放置logo图片、搜索表单等等。

   **注意：**一个页面内并没有限制header的出现次数，也就是说我们可以在同一页面内，不同的内容区块上分别加上一个header元素。


   在HTML5中，一个header元素至少可以包含一个heading元素（h1-h6），也可以包括我们下节课将要学习的hgroup元素，还可以包括其他的元素，在新的W3C HTML5标准，我们还可以把NAV元素包括进去。

2. hgroup元素

   hgroup元素是将标题和他的子标题进行分组的元素。hgroup元素一般会把h1-h6的元素进行分组，比如在一个内容区块的标题和他的子标题算是一组。通常情况下，文章只有一个主标题时，是不需要hgroup元素的。

3. footer元素

   footer元素可以作为他的上层父级内容区块或是一个根区块的注脚。footer元素一般情况下包括与它相关的区块的注脚信息，比如作者、版权信息等。

   **注意：**footer元素和我们前面所讲的header元素一样，并没有限制他的个数。并且footer元素可以为article元素或者section元素添加footer元素。

4. address元素

   address元素用来在页面中呈现联系信息，包括文档的作者、邮箱、地址、电话信息等。

   address元素还用来展示和文章中的相关的联系人的所有联系信息。

## 项目练习
- [article知识简单应用](https://super456.github.io/study-html-css-2017/0806/article.html)
- [section知识简单应用](https://super456.github.io/study-html-css-2017/0806/section.html)
- [aside知识简单应用](https://super456.github.io/study-html-css-2017/0806/aside.html)
- [nav知识简单应用](https://super456.github.io/study-html-css-2017/0806/nav.html)
- [pubdate知识简单应用](https://super456.github.io/study-html-css-2017/0806/pubdate.html)

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**