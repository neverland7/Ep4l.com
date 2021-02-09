---
title: c++中STL的常用用法
date: 2021-02-03 23:22:25
mathjax: true
summary: STL
categories: 杂谈
tags:
 - cpp
 - STL
typora-root-url: ..
---

### STL简介

#### 1.容器（container）

- 1.向量（vector）
- 2.双端队列（deque）
- 3.列表（list）
- 4.集合（set）
- 5.多重集合（multiset）
- 6.映射（map）
- 7.关联容器（associative）

#### 2.迭代器（iterator）

迭代器提供了顺序访问容器中每个元素的方法。对迭代器可以使用“++”运算符来获得指向下一个元素的迭代器，可以使用“*”运算符访问一个迭代器所指向的元素。如果元素类型是类或结构体，还可以使用“->”运算符直接访问该元素的一个成员，有些迭代器还支持通过“--”运算符获得指向上一个元素的迭代器。指针也具有相同的特性，因此指针本身就是一种迭代器，迭代器是泛化的指针。

#### 3.函数对象（function object）

函数对象是泛化的函数

#### 4.算法（algorithm）

使用STL的算法，需要包含头文件\<algorithm\>



## 容器

### map / unordered_map

map是STL的一个关联容器，它提供一对一的hash。

- 第一个可以称为关键字(key)，每个关键字只能在map中出现一次；
- 第二个可能称为该关键字的值(value)；

使用map得包含map类所在的头文件

`#include <map>`

#### 构造方法：

`map<int, string> hashtable;`

#### 插入元素：

 `hashtable[7] = "seven";`
 `hashtable.insert(pair<int, string>(7, "seven"));`

#### 查找元素：

~~~cpp
// find 返回迭代器指向当前查找元素的位置否则返回map::end()位置
map<int, string>::iterator iter =  hashtable.find(7);//用auto更好
if(iter != hashtable.end())
    cout<<iter->second<<endl;
~~~

#### 刪除与清空元素：

~~~cpp
//迭代器刪除
iter = hashtable.find(7);
hashtable.erase(iter);
 
//用关键字刪除
int status = hashtable.erase(7); //如果刪除了會返回1，否則返回0
 
//用迭代器范围刪除 : 把整个map清空
hashtable.erase(hashtable.begin(), hashtable.end());
//等同于hashtable.clear()
~~~

#### map的大小：

`hashtable.size();`

#### 其他常用用法：

**begin**()     返回指向map头部的迭代器

**end**()      返回指向map末尾的迭代器

**count**()     返回指定元素出现的次数

**empty**()     如果map为空则返回true