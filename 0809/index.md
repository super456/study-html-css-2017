# 2017年8月9号学习内容：

## HTML5基础学习

### (一) 本地存储

1. Web Storsge

   在HTML5中，除了CANVAS元素，另外一个新增的非常重要功能就是可以在本地客户端储存数据的Web Storage功能。
   在HTML4 我们是使用的cookies在客户端保存用户名等等一些简单的用户信息。

   cookies的缺点：

   1）、大小限制在4KB；

   2）、带宽浪费；

   3）、难以操作；


   为了解决这样的一些问题，在HTML5中重新提供了在客户端保存数据的功能，他就是我们的“Web Storage”。

   这个小章节我们来简单了解，sessionStorage和localStorage之间的区别，掌握两者的基本用法。

   (1)、sessionStorage临时保存

   就是把数据保存在session对象之中。session就是在打开网站到关闭网站之间要求进行保存的数据。

   sessionStorage临时保存的用法：

```css
  sessionStorage.setitme('key','value');
  //或者是sessionStorage.key = 'value';
```

   临时数据读取的方法：

```css
  变量=sessionStorage.getItem（'key'）
  //或者是sessionStorage.key;
```
 
   (2)、localStorage永久保存

   就是将数据保存在客户端本地的硬件设备至上面，如果浏览器被关闭，这个数据不会丢失，下次打开可以继续使用。这个功能就是我们的localStorage永久保存功能。

   localStorage永久保存数据的方法：

```css
 localStorage.setItem（'key','value'）;
 //或者
 localstorage.key;
```

   读取的方法：

```css
 变量=localStorage.getItem（'key'）;
 //或者
 变量=localStorage.key;
```

### (二) 影音多媒体

   video元素与audio元素
 
1. video元素与audio元素的基础知识

   video元素--在HTML5中专门用来播放网络上的视频或者电影。

   audio元素--在HTML5中专门用来播放网络上的音频。
 
   使用video和audio元素进行播放时就不在需要使用其他的插件了，只要我们的浏览器支持HTML5就可以了！


   浏览器的支持：Safari3以上、Firefox4以上、0pera10以上、chrome3.0以上版本都对audio元素和video元素支持！


   使用方法：

   audio元素只需要给他指定一个src属性：`<audio src="MP3.mp3" controls="controls"></audio>`

   对于不支持的浏览器我们可以在这对元素之间加入提示语句来代替：`<audio src="MP3.mp3" controls="controls">您的浏览器不支持Audio元素</audio>`

   video元素要设定好长宽和src属性就可以了：`<video width="750" height="400" src="time.mp4"></video>`
   
   同样对于不支持video的浏览器可以在中间加入替换文字：`<video width="750" height="400" src="time.mp4">您的浏览器不支持video元素</video>`


   source元素指定多个播放格式与编码：source元素可以为同一个媒体数据指定多个播放格式与编码方式，以确保浏览器可以从中选择一种自己支持的播放格式进行播放。选择顺序自上而下，直到选择到所支持的格式为止。

   使用方法：

```html
<video>
 <source src="video.m4v" type="video/mp4" />
 <source src="video.webm" type="video/webm" />
 <source src="video.ogv" type="video/ogg" />
 <source src="video.mp4" />
</video>
```

   各种设备对编码格式的支持情况：

```vb
webm(.webm)格式的视频 火狐4.0+、chrome6.0+、opera10.6+
mp4(.m4v)格式的视频 IE9.0+ 、Safari3.1+ 、iso5.0 、Android4.0+
ogg(.ogv)格式的视频 火狐3.5+、chrome3.0+、opera10.5+
mp4(.mp4)格式的视频 IE9.0+ 、Safari3.1+ 、iso3.0 、Android2.3+
```

 
2. viedo与audio的常用属性

   audio元素和video元素的常用属性

   src属性：在这个属性里面指定媒体数据的URL地址。


   controls属性：指定是否为视频或者音频数据添加浏览器自带的播放控制条，控制条中有播放按钮、暂停等按钮。
   
   使用方法：`<video src="video.mp4" controls="controls"></video>`

   width和height属性（video独有）：指定视频的宽度与高度。

   使用方法：`<video src="video.mp4" width="650" height="450"></video>`


   autoplay属性：这个属性指定是否当我们网页加载完成之后就开始自动播放。

   preload属性：这个属性指定是否对数据进行预加载，如果是的话，浏览器会将视频数据或者音频数据进行缓冲，这样做可以加快播放的速度。

   preload属性的三个值：

| 属性值 | 作用 |
|-------|------|
|none |表示不进行预加载。|
 |metadata |表示只预加载媒体的元数据。|
 |auto(默认值) |表示预加载全部的视频或者音频。|

   使用方法：`<video src="video.mp4" preload="auto" ></video>`

   poster属性（video独有）：当视频不可以播放的时候，使用poster元素向用户展示一张图片代替视频。

   使用方法：`<video src="video.mp4" poster="video.jpg"></video>`

   loop属性：指定是否循环播放视频或者音频数据。

   使用方法：`<video src="video.mp4" autoplay="auto" loop="loop"></video>`

   error属性：读取过程中一旦发生错误，返回一个Media Error对象，这个对象的code返回对应的错误状态，默认情况下video和audio的error属性都是null。4种错误状态，返回一个数字值，它表示音频/视频的错误状态：

```vb
 1 = MEDIA_ERR_ABORTED - 取回过程被用户中止
 2 = MEDIA_ERR_NETWORK - 当下载时发生错误
 3 = MEDIA_ERR_DECODE - 当解码时发生错误
 4 = MEDIA_ERR_SRC_NOT_SUPPORTED - 媒体不可用或者不支持音频/视频
```

   读取错误状态示例：

```js
<video id="video" src="video.mp4"></video>
<script type="text/javascript">
 var video = document.getElementById('video');
 video.addEventListener("error",function(){
 var error = video.error;
 switch (error.code){
    case 1:
        alert('取回过程被用户中止。');
        break;
    case 2:
        alert('当下载时发生错误。');
        break;
    case 3:
        alert('当解码时发生错误。');
        break;
    case 4:
        alert('媒体不可用或者不支持音频/视频。');
        break;
 }
 },false);
</script>
```

   networkState属性：networkState 属性返回音频/视频的当前网络状态（activity）4种错误状态，表示音频/视频元素的当前网络状态：

```vb
 0 = NETWORK_EMPTY - 音频/视频尚未初始化
 1 = NETWORK_IDLE - 音频/视频是活动的且已选取资源，但并未使用网络
 2 = NETWORK_LOADING - 浏览器正在下载数据
 3 = NETWORK_NO_SOURCE - 未找到音频/视频来源
```

   networkState属性：networkState 属性返回音频/视频的当前网络状态（activity）
 
3. video与audio的4种方法
 
   video元素和audio元素的4种方法

   play方法：使用play方法来播放媒体，自动将元素的paused属性的值变成false。

   pause方法：使用pause方法来暂停播放，自动将元素的paused属性的值变成true。

   load方法：使用load方法来重新载入媒体进行播放，自动将元素的playbackRate属性的值变成defaultPlaybackRate属性的值，自动把error的值变成null。

   canPlayType方法：使用canPlayType方法来测试浏览器是否支持指定的媒体类型。

   使用方法如下：

```vb
 var support = videoElment.canPlayType(type);
canPlayType() 方法可返回下列值之一：
  "probably" - 浏览器最可能支持该音频/视频类型
  "maybe"   - 浏览器也许支持该音频/视频类型
  ""           - （空字符串）浏览器不支持该音频/视频类型
```
### (三) 拖放API

1. 拖放的步骤

   (1)、对象元素的draggable属性设置为true（draggable="true"）。还需要注意的是a元素和img元素必须指定href。

   (2)、编写与拖放有关的事件处理代码。事件产生事件的元素描述：

|   函数事件处理  |   作用   |
|----------------|----------|
|dragstart| 被拖放的元素，开始拖放操作。|
|drag| 被拖放的元素，拖放过程中。|
|dragenter| 拖放过程中鼠标经过的元素，被拖放的元素开始进入本元素的范围之内。|
|dragover| 拖放过程中鼠标经过的元素，被拖放的元素正在本元素范围内移动。|
|dragleave| 拖放过程中鼠标经过的元素，被拖放的元素离开本元素的范围。|
|drop| 拖放的目标元素，其他元素被拖放到了本元素中。|
|dragend| 拖放的对象元素，拖放操作结束。|
 
2. DataTransfer对象的属性与方法

   DataTransfer对象的属性和方法属性/方法描述dropEffect属性表示拖放操作的视觉效果，允许设置其值，这个效果必须用在effectAllowed属性指定的允许的视觉效果的范围内，允许指定的值none、copy、link、moveeffectAllowed属性 用来指定当元素被拖放时所允许的视觉效果，可以指定的值copy、link 、move、copylink 、linkmove、all、none、uninitializedtypes属性存入数据的种类，字符串的伪数组void clearData（DOMString format）方法清除DataTransfer对象中存放的数据，如果省略掉参数format就会清除全部数据。void steData（DOMString format，DOMStrong data）向DataTransfer对象中存入数据DOMString getData(DOMString format)从DataTransfer对象中读取数据void setDragImage(Element image，long x，long y)用img元素来设置拖放图标


   clearData方法可以用于清除DataTransfer对象中的数据。


3. 拖放时的效果

   设置拖放时的视觉效果：

   dropEffect属性与effectAllowed属性结合起来可以设定拖放时的视觉效果。effectAllowed属性表示一个元素被拖放时所允许的视觉效果，一般在ondragstart事件中设定，他的值如下：属性值说明copy允许被拖动的元素被复制到项目中move允许将被拖动元素移动到被拖动的目标元素中link通过拖放操作，被拖动的元素会连接到拖到的目标元素上copylink被拖动元素被复制或链接到拖动的目标元素中，根据拖动的目标元素来决定执行复制操作还是链接操作copyMove被拖动元素复制或移动到拖到的目标元素中，根据被拖动的目标元素来决定复制操作还是移动操作linkmove被拖动元素被连接或移动到拖动的目标元素中，根据拖动的目标元素来决定执行链接操作还是移动操作all允许执行所有拖动操作none不允许执行任何拖动操作uninyialize不指定effectAllowed属性值。这是将执行浏览器中默认允许的拖动操作，但是这个操作不能通过effectAllowed属性值来获取dropEffect属性表示实际拖放时的视觉效果，一般在ondragover事件中指定，允许的值none、copy、link、move。

## 项目练习
- [sessionStorage练习][46]
- [localStorage练习][47]
- [简单的本地访客留言实战][48]
- [video元素和audio元素练习][49]
- [拖放图片练习][50]

[46]: https://super456.github.io/study-html-css-2017/0809/sessionStorage.html
[47]: https://super456.github.io/study-html-css-2017/0809/localStorage.html
[48]: https://super456.github.io/study-html-css-2017/0809/simple-mess-borad.html
[49]: https://super456.github.io/study-html-css-2017/0809/video-audio.html
[50]: https://super456.github.io/study-html-css-2017/0809/drap.html