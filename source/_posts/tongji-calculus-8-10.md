---
title: 同济高数第七版（8-10章）
date: 2021-05-16 17:18:26
img: images/tongji-calculus-8-10/calculus_2.png
mathjax: true
summary: 同济高数
categories: 学习笔记
tags:
 - 数学
 - 微积分
 - 考研
typora-root-url: ..
---

<center><span style='color:blue;font-size:15px'>2021/5/17</span></center>

## 第八章 向量代数与空间解析几何

### 第一节 向量及线性运算

#### 一、定义

<span style='color:red;font-size:20px'>定义（向量）：</span>有**大小**，有**方向**的量叫做向量

<span style='color:red;font-size:20px'>定义（向量相等）：</span>若两个向量方向相同，长度相等，记作**向量相等**($\vec a=\vec b$)

<span style='color:red;font-size:20px'>定义（向量的模）：</span>向量的大小叫作**向量的模**，记作$|\vec a|$
若$|\vec a|=0$，称其为**零向量**（零向量的方向是任意的）
若$|\vec a|=1$，称其为**单位向量**

<span style='color:red;font-size:20px'>定义（向量夹角）：</span>规定不超过$\pi$的角称为**向量夹角**$(\widehat{\vec a,\vec b})=\theta$

#### 二、向量的线性运算

1. $\vec a+\vec b$
   几何：（1）平行四边形法则（2）三角形法则
2. $\vec a-\vec b(\vec{BA})$
   几何：从b的终点指向a的终点（起点相同时）
   代数：$\vec a-\vec b=\{a_1-a_2,b_1-b_2,c_1-c_2\}$
3. $k\vec a$

#### 三、空间直角坐标系

空间直角坐标系有8个**卦限**，x,y,z轴的正方向对应的是第一挂限，z>0对应前4卦限，z<0对应后4卦限

$\vec i,\vec j,\vec k$分别是与x,y,z轴的正方向方向相同的单位向量，{a,b,c}称为**向量$\vec a$的坐标形式**

设$\vec a$的起点和终点分别是$A(x_1,y_1,z_1),B(x_2,y_2,z_2)$，则$\vec a=\vec{BA}=\{x_2-x_1,y_2-y_1,z_2-z_1\}$

#### 四、向量线性运算的代数描述

设$\vec a=\{a_x,a_y,a_z\},\vec b=\{b_x,b_y,b_z\}$，则

- $\vec a+\vec b=\{a_x+b_x,a_y+b_y,a_z+b_z\}$
- $\vec a-\vec b=\{a_x-b_x,a_y-b_y,a_z-b_z\}$
- $k\vec a==\{ka_x,ka_y,ka_z\}$

#### 五、向量的模，单位向量，方向角，方向余弦，投影

**1.向量的模：**$|\vec a|=\sqrt{a_x^2+a_y^2+a_z^2}或\sqrt{(x_2-x_1)^2,(y_2-y_1)^2,(z_2-z_1)^2}$

**2.单位向量：**$\vec a$的单位向量记作$\displaystyle\vec a_0,\vec a_0=\frac{\vec a}{|\vec a|}=\frac{\{a_x,a_y,a_z\}}{\sqrt{a_x^2+a_y^2+a_z^2}}$

**3.方向角：**$\vec a$与x,y,z轴正方向的夹角称为$\vec a$的方向角，记为$\alpha,\beta,\gamma$

**4.方向余弦：**称$\cos\alpha,\cos\beta,\cos\gamma为\vec a$的方向余弦

- $\displaystyle\cos\alpha=\frac{a_x}{|\vec a|},\cos\beta=\frac{a_y}{|\vec a|},\cos\gamma=\frac{a_z}{|\vec a|}$
- $\displaystyle\{\cos\alpha,\cos\beta,\cos\gamma\}=\vec a_0=\frac{\vec a}{|\vec a|}$
- $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$

**5.向量在坐标轴上的投影：** 投影向量是一个向量，**投影**是投影向量的模

在u轴上的投影$prj_u\vec{AB}=|\vec{AB}\cos\theta|$





<center><span style='color:blue;font-size:15px'>2021/5/18</span></center>

### 第二节 数量积、向量积、混合积

#### 一、两向量的数量积（点乘/内积)

$\vec a·\vec b=|\vec a||\vec b|\cos\theta$（结果是一个数，只有大小没有方向）

**性质：**

- 向量的内积等于其中一个向量的模乘另一个向量在这个向量的方向上的投影的乘积
- $\vec a·\vec a=|\vec a|^2$
- 如果两个非零向量$\vec a·\vec b=0\quad(a_xb_x+a_yb_y+a_zb_z=0)$，那么$\vec a\perp\vec b$，反之亦然
- 若$\vec a·\vec a=0，则\vec a=\vec 0$

**数量级符合下列运算规律：**

- 交换律：$\vec a·\vec b=\vec b·\vec a$
- 分配率：$（\vec a+\vec b）·\vec c=\vec a·\vec c+\vec b·\vec c$

**数量积的坐标表达式：**

坐标表达式：$$\vec i·\vec j=\vec j·\vec k=\vec k·\vec i=0\\\vec i·\vec i=\vec j·\vec j=\vec k·\vec k=1\\设\vec a=\{a_x,a_y,a_z\}=a_x\vec i+a_y\vec j+a_z\vec k\\\quad\vec b=\{b_x,b_y,b_z\}=b_x\vec i+b_y\vec j+b_z\vec k,则\\\vec a·\vec b=(a_x\vec i+a_y\vec j+a_z\vec k)·(b_x\vec i+b_y\vec j+b_z\vec k)=...\\=a_xb_x+a_yb_y+a_zb_z$$

#### 二、向量的向量积（叉乘/外积）

$大小:|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta\quad方向：右手定则$（结果是一个向量）（方向和x,y,z轴对应，a对应x，b对应y，axb对应z）

**性质：**

- $\vec a\times\vec a=0$
- $\vec a\times\vec b=\vec 0\Leftrightarrow \vec a\parallel \vec b$
- $\vec a\times\vec b\perp\vec a,\quad\vec a\times\vec b\perp\vec b$
- $\vec a\times\vec b=-\vec b\times\vec a$

**数量级符合下列运算规律：**

- 反交换律：$\vec a\times\vec b=-\vec b\times\vec a$
- 分配率：$(\vec a+\vec b)\times \vec c=\vec a\times\vec c+\vec b\times\vec c$

**向量积的坐标表达式：**

坐标表达式：$$\vec i\times\vec i=\vec j\times\vec j=\vec k\times\vec k=0\\\vec i\times\vec j=\vec k,\vec j\times\vec k=\vec i,\vec k\times\vec i=\vec j\\(\vec j\times\vec i=-\vec k,\vec k\times\vec j=-\vec i,\vec i\times\vec k=-\vec j)\\设\vec a=\{a_x,a_y,a_z\}=a_x\vec i+a_y\vec j+a_z\vec k\\\quad\vec b=\{b_x,b_y,b_z\}=b_x\vec i+b_y\vec j+b_z\vec k,则\\\vec a\times\vec b=(a_x\vec i+a_y\vec j+a_z\vec k)\times(b_x\vec i+b_y\vec j+b_z\vec k)=...\\=(a_yb_z-a_zb_y)i+(a_zb_x-a_xb_z)j+(a_xb_y-a_yb_x)k$$

写成三阶行列式：$$\vec a\times\vec b=\begin{vmatrix}\vec i&\vec j&\vec k\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}$$

**向量积的又一几何意义：三角形的面积**

三角形的面积等于$ab\sin\theta$

所以$S_\triangle=\frac{1}{2}|\vec a||\vec b|\sin\theta=\frac{1}{2}|\vec a\times\vec b|$（所以ab的叉乘的模是ab对应的平行四边形的面积）

#### 三、向量的混合积（三重积）

$[\vec a\vec b\vec c]=(\vec a\times\vec b)·\vec c$（结果是一个数，只有大小没有方向）

**混合积的坐标表达式：**

坐标表达式：$$[\vec a\vec b\vec c]=(\vec a\times\vec b)·\vec c=\begin{vmatrix}a_x&a_y&a_z\\b_x&b_y&b_z\\c_x&c_y&c_z\end{vmatrix}$$

**混合积的几何意义：**

混合积的绝对值表示以向量abc为棱的平行六面体的体积
如果c的方向与ab叉乘的方向相同，符号位正，反之符号为负

三向量$\vec a、\vec b、\vec c$共面的充分必要条件是它们的混合积=0​





### 第三节 平面及其方程（应用一）

#### 一、曲面方程与空间曲线方程的概念

曲面：F(x,y,z)=0

空间曲线：F(x,y,z)=0;G(x,y,z)=0（两个空间曲面的交线）

平面与空间直线分别是曲面与空间曲线的特例

#### 二、平面的点法式方程

（知道平面上的一点和一个法向量/平面上的两个向量/平面上的三个点时）

已知$$平面上一点M_0(x_0,y_0,z_0),法向量\vec n(A,B,C),设M(x,y,z)为平面上\Pi的任意一点，可知\vec{M_0M}\perp\vec n\\即\vec{M_0M}·\vec n=0\Leftrightarrow \Pi :A(x-x_0)+B(y-y_0)+C(z-z_0)=0$$

#### 三、平面的截距式方程

（平面与x,y,z轴的交点分别为(a,0,0)，(0,b,0)，(0,0,c)，由点法式求得，a,b,c依次叫做平面在x, y,z轴上的**截距**）

$\displaystyle\Pi:\frac{x}{a}+\frac{y}{b}+\frac{z}{c}=1$

#### 四、平面的一般式方程

$\Pi:Ax+By+Cz+D=0$（任一平面都可以用三元一次方程来表示）

法向量$\vec n=(A,B,C)$

当D=0时，表示一个通过原点的平面

当A=0时，法向量垂直于x轴，平面与x轴平行，其他同理

当A=B=0时，法向量垂直于x轴和y轴，平面与xOy面平行，其他同理

#### 五、两平面的夹角

两平面的法向量的夹角($\leq\frac{\pi}{2}$)称为两平面的夹角

由$\vec n_1·\vec n_2=|\vec n_1||\vec n_2|\cos\theta$，得$\displaystyle\cos\theta=|\frac{\vec n_1·\vec n_2}{|\vec n_1||\vec n_2|}|$

#### 六、平面外一点与平面的距离

**注：**$\displaystyle prj_{\vec a}\vec b=|\vec b|\cos\theta=\frac{|\vec a||\vec b|\cos\theta}{|\vec a|}=\frac{\vec a·\vec b}{|\vec a|}$

设$M_1(x_1,y_1,z_1)是平面上一点，M_0(x_0,y_0,z_0)$是平面Ax+By+Cz+D=0外一点，则

$d=\displaystyle |prj_{\vec n}\vec{M_0M_1}|=\frac{|\vec n·\vec{M_0M_1}|}{|\vec n|}=\frac{|A(x_1-x_0)+B(y_1-y_0)+C(z_1-z_0)|}{\sqrt{A^2+B^2+C^2}}=...$

得$\displaystyle d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$





### 第四节 空间直线及其方程（应用二）

#### 一、空间直线的一般式方程

L:$\begin{cases}A_1x+B_1y+C_1z+D_1=0\\A_2x+B_2y+C_2z+D_2=0\end{cases}$(两个平面的相交线)

#### 二、空间直线的对称式（点向式）方程

如果一个非零向量平行于一条已知直线，那么这个向量就叫做这条直线的**方向向量**

已知直线L上的一点$M_0(x,y,z)$和它的方向向量$\vec s=(m,n,p)\parallel L$，设点M(x,y,z)是直线L上的任一点，

则$\vec{M_0M}=(x-x_0,y-y_0,z-z_0),$有L：$\displaystyle\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}$

#### 三、参数式方程

令$\displaystyle\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}=t$，则L的参数式方程为L：$\begin{cases}x=x_0+mt\\y=y_0+nt\\z=z_0+pt\end{cases}$

点向式和参数式是可以相互转化的

#### 四、两直线的夹角

**回顾：**两向量：$\displaystyle\cos\theta=\frac{\vec{a}·\vec{b}}{|\vec a||\vec b|}$两平面：$\displaystyle\cos\theta=\frac{|\vec{n_1}·\vec{n_2}|}{|\vec {n_1}||\vec {n_2}|}$

两直线：$\displaystyle\cos\theta=\frac{|\vec{s_1}·\vec{s_2}|}{|\vec {s_1}||\vec {s_2}|}$

#### 五、直线与平面的夹角

$\displaystyle\sin\theta=|\cos(\widehat{\vec n,\vec s})|=\frac{|\vec{n}·\vec{s}|}{|\vec {n}||\vec {s}|}$

#### 六、平面束

通过定直线的所有平面的全体称为**平面束**

设L:$\begin{cases}A_1x+B_1y+C_1z+D_1=0\\A_2x+B_2y+C_2z+D_2=0\end{cases}$

则过L的平面束方程为$\Pi:A_1x+B_1y+C_1z+D_1+\lambda(A_2x+B_2y+C_2z+D_2)=0$



<center><span style='color:blue;font-size:15px'>2021/5/19</span></center>

### 第五节 曲面及其方程

#### 一、柱面

一般地，只含x,y而缺z的方程F(x,y)=0在空间直角坐标系中表示**母线**平行于z轴的**柱面**，其**准线**是xOy面上的曲线C：F(x,y)=0

#### 二、旋转曲面

以一条平面曲线绕其平面上的一条直线旋转一周所成的曲面叫做**旋转曲面**，旋转曲线和定直线叫做旋转曲面的**母线**和**轴**

在xoy面上的曲线$F(x,y)=0$绕x轴旋转一周而成的曲面为$F(x,\pm \sqrt{y^2+z^2})$

其他同理

#### 三、二次曲面

- 椭圆锥面：$\displaystyle \frac{x^2}{a^2}+\frac{y^2}{b^2}=z^2$
- 椭球面：$\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$
- 单叶双曲面：$\displaystyle \frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$（在xoz平面上的双曲线绕z轴旋转）
- 双叶双曲面：$\displaystyle \frac{x^2}{a^2}-\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$（在xoz平面上的双曲线绕x轴旋转）
- 椭圆抛物面：$\displaystyle \frac{x^2}{a^2}+\frac{y^2}{b^2}=z$
- 双曲抛物面（马鞍面）：$\displaystyle \frac{x^2}{a^2}-\frac{y^2}{b^2}=z$





### 第六节 空间曲线及其方程

#### 一、空间曲线的一般式方程

L:$\begin{cases}F(x,y,z)=0\\G(x,y,z)=0\end{cases}$(两个曲面的相交线)

#### 二、空间曲线的参数方程

L:$\begin{cases}x=x(t)\\y=y(t)\\z=z(t)\end{cases}$，例如螺旋线：$\begin{cases}x=a\cos \omega t\\y=a\sin \omega t\\z=vt\end{cases}$

#### 三、空间曲线在坐标面上的投影

由曲线的一般式消去变量z后（如果可能的话）得到的方程H(x,y)=0是一个品行与z轴的柱面

L:$\begin{cases}H(x,y)=0\\z=0\end{cases}$就是空间曲线在xoy面上的投影







## 第九章 多元函数微分法及其应用

本章将在一元函数微分学的基础上，讨论多元函数的微分法及其应用



### 第一节 多元函数的基本概念

本节知识现阶段研究有限，不是重点，掌握基本方法即可

#### 一、平面点集和n维空间

考研不要求

#### 二、多元函数的概念

若在区域D上任意的(x,y)都存在唯一的z与(x,y)对应，称z为(x,y)的函数，记z=f(x,y)

D为定义域，值域$R=\{z|z=f(x,y),(x,y)\in D\}$

#### 三、多元函数的极限

<span style='color:red;font-size:20px'>定义：</span>设$f(x,y)$在点$M_0 (x_0,y_0)$的某个去心领域内有定义（聚点），若$\forall\varepsilon>0$，$\exists\delta>0$，

当$0<\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta$时，恒有$|f(x)-A|<\varepsilon$，则称A为$(x,y)\to (x_0,y_0)$时$f(x,y)$的极限

**note：**这里没有左右极限的概念，因为实际上有无数个方向，必须每个方向的极限值都存在且相等该点才有极限

#### 四、多元函数的连续性和性质

<span style='color:red;font-size:20px'>定义（连续性）：</span>设二元函数$f(x,y)$的定义域为D，$P_0(x_0,y_0)$为定义域上的一点，如果

$\displaystyle\lim_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)$那么称函数$f(x,y)$在点$P_0(x_0,y_0)$处连续

**note：**有界闭区域对于一元函数的闭区间

<span style='color:sienna;font-size:20px'>性质1（有界性和最大值最小值定理）：</span>在有界闭区域D上的多元连续函数，必定在D上有界，并且能取到它的最大值和最小值

<span style='color:sienna;font-size:20px'>性质2（介值定理）：</span>在有界闭区域D上的多元连续函数必取得介于最大值和最小值之间的任何值



### 第二节 偏导数

#### 一、偏导数的定义及其计算法

<span style='color:red;font-size:20px'>定义：</span>$设函数z=f(x,y)在点(x_0,y_0)的某一邻域内有定义$

如果$\displaystyle \lim_{\triangle x\to 0}\frac{f(x_0+\triangle x,y_0)-f(x_0,y_0)}{\triangle x}$存在，那么称此极限为函数z=f(x,y)在点$(x_0,y_0)$处对x的**偏导数**

如果函数z=f(x,y)在区域D内每一点(x,y)处对x的偏导数都存在，那么这个偏导数就是x、y的函数，它就称为函数z=f(x,y)对自变量x的**偏导函数**，记作$\frac{\partial z}{\partial x},\frac{\partial f}{\partial x},z_x或f_x(x,y),其他同理$

**note：**对于多元函数来说，即使各偏导数在某点都存在，也不能保证函数在该点连续（一元函数左导数右导数存在且相等就可导，连续）。这是因为各偏导数存在只能保证点P沿着平行于坐标轴的方向趋于$P_0$ ，但不能保证点P按任何方式趋于$P_0$时，函数值f(P)都趋于$f(P_0)$。

#### 二、高阶偏导数

二阶及二阶以上的偏导数统称为高阶偏导数

设函数z=f(x,y)在区域D内具有偏导数$\displaystyle\frac{\partial z}{\partial x}=f_x(x,y),\frac{\partial z}{\partial y}=f_y(x,y)$
于是在D内$f_x(x,y),f_y(x,y)$都是x，y的函数。如果这两个函数的偏导数也存在，那么称它们是函数z=f(x,y)的**二阶偏导数**。按照对变量求导次序的不同有四个二阶偏导数：

f(x,y)对x的二阶偏导数：$\displaystyle\frac{\partial }{\partial x}(\frac{\partial z}{\partial x})=\frac{\partial^2 z}{\partial x^2}=f_{xx}(x,y)$

f(x,y)对x，y的二阶混合偏导数：$\displaystyle\frac{\partial }{\partial y}(\frac{\partial z}{\partial x})=\frac{\partial^2 z}{\partial x\partial y}=f_{xy}(x,y)$

f(x,y)对y，x的二阶混合偏导数：$\displaystyle\frac{\partial }{\partial x}(\frac{\partial z}{\partial y})=\frac{\partial^2 z}{\partial y\partial x}=f_{yx}(x,y)$

f(x,y)对y的二阶偏导数：$\displaystyle\frac{\partial }{\partial y}(\frac{\partial z}{\partial y})=\frac{\partial^2 z}{\partial y^2}=f_{yy}(x,y)$

<span style='color:blue;font-size:20px'>定理：</span>如果函数z=f(x,y)的两个二阶混合偏导数$\frac{\partial^2 z}{\partial x\partial y}$及$\frac{\partial^2 z}{\partial y\partial x}$在区域D内连续，那么在该区域内这两个二阶混合偏导数必相等





<center><span style='color:blue;font-size:15px'>2021/5/20</span></center>

### 第三节 全微分

#### 一、全微分的定义

![](/images/tongji-calculus-8-10/image-20210520111858542.png)

<span style='color:blue;font-size:20px'>定理1：</span>$$\displaystyle如果函数z= f(x,y)在点(x, y)处可微，则该函数在点(x,y)的偏导数\frac{\partial z}{\partial x}与\frac{\partial z}{\partial y}必定存在，且\\\displaystyle dz=\frac{\partial z}{\partial x}\triangle x+\frac{\partial z}{\partial x}\triangle y\qquad(A=\frac{\partial z}{\partial x},B=\frac{\partial z}{\partial y})\qquad(可微\Rightarrow可偏导)$$

>  $连续\not\Rightarrow可微$
>
>  $可偏导\not\Rightarrow可微$
>
>  自己的理解：可微是二维的，针对各个方向的（除了x，y轴还对其他方向求增量），而可偏导仅仅是对于x轴和y轴两个方向，条件太弱了

例：$$f(x,y)=\begin{cases}\frac{xy}{\sqrt{x^2+y^2}}\quad(x,y)\not=(0,0)\\0\qquad\qquad(x,y)=(0,0)\end{cases}$$在点(0,0)处可偏导，但不可微

<iframe src="https://ggb123.cn/calculator/jshh4k9r?embed" width="700" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

证：
可偏导：$$f_x(0,0)=\displaystyle \lim_{x\to 0}\frac{f(x,0)-f(0,0)}{x}=\lim_{x\to 0}\frac{\frac{0}{|x|}-0}{x}=0 $$，同理对y的偏导也存在

可微：$$ \displaystyle \triangle z=f(0+\triangle x,0+\triangle y)-f(0,0)=\frac{\triangle x \triangle y}{\sqrt{(\triangle x)^2+(\triangle y)^2}}\\若可微，则\triangle z=A\triangle x+B\triangle y+o(\rho)\\\displaystyle因为A=f_x(0,0),B=f_y(0,0)所以\triangle z可写作0+0+\frac{\triangle x \triangle y}{\sqrt{(\triangle x)^2+(\triangle y)^2}}\\\displaystyle因为\lim_{\rho\to 0}\frac{\frac{\triangle x \triangle y}{\sqrt{(\triangle x)^2+(\triangle y)^2}}}{\rho}=\lim_{(\triangle x,\triangle y)\to (0,0)}\frac{\frac{\triangle x \triangle y}{\sqrt{(\triangle x)^2+(\triangle y)^2}} }{\sqrt{(\triangle x)^2+(\triangle y)^2}}=\lim_{(\triangle x,\triangle y)\to (0,0)}\frac{ {\triangle x \triangle y} } {(\triangle x)^2+(\triangle y)^2}不存在\\\displaystyle所以\frac{\triangle x \triangle y}{\sqrt{(\triangle x)^2+(\triangle y)^2} }不是\rho的高阶无穷小，所以不可微 $$

<span style='color:blue;font-size:20px'>定理2：</span> 如果函数z= f(x,y)的偏导数$\displaystyle\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}$在点$(x_0,y_0)$处连续（二维上），则函数在该点可微（加减项把全增量写成偏增量然后用拉格朗日中值定理证明）

#### 二、内容小结

![](/images/tongji-calculus-8-10/image-20210520160432110.png)





### 第四节 多元复合函数的求导法则

<span style='color:blue;font-size:20px'>定理：</span> $$设u=u(x,y)，v=v(x,y)在点(x,y)处有对x及对y的偏导数，\\函数z=f(u,v)在对应点(u,v)处有连续偏导数,\\则z= f[u(x,y),v(x,y)]在点(x,y)处的两个偏导数存在，且有\\\displaystyle\frac{\partial z}{\partial x}=\displaystyle\frac{\partial z}{\partial u}\displaystyle\frac{\partial u}{\partial x}+\displaystyle\frac{\partial z}{\partial v}\displaystyle\frac{\partial v}{\partial x}$$

#### 全微分形式的不变性：

![](/images/tongji-calculus-8-10/image-20210520215445626.png)

  







<center><span style='color:blue;font-size:15px'>2021/5/21</span></center>

### 第五节 隐函数的求导公式

<span style='color:blue;font-size:20px'>定理（隐函数存在定理）：</span> 

:$$\\设函数F(x,y)在点P(x_0,y_0)的某一领域内具有连续偏导数，且F(x_0,y_0)=0，F_y(x_0,y_0)\not=0，\\则方程F(x,y)=0在点(x_0,y_0)的某一邻域内恒能确定一个连续且具有连续导数的函数y=f(x),\\它满足条件y_0=f(x_0)，并由\displaystyle\frac{dy}{dx}=-\frac{F_x}{F_y}$$

**有几个方程，就有几个函数（受约束），剩下的字母都是自变量（独立变化）**

**如果只有 一个方程，可以对自变量求(偏)导直接求得**

**如果有两个方程，对自变量求(偏)导后用雅可比行列式求得**

**例：**$$\displaystyle\begin{cases}xu+yv=1\\x^2+y^2+u^2+v^2=6\end{cases},求\frac{\partial u}{\partial x},\frac{\partial u}{\partial y},\frac{\partial v}{\partial x},\frac{\partial v}{\partial x}$$

有两个方程，所以有两个函数，由题目得u和v是x和y的函数，即$\displaystyle\begin{cases}u=u(x,y)\\v=v(x,y)\end{cases}$

分别对x求偏导，得$$\displaystyle\begin{cases}u+x\frac{\partial u}{\partial x}+y\frac{\partial v}{\partial x}=0\\2x+2u\frac{\partial u}{\partial x}+2v\frac{\partial v}{\partial x}=0\end{cases}\Rightarrow\begin{cases}x\frac{\partial u}{\partial x}+y\frac{\partial v}{\partial x}=-u\\u\frac{\partial u}{\partial x}+v\frac{\partial v}{\partial x}=-x\end{cases}$$

$D=\begin{vmatrix}x&y\\u&v\end{vmatrix}=xv-yu,D_1=\begin{vmatrix}-u&y\\ -x&v\end{vmatrix}=xy-uv,D_2=\begin{vmatrix}x&-u\\u&-x\end{vmatrix}=u^2-x^2$

$\displaystyle\frac{\partial u}{\partial x}=\frac{D_1}{D}=\frac{xy-uv}{xv-yu},\qquad\frac{\partial v}{\partial x}=\frac{D_2}{D}=\frac{u^2-x^2}{xv-yu}$，对y求偏导同理





### 第六节 多元函数微分学的几何应用

#### 一、空间曲线的切线与法平面

**参数方程形式：**$L:\displaystyle\begin{cases}x=\varphi(t)\\y=\psi(t)\\z=\omega(t)\end{cases}$

$\vec T=\{\varphi '(t_0),\psi '(t_0),\omega '(t_0) \}$为曲线的切向量

- 切线：$\displaystyle\frac{x-x_0}{\varphi '(t_0)}=\frac{y-y_0}{\psi '(t_0)}=\frac{z-z_0}{\omega '(t_0)}$
- 法平面：$(x-x_0)\varphi '(t_0)+(y-y_0)\psi '(t_0)+(z-z_0)\omega '(t_0)=0$

**一般式：**$L:\displaystyle\begin{cases}F(x,y,z)=0\\G(x,y,z)=0\end{cases}$

$\vec T=\begin{Bmatrix}\vec i&\vec j&\vec k\\F_x&F_y&F_k\\G_x&G_y&G_z\end{Bmatrix}(实际上是两个空间曲面的法向量的叉乘)$

#### 二、曲面的切平面与法线

$\Pi:F(x,y,z)=0的法向量\vec n=\{F_x,F_y,F_z\}$





### 第七节 方向导数和梯度

#### 一、方向导数

偏导数反映的是函数沿坐标轴方向的变化率，方向导数反映的是函数沿任一指定方向的变化率问题

<span style='color:blue;font-size:20px'>定理：</span>$$如果函数f(x,y)在点P_0(x_0,y_0)可微，那么函数在该点沿任一方向l的方向导数存在，且有\\\displaystyle\frac{\partial f}{\partial l}_{(x_0,y_0)}=f_x(x_0,y_0)\cos\alpha+f_y(x_0,y_0)\cos\beta\\其中\cos\alpha和\cos\beta是方向l的方向余弦$$

按照定义的话，$$\displaystyle \triangle z=f(x_0+\triangle x,y_0+\triangle y)-f(x_0,y_0);\qquad \rho=\sqrt{(\triangle x)^2+(\triangle y)^2};\qquad \lim_{\rho\to0}\frac{\triangle z}{\rho}=\frac{\partial f}{\partial l}_{(x_0,y_0)}$$

#### 二、梯度

$grad f(x_0,y_0)=\triangledown f(x_0,y_0)=f_x((x_0,y_0)\vec i+f_x((x_0,y_0)\vec j$

$对于三维函数F(x,y,z)=0（或f(x,y)-z=0）来说，梯度就是曲面法向量(f_x,f_y,-1)去掉z方向的分量,\\即函数在此点沿(f_x,f_y)就是z增长率最大的方向,很容易理解$

$\displaystyle\frac{\partial f}{\partial l}_{(x_0,y_0)}=grad f(x_0,y_0)·\vec{e_l}=|grad f(x_0,y_0)|\cos\theta$

![](/images/tongji-calculus-8-10/image-20210521180716379.png)

θ=0：l与梯度方向相同（增长率最大方向）

θ=π/2：l垂直于梯度，变化率为0，

θ=π：l与梯度方向相反（下降率最大方向）





### 第八节 多元函数的极值及其求法

#### 一、多元函数的极值及最大值与最小值

<span style='color:blue;font-size:20px'>定理1（必要条件）：</span>$$设函数z=f(x,y)在点(x_0,y_0)具有偏导数，且在点(x_0,y_0)处有极值，则有\\f_x(x_0,y_0)=0,\qquad f_y(x_0,y_0)0=0$$

<span style='color:blue;font-size:20px'>定理2（充分条件）：</span>$$设函数z=f(x,y)在点(x_0,y_0)的某邻域内连续且有一阶及二阶连续偏导数，\\又f_x(x_0,y_0)=0,f_y(x_0,y_0)=0，令\\f_{xx}(x_0,y_0)=A,f_{xy}(x_0,y_0)=A,f_{yy}(x_0,y_0)=C\\则f(x,y)在(x_0,y_0)处是否取得极值的条件如下:\\(1)AC-B^2>0时具有极值，且当A<0时有极大值，当A>0时有极小值;\\(2)AC-B^2<0时没有极值\\(3)AC-B^2=0时不确定，暂时不讨论这种情况$$

如果个别点的偏导数不存在，也有可能是极值点，对这些点也应当考虑

#### 二、条件极值 拉格朗日乘数法

上面所讨论的极值问题，对于函数的自变量，除了限制在函数的定义域内以外，并无其他条件，所以有时称为**无条件极值**，但是实际问题中，有时会遇到对函数的自变量还有附加条件的极值问题，如求表面积为a^2而体积为最大的长方体的体积问题，这种对自变量有附加条件的极值称为**条件极值**，这种情况下就可以使用**拉格朗日乘数法**

[如何理解拉格朗日乘子法?](https://www.zhihu.com/question/38586401)

**case1：**$$函数:z=f(x,y)\qquad 约束条件:\varphi(x,y)=0\\引入辅助函数F=f(x,y)+\lambda\varphi(x,y)\\令\begin{cases}F_x=f_x+\lambda\varphi_x=0\\F_y=f_y+\lambda\varphi_y=0\\F_{\lambda}=\varphi(x,y)=0\end{cases}\\即可解出若干组x，y为可能极值点$$

**case2：**类似，三个自变量，两个约束条件，作辅助函数，使五个偏导等于0，解出x,y,z



<center><span style='color:blue;font-size:15px'>2021/5/24</span></center>

## 第十章 重积分

将和的极限的概念推广

### 第一节 二重积分的概念与性质

#### 一、二重积分的概念

1.曲顶柱体的体积

2.平面薄片的质量

<span style='color:red;font-size:20px'>定义：</span>$$设f(x,y)是有界闭区域D（xoy面上）上的有界函数，将闭区域D任意分成n个小闭区域\\\triangle\sigma_1,\triangle\sigma_2,...,\triangle\sigma_n,其中\triangle\sigma_i表示第i个小闭区域，也表示它的面积。\\\displaystyle在每个\triangle\sigma_i上任取一点(\xi_i,\eta_i),作\sum_{i=1}^n f(\xi_i,\eta_i)\triangle\sigma_i\\\displaystyle设\lambda为各个小闭区域中直径(闭区域中最远两点的距离)的最大值,\\若\displaystyle\lim_{\lambda\to 0}\sum_{i=1}^n f(\xi_i,\eta_i)\triangle\sigma_i存在\\则称此极限为f(x,y)在闭区域D上的二重积分，记作\\\displaystyle\mathop{\iint}\limits_Df(x,y)d\sigma=\lim_{\lambda\to 0}\sum_{i=1}^n f(\xi_i,\eta_i)\triangle\sigma_i\\如果在直角坐标系中用平行于坐标轴的直线网来划分D，可把二重积分记作\\\displaystyle\mathop{\iint}\limits_Df(x,y)dxdy$$

#### 二、二重积分的性质

<span style='color:sienna;font-size:20px'>性质1：</span>$\displaystyle\mathop{\iint}\limits_D[af(x,y)+bg(x,y)]d\sigma=a\mathop{\iint}\limits_Df(x,y)+b\mathop{\iint}\limits_Dg(x,y)$

<span style='color:sienna;font-size:20px'>性质2：</span>如果闭区域D被有限条曲线分为有限个部分闭区域，那么在D上的二重积分等于在各部分闭区域上的二重积分的和

<span style='color:sienna;font-size:20px'>性质3：</span>$\displaystyle\mathop{\iint}\limits_D1d\sigma=A（区域D的面积）$

<span style='color:sienna;font-size:20px'>性质4：</span>如果在D上，$f(x,y)\leq g(x.y)$，那么$\displaystyle\mathop{\iint}\limits_Df(x,y)d\sigma\leq\mathop{\iint}\limits_Dg(x,y)d\sigma$

<span style='color:sienna;font-size:20px'>性质5：</span>$\displaystyle|\mathop{\iint}\limits_Df(x,y)d\sigma|\leq\mathop{\iint}\limits_D|f(x,y)|d\sigma$

<span style='color:sienna;font-size:20px'>性质6（二重积分的中值定理）：</span>设函数f(x,y)在闭区域D上连续，则在D上至少存在一点$(\xi,\eta)$，使

$\displaystyle\mathop{\iint}\limits_Df(x,y)d\sigma=f(\xi,\eta)·A$





### 第二节 二重积分的计算法

本节介绍一种计算二重积分的方法，这种方法是把二重积分分化为两次单积分来计算

#### 一、利用直角坐标系计算二重积分

![](/images/tongji-calculus-8-10/image-20210524214946928.png)

Y型区域同理

#### 二、利用极坐标计算二重积分

可能的特征(需要使用的情况)

- 区域D的边界含有$x^2+y^2$
- f(x,y)含有$x^2+y^2$

![](/images/tongji-calculus-8-10/image-20210524223958287.png)

=$$\displaystyle\mathop{\iint}\limits_Df(x,y)d\sigma=\int^\beta _\alpha d\theta\int^{r_2(\theta)}_{r_1(\theta)}r·f(r\cos\theta,r\sin\theta)dr$$

 

<center><span style='color:blue;font-size:15px'>2021/5/25</span></center>

### 第三节 三重积分

#### 一、三重积分的概念

 定积分及二重积分作为和的极限的概念，可以很自然地推广到三重积分

积分域$\Omega$为空间有界闭区域

<span style='color:red;font-size:20px'>定义：</span>$$\displaystyle\mathop{\iiint}\limits_\Omega f(x,y,z)dv=\lim_{\lambda\to 0}\sum_{i=1}^n f(\xi_i,\eta_i,\zeta_i)\triangle v_i$$

#### 二、三重积分的计算

计算三重积分的基本方法是将三重积分化为三次积分来计算

**1.利用直角坐标计算三重积分**

**先单后重（铅直投影法）：**

$$\Omega=\{(x,y,z)|z_1(x,y)\leq z\leq z_2(x,y),(x,y)\in D_{xy}\}$$

$D_{xy}$为空间积分域在xoy平面上的投影

先对z做单积分，再做对xy的重积分

假如闭区域$D_{xy}=\{(x,y)|y_1(x)\leq y\leq y_2(x),a\leq x\leq b\}$

$$\displaystyle\mathop{\iiint}\limits_\Omega f(x,y,z)dv=\int^a_bdx\int^{y_2(x)}_{y_1(x)}dy\int^{z_2(x,y)}_{z_1(x,y)}f(x,y,z)dz$$

就把三重积分化为先对z，再对y，再对x的三次积分（先单后重）

**先重后单（切片法）：**

$$\Omega=\{(x,y,z)|(x,y)\in D_z，c\leq z\leq d\}$$

$D_z$是竖坐标为z的平面截闭区域$\Omega$所得到的一个平面闭区域

先对xy做重积分，再对z做定积分，有

$$\displaystyle\mathop{\iiint}\limits_\Omega f(x,y,z)dv=\int^d_cdz\mathop{\iint}\limits_{D_z} f(x,y,z)dxdy$$

**2.利用柱面坐标计算三重积分**

**其实就是先单后重，重的部分用极坐标形式**

可能的特征(需要使用的情况)

- 区域$\Omega$的边界含有$x^2+y^2$
- f(x,y,z)含有$x^2+y^2$

$$\Omega=\{(x,y,z)|z_1(x,y)\leq z\leq z_2(x,y),(x,y)\in D_{xy}\}$$

作变换$\begin{cases}x=\rho\cos\theta\\y=\rho\sin\theta\\z=z\end{cases},dv=\rho·d\rho d\theta dz$

![](/images/tongji-calculus-8-10/image-20210525163301667.png)

$$\displaystyle\mathop{\iiint}\limits_\Omega f(x,y,z)dv=\mathop{\iiint}\limits_\Omega f(\rho\cos\theta,\rho\sin\theta,z)\rho·d\rho d\theta dz$$

**3.利用球面坐标计算三重积分**

可能的特征(需要使用的情况)

- 区域$\Omega$的边界含有$x^2+y^2+z^2$
- f(x,y,z)含有$x^2+y^2+y^2$

作变换$\begin{cases}x=r\sin\varphi\cos\theta\\y=r\sin\varphi\sin\theta\\z=r\cos\varphi\end{cases},dv=r^2\sin\varphi ·drd\theta d\varphi$

![](/images/tongji-calculus-8-10/image-20210525171922874.png)

![](/images/tongji-calculus-8-10/image-20210525171518763.png)

$$\displaystyle\mathop{\iiint}\limits_\Omega f(x,y,z)dv=\mathop{\iiint}\limits_\Omega f(r\sin\varphi\cos\theta,r\sin\varphi\sin\theta,r\cos\varphi)r^2\sin\varphi·dr d\varphi d\theta$$





### 第四节 重积分的应用

#### 一、曲面的面积

设曲面的方程$z=f(x,y)$，则曲面上一点的法向量$\vec n$为$(-f_x,-f_y,1)(F=z-f(x,y)=0)$

$\displaystyle \cos \gamma=\frac{1}{\sqrt{1+f_x+f_y}},ds·\cos\gamma=d\sigma,ds=\sqrt{1+{f_x}^2+{f_y}^2}d\sigma$

$\displaystyle A=\mathop{\iint}\limits_Dds=\mathop{\iint}\limits_D \sqrt{1+{f_x}^2+{f_y}^2}d\sigma$

#### 二、质心

二维情况：

$\displaystyle\overline x=\frac{M_y}{M}=\frac{\mathop{\iint}\limits_D x\rho(x,y)d\sigma}{\mathop{\iint}\limits_D \rho(x,y)d\sigma}\qquad \overline y=\frac{M_x}{M}=\frac{\mathop{\iint}\limits_D y\rho(x,y)d\sigma}{\mathop{\iint}\limits_D \rho(x,y)d\sigma}$

三维情况同理

#### 三、转动惯量

二维情况：

$I=\mathop{\iint}\limits_D r^2\rho(x,y)d\sigma$

三维情况同理

#### 四、引力(一质点对一物体)

$F=G\frac{Mm}{r^2}$

可积分算出各坐标轴的分量
