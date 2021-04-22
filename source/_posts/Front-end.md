---
title: 前端
date: 2021-01-28 19:22:33
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/Front-end/js2.jpg
mathjax: true
summary: 学了就忘
categories: 学习笔记
tags:
 - 前端
 - HTML
 - CSS
 - JavaScript
typora-root-url: ..
---



在学校学过，然后就没有然后了。。。

本篇大多内容来自菜鸟教程

## html

内容不多，看着菜鸟教程入门的写了一个[超级无敌大浆糊页面](/html/Front-end/dazahui.html)

不过hexo居然丧心病狂地把我这个页面也给渲染了。。。查到的[解决办法](https://blog.csdn.net/weixin_41287260/article/details/99705257)

## CSS

CSS 指层叠样式表 (**C**ascading **S**tyle **S**heets)
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明:
选择器通常是您需要改变样式的 HTML 元素。每条声明由一个属性和一个值组成。

例：`p {color:red;text-align:center;}`

CSS注释：

`/*这是个注释*/`



### id 和 class 选择器

id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

```css
#para1
{
    text-align:center;
    color:red;
}
```

class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示：

```css
/*所有拥有 center 类的 HTML 元素均为居中*/
.center {text-align:center;}
/*所有的 p 元素使用 class="center" 让该元素的文本居中*/
p.center {text-align:center;}
```

 **类名的第一个字符不能使用数字！**



### 如何插入样式表

插入样式表的方法有三种:

- 外部样式表(External style sheet)
- 内部样式表(Internal style sheet)
- 内联样式(Inline style)

#### 外部样式表

当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，可以通过改变一个文件来改变整个站点的外观。每个页面使用 link 标签链接到样式表。 link 标签在（文档的）头部：

~~~html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
~~~

外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 html 标签。样式表应该以 .css 扩展名进行保存。下面是一个样式表文件的例子：

~~~css
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("/images/back40.gif");}
~~~

#### 内部样式表

当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 style 标签在文档头部定义内部样式表

~~~html
<head>
    <style>
        hr {color:sienna;}
        p {margin-left:20px;}
        body {background-image:url("images/back40.gif");}
        table,th,td{}/*逗号：多个标签*/
        tr.alt td{}/*空格：class为alt的tr下层的td*/
    </style>
</head>
~~~

#### 内联样式

请慎用这种方法

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。本例展示如何改变段落的颜色和左外边距：

~~~html
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
~~~

<p style="color:sienna;margin-left:20px">这是一个段落。</p>

#### 多重样式优先级

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。一般情况下，优先级如下：

**内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式**

>**注意：***如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。*



### CSS backgrounds(背景)

- background-color
- background-image
- background-repeat
- background-attachment
- background-position
- background

#### background-color 背景颜色

red;
\#00ff00;
rgb(255,0,0);

#### background-image 背景图片

`body {background-image:url('1.jpg');}`

#### background-repeat 背景图片重复平铺

默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体。一些图像如果在水平方向与垂直方向平铺，这样看起来很不协调，

`background-repeat:repeat-x;`

这样就让其只在水平方向平铺

#### background-attachment 背景图片定位

~~~css
body
{
background-image:url('img_tree.png');
background-repeat:no-repeat;
background-position:right top;
}
~~~

这样就实现了图片不重复，且放在右上角

#### background-position 背景随页面滚动

background-attachment属性设置背景图像是否固定或者随着页面的其余部分滚动。

#### background 简写属性

`body {background:#ffffff url('img_tree.png') no-repeat right top;}`

顺序为上面介绍的顺序，无需全部使用，可以按照页面的实际需要使用.

<iframe src="https://www.runoob.com/try/try.php?filename=trycss_background_shorthand2" width="100%" height="600"></iframe>



### CSS text(文本)

- color
- text-align
- text-decoration
- text-transform
- text-indent
- letter-spacing
- line-height
- word-spacing
- text-shadow

#### color 文本颜色

`<span style="color:red;">这是红字</span>`

<span style="color:red;">这是红字</span>

#### text-align 文本的对齐方式

`<p style="text-align:center;">我在中间</p>`

<p style="text-align:center;">我在中间</p>

#### text-decoration 文本上的线

~~~html
<p style="text-decoration:overline;">上面的线</p>
<p style="text-decoration:line-through;">删除线</p>
<p style="text-decoration:underline;">底下的线</p>
<p style="text-decoration:underline overline dotted blue;">蓝色上下虚线</p>
<p style="text-decoration:underline wavy red;">红色波浪形下划线</p>
<a href="https://ep4l.com" style="text-decoration:none;" >超链接去线</a>
~~~

<div>
    <p style="text-decoration:overline;">上面的线</p>
    <p style="text-decoration:line-through;">删除线</p>
    <p style="text-decoration:underline;">底下的线</p>
    <p style="text-decoration:underline overline dotted blue;">蓝色上下虚线</p>
    <p style="text-decoration:underline wavy red;">红色波浪形下划线</p>
    <a href="https://ep4l.com" style="text-decoration:none;" >超链接去线</a>
</div>

#### text-transform 大小写转换

可以转变文本的大小写

~~~html
<p style="text-transform:uppercase;">This is some text.</p>
<p style="text-transform:lowercase;">This is some text.</p>
<p style="text-transform:capitalize;">This is some text.</p>
~~~

<p style="text-transform:uppercase;">This is some text.</p>
<p style="text-transform:lowercase;">This is some text.</p>
<p style="text-transform:capitalize;">This is some text.</p>

#### text-indent 首行缩进

文本缩进属性是用来指定文本的第一行的缩进。

`<p style="text-indent:50px;">balabala</p>`

<p style="text-indent:50px;">车位费幕后成为覅海外仓粉煤灰IC我没法hi欧吃完饭后IC我为此欧辰我IEhi从未hi出没无常我覅欧美汇慈文传媒是服务器从IC我粗黑触怒万能充我拿出WiFi从未in哦</p>

#### 其他属性

##### letter-spacing 字符之间的空间：

~~~html
<p style="letter-spacing:2px;">This is some text.</p>
<p style="letter-spacing:-3px;">This is some text.</p>
~~~

<p style="letter-spacing:2px;">This is some text.</p>
<p style="letter-spacing:-3px;">This is some text.</p>

##### line-height 行与行之间的空间：

~~~html
<p style="line-height:70%;">
    This is some text.<br>
    This is some text.<br>
</p>
<p style="line-height:200%;">
    This is some text.<br>
    This is some text.<br>
</p>
~~~

<p style="line-height:70%;">
    This is some text.<br>
    This is some text.<br>
</p>
<p style="line-height:200%;">
    This is some text.<br>
    This is some text.<br>
</p>

##### word-spacing 单词之间的空间：

~~~html
<p style="word-spacing:30px;">
    This is some text. This is some text.
</p>
~~~

<p style="word-spacing:30px;">
This is some text. This is some text.
</p>

##### text-shadow 文本阴影：

~~~html
<p style="color:white;text-shadow:2px 2px 4px #000000;">
    This is some text. This is some text.
</p>
~~~

<p style="color:white;text-shadow:2px 2px 4px #000000;">
This is some text. This is some text.
</p>

~~~html
<p style="text-shadow:2px 2px blue;">This is some text.</p>
~~~

<p style="text-shadow:2px 2px blue;">This is some text.</p>



### CSS fonts(字体)

- font-family 
- font-style
- font-size 
- font-weight
- font-variant
- font

CSS字体属性定义字体，加粗，大小，文字样式。

#### font-family  字体

font-family 属性设置文本的字体系列。
font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。

`p{font-family:"Times New Roman", Times, serif;}`

[常用的安全字体组合](https://www.runoob.com/cssref/css-websafe-fonts.html)

#### font-style 字体样式

~~~html
<p style="font-style:normal;">这是一个段落,正常。</p>
<p style="font-style:italic;">这是一个段落,斜体。</p>
<p style="font-style:oblique;">这是一个段落,斜体。</p>
~~~

<p style="font-style:normal;">这是一个段落,正常。</p>
<p style="font-style:italic;">这是一个段落,斜体。</p>
<p style="font-style:oblique;">这是一个段落,斜体。</p>

#### font-size 字体大小

能否管理文字的大小，在网页设计中是非常重要的。但是，你不能通过调整字体大小使段落看上去像标题，或者使标题看上去像段落。
请务必使用正确的HTML标签，就h1 - h6表示标题和p表示段落：
字体大小的值可以是绝对或相对的大小。
如果你不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（16px=1em）。

##### 用em来设置字体大小

1em和当前字体大小相等。在浏览器中默认的文字大小是16px。

~~~html
<p style="font-size:2.5em;">This is some text.</p> /* 40px/16=2.5em */
<p style="font-size:0.875em;">This is some text.</p> /* 14px/16=0.875em */
~~~

<p style="font-size:2.5em;">This is some text.</p> 
<p style="font-size:0.875em;">This is some text.</p> 

##### 使用百分比和EM组合

在所有浏览器的解决方案中，设置 body元素的默认字体大小的是百分比：

`body {font-size:100%;}`

在所有浏览器中，可以显示相同的文本大小，并允许所有浏览器缩放文本的大小。

#### 其他属性

- font-weight: bold;                                              设置粗体
- font-variant: small-caps;                                   设置小号的大写
- font: italic bold 12px/30px Georgia,serif;       简写



### CSS 链接状态选择器

链接的样式，可以用任何CSS属性（如颜色，字体，背景等）。

特别的链接，可以有不同的样式，这取决于他们是什么状态。

这四个链接状态是：

- a:link - 正常，未访问过的链接
- a:visited - 用户已访问过的链接
- a:hover - 当用户鼠标放在链接上时
- a:active - 链接被点击的那一刻

当设置为若干链路状态的样式，也有一些顺序规则：

- a:hover 必须跟在 a:link 和 a:visited后面
- a:active 必须跟在 a:hover后面

<iframe src="https://www.runoob.com/try/try.php?filename=trycss_link2" width="100%" height="600"></iframe>

这些状态写入内联样式好像需要js



### CSS 列表项标记

- list-style-type

用来设置列表项标记

~~~html
<ul style="list-style-type:circle;">
  <li>这是</li>
  <li>圈圈</li>
</ul>
<ul style="list-style-type:square;">
  <li>这是</li>
  <li>方块</li>
</ul>
<ol style="list-style-type:upper-roman;">
  <li>这是</li>
  <li>大写罗马字母</li>
</ol>
<ol style="list-style-type:lower-alpha;">
  <li>这是</li>
  <li>小写字母</li>
</ol>
<ul style="list-style-image:url('https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/favicon-16x16.png');">
    <li>这是</li>
    <li>图片</li>
</ul>
~~~

<ul style="list-style-type:circle;">
  <li>这是</li>
  <li>圈圈</li>
</ul>
<ul style="list-style-type:square;">
  <li>这是</li>
  <li>方块</li>
</ul>
<ol style="list-style-type:upper-roman;">
  <li>这是</li>
  <li>大写罗马字母</li>
</ol>
<ol style="list-style-type:lower-alpha;">
  <li>这是</li>
  <li>小写字母</li>
</ol>
<ul style="list-style-image:url('https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/favicon-16x16.png');">
    <li>这是</li>
    <li>图片</li>
</ul>



### CSS table(表格)

- border
- border-collapse
- border-spacing
- text-align / vertical-align
- padding
- background-color / color

#### border 表格边框

对table/th/td使用

`border: 1px solid black;`

#### border-collapse 折叠边框

对table使用

设置表格的边框是否被折叠成一个单一的边框或隔开

`border-collapse:collapse;`

#### border-spacing 边框间距（仅用于"边框分离"模式）

对table使用

`    border-collapse:separate;  `

`border-spacing:10px 50px;`

#### 表格文字对齐

`text-align:right;`去

`vertical-align:bottom;`

#### padding 填充属性

对table/th/td使用，可以写4个值

`padding:15px;`

#### 表格颜色

对table/th/td使用

`    background-color:green;`

`color:white;`



### CSS 盒子模型

所有HTML元素可以看作盒子。
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。
盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。
下面的图片说明了盒子模型(Box Model)：

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

![](https://www.runoob.com/images/box-model.gif)

<div style="
    background-color: lightgrey;
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;">这里是盒子内的实际内容。有 25px 内间距，25px 外间距、25px 绿色边框。</div>

#### 元素的宽度和高度

**重要:** 当您指定一个 CSS 元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完整大小的元素，你还必须添加内边距，边框和边距。



### CSS Border(边框)

CSS边框属性允许你指定一个元素边框的样式和颜色。

- border-style
- border-width
- border-color
- 各边分别设置
- border

#### border-style 边框样式

<div>
    <p style="border-style:none">none:无边框。</p>
    <p style="border-style:dotted">dotted:虚线边框。</p>
    <p style="border-style:dashed">dashed:虚线边框。</p>
    <p style="border-style:solid">solid:实线边框。</p>
    <p style="border-style:double">double:双边框。</p>
    <p style="border-style:groove"> groove:凹槽边框。</p>
    <p style="border-style:ridge">ridge:脊状边框。</p>
    <p style="border-style:inset">inset：嵌入边框。</p>
    <p style="border-style:outset">outset：外凸边框。</p>
    <p style="border-style:hidden">hidden：隐藏边框。</p>
</div>

#### border-width 边框宽度

为边框指定宽度有两种方法：可以指定长度值，比如 2px 或 0.1em(单位为 px, pt, cm, em 等)，或者使用 3 个关键字之一，它们分别是 thick 、medium（默认值） 和 thin。

**注意：**CSS 没有定义 3 个关键字的具体宽度，所以一个用户可能把 **thick** 、**medium** 和 **thin** 分别设置为等于 5px、3px 和 2px，而另一个用户则分别设置为 3px、2px 和 1px。

**注意:** "border-width" 属性 如果单独使用则不起作用。要先使用 "border-style" 属性来设置边框。

<div>
    <p style="border-style:solid;border-width:thick"> thick</p>
    <p style="border-style:solid;border-width:medium"> medium</p>
    <p style="border-style:solid;border-width:thin"> thin</p>
</div>

#### border-color 边框颜色

**注意：** border-color单独使用是不起作用的，必须得先使用border-style来设置边框样式。

<div>
    <p style="border-style:solid;border-color:red;">实线红色边框</p>
    <p style="border-style:solid;border-color:#98bf21;">实线绿色边框</p>
</div>

#### 单独设置各边

~~~html
<div>
    <p style="
    border-top-style:dotted;
	border-right-style:solid;
	border-bottom-style:dotted;
	border-left-style:solid;
    border-left-width:15px;
    border-color:#ff0000 #00ff00 #0000ff rgb(250,0,255);">两个不同的边界样式。</p>
</div>
~~~

<div>
    <p style="
    border-top-style:dotted;
	border-right-style:solid;
	border-bottom-style:dotted;
	border-left-style:solid;
    border-left-width:15px;
    border-color:#ff0000 #00ff00 #0000ff rgb(250,0,255);">两个不同的边界样式。</p>
</div>

上面的例子也可以设置一个单一属性：

`<p style="border-style:dotted solid;">两个不同的边界样式。</p>`

<p style="border-style:dotted solid;">两个不同的边界样式。</p>

border-style属性可以有1-4个值：

- 4个值的顺序：上、右、下、左
- 3个值的顺序：上、左右、下
- 2个值的顺序：上下、左右

#### border 简写属性

`<p style="border:5px solid red;">简写</p>`

<p style="border:5px solid red;">简写</p>

`<p style="border-style:solid;border-top:thick double #ff0000;">简写</p>`

<p style="border-style:solid;border-top:thick double #ff0000;">简写</p>

#### 其他属性

`<p style="border:1px solid; border-radius:16px; padding:5px">圆角边框</p>`

<p style="border:1px solid; border-radius:16px; padding:5px">圆角边框</p>

`<p style="background-color:#ddffff; padding:10px;border-left:6px solid #2196F3">背景和左边框配合</p>`

<p style="background-color:#ddffff; padding:10px;border-left:6px solid #2196F3">背景和左边框配合</p>

### CSS outline(轮廓)

轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。

轮廓设置方法和边框相同，把border改为outline即可

![](https://www.runoob.com/images/box_outline.gif)

`<p style="border:10px red solid;outline:25px blue dotted;">这是边框和轮廓</p>`

这是上面的字

<p style="border:10px red solid;outline:25px blue dotted; ">这是边框和轮廓</p>

这是下面的字

可以看见，outline是不占空间的，即不会增加额外的width或者height或者margin。

### CSS margin(外边距)

margin 可以单独改变元素的上，下，左，右边距，也可以一次改变所有的属性。

![](https://www.runoob.com/wp-content/uploads/2013/08/VlwVi.png)

#### 可能的值

| 值       | 说明                                        |
| :------- | :------------------------------------------ |
| auto     | 设置浏览器边距。 这样做的结果会依赖于浏览器 |
| *length* | 定义一个固定的margin（使用像素，pt，em等）  |
| *%*      | 定义一个使用百分比的边距                    |

### CSS padding(填充)

CSS padding（填充）是一个简写属性，定义元素边框与元素内容之间的空间，即上下左右的内边距。

#### 可能的值

| 值       | 说明                                |
| :------- | :---------------------------------- |
| *length* | 定义一个固定的填充(像素, pt, em,等) |
| *%*      | 使用百分比值定义一个填充            |

### CSS 分组 和 嵌套 选择器

#### 分组选择器

~~~html
<style>
    h1,h2,p 
    {
        color:green; 
    }
</style>
~~~

#### 嵌套选择器

它可能适用于选择器内部的选择器的样式。

在下面的例子设置了三个样式：

- **p{ }**: 为所有 **p** 元素指定一个样式。
- **.marked{ }**: 为所有 **class="marked"** 的元素指定一个样式。
- **.marked p{ }**: 为所有 **class="marked"** 元素内的 **p** 元素指定一个样式。
- **p.marked{ }**: 为所有 **class="marked"** 的 **p** 元素指定一个样式。

### CSS 尺寸 (Dimension)

CSS 尺寸 (Dimension) 属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。

| 属性                                                         | 描述                 |
| :----------------------------------------------------------- | :------------------- |
| [height](https://www.runoob.com/cssref/pr-dim-height.html)   | 设置元素的高度。     |
| [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 设置行高。           |
| [max-height](https://www.runoob.com/cssref/pr-dim-max-height.html) | 设置元素的最大高度。 |
| [max-width](https://www.runoob.com/cssref/pr-dim-max-width.html) | 设置元素的最大宽度。 |
| [min-height](https://www.runoob.com/cssref/pr-dim-min-height.html) | 设置元素的最小高度。 |
| [min-width](https://www.runoob.com/cssref/pr-dim-min-width.html) | 设置元素的最小宽度。 |
| [width](https://www.runoob.com/cssref/pr-dim-width.html)     | 设置元素的宽度。     |

### CSS Display(显示) 与 Visibility（可见性）

- visibility
- display

#### 隐藏元素 - display:none或visibility:hidden

visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。也就是说，该元素虽然被隐藏了，但仍然会影响布局。

display:none可以隐藏某个元素，且隐藏的元素不会占用任何空间。也就是说，该元素不但被隐藏了，而且该元素原本占用的空间也会从页面布局中消失。

#### CSS Display - 块和内联元素

**块元素**是一个元素，占用了全部宽度，在前后都是换行符。

块元素的例子：

- h1
- p
- div

**内联元素**只需要必要的宽度，不强制换行。

内联元素的例子：

- span
- a

#### 如何改变一个元素显示

可以更改内联元素和块元素的显示，反之亦然

**注意：**变更元素的显示类型看该元素是如何显示，不改变它是什么样的元素。例如：一个内联元素设置为display:block不允许有它内部的嵌套块元素。

下面的示例把列表项显示为内联元素：

~~~html
<ul style="color:red">
    <li style="display:inline;">列表项1</li>
    <li style="display:inline;">列表项2</li>
	<li style="display:inline;">列表项3</li>
    <li style="display:inline;">列表项4</li>
</ul>
~~~

<ul style="color:red">
    <li style="display:inline;">列表项1</li>
    <li style="display:inline;">列表项2</li>
	<li style="display:inline;">列表项3</li>
    <li style="display:inline;">列表项4</li>
</ul>

下面的示例把span元素作为块元素：

~~~html
<div style="color:red">
    <span style="display:block;">span1</span>
    <span style="display:block;">span2</span>
    <span style="display:block;">span3</span>
    <span style="display:block;">span4</span>
</div>
~~~

<div style="color:red">
    <span style="display:block;">span1</span>
    <span style="display:block;">span2</span>
    <span style="display:block;">span3</span>
    <span style="display:block;">span4</span>
</div>

### CSS Position(定位)

position 属性指定了元素的定位类型。

position 属性的五个值：

- static
- relative
- fixed
- absolute
- sticky

设立position属性后，元素可以使用顶部，底部，左侧和右侧属性定位。

#### static 默认

HTML 元素的默认值，即没有定位，遵循正常的文档流对象。

静态定位的元素不会受到 top, bottom, left, right影响。

#### fixed 不随窗口滚动

**不占据空间**

元素的位置相对于浏览器窗口是固定位置。

即使窗口是滚动的它也不会移动

#### relative 相对位置

相对定位元素的定位是相对其正常位置。

~~~html
<div style="color:red">
    <p style="position:relative;left:-20px;">对于其正常位置向左移动<p>
    <p>正常位置<p>
    <p style="position:relative;left:20px;">相对于其正常位置向右移动<p>
</div>
~~~

<div style="color:red">
    <p style="position:relative;left:-20px;">对于其正常位置向左移动<p>
    <p>正常位置<p>
    <p style="position:relative;left:20px;">相对于其正常位置向右移动<p>
</div>

移动相对定位元素，但它原本所占的空间不会改变，可能对覆盖其他元素的显示。

#### absolute 绝对位置

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于html。

absolute 定位**不占据空间**，因此absolute 定位的元素和其他显示重叠。

**clip 属性**可以剪裁绝对定位元素。

#### sticky  基于用户的滚动位置来定位

粘性定位的元素是依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。

它的行为就像 **position:relative;** 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。

这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

<iframe src="https://www.runoob.com/try/try.php?filename=trycss_position_sticky" width="100%" height="600"></iframe>

#### 重叠的元素

元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素

z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）

具有更高堆叠顺序的元素总是在较低的堆叠顺序元素的前面。

一个元素可以有正数或负数的堆叠顺序：

~~~html
<div>
    <img src="xxx" style="position:absolute;z-index:-1;"/>
    <p>因为图像元素设置了 z-index 属性值为 -1, 所以它会显示在文字之后。</p>
</div>
~~~

**注意：** 如果两个定位元素重叠，没有指定z - index，最后定位在HTML代码中的元素将被显示在最前面



### CSS Overflow (内容溢出的显示方式)

CSS overflow 属性可以控制内容溢出元素框时在对应的元素区间内添加滚动条。

默认情况下，overflow 的值为 visible， 意思是内容溢出元素框：

overflow属性有以下值：

| 值      | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。                 |
| hidden  | 内容会被修剪，并且其余内容是不可见的。                       |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。(两个滚动条都出现) |
| auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。     |
| inherit | 规定应该从父元素继承 overflow 属性的值。                     |

**注意:**overflow 属性只工作于指定高度的块元素上。



### CSS Float(浮动)

CSS 的 Float（浮动），会使元素向左或向右移动，其周围的元素也会重新排列。

Float（浮动），往往是用于图像，但它在布局时一样非常有用。

元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

浮动元素之后的元素将围绕它。

浮动元素之前的元素将不会受到影响。

~~~html
<p>
    <img src="xxx" width="100" style="float:right"/>
    这是一些文本。这是一些文本。这是一些文本。
    ......
    这是一些文本。这是一些文本。这是一些文本。
</p>
~~~

<p>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="margin:0px;float:right"/>
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
    这是一些文本。这是一些文本。这是一些文本。
</p>

#### 彼此相邻的浮动元素

~~~html
<p>
    <img src="xxx" width="100" style="float:left"/>
    ......
    <img src="xxx" width="100" style="float:left"/>
	<p style="clear:both;"></p>
</p>
~~~



<p>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
    <img src="https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/medias/logo.png" width="100" style="float:left"/>
<p style="clear:both;"></p>
</p>

#### 清除浮动 - 使用 clear

元素浮动之后，周围的元素会重新排列，为了避免这种情况，使用 clear 属性。

| 值    | 描述                         |
| :---- | :--------------------------- |
| left  | 在左侧不允许浮动元素。       |
| right | 在右侧不允许浮动元素。       |
| both  | 在左右两侧均不允许浮动元素。 |

#### 让段落的第一个字母浮动到左侧

~~~html
<p>
    <span style="float:left;width:1.2em;font-size:400%;font
                 family:algerian,courier;line-height:80%;">
        这</span>是一些文本。
    这是一些文本。这是一些文本。
    ...
    这是一些文本。这是一些文本。这是一些文本。
</p>
~~~

<p>
<span style="float:left;width:1.2em;font-size:400%;font-family:algerian,courier;line-height:80%;">这</span>是一些文本。
这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
这是一些文本。这是一些文本。这是一些文本。
</p>











### 其他属性

#### cursor 更改光标