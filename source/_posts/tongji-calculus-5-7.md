---
title: 同济高数第七版（5-7章）
date: 2021-05-07 19:48:07
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/tongji-calculus-5-7/calculus_1.png
mathjax: true
summary: 同济高数
categories: 学习笔记
tags:
 - 数学
 - 微积分
 - 考研
typora-root-url: ..

---



<center><span style='color:blue;font-size:15px'>2021/5/7</span></center>

## 第五章 定积分

不定积分会求了，但是积分有什么用呢？本章解答

### 第一节 定积分的概念与性质

#### 一、背景：一元不规则

例：曲边梯形面积

#### 二、定积分的定义

<span style='color:blue;font-size:20px'>定理：</span>$$设函数f(x)在[a,b]上有界\\1.(分)a=x_0<x_1<x_2<......<x_n=b\\ \triangle x_i=x_i-x_{i-1},1\leq i\leq n\\2.(近似值)\forall \xi_i\in[x_{i-1},xi]\\\triangle S_i=f(\xi_i)\triangle x_i(1\leq i\leq n)\\S\approx\displaystyle\sum^n_{i=1}f(\xi_i)\triangle x_i\\3.(精确值)\lambda=\max\{\triangle x_1,\triangle x_2,......\triangle x_n\}(\lambda 反映区间划分细腻程度)\\\displaystyle若\lim_{\lambda\to 0}\sum^n_{i=1}f(\xi_i)\triangle x_i存在，称这个极限为函数f(x)在[a,b]上的定积分，\\\displaystyle记作\int^b_af(x)dx，即\\\displaystyle\lim_{\lambda\to 0}\sum^n_{i=1}f(\xi_i)\triangle x_i=\int^b_af(x)dx$$

**note:**

1.$$\displaystyle\lim_{\lambda\to 0}\sum^n_{i=1}f(\xi_i)\triangle x_i与[a,b]的分法及\xi_i的取法无关$$

2.f(x)在[a,b]上有界不一定可积

<span style='color:blue;font-size:20px'>定理：</span>若f(x)在[a,b]上连续，则f(x)在[a,b]上可积
若f(x)在[a,b]上只有有限个第一类间断点，则f(x)在[a,b]上可积

<center><span style='color:blue;font-size:15px'>2021/5/8</span></center>

#### 三、定积分的一般性质

**note:**

- $\int^a_af(x)dx=0$
- $\int^b_af(x)dx=-\int^a_bf(x)dx$

<span style='color:sienna;font-size:20px'>性质1：</span>

- $\int^b_a[f(x)\pm g(x)]dx=\int^b_af(x)dx\pm\int^b_ag(x)dx$
- $\int^b_akf(x)dx=k\int^b_af(x)dx$

<span style='color:sienna;font-size:20px'>性质2：</span>$设a<b,则\int^b_af(x)dx=\int^c_af(x)dx+\int^b_cf(x)dx$

<span style='color:sienna;font-size:20px'>性质3：</span>$\int^b_a1dx=b-a$

<span style='color:sienna;font-size:20px'>性质4：</span>$若在[a,b]上f(x)\geq0,则\int^b_af(x)dx\geq0$

<span style='color:green;font-size:20px'>推论1：</span>$若在[a,b]上f(x)\geq g(x),则\int^b_af(x)dx\geq\int^b_ag(x)dx$

<span style='color:green;font-size:20px'>推论2：</span>$|\int^b_af(x)dx|\leq\int^b_a|f(x)|dx$

<span style='color:sienna;font-size:20px'>性质5：</span>$设M和m分别是f(x)在区间[a,b]上的最大值和最小值，则\\m(b-a)\leq\int^b_af(x)dx\leq M(b-a)$

<span style='color:sienna;font-size:20px'>性质6（积分中值定理）：</span>$设函数f(x)在[a,b]上连续，则在[a,b]上至少存在一个点\xi，使\\\int^b_af(x)dx=f(\xi)(b-a)（使用介值定理的推论证明）\\其实\xi在(a,b)也成立,叫改进积分中值定理（使用拉格朗日中值定理证明）$



### 第二节 积分基本公式

只根据定义，很难求出定积分，我们寻找计算定积分的方法

#### 一、变限积分的函数

> **定积分由上下限和函数关系确定，与积分变量无关**
>
> $\int^b_af(x)dx=\int^b_af(t)dt$
>
> $\int^x_af(x)dx=\int^x_af(t)dt$
>
> 上面表达式中的x与上限的x不同
>
> $\int^x_af(x,t)dt=\int^x_af(x,u)du$
>
> 上面表达式中的x与上限的x相同

$定义积分上限的函数\phi(x)=\int^x_af(t)dt\quad x\in[a,b]$

<span style='color:blue;font-size:20px'>定理1：</span>$$设函数f(x)在[a,b]上连续，则\phi(x)=\int^x_af(t)dt在[a,b]上可导，并且\\\displaystyle\phi'(x)=\frac{d}{dx}\int^x_af(t)dt=f(x)\quad(a\leq x\leq b)$$

**note：**$\displaystyle\frac{d}{dx}\int^{\varphi(x)}_af(t)dt=f[\varphi(x)]\varphi'(x)$

**更一般的结论：**$$若\varphi(x),\psi(x)可导，f(x)连续，则\\\displaystyle\frac{d}{dx}\int^{\varphi(x)}_{\psi(x)}f(t)dt=f[\varphi(x)]\varphi'(x)-f[\psi(x)]\psi'(x)$$

<span style='color:blue;font-size:20px'>定理2：</span>$若函数f(x)在[a,b]上连续，则\phi(x)=\int^x_af(t)dt是f(x)在[a,b]上的一个原函数$

（这里的写法没有问题）

#### 二、牛顿——莱布尼兹公式

<span style='color:blue;font-size:20px'>定理3（微积分基本定理）：</span>$$如果函数F(x)是连续函数f(x)在区间[a,b]上的一个原函数，那么\\\displaystyle\int^b_af(x)dx=F(b)-F(a)$$

证：$$\phi(x)=\int^x_af(t)dt就是f(x)的一个原函数，\phi'(x)=f(x)\\\int^b_af(x)dx=\phi(b)-\phi(a)\\又因为\phi(x)-F(x)=C,\phi(x)=F(x)+C\\所以\int^b_af(x)dx=F(b)-F(a)+C-C=F(b)-F(a)$$

 

#### 改进积分中值定理

设$$函数f(x)在[a,b]上连续，则在(a,b)上至少存在一个点\xi，使\\\int^b_af(x)dx=f(\xi)(b-a)$$

证：$$因为f(x)在[a,b]上连续，所以存在原函数，设为F(x)，所以有\\\displaystyle\int^b_af(x)dx=F(b)-F(a)\\显然F(x)在[a,b]满足微分中值定理的条件，所以在(a,b)内至少有一点\xi，使\\F(b)-F(b)=F'(\xi)(b-a)\\故\displaystyle\int^b_af(x)dx=f(\xi)(b-a)$$



<center><span style='color:blue;font-size:15px'>2021/5/9</span></center>

### 第三节 定积分的换元法和分部积分法

#### 一、定积分的换元法

定积分的换元法没有第一类和第二类之分，而且最后积分变量不需要变回x，只需要关注上下限和函数关系

<span style='color:blue;font-size:20px'>定理：</span>$$若f(x)在区间[a,b]上连续，函数x=\varphi(t)满足条件\\(1)\varphi(t)单调，且\varphi(\alpha)=a,\varphi(\beta)=b\\(2)x=\varphi(t)连续可导，则\\\displaystyle\int^b_af(x)dx=\int^\beta_\alpha f(\varphi(t))\varphi'(t)dt$$

**note1：**当积分区间对称时，要想到

- $\int^a_{-a}f(x)dx=\int^a_0[f(x)+f(-x)]dx$
- 若f(x)为偶函数，则$\int^a_{-a}f(x)dx=2\int^a_0f(x)dx$
- 若f(x)为奇函数，则$\int^a_{-a}f(x)dx=0$

<span style='color:sienna;font-size:20px'>性质1：</span>$$若f(x)在[0,1]上连续\\(1)\displaystyle\int^{\frac{\pi}{2}}_0f(\sin(x))dx=\int^{\frac{\pi}{2}}_0f(\cos(x))dx\\(1)\displaystyle\int^\pi_0xf(\sin(x))dx=\frac{\pi}{2}\int^\pi_0f(\sin(x))dx$$

**note2:**$$(1)\int^0_{-a}f(x)dx\stackrel{x=-t}=\int^a_0f(-x)dx\\(2)\int^b_af(x)dx\stackrel{x+t=a+b}=\int^a_bf(x)dx\\(3)\int^{a+b}_af(x)dx\stackrel{x-a=t}=\int^b_0f(x)dx$$

<span style='color:sienna;font-size:20px'>性质2：</span>$$若f(x)是周期为T的连续函数，则\\(1)\displaystyle\int^{a+T}_af(x)dx=\int^T_0f(x)dx\\(2)\displaystyle\int^{nT}_0f(x)dx=n\int^T_0f(x)dx$$

#### 二、定积分的分部积分法

$\displaystyle\int^b_audv=uv|^b_a-\int^b_avdu$

**重要：**$$\displaystyle I_n=\int^{\frac{\pi}{2}}_0\sin^n(x)dx\left(=\int^{\frac{\pi}{2}}_0\cos^n(x)dx\right)\\\displaystyle I_n=\frac{n-1}{n}I_{n-2}\\\displaystyle I_n=\frac{n-1}{n}*\frac{n-3}{n-2}*...*\frac{3}{4}*\frac{1}{2}*\frac{\pi}{2}\quad(n为正偶数)\\\displaystyle I_n=\frac{n-1}{n}*\frac{n-3}{n-2}*...*\frac{4}{5}*\frac{2}{3}\quad(n为大于1的正奇数) $$

![](/images/tongji-calculus-5-7/image-20210509114132972.png)



### 第四节 反常积分（广义积分）

反常积分的本质是"变限积分的极限值"，并非积分本身。

**正常积分（可积）的标准：**

（1）区间有限（2）f(x)在有限区间上连续或有限个第一类间断点

**反常积分：**

#### 一、积分区间无限的反常积分

正常积分：$\int^b_af(x)dx=F(b)-F(a)$

反常积分：$$\displaystyle\int^{+\infty}_af(x)dx=\lim_{b\to+\infty}\int^b_af(x)dx=\lim_{b\to+\infty}[F(b)-F(a)]$$

<span style='color:red;font-size:20px'>定义1：</span>

**case1：**$$设函数f(x)在区间[a,+\infty)上连续\\如果极限\displaystyle\lim_{b\to+\infty}\int^b_af(x)dx存在，称该反常积分收敛\\如果极限不存在，则称其发散$$

**case2：**$设函数f(x)在区间(-\infty,b]上连续$

**case3：**$设函数f(x)在区间(-\infty,+\infty)上连续$

#### 二、无界函数的反常积分

正常积分：$\int^b_af(x)dx=F(b)-F(a)$

反常积分：$$\displaystyle\int^b_af(x)dx=\lim_{t\to a+}\int^b_tf(x)dx=\lim_{t\to a+}[F(b)-F(t)]$$

<span style='color:red;font-size:20px'>定义2：</span>

**case1：**$$设函数f(x)在区间[a,b)上连续,点a为f(x)的瑕点\\如果极限\displaystyle\lim_{t\to a+}\int^b_tf(x)dx存在，称该反常积分收敛\\如果极限不存在，则称其发散$$

**case2：**$设函数f(x)在区间(a,b]上连续$

**case3：**$设函数f(x)在区间[a,c)\cup(c,b]上连续$





### 第五节 反常函数的审敛法 $\quad\Gamma$函数

#### 一、无穷区间反常函数的审敛法

**比较审敛原理：**$$设函数f(x),g(x)在区间[a,+\infty)上连续，\\如果0\leq f(x)\leq g(x)(a\leq x<+\infty)，并且\int^{+\infty}_ag(x)dx收敛，那么\int^{+\infty}_af(x)dx也收敛\\如果0\leq g(x)\leq f(x)(a\leq x<+\infty)，并且\int^{+\infty}_ag(x)dx发散，那么\int^{+\infty}_af(x)dx也发散$$

**p积分：**$$\displaystyle\int^{+\infty}_a\frac{dx}{x^p}(a>0)\\当p>1时收敛\\当p\leq1时发散$$

**比较判别法的极限形式：**$$设f(x),g(x)在[a,+\infty)非负连续，\displaystyle\lim_{x\to+\infty}\frac{f(x)}{g(x)}=\lambda，则\\(1)当\lambda=c>0时，\int^{+\infty}_af(x)dx与\int^{+\infty}_ag(x)dx同敛散\\(2)当\lambda=0时，若\int^{+\infty}_ag(x)dx收敛，\int^{+\infty}_af(x)dx收敛\\(3)当\lambda=+\infty时，若\int^{+\infty}_ag(x)dx发散，\int^{+\infty}_af(x)dx发散$$

#### 二、无界函数积分的审敛准则

**比较审敛原理：**$$设函数f(x),g(x)在区间(a,b]上连续，\\如果0\leq f(x)\leq g(x)(a< x\leq b)，并且\int^b_ag(x)dx收敛，那么\int^b_af(x)dx也收敛\\如果0\leq g(x)\leq f(x)(a< x\leq b)，并且\int^b_ag(x)dx发散，那么\int^b_af(x)dx也发散$$

**p积分：**$$a是间断点时，\displaystyle\int^b_a\frac{dx}{(x-a)^p}\\当p<1时收敛\\当p\geq1时发散\\b是间断点时，\displaystyle\int^b_a\frac{dx}{(b-a)^p}\\当p<1时收敛\\当p\geq1时发散$$

**比较判别法的极限形式：**$$设f(x),g(x)在(a,b]非负连续，\displaystyle\lim_{x\to a+}\frac{f(x)}{g(x)}=\lambda，则\\(1)当\lambda=c>0时，\int^{b}_af(x)dx与\int^{b}_ag(x)dx同敛散\\(2)当\lambda=0时，若\int^{b}_ag(x)dx收敛，\int^{b}_af(x)dx收敛\\(3)当\lambda=+\infty时，若\int^{b}_ag(x)dx发散，\int^b_af(x)dx发散$$

#### 三、$\Gamma$函数

考研高数不考，但是在概率论中涉及

<span style='color:red;font-size:20px'>定义：</span>$\displaystyle\Gamma(s)=\int^{+\infty}_0x^{s-1}e^{-x}dx\qquad (s>0)$

- $\Gamma(s+1)=s\Gamma(s)$
- $\Gamma(s+1)=s!$
- $\Gamma(\frac{1}{2})=\sqrt \pi$

#### 小结：

![](/images/tongji-calculus-5-7/image-20210510140859852.png)

**note：**$$\displaystyle由右上角可知，在x\to+\infty时，\frac{1}{\ln x}>\frac{1}{x^p}>\frac{1}{e^x}，p可以取任意值\\\displaystyle当p>1时，\int^{+\infty}_1\frac{1}{x^p}收敛，所以\int^{+\infty}_1\frac{1}{e^x}\left(或\frac{x^a\ln ^nx}{e^{bx}}\right)是收敛的\\\displaystyle当p\leq1时，\int^{+\infty}_1\frac{1}{x^p}发散，所以\int^{+\infty}_2\frac{1}{\ln x}\left(或\frac{1}{\ln ^nx}\right)是发散的\\\displaystyle\int^{+\infty}_1\frac{\ln ^nx}{x^\alpha}(\alpha >1)也是收敛的$$

<iframe src="https://www.desmos.com/calculator/yci00xdlr3" width="100%" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

![](/images/tongji-calculus-5-7/image-20210510151946627.png)

**note：**$$当x\to0时，\displaystyle-\ln x=\ln\frac{1}{x}<\frac{1}{x^p}=(\frac{1}{x})^p<e^{\frac{1}{x}}，p可以取任意值\\\displaystyle当p<1时，\int^b_0\frac{1}{x^p}收敛，所以\int^b_0\ln x收敛\\\displaystyle当p\geq1时，\int^b_0\frac{1}{x^p}发散，所以\int^b_0e^{\frac{1}{x}}发散$$



<center><span style='color:blue;font-size:15px'>2021/5/13<span></center>

## 第六章 定积分的应用

### 第一节 定积分的元素法

**能用定积分解决的问题特征：**

（1）非均匀连续分布在[a,b]上的量。

（2）所求量对区间有可加性。

**元素法：**

（1）根据问题的实际情况，选取一个变量例如x为积分变量，并确定它的变化区间[a,b]

（2）设想把区间[a,b]分成n个小区间，取其中任一小区间并记作[x,x+dx]，求出对应于这个小区间的部分量$\triangle U$的近似值，如果$\triangle U$能近似地表示为[a,b]上的一个连续函数在x处的值f(x)与dx的乘积，就把f(x)dx称为量U的元素且记作dU，即

$$dU=f(x)dx$$

（3）以所求量U的元素f(x)dx为被积表达式，在区间[a,b]上作定积分，得

$$U=\displaystyle\int^b_af(x)dx$$

这就是所求量U的积分表达式

### 第二节 定积分在几何上的应用

#### 一、平面图形的面积

$椭圆\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\qquad面积S=\pi ab$

1.直角坐标（对x或y积分）

2.极坐标（$ds=\frac{1}{2}r^2d\theta$）（$弧长L=\theta*R，扇形S=\frac{1}{2}LR=\frac{1}{2}R^2\theta$）

#### 二、体积

1.旋转体的体积

 $V_x=\pi\int^b_af^2(x)dx\qquad V_y=2\pi\int^b_axf(x)dx$

2.截口面积已知的几何体的体积

$V=\int^b_aS(x)dx$

#### 三、平面曲线的弧长

$\begin{aligned}ds&=\sqrt{(dx)^2+(dy)^2}\\&=\sqrt{1+(\frac{dy}{dx})^2}dx\\&=\sqrt{1+f'^2(x)}dx\end{aligned}$

所以$$\begin{aligned}s&=\int^b_a\sqrt{1+y'^2}dx\\&=\int^\beta_\alpha\sqrt{x'^2+y'^2}dt(参数方程）\\&=\int^\beta_\alpha\sqrt{\rho^2+\rho'^2}d\theta(极坐标，\rho=\rho(\theta)）\end{aligned}$$

### 第三节 定积分在物理学上的应用

#### 一、功(变力沿直线做功)

$W=Fx$

$dW=F(x)dx$

#### 二、力

水的压强$p=\rho gh$

$dF=\rho gxldx$

引力$F=G\frac{Mm}{r^2}$





<center><span style='color:blue;font-size:15px'>2021/5/14<span></center>

## 第七章 微分方程

微分方程+线性代数=泛函分析。连续函数可用幂函数表示出来，也就可用线性代数表示出来，微分和积分不过是一个施加在这个无穷维空间的一个线性变换。

在许多问题中，我们往往不能直接找出所需要的函数关系，而有时可以得到含有要找的函数及其导数的关系式，这样的关系式就是所谓的**微分方程**，简称方程，微分方程建立以后，对它进行研究，找出未知函数，就是**解微分方程**。

不同类型的微分方程要用不同的方法来做

### 第一节 微分方程的基本概念

<span style='color:red;font-size:20px'>定义1：（微分方程）</span>凡表示**未知函数**、**未知函数的导数**与**自变量**之间的关系的方程，叫做**微分方程**，未知函数是一元函数的微分方程称作**常微分方程**

<span style='color:red;font-size:20px'>定义2：（微分方程的阶）</span>微分方程中所出现的最高阶导数的阶数，叫做**微分方程的阶**（**注意不要把次数和阶数混淆**）
一般地，n阶微分方程的形式是$F(x,y,y',...,y^{(n)})=0$，其中除了$y^{(n)}$外，其他变量可不出现

<span style='color:red;font-size:20px'>定义3：（微分方程的解）</span>若函数$y=f(x)$满足$F(x,y,y',...,y^{(n)})=0$，这个函数就叫做**微分方程的解**
若该方程的解中含n个**相互独立**的任意常数，称该解为**通解**，不含任意常数的解称为**特解**



### 第二节 可分离变量的微分方程（一种特定的一阶微分方程）

如果一个一阶微分方程能写出$g(y)dy=f(x)dx$（或$\frac{dy}{dx}=f(x)g(x)$）的形式，则称其为**可分离变量的微分方程**

**解法：**两端求积分即可$\displaystyle\int g(y)dy=\int f(x)dx+C$



### 第三节 （一阶）齐次微分方程(x和y齐次)

> 齐次：$f(ax,ay,...)=a^nf(x,y,...)$

若一阶微分方程可化成$\displaystyle\frac{dy}{dx}=\varphi(\frac{y}{x})$的形式，那么称其为齐次方程$\displaystyle\left(f(ax,ay)=\varphi(\frac{ay}{ax})=a^0\varphi(\frac{y}{x})\right)$

**解法：**$$引入u=\frac{y}{x},可以将其化为可分离变量的方程\\\displaystyle  y=ux,\frac{dy}{dx}=\frac{du}{dx}x+u=\varphi(u),\\可得\displaystyle\frac{du}{\varphi(u)-u}=\frac{dx}{x}\\\displaystyle两端积分可得\int\frac{du}{\varphi(u)-u}=\int\frac{dx}{x}+C\\求出积分后，再将u=\frac{y}{x}代回$$



### 第四节 一阶线性微分方程

线性微分方程：（x，y，y'，y''...都是一次幂）

形如$\displaystyle \frac{dy}{dx}+P(x)y=Q(x)$的方程叫做**一阶线性微分方程**，

如果Q(x)=0，那么该方程是**齐次**的（y和y'齐次），如果Q(x)$\not=$0，那么该方程是**非齐次**的

>  :$$Q(x)=0时:\displaystyle f(ay,ay')=a\frac{dy}{dx}+P(x)ay=af(y)\\Q(x)\not=0时:\displaystyle f(ay,ay')=a\frac{dy}{dx}+P(x)ay-Q(x)=a(\frac{dy}{dx}+P(x)y-\frac{Q(x)}{a})\not=af(y)$$
>
> (自己想的，不一定对)

#### 一、一阶齐次线性微分方程

$\displaystyle \frac{dy}{dx}+P(x)y=0的通解为\\\displaystyle y=Ce^{-\int p(x)dx}$

#### 二、一阶非齐次微分方程

$\displaystyle \frac{dy}{dx}+P(x)y=Q(x)的通解为\\\displaystyle y=\left(\int Q(x)e^{\int p(x)dx}dx+C\right)e^{-\int p(x)dx}$

**(非齐次通解=齐次通解+一个非齐次特解)**

**note：**有时用适当的变量代换可以将方程化为可分离变量的方程

#### 三、伯努利方程

$\displaystyle \frac{dy}{dx}+P(x)y=Q(x)y^n(n\not=0,1)$叫做伯努利方程

伯努利方程不是线性的，但是通过变量的代换，可以化为线性方程

两边同除$y^n,得\displaystyle y^{-n}\frac{dy}{dx}+P(x)y^{1-n}=Q(x)$

即$\displaystyle \frac{d(y^{1-n})}{(1-n)dx}+P(x)y^{1-n}=Q(x)$

令$z=y^{1-n}，则\displaystyle\frac{dz}{dx}=(1-n)y^{-n}\frac{dy}{dx}$

有$\displaystyle \frac{dz}{dx}+(1-n)P(x)z=(1-n)Q(x)$（线性方程）

求出方程的通解后，用$z=y^{1-n}代换$

**例：**$$\displaystyle\frac{dy}{dx}=\frac{1}{xy+x^2y^3}\\x与y对调\quad\displaystyle\frac{dx}{dy}=xy+x^2y^3(伯努利方程)\\\displaystyle\frac{1}{x^2}\displaystyle\frac{dy}{dx}=\frac{y}{x}+y^3\\\displaystyle令z=\frac{1}{x},得\frac{dz}{dy}=-\frac{1}{x^2}\frac{dx}{dy}\\\displaystyle-\frac{dz}{dy}-yz=y^3\Rightarrow \frac{dz}{dy}+yz=-y^3（线性微分方程）\\... $$



### 第五节 可降阶的高阶微分方程

二阶及二阶以上的微分方程就是高阶微分方程，下面介绍三种容易降阶的高阶微分方程

#### 一、$y^{(n)}=f(x)$型的微分方程

对于$$y^{(n)}=f(x)\\y^{(n-1)}=\int f(x)dx+C_1\\y^{(n-2)}=\int[f(x)dx+C_1]dx+C_2$$

连续积分n次即可得到带n个任意常数的通解

#### 二、$f(x,y',y'')=0\qquad(缺y)$

设$\displaystyle y'=p，那么y''=\frac{dp}{dx}$

#### 三、$f(y,y',y'')=0\qquad(缺x)$

令$\displaystyle y'=p,y''=\frac{dp}{dx}=\frac{dp}{dy}\frac{dy}{dx}=\frac{dp}{dy}p $

<center><span style='color:blue;font-size:15px'>2021/5/15<span></center>

### 第六节 高阶线性微分方程

#### 一、基本概念

| n阶齐次线性微分方程   | $$y^{(n)}+a_1(x)y^{(n-1)}+...+a_{n-1}(x)y'+a_n(x)y=0$$    |
| --------------------- | --------------------------------------------------------- |
| n阶非齐次线性微分方程 | $$y^{(n)}+a_1(x)y^{(n-1)}+...+a_{n-1}(x)y'+a_n(x)y=f(x)$$ |

设f(x)，g(x)为两个函数
若f(x)，g(x)不成比例，称他们**线性无关**
若f(x)，g(x)成比例，称他们**线性相关**

#### 二、结构

对于$$y''+a(x)y'+b(x)y=0\qquad(1) 二阶齐次线性微分方程\\y''+a(x)y'+b(x)y=c(x)\qquad(2) 二阶非齐次线性微分方程$$

<span style='color:blue;font-size:20px'>定理1：</span>$若函数y_1(x)与y_2(x)是(1)的两个解，那么y=C_1y_1(x)+C_2y_2(x)也是(1)的解$

<span style='color:blue;font-size:20px'>定理2：</span>$若函数y_1(x)与y_2(x)分别为(1)(2)的解，那么y=y_1(x)+y_2(x)是(2)的解$

<span style='color:blue;font-size:20px'>定理3：</span>$若函数y_1(x)与y_2(x)是(2)的两个解，那么y=y_1(x)-y_2(x)是(1)的解$

<span style='color:blue;font-size:20px'>定理4：</span>

- $若函数y_1(x)与y_2(x)是(1)的两个线性无关的特解，那么y=C_1y_1(x)+C_2y_2(x)是(1)的通解$
- $若函数y_1(x)为(1)的通解，y_2(x)为(2)的一个特解，那么y=y_1(x)+y_2(x)是(2)的通解$

<span style='color:blue;font-size:20px'>定理5：</span>

对于$$y''+a(x)y'+b(x)y=f_1(x)+f_2(x)\\若函数y_1(x)与y_2(x)分别是方程\\y''+a(x)y'+b(x)y=f_1(x)\\y''+a(x)y'+b(x)y=f_2(x)\\的一个特解，则y=y_1(x)+y_2(x)就是原方程的特解$$



### 第七节 常系数齐次线性微分方程

#### 一、二阶常系数齐次线性微分方程

$y''+py'+qy=0\qquad(*)$

其中p，q为**常数**，称(*)为二阶常系数齐次线性微分方程

设$y=e^{\lambda x}为(*)的解，代入方程得$

$\lambda^2+p\lambda+q=0$

称为(*)的**特征方程**

|          | $p^2-4q$      | 二阶常系数线性微分方程的通解                                 |
| -------- | ------------- | ------------------------------------------------------------ |
| 不等实根 | $\triangle>0$ | $y=C_1e^{\lambda_1x}+C_2e^{\lambda_2x}$                      |
| 相等实根 | $\triangle=0$ | $y=(C_1+xC_2)e^{\lambda_1x}$                                 |
| 共轭复根 | $\triangle<0$ | $$y=e^{\alpha x}(C_1\cos(\beta x)+C_2\sin(\beta x))\qquad(\lambda_{1,2}=\alpha\pm i\beta)$$ |

> 欧拉公式：$e^{\theta i}=\cos\theta+i\sin\theta$

#### 二、高阶常系数齐次线性微分方程

![](/images/tongji-calculus-5-7/image-20210515171500130.png)

> 解三次方程野法：先把-2,-1,0,1,2代入，一般有个解就是这几个，然后通过此解把原方程分解成二次方程求解 

**例一** $$求y'''-y'=0的通解\\解:\lambda^3-\lambda=0 \Rightarrow\lambda_1=0 ,\lambda_2=-1,\lambda_3=1\\通解:y=C_1+C_2e^{-x}+C_3e^x$$

**例二** $$求y'''-3y''+3y'-y=0的通解\\解:\lambda^3-3\lambda^2+3\lambda-1=0 \Rightarrow\lambda_1=\lambda_2=\lambda_3=1\\通解:y=(C_1+C_2x+C_3x^2)e^x$$

**例二** $$求y^{(4)}-2y^{(3)}+5y''=0的通解\\解:\lambda^4-2\lambda^3+5\lambda^2=0\Rightarrow\lambda^2(\lambda^2-2\lambda+5)=0\\\Rightarrow\lambda_1=\lambda_2=0,\lambda_{3,4}=1\pm2i\\通解:y=e^{0x}(C_1+C_2x)+e^x(C_3\cos(2x)+C_4\sin(2x))$$



### 第八节 常系数非齐次线性微分方程

非齐次的通解=齐次的通解+一个非齐次的特解

我们研究两种常见的非齐次项

#### 一、$f(x)=e^{kx}P_n(x)$

 令$y_0(x)=x^aQ_n(x)e^{kx}$

**f(x)的特征方程的根中有几个和k相等，a就是几，没有相等的话a就是0，多项式$Q_n(x)$的次数n与$P_n(x)$的n相同**

**将$y_0(x)$代入方程中，解得多项式的系数，即可找到非齐次特解，加上齐次通解可得到非齐次通解**

**例一：**$$求微分方程y''- 2y'- 3y=3x+1的通解.\\解:\lambda^2-2\lambda-3=0\Rightarrow\lambda_1=3,\lambda_2=-1\\令y_0(x)=x^0(ax+b)e^{0x}=ax+b\\代入原方程，得a=-1,b=\frac{1}{3}\\所以原方程的通解为y=C_1e^{-x}+C_2e^{3x}-x+\frac{1}{3}$$

#### 二、$f(x)=e^{\alpha x}[P_l(x)\cos\beta x+Q_n(x)\sin\beta x]$

 令$$y_0(x)=x^ae^{\alpha x}[R_m^{(1)}(x)\cos\beta x+R_m^{(2)}(x)\sin\beta x],m=\max(l,n)$$

**f(x)的特征方程的根中有几个和$\alpha+i\beta$相等，a就是几，没有相等的话a就是0，多项式$R_m(x)$的次数m与l和n中的最大值相同**

**将$y_0(x)$代入方程中，解得多项式的系数，即可找到非齐次特解，加上齐次通解可得到非齐次通**

**例二：**$$求微分方程y''- 3y'+2y=x\cos x的通解.\\解:\lambda^2-3\lambda+2=0\Rightarrow\lambda_1=1,\lambda_2=2\\令y_0(x)=x^0e^{0x}[(ax+b)\cos x+(cx+d)\sin x]\\代入原方程,......$$



### 第九节 欧拉方程

形如$$x^ny^{(n)}+p_1x^{n-1}y^{(n-1)}+...+p_{n-1}xy'+p_ny=f(x)的方程（其中p_1,p_2,...为常数）$$叫做**欧拉方程**

做变换$x=e^t或t=\ln x$，

得$$\frac{dy}{dx}=\frac{dy}{dt}\frac{dt}{dx}=\frac{dy}{dt}\frac{1}{x}\\\frac{d^2y}{dt^2}=\frac{1}{x^2}(\frac{d^2y}{dt^2}-\frac{dy}{dt})\\\frac{d^3y}{dt^3}=\frac{1}{x^3}(\frac{d^3y}{dt^3}-3\frac{d^2y}{dt^2}+2\frac{dy}{dt})$$

用算符D表示$\frac{d}{dt}$，

则$$xy'=x\frac{1}{x}\frac{d}{dt}y=Dy\\x^2y''=\frac{d^2y}{dt^2}-\frac{dy}{dt}=(\frac{d^2}{dt^2}-\frac{d}{dt})y=(D^2-D)y=D(D-1)y\\x^3y'''=...=D(D-1)(D-2)y$$

一般地，有$x^ky^{(k)}=D(D-1)...(D-k-1)y$

将其代入欧拉方程，便得到一个**以t为自变量的常系数线性微分方程**，解完后把x代回即得到原方程的解

**例一：**$$求欧拉方程x^3y'''+x^2y''-4xy'=3x^2的解\\解：令x=e^t,t=\ln x，得\\D(D-1)(D-2)y+D(D-1)y-4Dy=3e^{2t}\\D^3y-2D^2y-3Dy=3e^{2t}\\特征方程:\lambda^3-2\lambda^2-3\lambda=0\Rightarrow\lambda_1=0,\lambda_2=-1,\lambda_3=3\\所以齐次的通解为y=C_1+C_2e^{-t}+C_3e^{3t}=C_1+C_2\frac{1}{x}+C_3x^3\\设非齐次特解y_0为ae^{2t},代入后解得a=-\frac{1}{2}\\所以齐次特解为y_0=-\frac{1}{2}e^{2t}=-\frac{1}{2}x^2\\所以原方程的通解为y=C_1+C_2\frac{1}{x}+C_3x^3-\frac{1}{2}x^2 $$

