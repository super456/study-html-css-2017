# 2017年8月8号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

## Canvas基础学习

### (一) 简单了解Canvas

   canvas是在html5中新增的一个重要元素，专门用来绘制图形。

1. 创建一个canvas画布

   画布的创建方法：指定id、width（画布宽度）、height（画布高度）。例如：`<canvas id="canvas" width="500" height="350"></canvas>`上面这个实例的意思就是，创建一个画布，长度为500，高度为350。

2. 引入绘画脚本

   引入脚本的方法：比如：`<script type="text/javascript" src="canvas.js" charset="utf-8"></script>`上面这个实例的意思就是：引入一个名为canvas的JS脚本，JS脚本的语言编码是utf-8。

3. 使用draw函数进行绘画

   在body的属性里面，使用`onload="draw('canvas');"`语句。调用脚本文件中的draw函数进行图形绘画。

### (二) 绘制一个矩形

1. 获取canvas元素

   用getElementById方法获取到canvas对象。

2. 取得上下文

   在绘制图形的时候要用到图形上下文，图形上下文是一个封装了很多绘图功能的对象。要使用canvas对象的getContext() 方法获得图形上下文。在draw函数中把参数设置为“2d”。

3. 填充与会绘制边框

   canvas绘制有两种方法：1）、填充（fill）填充是将图形内部填满。2）、绘制边框（stroke）绘制边框是不把图形内部填满，只是绘制图形的外框。

4. 设置绘制样式

   当我们在绘制图形的时候，首先要设定好绘制的样式，然后我们就可以调用有关的方法进行绘制。1）、fillStyle属性：填充的样式，在这个属性里面设置填入的填充颜色值。2）、strokeStyle属性：图形边框的样式，在这个属性里面设置填入边框的填充颜色。

5. 指定画笔宽度

   通过对上下文对象（context）的lineWidth属性来设置图形边框的宽度，任何直线的宽度都是可以通过lineWidth来设置直线的宽度的。

6. 设置颜色值

   绘制图形的时候要填充的颜色或者边框分别可以通过fillStyle属性和strokeStyle属性来指定。颜色的值可以使用

```css 
  16进制的颜色值（#000000）
   颜色名（black）
   rgb（rgba(0,0,0）)
   rgba（rgba(0,0,0,0.1)）
```

7. 绘制矩形

   使用fillRect方法和strokeRect方法来填充矩形和绘制矩形的边框。`context.fillRect（x,y,width,height）`， `context.strokeRect（x,y,width,height）`
   这两种方法的参数都是一样的，X是指矩形的起点横坐标，y是指矩形的纵坐标，坐标的原点是canvas画布的最左上角，width是指矩形的长度，height是指矩形的高度。
 
### (三) 绘制一个圆形

1. 开始创建路径

   使用图形上下文对象的beginPath方法。`context.beginPath（）;`
 
2. 创建图形路径

   创建圆形路径时，需要使用图形上下文对象的arc方法。`context.arc（x,y,radius,starAngle,endAngle,anticlockwise）`
   x是绘制圆形的起点横坐标，y是绘制圆形起点的纵坐标，radius是圆形的半径，starAngle是开始的角度，endAngle是结束的角度，anticlockwise是否按顺时针方向绘制。
   
   绘制半径与圆弧时指定参数为开始弧度与结束弧度，如果你喜欢使用角度，可以使用以下这个方法，把角度换成弧度。
   `var radius = degrees*Math.PI/180`
   
   这个里面的Math.PI表示的角度是180度，`Math.PI*2`的角度是360度。

3. 创建完成关闭路径

   使用图形上下文对象的closePath方法将路径关闭。`context.closepath();`

4. 设置绘制样式然后调用绘制方法进行绘制

```js
  context.fillStyle = 'rgba(255,0,0,0.25)';
  context.fill();
```

### (四) 绘制文字

1. 设置文字字体

   `context.font = "font-weight font-size font-family ";` context.font有三个参数，第一个参数font-weight。第二个参数font-size规定文本的字体尺寸，第三个参数font-family 规定文本的字体系列。

   font-family 可以的值是'ariSDal','arial','宋体','微软雅黑'...等等任何字体。

2. 设置文字垂直对齐方式

   `context.textBaseline = 'alphabetic';`属性值可以是top（顶部对齐）、hanging（悬挂）、middle（中间对齐）、、bottom（底部对齐）、alphabetic是默认值。

3. 设置文字水平对齐方式
 
   `conText.textAlign = "start"`。属性值可以设置为：start、end、left、right、center。

### (五) 保存文件

   很多时候绘制完成的图片需要保存，那么我们就可以使用到Canvas API来完成这最后一步！
   Canvas API使用toDataURL方法把绘画的状态输出到一个 data URL中然后重新装载，然后我们就可以把重新装载后的文件直接保存。

   Canvas API保存文件的原理实际上就是把我们绘画的状态动态输出到一个data URL地址所指向的数据中的过程。

   什么是data URL ?
   data URL实际上就是base64位编码的URL,主要用于小型的，可以在网页中直接嵌入，而不需要从外部嵌入数据，比如img元素里面的图像文件。

   data URL的格式 “data:image/jpeg;base64,/9j/4...”

   toDataURL的使用方法`canvas.toDataURL（type）;`这个方法使用一个参数type，表述输出数据的MIME类型。什么是MIME类型：
   `jpg  image/jpeg`

## 项目练习
- [Canvas绘制一个矩形][40]
- [Canvas绘制一个圆形][41]
- [Canvas绘制文字][42]
- [Canvas保存文件][43]
- [Canvas绘制动画][44]


**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


[40]: https://super456.github.io/study-html-css-2017/0808/canvas-rectangle.html
[41]: https://super456.github.io/study-html-css-2017/0808/canvas-circular.html
[42]: https://super456.github.io/study-html-css-2017/0808/canvas-text.html
[43]: https://super456.github.io/study-html-css-2017/0808/canvas-todataurl.html
[44]: https://super456.github.io/study-html-css-2017/0808/canvas-setinterval.html
 