---
title: 前端
date: 2021-01-28 19:22:33
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/Front-end/js2.jpg
mathjax: true
summary: 持续更新中
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



### CSS 背景

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



### CSS 文本格式

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



### CSS 字体

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

### CSS 链接