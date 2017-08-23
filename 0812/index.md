# 2017年8月12号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

## CSS3基础学习

### (一) 服务器端字体引用

1. 在页面上显示服务器端的字体

   在CSS3中可以使用@font-face属性来利用服务器端字体。@font-face属性的使用方法：

```css
 @font-face{
 font-family:webFont;
 src:url('font/字体名称.otf')format("opentype");
 }
```

   `font-family` 属性值中使用 webfont 来声明使用的是服务器端字体。

   `src` 属性值中首先指定了字体文件所在的路径，format声明字体文件的格式，可以省略文件格式的声明，单独使用src属性值。

   可以使用的字体文件格式：字体格式字体属性: otf---opentype,   ttf---truetypee, ot---embedded-opentype。
 
2. 定义斜体或粗体字体

   在定义字体的时候，可以把字体定义成斜体或者粗体，在使用服务器服务器端字体的时候，需要根据是斜体还是粗体，使用不同的文字 。

   使用方法如下：

```css
     @font-face {
          font-family: webfont;
          src: url(字体1.otf);
      }
      @font-face {
          font-family: webfont;
          font-style: italic;
          src: url(字体2.otf);
      }
     h1{
           font-family: webfont;
       }
       h2{
           font-family: webfont;
           font-style: italic;
       }
```

3. 显示客户端本地的字体

   @font-face除了可以显示服务器端的字体还可以显示本地字体。首先将font-family设置为本地的字体名，然后将src属性设置为local('字体')。例如：

```css
 @font-face{
 font-family:Arial;
 src：local('Arial');
 }
```



4. 属性值的指定：

   1)、`font-family`：设置文本的字体名称。

   2)、`font-style`：设置文本样式。取值：`normal`不使用斜体, `italic`使用斜体, `oblique`使用倾斜体, `inherit`从父元素继承。

   3)、`font-variant`：设置文本是否大小写。取值：`normal`使用浏览器默认值，`small-caps`使用小型大写字母，`inherit`从父元素继承。

   4)、`font-weight`：设置文本的粗细。取值：`normal`使用浏览器默认值, `bold`使用粗体, `bolder`使用更粗的字体, `lighter`使用更细的字体, `100-900`从细字体到粗，值必须是100的倍数，其中400等于normal，700等同于bold。

   5)、`font-stretch`：设置文本是否横向的拉伸变形。（IE及Firefox已支持font-stretch，但显示效果与正常文字并无不同。）
   
   取值：

|  属性 |  作用  |
|-------|-------|
| normal：|正常文字宽度|
| wider：|把伸展比例设置为更进一步的伸展值 ；|
|narrower：|把收缩比例设置为更进一步的收缩值；|
| ultra-condensed：|比正常文字宽度窄4个基数；|
|extra-condensed：|比正常文字宽度窄3个基数； | 
|condensed：|比正常文字宽度窄2个基数；|
| semi-condensed：|比正常文字宽度窄1个基数；|
|semi-expanded：|比正常文字宽度宽1个基数；|
|expanded：|比正常文字宽度宽2个基数；|
|extra-expanded：|比正常文字宽度宽3个基数；|
|ultra-expanded：|比正常文字宽度宽4个基数；|
  


   6)、`font-size`：设置文本字体大小。

   7)、`src`：设置自定义字体的相对路径或者绝对路径，注意，此属性只能在@font-face规则里使用。
 

### (二) 各种盒模型练习

盒的基本类型：在css3中使用`display`属性来定义盒的类型，总体来说盒分为block类型和inline类型。比如之前我们所学的div元素和p元素就是属于block类型，span和a属于`inline`类型。

1. inline-block类型

   `inline-block`类型是css2.1中追加的一个盒类型。`inline-block`类型盒属于block盒的一种，但是在显示时具有`inline`类型盒的特点。

   例如：在DIV元素中分别将`display`设置为`inline-block`和`inline`后他们的效果一样。


   1) 使用`inline-block` 类型来执行分列显示

   在css2.1之前，如果需要在一行中并列显示多个block类型的元素，需要用`float`属性或者`position`属性，但是这样会让我们的样式变的复杂，所以在CSS2.1中就追加了`inline-block`类型，使得并列显示多个block类型的元素操作变的很简单。 
 
   示例对比： block类型

   首先新建三个div元素，给前两个DIV使用`float`让前两个div元素并列显示，第三个div的话就会显示在前两个div元素的下部，但是因为前两个的高度不一样所以我们要使用`clear`属性清除浮动。


   `inline-block` 类型：使用`inline-block` 类型可以直接将两个div元素进行并列显示，不需要使用`float`属性，也不需要使用clear属性了。默认情况下使用`inline-block` 类型时并列显示的元素的垂直对齐方式是底部对齐，为了让对齐方式改成顶部对齐，还要给DIV元素的样式中加入`vertical-align`属性。


   2) 使用`inline-block`类型来显示水平菜单

   在css2.1之前，如果要实现水平菜单，那么我们需要使用`float`属性，大多数菜单是利用ul列表和li列表项目来显示的，li元素隶属于block类型下的`list-item` 类型，所以要并列显示的话就要使用`float`属性。 

2. inline-table类型

   `inline-table`类型是css2中新增的盒类型

   实例讲解：在css中使用table元素的示例，一个表格，前后都有文字将其围绕。


3. list-item类型

   `list-item`类型，可以将多个元素作为列表来显示，同时在元素的开头加上列表的标记。

## 项目练习
- [服务器端字体font-face属性][73]
- [inline-blcok与float分列][74]
- [inline-blcok与float水平菜单][75]
- [inline-table实现表格][76]


**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


[73]: https://super456.github.io/study-html-css-2017/0812/font-face.html
[74]: https://super456.github.io/study-html-css-2017/0812/inline-block-div.html
[75]: https://super456.github.io/study-html-css-2017/0812/inline-block-nav.html
[76]: https://super456.github.io/study-html-css-2017/0812/inline-table.html