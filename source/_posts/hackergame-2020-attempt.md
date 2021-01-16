---
title: hackergame 2020 尝试
date: 2021-01-15 22:44:18
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/hackergame-2020-attempt/caigou.jpg
mathjax: true
summary: 信安负基础，从来没学过，尝试一下看看能不能学到什么东西
categories: CTF
tags:
  - CTF
  - Hackergame
  - 信安
typora-root-url: ..
---

今天偶然刷到Hackergame的相关内容，以前从来不知道有这种东西，准备尝试做题并且学习一下。

网址：https://hack.lug.ustc.edu.cn/

## 签到

![](/images/hackergame-2020-attempt/image-20210116000201094.png)

要求提取一个flag，但是滑条的步长为0.00001，js代码还会把1略过，不可能滑到1

![](/images/hackergame-2020-attempt/image-20210116000645177.png)点击提交发现是用get请求，URL变为`http://202.38.93.111:10000/?number=0.01145`，可直接改为1
也可在控制台直接使用`$('#number')[0].value = 1;`

## 猫咪问答++

![](/images/hackergame-2020-attempt/image-20210116001306225.png)

1.不知道

2.搜索找到`https://tools.ietf.org/html/rfc1149`得到值：256

3.查找网络得到值：9

4.查找地图得到值：9

5.查找网络得到值：17098

1.参考`https://www.cnblogs.com/pu369/p/12201707.html`和`https://blog.skk.moe/post/hackergame-2020-write-up`
得到：12

~~~js
for (let i = 0; i < 23; i++){
    const formData = new FormData();
    formData.append('q1', i);
    formData.append('q2', 256);
    formData.append('q3', 9);
    formData.append('q4', 9);
    formData.append('q4', 17098);
    fetch('http://202.38.93.111:10001/', {
      body: formData,
      method: 'POST',
    }).then(resp => resp.text()).then(text => {
      if (!text.includes('没有全部答对，不能给你 flag')) {
        console.log(i, text);
      }
    });
}
~~~

## 2048

![](/images/hackergame-2020-attempt/image-20210116011522357.png)

游戏很好玩，不过我是菜鸟，通过不了

![](/images/hackergame-2020-attempt/image-20210116012914685.png)

拦截到了一个请求，打开js

![](/images/hackergame-2020-attempt/image-20210116013020557.png)

![](/images/hackergame-2020-attempt/image-20210116013632841.png)

访问`http://202.38.93.111:10005/getflxg?my_favorite_fruit=banana`通过

## 一闪而过的 Flag

> 程序每次运行时隐约可见黑色控制台上有 flag 一闪而过。

把文件拖入cmd即可

![](/images/hackergame-2020-attempt/image-20210116014242933.png)

## 从零开始的记账工具人

>如同往常一样，你的 npy 突然丢给你一个购物账单：“我今天买了几个小玩意，你能帮我算一下一共花了多少钱吗？”
>
>你心想：~~又双叒叕要开始吃土了~~ 这不是很简单吗？电子表格里面一拖动就算出来了
>
>只不过拿到账单之后你才注意到，似乎是为了剁手时更加的安心，这次的账单上面的金额全使用了中文大写数字
>
>**注意：请将账单总金额保留小数点后两位，放在 `flag{}` 中提交，例如总金额为 123.45 元时，你需要提交 `flag{123.45}`**

文件已经下载不了了。。。。。

## 超简单的世界模拟器

>你知道生命游戏（Conway's Game of Life）吗？
>
>你的任务是在生命游戏的世界中，复现出蝴蝶扇动翅膀，引起大洋彼岸风暴的效应。
>
>通过改变左上角 15x15 的区域，在游戏演化 200 代之后，如果被特殊标注的正方形内的细胞被“清除”，你将会得到对应的 flag：
>
>“清除”任意一个正方形，你将会得到第一个 flag。同时“清除”两个正方形，你将会得到第二个 flag。
>
>注: 你的输入是 15 行文本，每行由 15 个 0 或者 1 组成，代表该区域的内容。

瞎试了几次居然过了

## 从零开始的火星文生活

>脦脪鹿楼脝脝脕脣 拢脠拢谩拢茫拢毛拢氓拢貌拢莽拢谩拢铆拢氓 碌脛路镁脦帽脝梅拢卢脥碌碌陆脕脣脣眉脙脟碌脛 拢忙拢矛拢谩拢莽拢卢脧脰脭脷脦脪掳脩 拢忙拢矛拢谩拢莽 路垄赂酶脛茫拢潞
>拢忙拢矛拢谩拢莽拢没拢脠拢麓拢枚拢鲁拢脽拢脝拢玫拢脦拢脽拢梅拢卤拢脭拢猫拢脽拢鲁拢卯拢茫拢掳拢盲拢卤拢卯拢莽拢脽拢麓拢脦拢盲拢脽拢盲拢鲁拢茫拢掳拢脛拢卤拢卯拢脟拢脽拢鹿拢帽拢脛拢虏拢脪拢赂拢猫拢贸拢媒
>驴矛脠楼卤脠脠眉脝陆脤篓脤谩陆禄掳脡拢隆
>虏禄脪陋脭脵掳脩脮芒路脻脨脜脧垄脳陋路垄赂酶脝盲脣没脠脣脕脣拢卢脪陋脢脟卤禄路垄脧脰戮脥脭茫赂芒脕脣拢隆

好家伙，搞了半天没解出来，不过得到了常用乱码表

![这可得好好记得](/images/hackergame-2020-attempt/image-20210116021901318.png)

标准答案：

>下载附件之后如直接用 GBK 打开，那就真的是题面里说的“夹杂着日语和数字的火星文”了。恭喜掉进坑，乱码又多了一层（逃
>
>用 UTF-8 打开，看到形如“脦脪鹿楼”的文本，推断是上图中的“古文码”乱码。但是“古文码”明明是“以 GBK 方式读取 UTF-8 编码”造成的，看来“脦脪鹿楼”本来应当是 GBK下看到的结果，却又被存成了 UTF-8。所以第一步是用 GBK 重新编码文本“脦脪鹿楼...”。
>
>然后用 UTF-8 打开，看到形如“ÎÒ¹¥ÆÆÁË”的文本，推断是上图中的“拼音码”乱码。“拼音码”是“以 ISO8859-1 方式读取 GBK 编码”，而现在文本的编码是 UTF-8。所以接下应当用 ISO8859-1 重新编码文本“ÎÒ¹¥ÆÆÁË...”。
>
>然后用 GBK 打开，就能看到可读的汉字和 flag 了（原始编码确实是 GBK 呢！）。不过这里的 flag 全部是从 ASCII 字符转成的全角字符，不能直接复制使用。可以手动替换成 ASCII 字符，或者用其他简便方法变回 ASCII 字符。
>
>[源代码](https://github.com/USTC-Hackergame/hackergame2020-writeups/blob/master/official/从零开始的火星文生活/src/generate_and_solve.py) 中也给出了一个全角->半角的函数。

> 方法一（不写代码）
>
> 例如用 VSCode 的“Select Encoding”功能。
>
> 步骤（开始时 UTF-8 打开题目附件）：
>
> 1. Save with Encoding -> GBK
> 2. Reopen with Encoding -> UTF-8
> 3. Save with Encoding -> ISO8859-1
> 4. Reopen with Encoding -> GBK



后面的感觉自己也不会做了，先这样，有时间再看吧

