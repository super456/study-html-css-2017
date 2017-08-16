# 2017年8月10号学习内容：


**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

## CSS3基础学习

### (一) CSS3简介

1. CSS3介绍

   CSS3是CSS技术的升级版本，CSS即层叠样式表（Cascading StyleSheet）。 在网页制作时采用层叠样式表技术，可以有效地对页面的布局、字体、颜色、背景和其它效果实现更加精确的控制。 只要对相应的代码做一些简单的修改，就可以改变同一页面的不同部分，或者页数不同的网页的外观和格式。

2. css3可以做什么

   CSS3是CSS技术的升级版本，CSS3语言开发是朝着模块化发展的。以前的规范作为一个模块实在是太庞大而且比较复杂，所以，把它分解为一些小的模块，更多新的模块也被加入进来。

   这些模块包括： 盒子模型、文字特效、边框圆角、盒阴影、旋转、渐变
 
### (二) 属性选择器学习

CSS3中的属性选择器：在CSS中追加了三个属性选择器：`[att*=val]、[att^=val]和[att$=val]`


1. `[att*=val]`属性选择器：如果元素用att表示的属性的值中包含用val指定的字符，那么该元素使用这个样式。
    
2. `[att^=val]`属性选择器：如果用att表结构属性的属性值的开头字符为用val指定的字符的话，那么该元素使用这个值。


3. `[att$=val]`属性选择器：如果元素用att表示的属性的属性值的结尾字符为用val指定的字符，那么该元素使用这个样式。

### (三) 结构性伪类选择器学习

1. 类选择器

   在css中可以使用类选择器把相同的元素定义成不同的样式。比如：

```css
 p.left{text-align: left;}
 p.rigth{text-align: right;}
```

2. 伪类选择器

   类选择器和伪类选择器的区别在于，类选择器我们可以随意起名，而伪类选择器是CSS中已经定义好的选择器，不可以随意起名。最常见的伪类选择器

```css
 a:link{ color: #ff6600 } /* 未被访问的链接 */
 a:visited{ color: #87b291 } /* 已被访问的链接 */
 a:hover{ color: #6535b2 } /* 鼠标指针移动到链接上 */
 a:active{ color: #55b28e } /* 正在被点击的链接 */
```

3. 伪元素选择器

   伪元素选择器，针对于CSS中已经定义好的伪元素使用的选择器。使用方法：选择器：伪元素{属性：值}，与类配合使用，选择器.类名：伪元素{属性：值}


4. 在CSS中，主要有四个伪元素选择器

   1）、first-line伪元素选择器：first-line伪元素选择器用于向某个元素中的第一行文字使用样式。

   2）、first-letter伪元素选择器：first-letter伪元素选择器用于向某个元素中的文字的首字母（欧美文字）或第一个字（中文或者是日文等汉字）使用样式。

   3）、before伪元素选择器：before伪元素选择器用于在某个元素之前插入一些内容。

   4）、after伪元素选择器：after伪元素选择器用于在某个元素之后插入内容。

5. 结构性伪类选择器root、not、empty和target

   1）、root选择器：root选择器将样式绑定到页面的根元素中。

   2）、not选择器：想对某个结构元素使用样式，但是想排除这个结构元素下面的子结构元素，让它不使用这个样式时，我们就可以使用not选择器。

   3）、empty选择器：empty选择器指定当元素中内容为空白时使用的样式。

   4）、target选择器：target选择器对页面中某个target元素指定样式，该样式只在用户点击了页面中的超链接，并且跳转到target元素后起作用。


6. 选择器first-child、last-child、nth-child和nth-last-child

   1）、first-child选择器：first-child单独指定第一个子元素的的样式。
 
   2）、last-child选择器：last-child单独指定最后一个子元素的的样式。
 
   3）、nth-child选择器：

   nth-child(n) 选择器匹配正数下来第 N 个子元素

   nth-child(odd)选择器匹配正数下来第奇数个子元素

   nth-child(even)选择器匹配正数下来第偶数个子元素
 
   4）、nht-last-child选择器：

   nth-last-child(n) 选择器匹配倒数数下来第 N 个子元素 

   nth-last-child(odd)选择器匹配倒数数下来第奇数个子元素

   nth-last-child(even)选择器匹配倒数下来第偶数个子元素


7. 选择器nth-of-type和nth-last-of-type

   1）、在使用nth-child和nth-last-child时产生的问题：在案例中指定奇数文章的标题背景为黄色，偶数文章的标题为绿色。 `<div> <h2>标题</h2> <p>内容</p> <h2>标题</h2> <p>内容</p> <h2>标题</h2> <p>内容</p> <h2>标题</h2> <p>内容</p> ... ... </div>`

   2）、使用nth-of-type和nth-last-of-type：nth-of-type和nth-last-of-type在css3中就是用来避免上面这类问题的发生，在统计的时候就只针对同类型的子元素进行计算。nth-of-type正数，nth-last-of-type倒数。

   兼容性：nth-of-type和nth-last-of-type都是CSS3开始提供需要在IE8以上的浏览器才会被支持，Chrome浏览器、Firefox浏览器、Opera浏览器、Safari浏览器都支持！


8. 循环使用样式

   nth-child(An+B)A表示每次循环中共包括几种样式，B表示指定的样式在循环中所处的位置。


9. only-child选择器

   only-child选择器，只对唯一的子元素起作用。

## 项目练习
- [属性选择器练习][52]
- [伪类选择器练习][53]
- [结构性伪类选择器练习][54]
- [target选择器练习][55]

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


[52]: https://super456.github.io/study-html-css-2017/0810/att-val.html
[53]: https://super456.github.io/study-html-css-2017/0810/pseudo-element.html
[54]: https://super456.github.io/study-html-css-2017/0810/structured-selectors.html
[55]: https://super456.github.io/study-html-css-2017/0810/target.html
