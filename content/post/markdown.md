---
title: "markdown基本语法展示"
date: 2024-11-15T14:33:00+08:00
author: 小茗同学
tags: ["博客搭建"]
blogTitle: "版权自定义"
featured_image: "/2023/08/21/64e308ebe2cf6.webp"
---

<em>由于使用了 UIkit 可能有少部分markdown语法不兼容 或者已被破坏 如果需要请自行修改文件</em> 其余一些样式需要自行参考[DIY语法](/post/BrainSpacediy) 或者 [UIkit](https://getuikit.com/)

# 一级标题
这是一个一级标题，通常用于文章或页面的主标题。它在内容中占据最重要的位置。

## 二级标题
二级标题是一个相对次要的标题，通常用于文章的章节或大纲。

### 三级标题
三级标题比二级标题更小，通常用于小节或段落标题。

#### 四级标题
四级标题一般用于小节下的更细分部分。

##### 五级标题
五级标题通常出现在较长的文档中，层级较深。

###### 六级标题
六级标题是最小的标题级别，通常用于非常具体的部分。

---

*斜体文本* 使用星号表示斜体。  
_斜体文本_ 使用下划线表示斜体。

**加粗文本** 使用两个星号表示加粗。  
__加粗文本__ 使用两个下划线表示加粗。

***斜体加粗文本*** 也可以同时加粗并倾斜。

---

- 项目 1
- 项目 2

1. 第一项
2. 第二项
3. 第三项

---

> 这是一个引用的段落，通常用于引用他人的话或强调某个观点。
>
> 引用可以分多行，每行以 `>` 开头。
---

[Google](https://www.google.com)  
这是一个指向 Google 的链接。

[GitHub](https://github.com)  
在链接中也可以包含标题属性，例如：[GitHub](https://github.com "点击访问 GitHub")。

---

![图片描述](https://via.placeholder.com/150)  
这是一个图片的例子，图片来自 `https://via.placeholder.com/150`。

---

这是一个内联公式：$E = mc^2$，它表示能量和质量的关系。



| 左对齐  | 居中对齐  | 右对齐  |
|:-------|:--------:|-------:|
| 内容1  |   内容2  |   内容3 |
| 内容4  |   内容5  |   内容6 |


---


```js
title: 标题
date: 时间
author: 作者
tags: 标签
weight: 1-5 置顶顺序   6-10热门文章顺序
blogTitle: 底部版权自定义
enableComments: true  评论开关
featured_image: 首页图片
summary: 文章简介
```



---

这是一个显示公式：
$$
a^2 + b^2 = c^2
$$



---


$\Phi(t) = \int_0^\infty z^{t-1}e^{-z}dz\,.$
$$\Phi(t) = \int_0^\infty z^{t-1}e^{-z}dz\,.$$


$$
f(n)
\begin{cases}
\cfrac n2, &if\ n\ is\ even\\
3n^2 + n+1, &if\  n\ is\ odd
\end{cases}
$$

$$
x=a_0 + \cfrac {1^2}{a_1 + \cfrac {2^2}{a_2 + \cfrac {3^2}{a_3 + \cfrac {4^2}{a_4 + ...}}}}
$$