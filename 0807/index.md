# 2017年8月7号学习内容：

**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**

##  HTML5基础学习


### (一) 新增和废除元素的认识

1. 其他新增元素

   (1)、新增的figure元素与figcaption元素

   figure元素是一种元素的组合，带有可选标题。figure元素用来表示页面上一块独立的内容，如果将他从网页上删除不给我们的网页造成影响。

   figcaption元素表示figure元素的标题，它属于figure元素，figcaption元素必须书写在figure元素内部，可以写在figure元素内的其他从属元素前面或后面。一个figure元素内最多只允许放置一个figcaption元素。
   
   (2)、新增的details元素与summary元素

   details元素是一种用于标识该元素内部的子元素可以被展开、收缩显示的元素。details元素具有一个布尔类型的open属性，当该值为true时，该元素内部的子元素应该被展开显示，当该属性值为false时，其内部的子元素应该被收缩起来不现实。该属性的默认值为false，当页面打开时其内部的子元素应该处于收缩状态。

   summary元素从属于details元素，用鼠标点击summary元素中的内容文字时，details元素中的其他所有从属元素将会展开或者收缩。如果details元素内没有summary元素，浏览器那你会提供默认的文字以供点击，例如“details”

   (3)、新增的mark元素

   mark元素表示页面中需要突出显示或高亮显示的，对于当前用户具有参考作用的一段文字。通常在引用原文时使用mark元素，目的是引起读者的注意。mark元素是对原文内容有补充作用的一个元素，他应该用在一段原文作者不认为重要的，但是现在为了与原文作者不相关的其他目的而需要突出显示或者高亮显示的文字上面。
  
   mark元素最主要的目的就是吸引当前用户的注意。

   mark元素除了高亮显示之外，还有一个作用就是在引用原文时，为了某种特殊的目的而把作者没有表示出来的内容重点表示出来。

   (4)、新增的progress元素

   progress元素代表一个任务的完成进度，这个进度可以使不确定的，表示进度z正在进行，但不清楚这个还有多少工作量没有完成，也可以用0到某个最大数字（比如100）之间的s数字来表示准确的进度情况（比如百分比）

   该元素具有两个表示当前任务完成情路昂的属性，value属性表示已经完成了多少工作量，max属性表示总共有多少工作量。工作量的单位是随意的，不指定的。

   在设定属性点时候，value属性和max属性只能指定为有效的浮点数，value属性必须大于0，且小于或等于max的属性，max的属性必须大于0。

   (5)、新增的meter元素

   meter元素表示规定范围内的数量值，meter元素有6个属性。

|  属性值    |  作用        |
|-----------|--------------|
| value | 在元素中特地地表示出来的实际值。该属性值默认为0，可以为该属性制定一个浮点小数值。|
| min  | 指定规定范围时允许实用的最小值，默认0，在设定该属性时所设定的值不能小于0。|
| max | 指定规定的范围时允许使用的最大值，如果设定时该属性值小于min的值，那么把min属性的值视为最大值。max属性的默认值1。|
|low | 规定范围的下限值，必须小于或者等于high的值。|
| high | 规定范围的上限值。如果该属性值小于low属性的值，那么把low属性的值视为high属性的值，同样如果该属性的值大于max属性的值，那么把max属性的值视为high的值。|
|optimum | 最佳值属性值必须在min属性值与max属性值之间，可以大于high属性值。|


2. 废除元素

   (1)、能使用CSS代替的元素：basefont、big、center、font、s、strike、tt、u


   (2)、不在使用frame框架 

   对于frameset元素、frame元素与noframes元素，由于frame框架对页面可用性存在负面影响，在html5里面已经不支持frame框架，只支持iframe框架，同时废除以上这三个元素。


   (3)、只有部分浏览器支持的元素

   对于applet元素、bgsound、blink、marquee元素，由于只有部分浏览器支持这些元素，特别是bgsound元素以及marquee元素，只被IE浏览器支持，所以在HTML5里面被废除！而applet元素可以由embed元素或者object元素代替，bgsound元素由audio元素代替，marquee可以使用javascript来代替！


   (4)、其他被废除的元素

   A、废除rb元素，使用ruby元素代替
   B、废除acronym元素，使用abbr元素代替
   C、废除dir元素，使用ul元素代替
   D、废除inindex元素，使用form元素与input元素相结合的方式代替
   E、废除listing元素，使用pre元素代替
   F、废除xmp元素，使用code元素代替
   G、废除nextid元素，使用GUIDS代替
   H、废除plaintext元素，使用“text/plian” MIME类型代替

3. Html5大纲

   (1)、HTML5大纲上

   在HTML5中，可以使用之前我们所学习的结构元素来编排一份网页大纲，那样我们就可以通过这个网页大纲来了解网页中具有那些内容，网页中以什么样的形式来组织这些内容有更清楚的认识。


   HTML5大纲分析工具：<http://gsnedders.html5.org/outliner>  


   分析一个网页的大纲：找到出现 Untitled Section 的原因并解决！

   header元素可以做大纲吗？
  
   在header元素中用图片来生成大纲的方法！


   关于nav元素和aside元素。

   (2)、HTML5大纲下

   **大纲的编排规则：**关于HTML的大纲编排，我们可以划分为“显式编排”和“隐式编排”两种方式。

   显式编排：显式编排是指明确使用section元素进行分块来创建网页文档，每个内容区块内使用标题（h1~h6）。


   隐式编排：所谓的隐式编排，就是我们不使用section元素进行明确的区块划分，而是根据我们写的（h1-h6、hgroup等）元素进行自动创建区块，因为HTML5的分析器可以根据不同级别的标题判断出对应的内容区块。

   标题分级：不同的标题有不同的级别，在（h1-h6）中h1的级别最高，而h6的级别最低。所以在隐式编排的情况下就会按照以下规则生成！

   1）、如果出现新的标题比上一个标题级别低，那么将生成下级内容区块！

   2）、如果新出现的标题比上面出现的一个标题级别高，或者两者级别相同，那么就生成新的内容区块！


   不同的内容区块可以使用相同级别的标题：父内容区块与子内容区块都可以使用相同级别的H1标题。
 
### (二) 加强版的ol与dl元素

1. ol的start属性和reversed属性
   
   (1)、可以通过start属性来定义标号的开始值。
   
   (2)、可以通过reversed属性来进行反向编号。

2. 重新定义含义的dl元素

   dl元素在HTML4中：dl元素在HTML4中，是一个专门用来定义术语的列表。

   dl元素在HTML5中：把dl元素进行了重定义。每一项包含一条或者多条带名字的dt元素，用来表示术语，dt元素后面紧跟一个或者多个dd元素，用来表示定义。重定义后的dl列表包含多个带名字的列表项。

## 项目练习
- [figure-figcaption元素练习](28)
- [details-summary元素练习](29)
- [mark元素练习](30)
- [progress元素练习](31)
- [meter元素练习](32)
- [HTML5大纲练习](33)
- [HTML5显示和隐式大纲练习](34)
- [网页大纲元素练习](35)
- [加强版ol元素练习](37)
- [加强版dl元素练习](38)



**[返回我的学习主页列表](https://super456.github.io/study-html-css-2017/)**


[28]: https://super456.github.io/study-html-css-2017/0807/figure-figcaption.html
[29]: https://super456.github.io/study-html-css-2017/0807/details-summary.html
[30]: https://super456.github.io/study-html-css-2017/0807/mark.html
[31]: https://super456.github.io/study-html-css-2017/0807/progress.html
[32]: https://super456.github.io/study-html-css-2017/0807/meter.html
[33]: https://super456.github.io/study-html-css-2017/0807/untitled-section.html
[34]: https://super456.github.io/study-html-css-2017/0807/title-section.html
[35]: https://super456.github.io/study-html-css-2017/0807/html5-web-outline.html
[37]: https://super456.github.io/study-html-css-2017/0807/ol-list.html
[38]: https://super456.github.io/study-html-css-2017/0807/dl-list.html