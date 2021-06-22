---
title: 同济高数第七版（1-4章）
date: 2021-04-15 21:01:51
img: images/tongji-calculus-1-4/calculus_1.png
mathjax: true
summary: 同济高数
categories: 学习笔记
tags:
 - 数学
 - 微积分
 - 考研
typora-root-url: ..

---

基本概念：<span style='color:red;font-size:20px'>定义</span>

基本理论：<span style='color:blue;font-size:20px'>定理、</span><span style='color:sienna;font-size:20px'>性质、</span><span style='color:green;font-size:20px'>推论</span>

基本方法：<span style='color:purple;font-size:20px'>法则</span>

<center><span style='color:blue;font-size:15px'>2021/4/15</span></center>

## 绪论

**0.微积分：**

微：取小范围近似值->极限化

积：分->匀->合->精

**1.微积分研究的主要对象：**

微：变化率

积：该变量

**2.微积分研究的思想方法：**

利用已知研究未知

借助均匀变化解决非均匀变化

局部均压化求**近似**，利用**极限**得精确

**3.导数与积分的本质：**

**导数**和**积分**分别是处理均匀量的**商**（变化率）和**积**（改变量）在处理非均匀量中的发展。

**4.微积分发展的关键**

极限思想——微积分的基础

## 第一章 函数与极限

函数：微积分研究的主要对象
极限：研究函数的主要工具

### 第一节 映射和函数

映射无重点

#### <span style='color:red;font-size:20px'>函数定义</span>

如果对于每个数x∈D，变量y按照一定的法则总有一个确定的y和它对应，则称x是y的函数，记为y=f(x)。常称x为自变量，y为因变量, D为定义域。

[注]函数概念有两个基本要素：定义域、对应法则.（两要素相同函数就相同）

#### <span style='color:sienna;font-size:20px'>函数的几种特性</span>

- 有界性：有界$\Leftrightarrow$有上下界
- 单调性
- 奇偶性
- 周期性

<center><span style='color:blue;font-size:15px'>2021/4/16</span></center>

#### <span style='color:red;font-size:20px'>反函数定义</span>

设函数$y= f(x)$的定义域为D，值域为$R_y$。若对任意$y∈R_y$， 有唯一确定的$x∈D$，使得$y= f(x)$，则记为$x=f^{-1}(y)$，称其为函数$y= f(x)$的反函数.

#### <span style='color:red;font-size:20px'>复合函数定义</span>

设$y= f(u)$的定义域为$D_f$，$u=g(x)$的定义域为$D_g$，值域为$R_g$，若$D_f\cap R_g≠\phi$，则称函数$y= f[g(x)]$为函数$y= f(u)$与$u= g(x)$的复合函数。它的定义域为$\{x|x\in D_g,g(x)\in D_f\}$

#### <span style='color:red;font-size:20px'>初等函数定义</span>

由常数和基本初等函数经过有限次的加、减、乘、除和复合所得到且能用一个解析式表示的函数，称为初等函数。

基本初等函数：

- 幂函数：$y=x^u$
- 指数函数：$y=a^x$
- 对数函数：$y=\log_ax$
- 三角函数
- 反三角函数

### 第二节 数列极限

#### <span style='color:red;font-size:20px'>数列极限的定义</span>

$(\varepsilon-N)$ ： $\forall\varepsilon>0$，$\exists N$，当$ n>N$时，有$|x_n-a|<\varepsilon$

该定义不能用来求极限，但是可以验证数列是不是以a为极限

<center><span style='color:blue;font-size:15px'>2021/4/23</span></center>

#### <span style='color:sienna;font-size:20px'>收敛数列的性质</span>

- 唯一性：收敛数列的极限是唯一的
- 有界性：收敛数列必有界
- 保号性：若$\displaystyle\lim_{x\to\infty}X_n=a$，且$a>0$（或$a<0$），则$\exists N$，当$n>N$时，都有$x_n>0$（或$x_n<0$） 
- 如果数列收敛于a，那么它的任一子数列也收敛，且极限也是a

###  第三节 函数极限

#### <span style='color:red;font-size:20px'>函数极限的定义</span>

**1.自变量趋向于有限值时函数的极限：**

$(\varepsilon-\delta)$：设函数$f(x)$在点$x_0$的某个去心领域有定义，若$\forall\varepsilon>0$，$\exists\delta>0$，当$0<|x-x_0|<\delta$时，

恒有$|f(x)-A|<\varepsilon$，则称A为$x\to x_0$时$f(x)$的极限。

函数极限研究的是临近点的变化趋势，与该点值无关。$x\to x_0$，但$x\not=x_0$

![](/images/tongji-calculus-1-4/image-20210423213834371.png)

**2.自变量趋向于无穷大时函数的极限**

![](/images/tongji-calculus-1-4/image-20210423214929882.png)

![](/images/tongji-calculus-1-4/image-20210423223437636.png)

#### <span style='color:sienna;font-size:20px'>函数极限的性质</span>

- 唯一性：函数有极限必唯一
- 局部有界：
  ![](/images/tongji-calculus-1-4/image-20210423220733170.png)
- 保号性：
  ![](/images/tongji-calculus-1-4/image-20210423221001457.png)

<center><span style='color:blue;font-size:15px'>2021/4/26</span></center>

### 第四节 无穷小与无穷大

#### 无穷小

<span style='color:red;font-size:20px'>定义1：</span>$如果函数f(x)当x\to x_0(或x\to \infty)时的极限为零，则称f(x)为x\to x_0(或x\to \infty)时的无穷小量$

- 无穷小是**变量**，不能与很小的数混淆
- 0是无穷小，但是无穷小不一定是0（0是可以作为无穷小的唯一的数）
- f(x)是否为无穷小与自变量x的趋向有关

<span style='color:blue;font-size:20px'>定理1(极限与无穷小的关系)：</span>$\lim f(x)=A\Leftrightarrow f(x)=A +a(x),其中\lim a(x)= 0$

#### 无穷大

<span style='color:red;font-size:20px'>定义2：</span>$若\displaystyle\lim_{x\to x_0}f(x)=\infty，则称f(x)是x\to x_0时的无穷大量$

即：$若对任意给定的M>0，总存在δ>0，当0<|x-x_0|<δ时，恒有|f(x)|>M$

<span style='color:blue;font-size:20px'>定理2：</span>$在同一极限过程中，如果f(x)是无穷大，则\frac{1}{f(x)}是无穷小；反之，如果f(x)是无穷小，且f(x)≠0,则\frac{1}{f(x)}是无穷大$

### 第五节 极限的运算法则

#### <span style='color:purple;font-size:20px'>无穷小运算法则</span>

<span style='color:blue;font-size:20px'>定理1：</span>两个无穷小的和是无穷小（推广：**有限个**无穷小的和是无穷小）

证明：$$设\alpha和\beta是当x\to x_0时的两个无穷小，\gamma=\alpha+\beta,           \forall\varepsilon>0，\\\exists\delta_1>0,当0<|x-x_0|<\delta_1时，|\alpha|<\varepsilon\\\exists\delta_2>0,当0<|x-x_0|<\delta_2时，|\beta|<\varepsilon\\取\delta=\min\{\delta_1,\delta_2\},当0<|x-x_0|<\delta时，|\gamma|\leq|\alpha|+|\beta|=2\varepsilon$$

<span style='color:blue;font-size:20px'>定理2：</span>有界函数与无穷小的乘积是无穷小

证明：$$设函数\alpha(x)在x_0的某一去心邻域(x_0,\delta_1)内是有界的，\alpha(x)\leq M\\\forall\varepsilon>0，\exists\delta_2>0,当0<|x-x_0|<\delta_2时，|\beta|<\varepsilon\\取\delta=\min\{\delta_1,\delta_2\},当0<|x-x_0|<\delta时，|\alpha(x)\beta(x)|<\varepsilon M$$

<span style='color:green;font-size:20px'>推论1：</span>常数与无穷小的乘积是无穷小

<span style='color:green;font-size:20px'>推论2：</span>有限个无穷小的积仍是无穷小

#### <span style='color:purple;font-size:20px'>极限的有理运算法则</span>

<span style='color:blue;font-size:20px'>定理3：</span>$$\begin{aligned}若&\lim f(x)=A,\lim g(x)=B,（两个函数极限都存在）那么:（和差积商的极限都存在）\\&\lim((f(x)\pm g(x))=\lim f(x)\pm\lim g(x)\\&\lim((f(x)*g(x))=\lim f(x)*\lim g(x)\\&\lim \frac{f(x)}{g(x)}=\frac{\lim f(x)}{\lim g(x)}(B≠0)\end{aligned}$$
<span style='color:green;font-size:20px'>推论1：</span>$如果\lim f(x)存在,而c为常数,那么\lim[cf(x)]= c\lim f(x)$

<span style='color:green;font-size:20px'>推论2：</span>$如果\lim f(x)存在,而n是正整数,那么\lim[f(x)]^n = [lim f(x)]^n$

![](/images/tongji-calculus-1-4/image-20210426172940420.png)

<span style='color:blue;font-size:20px'>定理5：</span>$如果φ(x)≥ψ(x),而\lim φ(x)= A, \lim ψ(x)= B,那么A≥B$

#### <span style='color:purple;font-size:20px'>复合函数的极限运算法则</span>

![](/images/tongji-calculus-1-4/image-20210426201553110.png)

**note：注意使用条件！极限四则运算法则的条件是f和g的极限都存在，计算商的时候分母极限不能等于0。复合使用的条件是内外层都有极限，内层趋向于u0但不等于u0**

### 第六节 极限存在准则 两个重要极限

#### <span style='color:blue;font-size:20px'>存在准则1：夹逼准则</span>

<span style='color:blue;font-size:20px'>（数列型）</span>$$如果数列 \{x_n\},\{y_n\} 及\{z_n\} 满足下列条件:\\(1) 存在N，当n>N时,x_n≤y_n≤z_n;\\(2)\displaystyle\lim_{n\to\infty}x_n=\lim_{n\to \infty}z_n=a,\\则\displaystyle\lim_{n\to \infty}y_n=a$$

<span style='color:blue;font-size:20px'>（函数型）</span>![](/images/tongji-calculus-1-4/image-20210426215057630.png)

#### <span style='color:blue;font-size:20px'>重要极限1：$\displaystyle\lim_{x\to 0}\frac{\sin x}{x}=1$</span>

中间得到$\sin x<x<\tan x\quad x\in(0,\frac{\pi}{2})$

**重要：**根据夹逼准则证明，证明过程看书和笔记

#### <span style='color:blue;font-size:20px'>存在准则2：单调有界准则</span>

<span style='color:blue;font-size:20px'>（数列型）</span>单调有界数列必有极限

<span style='color:blue;font-size:20px'>（函数型）</span>使用较少，不探讨

#### <span style='color:blue;font-size:20px'>重要极限2：$\displaystyle\lim_{n\to \infty}(1+\frac{1}{n})^n=e$</span>

#### <span style='color:blue;font-size:20px'>$\displaystyle\lim_{x\to \infty}(1+\frac{1}{x})^x=e$</span>

证明存在：证明单调增，证明上有界

<center><span style='color:blue;font-size:15px'>2021/4/27</span></center>

### 第七节 无穷小的比较

#### 无穷小的比较

<span style='color:red;font-size:20px'>定义1(无穷小量）：</span>$若\displaystyle\lim_{x\to x_0}f(x)=0,则称f(x)为x\to x_0时的无穷小量$

<span style='color:red;font-size:20px'>定义2(无穷小的比较）：</span>

![](/images/tongji-calculus-1-4/image-20210427134245916.png)

<span style='color:blue;font-size:20px'>定理1：</span>$\alpha(x) \sim β(x) 的充要条件是\alpha(x)=β(x)+ o(\beta(x))$

例：$\sin x在x\to0时可以近似看做函数x加一个无穷小量o(x)$

#### 等价无穷小代换

<span style='color:blue;font-size:20px'>定理2（等价无穷小代换）：</span>

![](/images/tongji-calculus-1-4/image-20210427140815402.png)

定理2表明，求两个无穷小**之比**（乘除关系）的极限时，分子和分母都可用等价无穷小来代替。因此，如果用来代替的无穷小选得恰当的话，就可以使计算简化。

#### 常用的等价无穷小

$x\sim\sin x\sim\tan x\sim\arcsin x\sim\arctan x$

$(1+x)^a-1\sim ax$

$\sqrt[n]{1+x}-1\sim \frac{1}{n}x$

$1-\cos x\sim\frac{1}{2}x^2$

$\sec x-1\sim\frac{1}{2}x^2$

$\ln(1+x)\sim x$

$e^x-1 \sim x$

$a^x-1\sim x\ln a$



### 第八节 函数的连续性和间断点

#### 函数的连续性

<span style='color:red;font-size:20px'>定义(连续）：</span>$$若\displaystyle\lim_{\triangle x\to 0}\triangle y=0, 或\lim_{x\to x_0}f(x)=f(x_0),则称f(x)在x_0处连续.$$

**f(x)在x0处连续：**$$(1)f(x)在x_0有定义\\(2)\displaystyle\lim_{x\to x_0}f(x)存在\\(3)\displaystyle\lim_{x\to x_0}f(x)= f(x_0)(极限值等于函数值)$$

#### 函数的间断点

只要上面连续的3个条件有一个不满足，就是间断

**f(x)在x0处间断：**$$(1)f(x)在x_0没有定义\\(2)虽在x=x_0有定义，但\displaystyle\lim_{x\to x_0}f(x)不存在\\(3)虽在x=x_0有定义，且\displaystyle\lim_{x\to x_0}f(x)存在，但\lim_{x\to x_0}f(x)\not= f(x_0)$$

**间断点分类：**

- 第一类间断点（左右极限都存在）
  - 可去间断点：$f(x_0-0)=f(x_0+0)$
  - 跳跃间断点：$f(x_0-0)\not=f(x_0+0)$
- 第二类间断点（左右极限至少有一个不存在）
  - 无穷间断点
  - 震荡间断点



### 第九节 连续函数的运算和初等函数的连续性

**基本初等函数：**

- 幂函数：$y=x^u$
- 指数函数：$y=a^x$
- 对数函数：$y=\log_ax$
- 三角函数
- 反三角函数

**初等函数：**由常数和基本初等函数经过有限次的**四则运算**，以及有限次的**复合**步骤所构成的并且可以由一个式子所表示的函数。 

前面已经通过定义证明了三角函数（sinx、cosx）的连续性，指数函数也是连续的，幂函数可以写成指数函数的形式，对数函数是指数函数的反函数，**所以只需要证明基本初等函数的反函数、四则、复合的连续性，就可以得到初等函数的连续性**。

#### 一、连续函数的和、差、积、商的连续性

<span style='color:blue;font-size:20px'>定理1：</span>$设函数f(x),g(x)在x_0连续，则f(x)\pm g(x)、f(x)*g(x)、\frac{f(x)}{g(x)}(g(x_0\not=0))都在x_0连续$

#### 二、反函数与复合函数的连续性

<span style='color:blue;font-size:20px'>定理2：（反函数的连续性）</span>

$如果函数y=f(x)在区间I_X上单调增加（或减少）且连续，\\那么它的反函数x=f^{-1}(y)也在对应的区间I_y\{y|y=f(x),x\in I_x\}上单调增加（或减少）且连续。$

<span style='color:blue;font-size:20px'>定理3 ：（复合函数的连续性）</span>

:$$设y= f(g(x))是由y=f(u)与u=g(x)复合而成，\\若g(x)在x_0处连续，f(u)在u_0连续，u_0=g(x_0)，则f(g(x))在X_0处连续。\\\displaystyle\lim_{x\to x_0}f[g(x)]=\lim_{u\to u_0}f(u)=f(u_0)$$

**note：由上可知，复合函数中如果内层函数的极限存在（u0)，并且外层函数在u=u0处连续，那么函数符号可以与极限符号交换次序。**

#### 三、初等函数的连续性

<span style='color:blue;font-size:20px'>定理4：</span>基本初等函数在其定义域内是连续的；

<span style='color:blue;font-size:20px'>定理5：</span>初等函数在其定义区间内是连续的；



### 第十节 闭区间上连续函数性质

#### 一、有界性与最大值最小值定理

<span style='color:blue;font-size:20px'>定理1（最大最小值定理）：</span>设函数f(x)在**闭区间**[a,b]上连续，则f(x)在[a,b]上必有最大值和最小值。

<span style='color:blue;font-size:20px'>定理2（有界性定理）：</span>设函数f(x)在**闭区间**[a,b]上连续，则f[x)在[a,b]上必有界. 

#### 二、零点定理与介值定理

<span style='color:blue;font-size:20px'>定理3（零点定理）：</span>$设函数f(x)在闭区间[a,b]上连续，且f(a)f(b)<0，则\existsξ∈(a,b)使f(ξ)=0.$

<span style='color:blue;font-size:20px'>定理4（介值定理）：</span>$$设函数f(x)在区间|a,b|上连续,且f(a)\not=f(b),\\\mu为介于f(a)与f(b)之间的任何值,则至少存在一个ξ∈(a,b) 使f(\xi)=μ$$

<span style='color:blue;font-size:20px'>推论：</span>设函数f(x)在闭区间[a,b]上连续，则f(x) 在[a,b]上能取得介于它的最大值M与最小值m之间的任何值

**note：零点定理是介值定理的特例，但是零点定理用的更多。**







<center><span style='color:blue;font-size:15px'>2021/4/28</span></center>

## 第二章 导数与微分

微分学是微积分的重要组成部分，它的基本概念是导数和微分
在本章中，主要讨论导数和微分的概念以及它们的计算方法

### 第一节 导数概念

#### 一、引例

1.变速直线运动瞬间速度

2.曲线的切线

**导数的实质：增量比的极限（导数就是一个特殊的极限）**

#### 二、导数的定义

<span style='color:red;font-size:20px'>定义：</span>$$若\displaystyle\lim_{\triangle x\to 0}\frac{f(x_0+\triangle x)-f(x_0)}{\triangle x}=\lim_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0}=\lim_{\triangle x\to 0}\frac{\triangle y}{\triangle x}存在，则称f(x)在x_0点可导\\记作f'(x_0)\quad或y'|_{x=x_0}\quad或\frac{dy}{dx}|_{x=x_0}\\若以上极限不存在，则称f(x)在x_0处不可导$$

**因为上面的极限存在，所以x的变化量趋于0时y的变化量也一定趋于0，根据连续的定义可得这点一定连续**

**由导数的定义可得：**$$(x^a)'=a(x^{a-1})\\(a^x)'=a^x\ln a\\(\log_a x)'=\frac{1}{x\ln a}(a>0,a\not=1)\\(\sin x)'=\cos x\\(\cos x)'=-\sin x$$

#### 三、可导和连续的关系

可导一定连续，连续不一定可导



### 第二节 函数的求导法则

本节将解决初等函数的求导（基本初等函数（5）（或2+反函数）+四则+复合）

#### <span style='color:purple;font-size:20px'>一、函数的和、差、积、商的求导法则</span>

![](/images/tongji-calculus-1-4/image-20210428113111535.png)

推论：$(uvw)'=u'vw+vu'w+uvw'$

**由四则的求导法则可得**：$$(\tan x)'=\sec^2 x\\(\cot x)'=-\csc^2 x\\(\sec x)'=\sec x\tan x\\(\csc x)'=-\csc x\cot x$$

#### <span style='color:purple;font-size:20px'>二、反函数的求导法则</span>

![](/images/tongji-calculus-1-4/image-20210428114535953.png)

例：$求y=\arcsin x(x\in[-1,1])的导数$

解：$$y=\arcsin x\Longleftrightarrow x=\sin y\\\frac{dy}{dx}=(\arcsin x)'=\frac{1}{\cos y}=\frac{1}{\sqrt{1-\sin^2y}}=\frac{1}{\sqrt{1-x^2}}$$

**由反函数的求导法则可得：**$$(\arcsin x)'=\frac{1}{\sqrt{1-x^2}}\\(\arccos x)'=-\frac{1}{\sqrt{1-x^2}}\\(\arctan x)'=\frac{1}{1+x^2}\\(arc\cot x)'=-\frac{1}{1+x^2}$$



#### <span style='color:purple;font-size:20px'>三、复合函数的求导法则</span>

<span style='color:blue;font-size:20px'>定理3（链式法则）：</span>$$设u=g(x)在x可导，y= f(u)在对应u处可导，\\则y=f[g(x)]在x处可导，且\frac{dy}{dx}=f'(u)g'(x)\quad \frac{dy}{dx}=\frac{dy}{du}*\frac{du}{dx}$$

#### <span style='color:purple;font-size:20px'>四、基本求导法则与导数公式</span>

##### 基本初等函数的导数公式

![](/images/tongji-calculus-1-4/image-20210428135707145.png)



### 第三节 高阶导数

二阶及二阶以上的导数统称高阶导数

![](/images/tongji-calculus-1-4/image-20210428151010886.png)

![](/images/tongji-calculus-1-4/image-20210428153636553.png)



### 第四节 隐函数及由参数方程确定的函数求导

#### 一、隐函数求导

**显函数：y=f(x)**

**隐函数：F(x,y)=0**

将隐函数变为显函数的过程称为隐函数的显式化，但是不是所有的隐函数都能显式化。

**隐函数求导方法：方程整体对x求导，求$\frac{dy}{dx}$时，y看成f(x)**

**幂指函数（$y=x^x$)不是初等函数，适合用对数求导法**

**导数的乘除公式复杂，和差公式复杂，所以在遇到像这样的连乘连除时，也可利用对数可以将乘除法变成加减法的性质，将显函数化为隐函数再求导。**

![](/images/tongji-calculus-1-4/image-20210428163206454.png)

解：$$\displaystyle\ln|y|=\frac{1}{3}[\ln|x+\ln(x^2+1)-2\ln|x^2-1|]\\\displaystyle\frac{y'}{y}=\frac{1}{3}[\frac{1}{x}+\frac{2x}{x^2+1}-\frac{4x}{x^2-1}]\\y'=...$$

#### 二、由参数方程所确定的函数的导数

**参数方程：$由x=\varphi(t),y=\psi(t)确定x和y间的函数关系$**

<span style='color:blue;font-size:20px'>定理：</span>$$设x=\varphi(t),y=\psi(t)在(\alpha,\beta)上可导，\varphi'(t)≠0,则\\\displaystyle\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{\psi'(t)}{\varphi'(t)}\\若\varphi(t),\psi(t)二阶可导，则\\\displaystyle\frac{d^2y}{dx^2}=\frac{d}{dt}(\frac{\psi'(t)}{\varphi'(t)})\frac{dt}{dx}=\frac{\psi''(t)\varphi'(t)-\varphi''(t)\psi'(t)}{\varphi'^3(t)}$$

**note：极坐标方程求导可以转化为参数方程求导法来解**

#### 三、相关变化率

1.建立两个相关量之间的关系

2.代入其中之一变化率，求另一变化率



### 第五节 函数的微分

#### 一、微分的定义

![](/images/tongji-calculus-1-4/image-20210428195222432.png)

<span style='color:red;font-size:20px'>定义：</span>$$若f(x_0+\triangle x)- f(x_0)=A\triangle x+o(\triangle x),则称f(x)在x_0点可微，A\triangle x称为f(x)在x_0点的微分\\记为\qquad dy=A\triangle x\\dy是\triangle y的线性主部$$

**在微小的局部，用均匀（主要部分）代替非均匀（主要部分+高阶无穷小）就是微积分的核心思想。**

**讲的简单点，微分是函该变量的近似值**

<span style='color:blue;font-size:20px'>定理：</span>$$函数y=f(x)在点x_0处可微的充分必要条件是f(x)在点x_0处可导，且有\\dy=f'(x_0)\triangle x=f'(x_0)dx$$

$可微\Longleftrightarrow 可导$

#### 二、微分的几何意义

![](/images/tongji-calculus-1-4/image-20210428200118788.png)

![](/images/tongji-calculus-1-4/image-20210428202817555.png)

#### 三、基本初等函数的微分公式与微分运算法则

**基本初等函数的微分公式：**

$dy=df(x)=f'(x)dx$

**四则运算法则：**设u和v都可微，则

![](/images/tongji-calculus-1-4/image-20210428203416042.png)

**复合函数微分法则(微分形式不变性)：**

![](/images/tongji-calculus-1-4/image-20210428203932209.png)

例：$y=\ln(1+x^2)$

$dy=\frac{2x}{1+x^2}dx\qquad dy=\frac{1}{1+x^2}d(1+x^2)$





<center><span style='color:blue;font-size:15px'>2021/4/29</span></center>

## 第三章 微分中值定理与导数应用

在第二章里，学习了导数和微分的概念和求导、求微分的基本方法

自然有问题：导数的作用是什么呢？

这一章主要以**导数**作为工具，进一步研究**函数**的一些基本形态。

微分中值定理就是建立导数和函数联系的一座桥梁。

### 第一节 微分中值定理

本节建立函数值和一阶导数之间的关系

#### 一、罗尔定理

<span style='color:red;font-size:20px'>定义（极值）：</span>$$若\existsδ>0，使得\\\forall x∈U(x_0,\delta)恒有f(x)≥f(x_0)，则称f(x)在x_0取极小值.\\\forall x∈U(x_0,\delta)恒有f(x)\leq f(x_0)，则称f(x)在x_0取极大值.$$

<span style='color:blue;font-size:20px'>费马引理：</span>$若f(x)在x_0处取得极值,且f(x)在x_0处可导,则f'(x_0)=0$

<span style='color:blue;font-size:20px'>罗尔定理：</span>$$若\\(1)f在[a,b]上连续\\(2)f在(a,b)内可导\\(3)f(a)=f(b)\\则\exists\xi\in(a,b),使f'(\xi)=0$$

![](/images/tongji-calculus-1-4/image-20210429135954616.png)

证：$由于f(x)在[a,b]连续，则存在最小值m，最大值M（最大最小值定理）\\ (1)若m=M\Rightarrow f(x)=m\\ (2)若m<M,则m和M至少有一个在(a,b)取到,设\exists \xi\in(a,b),使f(\xi)=M\\ \quad\Rightarrow f'(\xi)=0(费马定理)$

#### 二、拉格朗日中值定理

<span style='color:blue;font-size:20px'>拉格朗日中值定理：</span>$$若\\(1)f在[a,b]上连续\\(2)f在(a,b)内可导\\则\exists\xi\in(a,b),使f(b)-f(a)=f'(\xi)(b-a)\\\displaystyle或写成\frac{f(b)-f(a)}{b-a}=f'(\xi)$$

![](/images/tongji-calculus-1-4/image-20210429135740646.png)

证：$$改写为f'(\xi)-\frac{f(b)-f(a)}{b-a}=0（用来构造辅助函数）\\使上式=F'(\xi)\\令F(x)=f(x)-x\frac{f(b)-f(a)}{b-a}\\易得\\(1)F在[a,b]上连续\\(2)F在(a,b)内可导\\(3)F(a)=F(b)\\\Rightarrow \exists\xi\in(a,b),使F'(\xi)=0$$

**例题：**证明：$$当x>0时，\frac{x}{1+x}<\ln(1+x)<x\\解：\ln(1+x)\\\quad=\ln(1+x)-\ln1\\\quad=\frac{1}{\xi}*x(1<\xi<1+x)$$

**拉格朗日中值定理用来解决函数值和导数的联系的问题（不等式）（出现同一函数在两点时的差），看书和笔记的例题**

**note:**$$(1)罗尔定理是拉格朗日中值定理的特殊情况（当f(a)=f(b))\\(2)拉格朗日中值定理的等价形式：\\\quad f(b)-f(a)=f'[a+\theta(b-a)]*(b-a)\qquad(0<\theta<1)$$

<span style='color:blue;font-size:20px'>推论：</span>$设f(x)在区间I上连续，在I内可导，则在I上f(x)=C\Leftrightarrow f'(x)= 0$

#### 三、柯西中值定理

<span style='color:blue;font-size:20px'>柯西中值定理：</span>$$若\\(1)f,F在[a,b]上连续;\\(2)f,F在(a,b)内可导，且\forall x∈(a,b), F'(x)≠0\\\displaystyle则\exists\xi\in(a,b),使\frac{f(b)-f(a)}{F(b)-F(a)}=\frac{f'(\xi)}{F'(\xi)}$$

证：$$改写为[f(b)-f(a)]*F'(\xi)-[F(b)-F(a)]*f'(\xi)=0（用来构造辅助函数）\\使上式=\varphi'(\xi)\\令\varphi(x)=[f(b)-f(a)]*F(x)-[F(b)-F(a)]*f(x)\\易得\\(1)\varphi在[a,b]上连续\\(2)\varphi在(a,b)内可导\\(3)\varphi(a)=\varphi(b)\\\Rightarrow \exists\xi\in(a,b),使\varphi'(\xi)=0$$

**note:**$柯西定理是最一般的结论，拉格朗日中值定理是柯西中值定理的特殊情况（当F(x)=x)$

#### 内容小结：

**中值定理的意义：**

- 建立局部和整体的关系：导数是局部形态，反应一点的变化率，而函数的变量和自变量的改变是一个区间上的整体形态（平均速度和某个时刻的瞬时速度）
- 建立了函数值和导数值的关系，给用导数研究函数奠定了理论基础

**三个中值定理的关系：**

- 柯西定理是最一般的结论，拉格朗日中值定理是柯西中值定理的特例，罗尔定理是拉格朗日中值定理的特例
- 拉格朗日中值定理和柯西中值定理都是由罗尔定理证明，罗尔定理在微分中值定理证明中一个核心的思想就是像证明其他两个定理一样，就是构造辅助函数，满足罗尔定理。
- 在三个定理中，用的更多的是罗尔定理和拉格朗日定理。

**中值定理的应用：**

- 证明恒等式（拉格朗日中值定理的推论）
- 证明不等式（出现同一函数在两点函数值相减的时候）
- 证明有关中值定理的结论（证明拉格朗日中值定理和柯西中值定理的思想）（关键是构造辅助函数）



### 第二节 洛必达法则

导数本身就是个0比0型的极限，本节尝试借助导数研究0比0型的极限

<span style='color:purple;font-size:20px'>洛必达法则</span>

![](/images/tongji-calculus-1-4/RD2B%60%5D3ZPLY%25FUX_HLDMCF.png)

若$$\displaystyle\lim_{x\to x_0}\frac{f'(x)}{g'(x)}不存在，只能说明洛必达法则不适用，不能说\lim_{x\to x_0}\frac{f(x)}{g(x)}不存在$$

$$\displaystyle\lim_{x\to\infty}\frac{\log_ax}{x^b}=0\quad(a>1,b>0)\\\displaystyle\lim_{x\to\infty}\frac{x^b}{a^x}=0\quad(a>1,b>0)$$

**上面的式子表示在x趋于正无穷时，指数函数趋向无穷的速度远远大于幂函数远远大于指数函数**



<center><span style='color:blue;font-size:15px'>2021/4/30</span></center>

### 第三节 泰勒公式

本节建立函数值和高阶导数的关系：

若$$f(x)在x_0处可微，则\triangle y\approx dy\\f(x)≈f(x_0)+ f'(x_0)(x-x_0)$$

**上式表示在用一次多项式（切线）代替原式（曲线）**

$f(x)=f(x_0)+ f'(x_0)(x-x_0)+o(x-x_0)$

**两者精确值的误差是$o(x-x_0)$**

**问题：**$$若f(x)在x_0处n阶可导,是否存在n次多项式\\
P_n(x)=a_0+a_1(x-x_0)+a_2(x- x_0)^2+...+a_n(x-x_0)^n\\
使f(x)= P_n(x)+o((x-x_0)^n)$$

**代表多项式的函数值，一阶导数值，二阶导数值......n阶导数值都和f(x)相等**

**推论：**$$\displaystyle a_0=f(x_0)\quad a_k=\frac{f^{(k)}(x_0)}{k!}\quad k=1,2,...,n$$

#### 带佩亚诺余项的泰勒公式

<span style='color:blue;font-size:20px'>定理1（Taylor定理）：</span>$$设f(x)在x_0处n阶可导，则\\\displaystyle f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+...+\frac{f^{n}(x_0)}{n!}(x-x_0)^n+o((x-x_0)^n)\\上式称为带Peano余项的Taylor公式\\\displaystyle p_n(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+...+\frac{f^{n}(x_0)}{n!}(x-x_0)^n\\上式称为f(x)在x_0处的n次Taylor多项式\\R_n(x)=o((x-x_0)^n)\qquad f(x)的Peano余项$$

**缺点：**

- 只给出余项的定性描述，不能进行定量分析
- 适用范围小（只有充分靠近x0，误差才比较小）

#### 带拉格朗日余项的泰勒公式

<span style='color:blue;font-size:20px'>定理2（Taylor定理）：</span>$$设f(x)区间I中n+1阶可导，x_0\in I,则\forall x\in I,\exists\xi\in I(\xi在x_0与x之间)，使\\\displaystyle f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+...+\frac{f^{n}(x_0)}{n!}(x-x_0)^n+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}\\上式称为带Lagrange余项的Taylor公式\\\displaystyle R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}\qquad f(x)的Lagrange余项\\或者写成\displaystyle R_n(x)=\frac{f^{(n+1)}[x_0+\theta(x-x_0)]}{(n+1)!}(x-x_0)^{n+1}\qquad\theta\in(0,1)$$



若$$x_0=0，则\\\displaystyle f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+...+\frac{f^{n}(0)}{n!}x^n+\frac{f^{n+1}(\theta x)}{(n+1)!}x^{n+1}$$

**上式称为f(x)的麦克劳林公式**

#### 几个初等函数的麦克劳林公式

![](/images/tongji-calculus-1-4/image-20210430155914656.png)

#### 内容小结

**两个泰勒公式的本质：**

- 用**多项式**逼近f(x)
- 用已知点的信息表示未知点

**两个泰勒公式的区别：**

- Peano：定性，**局部**（在x趋向x0的时候）（**用来研究极限、极值时使用**）
- Lagrange：定量，**整体**（给出了误差的表达式，即使在大范围内用，只要n足够大，误差也能控制的较小）（**用来研究最值，不等式时候用**）

**四大中值定理：**

- 前三个建立f(x)与一阶导数的关系
- 拉格朗日中值定理是带有拉格朗日余项的泰勒公式在n=0时的特例，**带有拉格朗日余项的泰勒公式也称为泰勒中值定理**
- 泰勒中值定理建立f(x)与高阶导数之间的关系

### 第四节 函数的单调性与曲线的凹凸性

#### 一、函数单调性的判别方法

![](/images/tongji-calculus-1-4/image-20210430203100846.png)

#### 二、曲线的凹凸性与拐点

![](/images/tongji-calculus-1-4/image-20210430204415094.png)

<span style='color:blue;font-size:20px'>定理2：</span>$$设函数f(x)在区间[a,b]上连续,在(a,b)内二阶可导，\\
(1)若在(a,b)内f''(x)>0,则f(x)在[a,b] 上的图形是凹的;\\
(2)若在(a,b)内f''(x)<0,则f(x)在[a,b]上的图形是凸的.$$

驻点：$f'(x)=0$

拐点：使函数凹凸性改变的点（$f''(x)=0或者不存在只是必要条件$）

<center><span style='color:blue;font-size:15px'>2021/5/2</span></center>

### 第五节 函数的极值与最值

#### 一、函数的极值及其求法

![](/images/tongji-calculus-1-4/image-20210502100507736.png)

驻点$\nrightarrow$极值点

极值点$\nrightarrow$驻点

**可能的极值点：**

- 驻点
- 导数不存在的点

#### 二、最大值最小值问题



### 第六节 函数图形的描绘

#### 曲线的渐近线

![=](/images/tongji-calculus-1-4/image-20210502172746146.png)

函数图形的描绘

- 求定义域，确定奇偶性，周期性
- 求一阶导数，确定单调区间，极值点
- 求二阶导数，确定拐点和凹凸性
- 求渐近线
- 画图



<center><span style='color:blue;font-size:15px'>2021/5/3</span></center>

### 第七节 曲率

#### 一、弧微分（考研不作要求）

**case1:**$L:y=f(x)$

$\displaystyle ds=\sqrt{(dx)^2+(dy)^2}=\sqrt{1+(\frac{dy}{dx})^2}dx=\sqrt{1+f'^2(x)}dx$

**case2:**$L:\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}$

$\displaystyle ds=\sqrt{(dx)^2+(dy)^2}=\sqrt{(\frac{dx}{dt})^2+(\frac{dy}{dt})^2}dt=\sqrt{\varphi'^2(t)+\psi'^2(t)}dt$

#### 二、曲率

曲率：$\displaystyle k=\frac{|y''|}{(1+y'^2)^{\frac{3}{2}}}$

曲率半径：$\rho=\frac{1}{k}$



<center><span style='color:blue;font-size:15px'>2021/5/4</span></center>

## 第四章 不定积分

由于求不定积分是求导的逆运算

所以导数的基本公式倒过来就是积分的基本公式

导数的运算法则（四则，复合，隐函数，参数）也可以倒过来，其中的核心是有理运算（四则）和复合

乘法倒过来就是分部积分法，除法不好用，不考虑

复合函数倒过来就是换元积分法

### 第一节 不定积分的概念和性质

#### 一、原函数与不定积分的概念

<span style='color:red;font-size:20px'>定义1：</span>$$如果在区间I上，可导函数F(x)的导函数为f(x)，即对任一x\in I.都有\\F'(x)=f(x)或dF(x)=f(x)dx\\那么函数F(x)就称为f(x)(或f(x)dx)在区间I上的一个原函数$$

<span style='color:blue;font-size:20px'>原函数存在定理：</span>连续函数一定有原函数

**notes：**

- 一个函数若有原函数，则一定有无数个原函数
- 一个函数任两个原函数之间相差常数
- 设F(x)为f(x)的一个原函数，则F(x)+c为f(x)的一切原函数

<span style='color:red;font-size:20px'>定义2：</span>$$在区间I上，函数f(x)的带有任意常数项的原函数称为f(x)(或f(x)dx)在区级I上的不定积分，记作\\\int f(x)dx\quad即\int f(x)dx=F(x)+c\\其中记号\int 称为积分号，f(x)称为被积函数，f(x)dx称为被积表达式，x称为积分变量$$

#### 二、不定积分性质

1.$\int [f(x)\pm f(x)]dx=\int f(x)dx\pm \int g(x)dx$

2.$\int af(x)dx=a\int f(x)dx$

**notes:**

- $\int f'(x)dx=f(x)+c$
- $(\int f(x)dx)'=f(x)$





### 第二节 换元积分法

#### 一、第一类换元法（凑微分法）

![](/images/tongji-calculus-1-4/image-20210504153757910.png)

例1：$$\displaystyle\int\tan x dx=\int\frac{\sin x}{\cos x}dx=-\int\frac{1}{\cos x}d(\cos x)=-\ln|\cos x|+c$$

例2：$$\displaystyle\int\frac{1}{\sin x}dx=\int\csc x dx=\int\frac{\csc x(\csc x+\cot x)}{\csc x +\cot x}dx\\\displaystyle=-\int\frac{d(\cot x+\csc x)}{\csc x+\cot x}=-\ln|\csc x+\cot x|+c$$

**note：**$$一般地，\\(1)对于\sin^{2k+1}x\cos^nx或\sin^nx\cos^{2k+1}x(其中k\in N)型函数的积分，\\总可依次作变换\sin^2x=1-\cos^2或\cos^2x=1-\sin^2x，求得结果。\\(2)对于\sin^{2k}x\cos^{2l}x(k,l\in N)型函数的积分，总可利用三角恒等式\\\sin^2x=\frac{1}{2}(1-\cos 2x),\cos^2x=\frac{1}{2}(1+\cos 2x)化成\cos 2x的多项式，然后用下例的方法求得结果。\\$$

例：$$\begin{aligned}\int\sin^2x\cos^4xdx&=\frac{1}{8}\int(1-\cos2x)(1+\cos2x)^2dx\\&=\frac{1}{8}\int(1+\cos2x-\cos^22x-\cos^32x)dx\\&=\frac{1}{8}\int(\cos2x-\cos^32x)dx+\frac{1}{8}\int(1-\cos^22x)dx\\&=\frac{1}{8}\sin^22x*\frac{1}{2}d(\sin2x)+\frac{1}{8}\int\frac{1}{2}(1-\cos4x)dx\\&=\frac{1}{48}\sin^32x+\frac{x}{16}-\frac{1}{64}\sin 4x+C \end{aligned}$$



#### 二、第二类换元法

![](/images/tongji-calculus-1-4/image-20210504162026244.png)

**case1：无理数（有根号但无法用第一类换元积分法求解的）**

例：$$\displaystyle\int\frac{1}{1+\sqrt x}dx\\\displaystyle令x=t^2,原式=2\int\frac{t}{1+t}dt=2\int(1-\frac{1}{1+t})dt\\=2[t-\ln|1+t|]+c=2\sqrt x-2\ln(1+\sqrt x)+c$$

**case2：平方和差**

#### 三、公式总结

(1)$\int k dx=kx+C$
(2)$\int x^\mu dx=\frac{x^{\mu+1}}{\mu+1}+C$
(3)$\int \frac{dx}{x}=ln|x|+C$
(4)$\int \frac{dx}{1+x^2}=\arctan x+C$
(5)$\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C$
(6)$\int \cos x dx=\sin x +C$
(7)$\int\sin x dx=-\cos x+C$
(8)$\int\frac{dx}{\cos^2x}=\sec^2xdx=\tan x+C$
(9)$\int\frac{dx}{\sin^2x}=\csc^2xdx=-\cot x+C$
(10)$\int\sec x \tan x dx=\sec x+C$
(11)$\int\csc x \cot x dx=-\csc x+C$
(12)$\int e^x dx=e^x+C$
(13)$\int a^x dx=\frac{a^x}{\ln a}+C$

![](/images/tongji-calculus-1-4/GMOUH2ANJE1N%5BWS%60YMZI@P0.png)

 

<center><span style='color:blue;font-size:15px'>2021/5/6</span></center>

### 第三节 分部积分法

设$u(x),v(x)有连续一阶导数，则\\\displaystyle\int udv=uv-\int vdu$

选取原则是vdu要好做

case1：$$(幂函数*指数函数)指数函数到后面，降低幂函数的次数\\\displaystyle\int xe^xdx=\int xd(e^x)=xe^x-\int e^x dx$$

case2：(幂函数*三角函数)三角函数到后面，降低幂函数的次数​

case3：$$(幂函数*对数函数)幂函数到后面，对对数函数求导\\\displaystyle\int x^2\ln xdx=\int\ln xd(\frac{1}{3}x^3)=\frac{1}{3}x^3\ln x-\int\frac{1}{3}x^3d(\ln x)$$

case4：(幂函数*反三角函数)幂函数到后面，对反三角函数求导

case5：(指数函数*sinx/cosx)都可以到后面去，进行两次分部积分后还原

case6：$(\sec^nx/\csc^n x)$（n为奇数）进行两次分部积分后还原，偶数次用换元法就能解

#### 内容小结

![](/images/tongji-calculus-1-4/image-20210506111708176.png)



### 第四节 有理函数的不定积分

#### 一、有理函数的积分

两个多项式的商称为**有理函数**，当分子多项式的次数小于分母多项式的次数，称为**真分式**，否则称为**假分式**

利用**多项式的除法**，总可以将一个假分式化成一个多项式与一个真分式之和的形式

对于能够因式分解的真分式，分子不变，分母因式分解，拆成部分和

因式分解例：$$\displaystyle case1:R(x)=\frac{2x+3}{(x-2)(2x+1)}=\frac{A}{x-2}+\frac{B}{2x+1}\\\displaystyle case2:R(x)=\frac{x^2-3x+1}{(x-1)^2(2x+1)}=\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{C}{2x+1}\\\qquad (*)A(x-1)(2x+1)+B(2x+1)+C(x-1)^2=x^2-3x+1\\\displaystyle case3:R(x)=\frac{3x+2}{x^2(x^2+2x+3)}=\frac{A}{x}+\frac{B}{x^2}+\frac{Cx+D}{x^2+2x+3}$$

#### 二、可化为有理函数的积分

含sin和cos函数的有理化：$$\sin x和\cos x都可以用\tan \frac{x}{2}的有理式表示\\如果作变换u=\tan\frac{x}{2}(-\pi<x<\pi)，那么\\\sin x=\frac{2u}{1+u^2}，\cos x=\frac{1-u^2}{1+u^2}，而x=2\arctan u，从而 dx=\frac{2}{1+u^2}du$$



如果被积函数中含有简单根式$\displaystyle\sqrt[n]{ax+b}或\sqrt[n]{\frac{ax+b}{cx+d}}$，可以令这个简单根式为u，由于这样的变换具有反函数，且反函数是u的有理函数，因此原积分即可化为有理函数的积分