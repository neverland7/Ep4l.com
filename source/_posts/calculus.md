---
title: 高数
date: 2021-04-12 21:30:39
mathjax: true
summary: 挂大树
categories: 学习笔记
tags:
 - 数学
 - 微积分
 - 考研
typora-root-url: ..
---

## 高等数学常用基础知识

### 基本基础知识

- $(a+b)^n=\displaystyle\sum_{k=0}^nC_n^ka^kb^{n-k}$
- $a^3+b^3=(a+b)(a^2-ab+b^2)$
- $a^3-b^3=(a-b)(a^2+ab+b^2)$
- $\displaystyle(a-1)(b-1)=ab-a-b+1\qquad例：e^3-e^2-e+1=(e^2-1)(e-1)$
- $\displaystyle\log_ae=\frac{\ln e}{\ln a}(对数换底公式）$
- $\displaystyle(a+b)^x=a^x(1+\frac{b}{a})^x$
- $\displaystyle\arcsin x+\ arccos x=\frac{\pi}{2}$
- $$\displaystyle \arctan x+\arctan\frac{1}{x}=\begin{cases}+\frac{\pi}{2}\quad,x>0\\-\frac{\pi}{2}\quad,x<0\end{cases}$$
- $\displaystyle \frac{1}{x^2-1}=\frac{1}{(x+1)(x-1)}=\frac{(x+1)-(x-1)}{2(x+1)(x-1)}=\frac{1}{2}[\frac{1}{x-1}-\frac{1}{x+1}]$
- 裂项公式：$\displaystyle \frac{1}{(ax+b)(cx+d)}=\frac{1}{ad-bc}[\frac{a}{ax+b}-\frac{c}{cx+d}]$
- $\displaystyle\tan x=\csc 2x-\cot 2x=\frac{1-\cos 2x}{\sin 2x}=\frac{\sin 2x}{1+\cos 2x}=\frac{1}{\csc 2x+\cot 2x}$
- $\displaystyle1+\sin x=(\sin\frac{x}{2}+cos\frac{x}{2})^2$
- $\displaystyle\sin x+\cos x=\sqrt2\sin (\frac{\pi}{4}+x)=\sqrt2\cos (\frac{\pi}{4}-x)$
- $\displaystyle a^2+b^2\geq2ab$
- $\sqrt {x^2}=|x|$
- $||a|-|b||\leq|a-b|$
- 万能公式：把所有三角函数都化成只有$\tan\frac a2$的多项式
  $\sin a=\frac{2\tan\frac a2}{1+\tan^2\frac a2}$
  $\cos a=\frac{1-\tan^2\frac a2}{1+\tan^2\frac a2}$
  $\tan a=\frac{2\tan\frac a2}{1-\tan^2\frac a2}$

- 一元三次方程的求解：

  例：$x^3-x^2-x-2=0$

  （1）代入0，$\pm 1$，$\pm 2$，$\pm 3$求出一个解，本题为2

  （2）$(x-2)(x^2+x+1)=x^3-x^2-x-2=0$（从前往后填，缺哪个补哪个）

### 基本初等函数

- 幂函数：$y=x^u$
- 指数函数：$y=a^x$
- 对数函数：$y=\log_ax$
- 三角函数
- 反三角函数

由常数和基本初等函数经过有限次的四则运算，以及有限次的复合步骤所构成的并且可以由一个式子所表示的函数称为初等函数。

#### 数列

- 等差数列
  - 通项公式：$a_n=a_1+(n-1)d$
  - 前n项的和：$na_1+\frac{n(n-1)d}{2}=\frac{n}{2}(a_1+a_n)$
- 等比数列
  - 通项公式：$a_n=a_1*r^{n-1}$
  - 前n项的和：$\frac{a_1(1-r^n)}{1-r}$

#### 三角函数

sin 正弦 对比斜

cos 余弦 斜比邻

tan 正切  对比邻

$\csc\alpha=\frac{1}{\sin\alpha}$ 余割 

$\sec\alpha=\frac{1}{\cos\alpha}$ 正割

$\cot\alpha=\frac{1}{\tan\alpha}$ 余切 

![几何意义（1）](/images/calculus/image-20210412213745351.png)

#### 三角函数公式

$\sec^2\alpha-\tan^2\alpha=1$

$\csc^2\alpha-\cot^2\alpha=1$

$三角函数(x)=co三角函数(\frac{\pi}{2}-x)$

##### 和差公式：

$\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta$

$\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta$

$\tan(\alpha\pm\beta)=\frac{\tan\alpha\pm\tan\beta}{1\mp\tan\alpha\tan\beta}$

##### 倍角公式：

$\sin(2\alpha)=2\sin\alpha\cos\alpha$

$\begin{aligned}\cos(2\alpha)&=\cos^2\alpha-\sin^2\alpha\\&=2\cos^2\alpha-1\\&=1-2\sin^2\alpha\end{aligned}$

$\tan(2\alpha)=\frac{2\tan\alpha}{1-\tan^2\alpha}$

##### 半角公式：

$\sin^2\frac{\alpha}{2}=\frac{1-\cos\alpha}{2}$

$\cos^2\frac{\alpha}{2}=\frac{1+\cos\alpha}{2}$

##### 和差化积公式：

$\sin\alpha+\sin\beta=2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$

$\sin\alpha-\sin\beta=2\sin\frac{\alpha-\beta}{2}\cos\frac{\alpha+\beta}{2}$

$\cos\alpha+\cos\beta=2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$

$\cos\alpha-\cos\beta=-2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}$

##### 积化和差公式：

$\sin\alpha\cos\beta=\frac{\sin(\alpha-\beta)+\sin(\alpha+\beta)}{2}$

$\sin\alpha\sin\beta=\frac{\cos(\alpha-\beta)-\cos(\alpha+\beta)}{2}$

$\cos\alpha\cos\beta=\frac{\cos(\alpha-\beta)+\cos(\alpha+\beta)}{2}$

<center><span style='color:blue;font-size:15px'>2021/6/11</span></center>

## 考研高等数学框架

![](/images/calculus/image-20210611105455028.png)

**整个考研数学中，一元微积分是重点和难点，后面画圈划线的是难点，是强化阶段的任务**

## 第一章 函数 极限 连续

极限是第一章的重点和难点

### 第一节 函数

### 一、考试内容概要：

#### (一)函数的概念及常见函数

1. 函数概念（两要素：定义域，对应规则）

2. 复合函数（不是任意两个函数都可以符合，要求内层函数的值域和外层函数的定义域交集不为空

3. 反函数

   存在反函数的充要条件：$\forall x_1\not=x_2\in D,有f(x_1)\not=f(x_2)$

4. 初等函数

   由5个基本初等函数（幂、指、对、三角、反三角）经过有限次的四则和复合构成的可以用一个式子表示的函数

#### (二)函数的性质

1. 单调性

2. 奇偶性

   前提：定义域关于原点对称

   常见的奇函数：$\ln\frac{1-x}{1+x}$，$\ln(x+\sqrt{1+x^2})$，$\frac{e^x-1}{e^x+1}$，$f(x)-f(-x)$

   常见的偶函数：$f(x)+f(-x)$

3. 周期性

4. 有界性

### 二、常考题型与典型例题

#### 题型一、函数有界性、单调性、周期性及奇偶性的判定

#### 题型二、复合函数



### 第二节 极限

### 一、考试内容概要

#### (一)极限的概念

1. 数列的极限

   $(\varepsilon-N)$ ：$\forall\varepsilon>0，\exists N，当 n>N时，有|x_n-a|<\varepsilon$

2. 函数的极限

   自变量趋于无穷大时函数的极限：

   和数列极限类似，有三个（正无穷，负无穷，无穷）

   自变量趋于有限值时函数的极限：

   $(\varepsilon-\delta)$ ：$若\forall\varepsilon>0，\exists\delta>0，当0<|x-x_0|<\delta时，恒有|f(x)-A|<\varepsilon，则称A为x\to x_0时f(x)的极限$。


#### (二)极限的性质（数列和函数对比）

1. 有界性（收敛数列必有界；函数极限存在则局部有界）

2. 保号性（极限值保函数值；函数值保极限值）

3. 极限值与无穷小之间的关系

   $\lim f(x)=A\Leftrightarrow f(x)=A +a(x),其中\lim a(x)= 0$

#### (三)极限存在准则（一般考数列极限）

1. 夹逼准则
2. 单调有界准则

#### (四)无穷小

1. 无穷小量的概念（极限为0的**变量**）
2. 无穷小的比较（阶）
3. 无穷小的性质（有限个无穷小的和、积是无穷小；无穷小与有界量的乘积是无穷小）

#### (五)无穷大

1. 无穷大量的概念（无穷大包含正无穷和负无穷）

   $\forall M>0,\exists\delta>0,当0<|x-x_0|<\delta时，恒有|f(x)|>M,称f(x)为x\to x_0时的无穷大量$

2. 常用的一些无穷大量的比较（对<幂<指<阶乘<幂指）

3. 无穷大量的性质（有限个无穷大的积是无穷大（和不一定）；（无穷大与有界变量的积不一定是无穷大）；无穷大量与有界变量的和是无穷大）

4. 无穷大量与无界变量的关系（无穷大量必为无界变量，而无界变量不一定是无穷大量）

5. 无穷大量与无穷小量的关系（在同一极限过程中）

<center><span style='color:blue;font-size:15px'>2021/6/13</span></center>

### 二、常考题型与典型例题

#### 题型一、极限的概念性质及存在准则

#### 题型二、求极限   

方法1：利用基本极限求极限
方法2：利用等价无穷小代换求极限
方法3：利用有理运算法则求极限
方法4：利用洛必达法则求极限
方法5：利用泰勒公式求极限
方法6：利用夹逼原理求极限
方法7：利用单调有界准则求极限
方法8：利用定积分定义求极限(见第五章)

#### 题型三、无穷小量阶的比较



<center><span style='color:blue;font-size:15px'>2021/6/14</span></center>

### 第三节 函数的连续性

### 一、考试内容概要

#### (一)连续性的概念

在某点极限值等于函数值；开区间连续；闭区间连续

#### (二)间断点及其分类

间断点的定义：f(x)在某点去心领域有定义，但在该点不连续

间断点的分类：左右极限都存在（第一类：可去、跳跃）至少有一个不存在（第二类：无穷、振荡）

#### (三)连续性的运算与性质

连续函数的四则（商的时候分母不等于0）、复合仍为连续函数

基本初等函数在其定义域内连续，初等函数在其定义区间内连续

#### (四)闭区间上连续函数的性质

 有界性定理、最大值最小值定理、介值定理（和推论）、零点定理（用的多）

### 二、常考题型与典型例题

#### 题型一、讨论函数连续性及间断点的类型（重点，基础）（目前不熟练）

#### 题型二、有关闭区间上连续函数性质的证明题（难点） 



<center><span style='color:blue;font-size:15px'>2021/6/17</span></center>

## 第二章 导数与微分

### 一、考试内容概要：

#### (一)导数与微分的概念

1. 导数的概念：（左右导数；区间上可导（开，闭）及导函数）导数反映了函数在一点的变化率

   若$$\displaystyle\lim_{\triangle x\to 0}\frac{f(x_0+\triangle x)-f(x_0)}{\triangle x}=\lim_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0}=\lim_{\triangle x\to 0}\frac{\triangle y}{\triangle x}存在，则称f(x)在x_0点可导$$

   记作$$f'(x_0)\quad或y'|_{x=x_0}\quad或\frac{dy}{dx}|_{x=x_0}$$

2.  微分的概念：微分反映了函数的改变量（或微分是函数改变量的线性主部）

   如果$$\triangle y=f(x_0+\triangle x)- f(x_0)=A\triangle x+o(\triangle x)(\triangle x\to 0)$$

   那么$$A\triangle x称为f(x)在x_0点的微分，记为dy=A\triangle x，dy是\triangle y的线性主部$$

3.  导数和微分的几何意义：（导数代表切线的斜率；切线、法线方程；微分代表切线上的增量）

   ![](/images/calculus/image-20210617204300947.png)

4.  连续，可导，可微之间的关系：（可微$\Leftrightarrow$可导；可导$\Rightarrow$连续；连续$\not\Rightarrow$可导）

   **（重要）**f(x)在$x_0$点可导$\not\Rightarrow$f(x)在$x_0$点连续；f(x)在$x_0$点可导$\not\Rightarrow$f(x)在$x_0$点存在

   例子：$$\displaystyle f(x)=\begin{cases}x^2\sin\frac 1 x,x\not=0\\0\qquad \quad,x=0\end{cases}$$在0点导数等于0（定义算）但是在0点导数无极限

#### (二)导数公式与求导法则

1. 基本初等函数的导数公式
2. 求导法则（有理运算；复合函数；隐函数；反函数；参数方程；对数求导法）

#### (三)高阶导数

1. 高阶导数的定义
2. 常用的高阶导数公式

<center><span style='color:blue;font-size:15px'>2021/6/18</span></center>

### 二、常考题型与典型例题：

#### 题型一、导数定义

#### 题型二、复合函数、隐函数、参数方程求导

#### 题型三、高阶导数

1. 公式法
2. y'、y''、···归纳法
3. 泰勒

#### 题型四、导数应用

1. 导数的几何意义（直角坐标、参数方程、极坐标的切线、法线）
2. 相关变化率



<center><span style='color:blue;font-size:15px'>2021/6/20</span></center>

## 第三章 微分中值定理及导数应用

### 一、考试内容概要

#### (一)微分中值定理

1. 费马引理、罗尔定理、拉格朗日中值定理、柯西中值定理

   **中值定理的本质：**

   （1）建立**一阶导数**和函数之间的关系

   （2）罗-拉-柯（左边的是右边的特例，右边的是左边的推广）（拉和柯都是有罗证得）（罗和拉使用较多）

2. 泰勒公式（皮亚诺型余项；拉格朗日型余项）

   **泰勒公式的本质：**

   （1）建立**高阶导数**和函数之间的关系

   （2）用多项式逼近函数

   **两种带余项的泰勒公式的不同：**

   （1）条件不同，皮要求在点$x_0$有直至n阶的导数；拉要求在含有$x_0$的开区间（a,b)内有n+1阶的导数

   （2）$$\begin{cases}皮:R_n(x)=o(x-x_n)^n（定性）——局部泰勒公式\begin{cases}极限\\极值\end{cases}\\拉:R_n(x)=\displaystyle\frac{f^{n+1}(\xi)}{(n+1)!}(x-x_0)^{n+1}（定量）——整体泰勒公式\begin{cases}最值\\不等式\end{cases}\end{cases}$$

   **四大中值定理：**（罗尔、拉格朗日、柯西中值定理；带拉格朗日余项的泰勒公式）



<center><span style='color:blue;font-size:15px'>2021/6/21</span></center>

#### (二)导数的应用

1. 导数的单调性  
2. 函数的极值（驻点，不可导点）
3. 函数的最大值与最小值（驻点，不可导点，端点）（唯一极值点也是最值点）
4. 曲线的凹凸性（拐点，一必要两充分和驻点类似）
5. 曲线的渐近线（水平、垂直、斜）
6. 函数的作图（单调性、极值、曲线的凹凸性、拐点和渐近线）
7. 曲线的弧微分和曲率（$K=\frac{|y''|}{(1+y'^2)^{\frac{3}{2}}}$）

### 二、常考题型与典型例题

前两类是基本题，后三类是难题，最后一类最难

#### 题型一、函数的极值和最值，曲线的凹向与拐点

#### 题型二、曲线的渐近线

#### 题型三、方程的根

（1）存在性：零点定理，罗尔定理（2）个数：单调性

#### 题型四、不等式的证明 （薄弱）

（1）单调性（2）拉格朗日中值定理（3）最大最小值

#### 题型五、中值定理的证明题



<center><span style='color:blue;font-size:15px'>2021/6/25</span></center>

## 第四章 不定积分

### 一、考试内容概要

#### (一)不定积分的概念与性质

1. 原函数（F'(x)=f(x)；F(x)是f(x)的一个原函数）

2. 不定积分（原函数的全体（一个函数族））

3. 不定积分的几何意义（平面上的曲线（连续且光滑，因为可导））

4. 原函数存在定理 （连续函数一定有原函数；若有第一类间断点，则没有原函数；振荡可能有原函数）

   有第一类间断点会让其积分曲线不光滑，导致某些点不可导。

5. 不定积分的性质

#### (二)不定积分基本公式

#### (三)三种主要积分法

1. 第一类换元法（凑微分法）
2. 第二类换元法（基本都是用来去根号）
3. 分部积分法

#### (四)三类常见可积函数的积分

三类的基础都是有理函数积分

1. 有理函数积分（$\int R(x)dx$）（一般加项减项拆，凑微分降幂）
2. 三角有理式积分（$\int R(\sin x,\cos x)dx$）（一般三角变形，换元，分部）
3. 简单无理式积分（$\int R(x,\sqrt[n]{\frac{ax+b}{cx+d}})dx$）（一般直接让根式等于t换元）

#### 总结：

**2+3+3**（**两个概念**（原函数，不定积分）**三种方法**（两种换元，分部积分）**三类积分**（有理函数积分，三角有理式的积分，带有简单无理式的积分）)
**重点：**三种方法
**尺度：**考研不会考特殊方法的积分，把基本方法练会就可以

### 二、常考题型与典型例题

#### 求不定积分(换元、分部)



<center><span style='color:blue;font-size:15px'>2021/6/26</span></center>

## 第五章 定积分与反常积分

### 第一节 定积分

### 一、考试内容概要

#### (一)定积分概念

1. 定积分的定义：（定积分是一个**常数**，一个和数的极限，仅与积分区间和被积函数有关，与积分变量无关）

   （分割、求和、取极限）$$\displaystyle\lim_{\lambda\to 0}\sum^n_{i=1}f(\xi_i)\triangle x_i=\int^b_af(x)dx$$

   若极限存在，则与$\xi_i$的**取法**和区间[a,b]的**分法**无关

   因此，如果积分$\int^1_0f(x)dx$存在，可以将区间n等分，此时$\triangle x_i=\frac{1}{n}$，取右端点$\xi_i=\frac i n$，由定积分的定义得

   :$$\displaystyle \int ^1_0f(x)dx=\lim_{\lambda\to 0}\sum^n_{i=1}f(\xi_i)\triangle x_i=\lim_{n\to\infty}\frac 1 n \sum^n_{i=1}f(\frac i n)$$

2. 定积分存在的充分条件（函数连续必存在；有界且有有限个间断点必存在；有有限个第一类间断点必存在）

3. 定积分的几何意义（x轴上方的面积减去下方的面积）

#### (二)定积分的性质

1. 不等式性质

   (1) 若 $f(x) \leq g(x)$，则 $$\int_{a}^{b} f(x)dx \leq \int_{a}^{b} g(x)dx$$

   (2) 若 $f(x)$ 在 $[a, b]$ 上连续，则$m(b-a) \leq \int_{a}^{b} f(x)dx \leq M(b-a)$（定积分的估值性）

   (3)$$|\int_{a}^{b} f(x)dx| \leq \int_{a}^{b}|f(x)|dx$$（和的绝对值不超过绝对值的和）

2. 积分中值定理

   (1) 若 $f(x)$ 在 $[a, b]$ 上连续, 则$\int_{a}^{b} f(x)dx=f(\xi)(b-a) \quad (a<\xi<b)$

   (2) 若 $f(x), g(x)$ 在 $[a, b]$ 上连续， $g(x)$不变号，则$$\int_{a}^{b} f(x) g(x)dx=f(\xi) \int_{a}^{b} g(x)dx, \quad (a \leq \xi \leq b)$$

#### (三)积分上限的函数

变上限的积分$\displaystyle \int ^x_a f(t)dt$是其上限x的函数，称之为**积分上限函数**

若f(x)为奇函数，那么$\displaystyle \int^x_0f(t)dt$必为偶函数；若f(x)为偶函数，那么$\displaystyle \int^x_0f(t)dt$必为奇函数

#### (四)定积分的计算

1. 牛顿-莱布尼兹公式（$\displaystyle\int^b_af(x)dx=F(b)-F(a)$）
2. 换元积分法
3. 分部积分法
4. 利用奇偶性和周期性（在对称区间上奇函数的积分为0，偶函数为2倍正区间的积分）
5. 利用已有公式（华里士公式；$\int^\pi_0xf(\sin x)dx=\frac \pi 2\int^\pi_0f(\sin x)dx$；）

### 二、常考题型与典型例题

#### 题型一、定积分的概念、性质及几何意义

#### 题型二、定积分计算

#### 题型三、变上限定积分





<center><span style='color:blue;font-size:15px'>2021/6/29</span></center>

### 第二节 反常积分

反常积分的本质是”变限积分的极限值”，并非积分本身。

### 一、考试内容概要

#### (一)无穷区间上的反常积分

1. 定义：

   （1）$$\displaystyle \int^{+\infty}_af(x)dx=\lim_{t\to+\infty}\int^t_af(x)dx$$；若此极限存在，称反常积分**收敛**，若不存在，称其反常积分**发散**

   （2）$$\displaystyle \int^b_{-\infty}dx=\lim_{t\to-\infty}\int^b_tf(x)dx$$

   （3）若$$\displaystyle \int^{+\infty}_0f(x)dx和\int^0_{-\infty}f(x)dx$$**都收敛**，则称$$\displaystyle \int^{+\infty}_{-\infty}f(x)dx$$收敛

2. p积分：$$\displaystyle\int^{+\infty}_a\frac{dx}{x^p};\begin{cases}P>1\quad收敛\\P\leq1\quad 发散\end{cases}(a>0)$$

#### (二)无界函数的反常积分

1. 定义：

   设a为f(x)的无界点，$$\displaystyle \int^b_af(x)dx=\lim_{t\to a^+}\int^b_tf(x)dx$$，其他与无穷区间的定义类似

2. p积分：$$a是间断点时，\displaystyle\int^b_a\frac{dx}{(x-a)^p}=\begin{cases}p<1\quad收敛\\p\geq1\quad发散\end{cases}\\b是间断点时，\displaystyle\int^b_a\frac{dx}{(b-a)^p}=\begin{cases}p<1\quad收敛\\p\geq1\quad发散\end{cases}$$

### 二、常考题型与典型例题

#### 题型一、反常积分的敛散性

#### 题型二、反常积分的计算





<center><span style='color:blue;font-size:15px'>2021/7/1</span></center>

## 第六章 定积分的应用

### (一)、几何应用

1. 平面图形的面积（直角坐标；极坐标（$dS=\frac 1 2r^2d\theta$））（用二重积分的思想）
2. 旋转体体积（用二重积分的思想做）（$dv=2\pi r(x,y)d\sigma$）
3. 曲线弧长（直角坐标；参数方程；极坐标）
4. 旋转体侧面积

### (二)、物理应用

1. 压力
2. 变力做功
3. 引力

### 常考题型

平面域面积和旋转体体积的计算



<center><span style='color:blue;font-size:15px'>2021/7/2</span></center>

## 第七章 常微分方程

不同种类的微分方程解法是完全不同的

### 一、考试内容概要

#### (一)常微分方程的基本概念

1. 微分方程（含有未知函数的导数或微分的方程）
2. 微分方程的阶（方程中出现的未知函数导数的最高阶数）
3. 微分方程的解（满足微分方程的函数）
4. 微分方程的通解（微分方程的解中含有任意常数，且**独立任意常数的个**数与**微分方程的阶数**相同）
5. 微分方程的特解（微分方程的不含任意常数的解）
6. 初始条件（确定特解的一组常数）
7. 积分曲线（方程的一个解的曲线）

#### (二)一阶微分方程

前3种是重点

1. 可分离变量的方程（$y'=f(x)g(y)$）（$\frac{dy}{dx}=f(x)g(y)$）（求解两端积分）

2. 齐次方程（$\frac{dy}{dx}=\varphi(\frac y x)$）$\displaystyle\left(f(ax,ay)=\varphi(\frac{ay}{ax})=a^0\varphi(\frac{y}{x})\right)$

   令$\frac y x=u\Rightarrow y'=\varphi(u)=u+xu'\Rightarrow$可分离变量

3. 线性方程（线性针对y，y'，y'',···）

   形如$y'+P(x)y=Q(x)$的方程称为一阶线性微分方程

   $\displaystyle \frac{dy}{dx}+P(x)y=Q(x)的通解为\\\displaystyle y=\left(\int Q(x)e^{\int p(x)dx}dx+C\right)e^{-\int p(x)dx}$

4. 伯努利方程

   $y'+P(x)y=Q(x)y^\alpha(a\neq 1)$

   两边同除$y^\alpha$，令$u=y^{1-\alpha}$，可转化为一阶线性微分方程

5. 全微分方程（后面）

#### (三)可降阶的高阶方程

1. $y^{(n)}=f(x)$（直接积分）

2. $f(x,y',y'')=0$（缺y）

   令$y'=p,则y''=\frac{dp}{dx}$，代入得$f(x,p,\frac{dp}{dx})=0$，降为一阶方程

3. $f(y,y',y'')=0$（缺x）

   令$y'=p,则y''=\frac{dp}{dx}=\frac{dp}{dy}\frac{dy}{dx}=\frac{dp}{dy}p$，代入得$f(y,p,\frac{dp}{dy}p)$，降为一阶方程

<center><span style='color:blue;font-size:15px'>2021/7/4</span></center>

#### (四)高阶线性微分方程

1. 线性微分方程的解的结构

   齐次方程：$y''+p(x)y'+q(x)y=0$

   非齐次方程：$y''+p(x)y'+q(x)y=f(x)$

   齐次通解=两个线性无关的齐次特解的线性组合（$$y=C_1y_1(x)+C_2y_2(x)$$）

   非齐通解=齐次通解+一个非齐特解 （$$y=C_1y_1(x)+C_2y_2(x)+y^*(x)$$）

   非齐特解-非齐特解=齐次的解；非齐的解对于非齐次项具有叠加性

2. 常系数齐次线性微分方程

   常系数齐次线性微分方程：$y''+py'+qy=0$（二阶）

   特征方程：$r^2+pr+q=0$

   

   |          | $p^2-4q$      | 二阶常系数线性微分方程的通解                                 |
   | -------- | ------------- | ------------------------------------------------------------ |
   | 不等实根 | $\triangle>0$ | $y=C_1e^{\lambda_1x}+C_2e^{\lambda_2x}$                      |
   | 相等实根 | $\triangle=0$ | $y=(C_1+xC_2)e^{\lambda_1x}$                                 |
   | 共轭复根 | $\triangle<0$ | $$y=e^{\alpha x}(C_1\cos(\beta x)+C_2\sin(\beta x))\qquad(\lambda_{1,2}=\alpha\pm i\beta)$$ |

   高阶常系数齐次线性微分方程有几个特征根，就把他们对应的解用加法联系起来

3. 常系数非齐次线性微分方程

    常系数非齐次线性微分方程：$y''+py'+qy=f(x)$

   求出一个特解，再加上非齐次方程对应的齐次方程的通解，即可求出通解

   

   | $f(x)=e^{\lambda x}P_m(x)$                                   | 令$y^*=x^kQ_m(x)e^{\lambda x}$                               |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | $f(x)=e^{\alpha x}[P_l^{(1)}(x)\cos\beta x+P_n^{(2)}(x)\sin\beta x]$ | 令$y^*=x^ke^{\alpha x}[R_m^{(1)}(x)\cos\beta x+R_m^{(2)}(x)\sin\beta x]\quad m=\max(l,n)$ |

   上面λ是非齐次方程对应的齐次方程的特征方程的几重根，k就等于几

   下面$\alpha+i\beta$是非齐次方程对应的齐次方程的特征方程的几重根，k就等于几

4. 欧拉方程

   欧拉方程：$$x^ny^{(n)}+a_1x^{n-1}y^{(n-1)}+...+a_{n-1}xy'+a_ny=f(x)$$

   令$x=e^t$，用算符D表示$\frac d{dt}$，则$x^ky^{(k)}=D(D-1)\cdots(D-k+1)y$

### 二、常考题型与典型例题

#### 题型一、微分方程求解

#### 题型二、综合题

#### 题型三、应用题



<center><span style='color:blue;font-size:15px'>2021/7/6</span></center>

## 第八章 多元函数微分学

### 第一节 多元函数的基本概念（重极限、连续、偏导数、全微分）

### 一、考试内容纲要

#### (一)二元函数

#### (二)二元函数的极限

note：以"任意方式"趋近；

#### (三)多元函数的连续性

1. 连续的概念（函数值等于极限值）
2. 连续函数的性质

#### (四)偏导数

1. 偏导数的定义
2. 偏导数的几何意义
3. 高阶偏导数（若两个混合偏导数在某点（区域内）连续，则在该点（区域内）两个混合偏导数必相等

#### (五)全微分

1. 可微（$\triangle z=A\triangle x+B\triangle y+o(\rho)\quad(\rho=\sqrt{(\triangle x)^2+(\triangle y)^2})$）

   （定义法判定可微：$\displaystyle \frac{\triangle z-(f_x(x_0,y_0)\triangle x+f_y(x_0,y_0)\triangle y)}{\rho}=0?$）

2. 可微$\Rightarrow$偏导数存在；一阶偏导数存在且连续$\Rightarrow$可微；

#### (六)连续、可导、可微的关系

### 二、常考题型与典型例题

#### 讨论连续性、可导性、可微性



### 第二节 多元函数微分法

### 一、考试内容概要

#### (一)复合函数微分法

树形图；全微分形式的不变性

#### (二)隐函数微分法

$\displaystyle\frac{\partial z}{\partial x}=-\frac{F'_x}{F'_z};\frac{\partial z}{\partial y}=-\frac{F'_y}{F'_z}$

### 二、常考题型与典型例题

#### 题型一、复合函数的偏导数与全微分

#### 题型二、隐函数的偏导数与全微分

<center><span style='color:blue;font-size:15px'>2021/7/7</span></center>

### 第三节 多元函数的极值与最值

### 一、考试内容概要

#### (一)无约束极值

1. 极值的必要条件：若在某点存在偏导数，且该点为f(x,y)的极值点，则该点偏导为0

2. 极值的充分条件：若在某点的领域内有二阶连续偏导数，且该点偏导为零，记对x的二阶导为A，混合偏导数为B，对y的二阶导为C，则有下列结论

   （1）若$AC-B^2>0$，则该点为极值点（A<0极大值；A>0极小值）

   （2）若$AC-B^2<0$，该点不是极值点

   （3）若$AC-B^2=0$，都有可能（此时一般用定义法判定）

#### (二)条件极值与拉格朗日乘数法

1. 函数f(x,y)在条件$\varphi(x,y)=0$条件下的极值

   令$$F(x,y,\lambda)=f(x,y)+\lambda\varphi(x,y)\\\begin{cases}F_x=f_x+\lambda\varphi_x=0\\F_y=f_y+\lambda\varphi_y=0\\F_{\lambda}=\varphi(x,y)=0\end{cases}$$

   即可解出若干组x，y为可能极值点

2. 类似，三个自变量，两个约束条件，作辅助函数，使五个偏导等于0，解出x,y,z

#### (三)最大最小值

1. 求连续函数在闭区域上的最大最小值（(1)求内部可能的极值点(2)求边界上的最大最小值(条件最值)(3)比较）
2. 应用题（建立目标函数，然后按1的三步曲求解）

### 二、常考题型方法与技巧

#### 题型一、求极值(无条件)

#### 题型二、求最大最小值

#### 题型三、最大最小值应用题



<center><span style='color:blue;font-size:15px'>2021/7/8</span></center>

## 第九章 二重积分

### 一、考试内容概要

#### (一)二重积分的概念与性质

1. 二重积分的概念
2. 二重积分的性质（不等式性质(3)；积分中值定理）

#### (二)二重积分计算

1. 利用直角坐标计算
2. 利用极坐标计算
3. 利用函数的奇偶性计算
4. 利用变量的轮换对称性计算

### 二、常考题型方法与技巧

#### 题型一、累次积分交换次序及计算

#### 题型二、二重积分计算



<center><span style='color:blue;font-size:15px'>2021/7/9</span></center>

## 第十章 无穷级数

### 第一节 常数项级数

### 一、考试内容概要

#### (一)级数的概念与性质

1. 级数的概念（数列部分和$S_n$的极限）；等比级数
2. 级数的性质
   1. 两收敛级数相加仍收敛；
   2. 收敛级数每项数乘仍收敛；
   3. 在级数中添加，减少，修改有限项，不会改变级数的敛散性； 
   4. 在级数中添加括号收敛性不降低（有可能会提高）；
   5. （级数收敛的**必要**条件）$$若级数\displaystyle \sum^\infty_{n=1}u_n收敛，则\lim_{n\to\infty}u_n=0$$

#### (二)级数的审敛准则

1. 正项级数（$$\displaystyle \sum^\infty_{n=1}u_n,u_n\geq0$$）

   基本定理（充要条件）：收敛⇔部分和数列上有界

   两个常用级数（p级数；等比级数）

   （1）比较判别法（大收敛小收敛；小发散大发散）

   （2）比较法的极限形式

   （3）比值法

   （4）根值法

2. 交错级数（$$\displaystyle\sum^\infty_{n=1}(-1)^{n-1}u_n,u_n>0$$）

   莱布尼兹准则（**充分**条件）（若$u_n$单调减且极限趋于0则收敛）

3. 任意项级数（$$\displaystyle \sum^\infty_{n=1}u_n,u_n$$为任意实数） 

   绝对收敛与条件收敛（加绝对值提高发散性）

   绝对收敛的级数一定收敛；条件收敛的级数的所有正（或负项）构成的级数一定发散；

### 二、常考题型与典型例题

#### 常数项级数敛散性的判定



### 第二节 幂级数

### 一、考试内容概要

#### (一)收敛半径收敛区间收敛域

1. 定义：每一项都是x的正整数幂，并且按升幂排列的函数项级数

2. 阿贝尔定理（若幂级数在x0收敛，则当|x|<|x0|时，幂级数绝对收敛；若在x0发散，则当则当|x|>|x0|时，幂级数发散）

   根据阿贝尔定理，幂级数的收敛性只有三种可能（全体区间都收敛；仅在0处收敛；|x|<R时绝对收敛，|x|>R时发散）

   R称为幂级数的**收敛半径**；开区间(-R,R)称为它的**收敛区间**；加上$\pm R$点的收敛性后称为**收敛域**

   **note：**若幂级数在某点条件收敛，则该点必为一个端点

3. 若$$\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=\rho,则R=\frac{1}{\rho}$$

   若$$\displaystyle\lim_{n\to\infty}\sqrt[n]{|a_n|}=\rho,则R=\frac{1}{\rho}$$

#### (二)幂级数的性质

1. 有理运算性质 （四则）
2. 分析性质（和函数在收敛区间上连续；逐项可导性；逐项可积性）

#### (三)函数的幂级数展开

1. 几个常用的展开式

2. 函数展开为幂级数的两种方法

   （1）直接展开法（求各阶导数写泰勒级数）（考试应该不会用到）

   （2）间接展开法（基本展开式：四则，逐项求导，逐项求积分，变量代换）（重点）

### 二、常考题型与典型例题

#### 题型一、求收敛半径、收敛区间及收敛域（两公式；端点代）

#### 题型二、将函数展开为幂级数（把函数写成基本幂级数的形式后展开；逐项可导；逐项可积）

#### 题型三、求幂级数的和函数(重点难点)



<center><span style='color:blue;font-size:15px'>2021/7/10</span></center>

### 第三节 傅里叶级数

### 一、考试内容概要

#### (一)傅里叶系数与傅里叶级数

傅里叶系数：$$\displaystyle a_n=\frac1\pi\int^\pi_{-\pi}f(x)\cos nxdx\qquad(n=0,1,2,3,···)\\
\displaystyle b_n=\frac1\pi\int^\pi_{-\pi}f(x)\sin nxdx\qquad(n=1,2,3,···)\\$$

傅里叶级数：$$f(x)\sim\displaystyle \frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos n x+b_{n} \sin n x\right)$$

#### (二)收敛定理(狄利克雷)

$$设f(x) 是周期为2π的周期函数,如果它满足:\\
(1)在一个周期([-π,π])内连续或只有有限个第一类间断点，\\
(2)在一个周期([-π,π])内至多只有有限个极值点，\\
那么f(x)的傅里叶级数在[-π,π]上处处收敛\\
\displaystyle a_0=\frac1\pi\int^\pi_{-\pi}f(x)dx\\
\displaystyle a_n=\frac1\pi\int^\pi_{-\pi}f(x)\cos nxdx\qquad(n=1,2,3,···)\\
\displaystyle b_n=\frac1\pi\int^\pi_{-\pi}f(x)\sin nxdx\qquad(n=1,2,3,···)\\
当x是f(x)的连续点时，级数S(x)收敛于f(x)；\\
\displaystyle当x是f(x)的间断点时，级数S(x)收敛于\frac1 2[f(x^-)+f(x^+)]\\$$

<center><span style='color:blue;font-size:15px'>2021/7/11</span></center>

#### (三)函数展开为傅里叶级数

1. [-π,π]上展开
2. [-π,π]上奇偶函数的展开
3. 在[0,π]上展开为正弦或展开成余弦（周期延拓）

#### (四)周期为2l的函数的展开

1. [-l,l]上展开
2. [-l,l]上奇偶函数的展开
3. 在[0,l]上展开为正弦或展开成余弦

### 二、常考题型方法与技巧

#### 题型一、狄利克雷收敛定理

#### 题型二、将函数展开为傅里叶级数



<center><span style='color:blue;font-size:15px'>2021/7/12</span></center>

## 第十一章 向量代数与空间解析几何及多元微分学在几何上的应用

### 第一节 向量代数

#### 一、数量积（数）

1. 几何表示（$\vec a·\vec b=|\vec a||\vec b|\cos\theta$）
2. 代数表示（$\vec a·\vec b=a_xb_x+a_yb_y+a_zb_z$）
3. 运算规律（交换律、分配率）
4. 几何应用（求模、求夹角、判断两向量垂直）

#### 二、向量积（向量）

1. 几何表示（模：$|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$；方向：右手法则）
2. 代数表示（$$\vec a\times\vec b=\begin{vmatrix}\vec i&\vec j&\vec k\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}$$）
3. 运算规律（反交换律、分配率）
4. 几何应用（求同时垂直于a,b的向量、求以a,b为邻边的平行四边形的面积、判定两向量平行）

#### 三、混合积（数）

1. 几何表示（$(\vec a\vec b\vec c)=(\vec a\times\vec b)·\vec c$）
2. 代数表示（$$(\vec a\vec b\vec c)=(\vec a\times\vec b)·\vec c=\begin{vmatrix}a_x&a_y&a_z\\b_x&b_y&b_z\\c_x&c_y&c_z\end{vmatrix}$$）
3. 运算规律（轮换对称性、交换变号）
4. 几何应用（平行六面体体积、判断三向量共面）



### 第二节 空间平面与直线

#### 一、平面方程

一般式、点法式、截距式

#### 二、直线方程

一般式、对称式（点向式）、参数式

#### 三、平面与直线的位置关系

#### 四、点到面的距离

#### 五、点到直线的距离



### 第三节 曲面与空间曲线

#### 一、曲面方程

一般式（F(x,y,z)=0或z=f(x,y)）

#### 二、空间曲线

参数式（螺线）、一般式

#### 三、常见曲面

旋转面、柱面、二次曲面、空间曲线投影



### 第四节 多元微分学在几何上的应用

#### 一、曲面的切平面和法线

F(x,y,z)=0；z=f(x,y)

#### 二、曲线的切线与法平面

参数式；一般式



## 第十二章 多元积分学及其应用

### 第一节 三重积分

1. 定义（和二重类似）

2. 性质（和二重类似）

3. 计算

   直角坐标：

   （1）先一后二（先单后重）（铅直投影法）（有上下曲面方程时）

   （2）先二后一（先重后单）（切片法）（截面积好算时）

   柱坐标、球坐标、利用奇偶性、利用变量的轮换对称性

### 第二节 曲线积分

#### 一、对弧长的线积分（第一类线积分）

1. 定义：$$\displaystyle\int_Lf(x,y)ds=\lim_{\lambda\to 0}\sum^n_{i=1}f(\xi_i,\eta_i)\triangle s_i$$

2. 性质：第一类线积分与积分路径方向无关

3. 计算方法（平面）

   直接法：（参数方程， 直角坐标，弧坐标）

   利用奇偶性、利用对称性

#### 二、对坐标的线积分（第二类线积分）

1. 定义：$$\displaystyle\int_LP(x,y)dx+Q(x,y)dy=\lim_{\lambda\to 0}\sum^n_{i=1}[P(\xi_i,\eta_i)\triangle x_i+Q(\xi_i.\eta_i)\triangle y_i]$$

2. 性质：第一类线积分与积分路径方向有关

3. 计算方法（平面）

   直接法、格林公式（$\displaystyle\iint\limits_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dxdy=\oint_LPdx+Qdy$）、补线用格林公式、

   利用线积分与路径无关：

   （1）判定：$\displaystyle \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$（区域D单连通）

   （2）计算（1）改换路径计算（2）利用原函数计算

4. 两类线积分的联系

   $\displaystyle\int_LPdx+Qdy=\int_L(P\cos\alpha+Q\cos\beta)ds$

5. 计算方法（空间）

   （1）直接法（参数方程）

   （2）斯托克斯公式（曲面方向右手法则）

   $$\displaystyle\oint_\Gamma Pdx+Qdy+Rdz==\iint\limits_\Sigma\begin{vmatrix}\cos\alpha&\cos\beta&\cos\gamma\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\P&Q&R \end{vmatrix}dS$$，($\Sigma$是**外侧**曲面)

<center><span style='color:blue;font-size:15px'>2021/7/21</span></center>

### 第三节 曲面积分

### 第四节 多元积分应用

### 第五节 场论初步

