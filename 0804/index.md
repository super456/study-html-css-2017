# 2017年8月4号学习内容：
## 常见属性

### (一) 文本属性

1. `text-align ` 横向排列：`left，center，right`

2. `line-height` 文本行高

   (1). %基于字体大小的百分比行高。

   (2).数值 来设置固定值。

3. `text-indent `首行缩进

4. `letter-spacing `字符间距

   (1). normal 默认

   (2). length设置具体的数值（可以设置负值）

   (3). inherit 继承

### (二) 边框属性

1. 边框风格 `border-style`

   统一风格（简写风格）：`border-style`

   单独定义某一方向的边框样式

```css
			border-bottom-style 下边边框样式
			border-top-style 上边边框样式
			border-left-style 左边边框样式
			border-right-style 右边边框样式
```

   边框风格样式的属性值：

   |   属性值   |  作用  |
   |-----------|--------|
   |  1、none| 无边框|
    | 2、solid | 直线边框|
    | 3、dashed | 虚线边框|
    | 4、dotted |点状边框|
    | 5、double | 双线边框|
    | 6、groove| 凸槽边框|
    | 7、ridge |垄状边框|
    | 8、inset| inset边框|
    |9、outset |outset边框|
    | 10、inherit| 继承父元素|

   上表中的5-9属性值依托border-color的属性值。

2.边框宽度：` border-width`

   统一风格：`border-width：`

   单独风格：

```css
			border-top-width 上边边框宽度
			border-bottom-width 下边边框宽度
			border-left-width 左边边框宽度
			border-right-width 右边边框宽度
```

   边框宽度的属性值：

   |   属性值   |  作用  |
   |-----------|--------|
    |1、thin |细边框|
   | 2、medium |中等边框|
   | 3、thick |粗边框|
   | 4、px | 固定值的边框|
   | 5、inherit | 继承父元素|

3. 边框颜色：` border-color`

   统一风格：`border-color`

   单独风格:

   ```css
			border-top-color 上边边框颜色
			border-bottom-color 下边边框颜色
			border-left-color 左边边框颜色
			border-right-color 右边边框颜色
   ```

   属性值：

   1、颜色值的名称：red、green

   RGB：`rgb(255,255,0)`

   RGBA：`rgba(255,255,0,0.1)`

   十六位进制：`#ff0、#ff0000`

   继承 inherit

   属性值的四种情况

```css
			一个值：border-color：（上、下、左、右）；
			两个值：border-color：（上下） （左右）；
			三个值：border-color:（上） （左、右） （下）;
			四个值：border-color：（上）（右）（下）（左）;
```

   简写方式：`border：solid 2px #f60`

### (三) 列表属性

1. 标记的类型：`list-style-type`

   |   属性值   |  作用  |
   |-----------|--------|
 |none|	无标记。|
|disc|	默认。标记是实心圆。|
|circle|	标记是空心圆。|
|square	|标记是实心方块。|
|decimal|	标记是数字。|
|decimal-leading-zero|	0开头的数字标记。(01, 02, 03, 等。)|
|lower-roman  |	小写罗马数字(i, ii, iii, iv, v, 等。)|
|upper-roman	|大写罗马数字(I, II, III, IV, V, 等。)|
|lower-alpha |	小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)|
|upper-alpha |	大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)|
|lower-greek	 |小写希腊字母(alpha, beta, gamma, 等。)|
|lower-latin	|小写拉丁字母(a, b, c, d, e, 等。)|
|upper-latin|	大写拉丁字母(A, B, C, D, E, 等。)|
|hebrew	 | 传统的希伯来编号方式|
|armenian|	传统的亚美尼亚编号方式|
|georgian|	传统的乔治亚编号方式(an, ban, gan, 等。)|
|cjk-ideographic	|简单的表意数字|
|hiragana|	标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）|
|katakana|	标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）|
|hiragana-iroha|	标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）|
|katakana-iroha|	标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）|

2. 标记的位置：`list-style-position`

   |   属性值   |  作用  |
   |-----------|--------|
  |inside|	列表项目标记放置在文本以内，且环绕文本根据标记对齐。|
 |outside|	默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。|
| inherit|	规定应该从父元素继承 list-style-position 属性的值。|

3. 设置图像列表标记：`list-style-image`

   |   属性值   |  作用  |
   |-----------|--------|
   |URL|	图像的路径。|
  |none	|默认。无图形被显示。|
   |inherit	|规定应该从父元素继承 list-style-image 属性的值。|

4. 简写方式：`list-style:square inside url('/i/arrow.jpg');`

## DIV+CSS布局

### (一) div和span

   DIV和SPAN在整个HTML标记中，没有任何意义，他们的存在就是为了应用CSS样式，DIV和span的区别在与，span是内联元素，div是块级元素。

### (二) 盒模型

   |   属性值   |  作用  |
   |-----------|--------|
    |margin  | 盒子外边距|
    |padding  | 盒子内边距|
    |border | 盒子边框宽度|
    |width  | 盒子宽度|
    |height | 盒子高度|

## 项目练习

   [制作一个简单的知识点应用练习](https://super456.github.io/study-html-css-2017/0804/text-border-list.html)