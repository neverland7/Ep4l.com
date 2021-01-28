---
title: 计算机科学速成课
date: 2021-01-22 22:20:31
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/Crash-Course-Computer-Science/cpu.jpg
summary: 虽然不太深入，但讲的真清楚，可以把知识串起来，受益匪浅
categories: 学习笔记
tags:
 - 计算机组成原理
 - 操作系统
typora-root-url: ..
---



视频在[这里](https://www.bilibili.com/video/BV1EW411u7th)

## 1.计算机早期历史

算盘 → 步进计算器（1694 第一个可以做加减乘除的机器）→ 差分机（1823 失败）分析机（设想）

## 2.电子计算机

机械继电器（bug的起源）→ 真空管（1904 电子管）→ 晶体管（1947 半导体）

## 3.布尔逻辑和逻辑门

二进制
布尔代数（not and or）的晶体管实现：非（接地）与（串联）或（并联）
XOR（异或）用上面的三种门组成

## 4.二进制

二进制的原理及表示范围
字节（8bit）（用颜色举例，8bit有256种，现在用的32bit有4,294,967,295种）；
由于内存的增加，内存地址现在应该有64位
浮点数的表示，ASCII码，Unicode

## 5.算术逻辑单元-ALU

ALU有2个单元：1个算术单元和一个逻辑单元

算术单元：

- 半加器：
  sum：当前位的和
  carry：进位

![半加器](/images/Crash-Course-Computer-Science/image-20210123023411810.png)

- 全加器：
  由于有进位的存在，半加器输出了进位，下一位需要接收3个二进制位

![全加器](/images/Crash-Course-Computer-Science/image-20210123023902758.png)

![8位行波进位加法器，现代实际使用超前进位加法器](/images/Crash-Course-Computer-Science/image-20210123024147310.png)

除了加减，类似计算机里也有专门做乘法的算术单元，电路比较复杂

逻辑单元：
执行逻辑操作，例如and，or，not和一些简单的数值测试（如测试输出是否为0）

![简单的ALU](/images/Crash-Course-Computer-Science/image-20210123025231997.png)

## 6.寄存器和内存

用基本逻辑门可以做出存一位信息的叫"AND-OR锁存器"

![锁存器](/images/Crash-Course-Computer-Science/image-20210123025835832.png)

加亿点细节，用一根线来同时作用设置和复位，再加一根线用来做写入的开关

![门锁](/images/Crash-Course-Computer-Science/image-20210123025922499.png)

![门锁](/images/Crash-Course-Computer-Science/image-20210123030158536.png)

数个锁存器的组合叫**寄存器**，寄存器有多少位称为**位宽**，早期位宽为8，现在很多都是64
用1根线连接寄存器所有的允许输入线，用8条数据线发送数据，就可以给一个寄存器存入数据

![写寄存器](/images/Crash-Course-Computer-Science/image-20210123030623292.png)

有n个单元时，需要非常多(2n+1根)的线，可以改进成为矩阵

![门锁矩阵](/images/Crash-Course-Computer-Science/image-20210123030954261.png)

![放大](/images/Crash-Course-Computer-Science/image-20210123031155319.png)

对于256位的存储，只需要1条数据线，1条允许写入线，1条允许读取线，和16行16列的线，共35条即可

用8位可以表示这里的地址，12行8列的地址就是11001000，然后用两个多路复用器将8位的地址装换为行和列

![256位内存](/images/Crash-Course-Computer-Science/image-20210123031909074.png)

将8个内存连接起来，同一个地址可以存一个8位数字（1个字节），这里总共能存256个字节（byte）

![](/images/Crash-Course-Computer-Science/image-20210123031955194.png)

![抽象成一块整体](/images/Crash-Course-Computer-Science/image-20210123032242052.png)

现在的64位计算机有64位的内存，但不论几位机，一个地址都是对应1Byte
内存的一个重要特征是：可以随时访问任何位置，因此叫”随机存取存储器（RAM）“

## 7.中央处理器（CPU）

先构建一个16个地址的内存和4个寄存器

![](/images/Crash-Course-Computer-Science/image-20210123033206319.png)

在内存里存储的数据前4位为操作码，后4位为地址或者寄存器

![](/images/Crash-Course-Computer-Science/image-20210123033336716.png)

我们还需要两个寄存器来完成CPU，一个叫指令地址寄存器，一个叫指令寄存器

取指令阶段：从地址寄存器存放的地址中取出指令 

![取指令](/images/Crash-Course-Computer-Science/image-20210123120300566.png)

解码阶段：由控制单元（也是一堆逻辑门）进行解码

执行阶段：操作码0010：存放到寄存器a；地址码1110的值：00000011

![执行](/images/Crash-Course-Computer-Science/image-20210123121150970.png)

指令完成后，关闭所有电路，去拿下一条指令，指令地址寄存器+1，执行阶段结束
接下来再经过一个执行阶段，把一个值送进寄存器B，指令地址+1
接下来到了地址2，指令码是1000，把寄存器B的值加进A里，需要整合ALU来执行

![](/images/Crash-Course-Computer-Science/image-20210123123610284.png)

运算完之后output输出到control unit的临时存储寄存器，关闭ALU，把值写入寄存器A，A变为了00010001，指令地址再+1。

最后一个指令将寄存器A中的内存写入内存中

![](/images/Crash-Course-Computer-Science/image-20210123125844934.png)

cpu工作的节奏由“时钟”来负责管理，CPU”取指令→解码→执行“的速度叫”**时钟速度**“，单位是赫兹
cpu可以超频也可以降频

![CPU](/images/Crash-Course-Computer-Science/image-20210123230724705.png)

## 8.指令与程序