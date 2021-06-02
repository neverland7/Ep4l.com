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

$$\displaystyle\iint\limits_\Sigma Pdydz+Qdzdx+Rdxdy=\iiint\limits_\Omega \left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dv$$，($\Sigma$是**外侧**曲面)

#### 二、散度

$\vec A(P,Q,R),\triangledown(\frac{\partial }{\partial x},\frac{\partial }{\partial y},\frac{\partial }{\partial z})(向量微分算子)\qquad div\vec A=\vec A ·\vec\triangledown=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}$

#### 内容小结

![](/images/tongji-calculus-11-12/image-20210602200027501.png)



### 第七节 斯托克斯公式 旋度

斯托克斯公式是格林公式的推广，格林公式表达了平面闭区域上的二重积分与其边界曲线上的曲线积分间的关系，而斯托克斯公式则把曲面$\Sigma$上的曲面积分与沿着$\Sigma$的边界曲线的曲线积分联系起来

#### 一、斯托克斯公式

<span style='color:blue;font-size:20px'>定理：</span>设$\Gamma$为分段光滑的空间有向闭曲线，$\Sigma$是以$\Gamma$为边界的分片光滑的有向曲面，$\Gamma$的正向与$\Sigma$的侧符合右手规则，若函数P(x,y,z),Q(x,y,z),R(x,y,z)在曲面$\Sigma$上（连同边界）具有一阶连续偏导数，则

$$\displaystyle\oint_\Gamma Pdx+Qdy+Rdz=\iint\limits_\Sigma\begin{vmatrix}dydz&dzdx&dxdy\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\P&Q&R \end{vmatrix}=\iint\limits_\Sigma\begin{vmatrix}\cos\alpha&\cos\beta&\cos\gamma\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\P&Q&R \end{vmatrix}dS$$，($\Sigma$是**外侧**曲面)

#### 二、旋度

$\displaystyle\vec A(P,Q,R),\qquad rot\vec A=\triangledown\times\vec A=\begin{vmatrix}\vec i&\vec j&\vec k\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\P&Q&R \end{vmatrix}$

