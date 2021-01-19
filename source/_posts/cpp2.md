---
title: c++语言程序设计（6-12章）
date: 2021-01-11 16:40:34
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/cpp/cpp.jpg
mathjax: true
summary: 持续更新中
categories: cpp
tags:
 - cpp
 - C++语言设计指南（第4版）
typora-root-url: ..
---



<center><span style='color:blue;font-size:15px'>2021/1/10</span></center>

## 第6章 数组、指针与字符串

### 6.1 数组

#### 6.1.2 数组的存储与初始化

**1.数组的存储**
数组元素在内存中是顺序、连续存储的。数组元素在内存中占据一组连续的存储单元，逻辑上相邻的元素在物理地址上也是相邻的。 

**2.数组的初始化**
数组的初始化就是在声明数组时给部分或全部元素赋值。
声明数组时如果列成全部元素的初值，可以不用说明元素个数：
*int a[]={1,1,1};*
当然，也可以只对元素中的部分元素进行初始化，这种初始化只能针对前若干元素：
*float fa[5]={1.0, 2.0, 3.0};*

**细节：**当指定的初值个数小于数组大小时， 剩下的数组元素会被赋予0值。若定义数组时没有指定任何一个元素的初值，对于静态生存期的数组，每个元素仍然会被赋予0值；但对于动态生存期的数组，每个元素的初值都是不确定的。

~~~cpp
//动态生存期
int main() {
	int a[3];
	for (int i = 0; i < 3; i++)
		cout << a[i] << ' ';
}
~~~



![动态生存期](/images/cpp2/image-20210110111504396.png)

~~~cpp
//静态生存期
int a[3];
int main() {
	for (int i = 0; i < 3; i++)
		cout << a[i] << ' ';
}
~~~



![静态生存期](/images/cpp2/image-20210110111610294.png)

<center><span style='color:blue;font-size:15px'>2021/1/11</span></center>

#### 6.1.3 数组作为函数参数

使用数组名传递数据时，传递的是地址。
**细节：**把数组作为参数时，一般不指定数组第一维的大小，即使指定，也会被忽略。

#### **6.1.4 对象数组**

数组的元素不仅可以是基本数据类型，也可以是自定义类型。

#### 6.1.5 程序实例

例6-4 利用Point类进行点的线性拟合。

考虑一个用n个数据点拟合成直线的问题，直线模型为

$$
 y(x)=ax+b
$$
这个问题称为线性回归。设变量y随自变量x变化，给定n组观测数据（$x_i,y_i$)，用直线来拟合这些点，其中a，b是直线的斜率和截距，称为回归系数。

为确定回归系数，通常采用最小二乘法，即要使下式达到最小。

$$
Q=\sum_{i=0}^{n-1}{[y_i-(ax_i+b)]^2}
$$


根据极值定理，a和b满足下列方程：

$$
\frac{\partial Q}{\partial a}=2\sum_{i=0}^{n-1}{[y_i-(ax_i+b)](-x_i)}=0 
$$

$$
\frac{\partial Q}{\partial b}=2\sum_{i=0}^{n-1}{[y_i-(ax_i+b)](-1)}=0 
$$


解得：

$$
a=\frac{L_{xy}}{L_{xx}}=\frac{\sum_{i=0}^{n-1}{(x_i-\overline{x})(y_i-\overline{y})}}{\sum_{i=0}^{n-1}{(x_i-\overline{x})^2}}
$$

$$
b=\overline{y}-a\overline{x}
$$


相关系数r可以判断一组数据线性相关的密切程度，定义为：

$$
r=\frac{L_{xy}}{\sqrt{L_{xx}L_{yy}}}
$$

$$
L_{yy}=\sum_{i=0}^{n-1}{(y_i-\overline{y})^2}
$$


r的绝对值越接近1，表示数据的线性关系越好

~~~cpp
//Point.h
#ifndef _POINT_H
#define _POINT_H

class Point {
public:
	Point(float x = 0, float y = 0) :x(x), y(y) {}
	float getX() const { return x; }
	float getY() const { return y; }
private:
	float x, y;
};
#endif
~~~

~~~cpp
//6_4.cpp 最小二乘法做线性拟合
#include "Point.h"
#include <iostream>
#include <cmath>
using namespace std;
//直线线性担合,pointe为各点nPoint为点数
float lineFit(const Point points[], int nPoint) {
	float avgX = 0, avgY = 0;
	float lxx = 0, lyy = 0, lxy = 0;
	for (int i = 0; i < nPoint; i++) {
		avgX += points[i].getX() / nPoint;
		avgY += points[i].getY() / nPoint;
	}
	for (int i = 0; i < nPoint; i++) {
		lxx += (points[i].getX() - avgX) * (points[i].getX() - avgX);
		lyy += (points[i].getY() - avgY) * (points[i].getY() - avgY);
		lxy += (points[i].getX() - avgX) * (points[i].getY() - avgY);
	}
	cout<< "This line can be fitted by y=ax+b." << endl;
	cout << "a=" << lxy / lxx << " ";										//输出回归系数a
	cout << "b=" << avgY - avgX * lxy / lxx << endl;						//输出回归系数b
	return static_cast<float>(lxy / sqrt(lxx * lyy));						//返回相关系数r
}
int main() {
	Point p[10] = { Point(6, 10),Point(14, 20),Point(26, 30),Point(33, 40),Point(46, 50),Point(54, 60),Point(67, 70),Point(75, 80),Point(84, 90),Point(100, 100) };
	float r = lineFit(p, 10);
	cout << "Line coefficient r=" << r << endl;
	return 0;
}
~~~

![结果](/images/cpp2/image-20210111162503679.png)

这个程序的缺点是可以处理的数据点数是固定的，由Point类对象数组的大小决定，这在实际使用中是一个很大的遗憾，在后面的章节中，会对本程序进行改造，以适应任意多个数据的处理。

### 6.2 指针

#### 6.2.1 内存空间的访问方式

每个字节是一个基本内存单元，有一个地址。
在C++中有专门用来存放内存单元地址的变量类型，这就是指针类型。

#### 6.2.2 指针变量的声明

**疑问：**为什么在声明指针变量时要指出它所指的对象是什么类型呢？
限定对变量可以进行的运算及其运算规则。

#### 6.2.3 与地址相关的运算”*”和“&”

“\*”称为指针运算符，也称解析（dereference），表示获取指针所指向的变量的值。
"&"称为取地址运算符，用来得到一个对象的地址。
必须注意，“\*”和“&”在声明语句中和执行语句中其含义是不同的，它们作为一元运算符和作为二元运算符时含义也是不同的。

#### 6.2.4 指针的赋值

可以使用一个已经赋值的指针去初始化另一个指针，这就是说，可以使多个指针指向同一个变量。
数组名称实际上就是一个不能被赋值的指针，即指针常量。

关于指针的类型，还应该注意以下几点。
（1）可以声明**指向常量的指针**，此时不能通过指针来改变所指对象的值，但指针本身可以改变，可以指向另外的对象。例如:

~~~cpp
int a;
const int *pl=&a;				//pl是指向常量的指针
int b;
pl=&b;							//正确，pl本身的值可以改变
*pl=1;							//编译时出错，不能通过pl改变所指的对象
~~~

（2）可以声明**指针类型的常量**，这时指针本身的值不能被改变。例如:

~~~cpp
int *const p2=&a;
p2=&b;							//错误，p2是指针常量，值不能改变
~~~

（3）一般情况下，指针的值只能赋给相同类型的指针。但是有一种特殊的 **void类型指针**，可以存储任何类型的对象地址，就是说任何类型的指针都可以赋值给void类型的指针变量。经过使用类型显式转换，通过void类型的指针便可以访问任何类型的数据。
**提示：**void 指针一般只在指针所指向的数据类型不确定时使用。

#### 6.2.5 指针运算

\*(pl + nl)表示pI当前所指位置后方第nl个数的内容，它也可以写作pI[nl],这与\*(pl + nl)的写法是完全等价的，同样，\*(pl - nl)也可以写作pI[-nl]。

![指针的算术运算](/images/cpp2/image-20210111181928035.png)

**提示：**指针算术运算的不慎使用会导致指针指向无法预期的地址，从而造成不确定的结果，因此指针的算术运算一定要慎用。

指针变量的关系运算指的是指向相同类型数据的指针之间进行的关系运算。如果两个相同类型的指针相等，就表示这两个指针是指向同一个地址。不同类型的指针之间或指针与非0整数之间的关系运算是毫无意义的。但是指针变量可以和整数0进行比较，0专用于表示空指针，也就是一个不指向任何有效地址的指针。

**细节：**空指针也可以用NULL来表示，NULL是一个在很多头文件中都有定义的宏，被定义为0。

~~~~cpp
int *p=0;
int *p=NULL;
~~~~

**习惯：**如果不便于用一个有效地址给一个指针变量赋初值，那么应当用0作为它的初值，从而避免指向不确定地址的指针出现。

#### 6.2.6 用指针处理数组元素

**细节：**把数组作为函数的形参，等价于把指向数组元素类型的指针作为形参。例如，下面3个写法，出现在形参列表中都是等价的。

~~~cpp
void f(int p[]);
void f(int p[3]);
void f(int *p);
~~~

#### 6.2.7 指针数组

如果一个数组的每个元素都是指针变量，这个数组就是指针数组。指针数组的每个元素都必须是同类型的指针。例如 int *pa[3];声明了一个int类型的指针数组pa，其中有3个元素，每个元素都是一个指向int类型数
据的指针。由于指针数组的每个元素都是一个指针，必须先赋值后引用，因此，声明数组之后，对指针元素赋初值是必不可少的。

~~~cpp
//6_8.cpp 利用指针数组输出单位矩阵
# include <iostream>
using namespace std;
int main() {
	int line1[] = { 1, 0, 0 };
	int line2[] = { 0, 1, 0 };
	int line3[] = { 0, 0, 1 };
	//定义整型指针数组并初始化
	int* pLine[3] = { line1,line2, line3 };
	cout << "Matrix test:" << endl;
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++)
			cout << pLine[i][j] << " ";
		cout << endl;
	}
	return 0;
}
~~~

![指针数组与二维数组的区别](/images/cpp2/image-20210111235748905.png)

~~~cpp
//6_9.cpp 二维数组举例
#include <iostream>
using namespace std;
int main() {
	int array2[3][3] = { {11, 12, 13}, {21, 22, 23}, { 31, 32, 33 } };
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++)
			cout << *(*(array2 + i) + j) << " ";
		cout << endl;
	}
	return 0;
}
~~~

<center><span style='color:blue;font-size:15px'>2021/1/12</span></center>

#### 6.2.8 用指针作为函数参数

例6-10：读入3个浮点数，将整数部分和小数部分分别输出。
程序由主函数和一个进行浮点数分解的子函数组成，浮点数在子函数中分解之后，将整数部分和小数部分传递回主函数中输出。可以想象，如果直接使用整型和浮点型变量，形参在子函数中的变化根本就无法传递到主函数，因此采用指针作为函数的参数。源代码如下:

~~~cpp
//6 10.cpp 用指针作为函数参数
#include <iostream>
using namespace std;
//将实数x分成整数部分和小数部分，形参intPart、 fracPart是指针
void splitFloat(float x, int* intPart, float* fracPart) {
	*intPart = static_cast<int>(x);						//取x的整数部分
	*fracPart = x - *intPart;							//取x的小数部分
}
int main() {
	cout << "Enter 3 float point numbers:" << endl;
	for (int i = 0; i < 3; i++) {
		float x,f;
		int n;
		cin >> x;
		splitFloat(x, &n, &f);							//变量地址作为实参
		cout << "Integer Part="<<n<<" Fraction Part="<< f<< endl;
	}
	return 0;
}
~~~

在这个程序中，使用引用作为形参也可以达到同样目的。

#### 6.2.9 指针型函数

除了void 类型的函数之外，函数在调用结束之后都要有返回值，指针也可以是函数的返回值。当一个函数的返回值是指针类型时，这个函数就是指针型函数。使用指针型函数的最主要目的就是要在函数结束时把大量的数据从被调函数返回到主调函数中，而通常非指针型函数调用结束后，只能返回一个变量或者对象。

~~~cpp
int *funcion(int a){
    函数体
}
~~~

#### 6.2.10 指向函数的指针

在程序运行时，不仅数据要占据内存空间，执行程序的代码也被调入内存并占据一定的空间。每一个函数都有函数名，实际上这个函数名就表示函数的代码在内存中的起始地址。由此看来，调用函数的通常形式“函数名(参数表)”的实质就是“函数代码首地址(参数表)”。

函数指针就是专门用来存放函数代码首地址的变量。在程序中可以像使用函数名一样使用指向函数的指针来调用函数。也就是说一旦函数指针指向了某个函数，它与函数名便具有同样的作用。函数名在表示函数代码起始地址的同时，也包括函数的返回值类型和参数的个数、类型、排列次序等信息。因此在通过函数名调用函数时，编译系统能够自动检查实参与形参是否相符，用函数的返回值参与其他运算时，能自动进行类型一致性检查。

声明一个函数指针时，也需要说明函数的返回值、形式参数列表,其一般语法如下:
数据类型(*函数指针名) (形参表)

~~~cpp
//6_11.cpp	函数指针实例
#include <iostream>
using namespace std;
void printStuff(float) {
	cout << "This is the print stuff function." << endl;
}
void printMessage(float data) {
	cout << "The data to be listed is " << data << endl;
}		
void printFloat(float data) {
	cout << "The data to be printed is " << data << endl;
}
const float PI = 3.14159f;
const float TWO_PI = PI * 2.0f;
int main() {
	void (*functionPointer) (float);
	printStuff(PI);
	functionPointer = printStuff;
	functionPointer(PI);
	functionPointer = printMessage;
	functionPointer(TWO_PI);
	functionPointer(13.0);
	functionPointer = printFloat;
	functionPointer(PI);
	printFloat(PI);
	return 0;
}
~~~

#### 6.2.11 对象指针

##### 1.对象指针的一般概念

和基本类型的变量一样，每一个对象在初始化之后都会在内存中占有一定的空间。因此，既可以通过对象名，也可以通过对象地址来访问一个对象。虽然对象同时包含了数虽然对象同时包含了数据和函数两种成员，但与一般变量略有不同，对象所占据的内存空间只是用于存放数据成员的，函数成员不在每一个对象中存储副本。对象指针就是用于存放对象地址的变量。

~~~cpp
对象指针名->成员名
(*对象指针名).成员名
~~~

这两种访问形式是等价的。

##### 2.this指针

this指针是一个隐含于每个类的非静态成员函数中的特殊指针(包括构造函数和析构函数)，它用于指向正在被成员函数操作的对象。

**细节：**this指针实际上是类成员函数的一个隐含参数。 在调用类的成员函数时，目的对象的地址会自动作为该参数的值，传递给被调用的成员函数，这样被调函数就能够通过this指针来访问目的对象的数据成员。对于常成员函数来说，这个隐含的参数是常指针类型的。

this是一个指针常量，对于常成员函数，this同时又是一个指向常量的指针。在成员函数中， 可以使用*this来标识正在调用该函数的对象。

**提示：**当局部作用域中声明了与类成员同名的标识符时，对该标识符的直接引用代表的是局部作用城中所声明的标识符，这时为了访问该类成员，可以通过this指针。

##### 3.指向类的非静态成员的指针

类的成员自身也是一些变量、函数或者对象等，因此也可以直接将它们的地址存放到一个指针变量中，这样，就可以使指针直接指向对象的成员 ，进而可以通过这些指针访问对象的成员。

声明指针语句的一般形式为：

~~~cpp
类型说明符 类名::*指针名;						  //声明指向数据成员的指针
类型说明符 (类名:: *指针名)(参数表);				//声明指向函数成员的指针
~~~

对成员指针赋值的一般语法形式为：

~~~cpp
指针名=&类名::数据成员名; 					  //对数据成员指针赋值
指针名=&类名::函数成员名;						  //对函数成员赋值
~~~

**注意：**对类成员取地址时，也要遵守访问权限的约定，也就是说，在一个类的作用域之外不能够对它的私有成员取地址。

**注意：**常成员函数与普通成员函数具有不同的类型，因此能够被常成员函数赋值的指针，需要在声明时明确写出const关键字。

类是通过对象而实例化的，在声明类的对象时才会为具体的对象分配内存空间，这时只要将对象在内存中的起始地址与成员指针中存放的相对偏移结合起来就可以访问到对象的数据成员了。访问数据成员时，这种结合可通过以下两种语法形式实现：

~~~cpp
对象名.*类成员指针名
对象指针名->*类成员指针名
~~~

一个普通函数的函数名就表示它的起始地址，将起始地址赋给指针，就可以通过指针调用函数。类的成员函数虽然并不在每个对象中复制一份副本，但是由于需要确定this指针，因而必须通过对象来调用非静态成员函数。因此经过上述对成员函数指针赋值以后，也还不能用指针直接调用成员函数，而是需要首先声明类的对象，然后用以下形式的语句利用指针调用成员函数：

~~~cpp
(对象名.*类成员指针名)(参数表)
(对象指针名->*类成员指针名)(参数表)
~~~

~~~cpp
//6_13.cpp 指向类的非静态成员的指针 & 访问对象的共有函数的不同方法
#include<iostream>
using namespace std;
class Point {
public:
	Point(int x = 0, int y = 0):x(x),y(y){}
	int getX() const { return x; }
	int getY() const { return y; }
private:
	int x, y;
};
int main() {
	Point a(4, 5);
	Point* p1 = &a;
	int (Point:: * funcPtr) () const = &Point::getX;	//定义成员函数指针并初始化
	cout << (a.*funcPtr) () << endl;					//(1)使用成员函数指针和对象名访问成员函数
	cout << (p1->*funcPtr) () << endl;					//(2)使用成员函数指针和对象指针访问成员函数
	cout << a.getX() << endl;							//(3)使用对象名访问成员函数
	cout << p1->getX() << endl;							//(4)使用对象指针访问成员函数
	return 0;
}
~~~

##### 4.指向类的静态成员的指针

对类的静态成员的访问是不依赖于对象的，因此可以用普通的指针来指向和访问静态成员。

<center><span style='color:blue;font-size:15px'>2021/1/13</span></center>

### 6.3 动态内存分配

在C++中，动态内存分配技术可以保证程序在运行过程中按照实际需要申请适量的内存，使用结束后还可以释放，这种在程序运行过程中申请和释放的存储单元也称为堆对象，申请和释放过程一般称为建立和删除。
在C++程序中建立和删除堆对象使用两个运算符: new和delete。
运算符new的功能是动态分配内存，或者称为动态创建堆对象,语法形式为:
new 数据类型(初始化参数列表);
该语句在程序运行过程中申请分配用于存放指定类型数据的内存空间，并根据初始化参数列表中给出的值进行初始化。如果内存申请成功，new运算便返回一个指向新分配内存首地址的类型的指针，可以通过这个指针对堆对象进行访问；如果申请失败，会抛出异常(有关异常,将在第12章介绍)。

~~~cpp
int* point;
point=new int(2);
~~~

**细节：**在用new 建立一个类的对象时，如果该类存在用户定义的默认构造函数，则“new T”和“new T()”这两种写法的效果是相同的，都会调用这个默认构造函数。但若用户未定义默认构造函数,使用“new T”创建对象时，会调用系统生成的隐含的默认构造函数;使用“new T()”创建对象时，系统除了执行默认构造函数会执行的那些操作外，还会为基本数据类型和指针类型的成员用0赋初值，而且这一过程是递归的。 也就是说，如果该对象的某个成员对象也没有用户定义的默认构造函数，那么对该成员对象的基本数据类型和指针类型的成员，同样会被以0赋初值。(基本数据类型和数组也一样)

运算符delete用来删除由new建立的对象，释放指针所指向的内存空间。格式为:

~~~cpp
delete 指针名;
~~~

**注意：**用new分配的内存，必须用delete 加以释放，否则会导致动态分配的内存无法回收，使得程序占据的内存越来越大，这叫做“内存泄漏”。

使用运算符new也可以创建**数组类型**的对象，创建一维数组的语法形式为：

~~~cpp
new 类型名 [数组长度]；
~~~

如果是用new建立的数组,用delete删除时在指针名前面要加“[]”,格式如下:

~~~cpp
delete[] 指针名;
~~~

<center><span style='color:blue;font-size:15px'>2021/1/14</span></center>

在动态数组类中，通过类的成员函数访问数组元素，可以在每次访问之前检查一下下标是否越界，使得使得数组下标越界的错误能够及早被发现**<span style='color:green;font-size:15px'>(实际应用可直接使用vector)</span>** 。这种检查，可以通过C++的assert来进行。assert 只在调试模式下生效，一般用assert 只是检查程序本身的逻辑错误，而用户的不当输入造成的错误，则应当用其他方式加以处理。

~~~cpp
//6_18.cpp 动态数组类   将动态数组封装成一个类
#include<iostream>
#include<cassert>
using namespace std;
class Point {
public:
	Point() :x(0), y(0) {
		cout << "Default Constructor called." << endl;
	}
	Point(int x, int y) :x(x), y(y) {
		cout << "Constructor called." << endl;
	}
	~Point() { cout << "Destructor called." << endl; }
	int getX() const { return x; }
	int getY() const { return y; }
	void move(int newX, int newY) {
		x = newX;
		y = newY;
	}
private:
	int x, y;
};
class ArrayOfPoints {
public:
	ArrayOfPoints(int size) :size(size) {
		points = new Point[size];
	}
	~ArrayOfPoints() {
		cout << "Deleting..." << endl;
		delete[] points;
	}
	Point &element(int index) {								//返回一个对象的引用，确保正确更改
		assert(index >= 0 && index < size);					//如果数组下标越界，程序终止
		return points[index];
	}
private:
	Point* points;
	int size;
};
int main() {
	int count;
	cout << "Please enter the count of points: ";
	cin >> count;
	ArrayOfPoints points(count);							//创建对象数组
	points.element(0).move(5, 0);							//访问数组元索的成员
	points.element(1).move(15, 20);							//访问数组元素的成员
	return 0;
}
~~~

![运行结果](/images/cpp2/image-20210114012043817.png)

创建和删除对象数组的过程都由ArrayOfPoints类的构造函数和析构函数完成。这虽然使main()函数更为简洁，但是对数组元素的访问形式“points.element(0)”却显得啰嗦。如果希望像使用普通数组样,通过下标操作符“[ ]"来访问数组元素，就需要对下标操作符进行重载，这将在第9章详细介绍。

用new操作也可以创建多维数组，其中第1维长度可以是任何结果为正整数的表达式，而其他各维数组长度必须是结果为正整数的常量表达式。如果内存申请成功.new运算返回一个指向新分配内存的首地址的指针。例如，下列语句

~~~cpp
float* fp;
fp = new float[10][25][10];
~~~

会产生错误，正确的写法应该是：

~~~cpp
float(*cp)[25][10];
cp = new float[10][25][10];
~~~

如此得到的指针cp，既可以作为指针使用，也可以像一个三维数组名一样使用。

### 6.4 用vector创建数组对象

无论是静态数组，还是用new动态创建的数组，都难以检测下标越界的错误，在实际应用中常常造成困扰。例6-18 提供了一个很好的例子，它通过将动态数组封装成-一个类，允许在调试状态下访问数组元素时检查下标越界的错误。然而，它只能表示Point类型的动态数组，若要处理其他类型的动态数组，还需创建新的动态数组类，这是很烦琐的重复性工作，事实上,C++标准库也提供了被封装的动态数组一vector，而且这种被封装的数组可以具有各种类型，这就使我们免去了那些重复性工作。vector不是一个类，而是个类模板。模板的概念将在第9章详细介绍，读者通过本章的学习，只需在形式上记住vector的使用方式。

向量 **vector** 是一种对象实体, 能够容纳许多其他类型相同的元素, 因此又被称为容器。 与string相同，vector 同属于STL(Standard Template Library，标准模板库)中的一种自定义的数据类型，可以广义上认为是数组的增强版。用vector定义动态数组的形式为:

~~~cpp
vector<元素类型>数组对象名(数组长度，元素初值);
~~~

**细节：**与普通数组不同的是，用vector定义的数组对象的所有元素都会被初始化。如果数组的元素类型为基本数据类型，则所有元素都会被以0初始化；如果数组元素为类类型，则会调用类的默认构造函数初始化。因此如果以此形式定义的vector动态数组，需要保证作为数组元素的类具有默认构造函数。另外,初值也可以自己指定，但只能为所有元素指定相同初值。

对vector数组对象元素的访问方式，与普通数组具有相同的形式：

~~~cpp
数组对象名[下标表达式]
~~~

但是vector数组对象的名字表示的就是一个数组对象，而非数组的首地址，因为数组对象不是数组，而是封装了数组的对象。vector定义的数组对象具有个重要的成员函数size()，它会返回数组的大小。

~~~cpp
//6_20.cpp vector应用举例
#include<iostream>
#include<vector>
using namespace std;
//计算数组arr中元素的平均值
double average(const vector<double>&arr) {
	double sum = 0;
	for (unsigned i = 0; i < arr.size(); i++)
		sum += arr[i];
	return sum / arr.size();
}
int main() {
	unsigned n;
	cout << "n= ";
	cin >> n;
	vector<double>arr(n);
	cout << "Please input " << n << " real numbers:" << endl;
	for (unsigned i = 0; i < n; i++)
		cin >> arr[i];
	cout << "Average=" << average(arr) << endl;
	return 0;
}
~~~

vector还具有很多其他强大的功能，例如它的大小可以扩展，这些特性都将在第10章详细介绍。

<center><span style='color:blue;font-size:15px'>2021/1/15</span></center>

### 6.5 深复制和浅复制

虽然第4章已经介绍过复制构造函数，但是在此前大多数简单例题中都不需要特别编写复制构造函数，隐含的复制构造函数足以实现对象间数据元素的一一对应复制。因此，读者对于编写复制构造函数的必要性，可能一直存在疑问。其实隐含的复制构造的数并不总是适用的，因为它完成的只是浅复制。

~~~cpp
//6_21.cpp 对象的浅复制
#include <iostream>
#include <cassert>
using namespace std;
class Point {
public:
	Point() :x(0), y(0) {
		cout << "Default Constructor called." << endl;
	}
	Point(int x, int y) :x(x), y(y) {
		cout << "Constructor called." << endl;
	}
	~Point() { cout << "Destructor called." << endl; }
	int getX() const { return x; }
	int getY() const { return y; }
	void move(int newX, int newY) {
		x = newX;
		y = newY;
	}
private:
	int x, y;
};
class ArrayOfPoints {
public:
	ArrayOfPoints(int size) :size(size) {
		points = new Point[size];
	}
	~ArrayOfPoints() {
		cout << "Deleting..." << endl;
		delete[] points;
	}
	Point& element(int index) {								//返回一个对象的引用，确保正确更改
		assert(index >= 0 && index < size);					//如果数组下标越界，程序终止
		return points[index];
	}
private:
	Point* points;
	int size;
};
int main() {
	int count;
	cout << "Please enter the count of points:";
	cin >> count;
	ArrayOfPoints pointsArray1(count);
	//创建对象数组
	pointsArray1.element(0).move(5, 10);
	pointsArray1.element(1).move(15, 20);
	ArrayOfPoints pointsArray2 = pointsArray1;
	//创建对象数组副本
	cout << "Copy of pointsArrayl:" << endl;
	cout << "Point 0 of array2: " << pointsArray2.element(0).getX() << ", "<< pointsArray2.element(0).getY() << endl;
	cout << "Point 1 of array2: " << pointsArray2.element(1).getX() << ", "<< pointsArray2.element(1).getY() << endl;
	pointsArray1.element(0).move(25, 30);
	pointsArray1.element(1).move(35, 40);
	cout << "After the moving of pointsArrayl:" << endl;
	cout << "Point 0 of array2: " << pointsArray2.element(0).getX() << ", "<< pointsArray2.element(0).getY() << endl;
	cout << "Point 1 of array2: " << pointsArray2.element(1).getX() << ", "<< pointsArray2.element(1).getY() << endl;
	return 0;
}
~~~

这个程序会出现异常，也就是运行错误。

![6_21](/images/cpp2/image-20210115130448555.png)

这里建立对象pointsArray2时调用的是默认的复制构造函数，实现对应数据项的直接复制。默认的复制构造函数将两个对象的对应数据项简单复制后，pointsArray1的成员points和pointsArray2的成员points 具有相同的值，也就是说两个指针指向的是同一内存地址，表面上好像完成了复制，但是并没有形成真正的副本。因此当程序中移动pointsArray1中的点时，也影响到了pointsArray2。 这种效果就是“浅复制”。
浅复制还有更大的弊病，在程序结束之前pointsArray1和pointsArray2 的析构函数会自动被调用，动态分配的内存空间会被释放。由于两个对象共用了同一块内存空间，因此该空间被两次释放，于是导致运行错误。解决这一问题的方法是编写复制构造函数，实现“深复制”。

~~~cpp
//6_22.cpp  对象的深复制
#include <iostream>
#include <cassert>
using namespace std;
class Point {
	//类的定义同6_21
	//...
};
class ArrayOfPoints{
public:
	ArrayOfPoints(const ArrayOfPoints& v);
	//其他成员同6_21
}
ArrayOfPoints::ArrayOfPoints(const ArrayOfPoints& v) {
	size=v.size;
	points = new Point[size];
	for (int i = 0; i < size; i++)
		points[i] = v.points[i];
}
int main() {
	//同6_21
}
~~~

![6_22](/images/cpp2/image-20210115131228658.png)

从这次的运行结果可以看出，程序实现的是深复制：移动pointsArray1中的点不再影响pointsArray2中的点，而且程序结束前分别释放pointsArray1和pointsArray2中的内存空间，也不再引起错误。

### 6.6 字符串

与C语言一样，在C++的基本数据类型变量中没有字符串变量。在C语言中是使用字符型数组来存放字符串的，C++程序中也仍然可以沿用这种办法。不仅如此，标准 C++库中还预定义了string 类。本节就来介绍这两种方法。

#### 6.6.1 用字符数组存储和处理字符串

第2章中介绍过，字符串常量是用一对双引号括起来的字符序列。它在内存中的存放形式是，按串中字符的
排列次序顺序存放，每个字符占一个字节，并在末尾添加\0作为结尾标记。这实际上是一个隐含创建的类型为char的数组，一个字符串常量就表示这样一个数组的首地址，因此，可以把字符串常量赋给字符串针，由于常量值是不能改的，应将字符串常量赋给指向常量的指针，例如:

~~~cpp
const char* STRING1 = "This is a string.";
cout<< STRING1;
~~~

字符变量也可以用类似方式来表示。 如果创建一个char数组，每个元素存放字符串的一个字符，在末尾放置一个\0，便构成了C++字符串。它的存储方式与字符串常量无异，但由于它是程序员创建的数组，因此可以改写其内容，因而这就是字符串变量而非常量了。这时要注意，用于存放字符串的数组其元素个数应该不小于字符串的长度(字符个数)加1。对字符数组进行初始化赋值时，初值的形式可以是以逗号分隔的ASCII码或字符常量，也可以是整体的字符串常量(这时末尾的\0是隐含的)。 下面列出的语句都可以创建一个初为"program" 的字符串变量，3种写法是等价的。

~~~cpp
char str[8]=('p','r','o','g','r','a','m'，'\0');
char str[8]="program";
char str[]="program";
~~~

尽管对用字符数组表示的字符串进行初始化还比较容易、直观，但进行许多其他字符串操作时却比较麻烦。执行很多字符串操作需要借助cstring头文件中的字符串处理函数。例如将一个字符串的内容复制到另一个字符串需要用strcpy函数，按辞典顺序比较两个的大小需要用strcmp函数，将两个字符串连接起来需要用strcat函数。另外，当字符串长度很不确定时，需要用new来动态创建字符数组。最后还要用delete释放，这些都相当烦琐。C++对这些烦琐的操作进行了封装，形成了string类，可以更加方便地操作字符串。

#### 6.6.2 string类

C++标准类库将面向对象的串的概念加入到C++语言中，预定义了字符串类(string类)。string类提供了对字符串进行处理所需要的操作。使用string类需要包含头文件string。string类封装了串的属性并提供了一系列允许访问这此属性的函数。

**细节：**严格地说，string 并非一个独立的类，而是类模板basic_ string的一个特化实例。不过对于string的使用者来说，它的特点与一个类无异，因此可以把它当作一个类来看待。有关模板，将在第9章详细介绍。

<center><span style='color:blue;font-size:15px'>2021/1/18</span></center>

下面简要介绍一下string 类的构造函数、几个常用的成员函数和操作。为了简明起见，函数原型是经过简化的，与头文件中的形式不完全一样。 

**1.构造函数的原型**

~~~c++
string();								//默认构造函数,建立一个长度为0的串
string (const string& rhs) ;			//复制构造函数
string (const char* s);					//用指针s所指向的字符申常量初始化string类的对象
string (const string& rhs, unsigned int pos, unsigned int n) ;	
		//将对象rhs中的串从位置pos开始取n个字符,用来初始化string类的对象
		//注:申中的第一个字符的位置为0
string (const char* s, unsigned int n);
		//用指针s所指向的字符串中的前n个字符初始化string类的对象
string (unsigned int n, char c);
		//将参数c中的字符重复n次,用来初始化string类的对象
~~~

**提示：**由于string类具有接收const char*类型的构造函数，因此字符串常量和用字符数组表示的字符串变量都可以隐含地转换为string对象。
例如，可以直接使用字符串常量对string对象初始化:
`string str= "Hello world!";`

**2.string类的操作符**

![string类的操作符](/images/cpp2/image-20210118183703493.png)

**提示：**之所以能够通过上面的操作符来操作string对象，是因为string类对这些操作符进行了重载。操作符的重载将在第8章详细介绍。

**3.常用成员函数功能简介**

~~~cpp
string append (const char* s);							
//append(在文章后面)附加，增补; 将字符串s添加在本串尾
string assign (const char* s);							
//赋值,将s所指向的字符串赋值给本对象
int compare (const string &str) const;
//比较本串与str中串的大小，当本串<str串时,返回负数;当本串>str串时，返回正数;两串相等时,返回0
string & insert (unsigned int p0, const char* s);		
//将s所指向的字符串插人在本串中位置p0之前
string substr (unsigned int pos, unsigned int n) const;
//取子串,取本串中位置pos开始的n个字符,构成新的string类对象作为返回值
unsigned int find (const basic_string &str) const;
//在找并返回str在本串中第一次出现的位置
unsigned int length() const;
//返回串的长度(字符个数)
vold swap (string& str);
//将本串与str中的字符串进行交换
~~~

下面看一个string类应用的例子

~~~cpp
//6_23.cpp    string类应用举例
#include <string>
#include <iostream>
using namespace std;
//根据value的值输出true或false,title为提示文字
inline void test(const char* title, bool value) {
	cout << title << " returns " << (value ? "true" : "false") << endl;
}
int main() {
	string s1 = "DEF";
	cout << "s1 1s " << s1 << endl;
	string s2;
	cout << "Please enter s2: ";
	cin >> s2;
	cout << "length of s2: " << s2.length() << endl;
	//比较运算符的测试
	test("s1<= \"ABC\"", s1 <= "ABC");
	test("\"DEF\"<=s1", "DEF" <= s1);
	//连接运算符的测试
	s2 += s1;
	cout << "s2=s2+s1: " << s2 << endl;
	cout << "length of s2: " << s2.length() << endl;
	return 0;
}
~~~

![](/images/cpp2/image-20210118191532246.png)

如果希望从键盘读入字符串，直到行末为止，不以中间的空格作为输入的分隔符，可以使用头文件string中定义的getline。例如，如果将上面的代码中输人s2的语句改为下列语句，就能达到这一目的。
`getline(cin, s2);`
这时，如果从键盘输入字符串“123 ABC" ，那么整个字符串都会被赋给s2。这实际表示输入字符串时只以换行符作为分隔符。getline还允许在输人字符串时增加其他分隔符，使用方法是把可以作为分隔符的字符作为第3个参数传递给getline。例如，使用下面的语句，可以把逗号作为分隔符。
`getline(cin, s2, ',');`

~~~cpp
//6.24.cpp  用getline输入字符串
#include<iostream>
#include<string>
using namespace std;
int main() {
	for (int i = 0; i < 2; i++) {
		string city, state;
		getline(cin, city, ',');
		getline(cin, state);
		cout << "City:" << city << " state:" << state << endl;
	}
	return 0;
}
~~~

<center><span style='color:blue;font-size:15px'>2021/1/19</span></center>

### 6.7 综合实例——个人银行账户管理系统

在第4章和第5章中，以一个银行账户管理程序为例，说明了类和成员函数的设计和应用，以及类的静态成员的应用和程序结构的组织问题。在本节中，将在第5章综合实例的基础上对银行账户管理程序进步 加以完善。
（1）第4章和第5章中，都是用一个整数来表示银行账号，但这并不是完美的方案，例如，如果银行账以“0"开头，或账号超过整数的表示范围，或账号中包括其他字符，这种表示方式都不能胜任。本章学习了字符串后，可以改**用字符串来表示银行账号**，这样以上问题得到了解决。另外，第4章和第5章的程序中所输出的账目列表，每笔账目都没有说明，**使用字符串可以为各笔账目增加说明文字**。此外，我们SavingsAccount类专门**增加了一个用来报告错误的函数**，当其他丽数需要输出错误信息时，直接把信息以字符串形式传递给该函数即可，简化了错误信息的输出。
（2）第4章和第5章中，主程序创建的两个账户为两个独立的变量，只能用名字去引用它们，在主程序末尾分别对两个账户进行结算(settle)和显示(show)时，需要将几乎相同的代码书写两遍，如果账户数量增多将会带来更大麻烦。本章学习了数组后，可以**将多个账户组织在一个数组中**，这样可以把需要对各个账户做的事情放在循环中，避免了代码的冗余。
（3）第4章和第5章的程序中，日期都是用一个整数来表示的，这样计算两个日期相距天数时非常方便，但这种表示很不直观，对用户很不友好。事实上，**日期可以用一个类来表示**，内含年、月、日三个数据成员，但这又给计算两个日期相差天数带来了麻烦。为了计算日期间相差的天数，可以先选取一个比较规整的基准日期，在构造日期对象时将该日期到这个基准日期的相对天数计算出来，我们将这个相对天数称为“相对日期”。这样在计算两个日期相差的天数时，只需将二者的相对日期相减即可。假设将公元元年1月1日作为公共的基准日期，将y年m月d日相距这一天的天数记为 f(y/m/d,1/1/1)，可以将其分解为3部分:
$$
f(y / m / d, 1 / 1 / 1)=f(y / 1 / 1,1 / 1 / 1)+f(y / m / 1, y / 1 / 1)+f(y / m / d, y / m / 1)
$$
f(y/1/1,1/1/1)表示当年的1月1日与公元元年1月1日相距的天数，即公元元年到公元y-1年的总天数。平年每年有365天,闰年多一天，因此该值为365(y-1)加上公元元年到y-1年之间的闰年数。由于4年一闰，100的倍数免闰，400的倍数再闰，故有:
$$
f(y / 1 / 1,1 / 1 / 1)=365(y-1)+\left\lfloor\frac{y-1}{4}\right\rfloor-\left\lfloor\frac{y-1}{100}\right\rfloor+\left\lfloor\frac{y-1}{400}\right\rfloor
$$
f(y/m/1,y/1/1)表示 y年的m月1日与1月1日相距天数。可以把每月1日到1月1日的天数放在一个数组中，计算时只要查询该数组，便可得到f(y/m/1,y/1/1)的值。而对于闰年，仍可通过数组查询，只需在m>2时将查得的值加1。该值只依赖于T和y，将它记为g(m,y)。此外:
$$
f(y/m/d,y/m/1) =d- 1
$$
如果把公元元年1月1日的相对日期定为1,那么公元y年m月d日的相对日期就是:
$$
\begin{aligned}
f(y / m / d, 1 / 1 / 1)+1=& 365(y-1)+\left\lfloor\frac{y-1}{4}\right\rfloor \\
&-\left\lfloor\frac{y-1}{100}\right\rfloor+\left\lfloor\frac{y-1}{400}\right\rfloor+g(m+y)+d
\end{aligned}
$$
相对日期得出后，计算两日期相差天数的难题就迎刃而解了。

![UML图](/images/cpp2/image-20210119130403132.png)

以后，假定银行对活期储蓄账户的结算日期是每年的1月1日。

例6-25个 人银行账户管理程序改进。
整个程序分为5个文件: **date. h**是日期类头文件，**date. cpp**是日期类实现文件，**account.h**是储蓄账户类定义头文件，**account. cpp**是储蓄账户类实现文件，**6_25. cpp**是主函数文件。

~~~cpp
//date.h
#ifndef __DATE_H__
#define __DATE_H__
class Date {								//日期类
private:
	int year;								//年
	int month;								//月
	int day;								//日
	int totalDays;							//该日期是从公元元年1月1日开始的第儿天
public:
	Date(int year, int month, int day);		//用年、月、日构造日期
	int getYear() const { return year; }
	int getMonth() const { return month; }
	int getDay() const { return day; }
	int getMaxDay() const;					//获得当月有多少天
	bool isLeapYear() const {				//判断当年是否为闰年
		return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	}
	void show() const;						//输出当前日期
	int distance(const Date& date) const {	//计算两个日期之间差多少天
		//常成员函数保护目的对象，常引用保护所引用的对象
		return totalDays - date.totalDays;
	}
};
#endif										// __DATE_H__
~~~

~~~cpp
//date.cpp
#include"date.h"
#include<iostream>
#include<cstdlib>
using namespace std;
namespace {										//namespace使下面的定义只在当前文件中有效
	//存储平年中的某个月1日之前有多少天，为便于getMaxDay函数的实现，该数组多出一项
	const int DAYS_BEFORE_MONTH[] = { 0,31,59,90,120,151,181,212,243,273,304,334,365 };
};
Date::Date(int year, int month, int day) : year(year), month(month), day(day) {
	//只验证天数不验证年月？
	if (day <= 0 || day > getMaxDay()) {
		cout << "Invalid date: ";
		show();
		cout << endl;
		exit(1);								//exit（1）：非正常运行导致退出程序；
	}
	int years = year - 1;
	totalDays = years * 365 + years / 4 - years / 100 + years / 400 + DAYS_BEFORE_MONTH[month - 1] + day;
	if (isLeapYear() && month > 2) totalDays++;
}
int Date::getMaxDay() const {
	if (isLeapYear() && month == 2)
		return 29;
	else
		return DAYS_BEFORE_MONTH[month] - DAYS_BEFORE_MONTH[month - 1];
}
void Date::show() const {
	cout << getYear() << "-" << getMonth() << "-" << getDay();
}
~~~

~~~cpp
//account.h
#ifndef __ACCOUNT_H__
#define __ACCOUNT_H__
#include"date.h"
#include<string>
class SavingsAccount {							//储蓄账户类
private:
	std::string id;									//账号
	double balance;									//余额
	double rate;									//存款的年利率
	Date lastDate;									//上次变更余额的时期
	double accumulation;							//余额按日累加之和
	static double total;							//所有账户的总金额
	//记录一笔账,date为日期，amount为金额，desc为说明
	void record(const Date& date, double amount, const std::string& desc);
	//报告错误信息
	void error(const std::string& msg) const;
	//获得到指定日期为止的存款金额按日累积值
	double accumulate(const Date& date) const {
		return accumulation + balance * date.distance(lastDate);
	}
public:
	//构造函数
	SavingsAccount(const Date& date, const std::string& id, double rate);
	const std::string& getId() const { return id; } //返回值是string类型的引用，也就是id本身
	double getBalance() const { return balance; }
	double getRate() const { return rate; }
	static double getTotal() { return total; }
	//存入现金
	void deposit(const Date& date, double amount, const std::string& desc);
	//取出现金
	void withdraw(const Date& date, double amount, const std::string& desc);
	//结算利息,每年1月1日调用一次该函数
	void settle(const Date &date);
	//显示账户信息
	void show() const;
};
#endif									//__ACCOUNT_H__
~~~

~~~cpp
//account.cpp
#include "account.h"
#include <cmath>
#include <iostream>
using namespace std;
double SavingsAccount::total = 0;
//SacingsAccount类相关函数的实现
SavingsAccount::SavingsAccount(const Date& date, const std::string& id, double rate):id(id),balance(0),rate(rate),lastDate(date),accumulation(0){
	date.show();
	cout << "\t#" << id << " create" << endl;
}
void SavingsAccount::record(const Date &date, double amount, const string& desc){
	accumulation = accumulate(date);
	lastDate = date;
	amount = floor(amount * 100 + 0.5) / 100;					//保留小数点后两位
	balance += amount;
	total += amount;
	date.show();
	cout << "\t# " << id << "\t" << amount << "\t" << balance << "\t" << desc << endl;
}
void SavingsAccount::error(const string& msg) const {
	cout << "Error(# " << id << "): " << msg << endl;
}
void SavingsAccount::deposit(const Date& date, double amount, const string& desc) {
	record(date, amount, desc);
}
void SavingsAccount::withdraw(const Date& date, double amount, const string& desc) {
	if (amount > getBalance())
		error("not enough money");
	else
		record(date, -amount, desc);
}
void SavingsAccount::settle(const Date& date) {
	//计算年息
	double interest = accumulate(date) * rate / date.distance(Date(date.getYear() - 1, 1, 1));
	if (interest != 0)
		record(date, interest, "interest");
	accumulation = 0;
}
void SavingsAccount::show() const {
	cout << id << "\tBalance: " << balance;
}
~~~

~~~cpp
//6_25.cpp
#include "account.h"
#include <iostream>
using namespace std;
int main() {
	Date date(2008, 11, 1);									//起始日期
	//建立几个账户
	SavingsAccount accounts[] = {
		SavingsAccount(date, "03755217", 0.015),
		SavingsAccount(date, "02342342", 0.015)
	};
	const int n = sizeof(accounts) / sizeof(SavingsAccount);
	//11月份的几笔账目
	accounts[0].deposit(Date(2008, 11, 5), 5000, "salary");
	accounts[1].deposit(Date(2008, 11, 25), 10000, "sell stock 0323");
	//12月份的几笔账目
	accounts[0].deposit(Date(2008, 12, 5), 5500, "salary");
	accounts[1].withdraw(Date(2008, 12, 20), 4000, "buy a laptop");
	//结算所有账户并输出各个账户信息
	cout << endl;
	for (int i = 0; i < n; i++) {
		accounts[i].settle(Date(2009, 1, 1));
		accounts[i].show();
		cout << endl;
	}
	cout << "Total: " << SavingsAccount::getTotal() << endl;
	return 0;
}
~~~

![运行结构](/images/cpp2/image-20210119143650821.png)

**细节：**以上程序的Date类的构造函数中使用了exit 函数，该函数的原型声明在cstdlib头文件中。它用来立即终止当前程序的执行，并且将一个整数返回给系统，该整数的作用与由主函数main返回的整数相同，如果是0表示程序正常退出，如果非0表示程序异常退出。

上面的程序中增加了Date类，把对日期的表示均替换为Date类型。从输出结果明以看出，用“年-月-日”的形式所表示的日期与整数相比要直观得多。此外，本例广泛应用了字符串，这样在银行账号中可以出现字母，而且为每笔账目增加了说明文字，使得程序输出的信息更加丰富。 在主程序中，两个银行账户是用数组表示的，这样最后所执行的账户结算和输出账户信息的操作可以在一个循环中进行，无须把同样的代码书写多遍。

### 6.8 深度探索

