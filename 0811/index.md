# 2017年8月11号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

## CSS3基础学习

### (一) 选择器讲解

1. UI元素状态伪类选择器

   UI选择器的特征就是指定的样式只有当元素处于某种状态下时，才起作用，在默认状态下不起作用！


|   伪类选择器  |   浏览器支持度 |
|--------------|---------------|
| E:hover |支持firefox、safari、Opera、ie8、chrome|
|  E:active |支持firefox、safari、Opera、chrome  不支持ie8|
|  E:focus |支持firefox、safari、Opera、ie8、chrome|
|  E:enabled |支持firefox、safari、Opera、chrome  不支持ie8|
| E:disabled |支持firefox、safari、Opera、chrome  不支持ie8|
| E:read-only |支持firefox、Opera  不支持ie8、safari、chrome|
|  E:read-write |支持firefox、Opera  不支持ie8、safari、chrome|
| E:checked |支持firefox、safari、Opera、chrome  不支持ie8|
| E::selection |支持firefox、safari、Opera、chrome  不支持ie8|
|  E:default |只支持firefoxE:indeterminate只支持chrome|
|  E:invalid |支持firefox、safari、Opera、chrome  不支持ie8|
|  E:valid |支持firefox、safari、Opera、chrome不支持ie8|
| E:required |支持firefox、safari、Opera、chrome不支持ie8|
|  E:optional |支持firefox、safari、Opera、chrome不支持ie8|
| E:in-range |支持firefox、safari、Opera、chrome不支持ie8|
|  E:out-of-rang |支持firefox、safari、Opera、chrome不支持ie8|


   (1)、选择器`E:hover`、`E:active`和`E:focus`

   1)、`E:hover`选择器被用来指定当鼠标指针移动到元素上时元素所使用的样式

   使用方法：

```css
 <元素>:hover{
 CSS样式
 }
 我们可以在“<元素>”中添加元素的type属性。
 例：
 input[type="text"]:hover{
 CSS样式
 }
```

   2)、`E:active`选择器被用来指定元素被激活时使用的样式

   3)、`E:focus`选择器被用来指定元素获得光标聚焦点使用的样式，主要是在文本框控件获得聚焦点并进行文字输入时使用。

   (2)、`E:enabled`伪类选择器与`E:disabled`伪类选择器

   1)、`E:enabled`选择器被用来指定当元素处于可用状态时的样式。

   2)、`E:disabled`选择器被用来指定当元素处于不可用状态时的样式。

   (3)、`E:read-only`伪类选择器与`E:read-write`伪类选择器

   1)、`E:read-only`选择器被用来指定当元素处于只读状态时的样式。

   2)、`E:read-write`选择器被用来指定当元素处于非只读状态时的样式。

   (4)、伪类选择器 `E:checked`、`E:default` 和 `indeterminate`

   1)、`E:cehcked`伪类选择器用来指定当表单中的radio单选框或者是checkbox复选框处于选取状态时的样式。

   2)、`E:default`选择器用来指定当页面打开时默认处于选取状态的单选框或复选框的控件的样式。

   3)、`E:indeterminate`选择器用来指定当页面打开时，一组单选框中没有任何一个单选框被设定为选中状态时，整组单选框的样式。

   (5)、伪类选择器 `E::selection`

   1)、E:selection伪类选择器用来指定当元素处于选中状态时的样式。


   (6)、`E:invalid` 伪类选择器与`E:valid`伪类选择器

   1)、`E:invalid`伪类选择器用来指定，当元素内容不能通过HTML5通过使用的元素的诸如requirde等属性所指定的检查或元素内容不符合元素规定的格式时的样式。

   2)、`E:valid`伪类选择器用来指定，当元素内容能通过HTML5通过使用的元素的诸如requirde等属性所指定的检查或元素内容符合元素规定的格式时的样式。

   (7)、`E:required` 伪类选择器与 `E:optional` 伪类选择器

   1)、`E:required` 伪类选择器用来指定允许使用required属性，而且已经指定了required属性的input元素、select元素以及textarea元素的样式。

   2)、`E:optional` 伪类选择器用来指定允许使用required属性，而且未指定了required属性的input元素、select元素以及textarea元素的样式。


   (8)、`E:in-range` 伪类选择器与 `E:out-of-range` 伪类选择器

   1)、`E:in-range` 伪类选择器用来指定当元素的有效值被限定在一段范围之内，且实际的输入值在该范围之内时的样式。

   2)、`E:out-of-range` 伪类选择器用来指定当元素的有效值被限定在一段范围之内，但实际输入值在超过时使用的样式。


2. 通用兄弟元素选择器

   他用来指定位于同一个父元素之中的某个元素之后的所有其他某个种类的兄弟元素所使用的样式。

   使用方法： 

```css
  <子元素>~<之元素之后的同级兄弟元素>{
   CSS样式
 }
```
### (二) 使用选择器在页面插入内容

1. 插入文字
 
   (1)、使用选择器插入内容: 在CSS2中，使用before选择器在元素前面插入内容，使用after在元素后面插入内容，在选择器content属性中定义要插入的内容。

   例如对H2使用before选择器在H2的前面插入文字“Title”。

```css 
 <style type="text/css"> 
 h2:before{
 content:"Title";
 }
 </style>
```

   并且我们还可以给他定义样式，进行美化操作。比如我们给“Title”的文字设置为白色，加上绿色的背景，内边距上下1像素左右5像素，外边距右边5像素，当然还可以设置他的字体等等。


   (2)、排除一些不需要插入内容的元素: 使用content属性的追加一个none属性值。比如：

```css
<style type="text/css"> 
 h2.nocontent:before{
 content:none;
 }
 </style>
```
 
2. 插入图片

   使用before或者after除了可以在元素前后插入文字之外还可以插入图片。在插入图片是需要使用URL指定图片的路径，比如在标题前插入一张图片！比如：

```css
<style type="text/css"> 
 h2:before{
 content:url(1.gif);
 }
 </style>
```



   插入图片文件的好处: 节省开发人员的工作量，比如可以通过类的方式来进行不同标题图片的追加！比如我们给标题定义一个“hot”“digest”分别来调用一张站的图标个顶的小图标！

```css
<style type="text/css"> 
 h2.hot:before{ content:url(hot.gif); }
 h2.digest:before{ content:url(digest.gif); }
 </style>
```

3. 插入项目编号
 
   (1)、在多个标题前加上连续编号: 在content属性中使用counter属性来正对对个项目追加连续的编号。

   使用方法：

```css
 元素:before{
 content:counter(计数器);
 }
```

   使用计数器来计算编号，计数器可以任意命名。除了使用计数器，还需要在元素的样式中追加对元素的（counter-increment）属性的指定为content属性值中所指定的计数器名称。

```css
 元素{
 counter-increment:content属性值中所指定的计数器名称
 }
```

   (2)、在项目编号中追加文字

```css
h1:berore{
content：'第'counter（content属性值中所指定的计数器名称）'章';
}
```

   (3)、指定编号的样式: 比如给他在编号后面带一个“.”文字，并且设置编号的颜色为绿色，字体大小42像素。

```css   
h1:before{
content：counter（content属性值中所指定的计数器名称）'.';
color:green;
font-size:42px;
}
```

   (4)、指定编号的种类: before和after不仅可以追加数字编号，还可以追加字母编号或者罗马数字编号。content：counter（计数器名,编号种类）,可以使用list-style-type属性的值来指定编号的种类。比如指定大写字母编号时，使用“upper-alpha”属性，指定大写罗马字母时使用“upper-roman”属性。

```css
h1:before{
content：counter（计数器名,编号种类）'.';
color:green;
font-size:42px;
}
```


   (5)、编号嵌套、重置编号: 我们可以在大编号中华嵌套中编号，在中编号中呢又嵌入小编号！
 
   1)、大编号中嵌入中编号

   2)、counter-reset属性重置编号

   (6)、中编号中嵌入大编号

```css
 h2:before{
 content:counter(大编号的计数器)'-'counter(中编号的计数器)
}
```


   (7)、在字符串两边嵌套文字符号: 可以使用content属性的open-quote属性值与close-quote属性值在字符串的两边添加诸如单引号、双引号之类的文字字符。

   open-quote开始符号, close-quote结尾字符, quote字符类型（使用双引号（""）的时候需要使用转义字符“\”）。

   示例：

```css
<style> 
h1:before{
 content:open-quote;
}
h1:after{
 content:close-quote;
}
h1{
quote:"(" ")";
}
</style> 
```

### (三) 文字阴影及自动换行

1. text-shadow

   (1)、text-shadow属性的使用方法。在CSS3我们可以是用`text-shadow` 属性给页面上的文字添加阴影效果，`text-shadow` 在CSS2.1的时候是被删除了的一个属性，但是呢在3.0的CSS中又恢复了使用。

   `text-shadow` 的使用方法：`text-shadow：length length length color;`第一个length表示的是阴影离开文字的横方向距离；第二个length表示的是阴影离开文字的纵方向的距离；第三个length表示的是阴影模糊半径；color表示的是阴影的颜色。


   (2)、位移距离：`text-shadow` 所使用的参数中，前两个参数是阴影离开文字的横方向和纵方向的位移距离，使用的时候必须指定这两个参数。


   (3)、阴影的模糊半径：`text-shadow` 属性的第三个参数就是阴影模糊半径，代表阴影向外模糊时的模糊范围。


   (4)、阴影的颜色：`text-shadow` 属性的第四个参数就是绘制阴影时所使用的颜色，可以放在三个参数之前，也可以放在之后。当没有指定颜色值的时候，会使用Color的颜色值。


   (5)、指定多个阴影：我们可以使用`text-shadow` 属性来给文字指定多个阴影，并且针对每个阴影使用不同的颜色。指定多个阴影的时候使用逗号“,”将多个阴影进行分割。
 

2. word-break

   (1)、浏览器文本自动换行：学习`word-break `之前我们先来看看浏览器对默认文本的换行处理方法。


   (2)、指定自动换行的处理方法：在CSS3中可以使用 `word-break` 属性来设置自动换行的处理方法。值换行规则IE5+Safari、chromenormla使用浏览器默认的规则支持支持keep-all只能在半角空格或连字符处理换行支持不支持break-all允许在单词内换行支持支持
 
   使用示例：

```css
<style>
div{
  word-break:keep-all
}
</style>
```

 
3. word-wrap

   长单词与URL地址自动换行：在CSS3中，使用 `word-wrap` 属性来实现长单词和URL的自动换行。

   使用方法：
 
```css 
 div{
    word-wrap:break-word;
 }
```

   `word-wrap` 属性的属性值有两个：第一个：`normal `    浏览器保持默认处理方式，只在半角空格或者是连字符的地方换行。第二个：`break-word ` 浏览器可以在长单词或URL地址内部进行换行。


## 项目练习
- [选择器E:hover、E:active和E:focus练习][57]
- [E:enabled伪类选择器与E:disabled伪类练习][58]
- [E:read-only伪类选择器与E:read-write伪类选择器练习][59]
- [伪类选择器E:checked、E:default和indeterminate练习][60]
- [伪类选择器E::selection练习][61]
- [E:invalid伪类选择器与E:valid伪类选择器练习][62]
- [E:required伪类选择器与E:optional伪类选择器][63]
- [E:in-range伪类选择器与E:out-of-range伪类选择器练习][64]
- [结构选择元素练习][69]
- [循环使用样式][70]
- [同类元素选择计算][71]
- [通用兄弟元素选择器练习][65]
- [使用选择器插入页面内容及图片练习][66]
- [使用选择器插入项目编号][67]
- [文字阴影及自动换行练习][68]


**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


[57]: https://super456.github.io/study-html-css-2017/0811/hover-active-focus.html
[58]: https://super456.github.io/study-html-css-2017/0811/disabled-enabled.html
[59]: https://super456.github.io/study-html-css-2017/0811/read-only-write.html
[60]: https://super456.github.io/study-html-css-2017/0811/checked-default-indeterminate.html
[61]: https://super456.github.io/study-html-css-2017/0811/selection.html
[62]: https://super456.github.io/study-html-css-2017/0811/invalid-valid.html
[63]: https://super456.github.io/study-html-css-2017/0811/required-optional.html
[64]: https://super456.github.io/study-html-css-2017/0811/in-range-out-of-range.html
[65]: https://super456.github.io/study-html-css-2017/0811/div-span-p.html
[66]: https://super456.github.io/study-html-css-2017/0811/before-after-img.html
[67]: https://super456.github.io/study-html-css-2017/0811/content-counter.html
[68]: https://super456.github.io/study-html-css-2017/0811/text-shadow-break-wrap.html
[69]: https://super456.github.io/study-html-css-2017/0811/child-element.html
[70]: https://super456.github.io/study-html-css-2017/0811/nth-child-loop.html
[71]: https://super456.github.io/study-html-css-2017/0811/nth-of-type.html