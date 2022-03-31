---
title: 一个python游戏迷你引擎(持续更新)
date: 2022-03-26 22:20:31
img:  https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/pygame/pygame.png
mathjax: true
summary: 挺好玩的，自己尝试做一下
categories: 折腾
tags:
 - pygame
 - python
typora-root-url: ..
---

生命不息，折腾不止v_v

<center><span style='color:blue;font-size:15px'>2022/3/26</span></center>

`pip list`查看现有插件

`pip install pygame`安装pygame库（不能连接vpn，否则会报错）

~~~python
#完整代码等项目完成后统一添加
import sys
import time
import pygame
import bg_color

pygame.init()


'主窗口'
screen_image = pygame.display.set_mode((800,600))
#设置窗口大小(screen_image为窗口图像)

screen_rect = screen_image.get_rect()
#get_rect()获得图像的形状信息和位置信息

'标题栏'
pygame.display.set_caption("Alien Invasion")

'飞船'
ship_image = pygame.image.load('images\plane.bmp')
#ship_image为飞船图像
ship_rect = ship_image.get_rect()
ship_rect.center=screen_rect.center
#让两个图像中央对齐

'子弹'
bullet_rect = pygame.Rect(0, 0, 3, 15)
bullet_rect.midbottom = ship_rect.midtop

'文字'
txt_font=pygame.font.SysFont(None,48)
txt_image=txt_font.render('50', True, bg_color.bg_coLor2, bg_color.bg_coLor3)
txt_rect = txt_image.get_rect()
txt_rect.x = 740
txt_rect.y = 20

time.sleep(2.6)
'主程序（死循环）'
while True:
    for event in pygame.event.get():    #捕捉所有操作
        if event.type == pygame.QUIT:
            sys.exit()
        elif event.type ==pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                ship_rect.x -=10
            if event.key == pygame.K_RIGHT:
                ship_rect.x +=10                
            if event.key == pygame.K_UP:
                ship_rect.y -=10
            if event.key == pygame.K_DOWN:
                ship_rect.y +=10

    bullet_rect.y -= 1
    time.sleep(0.01)
    '绘制图像'
    screen_image.fill(bg_color.bg_coLor1)
    screen_image.blit(ship_image, ship_rect)
    pygame.draw.rect(screen_image, bg_color.bg_coLor2, bullet_rect)
    screen_image.blit(txt_image, txt_rect)
    pygame.display.flip()
    
#ps:我的素材图找的还是如此离谱
~~~

![Demo_v0.01](https://cdn.jsdelivr.net/gh/neverland7/Ep4l.com@master/public/images/pygame/1.gif)

