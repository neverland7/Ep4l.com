---
title: github使用学习
date: 2021-01-04 14:19:20
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/github.jpg
summary: 一直对github的使用一知半解，系统学习一下
categories: 学习笔记
tags:
 - github
 - git
typora-root-url: ..
---

<center><span style='color:blue;font-size:15px'>2021/1/4</span></center>

## 什么是 Github?

 GitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名GitHub，付费用户可以建私人仓库，我们一般的免费用户只能使用公共仓库，也就是代码要公开。Github 由Chris Wanstrath, PJ Hyett 与Tom Preston-Werner三位开发者在2008年4月创办，除了Git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能。 

## 1.基本功能

**协同修改**
多人并行不悖的修改服务器端的同一个文件。
**数据备份**
不仅保存目录和文件的当前状态， 还能够保存每一个提交过的历史状态。
**版本管理**
在保存每一个版本的文件信息的时候要做到不保存重复数据， 以节约存储空
间， 提高运行效率。 这方面 SVN 采用的是增量式管理的方式， 而 Git 采取了文
件系统快照的方式。
**权限控制**
对团队中参与开发的人员进行权限控制。
对团队外开发者贡献的代码进行审核——Git 独有。
**历史记录**
查看修改人、 修改时间、 修改内容、 日志信息。
将本地文件恢复到某一个历史状态。
**分支管理**
允许开发团队在工作过程中多条生产线同时推进任务， 进一步提高效率

## 2.git的优势

**版本控制简介**工程设计领域中使用版本控制管理工程蓝图的设计过程。在 IT 开发过程中也可以使用版本控制思想管理代码的版本迭代。
**版本控制工具**
集中式版本控制工具：
CVS、SVN、VSS……
分布式版本控制工具：
Git、Mercurial、Bazaar、Darcs……

**Git 的优势** 
大部分操作在本地完成，不需要联网
完整性保证
尽可能添加数据而不是删除或修改数据
分支操作非常快捷流畅
与 Linux 命令全面兼容

## 3.git简介

![git结构](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104145617035.png)

**Git 和代码托管中心** 
代码托管中心的任务：维护远程库
 局域网环境下： GitLab 服务器
 外网环境下 ： GitHub 、 码云

## 4.Git 命令行操作

### 4.1 本地库初始化 

命令：

~~~git
git init
~~~

注意：.git 目录中存放的是本地库相关的子目录和文件，不要删除，也不要胡乱修改

### 4.2 设置签名

用户名：xxxxx
Email 地址：zzzz@yyy.com（可以没有）
作用：区分不同开发人员的身份
辨析：这里设置的签名和登录远程库(代码托管中心)的账号、密码没有任何关系。
**命令** :
项目级别/仓库级别：仅在当前本地库范围内有效 

~~~git
git config user.name xxxx
git config user.email zzzz@yyy.com
~~~


信息保存位置：./.git/config 文件

系统用户级别：登录当前操作系统的用户范围

~~~git
git config --global user.name xxxx_glb
git config --global zzzz@yyy.com
~~~

信息保存位置：~/.gitconfig 文件

**级别优先级**
就近原则：项目级别优先于系统用户级别，二者都有时采用项目级别的签名 
如果只有系统用户级别的签名，就以系统用户级别的签名为准
二者都没有不允许
实际开发中一般只设置一个系统签名就行了

### 4.3 基本操作

#### 4.3.1状态查看

~~~git
git status 
~~~

查看工作区、暂存区状态

#### 4.3.2 添加

~~~git
git add [file name] 
~~~

将工作区的“新建/修改”添加到暂存区

#### 4.3.3 提交

~~~git
git commit -m "备注你的版本记录" [file name] 
~~~

将暂存区的内容提交到本地库

#### 4.3.4 查看历史记录 

~~~
git log							//显示完整记录
git log --pretty=oneline		//显示简化的记录，但有完整的哈希值
git log --oneline				//显示简化的哈希值(只显示过去的)
git reflog						//显示变更任意版本需要移动的指针次数(过去未来全部显示)
~~~

多屏显示控制方式： 空格向下翻页；b 向上翻页；q 退出

#### 4.3.5 前进后退

基于索引值操作[推荐]

~~~
git reset --hard [局部索引值] 
git reset --hard a6ace91
~~~

使用^符号：只能后退
注：一个^表示后退一步，n 个表示后退 n 步

~~~
git reset --hard HEAD^
~~~

使用~符号：只能后退
注：表示后退 n 步

~~~
git reset --hard HEAD~n
~~~

#### 4.3.6 reset 命令的三个参数对比

--soft 参数：仅在本地库移动 HEAD 指针
--mixed 参数：在本地库移动 HEAD 指针；重置暂存区
--hard 参数：在本地库移动 HEAD 指针 ； 重置暂存区 ； 重置工作区

#### 4.3.7 删除文件并找回

前提：删除前，文件存在时的状态提交到了本地库。
操作：git reset --hard [指针位置]
删除操作已经提交到本地库：指针位置指向历史记录
删除操作尚未提交到本地库：指针位置使用 HEAD

#### 4.3.8 比较文件差异

~~~
git diff [文件名] 
~~~

将工作区中的文件和暂存区进行比较

~~~
git diff [本地库中历史版本] [文件名]
~~~

将工作区中的文件和本地库历史记录比较
不带文件名比较多个文件

### 4.4 分支管理 

#### 4.4.1 什么是分支？ 

在版本控制过程中，使用多条线同时推进多个任务。

#### 4.4.2 分支的好处？

同时并行推进多个功能开发，提高开发效率
各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。

#### 4.4.3 分支操作

**创建分支** 

~~~
git branch [分支名] 
~~~

**查看分支** 

~~~
git branch -v 
~~~

**切换分支**

~~~
git checkout [分支名]
~~~

**合并分支**
第一步：切换到要接受修改的分支上 

~~~
git checkout [原来的分支名]
~~~

第二步：执行 merge 命令 

~~~
git merge [有新内容分支名]
~~~

**解决冲突**

第一步：编辑文件，删除特殊符号
第二步：把文件修改到满意的程度，保存退出
第三步：git add [文件名]
第四步：git commit -m "日志信息"（后面不带文件名）

## 5.Git 基本原理

### 5.1 哈希

哈希是一个系列的加密算法，各个不同的哈希算法虽然加密强度不同，但是有以下 几个共同点：
 ①不管输入数据的数据量有多大，输入同一个哈希算法，得到的加密结果长度固定。 
②哈希算法确定，输入数据确定，输出数据能够保证不变 
③哈希算法确定，输入数据有变化，输出数据一定有变化，而且通常变化很大 
④哈希算法不可逆 Git 底层采用的是 SHA-1 算法。（MD5也是哈希算法的一种） 
哈希算法可以被用来验证文件，Git 就是靠这种机制来从根本上保证数据完整性的。

### 5.2 Git 保存版本的机制

#### 5.2.1 集中式版本控制工具的文件管理机制 

以文件变更列表的方式存储信息。这类系统将它们保存的信息看作是一组基本 文件和每个文件随时间逐步累积的差异。

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210105000016196.png)

#### 5.2.2 Git 的文件管理机制 

Git 把数据看作是小型文件系统的一组快照。每次提交更新时 Git 都会对当前 的全部文件制作一个快照并保存这个快照的索引。为了高效，如果文件没有修改， Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。所以 Git 的 工作方式可以称之为快照流。

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210105000029275.png)

#### 5.2.3 Git 文件管理机制细节

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104235138752.png)

提交对象及其父对象形成的链条

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104235208324.png)

### 5.3 Git 分支管理机制 

#### 5.3.1 分支的创建

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104235624280.png)

#### 5.3.2 分支的切换

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104235717453.png)

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104235729611.png)

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104235745003.png)

![](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/github/image-20210104235758253.png)

## 6.GitHub

### 6.2 创建远程库

### 6.3 创建远程库地址别名

~~~
git remote -v 查看当前所有远程地址别名
git remote add [别名] [远程地址]
~~~

### 6.4 推送

~~~
git push [别名] [分支名]
~~~

### 6.5 克隆

~~~
git clone [远程地址]
~~~

效果：
完整的把远程库下载到本地
创建远程地址别名
初始化本地库

### 6.6 团队成员邀请

### 6.7 拉取

~~~
git pull [远程库地址别名] [远程分支名]
~~~

pull=fetch+merge

~~~
git fetch [远程库地址别名] [远程分支名]
git merge [远程库地址别名/远程分支名]
~~~

### 6.8 解决冲突

要点
如果不是基于 GitHub 远程库的最新版所做的修改，不能推送，必须先拉取。
拉取下来后如果进入冲突状态，则按照“分支冲突解决”操作解决即可。

### 6.9 跨团队协作

Fork
本地修改，然后推送到远程
Pull Request

主人：
审核代码
合并代码
将远程库修改拉取到本地

### 6.10 SSH 登录

进入当前用户的家目录
\$ cd ~
删除.ssh 目录
\$ rm -rvf .ssh
运行命令生成.ssh 密钥目录
\$ ssh-keygen -t rsa -C xxx@yyy.com
进入.ssh 目录查看文件列表
\$ cd .ssh
\$ ls -lF
查看 id_rsa.pub 文件内容
\$ cat id_rsa.pub
复制 id_rsa.pub 文件内容，登录 GitHub，点击用户头像→Settings→SSH and GPG keys
New SSH Key
输入复制的密钥信息
回到 Git bash 创建远程地址别名
git remote add origin_ssh 网页上复制的ssh地址
推送文件进行测试