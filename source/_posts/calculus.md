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

#### (四)高阶线性微分方程

1. 

### 二、常考题型与典型例题

#### 题型一、微分方程求解

#### 题型二、综合题

#### 题型三、应用题
