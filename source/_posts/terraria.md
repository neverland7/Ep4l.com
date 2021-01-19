---
title: terraria服务器搭建
date: 2021-01-17 12:43:54
img: https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com/public/images/terraria/terraria.jpg
categories: 折腾
summary: 已关闭
tags:
 - terraria
 - 游戏
typora-root-url: ..
---

参考https://www.sohu.com/a/325013560_120099900 原文找不到了

`free -m`查看swap分区
<img src="/images/terraria/image-20210117125354448.png" style="zoom:200%;" />

1、删除原来的Swap分区
 `swapoff –a` 
2、新建一个读写块大小为1M、块个数为1024的Swap分区 
 `dd if=/dev/zero of=/root/swapfile bs=1M count=1024`
3、格式化创建好的Swap交换分区 
`mkswap /root/swapfile`
4、启动新建的Swap交换分区 
`swapon /root/swapfile`

![](/images/terraria/image-20210117125618777.png)

5、将Swap交换分区添加到开机自启动挂载：进入分区自动挂载配置文件
 `vi /etc/fstab`
在文本最后添加一行：
 `/root/swapfile swap swap defaults 0 0`
6、重启服务器
`reboot`

7、安装远程管理工具
`screen # yum install -y screen`

8、下载泰拉瑞亚官方服务器压缩包。先给泰拉瑞亚预先创建好文件夹
`mkdir /opt/terraria`
继续在新创建的terraria文件夹创建bin，worlds，zip三个文件夹
`mkdir /opt/terraria/{bin,worlds,zip}`
检查是否创建成功  
`ls /opt/terraria/`

![](/images/terraria/image-20210117130312252.png)

9、进入zip文件夹  
`cd /opt/terraria/zip`
10、下载最新版本的泰拉瑞亚服务包（用wget太慢，我先用putty下到本地然后用上传到服务器）

![](/images/terraria/image-20210117130858133.png)

11、将下载好的压缩包解压到bin文件夹 
`unzip terraria-server-1412.zip -d/opt/terraria/bin`
12、将配置文件拷贝到泰拉瑞亚文件夹的根目录。 
`cp -p /opt/terraria/bin/1412/Windows/serverconfig.txt /opt/terraria/`
13、编辑拷贝过来的配置文档。 
 `vim /opt/terraria/serverconfig.txt`
14、在文件的末尾加上

~~~
world=/opt/terraria/Worlds/你的世界.wld
autocreate=2
worldname=你的世界
difficulty=0
maxplayers=4
password=你的密码
worldpath=/opt/terraria/Worlds
~~~

其中
autocreate 是没有发现世界自动生成世界的大小 1、2、3分别对应小、中、大
difficulty 对应的是0为普通，1为专家
maxplayers是最大人数
15、给运行文件赋予运行权限。  
`chmod 777 /opt/terraria/bin/1412/Linux/TerrariaServer.bin.x86_64`
16、启动服务器。 
`cd /opt/terraria/bin/1412/Linux && ./TerrariaServer.bin.x86_64 -config/opt/terraria/serverconfig.txt`

(怎么感觉1.4不一样了，在这时候才创建世界，好像14步是多余的)
17、退出服务器程序
`:exit`
18、将之前添加的一段话中三行代码前面加上#号，使其失效
`vim /opt/terraria/serverconfig.txt`

(看起来好像也没必要了，因为刚刚启动服务器时也配置了)

服务器只有在服务端输入save命令之后才会保存地图数据。

`save`

------

发现启动服务器后我博客上不去了。。。。

好像得重启一下nginx服务

`systemctl restart nginx.service`



screen常用命令：

~~~
screen -S yourname -> 新建一个叫yourname的session
screen -ls -> 列出当前所有的session
screen -r yourname -> 回到yourname这个session
screen -d yourname -> 远程detach某个session
screen -d -r yourname -> 结束当前session并回到yourname这个session
ctrl+a d  暂时中断会话
~~~



