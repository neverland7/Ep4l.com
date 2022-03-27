---
title: 线性代数
date: 2021-06-22 09:55:30
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/linear-algebra/linear-algebra.png
mathjax: true
summary: 考研线性代数
categories: 学习笔记
tags:
 - 数学
 - 线性代数
 - 考研
typora-root-url: ..
---

<center><span style='color:blue;font-size:15px'>2021/6/22</span></center>

## 第一章 行列式

### 第一节 全排列及其逆序数、对换

#### 一、全排列的定义

n个不同的元素排成一列， 叫做这n个元素的**全排列**，简称**排列**。

#### 二、排列的逆序数

对于n个不同的元素，规定各元素之间由小到大为**标准次序**。
<span style='color:red;font-size:20px'>定义：</span>当某两个元素的先后次序与标准次序不同时，就说有一个**逆序**，一个排列中所有逆序的总数叫做这个**排列的逆序数**。

**例：**12345为标准次序，t(12345)=0；32145有3个逆序数，t(32145)=3 

$\displaystyle t\left(n(n-1)(n-2)\cdots21\right)=n-1+n-2+\cdots+2+1=\frac{n(n-1)}{2}$

#### 三、排列的奇偶性

逆序数为奇数的排列称为奇排列；逆序数为偶数的排列称为偶排列

#### 四、对换

<span style='color:blue;font-size:20px'>定理：</span>一个排列中任意两个元素对换，排列改变奇偶性

<span style='color:green;font-size:20px'>推论：</span>奇排列对换成标准排列的对换次数为奇数，偶排列对换成标准排列的对换次数为偶数





### 第二节 行列式的定义

#### 一、二元线性方程组

**例1：**用消元法解二元线性方程组

$$\begin{cases}
a_{11} x_{1}+a_{12} x_{2}=b_{1}\qquad (1) \\
a_{21} x_{1}+a_{22} x_{2}=b_{2}\qquad (2)
\end{cases}\\
(1) \times a_{22}: a_{11} a_{22} x_{1}+a_{12} a_{22} x_{2}=b_{1} a_{22}\\
(2) \times a_{12}: a_{11} a_{21} x_{1}+a_{12} a_{22} x_{2}=b_{2} a_{12}$$

两式相减消去$x_2$，得

$$(a_{11}a_{22}-a_{12}a_{21}x_1)=b_1a_{22}-a_{12}b_2$$

类似地，消去$x_1$，得

$$(a_{11}a_{22}-a_{12}a_{21}x_2)=b_2a_{11}-a_{21}b_1$$

当$$a_{11} a_{22}-a_{12} a_{21} \neq 0$$ 时，方程组的解为
$$\displaystyle x_{1}=\frac{b_{1} a_{22}-a_{12} b_{2}}{a_{11} a_{22}-a_{12} a_{21}}, \quad x_{2}=\frac{a_{11} b_{2}-b_{1} a_{21}}{a_{11} a_{22}-a_{12} a_{21}}$$

#### 二、二阶行列式

<span style='color:red;font-size:20px'>定义：</span>$$\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21}$$（行列式是一个**数**）

利用二阶行列式的概念，二元线性方程组的解也可写成二阶行列式，即

记$$D=\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=a_{11} a_{22}-a_{12} a_{21}\quad \\D_1=\begin{vmatrix}b_{1}&a_{12}\\b_{2}&a_{22}\end{vmatrix}=b_{1} a_{22}-a_{12} b_{2}\\D_2=\begin{vmatrix}a_{11}&b_{1}\\a_{21}&b_{2}\end{vmatrix}=a_{11} b_{2}-b_{1} a_{21}$$

那么行列式的解可写作$$\displaystyle x_1=\frac{D_1}{D},x_2=\frac{D_2}{D}$$

**注意：**分子分母都为原方程组的系数构成的行列式

#### 三、三阶行列式

<span style='color:red;font-size:20px'>定义：</span>$$\begin{vmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{vmatrix}=a_{11} a_{22} a_{33}+a_{12} a_{23} a_{31}+a_{13} a_{21} a_{32}-a_{11} a_{23} a_{32}-a_{12} a_{21} a_{33}-a_{13} a_{22} a_{31},$$

三元线性方程组的解问题也同理





### 第三节 n阶行列式的定义

$a_{xy}$的第一个下标称为行标，第二个下标称为列标，在行列式的每一项中，所有元素都处在不同的行，不同的列

**列标**的排列为偶排列时的项为正号，列标的排列为奇排列时的项为负号，因此各项的正负号可以表示为$(-1)^t$

二阶：$$\begin{vmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{vmatrix}=\sum(-1)^{t\left(p_{1} p_{2}\right)} a_{1 p_{1}} a_{2 p_{2}} $$，共有两项

三阶：$$\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}=\sum(-1)^{t\left(p_{1} p_{2} p_{3}\right)} a_{1 p_{1}} a_{2 p_{2}} a_{3 p_{3}}$$，共有六项

n阶的行列式有n!项

**例：**已知$$a_{23}a_{31}a_{42}a_{65}a_{56}a_{14}$$是六阶行列式中的一项，试确定该项所带符号

解：$$a_{23}a_{31}a_{42}a_{65}a_{56}a_{14}=a_{14}a_{23}a_{31}a_{42}a_{56}a_{65}$$

t(431265)=6，所以该项带正号

**notes:**

1. 行列式结果是一个数
2. 当n=1时，竖杠不用写，直接写$a_{11}$，与绝对值分开
3. 二阶、三阶行列式有对角线法则，四阶及四阶以上的行列式没有对角线法则

主对角线以下（上）的元素都为0的行列式叫做**上（下）三角行列式**
主对角线以下和以上的元素都为0的行列式叫做**对角行列式**
三角行列式和对角行列式的值都是主对角线的元素相乘

#### 小结

n阶行列式共有n!项，每项都是位于不同行、不同列的n个元素的乘积组成，正负号由下标排列的逆序数决定。





### 第四节 行列式的性质

<span style='color:sienna;font-size:20px'>性质1：</span>行列式和它的转置行列式相等（行列式对行有的性质对列也有）

<span style='color:sienna;font-size:20px'>性质2：</span>对换行列式的两行（列），行列式变号（$r_i\leftrightarrow r_j$)

<span style='color:green;font-size:20px'>推论：</span>如果行列式有两行（列）完全相同，则此行列式等于零

<span style='color:sienna;font-size:20px'>性质3：</span>行列式的某一行（列）中的所有元素都乘同一数k，等于用数k乘此行列式（$r_i\times k$)

<span style='color:green;font-size:20px'>推论：</span>行列式中某一行（列)中的元素的公因子可以提到行列式记号的外面

<span style='color:sienna;font-size:20px'>性质4：</span>行列式中如果有两行（列）元素成比例，则此行列式等于零

<span style='color:sienna;font-size:20px'>性质5：</span>若行列式中某一行(列)元素均为两数之和，则行列式可按照该行分拆成两个行列式之和，其他各行保持不变(每次只能按照一行或者一列分拆)

<span style='color:sienna;font-size:20px'>性质6：</span>把行列式的某一行(列)的各元素乘以同一数然后加到另一行(列)对应的元素上去，行列式值不变（$r_i+kr_j$）

**计算行列式常用的方法一：**任一n阶行列式均可以只经过行(列)变换化为上(下)三角形行列式

  **note：**若各行元素之和相同，则可将各列加到第一列提取公因子再造零



### 第五节 行列式按行（列）展开

一般来说，低阶行列式的计算比高阶行列式的计算要简便，我们先引进余子式和代数余子式的概念

#### 一、余子式和代数余子式的定义

**余子式：**$$在n阶行列式中，划去元素a_{ij}所在的第i行和第j列，余下元素保持原来位置组成一个n-1阶行列式，\\称为元素a_{ij}的余子式，记为M_{ij}$$

**代数余子式：**$$A_{ij}=(-1)^{i+j}M_{ij}$$

**note：**$$A_{ij}与a_{ij}的数值无关，与a_{ij}的位置有关$$

#### 二、有关定理、范德蒙德行列式

<span style='color:blue;font-size:20px'>引理：</span>$$一个n阶行列式，如果其中第i行所有元素除a_{ij}外都为零，那么这个行列式等于a_{ij}与它的代数余子式的乘积，\\即D=a_{ij}A_{ij}$$

<span style='color:blue;font-size:20px'>定理（拉普拉斯定理）：</span>行列式D等于它任一行(列)的各个元素与其代数余子式的乘积之和（行列式按行（列）展开定理）

<span style='color:green;font-size:20px'>推论：</span>$$a_{i1}A_{j1}+a_{i2}A_{j2}+\cdots+a_{in}A_{jn}=\begin{cases}0\qquad(i\neq j)\\D\qquad(i=j)\end{cases}$$

**note：**展开时尽量划边，让余子式易于辨认

**计算行列式常用的方法二：**利用性质将行列式D化为某行(某列)只有一个非零元素，然后按该行(列)将行列式展开

**范德蒙德行列式：**$$\displaystyle\begin{vmatrix}
1 & 1 & 1 & \cdots & 1 \\
x_{1} & x_{2} & x_{3} & \cdots & x_{n} \\
x_{1}^{2} & x_{2}^{2} & x_{3}^{2} & \cdots & x_{n}^{2} \\
\cdots & \cdots & \cdots &  & \cdots \\
x_{1}^{n-2} & x_{2}^{n-2} & x_{3}^{n-2} & \cdots & x_{n}^{n-2} \\
x_{1}^{n-1} & x_{2}^{n-1} & x_{3}^{n-1} & \cdots & x_{n}^{n-1}
\end{vmatrix}=\prod_{n \geq i>j \geq 1}(x_{i}-x_{j})$$

特点：第一行都为1；每列等比；$x_i、x_j$为第二行元素，共有n-1+n-2+···+1=$\displaystyle \frac{n(n-1)}{2}$项

**计算行列式常用的方法三：**递推法（建立$$D_n与D_{n-1}$$之间的关系式）

**note：**三对角线形可用递推法



<center><span style='color:blue;font-size:15px'>2021/6/29</span></center>

## 第二章 矩阵及其运算

### 第一节 线性方程组和矩阵

$$\begin{cases} 2 x_{1}-x_{2}-x_{3}+x_{4}=2 \\ x_{1}+x_{2}-2 x_{3}+x_{4}=4\\ 4 x_{1}-6 x_{2}+2 x_{3}-2 x_{4}=4 \end{cases} \quad \Leftrightarrow \quad\begin{pmatrix} 2 & -1 & -1 & 1 & |2 \\ 1 & 1 & -2 & 1 & |4 \\ 4 & -6 & 2 & -2 & |4\end{pmatrix}$$
线性方程组与矩阵的对应关系：
上述的有序数表完全确定了原线性方程组, 对它的研究可以判断方程组的解的情况。

#### 一、线性方程组

称$$\begin{cases} a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\ a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\ \cdots\qquad\cdots\qquad\cdots\qquad\cdots\\a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n =b_m\end{cases}$$为**n元非齐次线性方程组**；当b全为0时，称为**n元齐次线性方程组**

#### 二、矩阵的定义

<span style='color:red;font-size:20px'>定义：</span>由$m\times n$个数$a_{ij}$（i=1,2,···,m；j=1,2,···,n）排成的m行n列的**数表**称为m行n列矩阵，

记作$$A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}$$

行数和列数都等于n的矩阵称为**n阶矩阵**或**n阶方阵**，记作$A_n$

只有一行的矩阵称为**行矩阵**或者**行向量**；只有一列的矩阵称为**列矩阵**或者**列向量**

两个行数、列数相等的矩阵称为**同型矩阵**；若同型矩阵的每个对应元素都相等，则称这两个**矩阵相等**，记作A=B

元素都是零的矩阵称为**零矩阵**，记作O，不同型的零矩阵是不同的

称$$\begin{cases} y_1=a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n\\ y_2=a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n\\ \cdots\qquad\cdots\qquad\cdots\qquad\cdots\\y_m=a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n \end{cases}$$为由$x_1,x_2,\cdots,x_n$到$y_1,y_2,\cdots,y_n$的**线性变换**，A是线性变换的矩阵



### 第二节 矩阵的运算

#### 一、矩阵的加法

同型矩阵才能进行加法运算

#### 二、数与矩阵相乘

数乘=遍乘

#### 三、矩阵与矩阵相乘

有$$A_{m\times n}B_{n\times s}=C_{ms}$$

矩阵的乘法不满足交换律，即在一般情况下$AB\neq BA$；

若$AB=BA$，则称方阵A和B是**可交换的**；（对角矩阵可交换）

若两个矩阵A、B满足AB=0，不能得出A=0或B=0的结论；若A$\neq $0而A(X-Y)=O，也不能得出X=Y的结论

EA=AE=A（可见单位矩阵E在矩阵乘法中的作用类似于数1  ）

引入矩阵乘法的目的是进行线性变换的合成（$y=Ax，x=Bz\Rightarrow y=A(Bz)=(AB)z$）

矩阵的幂：$A^k$就是k个A连乘，显然只有方阵的幂才有意义

当$AB\neq BA$时，$(AB)^k\neq A^kB^k、(A+B)^2\neq A^2+2AB+B^2、(A+B)(A-B)\neq A^2-B^2$

**好求方幂的矩阵：**（1）一列乘一行（2）严格上三角矩阵（3）对角阵

#### 四、矩阵的转置

1. <span style='color:red;font-size:20px'>定义：</span>把矩阵A的行换成同序数的列得到的新矩阵，叫作A的转置矩阵，记作$A^T$

2. 转置矩阵满足的运算规律：

   (1)$(A^T)^T=A$

   (2)$(A\pm B)^T=A^T\pm B^T$

   (3)$(\lambda A^T)=\lambda A^T$

   (4)$(AB)^T=B^TA^T$

**note1：**若$A^T=A$，称A为对称矩阵；若$A^T=-A$，称A为反对称矩阵

$\displaystyle A=\frac{A+A^T}{2}（对称矩阵）+\frac{A-A^T}{2}（反对称矩阵）$

所以任意一个方阵一定可以写成一个对称矩阵和一个反对称矩阵之和

**note2：**A为$m\times n$型，则$A^T$为$n\times m$型；$AA^T$，$A^TA$分别为m，n阶方阵且为对称矩阵

**note3：**$\alpha=(a_1,a_2,\cdots,a_n)^T,\alpha^T=(a_1,a_2,\cdots,a_n)$

$\alpha^T\alpha=a_1^2+a_2^2+\cdots+a_n^2\geq0;\alpha^T\alpha=0\Leftrightarrow \alpha=0$（**一行乘一列为数**）

$\alpha\alpha^T=\begin{pmatrix}a_1^2&a_1a_2&\cdots&a_1a_n\\a_2a_1&a_2^2&\cdots&a_2a_n\\\cdots&\cdots&&\cdots\\a_na_1&a_na_2&\cdots&a_n^2\end{pmatrix};\alpha\alpha^T=0\Leftrightarrow \alpha=0$（**一列乘一行为矩阵**）

#### 五、方阵的行列式

1.  <span style='color:red;font-size:20px'>定义：</span>由n阶**方阵**A的元素所构成的行列式（各元素的位置不变），称为方阵A的行列式，记号|A|或detA

2. 性质：设A、B为n阶方阵，则有

   （1）$|A^T|=|A|$（$(A+E)^T=A^T+E\Rightarrow|A+E|=|A^T+E|$）

   （2）$|\lambda A|=\lambda^n|A|$

   （3）$|AB|=|A||B|=|B||A|=|BA|$（$AB\neq BA$）

   **note1：**$AB=0\not\Rightarrow A=0或B=0$

   $\qquad AB=0\Rightarrow |A|=0或|B|=0$

   **note2：**如果A，B不是方阵，则$|AB|\neq |BA|$

   **note3：**$|A+B|\neq|A|+|B|$

#### 六、方阵的伴随矩阵

<span style='color:red;font-size:20px'>定义：</span>$$A=(a_{i j})_{n}，A_{i j} 为|A|中 a_{i j}$$的代数余子式，记 

$$A^{*}=\begin{pmatrix}
A_{11} & A_{21} & \cdots & A_{n 1} \\
A_{12} & A_{22} & \cdots & A_{n 2} \\
& \cdots & \cdots & \\
A_{1 n} & A_{2 n} & \cdots & A_{n n}
\end{pmatrix}$$

称A*为A的伴随矩阵（注意下标！）

**note：**二阶矩阵求伴随阵口诀：主对调，副变号；二阶矩阵(A\*)\*=A​

**性质：**$AA^*=A^*A=|A|E$

($$AA^*=|A|E\Rightarrow|A||A^*|=||A|E|=|A|^n\Rightarrow|A^*|=|A|^{n-1}$$)



<center><span style='color:blue;font-size:15px'>2021/6/30</span></center>

### 第三节 逆矩阵

<span style='color:red;font-size:20px'>定义：</span>设A是n阶方阵，如果有一个n阶方阵B，使AB=BA=E，则说A是可逆的，并把B称为A的逆矩阵，简称逆阵。记为$A^{-1}$，读作A逆。

n阶方阵A可逆的充要条件是$|A|\neq0$，当A可逆时，$$A^{-1}=\frac{1}{|A|}A^*(|A|=0\Leftrightarrow |A^*|=0)$$ 

**note：**伴随求逆，二阶最方便，三阶还可以，四阶五阶太麻烦，不可取

**推论**：若AB=E（或BA=E），则$B=A^{-1}$

若$|A|=0$，则称A为**奇异矩阵**（退化矩阵）(不可逆)；若$|A|\neq 0$，则称A为**非奇异矩阵**（非退化矩阵）(可逆)

**方阵A的逆矩阵的求法：**

（1）利用公式$$A^{-1}=\frac{1}{|A|}A^*$$（适用于二阶、三阶矩阵求逆）（$A^*=|A|A^{-1}$）

（2）寻找方阵B，使得AB=E（适用于抽象矩阵求逆）

（3）利用矩阵的初等变换求逆矩阵（后面讲）

**例：**设方阵A满足方程$A^2-A-2E=0$，证明A，A+2E都可逆，并求它们的逆矩阵

证：$$(1)由A^2-A-2E=0\\得A(A-E)=2E\Rightarrow A\frac{A-E}{2}=E\\所以A可逆，且A^{-1}=\frac 1 2(A-E)\\(2)由A^2-A-2E=0\\得(A+2E)(A-3E)+4E=0\\(A+2E[-\frac 1 4(A-3E)])=E\\所以A+2E可逆，且(A+2E)^{-1}=-\frac 1 4(A-3E)$$

**逆矩阵满足以下运算规律：**

（1）$若A可逆，则A^{-1}也可逆，且(A^{-1})^{-1}=A$

（2）$若A可逆，数\lambda\neq0，则\lambda A也可逆，且(\lambda A)^{-1}=\frac 1\lambda A^{-1}$

（3）$若A，B为同阶方阵且均可逆，则AB亦可逆，且（AB)^{-1}=B^{-1}A^{-1}$

（4）$若A可逆，则A^T也可逆，且(A^T)^{-1}=(A^{-1})^T$

（5）$若A可逆，则|A^{-1}|=|A|^{-1}$

**note：**$(A+B)^{-1}\neq A^{-1}+B^{-1}$

**伴随矩阵的性质：**

（1）$|A^*|=|A|^{n-1}$

（2）$$(kA)^*=K^{n-1}A^*$$

（3）$$(A^*)^T=(A^T)^*$$

（4）$$(A^*)^{-1}=(A^{-1})^*=\frac A {|A|}$$（假设A可逆）

（5）设A为n阶可逆阵，则$$(A^*)^*=|A|^{n-2}A，当n=2时，(A^*)^*=A$$

（6）设A，B均为可逆矩阵，则$$(AB)^*=B^*A^*$$

| 转置                    | 逆$（AA^{-1}=E)$                                  | 伴随$(A^{-1}=\frac{1}{\vert A\vert }A^*)$ |
| ----------------------- | ------------------------------------------------- | ----------------------------------------- |
| $(A^T)^T$=A             | $(A^{-1})^{-1}=A$                                 | $$(A^*)^*=\vert A\vert ^{n-2}A$$          |
| $(kA)^T=kA^T$           | $(kA)^{-1}=\frac 1 k A^{-1}$                      | $$(kA)^*=k^{n-1}A^*$$                     |
| $(AB)^T=B^TA^T$         | $(AB)^{-1}=B^{-1}A^{-1}$                          | $$(AB)^*=B^*A^*$$                         |
| $(A+B)^T=A^T+B^T$       | 无                                                | 无                                        |
| $(A^T)^{-1}=(A^{-1})^T$ | $$(A^{-1})^*=(A^*)^{-1}=\frac{A}{\vert A\vert }$$ | $$(A^*)^T=(A^T)^*$$                       |

### 第四节 克拉默法则

**克拉默法则：**如果一个（方程个数和未知数个数相同的）非齐次线性方程组的系数矩阵A的行列式不等于零，那么，方程组有唯一解$x_n=\frac{|A_n|}{A}$

**notes：**

（1）如果线性方程组系数行列式D≠0，则有解，且解唯一；若系数行列式为零，则解不唯一或无解 。

（2）Cramer法则仅用于未知数个数与方程个数相同的情况。

**推论：**若**齐次**线性方程组的系数行列式D≠0，则方程组只有零解

**notes：**

（1）齐次方程组一定有解

（2）若齐次线性方程组有非零解，则D=0

### 第五节 矩阵分块法

<span style='color:red;font-size:20px'>定义：</span>将矩阵A用若干条纵线和若干条横线分成许多个小矩阵，每一个小矩阵称为A的子块，以子块为元素的形式上的矩阵称为分块矩阵

**分块矩阵的运算：**

（1）设矩阵A与B的行数相同，列数相同，采用同样的分块法，那么**加减法**与矩阵加减法类似

（2）数乘=遍乘

（3）$$A=\left(\begin{array}{ccc}
A_{11} & \cdots & A_{1 t} \\
\vdots & & \vdots \\
A_{s 1} & \cdots & A_{s t}
\end{array}\right), \quad B=\left(\begin{array}{ccc}
B_{11} & \cdots & B_{1 r} \\
\vdots & & \vdots \\
B_{t 1} & \cdots & B_{t r}
\end{array}\right)\\其中 A_{i 1}, A_{i 2}, \cdots A_{i t} 的列数分别等于 B_{1 j}, B_{2 j}, \cdots B_{t j} 的行数。\\A B=\left(\begin{array}{ccc}
C_{11} & \cdots & C_{1 r} \\
\vdots & & \vdots \\
C_{s 1} & \cdots & C_{s r}
\end{array}\right)\\其中 \displaystyle C_{i j}=\sum_{k=1}^{t} A_{i k} B_{k j} \quad(i=1, \cdots s ; j=1, \cdots, r)$$

（4）转置：行列交换，同时每个小子块发生转置（公转且自转）

**notes：**

1.乘法要保证有意义

2.按普通矩阵一样乘

**分块对角矩阵：**设$$A=\begin{pmatrix}B&0\\0&C\end{pmatrix}$$，其中B，C均为方阵，则

（1）$$|A|=|B||C|$$

（2）$$A^n=\begin{pmatrix}B^n&0\\0&C^n\end{pmatrix}$$

（3）A可逆的充分必要条件为B，C均可逆，且$$A^{-1}=\begin{pmatrix}B^{-1}&0\\0&C^{-1}\end{pmatrix}(注意:\begin{pmatrix}0&B\\C&0\end{pmatrix}^{-1}=\begin{pmatrix}0&C^{-1}\\B^{-1}&0\end{pmatrix})$$

（4）$$A^*=|A|A^{-1}=|B||C|\begin{pmatrix}B^{-1}&0\\0&C^{-1}\end{pmatrix}=\begin{pmatrix}|C|B^*&0\\0&|B|C^*\end{pmatrix}$$



<center><span style='color:blue;font-size:15px'>2021/7/2</span></center>

## 第三章 矩阵的初等变换和线性方程组

### 第一节 矩阵的初等变换

消元法解线性方程组的三种同解变换：

（1）一个方程加到另一个方程

（2）非零数乘某个方程

（3）互换两个方程的位置

在上述变换过程中，实际上只对方程组的系数和常数进行运算，未知数并未参与运算，因此，对方程组的变换可以完全转换为对它的**增广矩阵**的变换

<span style='color:red;font-size:20px'>定义：（初等行变换）</span>

（1）对调两行（$r_i\leftrightarrow r_j$）

（2）以数k≠0乘某一行中所有元素（$r_i\times k$）

（3）某行所有元素k倍加到另一行对应元素上去（$r_i+kr_j$）

把行换成列，即得到矩阵的**初等列变换**的定义；矩阵的初等行变换和初等列变换，统称为**初等变换**

**note：**解方程组不可以用列变换

**矩阵的等价关系：**如果矩阵A结果有限次（初等行变换\初等列变换\初等变换）变成矩阵B，就称矩阵A与B（行等价\列等价\等价），记作（$ A\overset{r}\sim B\setminus A\overset{c}\sim B\setminus A\sim B$）

**行阶梯形矩阵：**(经过**初等行变换**)
（1）可以画一条阶梯线，线的下方全为零;
（2）每个台阶只占一行，阶梯竖线右边第一个元素非零。
**行最简形矩阵：**在行阶梯形中，经过**初等行变换**化为
（3） 每个非零行的首非零元素全为1,
（4）每个非零行的首非零元素所在列的其他元素为0。
**标准形：**
在行最简形矩阵中，再经过有限次**初等列变换**可变成$$F=\begin{pmatrix}E_r&O\\O&O\end{pmatrix}$$

<span style='color:red;font-size:20px'>定义：（初等矩阵）</span>由单位矩阵E经过一次初等变换得到的矩阵称为**初等矩阵**。

三种初等变换对应有三种初等矩阵

（1）对换阵（$E\overset{r_i\leftrightarrow r_j}\longrightarrow E(i,j)$）

（2）数乘阵（$E\overset{r_i\times k}\longrightarrow E(i(k))$）

（3）倍加阵（$E\overset{r_i+k r_j}\longrightarrow E(ij(k))$）

**性质（行左列右）：**对$A_{m\times n}$施行一次初等行(列)变换就相当于在 A的左(右)乘以一个相应的m(n)阶初等矩阵。

**定理：**初等矩阵均可逆，且其逆仍然是同类型的初等矩阵，

且$$(E(ij))^{-1}=E(ij)\quad[E(ij)E(ij)=E]\\(E(i(k)))^{-1}=E(i(\frac 1 k))\quad[E(i(\frac 1 k))E(i(k))=E]\\(E(ij(k)))^{-1=}E(ij(-k))\quad [E(ij(-k))E(ij(k))=E]$$

**推论1：**方阵A可逆的充分必要条件是A通过初等行变换得到E

**推论2：**A可逆的充分必要条件是存在有限个初等矩阵$P_1,P_2,\cdots,P_l$使得$A= P_1P_2\cdots P_l$

**推论3：** $$A_{m\times n}通过有限次初等变换得到B_{m\times n}的充分必要条件是存在可逆阵P_{m\times n},Q_{m\times n,}使得PAQ=B$$

**利用初等行变换求逆矩阵的方法：**$(A|E)\overset{初等行变换}\longrightarrow (E|A^{-1})$(从上往下化成上三角，再重下往上化成对角，再每一行乘上倒数)

**利用初等行变换解矩阵方程AX=B的步骤：**$(A|B)\overset{初等行变换}\longrightarrow (E|A^{-1}B)=(E|X)$



### 第二节 矩阵的秩

<span style='color:red;font-size:20px'>定义：（子式）</span>$$在A_{m\times n}中，任取k行与k列(k≤m,k≤n),位于这些行列交叉处的k^2个元素，\\不改变它们在A中所处的位置次序而得的k阶行列式称为矩阵A的一个k阶子式。(k阶子式共有C^k_m\times C^k_n个)$$

**notes：**

（1）$A_{m\times n}$的每一个元素都是其的一阶子式，共m×n个

（2）若A为n阶方阵，|A|为A的唯一的n阶子式， |A|中每个元素的余子式为A的n-1阶子式， 共$n^2$个。

（3）若矩阵A中所有k阶子式都为零，则高于k阶的子式（若有）都为零。

<span style='color:red;font-size:20px'>定义：（矩阵的秩）</span>若矩阵A中有一个不等于0的r阶子式D，且所有r+1阶子式全等于0，则称D为A的最高阶非零子式，r称为A的秩，记作R(A)或者r(A)。规定零矩阵的秩为零。**R(A)即为A的最高阶非零子式的阶数**。（rank)

**notes：**

（1）R(A)≥r⇔A中至少有一个r阶子式不为零；R(A)<r+1⇔A中所有r+1阶子式等于零

（2）对于n阶方阵A，|A|≠0⇔R(A)=n,称A是满秩的；|A|=0⇔R(A)<n,称A是降秩的。

（3）行阶梯型矩阵的秩等于非零行的行数

**定理1：**若A~B，则R(A)= R(B)

**求矩阵秩R(A)的方法：**利用初等(行)变换将矩阵A化为阶梯形；此阶梯形矩阵中非零行的行数即为矩阵的秩R(A)

**秩的性质与结论（部分）：**

**（1）**$0≤R(A_{m\times n})≤\min\{m,n\}$

（2）$R(A^T)=R(A)=R(AA^T)=R(A^TA))$

（3）若A~B，则R(A)=R(B)；反之，若A，B同型，且R(A)=R(B)，则A，B等价

（4）若P，Q可逆，则R(PAQ)=R(A)

**（5）**R(A|B)≥R(A)；R(A|B)≥R(B)

**（6）R(A+B)≤**R(A+B|B)= R(A|B)≤**R(A)+R(B)**

**（7）**R(AB)≤R(A)；R(AB)≤R(B)；若B可逆，则R(AB)=R(A)

**（8）**$$若A_{m\times n}B_{n\times s}=0,则R(A)+R(B)≤n$$

**例：**设A为n阶方阵，证明：$$R(A^*)=\begin{cases}n,若R(A)=n\\1,若R(A)=n-1\\0,若R(A)<n-1\end{cases}$$

证：$$AA^*=A^*A=|A|E,|A^*|=|A|^{n-1},A^*中的元素是A的代数余子式(n-1阶子式)\\当R(A)=n时,|A|\neq 0,|A^*|\neq 0,R(A^*)=n\\当R(A)<n-1时,A的余子式均为0,A^*为零矩阵\\当R(A)=n-1时,AA^*=|A|E=0\Rightarrow R(A)+R(A^*)\leq n \Rightarrow R(A^*)\leq 1\\又因为A至少有一个n-1阶子式不为0,所以A^*不是零矩阵,所以R(A^*)\geq 1$$

一个n阶矩阵的秩可能是0到n，不过一个n阶矩阵的伴随的秩只可能是n，1，0



<center><span style='color:blue;font-size:15px'>2021/7/3</span></center>

### 第三节 线性方程组的解

#### 一、非齐次线性方程组

**定理：**对于线性方程组$A_{m\times n}x=b$

（1）无解⇔R(A)<R(A,b)；（R(A,b)=R(A)+1）

（2）有唯一解⇔R(A)=(A,b)=n；

（3）有无穷多解⇔R(A)=R(A,b)<n；

**推论：**线性方程组$A_{m\times n}x=b$有解⇔R(A)=R(A,b)

当线性方程组$$A_{m\times n}x=b$$有**无穷多解**时，其所有解的共同表达式称为线性方程组$A_{m\times n}x=b$的**通解**或**一般解**

特别的，对于方阵$A_n,A_nx=b$有唯一解⇔$|A_n|≠0$（参见克拉默法则）；若|A|=0，可能无解或无穷多解

**求解Ax=b的方法：**

（1）写出增广矩阵(A,b)
（2）利用**初等行变换**将其化为**行阶梯形**，判断R(A)=R(A,b)，从而确定线性方程组是否有解
（3）如果线性方程组有解，就继续将(A,b)化为**行最简形**
（4）从行最简形写回线性方程组，并将每个首非零元素对应的变量放在等号的左边，其余变量（称为**自由末知量**）移到等号的右边
（5）添加方程$x_i= x_i$，其中xi为每个自由未知量
（6）将自由未知量xi换成c1，c2等，写出线性方程组的解或通解

#### 二、齐次线性方程组

（1）只有零解（有唯一解）⇔R(A)=n；

（2）有非零解（有无穷多解）⇔R(A)<n；

**推论1：（方阵情况）**（只有方阵才能谈行列式）

（1）$A_nx=0$只有零解⇔|A|≠0

（2）$A_nx=0$有非零解⇔|A|=0

**推论2：**方程的个数小于未知数个数，则一定有非零解。



<center><span style='color:blue;font-size:15px'>2021/7/4</span></center>

## 第四章 向量组的线性相关性

### 第一节 向量组及其线性组合 

#### 一、向量

1. <span style='color:red;font-size:20px'>定义1</span>称$\begin{pmatrix}a_1\\a_2\\\vdots\\a_n\end{pmatrix}$为n维列向量，其中ai称为第i个分量。$(b_1,b_2,\cdots,b_n)$为n维行向量

   **note：**列向量用$\alpha,\beta,\gamma,\cdots$表示，行向量用$\alpha^T,\beta^T,\gamma^T,\cdots$表示；

2. 向量的线性运算（加减法、数乘）

3. **向量组：**若干个**同维数**的行（列）向量所组成的集合；

4. 向量组和矩阵的关系（含有有限个向量的有序向量组可以与矩阵一一对应）（第二章已经介绍）

5. 方程组的向量表示（第二章已经介绍）

   $$\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}=\begin{pmatrix}b_1\\b_2\\\vdots\\b_n\end{pmatrix}\Leftrightarrow(\alpha_1,\alpha_1,\cdots,\alpha_n)\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}=\beta\Leftrightarrow x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n=\beta$$

#### 二、向量组的线性表示（以列向量为对象）（与非齐有关 Ax=B)

1. <span style='color:red;font-size:20px'>定义2：</span>设向量组A：$α_1,α_2,\cdots,α_m$以及任意一组实数$k_1,k_2,\cdots,k_m$，称$k_1α_1+k_2α_1+\cdots+k_mα_m$为向量组A的一个线性组合

   **note：**零向量可写成任意同维数向量的线性组合

2. <span style='color:red;font-size:20px'>定义3：</span>给定向量组A，如果存在一组数k使得$\beta=k_1α_1+k_2α_1+\cdots+k_mα_m$，则称向量b能由向量组A线性表示

   **定理1：**$$向量β能由向量组A线性表示\\⇔线性方程组x_1α_1+x_2α_1+\cdots+x_mα_m=\beta，即Ax=\beta有解\\⇔R(α_1,α_2,\cdots,α_m)=R(α_1,α_2,\cdots,α_m,\beta)，即R(A)=R(A,B)$$

#### 三、向量组的等价

<span style='color:red;font-size:20px'>定义4：</span>若向量组B中的每个向量都能由A中的向量线性表示，则称**向量组B能由向量组A线性表示**；若向量组A和向量组B能相互线性表示，则称这两个向量组**等价**

**note：**矩阵等价与向量组等价有区别：向量组等价不能确定向量组构成的矩阵等价；矩阵等价不能确定其行(列)向量组等价

![](/images/linear-algebra/image-20210704205828955.png)

![](/images/linear-algebra/image-20210704210041624.png)

**note2：**由上可知若AB=C，则

（1）C的列向量可由A的列向量线性表示（A<span style='color:blue'>B</span>=C)（表示的系数为B的列元素）

（1）C的行向量可由B的行向量线性表示（<span style='color:blue'>A</span>B=C)（表示的系数为A的行元素）

**note3：**矩阵A经初等行变换变成矩阵B，则A的行向量组与B的行向量组等价。但是列向量组未必等价。同理，矩阵A经初等列变换变成矩阵B，则A的列向量组与B的列向量组等价。但是行向量组未必等价。

**推论：**列向量组A与列向量组B等价$\Leftrightarrow R(A)=R(B)=R(A,B)$（三秩相等即等价）

**定理1：**向量组B能由向量组A线性表示，则R(B)=R(AK)≤R(A)



<center><span style='color:blue;font-size:15px'>2021/7/5</span></center>

### 第二节 向量组的线性相关性（与齐次有关 Ax=0）

#### 一、定义

<span style='color:red;font-size:20px'>定义：</span>给定向量组A:$a_1,a_2,\cdots,a_m$，如果存在**不全为零**的数$k_1,k_2,\cdots,k_m$，使得$k_1α_1+k_2α_1+\cdots+k_mα_m=0$，则称向量组A**线性相关**，否则称它**线性无关**（齐次线性方程组只有零解）。

**note：**线性相关的充分条件（1）有零向量（2）有两个向量成比例（3）有一个可以由其余向量表示（充要）

**note1：**线性相关无关的**直观意义**

（1）α线性相关⇔α=0；α线性无关⇔α≠0；

（2）$α_1,a_2$线性相关⇔$α_1,a_2$成比例（或平行）；$α_1,a_2$线性无关⇔$α_1,a_2$不成比例（或不平行）

（3）$α_1,a_2,a_3$线性相关⇔$α_1,a_2,a_3$共面；$α_1,a_2,a_3$线性无关⇔$α_1,a_2,a_3$不共面；

#### 二、相关定理（相关结论）

（1）向量组A线性相关⇔A中至少有一个向量可由其余向量线性表示

（2）向量组中含有零向量，则该向量组线性相关

**定理1：**

（1）向量组A线性相关⇔线性方程组Ax=0有非零解⇔A的秩小于m（向量的个数）

（2）向量组A线性无关⇔线性方程组Ax=0只有零解⇔A的秩等于m

**note：**判断相关无关，只要将向量组构成矩阵A，比较R(A)与向量个数之间的关系

**note1：**$$设n维向量组α_1,a_2,\cdots,α_s线性无关，且(β_1,β_2,\cdots,β_s)=(α_1,a_2,\cdots,α_s)k_{s\times s},\\则(β_1,β_2,\cdots,β_s)线性无关⇔k_{s\times s}≠0(可逆\Rightarrow A与B的秩相等)$$

**定理2：**

（1）$$若α_1,a_2,\cdots,α_m线性相关，则α_1,a_2,\cdots,α_m,α_{m+1}必线性相关;\\反之，若α_1,α_2,α_m,α_{m+1}线性无关，则α_1,a_2,\cdots,α_m线性无关;$$

（2）$$若α_1,a_2,\cdots,α_m线性无关，而α_1,a_2,\cdots,α_m,β线性相关，\\则β能由α_1,a_2,\cdots,α_m线性表示，且表达式唯一$$

（3）m个n维向量组成的向量组，当向量个数m大于维数n时，该向量组一定线性相关。
特别地，n+1个n维向量一定线性相关。

**定理3：**线性无关的向量组中每个向量分别添加分量后的新向量组一定线性无关。

**定理4：**对矩阵进行初等**行**变换不改变其**列向量组**的线性相关性；
对矩阵进行初等**列**变换不改变其**行向量组**的线性相关性。



<center><span style='color:blue;font-size:15px'>2021/7/7</span></center>

### 第三节 向量组的秩

#### 一、定义和性质

<span style='color:red;font-size:20px'>定义：</span>设有向量组A，若在A中能选出r个向量满足

（1）这r个向量组成的向量组线性无关

（2）向量组A中任意r+1个向量（如果有的话）都线性相关。

或（2'）A中任意一个向量都可以由这r个向量线性表示

满足(1)(2)的r个向量是向量组A的一个最大(线性)无关组，数r称为**向量组A的秩**，记为$r=R_A$

**note1：**向量组A的最大无关组可能不唯一；如果$R_A=r$，则向量组A中的任意r个线性无关的向量所组成的向量组都是A的最大无关组。

**note2：**如果向量组A线性无关，则A的唯一最大无关组就是它本身。

**性质：**

（1）向量组与最大无关组等价

（2）同一向量组的任意两个最大无关组等价

（3）两个等价向量组的最大无关组等价

#### 二、相关定理

**定理：**矩阵的秩等于矩阵的列向量组的秩，也等于矩阵行向量组的秩

**求列向量组A的最大无关组和秩r的方法：**

（1）先将列向量组A构成矩阵

（2）对矩阵作初等行变换化为行阶梯型，则在行阶梯型中：非零行的行数即为向量组A的秩；每个非零行的首非零元素所在的列向量的全体即为列向量组的一个最大无关组。

（3）继续将矩阵A作初等行变换化成行最简形，则利用行最简形，可将其余向量由最大无关组线性表示。

原理：对矩阵就行初等行变换不改变其列向量组的线性无关性



<center><span style='color:blue;font-size:15px'>2021/7/8</span></center>

### 第四节 线性方程组的的解的结构

#### 一、齐次线性方程组的解的结构

1. 齐次线性方程组解向量的性质

   **性质1：**齐次的解相加还是齐次的解

   **性质2：**齐次的解乘常数还是齐次的解

   <span style='color:red;font-size:20px'>定义：</span>齐次线性方程组的所有解构成的向量组的最大无关组称为该齐次线性方程组的基础解系

![](/images/linear-algebra/image-20210708145621760.png)

2. 齐次线性方程组的基础解系的性质

   **定理：**$$设R(A_{m\times n})=r，则n元齐次线性方程组A_{m\times n}x=0$$的基础解系中有n-r个解向量，即s=n-r

   R(A)：有效方程个数；n：未知量个数；n-R(A)：自由未知量个数

   **推论：**$$A_{m\times n}x=0的任意n-r(A)个线性无关的解即为A_{m\times n}x=0的基础解系$$

   **结论：**若$$\xi_1,\xi_2,\cdots,\xi_{n-r}为A_{m \times n} x=0$$的一个基础解系

   则 $$A_{m \times n} x=0 的通解为\quad x=c_{1} \xi_{1}+c_{2} \xi_{2}+\cdots+c_{n-r} \xi_{n-r}$$

#### 二、非齐次线性方程组解的结构

**性质：**

（1）两个非齐的解相减是齐次的解

（2）齐次的解加非齐的解是非齐的解

**note：**当$$R(A)=r<n时, 求 A x=b的通解只要求A x=b的一个特解\eta^{*}和 A x=0 的通解\\ x=c_{1} \xi_{1}+\cdots+c_{n-r} \xi_{n-r}，则 A x=b 的通解为 x=\eta^{*}+c_{1} \xi_{1}+\cdots+c_{n-r} \xi_{n-r}$$



### 第五节 向量空间

#### 一、向量空间的定义

<span style='color:red;font-size:20px'>定义：</span>设V为n维向量的集合，如果集合V非空，且集合V对于向量的加法和数乘两种运算**封闭**，那么称集合V为**向量空间**

**note：**向量空间必含零向量

n元齐次线性方程组的解集是一个向量空间（称为齐次线性方程组的**解空间**）

#### 二、生成空间

设 $$\alpha_{1}, \cdots, \alpha_{m}$$ 为一n维向量组，则
$$
V=\left\{\lambda_{1} \alpha_{1}+\cdots+\lambda_{m} \alpha_{m} \mid \lambda_{1}, \cdots, \lambda_{m} \in R\right\}
$$
是一向量空间, 称V是由 $$\alpha_{1}, \cdots, \alpha_{m} 所生成的向量空间。 记为 V=L\{\alpha_{1}, \cdots, \alpha_{m}\}$$.

**note：**

（1）$$\alpha,\cdots,\alpha_m与=L\{\alpha_{1}, \cdots, \alpha_{m}\}$$等价

（2）等价的向量组所生成的向量空间是相等的

#### 三、向量空间的基，维数与坐标

1. ##### 基、维数

   <span style='color:red;font-size:20px'>定义：</span>设V为向量空间，$\alpha,\cdots,\alpha_r∈V$且满足:
   （1）$\alpha,\cdots,\alpha_r$线性无关;
   （2）任意α∈V都可由$\alpha,\cdots,\alpha_r$线性表示.
   则称$\alpha,\cdots,\alpha_r$是V的基，r为V的维数。记为dimV =r。
   规定零空间的维数为0，没有基

   **note：**

   （1）若向量空间V看成向量组，则V的基就是V的最大无关组，向量空间的维数r就是V的秩。
   进而V中任何r个线性无关的向量都是V的基。

   （2）$$若 \alpha_{1}, \cdots, \alpha_{r} 是向量空间 V的基, 则V =L\left\{\alpha_{1}, \cdots, \alpha_{r}\right\};\\
   若V =L\left\{\alpha_{1}, \cdots, {\alpha}_{m}\right\}，则 \alpha_{1}, \cdots, \alpha_{m} 的最大无关组为 V 的基。$$

2. ##### 坐标

   <span style='color:red;font-size:20px'>定义：</span>$$设 \alpha_{1}, \cdots, \alpha_{r} 是向量空间V的一组基，那么对\forall \beta \in V 都可唯一表示为\\\beta=x_{1} \alpha_{1}+\cdots+x_{r} \alpha_{r}，称有序数组 \left(x_{1}, \cdots, x_{r}\right) 是向量 \beta 在基 \alpha_{1}, \cdots, \alpha_{r} 的坐标。$$

   **note：**基给定后，求一个向量的坐标就是求非齐次线性方程组的解。

