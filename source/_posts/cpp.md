---
title: c++语言程序设计（1-5章）
date: 2021-01-01 20:14:09
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/cpp/cpp.jpg
mathjax: true
summary: <del> 持续更新中 </del>（已完结）
categories: C++
tags:
 - C++
 - C++语言设计指南（第4版）
typora-root-url: ..
---

<span style="color: #c31887;">第一次学是在2017上半年，大一的第二个学期，虽然当时学的挺不错，但是已经忘了许多，最近需要找工作，重新学一下。</span>

使用的教材：C++语言程序设计（第4版）郑莉等

<center><span style='color:blue;font-size:15px'>2021/1/1</span></center>

## 第1章 绪论

### 1.2 面向对象的方法

**对象**：用来描述客观事物的一个实体，用来构成系统的一个基本单位，由**一组属性**和**一组行为**构成

**类**：具有相同属性和服务的**一组对象的集合**

**封装**：把对象的属性和服务结合成一个独立的系统单位，并尽可能隐藏对象的内部细节

**继承**：继承类的对象拥有其一般类的全部属性和服务，称作特殊类对一般类的继承

**多态性**：在一般类中定义的属性或行为，被特殊可继承之后，可以具有不同的数据类型或表现出不同的行为

### 1.4 信息的表示与存储

#### 1.4.2 进制的转换

十进制转换2（或x）进制：

整数部分：除2取余

小数部分：乘2取整

然后拼在一起

#### 1.4.3 信息的存储单位

**位**（bit）：1位二进制信息

**字节**（Byte）：由8位二进制数字组成，是信息存储中最常用的基本单位

**字**（Word）:字是位的组合，并作为一个独立的信息单位处理。常用的固定字长有8位、16位、32位等。

**机器字长**：机器字长一般是指参加运算的寄存器所含有的二进制数的位数，它代表了机器的精度，如32位、64位等。

#### 1.4.4 二进制数的编码表示

**原码**：符号数字位化为0（正）和1（负）

**反码**：作为补码的中间码，正数不变，负数符号位不变，其余各位取反

**补码**：正数不变，负数由反码的最末位加1

补码符号位可以作为数值参加运算，补码运算的结果仍为补码

#### 1.4.5 浮点数的表示

N：要表示的浮点数，用科学计数法写就是

$$N=M*R^E$$

R：基数，计算机用2做基数

E：N的阶码

M：N的全部有效数字，称为N的尾数

![浮点数](/images/cpp/123.png)

#### 1.4.6 数的表示范围（补码）

8位整数的无符号数可以表示0 ~ +255

8位整数的有符号数可以表示-128 ~ +127（因为0占正数一个空间）

n位小数范围为 -$1$ ~ +$(1-2^{-n})$

为了同时满足对浮点数的范围和精度的要求，往往采用**双倍字长**甚至**更多个字长**来表示一个浮点数

#### 1.4.8 汉字英文信息的表示

西文使用ASCII码来表示，使用一个字节中的7位来表示128个字符，剩下一位作为校验码

汉字可以使用GB2312（国标码），2字节码，用两个7位二进制数编码表示一个汉字（还有其他的编码方式）

### 1.5 程序开发的基本概念

#### 1.5.1 基本术语

**源程序**：源代码

**目标程序**：是源程序经过翻译加工后生成的程序，目标程序可以用机器语言或者汇编语言来表示

**翻译程序**：把源程序翻译为目标程序的程序
				-汇编程序：把汇编语言翻译成机器语言形式的目标程序
				-编译程序：把高级语言翻译成目标程序
				-解释程序：也是把高级语言翻译成机器指令，但是不生成整个的目标程序，边翻译边执行，需要重复解释循环语句，效率较低

#### 1.5.2 完整的程序过程

| 编辑 | 编译 | 连接 | 运行 |
| ---- | ---- | ---- | ---- |
| .cpp | .obj | .exe |      |

连接是将多个目标文件以及库中的某些文件放在一起，生成exe

<center><span style='color:blue;font-size:15px'>2021/1/2</span></center>

## 第2章 C++简单程序设计

### 2.2 基本数据类型和表达式

#### 2.2.1 基本数据类型

变量的大小会根据编译器和所使用的电脑而有所不同

我电脑上的基本数据类型大小：

![数据大小](/images/cpp/image-20210102143445587.png)

#### 2.2.2 常量

八进制以0开头
十六进制以0x开头
字符常量用ASCII码存储，可以用转义字符’\‘输入
字符串常量末尾需要添加'\0'作为结尾标记

#### 2.2.3 变量

16进制和指数形式的表示:

~~~cpp
int main() {
	int a = 0x123;
	cout <<"hex:"<< hex << a << endl;
	float b = 0.24E+2;
	cout << b << endl;
}
~~~

![16进制](/images/cpp/image-20210102145702550.png)

#### 2.2.5 运算符与表达式

"%"的优先级与"/"相同

赋值表达式运算"="的结合性为从右往左 
	例：a=b=c=5

<u>**复合的赋值运算符**</u>有10种，优先级与"="相同，结合性也是从右往左
	例：a+=a-=a*a 

**<u>逗号运算符</u>**为","逗号表达式形式为 “表达式1,表达式2” ，求解顺序是先1后2，最终结果为表达式2的值
	例：a=3\*5,a*4	最终结果为60

**<u>关系运算符</u>**的优先级：
关系表达式的结果类型为bool，值只能是true或false![关系运算符](/images/cpp/image-20210102151756711.png)

**<u>逻辑运算符</u>**的优先级："!">"&&">"||"
	注意：“&&”和“||”运算具有短路特性
	“&&”的第一个值为false就不对第二个求值，“||”的第一个值为true就不对第二个求值

<u>**条件运算符**</u>“?”是c++中唯一的一个三元运算符

**<u>sizeof运算符</u>**用来计算**某种类型**的对象在内存中所占的字节数（是计算类型的，不对表达式求值）

<u>**位运算**</u>：
c++提供了6个位运算符
（1）按位与（&）：
![](/images/cpp/image-20210102153802519.png)
可以将操作数中的任意位置0，其他位不变（如和11110111与）
也可以取出一个数的低字节（如和00001111与）
（2）按位或（|）：可以将操作数中的任意位置1，其他位不变（如和00001000或）
（3）按位异或（^）：可以将操作数中的若干位置翻转（取反）
（4）按位取反（~）：单目运算符，对每一位都取反
（5）移位（<<）（>>）：左移低位补0，高位舍弃，右移低位舍弃，高位补符号位（有符号的话）
		注意：移位运算的结果是表达式的值，不改变变量本身的值，如a>>2不改变a

**<u>混合运算时数据类型的转换</u>**：
（1）隐含转换：操作数类型不一致时，编译系统会自动对数据进行转换（由低类型到高类型）![隐含转换](/images/cpp/image-20210102160055384.png)
（2）显式转换：如a=（int）b

### 2.3 数据的输入与输出

在C++中，**将数据从一个对象到另一个对象的流动抽象为“<u>流</u>”。流在使用前要被建立，使用后要被删除。数据的输入与输出是通过I/O流来实现的**，cin和cout是预定义的流类对象。cin用来处理标准输入，即键盘输入。cout用来处理标准输出，即屏幕输出。

### 2.4 算法的基本控制结构

顺序结构，选择结构和循环结构

~~~cpp
//2_2.cpp 判断闰年
#include<iostream>
using namespace std;

int main(){
	int year;
	bool isLeapYear;
	cout << "Enter the year:";
	cin >> year;
	isLeapYear = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
	if (isLeapYear)
		cout << year << "is a leap year" << endl;
	else
		cout << year << "is not a leap year" << endl;
}
~~~

**goto 语句**允许把控制无条件转移到同一函数内的被标记的语句，goto 语句一个很好的作用是退出深嵌套例程。

~~~cpp
goto label;
..
.
label: statement;
~~~

### 2.5 自定义数据结构

**枚举**（enumerate）类型 enum：
例：enum Weekday{SUN,MON,TUE,WED,THU,FRI,SAT};
对枚举元素按常量处理，不能对它们赋值
枚举元素具有默认值，依次为：0,1,2,··· 
也可以在声明时另行定义枚举元素的值，
如：enum Weekday{SUN=7,MON=1,TUE,WED,THU,FRI,SAT};
定义SUN为7，MON为1，以后顺序加1，SAT为6

~~~cpp
// 2_11.cpp 枚举
#include<iostream>
using namespace std;

enum GameResult { WIN, LOST, TIE, CANAEL };
int main(){
	GameResult result;
	enum GameResult omit = CANAEL;							//也可以在类型名前写enum     

	for (int count = WIN; count <= CANAEL; count++){		//隐式类型转换
		result = GameResult(count);							//显式类型转换
		if (result == omit)
			cout << "the game was cancelled" << endl;
		else{
			cout << "the game was played";
			if (result == WIN)
				cout << "and we won!";
			if (result == LOST)
				cout << "and we lost.";
			cout << endl;
		}
	}
	return 0;
}
~~~

### 2.6 深度探索

#### 2.6.1 变量的实现机制

编译器需要根据变量的数据类型选择适当的指令，CPU所执行的指令并不对操作数的类型加以区分。
（因为两个不同类型的数，值不一样，但是他们的二进制形式可能一样）

#### 2.6.2 C++表达式的执行原理（汇编assembly）

CPU的大部分读写操作都是对寄存器进行的，IA-32的通用寄存器有eax,ebx,ecx,edx,esp,ebp,esi,edi八个，都是32位寄存器。
例：$d=(a+b)*c$

~~~wasm
mov 0x80495dc,%eax		//将 0x80495dc 地址内的32位整数装入eax寄存器（0x80495dc为内存地址，在cpu处理需放入寄存器）
mov 0x80495d8,%ecx		//将 0x80495d8 地址内的32位整数装入ecx寄存器
add %eax,%ecx			//将 eax 和 ecx 两寄存器内的数相加，结果放在ecx寄存器中
mov 0x80495e4,%eax		//将 0x80495e4 地址内的32位证书装入eax寄存器
imul %ecx,%eax			//将 eax 和 ecx 寄存器中的两个32位有符号整数相乘,得到一个64
						//位整数,结果的低32位放入 eax 寄存器,高32位放入 edx 寄存器（d也是32位整数，所以只取低32位）
mov %eax,0x80495e4		//将 eax 寄存器中的32位证书存入 0x80495e4 地址中
~~~

### 习题

2-1 C++语言有哪些主要特点和优点？
答：
优点：性能优势，触碰底层；
缺点：难学，开发时间慢成本高，大型项目或者图形编程更需要，垃圾处理不如java，指针操作会带来不安全；

<center><span style='color:blue;font-size:15px'>2021/1/3</span></center>

## 第3章 函数

### 3.1 函数的定义与使用

#### 3.1.2 函数的调用

~~~cpp
// 3_2.cpp 将八位二进制数转换为十进制
#include<iostream>
using namespace std;

//计算x的n次方
double power(double x, int n);
int main() {
	int value = 0;
	cout << "Enter an 8 bit binary number:";
	for (int i = 7; i >= 0; i--) {
		char ch;
		cin >> ch;
		if (ch == '1')
			value += static_cast<int>(power(2, i));
	}
	cout << "Decimal value is " << value << endl;
	return 0;
}
double power(double x, int n) {
	double val = 1.0;
	while (n--)
		val *= x;
	return val;
}
~~~

~~~cpp
//3_4.cpp 寻找并输出11~999之间的数m，它满足m,m^2,m^3均为回文数。
#include<iostream>
using namespace std;
bool symm(unsigned n) {
	unsigned i = n;
	unsigned m = 0;
	while (i > 0) {
		m = m * 10 + i % 10;
		i /= 10;
	}
	return m == n;
}
int main() {
	for(unsigned m = 11; m < 1000; m++)
		if (symm(m) && symm(m * m) && symm(m * m * m)) {
			cout << "m=" << m;
			cout << " m*m=" << m * m;
			cout << " m*m*m=" << m * m * m << endl;
		}
	return 0;
}
~~~

**递归调用：**
递归算法的实质是将原有的问题分解为新的问题，而解决新问题时又用到了原来问题的解法。按照这一原则分解下去，每次出现的新问题都是原有问题的简化的子集，而最终分解出来的问题，是一个已知解的问题，这便是有限的递归调用。只有有限的递归调用才是有意义的。
递归的过程有两个阶段:
**第一阶段：递推** 将原问题不断分解为新的子问题，逐渐从未知向已知推进，最终到达已知的条件。
**第二阶段：回归** 从已知的问题出发，按照递推的逆过程，逐一求值回归，最后达到递推的开始处。

~~~cpp
//3_9.cpp 计算从n个人里选k个人的组合数
#include<iostream>
using namespace std;
int comn(int n, int k) {
	if (k > n)
		return 0;
	else if (n == k || k == 0)
		return 1;
	else return comn(n - 1, k) + comn(n - 1, k - 1);
}
int main() {
	int n, k;
	cout << "Please enter two integers n and k:";
	cin >> n >> k;
	cout << "C(n,k)=" << comn(n, k) << endl;
	return 0;
}
~~~

~~~cpp
//3_10.cpp 汉诺塔问题
#include<iostream>
using namespace std;
int movecount=0;
//把src针的最上面一个盘子移动到dest针上
void move(char src, char dest) {
	cout << src << "-->" << dest << endl;
	movecount++;
}
//把n个盘子从src针移动到dest针，以medium针为中介
void hanoi(int n, char src, char medium, char dest) {
	if (n == 1)
		move(src, dest);
	else {
		hanoi(n - 1, src, dest, medium);
		move(src, dest);
		hanoi(n - 1, medium, src, dest);
	}
}
int main() {
	int m;
	cout << "Enter the number of diskes: ";
	cin >> m;
	cout << "the steps to moving " << m << " diskes:" << endl;
	hanoi(m, 'A', 'B', 'C');
	cout << "total move number: " << movecount;
	return 0;
}
~~~

#### 3.1.3 函数的参数传递

在函数未被调用时，函数的形参并不占有实际的内存空间，也没有实际的值。只有在函数被调用时才为形参分配粗存储单元，并将实参与形参结合。

**1.值传递**：（直接将实参的值传递给形参）
这一过程是参数值的单向传递过程，一旦形参获得了值便与实参脱离关系，以后形参的变化不会影响实参。

**2.引用传递：**
引用是一种特殊类型的变量，可以被认为是另一个变量的别名，声明一个引用时，必须同时对它进行初始化，使他指向一个已存在的对象，一旦一个引用被初始化后，就不能改为指向其他对象。将引用作为形参，在调用表达式时，才为形参分配内存空间，同时用实参来初始化形参。这样引用类型的形参就通过形实结合，成为了实参的一个别名，对形参的任何操作也就会直接作用于实参。

### 3.2 内联函数

对于一些功能简单，规模较小而又使用频繁的函数，可以设计为内联函数。内联函数不是在调用时发生控制转移，而是在编译时将函数体嵌在每一个调用处。这样就节省了参数传递，控制转移等开销。
内联函数的定义只需要使用关键字inline

**注意**：内联只是一个请求，编译器并不承诺将inline修饰的函数作为内联，多数编译器会自动判断处理，如递归函数编译器会只内联到一定深度或根本不内联

~~~cpp
//3_14.cpp 内联函数应用举例
#include<iostream>
using namespace std;
const double PI = 3.14159265358979;

//内联函数，根据圆的半径计算其面积
inline double calArea(double radius) {
	return PI * radius * radius;
}
int main() {
	double r = 3;
	//调用内联函数求圆面积，编译时此处被替换为calArea函数体语句
	double area = calArea(r);
	cout << area << endl;
	return 0;
}
~~~

### 3.3 带默认形参值的函数

函数在定义时可以预先声明默认的形参值。调用时如果给出实参，则用实参初始化形参，如果没有给出实参，则采用预先声明的默认形参值。例如：

~~~cpp
int add(int x = 5, int y = 6) {
	return x + y;
}
~~~

有默认值的形参必须在形参列表的最后，也就是说，在有默认值的形参右面，不能出无默认值的形参。

**在相同的作用域内**，不允许在同一个函数的多个声明中对同一个参数的默认值重复定义，即使前后定义的值相同也不行。

### 3.4 函数重载

两个以上的函数，具有相同的函数名，但形参的个数或者类型不同，编译器根据实参和形参的类型及个数的最佳匹配，自动确定调用哪一个函数，这就是函数的重载

![函数重载](/images/cpp/image-20210104011010905.png)

### 3.5 系统函数

可以访问zh.cppreference.com查阅常用的C++函数的原型，头文件和用法

### 3.6 深度探索

#### 3.6.1 运行栈与函数调用的执行

嵌套调用使用运行栈来存储数据，执行过程见课本p91

### 习题

~~~cpp
//t3_9.cpp 编写函数判别一个数是否是质数（素数），在主程序中实现输入输出
#include<iostream>
#include<cmath>
using namespace std;

bool is_prime(int n) {
	if (n <= 1) return false;
	if (n == 2) return true;
	if (n % 2 == 0) return false;
	for (int i = 3; i <= sqrt(n); i += 2)
		if (n % i == 0) return false;
	return true;
}
int main() {
	int n;
	cin >> n;
	if (is_prime)
		cout << n << "是素数" << endl;
	else
		cout << n << "不是素数" << endl;
}
~~~

~~~cpp
//t3_10 编写函数求两个整数的最大公约数和最小公倍数
#include<iostream>
using namespace std;
//辗转相除法
int gcd(int a, int b) {
	if (a % b == 0)
		return b;
	else
		return gcd(b, a % b);
}
int lcm(int a, int b) {
	return a * b / gcd(a, b);
}
int main() {
	int a, b;
	cin >> a >> b;
	cout << "最大公约数：" << gcd(a, b) << endl;
	cout << "最小公倍数：" << lcm(a, b) << endl;
}
~~~

~~~cpp
//t3_13.cpp 用递归的方式编写函数求Fibonacci(斐波那契)级数，观察调用的过程
#include<iostream>
using namespace std;
int Fibonacci(int n) {
	if (n == 1 || n == 2)
		return 1;
	else
		return Fibonacci(n - 1) + Fibonacci(n - 2);
}
int main() {
	int n;
	cin >> n;
	cout << Fibonacci(n);
}
~~~



## 第4章 类与对象

### 4.1 面向对象程序设计的基本特点

#### 4.1.1 抽象

抽象是对具体对象（问题）进行概括，抽出这一类对象的公共性质并加以描述的过程。
首先注意的是问题的本质及描述，其次是解决问题的具体过程
对一个问题的抽象应该包括两个方面:数据抽象和行为抽象（或称为功能抽象、代码抽象）
前者描述某类对象的属性或状态，后者描述某类对象的共同行为或功能特征
例：一个时钟
数据抽象：int hour,int minute,int second
功能抽象：showTime（）,setTime（）

#### 4.1.2 封装

封装就是将抽象得到的数据和行为相结合，形成一个有机的整体，也就是将数据与操作数据的函数代码进行有机的结合，形成”类“，其中的数据和函数都是类的成员

![时钟类](/images/cpp/image-20210104012147193.png)

#### 4.1.3 继承

C++语言中提供了类的继承机制，允许程序员在保持原有类特性的基础上，进行更具体更详细的说明。
——详见第7章

#### 4.1.4 多态

从广义上说，多态性是指一段程序能够处理多种类型对象的能力。在C++语言中，这种多态性可以通过强制多态、重载多态、类型参数化多态、包含多态4种形式来实现。
包含多态和类型参数化多态属于一般多态性，是真正的多态性。C++中采用虚函数实现包含多态。虚函数是多态性的精华，将在第8章介绍。模板是C++实现参数化多态性的工具，将在第9章介绍。

<center><span style='color:blue;font-size:15px'>2021/1/4</span></center>

### 4.2 类和对象

#### 4.2.2 类成员的访问控制

对类成员的访问权限的控制，是通关设置成员的访问控制属性而实现的。访问控制性可以有以下3种：公有类型（public）私有类型（private）和保护类型（protected）
公有类型成员定义了类的外部接口
私有成员只能被本类的成员函数访问，来自类外部的任何访问都是非法的
保护类型成员的性质和私有成员的性质相似，其差别在于继承过程中对产生的新类影响不同（详见第7章）
在类中，对于未指定任何访问控制属性的成员，其访问控制属性为私有类型
习惯：在书写时通畅将公有类型放在最前面，这样便于阅读，因为它们是外部访问时所要了解的

<center><span style='color:blue;font-size:15px'>2021/1/5</span></center>

#### 4.2.3 对象

类实际上是一种抽象机制，它描述了一类事物的共同属性和行为。在C++中，类的对象就是该类的某一特定实体（也称实例）

**注意**：对象所占据的内存空间只是用于存放数据成员，函数成员不在每一个对象中存储副本，每个函数的代码在内存中只占据一份空间。

在类的外部只能访问到类的共有成员；在类的成员函数中，可以访问到类的全部成员

#### 4.2.4 类的成员函数

##### 1.成员函数的实现

函数的原型声明要写在类体中，原型说明了函数的参数表和返回值类型。而函数的具体实现是写在类定义外的。

类的成员函数需要用类名来限制，例如”Clock::ShowTime"

##### 2.成员函数中的目的对象

调用一个成员函数与调用普通函数的差异在于，需要使用“."操作符指出调用所针对的对象，这一对象在本次调用中称为目的对象。例如使用myClock.showTime（）调用showTime函数时，myClock就是这一调用过程中的目的对象。

**注意**：在类的成员函数中，既可以访问目的对象的私有成员，又可以访问当前类的其他对象的私有成员

##### 3.带默认形参值的成员函数

类的成员函数也可以有默认形参值，其调用规则与普通函数相同

##### 4.内联成员函数

要在权衡利弊的基础上慎重选择，只有对相对简单的成员函数才可以声明为内联函数。

内联函数的声明有两种方法：隐式声明和显式声明

隐式声明：将函数体直接放在类体内

![隐式声明](/images/cpp/image-20210105124151720.png)

显式声明：在函数体实现时，在函数返回值类型前加上inline

显式声明和隐式声明的效果是完全相同的

#### 4.2.5 程序实例

~~~cpp
//4_1.cpp 时钟类的完整程序
#include <iostream>
using namespace std;

class Clock {													//时钟类的定义
public:															//外部接口，公有成员函数
	void setTime(int newH = 0, int newM = 0, int newS = 0);
	void showTime();	
private:														//私有数据成员
	int hour, minute, second;
};

//时钟类成员函数的具体实现
void Clock::setTime(int newH, int newM, int newS) {
	hour = newH;
	minute = newM;
	second = newS;
}

inline void Clock::showTime() {
	cout << hour << ":" << minute << ":" << second << endl;
}

int main() {
	Clock myclock;												//定义对象myclock
	cout << "First time set and output:" << endl;
	myclock.setTime();
	myclock.showTime();
	cout << "Second time set and output" << endl;
	myclock.setTime(8, 30, 30);
	myclock.showTime();
	return 0;
}
~~~

### 4.3 构造函数和析构函数

#### 4.3.1 构造函数

构造函数的作用是在对象被创建时使用特定的值构造对象，将对象初始化为一个特定的状态。
只要有了构造函数，编译器就会在建立新对象的地方自动插入对构造函数调用的代码。
调用时无需提供参数的构造函数称为**默认构造函数**，如果类中没有写构造函数，编译器会自动生成一个隐含的默认构造函数，该构造函数的参数列表和函数体皆为空。如果在类中声明了构造函数，编译器便不会生成默认构造函数。

~~~cpp
class Clock{
public:
	Clock(){}				/*编译系统生成的隐含的默认构造函数*/
    ...
};
~~~

**构造函数**的函数名与类名相同，而且没有返回值

~~~cpp
class Clock
{
public:
    Clock(int NewH, int NewM, int NewS);//构造函数
    void SetTime(int NewH, int NewM, int NewS);
    void ShowTime();
private:
    int Hour, Minute, Second;
};

//构造函数的实现：
Clock::Clock(int NewH, int NewM, int NewS) {
    Hour = NewH;
    Minute = NewM;
    Second = NewS;
}
~~~

作为类的成员函数，构造函数可以直接访问类的所有数据成员，可以是内联函数，可以带有参数表，可以带默认的形参值，也可以重载

```cpp
class Clock
{
  public:
    Clock (int newH, int newM, int newS);	//构造函数
    Clock (){								//构造函数
         hour=0;
         minute=0;
         second=0;
    }
    void setTime(int newH, int newM, int newS);
     void showTime();
  private:
    int hour,minute,second;
};

//其他函数实现略

void main()
{
    Clock c1(0,0,0); 						//调用有参数的构造函数
    Clock c2; 								//调用无参数的构造函数
}
```

#### 4.3.2 复制构造函数

复制构造函数是一种特殊的构造函数，其形参为本类的对象的引用。
其作用是使用一个已经存在的对象（由复制构造函数的参数指定），去初始化同类的一个新对象。
如果没有定义类的复制构造函数，系统就会在必要时自动生成一个隐含的复制构造函数。

~~~cpp
class Point
{
   public:
       Point(int xx=0,int yy=0){		//构造函数
          X=xx; Y=yy;
       }
       Point(Point &p);   				//复制构造函数
       int GetX() {return X;}
       int GetY() {return Y;}
   private:
       int  X,Y;
};
//复制构造函数的实现
Point::Point(Point &p)
{
      X=p.X;
      Y=p.Y;
      cout<<"Calling the copy constructor"<<endl;
}
~~~

普通构造函数是在对象创建时被调用，而复制构造函数在以下3种情况下都会被调用。

（1）当用类的一个对象去初始化该类的另一个对象时。例如

~~~cpp
int main(){
    Point a(1,2);
    Point b(a);  			//用对象a初始化对象b，复制构造函数被调用
    Point c=a;   			//用对象a初始化对象c，复制构造函数被调用
    cout<<b.getX()<<endl;
    return 0;
}
~~~

细节:以上对b和c的初始化都能够调用复制构造函数，两种写法只是形式上有所不同，执行的操作完全相同。

（2）如果函数的形参是类的对象，调用函数时，进行形参和实参结合时。例如：

~~~cpp
void f(Point p)
{   cout<<p.getX()<<endl;
} 
void main()
{   Point a(1,2);
    f(a);					//函数的形参为类的对象，当调用函数时，复制构造函数被调用
 	return 0;
}     
~~~

提示：只有把对象用值传递时，才会调用复制构造函数，如果传递引用，则不会调用复制构造函数。
由于这一原因，传递比较大的对象时，传递引用会比传值的效率高很多。

（3）如果函数的返回值是类的对象，函数执行完成返回调用者时。例如：

~~~cpp
Point g()
{   
    Point a(1,2);
    return a;				//函数的返回值是类对象，返回函数值时，调用复制构造函数
} 
void main()
{   Point b;
    b=g();					//       
}     
~~~

为什么在这种情况下，返回函数值时，会调用复制构造函数呢？表面上函数g将a返回给了主函数，但是a是g（）的局部对象，离开建立它的函数g以后就消亡了，不可能在返回主函数后继续生存，所以在处理这种情况时编译系统会在主函数中创建一个无名临时对象，该临时对象的生存期只在函数调用所处的表达式中，也就是表达式"b=g（）"中。执行语句"return a，”时，实际上是调用复制构造函数将a的值复制到临时对象中。函数g运行结束时对象a消失，但临时对象会存在于表达式"b=g（）"中。计算完这个表达式后，临时对象的使命也就完成了，该临时对象便自动消失。

~~~cpp
//4_2.cpp 复制构造函数的3种情况
#include<iostream>
using namespace std;
class Point {
public:
	Point(int xx = 0, int yy = 0) {
		x = xx;
		y = yy;
	}
	Point(Point& p);
	int getx() {
		return x;
	}
	int gety() {
		return y;
	}
private:
	int x, y;
};

Point::Point(Point& p) {
	x = p.x;
	y = p.y;
	cout << "Calling the copy constructor" << endl;
}
//形参为Point类对象的函数
void fun1(Point p) {
	cout << p.getx() << endl;
}
//返回值为Point类对象的函数
Point fun2() {
	Point a(1, 2);
	return a;
}

int main() {
	Point a(4, 5);
	Point b = a;						//情况一，用a初始化b。第一次调用复制构造函数
	cout << b.getx() << endl;
	fun1(b);
	b = fun2();							//情况二，对象b作为fun1的实参。第二次调用复制构造函数
	cout << b.getx() << endl;			//情况三，函数的返回值是类对象，函数返回时，调用复制构造函数
	return 0;
}
~~~

#### 4.3.3 析构函数

简单来说，析构函数与构造函数的作用几乎正好相反，它用来完成对象被删除前的一些清理工作，也就是专门做扫尾工作的。析构函数是在对象的生存期即将结束的时刻被**自动调用**的。它的调用完成之后，对象也就消失了，相应的内存空间也被释放。
与构造函数一样，析构函数通常也是类的一个公有函数成员，它的名称是由**类名前面加“~”**构成，没有返回值。和构造函数不同的是析构函数不接收任何参数，但可以是虚函数（将在第8章介绍）。如果不进行显式说明，系统也会生成一个函数体为空的隐含析构函数。
如果希望程序在对象被删除之前的时刻自动（不需要人为进行函数调用）完成某些事情，就可以把它们写到析构函数中。

#### 4.3.4 程序实例

例题：游泳池改造预算，Circle类
一圆型游泳池如图所示，现在需在其周围建一圆型过道，并在其四周围上栅栏。栅栏价格为35元/米，过道造价为20元/平方米。过道宽度为3米，游泳池半径由键盘输入。要求编程计算并输出过道和栅栏的造价。
![](/images/cpp/862591-20200301235232229-39158544.png)

~~~cpp
//4_3.cpp 游泳池改造预算
#include <iostream>
using namespace std;

const float PI = 3.14159;
const float FENCE_PRICE = 35;
const float CONCRETE_PRICE = 20;

class Circle {                              //声明类Circle 及其数据和方法
public:
    Circle(float r);                        //构造函数
    float circumference();                  //圆周长
    float area();                           //园面积
private:
    float radius;                           //圆半径
};
// 类的实现
// 构造函数初始化数据成员radius
Circle::Circle(float r) {
    radius = r;
}

// 计算圆的周长
float Circle::circumference() {
    return 2 * PI * radius;
}

// 计算圆的面积
float Circle::area() {
    return PI * radius * radius;
}
int main() {
    float radius;
    cout << "Enter the radius of the pool: ";
    cin >> radius;

    Circle Pool(radius);                    //游泳池边界对象
    Circle PoolRim(radius + 3);             //栅栏对象
    // 计算栅栏造价并输出
    float fenceCost = PoolRim.circumference() * FENCE_PRICE;
    cout << "Fencing Cost is $" << fenceCost << endl;

    //  计算过道造价并输出
    float concreteCost = (PoolRim.area() - Pool.area()) *CONCRETE_PRICE;
    cout << "Concrete Cost is $" << concreteCost << endl;
    return 0;
}
~~~

### 4.4 类的组合

在面向对象程序设计中，可以对复制对象进行分解，抽象，把一个复制对象分解为简单对象的组合

#### 4.4.1 组合

当创建类的对象时，如果这个类具有内嵌对象成员，那么各个内嵌对象将首先被自动创建。在创建对象时既要对本类的基本类型数据进行初始化，又要对内嵌对象成员进行初始化。
构造函数的调用顺序如下：
（1）调用内嵌对象的构造函数，调用顺序按照内嵌对象在组合类的定义中出现的次序
（2）执行本类构造函数的函数体
析构函数的调用执行顺序与构造函数刚好相反

<center><span style='color:blue;font-size:15px'>2021/1/6</span></center>

~~~cpp
//4_4.cpp 类的组合，线段（line）类
#include<iostream>
#include<cmath>
using namespace std;
class Point {
public:													//Point类定义
	Point(int xx = 0, int yy = 0) {
		x = xx;
		y = yy;
	}
	Point(Point& p);
	int getX() { return x; }
	int getY() { return y; }
private:
	int x, y;
};
Point::Point(Point& p) {
	x = p.x;
	y = p.y;
	cout << "Calling the copy constructor of Point" << endl;
}

//类的组合
class Line {
public:
	Line(Point xp1, Point xp2);
	Line(Line& l);
	double getLen() { return len;}
private:
	Point p1, p2;
	double len;
};

//组合类的构造函数
Line::Line(Point xp1, Point xp2):p1(xp1), p2(xp2){
	cout << "Calling constructor of Line" << endl;
	double x = static_cast<double>(p1.getX() - p2.getX());
	double y = static_cast<double>(p1.getY() - p2.getY());
	len = sqrt(x * x + y * y);
}

//组合类的复杂构造函数
Line::Line(Line& l) :p1(l.p1), p2(l.p2) {
	cout << "Callint the copy constructor of Line" << endl;
	len = l.len;
}

int main() {
	Point myp1(1, 1), myp2(4, 5);
	Line line(myp1, myp2);
	Line line2(line);
	cout << "The length of the line is: ";
	cout << line.getLen() << endl;
	cout << "The length of the line2 is: ";
	cout << line2.getLen() << endl;
	return 0;
}
~~~

![运行结果](/images/cpp/image-20210106101543263.png)

#### 4.4.2 向前引用声明

如果遇到两个类相互引用的情况，应使用前向引用声明

~~~cpp
class Fred;						//前向引用声明
 
 class Barney {
 public:
   void method(){
     x.yabbaDabbaDo();    		//错误：Fred类的对象在定义之前被使用
   }
 private:
   Fred &x;   					//正确，经过前向引用声明，可以声明Fred类的对象指针
 };
 
 class Fred {
 public:
   void yabbaDabbaDo();
 private:
   Barney &y;
 }; 
~~~

编译器在编译时会指出错误，因为在类Barney的内联函数中使用了由x所指向的Fred类的对象，而此时Fred类尚未被完整地定义。解决这个问题的方法是，更改这两个类的定义次序，或者将函数method()改为非内联形式，并且在类Fred的完整定义之后，再给出函数的定义。

**注意**：当使用前向引用声明时，只能使用被声明的符号，而不能涉及类的任何细节。

### 4.5 UML图形标识

UML语言是一个复杂、庞大的系统建模语言，其目标是希望能够解决整个面向对象软件开发过程中的可视化建模。

#### 4.5.1 UML简介

统一建模语言UML ( Unified Modeling Language)

UML语言是一种典型的面向对象建模语言，而不是一种编 程语言，在UMI语言中用符号描述概念，概念间的关系描述为连接符号的线。

标准建模语言UML的重要内容是各种类型的图形，分别描述软件模型的静态结构、动态行为及模块组织和管理。本书主要使用UML中的图形来描述软件中类和对象以及它们的静态关系，使用了最基本的类图(classdiagram)，它属于静态结构图(staticstructure diagrams)的一种。

#### 4.5.2 UML类图

1.类和对象

![UML类图例](/images/cpp/image-20210106124232727.png)

2.几种关系的图形标识

（1）依赖关系

![依赖关系](/images/cpp/image-20210106124626064.png)

（2）作用关系——关联

![关联关系](/images/cpp/image-20210106124647931.png)

（3）包含关系——聚集和组合

![包含关系](/images/cpp/image-20210106125143796.png)

（4）继承关系——泛化

![继承关系](/images/cpp/image-20210106125427699.png)

### 4.6 结构和结构体

#### 4.6.1 结构体

结构体是一种特殊的类。结构体和类的唯一区别在于：在类中，对于未指定任何访问控制属性的成员，其访问控制属性为私有类型；在结构体中，对于未指定任何访问控制属性的成员，其访问控制属性为公有类型；

类和结构体的并存，是由历史原因（保持和c程序的兼容性）造成的，如果完全不使用结构体，也丝毫不会影响程序的表达能力。

#### 4.6.2 联合体

联合体是一种特殊形态的类，它的默认控制属性也是公共类型的，联合体的全部数据成员共享同一组内存单元。

~~~cpp
union Mark {
    char grade;
    bool pass;
    int percent;
};
~~~

![联合体](/images/cpp/image-20210106190029141.png)

正是由于联合体的成员共用同样的内存单元，联合体变量中的成员同时至多只有一个是有意义的

联合体也可以补声明名称，称为无名联合体，可以由成员项的名字直接访问。

~~~cpp
//4_8.cpp 使用联合体保存成绩信息，并且输出
#include<iostream>
#include<string>
using namespace std;

class ExamInfo {
public:
	ExamInfo(string name, char grade) :name(name), mode(GRADE), grade(grade) {};
	ExamInfo(string name, bool psss) :name(name), mode(PASS), pass(pass) {};
	ExamInfo(string name, int percent) :name(name), mode(PERCENTAGE), percent(percent) {};
	void show();
private:
	string name;
	enum {
		GRADE,
		PASS,
		PERCENTAGE
	}mode;
	union {
		char grade;
		bool pass;
		int percent;
	};
};

void ExamInfo::show() {
	cout << name << ": ";
	switch (mode) {
	case GRADE: 
		cout << grade;
		break;
	case PASS:
		cout << (pass ? "PASS" : "FAIL");
		break;
	case PERCENTAGE:
		cout << percent;
		break;
	}
	cout << endl;
}
int main() {
	ExamInfo course1("English", 'B');
	ExamInfo course2("Calculus", true);
	ExamInfo course3("C++ Programming", 85);
	course1.show(); 
	course2.show();
	course3.show();
	return 0;
}
~~~

![运行结果](/images/cpp/image-20210106192518724.png)

### 4.7 综合实例——个人银行账户管理系统

#### 4.7.2 源程序及说明

~~~cpp
//4_9.cpp 个人银行账户管理系统
#include<iostream>
#include<cmath>
using namespace std;
class SavingsAccount {										//储蓄账户类
private:
	int id;													//账户
	double balance;											//余额
	double rate;											//存款的年利率
	int lastDate;											//上次变更余额的时间
	double accumulation;									//余额按日累加之和
	//记录一笔账，date为日期，amount为金额，desc为说明
	void record(int date, double amount);
	//获得到指定日期为止的存款金额按日累积值
	double accumulate(int date) const {
		return accumulation + balance * (date - lastDate);
	}
public:
	SavingsAccount(int date, int id, double rate);
	int getId() { return id; }
	double getBalance() { return balance; }
	double getRate() { return rate; }
	void deposit(int date, double amount);					//存入现金
	void withdraw(int date, double amount);					//取出现金
	//结算利息，每年1月1日调用一次该函数
	void settle(int date);
	//显示账户信息
	void show();
};

SavingsAccount::SavingsAccount(int date, int id, double rate) :id(id), balance(0), rate(rate), lastDate(date), accumulation(0) {
	cout << date << "\t#" << id << "is created" << endl;
}
void SavingsAccount::record(int date, double amount) {
	accumulation = accumulate(date);
	lastDate = date;
	amount = floor(amount * 100 + 0.5) / 100;				//保留小数点后两位
	balance += amount;
	cout << date << "\t#" << id << "\t" << amount << "\t" << balance << endl;
}
void SavingsAccount::deposit(int date, double amount) {
	record(date, amount);
}
void SavingsAccount::withdraw(int date, double amount) {
	if (amount > getBalance())
		cout << "Error:not enough money" << endl;
	else
		record(date, -amount);
}
void SavingsAccount::settle(int date) {
	double interest = accumulate(date) * rate / 365;		//计算年息
	if (interest != 0)
		record(date, interest);
	accumulation = 0;
}
void SavingsAccount::show() {
	cout << "#" << id << "\tBalance:" << balance;
}
int main() {
	SavingsAccount sa0(1, 21325302, 0.015);
	SavingsAccount sa1(1, 58320212, 0.015);
	sa0.deposit(5, 5000);
	sa1.deposit(25, 10000);
	sa0.deposit(45, 5500);
	sa1.withdraw(60, 4000);
	//开户后第90天到了银行的计息日，结算所有账户的年息
	sa0.settle(90);
	sa1.settle(90);
	//输出各个账户信息
	sa0.show();
	cout << endl;
	sa1.show();
	cout << endl;
	return 0;
}
~~~

![输出结果](/images/cpp/image-20210106201828486.png)

<center><span style='color:blue;font-size:15px'>2021/1/7</span></center>

### 4.8 深度探索

#### 4.8.1 位域

位域是一种允许将类的多个数据成员打包，从而使不同的成员可以共享相同的字节的机制
只有bool、char、int、enum的成员才能被定义为位域
位域虽然节省了内存空间，但由于打包和解包的过程中需要耗费额外的操作，所以运行时间可能会增加

~~~cpp
enum Level{FRTSHMEN,SOPHOMORE,JUNIOR,SENIOR};
enum Grade{A,B,C,D};
class Student {
private:
	unsigned number : 27;
	Level level : 2;
	Grade grade : 2;
};
~~~

如果用整型存储学号（占用4字节）用枚举型存储年级和等级（各至少占用1字节）
而用位域，则需要27+2+2=31个二进制位看，只需要4个字节就能放下

#### 4.8.2 用构造函数定义类型转换

##### 1.用构造函数定义的类型转换

2.2.5小节已经介绍了基本数据类型的类型转换。事实上，用户也可以为类类型定义类型转换。

4.3.2小节曾经介绍，当一个函数的返回类型为类类型时，函数调用返回后，一个无名的临时对象会被创建,这种创建不是由用户显式指定的，而是隐含发生的，事实上，临时对象也可以显式创建,方法是直接使用类名调用这个类的构造函数。例如，如果希望使用例4-4中定义的Point 和Line两个类计算一个线段的长度，可以不创建有名的点对象和线段对象，而使用这种方式:

~~~cpp
cout<<Line(Point(1),Point(4)).getLen()<<endl;
~~~

**其实这正是类型转换——将整型数据类型转换为Point型对象的显式类型转换**
C++中可以通过构造函数，来自定义类型之间的转换。一个构造函数，只要可以用一个参数调用，那么它就设定了一种从参数类型到这个类类型的类型转换。由于是类型转换，所以上面一行代码，还可以写成下面两种等效形式:

~~~cpp
cout<<Line((point)1,(Point)4).getLen()<<endl;
~~~

~~~cpp
cout<<Line(static_cast<Point>(1),static_cast<Point>(4)).getLen()<<endl;
~~~

这里的类型转换操作符可以省去，因为默认情况下，类的构造函数所规定的类型转换，允许通过隐含类型转换进行。也就是说，可以写成这种形式：

~~~cpp
cout<<Line(1,4).getLen()<<endl;
~~~

##### 2.只允许显式执行的类型转换

只要在构造函数前加上explicit关键字，以这个构造函数定义的类型转换，只能通过显式转换的方式完成。

~~~cpp
explicit Point(int xx=0,int yy=0){}
~~~

#### 4.8.3 对象作为函数参数和返回值的传递方法

函数调用时传递基本类型的数据是通过运行栈，传递对象也一样是通过运行栈。运行栈中，在主调函数和被调函数之间，有一块二者都要访问的公共区域，主调函数把实参值写入其中，函数调用发生后，被调函数通过读取这段区域就可得到形参值。需要传递的对象，只要建立在运行栈的这段区域上即可。传递基本类型数据与传递对象的不同之处在于，将实参值复制到这段区域上时，对于基本数据类型的参数，做一般的内存写操作即可，但对于对象参数，则需要调用复制构造函数。例如，例4-2之中，在main函数中调用下面这个函数：

~~~cpp
fun1(b);
~~~

调用它时，就需要调用Point的复制构造函数，使用对象b在运行栈的传参区域上构造一个临时对象。

![传递方法](/images/cpp/image-20210107131230507.png)



## 第5章 数据的共享与保护

### 5.1 标识符的作用域与可见性

#### 5.1.1 作用域

作用域是一个标识符在程序正文中有效的区域

**1.函数原型作用域**
C++程序中最小的作用域，在函数原型声明时形式参数的作用范围就是函数原型作用域。

~~~cpp
double area(double radius)
~~~

标识符radius的作用范围就这函数area形参列表的左右括号之间

**2.局部作用域**
具有局部作用域的变量也称为局部变量

**3.类作用域**

类可以被看成是一组有名成员的集合，类X的成员m具有类作用域，对m的访向式有如下3种。
（1）如果在x的成员函数中没有声明同名的局部作用域标识符,那么在该函数内可以直接访问成员m。也就是说m在这样的函数中都起作用。
（2）通过表达式义X.m或者X::m。这正是程序中访间对象成员的最基本方法。X::m的方式用于访问类的静态成员，相关内容将在5.3节介绍。
（3）通过ptr->m这样的表达式，其中ptr为指向X类的一个对象的指针。关于指针将在第6章详细介绍。

**4.命名空间作用域**
不同模块的类和函数之间可能发生重名，这样就会引发错误，命名空间用来消除歧义。
在命名空间内可以直接引用当前命名空间中声明的标识符，如果需要引用其他命名空间的标识符，需要使用下面的语法：

~~~
命名空间名::标识符名
~~~

有时这样使用会过于冗长，为了解决这一问题，C++又提供了using语句：

~~~cpp
using 命名空间名::标识符名
using namespace 命名空间名
~~~

前一种形式将指定的标识符暴露在当前的作用域内；
后一种形式将指定命名空间内的所有标识符暴露在当前的作用域内。
C++标准程序库的所有标识符都被声明在std命名空间内，如果去掉了using namespace std这条语句，则引用相应的标识符需要使用std::cin、std::cout、std::endl这样的语法。
命名空间也允许嵌套。
此外，还有两类特殊的命名空间——全局命名空间和匿名命名空间。全局命名空间空间是默认的命名空间，在显式命名空间之外的标识符都在一个全局命名空间中，匿名命名空间是一个需要显式声明的没有名字的命名空间，声明方法如下：

~~~cpp
namespace{
	匿名命名空间内的各种声明（函数声明、类声明）
}
~~~

在包含多个源文件的工程中，匿名命名空间常常被用来屏蔽不希望暴露给其他源文件的标识符，这是因为每个源文件的匿名命名空间是彼此不同的，在一个源文件中没有办法访问其他源文件的匿名命名空间。

~~~cpp
//5_1.cpp 作用域实例
#include<iostream>
using namespace std;
int i;									//在全局命名空间内的全局变量
namespace Ns {
	int j;								//在Ns命名空间中的全局变量
}
int main() {
	i = 5;
	Ns::j = 6;
	{									//子块1
		using namespace Ns;				//使得在当然块中可以直接引用Ns命名空间的标识符
		int i;							//局部变量，局部作用域
		i = 7;
		cout << "i=" << i << endl;		//输出7
		cout << "j=" << j << endl;		//输出6
	}
	cout << "i=" << i << endl;			//输出5
	return 0;
}
~~~

变量j也具有命名空间作用域，他被声明在命名空间Ns中；
**具有命名空间作用域的变量也称为全局变量**

#### 5.1.2 可见性

 程序运行到某一点，能够引用到的标识符，就是该处可见的标识符。

### 5.2 对象的生存期

对象从诞生到结束的这段时间就是它的生存期

#### 5.2.1 静态生存期

如果对象的生存期与程序的运行期相同，则称它具有静态生存期。在命名空间作用域中声明的对象都是具有静态生存期的。如果在函数内部的局部作用域中声明具有静态生存期的对象，则要使用关键字**static**
在定义静态变量的同时也可以为它赋初值，例如

~~~cpp
static int i=5
~~~

这表示i会被赋值5初始化，而非每次执行函数时都将i赋值为5

#### 5.2.2 动态生存期

除了上述两种情况，其余的对象都具有动态生存期

~~~cpp
//5_2.cpp 变量的生存期与可见性
#include<iostream>
using namespace std;
int i = 1;											//i为全局变量,具有静态生存期

void other() {
	//a, b为静态局部变量,具有全局寿命,局都可见,只第一次进入函数时被初始化
	static int a = 2;
	static int b;
	//c为局部变量,具有动态生存期，每次进入函数时都初始化
	int c = 10;
	a += 2;
	i += 32;
	c += 5;
	cout << "--- OTHER---" << endl;
	cout << " i: " << i << " a: " << a << " b: " << b << " c: " << c << endl;
	b = a;
}
int main() {
	//a为静态局都变量,具有全局寿命,局都可见
	static int a;
	//b, c为局都变量，具有动态生存期
	int b = -10;
	int c = 0;

	cout << "---MAIN---" << endl;
	cout << " i: " << i << " a: " << a << " b: " << b << " c: " << c << endl;
	c += 8;
	other();
	cout << "---MAIN---" << endl;
	cout << " i: " << i << " a: " << a << " b: " << b << " c: " << c << endl;
	i += 10;
	other();
	return 0;
}
~~~

### 5.3 类的静态成员

#### 5.3.1 静态数据成员

面向对象方法中还有“类属性”的概念。如果某个属性为整个类所共有，不属于任何个具体对象，则采用static 关键字来声明为静态成员。
静态数据成员具有静态生存期，由于静态数据成员不属于任何一个对象，因此可以通过类名对它进行访问，一般的用法息"类名::标识特”。在类的定义中仅仅对静态数据成员进行引用性声明，必须在命名空同作用域的某个地方使用类名限定性声明，这时也可以进行初始化。
**提示：**之所以类的静态数据成员需要在类定义之外再加以定义，是因为需要以这种方式专门为它们分配空间。非静态数据成员无须以此方式定义，因为它们的空间是与它们所属对象的空间同时分配的。

~~~cpp
class Point{
public:
    Point(int x=0,int y=0):x(x),y(y){count++;}
    ~Point(){count--;}
private:
	int x，y;
	static int count;
};
int Point::count=0;						//静态数据成员定义和初始化

~~~

#### 5.3.2 静态函数成员

所谓静态成员函数就是使用static关键字声明的函数成员。同静态数据成员一样，静态成员函数也属于整个类，由同一个类的所有对象共同拥有，为这些对象所共享。
静态成员函数可以通过类名或对象名调用，而非静态成员函数只能通过对象名来调用。
静态成员函数可以直接访问该类的静态数据和函数成员。而访问非静态成员，必须通过对象名。

### 5.4 类的友元

友元关系提供了不同类或对象的成员函数之间、类的成员函数与一般函数之间进行数据共享的机制。
在一个类中,可以利用关键字friend 将其他函数或类声明为友元。如果友元是一般函数或类的成员函数，称为友元函数；如果友元是一个类 ，则称为友元类，友元类的所有成员函数都自动成为友元函数。

#### 5.4.1 友元函数

友元函数是在类中用关键字friend修饰的非成员函数。友元函数可以是一个普通的函数，也可以是其他类的成员函数。虽然它不是本类的成员函数，但是在它的函数体中可以通过对象名访问类的私有和保护成员。

~~~cpp
//5_6.cpp 使用友元函数计算两点间的距离
#include <iostream>
#include <cmath>
using namespace std;
class Point {											//Point类定义
public:
	Point(int x = 0, int y = 0) :x(x), y(y) {}
	int getX() { return x; }
	int getY() { return y; }
	friend float dist(Point& p1, Point& p2);			//友元函数声明
private:
	int x,y;
};
float dist(Point& p1, Point& p2) {						//友元函数实现
	double x = p1.x - p2.x;								//通过对象访问私有数据成员
	double y = p1.y - p2.y;
	return static_cast<float>(sqrt(x * x + y * y));
}
int main() {
	Point myp1(1, 1), myp2(4, 5);
	cout << "The distance is: ";
	cout << dist(myp1, myp2) << endl;
	return 0;
}
~~~

#### 5.4.2 友元类

同友元函数一样，一个类可以将另一个类声明为友元类。若A类为B类的友元类，则A类的所有成员函数都是B类的友元函数，都可以访问B类的私有和保护成员。声明友元类的语法形式为:

~~~cpp
class B{
	friend class A;       //声明A为B的友元类  
};
~~~

关于友元，还有几点需要往意：
**第一**，友元关系是不能传递的，B类是 A类的友元，C类是B类的友元，C类和A类之间，如果没有声明，就没有任何友元关系，不能进行数据共享。
**第二**，友元关系是单向的。
**第三**，友元关系是不被继承的，如果类B是类A的友元，类B的派生类并不会自动成为类A的友元。

### 5.5 共享数据的保护

#### 5.5.1 常对象

常对象的数据成员值在对象的整个生存期间内不能被改变。也就是说，常对象必须进行初始化，而且不能被更新。

#### 5.5.2 用const修饰的类成员

**1.常成员函数**
使用const关键字修饰的函数为常成员函数，常成员函数声明的格式如下:
类型说明符 函数名(参数表) const;
**注意**：
(1)const是函数类型的一个组成部分，因此在函数的定义部分也要带const关键字，
(2)如果将一个对象说明为常对象，则通过该常对象只能调用它的常成员函数，而不能调用其他成员函数(这就是C++从语法机制上对常对象的保护，也是常对象唯一的对外接口方式)。
(3)无论是否通过常对象调用常成员函数，在常成员函数调用期间，**目的对象都被视同为常对象**，因此常成员函数不能更新目的对象的数据成员，也不能针对目的对象调用该类中没有用const 修饰的成员函数(这就保证了在常成员函数中不会更改目的对象的数据成员的值)。
(4)const关键字可以用于对重载函数的区分。
**提示**：
如果仅以const关键字为区分对成员函数重载，那么通过非const 的对象调用该函数，两个重载的函数都可以与之匹配，这时编译器将选择最近的重载函数——不带const关键字的函数。
**习惯**：
在适当的地方使用const关键字，是能够提高程序质量的一个好习惯。对于无须改变对象状态的成员函数，都应当使用const。

**2.常数据成员**

就像一般数据一样，类的成员数据也可以是常量，使用const说明的数据成员为常数据成员。如果在一个类中说明了常数据成员，那么任何函数中都不能对该成员赋值。构造函数对该数据成员进行初始化，就只能通过初始化列表。

~~~cpp
//5_8.cpp 常数据成员举例
#include<iostream>
using namespace std;
class A {
public:
	A(int i);
	void print();
private:
	const int a;
	static const int b;							//静态常数据成员
};
const int A::b = 10;							//静态常数据成员在类外说明和初始化

//常数据成员只能通过初始化列表来获得初值
A::A(int i) :a(i) {}
void A::print() {
	cout << a << ":" << b << endl;
}

int main() {
	A a1(100), a2(0);
	a1.print();
	a2.print();
	return 0;
}

~~~

![运行结果](/images/cpp/image-20210107224500388.png)

#### 5.5.3 常引用

如果在声明中引用const修饰，被声明的引用就是常引用。常引用所引用的对象不能被更新。
非const的引用只能绑定到普通的对象，而不能绑定到常对象，但常引用可以绑定到常对象。一个常引用，无论是绑定到一个普通的对象，还是常对象，通过该引用访问该对象时，都只能把该对象当作常对象。这意味着，对于基本数据类型的引用，则不能为数据赋值，对于类类型的引用，则不能修改它的数据成员，也不能调用它的非const的成员函数。

~~~~cpp
//5_9.cpp  在例5-6的基础上修改，使其中的dist函数的形参以常引用方式传递
#include<iostream>
#include<cmath>
using namespace std;
class Point {
public:
	Point(int x = 0, int y = 0) : x(x), y(y) {}
	int getX(){ return x; }
	int getY(){ return y; }
	friend float dist(const Point &p1, const Point &p2);
private:
	int x, y;
};
float dist(const Point &p1, const Point &p2) {
	double x = p1.x - p2.x;
	double y = p1.y - p2.y;
	return static_cast<float>(sqrt(x * x + y * y));
}
int main(){
	const Point myp1(1, 1), myp2(4, 5);
	cout << "The distance is: ";
	cout << dist(myp1, myp2) << endl;
	return 0;
}
~~~~

**习惯：**对于在函数中无须改变其值的参数，不宜使用普通引用方式传递，因为那会使得常对象无法被传入，因此传递常引用为宜。复制构造函数的参数一般也宜采用常引用传递。

### 5.6 多文件结构和编译预处理指令

#### 5.6.1 C++程序的一般组织结构

到现在为止，已经学习了很多完整的C++源程序实例,分析它们的结构，基本上都是由3个部分来构成，类的定义、类的成员的实现和主函数，因为所举的例子都比较小，所有这3个部分都写在同一个文件中。在规模较大的项目中，往往需要多个源程序文件，每个源程序文件称为一个编译单元。这时C++语法要求一个类的定义必须出现在所有使用该类的编译单元中。比较好的，也是惯用的做法是将类的定义写在头文件中，使用该类的编译单元则包含这个头文件。通常一个项目至少划分为3个文件; 类定义文件(\*.h文件)、类实现文件(\*.cpp文件)和类的使用文件(*. cpp，主函数文件)。对于更为复杂的程序，每一个类都有单独的定义和实现文件。采用这样的组织结构，可以对不同的文件进行单独编写、编译，最后再连接，同时可以充分利用类的封装特性，在程序的调试、修改时只对其中某一个类的定义和实现进行修改，而其余部分不用改动。

分析整个源程序的结构，由3个单独的源文件构成，它们的相互关系和编译、连接过程可以用图5-8表示(这里是Windows操作系统的情形，UNIX操作系统中生成文件的后缀会有所不同)。

![多文件组织结构图](/images/cpp/image-20210107234218610.png)

从图5-8可以看到，两个. cpp的文件被分别编译生成各自的目标文件. obj，然后再与系统的运行库共同连接生成可执行文件. exe。如果只修改了类的成员函数的实现部分，则只重新编译point. cpp并连接即可，其余的文件几乎可以连看都不用看。 如果是一个语句很多、规模特大的程序，效率就会得到显著的提高。

决定一个声明放在源文件中还是头文件中的一般原则是 ，将需要分配空间的定义放在源文件中，例如函数的定义(需要为函数代码分配空间)、命名空间作用域中变量的定义(需要为变量分配空间)等；而将不需要分配空间的声明放在头文件中，例如类声明、外部函数的原型声明、外都变量的声明(外部函数和外部变量将在5.6.2节中详细讨论、基本数据类型常量的声明等。内联函数比较特殊，由于它的内容需要嵌入到每个调用它的函数之中，所以对于那些需要被多个编译单元调用的内联函数，它们的代码应该被各个编译单元可见，这些内联函数的定义应当出现在头文件中。

#### 5.6.2 外部变量与外部函数

**1.外部变量**
如果一个变量除了在定义它的源文件中可以使用外。还能被其他文件使用，那么就称这个变成是外部变量。命名空间作用域中定义的变量，默认情况下都是外部变量，但在其他文件中如果需要使用这一变量，需要用extern关键字加以声明。

在命名空间作用域中，不用extern关键字声明的变量，都是定义性声明；用extern关键字声明的变量，如果同时指定了初值，则是定义性声明，否则是引用性声明。外部变量可以有多处声明，但是定义性声明只能是唯一的。

**2.外部函数**
在所有类之外声明的函数(也就是非成员函数)，都是具有命名空间作用域的，如果没有特殊说明，这样的函数都可以在不同的编译单元中被调用，只要在调用之前进行引用性声明(即声明函数原型)即可。当然，也可以在声明函数原型或定义函数时用extern修饰，其效果与不加修饰的默认状态是一样的。

**习惯：**通常情况下 ,变量和函数的定义都放在源文件中，而对外部变量和外部函数的引用性声明则放在头文件中。

**3.将变量和函数限制在编译单元内**
命名空间作用域中声明的变量和函数，在默认情况下都可以被其他编译单元访问,但有时不希望一个源文件中定义的命名空间作用域的变量和函数被其他源文件引用。这种需求主要是出于两个原因，一是出于安全性考虑，不希望将--个只会在文件内使用的内部变量或函数暴露给其他编译单元，就像不希望暴露一个类的私有成员一样；二是,对于大工程来说，不同文件之中的、只在文件内使用的变量名很容易重名，如果将它们都暴露出来，在连接时很容易发生名字冲突。
对这问题，曾经的解决办法是，在定义这些变量和函数时使用static关键字。static关键字用来修饰命名空间作用域的变量或函数时， 和extern关键字起相反的作用，它会使得被static修饰的变此和函数无法被其他编译单元引用。

**提示：**目前已经介绍了static 关键字的3种用法，当它用在局部作用域、类作用域和命名空间作用域时，具有不尽相同的作用。一个共同点是，凡是被static修饰的变量，都具有静态生存期(不管未使用static关键字时它们的生存期如何)。

现在取而代之的方式是使用匿名的命名空间。在匿名命名空间中定义的变量和函数都不会暴露给其他编译单元。

**习惯：**应当将不希望被其他编译单元引用的函数和变量放在匿名的命名空间中。

<center><span style='color:blue;font-size:15px'>2021/1/8</span></center>

#### 5.6.3 标准C++库

在C语言中，系统函数、系统的外部变量和一些宏定义都放置在运行库(run-timelibrary)中。C++的库中除继续保留了大部分c语言系统函数外，还加入了预定义的模板和类。标准C++ 类库是一个极为灵活并可扩展的可亚用软件模块的集合。标准C++类与组件在逻辑上分为如下6种类型。
。输入输出类;
。容器类与ADT(抽象数据类型);
。存储管理类;
。算法;
。错误处理;
。运行环境支持。

使用标准C++库时，还需要加入下面这一条语句来将指定命名空间中的名称引入到当前作用域中:
using namespace std;
如果不使用上述方法.就需要在使用srd命名空间中的标识符时冠以命名空间名'std::"。

**习惯：**通常情况下，using namespace 语句不宜放在头文件中，因为这会使一个命名空间不被察觉地对一个源文件开放。

#### 5.6.4 编译预处理

在编译器对源程序进行编译之前。首先要由预处理器对程序文本进行预处理。所有的预处理指令在程序中都是以“#”来引导，每一条预处理指令单独占用一行，不要用分号结束。预处理指令可以根据需要出现在程序中的任何位置。

**1.#include 指令**

**2.#define 和 #undef指令**
在C++中虽然仍可以用#define定义符号常量，但是更好的方法是在类型说明语句中用const进行修饰。
在C语言中，还可以用#define来定义带参数宏，以实现简单的函数计算，但是在C++中这一功能已被内联函数取代。
用#define还可以定义空符号，目的是配合条件编译指令一起使用。
\#undef的作用是删除由\#undef定义的宏，使之不再起作用。

**3.条件编译指令**
使用条件编译指令，可以限定程序中的某些内容要在满足一定条件的情况下才参与编译。

~~~cpp
#if 
#elif
#elif
...
#else
#endif
~~~

~~~cpp
#ifdef / #ifndef
#else
#endif
~~~

**4.defined操作符**
defined是一个预处理操作符，而不是指令，因此不要以#开头。
\#ifndef MYHEAD_H 与 \#if!defined(MYHEAD_H) 完全等价

由于文件包含指令可以嵌套使用，在设计程序时要避免多次重复包含同一个文件，否则会引起变量及类的重复定义。可以在可能被重复包含的头文件中使用条件编译指令。用一个唯一的标识符来标记文件是否已参加过编译。

~~~cpp
//head.h
#ifndef HEAD_H
#define HEAD_H
	...
class Point{
    ...
}
	...
#endif
~~~

<center><span style='color:blue;font-size:15px'>2021/1/9</span></center>

### 5.7 综合实例——个人银行账户管理系统

对第四章的改进：
（1）在SavingsAccount类增加一个静态成员total，用来记录各个账户的总金额，并为其增加相应的静态函数成员getTotal用来对其进行访问。
（2）

例5-11 个人银行账户管理。
整个程序分为3个文件：account.h是类定义头文件，account.cpp是类实现文件，5_11.cpp是主函数文件。

对第四章的改进：
（1）在SavingsAccount类中增加了一个静态数据cyuantotal，用来记录各个账户的总金额，并为其增加相应的静态成员函数getTotal用来对其进行访问。
（2）诸如getBalance，accumulate这些不需要改变对象状态的成员函数声明为常成员函数。
（3）将SavingAccount类从主函数所在的源文件中分开，建立两个新的文件account.h和account.cpp分别存放SavingAccount类的定义和实现。

~~~cpp
//account.h
#ifndef __ACCOUNT_H__
#define __ACCOUNT_H__
class SavingsAccount {
private:
	int id;
	double balance;
	double rate;
	int lastDate;
	double accumulation;
	static double total;										//static所有账户的总金额
	void record(int date, double amount);	
	double accumulate(int date) const {							//const
		return accumulation + balance * (date - lastDate);
	}
public:
	SavingsAccount(int date, int id, double rate);
	int getId() const { return id; }							//const
	double getBalance() const { return total; }					//const
	double getRate() const { return rate; }						//const
	static double getTotal() { return total; }					//静态函数
	void deposit(int date, double amount);
	void withdraw(int date, double amount);
	void settle(int date);
	void show() const;											//const
};
#endif //__ACCOUNT_H__
~~~

~~~cpp
//account.cpp
#include "account.h"
#include <cmath>
#include <iostream>
using namespace std;

double SavingsAccount::total = 0;							//给total赋初值
SavingsAccount::SavingsAccount(int date, int id, double rate) :id(id), balance(0), rate(rate), lastDate(date), accumulation(0) {
	cout << date << "\t#" << id << "is created" << endl;
}
void SavingsAccount::record(int date, double amount) {
	accumulation = accumulate(date);
	lastDate = date;
	amount = floor(amount * 100 + 0.5) / 100;				//保留小数点后两位
	balance += amount;
	total += amount;
	cout << date << "\t#" << id << "\t" << amount << "\t" << balance << endl;
}
void SavingsAccount::deposit(int date, double amount) {
	record(date, amount);
}
void SavingsAccount::withdraw(int date, double amount) {
	if (amount > getBalance())
		cout << "Error:not enough money" << endl;
	else
		record(date, -amount);
}
void SavingsAccount::settle(int date) {
	double interest = accumulate(date) * rate / 365;		//计算年息
	if (interest != 0)
		record(date, interest);
	accumulation = 0;
}
void SavingsAccount::show() const {
	cout << "#" << id << "\tBalance:" << balance;
}
~~~

~~~cpp
#include "account.h"
#include <iostream>
using namespace std;
int main() {
	SavingsAccount sa0(1, 21325302, 0.015);
	SavingsAccount sa1(1, 58320212, 0.015);
	sa0.deposit(5, 5000);
	sa1.deposit(25, 10000);
	sa0.deposit(45, 5500);
	sa1.withdraw(60, 4000);
	//开户后第90天到了银行的计息日，结算所有账户的年息
	sa0.settle(90);
	sa1.settle(90);
	//输出各个账户信息
	sa0.show();	cout << endl;
	sa1.show();	cout << endl;
	cout << "Total: " << SavingsAccount::getTotal() << endl;
	return 0;
}
~~~

### 5.8 深度探索

#### 5.8.1 常成员函数的声明原则

“对于那些不会改变**对象状态**的函数，都应定义为常函数”
这并不意味着不会改变非静态成员对象的成员函数，都不会改变对象状态。
如果有一个函数会改变某个成员的值，但它也未必会改变对象状态。
详情见课本p181
被mutable修饰的成员对象在任何时候都不会被视为常对象

#### 5.8.2 代码的编译连接与执行过程

~~~cpp
//a.cpp
extern int y;
int func(int v);
int main(){
    int z=1;
    y=func(z);
    return 0;
}
~~~

~~~cpp
//b.cpp
int x=3;
int y;
int func(int v){
	return v+x;
}
~~~

**1.编译**
编译是对一个个源文件分别处理的，每个源文件构成了独立的编译单元，编译过程中不同的编译单元互不影响。目标文件主要描述程序在运行过程中需要放在内存中的内容，包括两大类——代码和数据。

代码段（.text）a.o中应当包含main函数的目标代码；b.o中应当包含func函数的代码；
数据段中包含对源文件中定义的各个**静态生存期**对象的描述，数据段又分为初始化的数据段（.data）和未初始化的数据段（.bss）

几个段的内容，都是该源文件中有定义的内容，那些只声明而未经定义的全局变量或函数并不在这几个段中。例如a.cpp中的y没有出现在a.o的数据段中，而func也没有出现在a.o的代码段中。
a.cpp的main函数改写了变量y的值，但y是在b.cpp中定义的，这种联系要通过变量或函数的名字来建立，他们存放在目标代码的符号表中。

![](/images/cpp/image-20210109233258524.png)

**2.连接**

在连接期间，需要将各个编译单元的目标文件和运行库当中被调用的单元加以合并。结果合并后，不同编译单元的代码段和数据段就分别合并到一起了，程序在运行时代码和静态数据需要占据的内存空间就全部已知了，因此所有代码和数据都可以背分配确定的地址了。

**3.执行**

程序的执行，是以进程为单位的。程序只有在执行时才会生成进程，执行结束后进程会消失。
程序是存储在磁盘上的，在执行前，操作系统需要首先将它载入到内存中，并为它分配足够大的内存空间来容纳代码段和数据段，然后把文件中存放的代码段和初始化的数据段的内容载入其中。