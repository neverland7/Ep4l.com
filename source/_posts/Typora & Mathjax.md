---
t1itle: Typora & Mathjax使用文档
date: 2020-12-31 03:42:17
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/Typora & Mathjax/mathjax.jpg
mathjax: true
toc: true
summary: 尝试一下Typora和Mathjax的基本功能
categories: 学习笔记
tags:
  - Mathjax
  - Typora
  - Markdown
typora-root-url: ..
---

Typora里面直接编写html代码，对hexo生效，但是如果直接改动Typora本身的css和html，则对hexo不生效

以下部分内容来自 https://zhuanlan.zhihu.com/p/90561228

## 1. 字体编辑

### 1.1 标题

```python
# 一级标题        快捷键Ctrl+1

## 二级标题       快捷键Ctrl+2

### 三级标题      快捷键Ctrl+3

#### 四级标题     快捷键Ctrl+4

##### 五级标题    快捷键Ctrl+5

###### 六级标题   快捷键Ctrl+6
```

### 1.2 字体大小

```text
快捷键：Ctrl+数字  或 Ctrl+加减号  或  ### （几个#表示几级标题，同上）
```

### 1.3 字体加粗

```text
快捷键：Ctrl+b
示 例：**加粗内容**
```

**加粗内容**

### 1.4 斜体

```text
快捷键：ctrl+i
示 例：*斜体*
```

示 例：*斜体*

### 1.5 删除线

```text
快捷键：alt+shift+5
示 例：~~删除的内容~~
```

示 例：~~删除的内容~~

### 1.6 下划线

```text
快捷键：Ctrl+u
示 例：<u>下划线内容</u>
```

示 例：<u>下划线内容</u>

### 1.7 文本居中

```text
操作：<center>居中内容</center>
```

操作：<center>居中内容</center>

### 1.8 脚注

```text
操作：这块有个脚注[^脚注]
     [^脚注]:填写脚注的内容
示例：有一个github网址[^1]
     [^1]:https://github.com/
```

示例：有一个github网址[^1]

[^1]:https://github.com/



## 2. 列表

### 2.1 有序列表

```text
操作：数字+英文小数点(.)+空格
示例：1. list1
     2. list2
```

1. list1
     2. list2

### 2.2 无序列表

```text
操作：- +空格 或 * + 空格
示例： - list1
      - list2
```

- list1
      - list2



## 3. 插入

### 3.1 插入代码块

```text
快捷键：shift+~~~（或直接```)
```

~~~c
int i,num;  
int loopcnts = 1000000;  
printf("input:");
scanf("%d",&num);
begin = clock();  
for(i = 0; i < loopcnts; i++){
	res = SqrtByBisection(num);
}		  
end = clock();  
printf("mySqrt_binarysearch(%d) = %f, spent time is %f\n", num, res, (double)(end-begin)/CLOCKS_PER_SEC);  
~~~

### 3.2 插入数学公式

```text
操作：$$ + enter
示例：$$ + enter后输入11+12，结果如下所示
```

$$
11+12
$$



### 3.3 插入引用

```text
操作：> + 空格
示例：> + 空格后，输入 引用的内容，结果如下所示
```

> 引用的内容

### 3.4 插入链接

```text
操 作:Ctrl+k弹出后，输入 [输入标题名](输入链接地址) 即可
示 例1：[百度一下，你就知道](https://www.baidu.com/)
示 例2：这是 [百度一下，你就知道](https://www.baidu.com/ "百度") 的链接.  
示 例3：这是 [github][1] 的链接.  
       [1]: https://github.com/ "github"
ps：按住ctrl点击链接可直接打开
```

[百度一下，你就知道](https://link.zhihu.com/?target=https%3A//www.baidu.com/)

这是 [百度一下，你就知道](https://link.zhihu.com/?target=https%3A//www.baidu.com/) 的链接.

这是 [github](https://link.zhihu.com/?target=https%3A//github.com/) 的链接.

### 3.5 插入注释

```text
操作：[^文字]：文字
示例：[^1]：文献1
```

[^1]：文献1

### 3.6 插入表格

```text
快捷键：ctrl+t
示 例：按完快捷键后，弹出下图，选择对应的行和列，点击确定即可。
```

| 1    | 2    | 3    |
| ---- | ---- | ---- |
| 2    |      |      |
| 3    |      |      |
| 4    |      |      |

### 3.7 插入图片

```text
操作：直接拖动  或 ctrl+shift+i(相对路径地址)
示例：![](C:\1.jpg)
```

![img](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/Typora & Mathjax/v2-96d8a3b13676b08768ef4003478c0ade_720w.jpg)



### 3.8 插入分隔符

```text
操作：--- + enter  或者 *** + enter
```

***



### 3.9 插入表情

```text
操作： ：+ 单词 +:
示例： :smile:
      :cry:
```

:smile:

:cry:

### 3.10 插入目录

~~~
操作：[toc]+enter
~~~

[toc]



### 3.11 公式内换行

~~~
操作：\\
~~~

### 3.12 公式内左对齐

~~~
操作：在公式最开始加\begin{aligned}，然后每个等号前加&，
即&=，每一行用\\换行，然后最后一句输完后\end{aligned}
实例：$\begin{aligned}d(x,y)&=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2+\dots+(x_n-y_n)^2}\\&=\sqrt{\sum_{i=1}^{n}{(x_i-y_i)^2}} \end{aligned}$
~~~

$$\begin{aligned}d(x,y)&=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2+\dots+(x_n-y_n)^2}\\&=\sqrt{\sum_{i=1}^{n}{(x_i-y_i)^2}} \end{aligned}$$

### 3.13 矩阵表示

~~~
操作：`\begin{matrix}`和`\end{matrix}`说明在它们之间的是矩阵
`1 & 2 & 3\\`表示第一行的元素，其中用`&`来分割每一个元素，用`\\`来换行
实例: \left[\begin{matrix} 1 & 2 & 3\\ 4 & 5 & 6 \end{matrix}\right]
~~~

$\left[\begin{matrix} 1 & 2 & 3\\ 4 & 5 & 6 \end{matrix}\right]$

### 3.14 希腊字母表示

$\partial$ \partial

$\infin$ \infin

$\forall$ \forall

$\exists$ \exists

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/Typora & Mathjax/v2-68922903c83e504e3e3e4efd5b7327fa_720w.jpg)

### 3.15 箭头表示

![img](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/Typora & Mathjax/v2-42ff8eb3a827056b16b2133f58009abe_720w.jpg)

### 3.16 公式大全

[Mathjax 常用语法](https://blog.csdn.net/fly0202/article/details/82534854)

![img](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/Typora & Mathjax/v2-2f57dd9499cba748a39be06d2104fe21_720w.jpg)

### 3.17 二进制运算/相关符号

![img](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/Typora & Mathjax/v2-fd7827f7c554e1f2c6d9a356f868a0fe_720w.jpg)

### 3.18 空格表示

在公式中如果需要有空格，可以用\+空格的方式来实现

~~~
实例：max \ a
~~~

$max \ a$

---

## 4. 杂项

### 4.1 设置字体颜色大小等

~~~
由于Typora或者说markdown中没有直接的语法支持文字的颜色，大小，字体等属性的设置，
就需要“曲线救国”，因为Typora支持内嵌html的语法，那么只要插入一条html代码即可:
<span style='color:文字颜色;background:背景颜色;font-size:文字大小;font-family:字体;'>文字</span>

实例：<span style='color:red;background:blue;font-size:30px;font-family:微软雅黑;'>文字</span>
~~~

<span style='color:red;background:blue;font-size:30px;font-family:微软雅黑;'>文字</span>

### 4.2 某些数学图的插入

https://www.intmath.com/cg3/embed-desmos.php

desmos：

<iframe src="https://www.desmos.com/calculator/yx1lco5nog" width="100%" height="600"></iframe>

ggb：

<iframe src="https://ggb123.cn/classic/nfvqbwqt?embed" width="100%" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

<iframe src="https://ggb123.cn/classic/n4aa6vgh?embed" width="100%" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>