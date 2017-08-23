# 2017年8月14号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

## CSS3基础学习

### (一) 背景和边框相关样式

1. 新增的背景属性

   |  属性   |   作用    |
   |---------|----------|
   |background-clip  |指定背景的显示范围|
   |background-origin | 指定绘制背景图象时的起点|
   |background-size |  指定背景中图像的尺寸|
   |background-break | 指定内联元素的背景图像进行平铺时的循环方式|

   1)、background-clip指定背景的显示范围

   css3中的background-clip属性，它主要是用来控制我们的背景显示区域。

使用方法：`background-clip ： border-box || padding-box || content-box;`

   |  属性   |   作用    |
   |---------|----------|
   |border-box:| 此值为默认值，背景从border区域向外裁剪，也就是超出部分将被裁剪掉；|
   |padding-box：|背景从padding区域向外裁剪，超过padding区域的背景将被裁剪掉；|
   |content-box：|背景从content区域向外裁剪，超过context区域的背景将被裁剪掉；|

   浏览器支持情况：

   background-clip在各种浏览器内核下，都具有自己的私有前缀：
   Firefox3.6版本以下（包含3.6版本）：`-moz-background-clip: border || padding;`

   Firefox4.0版本以上：Firefox4.0版本以上，支持border-box,padding-box,content-box并且无需带上其前缀，如果你一不小心带上了“-moz-”，那么在Firefox4.0+版本反而是一种错误的写法：`background-clip: border-box || padding-box || content-box;`


   background-clip兼容各浏览器的正确写法应该如下：

```css
     /*Firefox3.6-*/
     -moz-background-clip: border || padding;
     /*Webkit*/
     -webkit-background-clip: border-box || padding-box || context-box;
     /*W3C标准 IE9+ and Firefox4.0+*/
     background-clip: border-box || padding-box || context-box;
```







   2)、background-origin属性指定绘制背景图像的绘制起点

   在绘制背景图象时，默认是从内补白（padding）区域的左上角开始绘制的，但是可以利用background-origin属性来指定绘制时从边框的左上角开始绘制，或者是从内容的左上角开始绘制。

   |  属性及值   |   作用    |
   |------------|-----------|
| padding-box(padding): | 此值为background-origin的默认值，决定background-position起始位置从padding的外边缘（border的内边缘）开始显示背景图片；|
| border-box(border): | 此值决定background-position起始位置从border的外边缘开始显示背景图片；|
| content-box(content):  |此值决定background-position起始位置从content的外边缘（padding的内边缘）开始显示背景图片；|


   语法：background-origin在早期的Webkit和Gecko内核浏览器（Firefox3.6-,Safari和Chrome代版本）他们都支持一种老式的语法规则，类似于background-clip在Firefox3.6以下的版本一样

   使用方法：`background-origin: padding || border || content;` 那么在那些现代浏览器都支持的是一种新的语法。


   `background-origin: padding-box || border-box || content-box;`为了兼容新老版本的浏览器，在使用background-origin改变background-position的原点位置时，最好老旧语法一起加上，并且新语法放在老语法后面，这样只要是支持新语法规则的浏览器就自动会识别background-origin的最新语法。

```css
 background-origin: padding || border || content;
 background-origin: padding-box || border-box || content-box;
```

   有一点需要提出，在ＩＥ8以下版本解析是不一样的，在IE7以下版本background-origin默认是从border开始显示背景图片。


   兼容浏览器：background-origin虽然现代浏览器都支持，但在不同内核浏览器下还是需要带上其各自的前缀，这样在实际应用中最好按下面的语法规则书写，以保证只要支持background-origin的都能正常运行：

```css
 /*Old Webkit and Gecko*/
 -moz-background-origin: padding || border || content;
 -webkit-background-origin: padding || border || content;

 /*New Webkit and Gecko*/
 -moz-background-origin: padding-box || border-box || content-box;
 -webkit-background-origin: padding-box || border-box || content-box;


 /*Presto*/
 -o-background-origin: padding-box || border-box || content-box;

 /*W3c标准*/
 background-origin: padding-box || border-box || content-box;
```


3)、background-size属性指定背景图像的尺寸

   在CSS3中，可以使用background-size属性来指定背景图像的尺寸。

   使用方法：`background-size: auto || <length> || <percentage> || cover || contain;`

   |  属性值   |   作用    |
   |------------|-----------|
|auto:|  此值为默认值，保持背景图片的原始高度和宽度；|
|length：| 设置背景图像的高度和宽度,第一个值设置宽度，第二个值设置高度,如果只设置一个值，则第二个值会被设置为 "auto"。|
|percentage：| 以父元素的百分比来设置背景图像的宽度和高度，第一个值设置宽度，第二个值设置高度。如果只设置一个值，则第二个值会被设置为 "auto"。|
|cover：| 此值是将图片放大，以适合铺满整个容器，这个主要运用在，当图片小于容器时，又无法使用background-repeat来实现时，我们就可以采用cover;将背景图片放大到适合容器的大小，但这种方法会使用背景图片失真；|
|contain: | 此值刚好与cover相反，其主要是将背景图片缩小，以适合铺满整个容器，这个主要运用在，当背景图片大于元素容器时，而又需要将背景图片全部显示出来，此时我们就可以使用contain将图片缩小到适合容器大小为止，这种方法同样会使用图片失真。|


   兼容的浏览器：background-size和其他的一些CSS3属性一样，需要加上自己的别名，

```css
 /*Ｍozilla*/
 -moz-background-size: auto || <length> || <percentage> || cover || contain
 /*Webkit*/
 -webkit-background-size: auto || <length> || <percentage> || cover || contain
 /*Presto*/
 -o-background-size: auto || <length> || <percentage> || cover || contain
 /*W3c标准*/
 background-size: auto || <length> || <percentage> || cover || contain
```

   4)、Background-break属性指定背景图像的尺寸

   css3里标签元素能被分在不同区域（如：让内联元素span跨多行），background-break属性能够控制背景在不同区域显示。

   |  属性值   |   作用    |
   |------------|-----------|
|continuous | 此属性是默认值，忽视区域之间的间隔空隙（给它们应用图片就好像把它们看成一个区域一样）|
|bounding-box | 重新考虑区域之间的间隔|
|each-box  |对每一个独立的标签区域进行背景的重新划分。|


2. 显示多个背景图片

   在一个元素中显示多个背景图像，在CSS3中一个元素可以显示多个背景图像，还可以将多个背景图像进行重叠显示，这样可以让我们对背景中所用素材的调整变的更加容易。

   使用方法：`background-image:url(1.png),url(2.png),url(3.png);`


    图层的排序方法：浏览器中显示时叠放的顺序从上往下指定的，第一个图像文件是放在最上面的，最后指定的文件是放在最下面的。

3. 圆角边框

   border-radius属性，在css3中可以使用border-radius进行圆角边框的绘制，在网页中呢，我们经常使用圆角边框来美化我们的页面，在css3出现之前呢！我们如果要在网页上展示一个圆角边框的一个效果,那么我们需要绘制图形，在css3出现之后呢我们就只需要一段简单的代码就可以实现圆角边框的效果。

   使用方法：`border-radius:半径;` border-radius属性使用的时候，我们只需要定义好圆角的半径就可以绘制圆角边框了。

   兼容性：IE9+、Firefox 4+、Chrome、Safari 5+ 以及 Opera 支持 border-radius 属性。


   border-radius属性中指定两个半径，在border-radius属性中，可以指定两个半径，制定方法如下：`border-radius:40px 20px;` 第一个半径作为边框左上角与边框右下角的圆半径来绘制。第二个半径作为边框右上角与边框左下角的圆半径来绘制。


   不显示边框时：在CSS3中，如果使用了border-radius属性但是把边框设置为不显示时，浏览器会把背景的四个角绘制成圆角。

   修改边框种类时：使用了border-radius属性后，不管边框是什么种类，都会将边框沿着圆角曲线进行绘制。


   绘制4个不同半径的圆角边框

```css
border-top-left-radius:左上角半径
border-bottom-left-radius:左下角半径
border-top-right-radius：右上角半径
border-bottom-right-radius:右下角半径
```

4. 图像边框
 
   使用图像边框：在css3中增加了一个border-image属性,可以让元素的长度或宽度处于随时变化时，变化状态的边框统一使用一个图像文件来进行绘制。

   1)、border-image属性最简单的使用方法：

```css
-webkit-border-image: url("边框图像的路径") 上边距 右边距 下边距 左边距 ;
-moz-border-image: url("边框图像的路径") 上边距 右边距 下边距 左边距 ;
-o-border-image: url("边框图像的路径") 上边距 右边距 下边距 左边距 ;
border-image: url("边框图像的路径") 上边距 右边距 下边距 左边距 ;
```

   上面的参数中，图像的路径、上边距、右边距、下边距、左边距必须进行指定，但是如果上边距、右边距、下边距、左边距得值完全一样，那么就可以缩写为一个。

   写法如下：`border-image: url("边框图像的路径") 边距 ;`

   他会把图像切割成九个部分。

```css
   border-top-left-image:
   border-top-image:
   border-top-right-image:
   border-left-image:
   border-right-image:
   border-bottom-left-image:
   border-bottom-image:
   border-bottom-right-image:
```

   在浏览器中显示的时候，`border-top-left-image、border-top-right-image、border-bottom-right-image、border-bottom-left-image`不会进行任何的拉伸。

   而`border-top-image、border-right-image、border-bottom-image、border-left-image`会分别作为，上边框、右边框、下边框、左边框的这个背景图像来进行显示，必要的时候呢，还可以将这四个图像进行这个平铺或者伸缩。


   2)、border-image属性指定边框的宽度

   在css3中除了可以使用border属性和border-width属性来指定宽度，我们还可以使用border-image属性进行指定边框的宽度。


   指定方法：`border-image: url("边框图像的路径") 上边距 右边距 下边距 左边距/border宽度 ;`


   另外border的宽度也可以对四条边进行分别设置，设置的方法：
   `border-image: url("边框图像的路径") 上边距 右边距 下边距 左边距/border上宽度 border右宽度 border下宽度 border左宽度;`

   3)、指定四条边的背景的显示方法

   在CSS3中可以在border-image属性中指定元素四条边中的图像，是以拉伸的方式显示，还是平铺的方式进行显示。

   指定方法如下：`border-image: url("边框图像的路径") 上边距 右边距 下边距 左边距/border宽度 topbottom leftright;`
   topbottom表示元素的上下两条边中图像的显示方法，leftright表示元素的左右两条边中的显示方式，在显示方法中可以指定的值有repeat、stretch和round。

   |  属性值   |   作用    |
   |------------|-----------|
|repeat：|将图像以平铺的方式进行显示。|
|stretch：|将图像以拉伸的方式进行显示。|
|round：|将图像进行平铺显示，但是如果最后一幅图不能被完全显示时，就不显示图像，把之前的图像扩大。|

### (二) CSS3的变形与动画
 
这css3中，可以利用transform功能来实现文字或图像的旋转、缩放、倾斜、移动这四种类型的变形处理。

1. 如何使用transform功能

   在css3中通过transform属性，来实现transform功能。

```css
-ms-transform:功能; /* IE 9 */
-moz-transform:功能; /* Firefox */
-webkit-transform:功能; /* Safari 和 Chrome */
-o-transform:功能; /* Opera */ 
```

2. rotate 旋转，在参数中规定角度

   使用方法：

```css
-ms-transform:rotate(角度); /* IE 9 */
-moz-transform:rotate(角度); /* Firefox */
-webkit-transform:rotate(角度); /* Safari 和 Chrome */
-o-transform:rotate(角度); /* Opera */ 
```

   rotate表示的是顺时针旋转，deg是CSS3中的角度单位。

3. scale缩放转换

   使用方法：`transform:scale(值)`，他的值是指定的缩放倍率，比如0.5就是缩放到50%，1就是100%，1.5就是放大点150%。
   
   可能的值：1）、`scale(x,y)`使元素X轴和Y轴同时缩放。2）、`scaleX(x)`元素仅X轴缩放。3）、`scaleY(y)`元素仅Y轴缩放。


4. 倾斜skew

   使用方法：`transform:skew(值)`，他的值是角度。

   可能的值：1）、`skew(x,y)` 使元素在水平和垂直方向同时扭曲（X轴和Y轴同时按一定的角度值进行扭曲变形）只有一个参数时，只在水平方向上倾斜。2）、`skewX(x)` 仅使元素在水平方向扭曲变形（X轴扭曲变形）3）、`skewY(y)` 仅使元素在垂直方向扭曲变形（Y轴扭曲变形）


5. 移动translate

   使用方法：`transform:translate(值)`，他的值是指定移动的距离。

   可能的值：1）、`translate(x,y)`水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）只有一个参数时，只在水平方向上移动；2）、`translateX(x)`仅水平方向移动（X轴移动）3）、`translateY(Y)`仅垂直方向移动（Y轴移动）


6. 对一个元素使用多种变形的方法

   使用方法：`transform:方法1 方法2 方法3 方法4；`

7. 改变元素基点transform-origin

   可能的值：`top left top right topleft center right bottom leftbottom bottom right`

8. Transition功能
   
   在CSS3中，如果使用动画功能可以使网页上文字或者图像具有动画效果,可以使背景颜色从一种颜色平滑过渡到另外一种颜色,Transition功能支持从一个属性值平滑到另外一个属性值,Animations功能支持通过关键帧的指定来在页面上产生更复杂的动画效果。

   css3中transition允许css的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值。

   transition属性的使用方法：

```css
-moz-transition: 语法; /* Firefox 4 */
-webkit-transition:语法; /* Safari 和 Chrome */
-o-transition:语法; /* Opera */
```

   语法：`transition: property duration timing-function delay;`

   transition主要包含四个属性值：

   1）、执行变换的属性：transition-property，属性规定应用过渡效果的 CSS 属性的名称。（当指定的 CSS 属性改变时，过渡效果将开始）值有三个类型：
    
   A、none 没有属性会获得过渡效果。B、all 所有属性都将获得过渡效果。C、property 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。


   2）、变换延续的时间：transition-duration；规定完成过渡效果需要花费的时间（以秒或毫秒计），默认值0没有效果

   3）、在延续时间段，变换的速率变化transition-timing-function；值：

   A、ease：（逐渐变慢）默认值，ease函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).

   B、linear：（匀速），linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).

   C、ease-in：(加速)，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).

   D、ease-out：（减速），ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).

   E、ease-in-out：（加速然后减速），ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)

   F、cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

   4）、变换延迟时间transition-delay；transition-delay是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行transition效果，其取值：`<time>`为数值，单位为s（秒）或者ms(毫秒)

9. Animations功能

   在CSS3之中我们除了可以使用transition实现动画效果之外呢，我们还可以使用Animations来实现动画效果。


   1)、使用transition和Animations的区别：

   transition和Animations的区别在于，transition只能通过指定属性的开始值与结束值，然后通过两属性值之间进行平滑过渡的方式来实现动画效果，所以transition不能实现复杂的动画效果，而Animations功能是是通过关键帧以及每个关键帧中的属性值来实现更为复杂的动画效果。


   2)、Animations的使用方法：

```css
@-webkit-keyframes 关键帧合集名称{创建关键帧的代码}
0%~100%{
 本关键帧中的样式
}
```

   关键帧创建好了之后，还要在元素的样式中使用该关键帧。方法如下：

```css
元素{
 -webkit-animation-name:关键帧合集名称;
 -webkit-animation-duration:5s;
 -webkit-animation-timing-function:linear;
 -webkit-animation-iteration-count:infinite;
}
```

   -webkit-animation-name指定合集名称，-webkit-animation-duration整个动画执行完成所需的时间、需要的时间，-webkit-animation-timing-function实现动画的方法,-webkit-animation-iteration-count属性的属性值设定为某个整数值，那么这个动画播放的次数就等于这个整数值（infinite是无限循环播放）。




   3)、实现动画的方法：

    A、linear：从开始到结束都是以同样的速度进行.

    B、ease-in：开始速度很慢，然后沿着曲线进行加快.

    C、ease-out：开始速度很快，然后沿着曲线进行减速.

    D、ease：开始时速度很快，然后沿着曲线进行减速，然后再沿着曲线加速.

    E、ease-in-out：开始时速度很慢，然后沿着曲线进行加速，然后再沿着曲线减速.
 
## 项目练习
- [border-image边框图像应用][88]
- [border-radius圆角边框应用][89]
- [CSS3的变形功能transform属性][90]
- [CSS3动画关键帧属性animations练习][91]
- [CSS3动画属性transition练习][92]

 
 

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


[88]: https://super456.github.io/study-html-css-2017/0814/border-image.html
[89]: https://super456.github.io/study-html-css-2017/0814/border-radius.html
[90]: https://super456.github.io/study-html-css-2017/0814/transform.html
[91]: https://super456.github.io/study-html-css-2017/0814/animations.html
[92]: https://super456.github.io/study-html-css-2017/0814/transition.html