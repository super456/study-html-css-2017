# 2017年8月13号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

## CSS3基础学习

### (一) 各种盒模型

1. run-in类型与compact类型

   将元素指定为`run-in`类型或`compact`类型时，如果元素后面还有block类型的元素，`run-in`类型那个的元素将被包括在后面的block类型的元素的内部，而compact类型的元素将被放置在block类型的元素左边。
 

2. 表格相关类型

   在CSS3中所有与表格相关的元素及其所属类型表：
   
|元素所属类型   |   说明   |
|--------------|---------|
|tabletable | 代表整个表格 | 
|tableinline-table  | 代表整个表格可以被指定为table类型也可以是inline-table类型|
|trtable-row  | 代表表格中的一行|
|tdtable-cell  | 代表表格中的单元格|
|thtable-cell |  代表但单元格中的列标题|
|tbodytable-row-group | 代表表格中行的所有行|
|theadtable-header-group | 代表表格中的表头部分|
|tfoottable-footer-group | 代表表格中的脚注部分|
|coltable-columm |  代表表格中的一列|
|colgrouptable-column-group |  代表表格中的所有列|
|captiontable-caption  | 代表整个表格的标题|
 

3. none类型

   当元素被指定了`none` 类型后，这个元素将不会被显示。


### (二) 盒模型溢出

当我们在样式中设置了宽度和高度之后，就有可能出现内容溢出的情况，就可以使用`overflow`属性来指定如何显示盒子内显示不下的内容。


1. overflow属性

   overflow属性用来指定对盒中容纳不下的内容的显示办法。取值：
   
   |   属性值   |   作用   |
   |-----------|----------|
   |hidden | 超出容纳范围的文字将被隐藏起来。|
   |scroll | 在div元素中出现水平与垂直的滚动条，超出的内容被滚动显示。|
   |auto  | 当文字超出div元素的容纳范围时，根据需要出现水平滚动条或者是垂直滚动条，滚动显示超出的内容。|
   |visible | 和不使用overflow时候的显示效果一样，超出容纳范围的文字按原样显示。|


2. overflow-x属性与overflow-y属性

   使用`overflow-x`属性或者`overflow-y`属性，可以单独指定可以在水平或者垂直方向上如果内容超出盒的容纳范围时的显示方。法。


3. text-overflow属性 

   通过使用`text-overflow`属性，可以在盒的末尾显示一个代表省略的符号“...”，但是`text-overflow`属性只在当盒中的内容在水平方向上超出盒的容纳范围时有效。

### (三) 盒阴影

1. box-shadow属性的使用方法

   在CSS3中，可以使用 `box-shadow` 属性让盒在显示的时候产生阴影效果。使用方法：
   
   `box-shadow：length length length color;`前三个length表示文字阴影离开文字的横方向距离，阴影离开文字的纵方向距离和阴影的模糊半径，color制定阴影的颜色。


2. 将参数设置为0

   1)、当阴影的模糊半径设定为0的时候，将绘制不向外模糊的阴影。

   2)、将阴影离开文字的横方向距离与阴影离开文字的纵方向距离都设置为0的时候，会在盒子的周围绘制阴影。

   3)、将阴影离开文字的横方向距离设定为负数值的时候，向左绘制阴影。

   4)、将阴影离开文字的纵方向距离设定为负数值的时候，向上绘制阴影。




3. 对盒内子元素使用阴影

   可以单独对盒内的子元素使用阴影。 


4. 对第一个文字或第一行使用阴影

   通过使用`first-letter`选择器或`frist-line`选择器可以只让第一个字或第一行具有阴影效果。


5. 对表格及单元格使用阴影

   可以使用`box-shadow`属性让表格及表格内的单元格产生阴影效果。

### (四) 盒模型宽度计算

1. box-sizing属性

   在CSS3中，使用 `box-sizing` 属性来指定针对元素的宽度与高度的计算方法。`box-sizing `可以指定用 `width` 属性与 `height `属性分别指定的宽度只与高度值是否包含元素的内补白区域以及边框的宽度和高度。

   可以给 `box-sizing `属性指定的属性值为 `content-box` 属性值与` border-box` 属性值。

   `content-box` 属性值表示元素的宽度与高度不包括内补白区域及边框的宽度高度；

   `border-box`  属性值表示元素的宽度与高度包括内补白区域及边框的宽度与高度，在没有使用`box-sizing` 属性的时候，默认值是`content-box` 属性值。


 2. 为什么要使用box-sizing属性

   使用 `box-sizing` 属性的目的是对元素的总宽度做一个控制，如果不适应这个属性的话，样式中默认使用的是`content-box`属性值，他只对内容做一个指定，却没有队员说的总宽度进行指定，有些场合合理利用`border-box`属性值会是页面的布局很方便。

## 项目练习
- [背景属性background-clip][78]
- [背景属性background-image][79]
- [背景属性background-size][80]
- [盒阴影box-shadow][81]
- [盒阴影box-shadow-table][82]
- [box-sizing][83]
- [表格相关属性display][84]
- [none类型属性][85]
- [显示不下的内容overflow属性][86]
 
**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


[78]: https://super456.github.io/study-html-css-2017/0813/background-clip.html
[79]: https://super456.github.io/study-html-css-2017/0813/background-image.html
[80]: https://super456.github.io/study-html-css-2017/0813/background-size.html
[81]: https://super456.github.io/study-html-css-2017/0813/box-shadow.html
[82]: https://super456.github.io/study-html-css-2017/0813/box-shadow-table.html
[83]: https://super456.github.io/study-html-css-2017/0813/box-sizing.html
[84]: https://super456.github.io/study-html-css-2017/0813/display-table.html
[85]: https://super456.github.io/study-html-css-2017/0813/none.html
[86]: https://super456.github.io/study-html-css-2017/0813/overflow.html
