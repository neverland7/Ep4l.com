---
title: c++（重学）
date: 2021-01-01 20:14:09
img: images/cpp/cpp.jpg
mathjax: true
summary: 重学c++，<del>持续更新中</del>
categories: c++
tags:
 - programming
 - c++
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
保护类型成员的性质和私有成员的性质相似，其差别在于继承过程中对产生的新类影响不同（详见<a  href="#toc-heading-38">123</a>） 



