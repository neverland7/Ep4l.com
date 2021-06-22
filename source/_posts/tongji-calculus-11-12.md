---
title: 同济高数第七版（11-12章）
date: 2021-05-27 21:08:37
img: images/tongji-calculus-11-12/calculus_2.png
mathjax: true
summary: 同济高数
categories: 学习笔记
tags:
 - 数学
 - 微积分
 - 考研
typora-root-url: ..
---

<center><span style='color:blue;font-size:15px'>2021/5/27</span></center>

## 第十一章 曲线积分与曲面积分

上一章已经把积分概念从积分范围为数轴上一个区间的情形推广到积分范围为平面或空间内的一个闭区域的情形，本章将把积分概念推广到积分范围为一段曲线弧或一片曲面的情形。

### 第一节 对弧长的曲线积分（第一类曲线积分）

#### 一、对弧长的曲线积分的概念与性质

背景：曲线形构件的质量

<span style='color:red;font-size:20px'>定义</span> $$设L为xOy面内的一条光滑曲线弧,函数f(x,y)在L上有界.\\在L上任意插入一点列M_1,M_2,...M_{n-1}把L分成n个小段.设第i个小段的长度为\triangle s_i,\\又(\xi_i,\eta_i)为第i个小段上任意取定的一点,作乘积f(\xi_i,\eta_i)\triangle s_i，(i=1,2,...,n),\\并作和\sum^n_{i=1}f(\xi_i,\eta_i)\triangle s_i,如果当各小弧段的长度的最大值λ→0时,这和的极限总存在,\\且与曲线弧L的分法及点(\xi_i,\eta_i)的取法无关,\\那么称此极限为函数f(x,y)在曲线弧L上对弧长的曲线积分或第一类曲线积分,记作\int _Lf(x,y)ds,即\\\displaystyle\int_Lf(x,y)ds=\lim_{\lambda\to0}\sum^n_{i=1}f(\xi_i,\eta_i)\triangle s_i$$

**性质1-性质5：**和二重积分类似

#### 二、对弧长的曲线积分的计算法

**1.直角坐标形式**

$L:y=\varphi(x)\qquad(a\leq x\leq b)$

$\displaystyle ds=\sqrt{(dx)^2+(dy)^2}=\sqrt{1+(\frac{dy}{dx})^2}dx=\sqrt{1+f'^2(x)}dx$

$\displaystyle\int_Lf(x,y)ds=\int^b_af(x,\varphi(x))\sqrt{1+f'^2(x)}dx$

同理也可化作对y的定积分

**用极坐标的时候先转换为参数方程形式**

**2.参数方程形式**

$L:\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}\qquad(\alpha\leq x\leq \beta)$

$\displaystyle ds=\sqrt{(dx)^2+(dy)^2}=\sqrt{(\frac{dx}{dt})^2+(\frac{dy}{dt})^2}dt=\sqrt{\varphi'^2(t)+\psi'^2(t)}dt$

:$$\displaystyle\int_Lf(x,y)ds=\int^\beta_\alpha f(\varphi(t),\psi(t))\sqrt{\varphi'^2(t)+\psi'^2(t)}dt$$



<center><span style='color:blue;font-size:15px'>2021/5/31</span></center>

### 第二节 对坐标的曲线积分（第二类曲线积分）

#### 一、对坐标的曲线积分的概念与性质

**引例：**变力沿曲线做功

>1.$\forall\vec{ds}\in L,\vec{ds}=\{dx,dy,dz\},\vec F=\{P(x,y,z),Q,R\}$
>
>2.$dW=\vec F·\vec{ds}=Pdx+Qdy+Rdz$
>
>3.$W=\int_LdW=\int_LPdx+Qdy+Rdz$

<span style='color:red;font-size:20px'>定义:</span> 设L是xoy面内从点A到点B的一条**有向**光滑曲线弧

即$$\displaystyle\int_LP(x,y)dx+Q(x,y)dy=\lim_{\lambda\to 0}\sum^n_{i=1}[P(\xi_i,\eta_i)\triangle x_i+Q(\xi_i.\eta_i)\triangle y_i]=\int_L\vec F·\vec{ds}$$

![](/images/tongji-calculus-11-12/image-20210531162122654.png)

#### 二、对坐标的曲线积分的计算法

**1.直角坐标形式**

$L:y=\varphi(x)\qquad(起点:x=a,终点:x=b)$

$\displaystyle\int_LP(x,y)dx+Q(x,y)dy$

$\displaystyle =\int_a^bP(x,\varphi(x))dx+Q(x,\varphi(x))\varphi'(x)dx$

同理也可化作对y的定积分

**2.参数方程形式**(三维时方法相同)

$L:\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}\qquad(起点:t=\alpha,终点:t=\beta)$

$\displaystyle\int_LP(x,y)dx+Q(x,y)dy$

$\displaystyle =\int_\alpha^\beta P(\varphi(t),\psi(t))\varphi'(t)dt+Q(\varphi(t),\psi(t))\psi'(t)dt$

####  三、两类曲线积分的关系

$\displaystyle\int_LP(x,y)dx+Q(x,y)dy=\int_L\vec F·\vec{ds}$

$\displaystyle\int_LPdx+Qdy=\int_L(P\cos\alpha+Q\cos\beta)ds$



### 第三节 格林公式及其应用

#### 一、格林公式（二重积分和线积分的转换）

<span style='color:blue;font-size:20px'>定理1：</span>设闭区域D由分段光滑的曲线L围成，若函数P(x,y)及Q(x,y)在D上具有一阶连续偏导数，则

$\displaystyle\iint\limits_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dxdy=\oint_LPdx+Qdy$，其中L是D的取正向的边界曲线

> 单连通区域逆时针方向为正方向
>
> 多连通区域的正方向是外边界为逆时针，内边界为顺时针
>
> （区域在始终在边界方向的左侧）

使用格林的三种情况：直接用，补线（曲线不封闭），挖洞（当有点不可偏导时）

> L围成的闭区域的面积A=$\displaystyle\frac{1}{2}\oint_Lxdy-ydx$

<center><span style='color:blue;font-size:15px'>2021/6/1</span></center>

#### 二、平面上曲线积分与路径无关的条件

<span style='color:blue;font-size:20px'>定理2：</span> 设区域$\sigma$为一个单连通区域，若函数P(x,y),Q(x,y)在$\sigma$内有一阶连续偏导数，则曲线积分$\int_LPdx+Qdy$在$\sigma$内与路径无关的充要条件是：$\displaystyle \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$在$\sigma$内恒成立

#### 三、二元函数的全微分求积

<span style='color:blue;font-size:20px'>定理3：</span> 设区域$\sigma$为一个单连通区域，若函数P(x,y),Q(x,y)在$\sigma$内有一阶连续偏导数，则曲线积分$\int_LPdx+Qdy$在$\sigma$内为某一函数u(x,y)的充要条件是：$\displaystyle \frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$在$\sigma$内恒成立，且

$\displaystyle u(x,y)=\int^{(x,y)}_{(x_0,y_0)}P(x,y)dx+Q(x,y)dy$

**求原函数：**

**解法一：**用线积分求

> 因为以上公式的曲线积分与路径无关，为计算简便起见，可以选择平行于坐标轴的直线段连成的折线作为积分路线（方便的话也可以用圆什么的），当然要假定这些折线完全位于$\sigma$内

**解法二：**用偏积分求（$\frac{\partial u}{\partial x}=P$）

**解法三：**用凑全微分法求

> 首选凑微分（方便），不好凑的话优先选偏积分法

**若线积分与路径无关：**

**解法一：**改换路径

**解法二：**求出原函数

<span style='color:blue;font-size:20px'>推论：</span> 设区域$\sigma$为一个单连通区域，若函数P(x,y),Q(x,y)在$\sigma$内有一阶连续偏导数，则曲线积分$\int_LPdx+Qdy$在$\sigma$内与路径无关的充要条件是在$\sigma$内存在函数u(x,y)，使du=Pdx+Qdy

#### 内容小结：

![](/images/tongji-calculus-11-12/image-20210601161919304.png)





### 第四节 对面积的曲面积分（第一类曲面积分）

#### 一、对面积的曲面积分的概念与性质

背景：弯曲薄片的质量

<span style='color:red;font-size:20px'>定义</span> $$设曲面\Sigma是光滑的,函数f(x,y,z)在\Sigma上有界.\\把\Sigma任意分成n小块\triangle S_i(\triangle S_i,同时也代表第i小块的面积)\\设(\xi_i,\eta_i,\zeta_i)是\triangle S_i上任意取定的一点,作乘积f(\xi_i,\eta_i,\zeta_i)\triangle S_i，(i=1,2,...,n),\\并作和\sum^n_{i=1}f(\xi_i,\eta_i,\zeta_i)\triangle s_i,如果当各小块曲面的直径的最大值λ→0时,这和的极限总存在,\\且与曲面\Sigma的分法及点(\xi_i,\eta_i,\zeta_i)的取法无关,\\那么称此极限为函数f(x,y,z)在曲面\Sigma上对面积的曲面积分或第一类曲面积分,记作\iint \limits_\Sigma f(x,y,z)dS,即\\\displaystyle\iint \limits_\Sigma f(x,y,z)dS=\lim_{\lambda\to0}\sum^n_{i=1}f(\xi_i,\eta_i,\zeta_i)\triangle S_i$$

性质与曲线积分的性质相类似

#### 二、对面积的区面积法的计算法

将对面积的曲面积分化为相应的二重积分

对$$\displaystyle\iint \limits_\Sigma f(x,y,z)dS\qquad曲面\Sigma:z=\varphi(x,y),(x,y)\in D_{xy}$$

$ds=\sqrt{1+{z_x}^2+{z_y}^2}d\sigma$

$\left(\displaystyle \vec n=(-z_x,-z_y,1),\cos \gamma=\frac{1}{\sqrt{1+z_x+z_y}},ds·\cos\gamma=d\sigma,ds=\sqrt{1+{z_x}^2+{z_y}^2}d\sigma\right)$

所以$$\displaystyle\iint \limits_\Sigma f(x,y,z)dS=\iint \limits_{D_{xy}}f(x,y,\varphi(x,y))\sqrt{1+{z_x}^2+{z_y}^2}d\sigma$$

如果积分曲面由方程x=x(y,z)或y=y(z,x)给出，也可类似地把对面积的曲面积分化为相应的二重积分



### 第五节 对坐标的曲面积分（第二类曲面积分）

#### 一、对坐标的曲面积分的概念与性质

背景：在一个流速场内一定时间内流向某曲面一侧的流量

![](/images/tongji-calculus-11-12/image-20210601223753010.png)

<span style='color:red;font-size:20px'>定义:</span> 设$\Sigma$是光滑的**有向**曲面，

有$$\displaystyle\iint\limits_\Sigma R(x,y,z)dxdy=\lim_{\lambda\to 0}\sum^n_{i=1}R(\xi_i,\eta_i,\zeta_i)(\triangle S_i)_{xy}\\\displaystyle\iint\limits_\Sigma P(x,y,z)dydz=\lim_{\lambda\to 0}\sum^n_{i=1}P(\xi_i,\eta_i,\zeta_i)(\triangle S_i)_{yz}\\\displaystyle\iint\limits_\Sigma Q(x,y,z)dzdx=\lim_{\lambda\to 0}\sum^n_{i=1}Q(\xi_i,\eta_i,\zeta_i)(\triangle S_i)_{zx}\\\displaystyle 常见的形式是\iint\limits_\Sigma Pdydz+Qdzdx+Rdxdy$$

> 关于对坐标的曲面积分，必须注意积分曲面所取的侧

<center><span style='color:blue;font-size:15px'>2021/6/2</span></center>

#### 二、对坐标的曲面积分的计算法

**直接法：**

（1）$曲面\Sigma:z=\varphi(x,y),(x,y)\in D_{xy}$

$$\displaystyle\iint\limits_\Sigma R(x,y,z)dxdy=\pm\iint\limits_{D_{xy}}R(x,y,\varphi(x,y))dxdy$$

注意正负！曲面的方向与z轴的方向相同（夹角小于90度）时为正，相反时为负

对其他坐标轴投影的方法类似

#### 三、两类曲面积分的关系

$$\displaystyle \iint\limits_\Sigma Pdydz+Qdzdx+Rdxdy=\iint\limits_\Sigma(P\cos\alpha+Q\cos\beta+R\cos\gamma)dS$$

$$\displaystyle \iint\limits_\Sigma \vec A·d\vec {S}=\iint\limits_\Sigma\vec A·\vec {e_n}dS\qquad(\vec A=(P,Q,R),d\vec {S}=(dydz,dzdx,dxdy))$$

**归一法：**

如果曲面能写成$z=\varphi(x,y)$的形式，则​

$$\displaystyle \iint\limits_\Sigma P(x,y,z)dydz+Q(x,y,z)dzdx+R(x,y,z)dxdy\\\displaystyle=\pm\left[P(x,y,\varphi(x,y))(-\frac{\partial z}{\partial x})+Q(x,y,\varphi(x,y)))(-\frac{\partial z}{\partial y})+R(x,y,\varphi(x,y))\right]dxdy\\\left(\vec n=(-\frac{\partial z}{\partial x},-\frac{\partial z}{\partial y},1),\vec{e_n}=\frac{1}{\sqrt{1+{z_x}^2+{z_y}^2}}(-\frac{\partial z}{\partial x},-\frac{\partial z}{\partial y},1),dS=\sqrt{1+{z_x}^2+{z_y}^2}dxdy\right)$$

#### 内容小结：

![](/images/tongji-calculus-11-12/image-20210602153753096.png)



### 第六节 高斯公式 散度

#### 一、高斯公式（三重积分和曲面积分的转换）

<span style='color:blue;font-size:20px'>定理：</span>设空间有界闭区域$\Omega$由分片光滑的闭曲面$\Sigma$围成，若函数P(x,y,z),Q(x,y,z),R(x,y,z)在该区域上具有一阶连续偏导数，则

:$$\displaystyle\iint\limits_\Sigma Pdydz+Qdzdx+Rdxdy=\iiint\limits_\Omega \left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dv$$，($\Sigma$是**外侧**曲面)

#### 二、散度

$\vec A(P,Q,R),\triangledown(\frac{\partial }{\partial x},\frac{\partial }{\partial y},\frac{\partial }{\partial z})(向量微分算子)\qquad div\vec A=\vec A ·\vec\triangledown=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}$

#### 内容小结

![](/images/tongji-calculus-11-12/image-20210602200027501.png)



### 第七节 斯托克斯公式 旋度

斯托克斯公式是格林公式的推广，格林公式表达了平面闭区域上的二重积分与其边界曲线上的曲线积分间的关系，而斯托克斯公式则把曲面$\Sigma$上的曲面积分与沿着$\Sigma$的边界曲线的曲线积分联系起来

#### 一、斯托克斯公式

<span style='color:blue;font-size:20px'>定理：</span>设$\Gamma$为分段光滑的空间有向闭曲线，$\Sigma$是以$\Gamma$为边界的分片光滑的有向曲面，$\Gamma$的正向与$\Sigma$的侧符合右手规则，若函数P(x,y,z),Q(x,y,z),R(x,y,z)在曲面$\Sigma$上（连同边界）具有一阶连续偏导数，则

:$$\displaystyle\oint_\Gamma Pdx+Qdy+Rdz=\iint\limits_\Sigma\begin{vmatrix}dydz&dzdx&dxdy\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\P&Q&R\end{vmatrix}=\iint\limits_\Sigma\begin{vmatrix}\cos\alpha&\cos\beta&\cos\gamma\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\P&Q&R \end{vmatrix}dS$$，($\Sigma$是**外侧**曲面)

#### 二、旋度

$\displaystyle\vec A(P,Q,R),\qquad rot\vec A=\triangledown\times\vec A=\begin{vmatrix}\vec i&\vec j&\vec k\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\P&Q&R \end{vmatrix}$



<center><span style='color:blue;font-size:15px'>2021/6/4</span></center>

## 第十二章 无穷级数

### 第一节 常数项级数的概念和性质

#### 一、常数项级数的概念

若ui为常数数列，$$\displaystyle \sum^\infty_{i=1}u_i$$就叫做（常数项）**无穷级数**，简称（常数项）**级数**，其中第n项$u_i$叫做级数的**一般项**

取级数的前n项的和$s_n=u_i+u_2+...+u_n$称为级数的**部分和**，当n依次取1,2,3时，构成一个新的数列{$s_n$}

<span style='color:red;font-size:20px'>定义:</span> $$如果级数\displaystyle \sum^\infty_{i=1}u_i的部分和数列\{s_n\}有极限s，即\lim_{n\to\infty}s_n=s,那么称无穷级数\sum^\infty_{i=1}u_i收敛\\这时极限s叫做这极限的和，并写成s=u_1+u_2+...+u_i+...\\如果\{s_n\}没有极限，那么称无穷级数\displaystyle \sum^\infty_{i=1}u_i发散$$

>级数和数列极限有着紧密的联系，级数$\displaystyle \sum^\infty_{i=1}u_i与数列\{s_n\}$同时收敛或同时发散，且在收敛时，有
>
>$$\displaystyle \sum^\infty_{i=1}u_i=\lim_{n\to\infty}s_n,\qquad即\sum^\infty_{i=1}u_i=\lim_{n\to\infty}\sum^n_{i=1}u_i$$

**note：**$$\displaystyle \sum^\infty_{n=0}a·q^n\displaystyle\begin{cases}发散，\qquad |q|\geq1\\\frac{aq}{1-q}，\qquad |q|<1\end{cases}$$称为几何级数（等比级数）

#### 二、收敛级数的基本性质

<span style='color:sienna;font-size:20px'>性质1：</span>级数的每一项同乘一个不为零的常数后，它的收敛性不会改变

<span style='color:sienna;font-size:20px'>性质2：</span>两个收敛级数逐项相加或相减构成的新级数仍收敛

<span style='color:sienna;font-size:20px'>性质3：</span>在级数中去掉，加上或改变有限项，不会改变级数的收敛性

<span style='color:sienna;font-size:20px'>性质4：</span>如果级数收敛，那么对这级数的项任意加括号后所成的级数仍收敛，且其和不变
如果加括号后所承担级数收敛，那么不能断定去括号后原来的级数也收敛
如果加括号后所成的级数发散，那么原来级数也发散
【添加括号会提高收敛性】

<span style='color:sienna;font-size:20px'>性质5（级数收敛的必要条件）：</span>如果级数收敛，则一般项$\displaystyle \lim_{n\to\infty}u_n=0$，反之不对



### 第二节 常数项级数的审敛法

正项级数特别重要，以后将看到许多级数的收敛性问题可归结为正项级数的收敛性问题

#### 一、正项级数及其审敛法

各项都是正数或零的级数称为正项级数，正向级数的部分和数列{$s_n$}显然是一个单调增加数列，如果级数收敛，根据有极限的数列是有界数列可知，数列{$s_n$}有界

 <span style='color:blue;font-size:20px'>定理1（基本定理）：</span>正项级数$\displaystyle \sum^\infty_{n=1}u_n$收敛的**充分必要条件**是：它的部分和数列{$s_n$}有界
如正项级数发散，那么它的部分和数列$s_n\to\infty(n\to\infty)$

 <span style='color:blue;font-size:20px'>定理2（比较审敛法）：</span>$$设\displaystyle \sum^\infty_{n=1}a_n与\sum^\infty_{n=1}b_n是两个正项级数，且a_n\leq b_n,则\\（1）若\displaystyle\sum^\infty_{n=1}b_n收敛，\sum^\infty_{n=1}a_n也收敛\\（2）若\displaystyle\sum^\infty_{n=1}a_n发散，\sum^\infty_{n=1}b_n也发散$$

   **note：**p级数$$\displaystyle \sum^\infty_{n=1}\frac{1}{n^p}(p>0)$$当p>1时收敛，当p≤1时发散（当p=1时，称此级数为调和级数）

 <span style='color:blue;font-size:20px'>定理3（比较审敛法的极限形式）：</span>

![](/images/tongji-calculus-11-12/image-20210604161637929.png)

> 比较审敛法的缺点：要求依赖别的级数，需要对原来的级数进行适当的放大或缩小，参照物不好找

 <span style='color:blue;font-size:20px'>定理4（比值审敛法）：</span>$$设\displaystyle \sum^\infty_{n=1}u_n为正项级数，若\lim_{n\to\infty}\frac{u_{n+1}}{u_n}=\rho\\则当\rho<1时，级数收敛，当\rho>1时，级数发散，\rho=1时都有可能$$

 <span style='color:blue;font-size:20px'>定理5（根值审敛法）：</span>$$设\displaystyle \sum^\infty_{n=1}u_n为正项级数，若\lim_{n\to\infty}\sqrt[n] u_n=\rho\\则当\rho<1时，级数收敛，当\rho>1(或+\infty)时，级数发散，\rho=1时都有可能$$

#### 二、交错级数及其审敛法

交错级数的各项是正负交替的，可以写成下面的形式$u_1-u_2+u_3-u_4+...$或$-u_1+u_2-u_3+u_4-...$

 <span style='color:blue;font-size:20px'>定理6（莱布尼兹审敛法）：</span>$$如果交错级数\displaystyle \sum^\infty_{n=1}(-1)^{n-1}u_n满足条件\\(1)u_n\geq u_{n+1}\qquad(2)\displaystyle\lim_{n\to\infty}u_n=0\\那么级数收敛，且s\leq u_1，其余项的绝对值|r_n|\leq u_{n+1}$$

> $$\displaystyle\sum^\infty_{n=1}a_n收敛不能推出\displaystyle\sum^\infty_{n=1}{a_n}^2收敛，例如\displaystyle\sum^\infty_{n=1}\frac{(-1)^n}{\sqrt n}收敛，而\displaystyle\sum^\infty_{n=1}[\frac{(-1)^n}{\sqrt n}]^2=\sum^\infty_{n=1}\frac{1}{n}发散$$
>
> 因为平方虽然会使一般项趋于0的速度更快，但同时也可能消去一般项中的负值

#### 三、绝对收敛与条件收敛

> 取绝对值不会改变一般项趋于0的速度，但会消掉负值，所以会提高发散性

（1）若级数$$\displaystyle\sum^\infty_{n=1}a_n$$收敛，而$$\displaystyle\sum^\infty_{n=1}|a_n|$$发散，称$$\displaystyle\sum^\infty_{n=1}a_n$$条件收敛

（2）若级数$$\displaystyle\sum^\infty_{n=1}|a_n|$$收敛，称$$\displaystyle\sum^\infty_{n=1}a_n$$绝对收敛

 <span style='color:blue;font-size:20px'>定理7：</span>如果级数$$\displaystyle\sum^\infty_{n=1}a_n$$绝对收敛，那么级数$$\displaystyle\sum^\infty_{n=1}a_n$$必定收敛



<center><span style='color:blue;font-size:15px'>2021/6/6</span></center>

### 第三节 幂级数

#### 一、函数项级数的概念

如果给定一个定义在区间I上的函数列{$$u_n(x)$$}，称$$\displaystyle \sum_{n=1}^\infty$$为定义在区间I上的函数项无穷级数，简称**（函数项）级数**

对于每一个确定的值$x_0\in I$，如果级数发散，称点$x_0$为级数的**收敛点**，如果级数发散，称点$x_0$为级数的**发散点**

函数项级数的收敛点的全体称为它的**收敛域**，发散点的全体称为它的**发散域**

对于收敛域内的任意一个数x，函数项级数成为一收敛的常数项级数，因而有一确定的和s，这样，在收敛域上，函数项级数的和是x的函数s(x)，通常称s(x)为函数项级数的**和函数**，函数的定义域就是级数的收敛域，并写成
$\displaystyle \sum^{\infty}_{n=1}u_n(x)=s(x)$

#### 二、幂级数及其收敛性

函数项级数中简单而常见的一类级数就是各项都是常数乘幂级数的函数项级数，即**幂级数**，它的形式是
$$\displaystyle \sum^\infty_{n=0}a_nx^n=a_0+a_1x+a_2x^2+......或\displaystyle \sum^\infty_{n=0}a_n(x-x_0)^n=a_0+a_1(x-x_0)+a_2(x-x_0)^2+......$$

其中常数$a_0,a_1,a_2......$称为幂级数的系数

 <span style='color:blue;font-size:20px'>定理1（阿贝尔(Abel)定理）：</span>如果级数 $$\displaystyle \sum_{n=0}^{\infty} a_{n} x^{n}$$当 $$x=x_{0}\left(x_{0} \neq 0\right)$$时收敛，那么适合不等式$$|x|<| x_0|$$ 的一切x使这幕级数绝对收敛，反之，如果级数$$\displaystyle \sum_{n=0}^{\infty} a_{n} x^{n}$$ 当 $$x=x_{0}$$ 时发散，那么适合不等式 $$|x|>|x_{0}|$$ 的一切x使这幕级数发散

<span style='color:green;font-size:20px'>推论：</span>如果幕级数 $$\displaystyle\sum_{n=0}^{\infty} a_{n} x^{n}$$ 不是仅在x=0点收敛，也不是在整个数轴上都收敛，那么必有一个确定的正数R存在，使得
当 |x|$<$R时，幕级数绝对收敛
当 |x|$>$R时，幕级数发散 
当 x=R​与x=-R​时，幕级数可能收敛也可能发散

正数R通常叫做幂级数的**收敛半径**，开区间(-R,R)称为幂级数的**收敛区间**，再由幂级数在$x=\pm R$处的收敛性就可以决定它的**收敛域**

 <span style='color:blue;font-size:20px'>定理2：</span>对于$$\displaystyle\sum_{n=0}^{\infty} a_{n} x^{n}，若\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=\rho,则R=\begin{cases}\frac{1}{\rho},\qquad\rho\not=0\\+\infty ,\quad\rho=0\\0,\qquad\rho=+\infty\end{cases}$$

 <span style='color:blue;font-size:20px'>定理3：</span>对于$$\displaystyle\sum_{n=0}^{\infty} a_{n} x^{n}，若\displaystyle\lim_{n\to\infty}\sqrt[n]{|a_n|}=\rho,则R=\begin{cases}\frac{1}{\rho},\qquad\rho\not=0\\+\infty ,\quad\rho=0\\0,\qquad\rho=+\infty\end{cases}$$

**note:**对于$$\displaystyle\sum_{n=0}^{\infty} a_{n} x^{2n+1}，若\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=\rho,则R=\begin{cases}\sqrt\frac{1}{\rho},\qquad\rho\not=0\\+\infty ,\quad\rho=0\\0,\qquad\rho=+\infty\end{cases}$$(跨度是2，所以是1/2次方)

#### 三、幂函数的运算（幂级数的和函数的性质）

<span style='color:sienna;font-size:20px'>性质1：</span>幂级数的和函数在其收敛域上连续

<span style='color:sienna;font-size:20px'>性质2：</span>幂函数的和函数在其收敛域上可积，并有连续积分公式

$$\displaystyle\int_{0}^{x} s(t) \mathrm{d} t =\int_{0}^{x}\left[\sum_{n=0}^{\infty} a_{n} t^{n}\right] \mathrm{d} t=\sum_{n=0}^{\infty} \int_{0}^{x} a_{n} t^{n} \mathrm{~d} t =\sum_{n=0}^{\infty} \frac{a_{n}}{n+1} x^{n+1}(x \in I)$$

逐项积分后所得到的幂级数和原级数有相同的收敛半径

<span style='color:sienna;font-size:20px'>性质3：</span>幂函数的和函数在其收敛区间(-R,R)上可导，并有连续求导公式$$\displaystyle s^{\prime}(x)=\left(\sum_{n=0}^{\infty} a_{n} x^{n}\right)^{\prime}=\sum_{n=0}^{\infty}\left(a_{n} x^{n}\right)^{\prime}=\sum_{n=1}^{\infty} n a_{n} x^{n-1}(|x|<R)$$（x=0对于的常数项求导消失）

逐项求导后所得到的幂级数和原级数有相同的收敛半径

反复应用上述结论可知，**幂级数的和函数在其收敛区间内具有任意阶导数**



<center><span style='color:blue;font-size:15px'>2021/6/7</span></center>

### 第四节 函数展开成幂级数

如果能找到一个幂级数，它在某区间内收敛，且其和恰好就是给定的函数f(x)，那么**函数f(x)在该区间内就能展开成幂级数**

如果函数在x0的领域内能展开为$x-x_0$的幂级数，那么

$$\displaystyle f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+...+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+...\\=\displaystyle\sum^\infty_{n=0}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$

称为f(x)在$x=x_0$时的泰勒级数

当$$x_0=0时，\displaystyle\sum^\infty_{n=0}\frac{f^{(n)}(0)}{n!}(x)^n$$称为f(x)的麦克劳林级数

 <span style='color:blue;font-size:20px'>定理：</span>$$设f(x)在x=x_0的某邻域内任意阶可导,\\则f(x)在x=x_0邻域内能展开为\displaystyle\sum^\infty_{n=0}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n的充要条件是\\\displaystyle\lim_{n\to\infty}R_n(x)=0$$

> 泰勒公式中要求n+1阶可导，而泰勒级数要求任意阶可导($n\to\infty$)

**常用的泰勒级数：**

![](/images/tongji-calculus-11-12/image-20210607192959677.png)

将函数展开成幂级数的方法：

（1）直接法：求出f(x)的各阶导数，代入公式

（2）间接法：利用已有公式和幂级数的性质（逐项可积，逐项可导）

#### 内容小结

![](/images/tongji-calculus-11-12/image-20210607194250752.png)

![](/images/tongji-calculus-11-12/image-20210607194433350.png)



<center><span style='color:blue;font-size:15px'>2021/6/8</span></center>

### 第七节 傅里叶级数

本节着重研究如何把函数展开成三角函数

####  一、三角级数

周期函数反映了客观世界中的周期运动，正弦函数就是一种简单而常见的周期函数，例如描述简谐运动的函数$y=A\sin(\omega t+\varphi)$.但是在实际问题中，除了正弦函数外，还会遇到非正弦函数的周期函数，它们反映了比较复杂的周期运动，如电子技术中常用的周期为T的矩形波就是一个非正弦函数的例子。

我们也想将周期函数展开成由简单的周期函数例如三角函数函数组成的级数，可以写作

$$\displaystyle\frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos \frac{n \pi t}{l}+b_{n} \sin \frac{n \pi t}{l}\right)$$

形如上式的级数叫做**三角级数**，将周期函数按上述方法展开，就是把一个比较复杂的周期运动看成是许多不同频率的简谐振动的叠加，在电工学上，这种展开称为**谐波分析**，其中常数项$\frac{a_0}2$称为**直流分量**，$a_1\cos x+b_1\sin x$称为**一次谐波**，$a_2\cos 2x+b_2\sin 2x$称为**二次谐波**等等


令 $\frac{\pi t}{l}=x$，上式成为

$$\displaystyle \frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos n x+b_{n} \sin n x\right)$$

这就把以2l为周期的三角级数转换成以2π为周期的三角函数

#### 二、函数展开成傅里叶级数

 <span style='color:blue;font-size:20px'>定理（狄利克雷充分条件）：</span>

：$$设f(x) 是周期为2π的周期函数,如果它满足:\\
(1)在一个周期([-π,π])内连续或只有有限个第一类间断点，\\
(2)在一个周期([-π,π])内至多只有有限个极值点，\\
那么f(x)的傅里叶级数\displaystyle \frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos n x+b_{n} \sin n x\right)收敛,并且\\
\displaystyle a_0=\frac1\pi\int^\pi_{-\pi}f(x)dx\\
\displaystyle a_n=\frac1\pi\int^\pi_{-\pi}f(x)\cos nxdx\qquad(n=1,2,3,···)\\
\displaystyle b_n=\frac1\pi\int^\pi_{-\pi}f(x)\sin nxdx\qquad(n=1,2,3,···)\\
当x是f(x)的连续点时，级数收敛于f(x)；\\
当x是f(x)的间断点时，级数收敛于\frac1 2[f(x^-)+f(x^+)]\\$$

**例1**：$$f(x)以2π为周期，f(x)在[-π,π]上表达式为:f(x)=\begin{cases}-1,\quad-\pi\leq x<0\\1,\qquad0\leq x<-\pi\end{cases}\\将f(x)展开成傅里叶级数，并作出其和函数的图像$$

（1）画出f(x)的图像，找出间断点$x=k\pi(k\in z)$

（2）$$\displaystyle a_0=\frac1\pi\int^\pi_{-\pi}f(x)dx=0\\
\displaystyle a_n=\frac1\pi\int^\pi_{-\pi}f(x)\cos nxdx=0\qquad(n=1,2,3,···)\\
\displaystyle b_n=\frac1\pi\int^\pi_{-\pi}f(x)\sin nxdx=\begin{cases}\frac{4}{n\pi},\quad n=1,3,5,···\\0,\qquad n=2,4,6,···\end{cases}$$

（3）$$\displaystyle f(x)=\frac{4}{\pi}\sum^\infty_{n=0}\frac{\sin((2n+1)x)}{2n+1}\qquad(-\infty<x<+\infty且x\not=k\pi(k\in z))$$

（4）当$$\displaystyle x=k\pi(k\in z))时，\frac{4}{\pi}\sum^\infty_{n=0}\frac{\sin((2n+1)x)}{2n+1}=\frac{f(k\pi-0)+f(k\pi+0)}{2}=0$$

（5）令$$\displaystyle s(x)=\frac{4}{\pi}\sum^\infty_{n=0}\frac{\sin((2n+1)x)}{2n+1}$$，和函数的图像为：

![](/images/tongji-calculus-11-12/image-20210608194126375.png)

此级数趋于f(x)的过程（$x\not=k\pi(k\in z)$）

![](/images/tongji-calculus-11-12/image-20210608191239021.png)

> 如果函数f(x)只在$[-\pi,\pi]$上有定义，我们可以在定义域外补充函数的定义，使它扩广成周期为2π的周期函数F(x)，这种拓广函数的定义域的过程称为**周期延拓**
>
> 再将F(x)展开成傅里叶级数，最后限制x在(-π,π)内，此时F(x)=f(x)，这样便得到f(x)的傅里叶级数展开式
>
> 根据收敛定理，这级数在区间$x=\pm\pi$处收敛于$\displaystyle \frac{f(\pi^-)+f(-\pi^+)}{2}$

#### 三、正弦级数和余弦级数

一般来说，一个函数的傅里叶级数既含有正弦项，也含有余弦项，但是一些函数的傅里叶级数只含有正弦项或者只含有常数项和余弦项，这和f(x)的奇偶性是有密切关系的。由于奇函数在对称区间上的积分为0，偶函数在对称区间上的积分等于半区间上积分的两倍，因此

当f(x)为奇函数时，f(x)cos nx是奇函数，f(x)sin nx是偶函数

故$$\displaystyle \begin{cases}a_0=0\\a_n=0\\b_n=\frac2\pi\int^\pi_{0}f(x)\sin nxdx\qquad(n=1,2,3,···)\end{cases}$$

即**奇函数**的傅里叶级数是只含有正弦项的**正弦级数**$$\displaystyle\sum^\infty_{n=1}b_n\sin nx$$

当f(x)为偶函数时，f(x)cos nx是偶函数，f(x)sin nx是奇函数

故$$\displaystyle \begin{cases}a_0=\frac2\pi\int^\pi_{0}f(x)dx\\a_n=\frac2\pi\int^\pi_{0}f(x)\cos nxdx\qquad(n=1,2,3,···)\\b_n=0\end{cases}$$

即**偶函数**的傅里叶级数是只含常数项和余弦项的**余弦级数**$$\displaystyle\frac{a_n}{2}+\sum^\infty_{n=1}a_n\cos nx$$

> 如果函数f(x)只在$[0,\pi]$上有定义，我们可以在($-\pi,0$)内补充函数的定义，使它在($-\pi,\pi$)上成为奇函数（偶函数），这种拓广函数定义域的过程称为**奇延拓**（**偶延拓**）。然后将奇延拓（偶延拓）后的函数展开成傅里叶级数，这个级数必定是正弦级数（余弦级数），再限制x在($0,\pi$)上，此时F(x)=f(x)，这样便得到f(x)的正弦级数（余弦级数）展开式



### 第八节 周期为2l的周期函数的傅里叶级数

 <span style='color:blue;font-size:20px'>定理：</span>

：$$设f(x) 是周期为2l的周期函数,如果它在[-l,l]上满足收敛定理的条件，则其傅里叶级数展开式为\\
f(x)=\displaystyle \frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left(a_{n} \cos \frac{n\pi x}{l}+b_{n} \sin \frac{n\pi x}{l}\right)(x\in C)，其中\\
\displaystyle a_0=\frac1 l\int^\pi_{-\pi}f(x)dx\\
\displaystyle a_n=\frac1 l\int^\pi_{-\pi}f(x)\cos\frac{n\pi x}{l}dx\qquad(n=1,2,3,···)\\
\displaystyle b_n=\frac1 l\int^\pi_{-\pi}f(x)\sin\frac{n\pi x}{l}dx\qquad(n=1,2,3,···)\\
当x是f(x)的连续点时，级数收敛于f(x)；\\
当x是f(x)的间断点时，级数收敛于\frac1 2[f(x^-)+f(x^+)]\\$$

