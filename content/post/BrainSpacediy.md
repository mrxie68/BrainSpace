---
title: "BrainSpace DIY部分展示"
date: 2024-11-16T16:22:42+08:00
author: 小茗同学
tags: ["博客搭建"]
featured_image: "/2024/03/02/65e32b5997213.webp"
weight: 1
---

<h4 class="uk-heading-bullet">常用</h4>

<div class="uk-text-center uk-card-body">
    <a href="" class="uk-icon-button uk-margin-small-right"><iconify-icon icon="twemoji:airplane"></iconify-icon></a>
    <a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
    <a href="" class="uk-icon-button" uk-icon="youtube"></a>
</div>
<div class="uk-text-center uk-card-body">
<span class="uk-label">蓝色标签</span>
<span class="uk-label uk-label-success">绿色标签</span>
<span class="uk-label uk-label-warning">橙色标签</span>
<span class="uk-label uk-label-danger">红色标签</span>
</div>
<em>这是一段文字abc</em>&emsp;<mark>这是一段文字abc</mark>&emsp;<del>这是一段文字abc</del>&emsp;<q>这是一段文字abc</q>&emsp;<u>这是一段文字abc</u>&emsp;<small>这是一段文字abc</small>

```js
title: 标题
```

<ul uk-accordion class="uk-border-radius">
    <li class="uk-open" >
        <a class="uk-accordion-title " href="#">这是一个可以折叠的标签，自动展开</a>
        <div class="uk-accordion-content">
            <p>这是一个可以折叠的标签</p>
        </div>
    </li>
</ul>

<ul uk-accordion class="uk-border-radius">
    <li>
        <a class="uk-accordion-title" href="#">这是一个 不 可以关闭的提示框，并且它有五种颜色，点击展开查看</a>
        <div class="uk-accordion-content">
{{< alert type="warning1" >}}
这个提示框不能被关闭，它会一直存在。
{{< /alert >}}

{{< alert type="primary" >}} 
这是一个 不 可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

{{< alert type="success" >}} 
这是一个 不 可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

{{< alert type="warning" >}} 
这是一个 不 可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

{{< alert type="danger" >}} 
这是一个 不 可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

</div>
    </li>
</ul>

<ul uk-accordion class="uk-border-radius">
    <li>
        <a class="uk-accordion-title" href="#">这是一个可以关闭的提示框，并且它有五种颜色，点击展开查看</a>
        <div class="uk-accordion-content">
{{< alert color="warning1" >}} 
这是一个可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

{{< alert color="primary" >}} 
这是一个可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

{{< alert color="success" >}} 
这是一个可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

{{< alert color="warning" >}} 
这是一个可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

{{< alert color="danger" >}} 
这是一个可以关闭的提示框，并且它有四种颜色。 
{{< /alert >}}

</div>
    </li>
</ul>



<div class="uk-card  uk-card-body uk-width-1-1@m  uk-border-radius uk-card-default">
    <div class="uk-card-badge uk-label-danger">卡片</div>
    <h3 class="uk-card-title">这是一个可以添加内容的卡片</h3>
    <p>这是一个可以添加内容的卡片</p>
</div>

<br />

<div class="uk-card uk-card-default uk-oveww uk-flex-middle uk-box-shadow-hover-small uk-border-radius uk-alert-primary ">一组测试文字
</div>

 <div class="uk-text-center uk-card-body">这是文字 居中</div>
 <div class="uk-text-left">这是文字 靠左</div>
 <div class="uk-text-right uk-card-body"> 这是文字 靠右</div>

<h4 class="uk-heading-bullet">卡片</h4>

---


<div  uk-grid="masonry: pack">

{{< quote auth="2" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="leafy-green"  >}}
人活着，是不会好的，会一直痛苦，一直痛苦。从出生的时候开始，就一直痛苦，以为换了个地方会好，好个屁……只会在新的地方痛苦。没人明白它是怎么存在的。
{{< /quote >}}

{{< quote auth="2" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="books"  >}}
当时我看到一个人在用石头砸一只猫，问他为什么砸，他说砸猫让他感到很快乐。我本想制止，但是就这么看着他砸，我也觉得好像快乐起来。
{{< /quote >}}


{{< quote auth="2" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="feather"  >}}
我的生活就是一堆破烂，每天堆在我跟前。我清一块，就又有新的堆过来。
{{< /quote >}}

{{< quote auth="2" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐"  auimg="broken-heart"  >}}
每个时代的日常都差不多，稍微不同。你不用为这些事困惑，所有人过一段时间就全都明白了。
{{< /quote >}}

{{< quote auth="4" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="books"  >}}
你能去任何地方，可以去，到了就发现，没什么不一样的。
{{< /quote >}}

{{< quote auth="4" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="books"  >}}
你能去任何地方，可以去，到了就发现，没什么不一样的。
{{< /quote >}}

{{< quote auth="4" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="books"  >}}
你能去任何地方，可以去，到了就发现，没什么不一样的。
{{< /quote >}}

{{< quote auth="4" auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="books"  >}}
你能去任何地方，可以去，到了就发现，没什么不一样的。
{{< /quote >}}

{{< quote auth1="经典对白" auicon="leafy-green" author="—— 大象席地而坐" auimg="feather"  >}}
我应该要出手制止的。但我没有。如果我出手了，不就等于我跟那个人产生关系了吗？
{{< /quote >}}

</div>
<br>

---




<div>
    <input type="checkbox" class="checkbox">
    <input id="c1" type="checkbox">测试内容
    <input id="c2" type="checkbox" checked>测试内容
    <input id="r1" type="radio" name="radio" value="1">测试内容
    <input id="r2" type="radio" name="radio" value="2" checked>测试内容
    <input id="s1" type="checkbox" class="switch dark" class="">测试内容
    <input id="s2" type="checkbox" class="switch" checked>测试内容
    <input id="c1d" type="checkbox" disabled>测试内容
    <input id="c2d" type="checkbox" checked disabled>测试内容
    <input id="r1d" type="radio" name="radiod" value="1" disabled>测试内容
    <input id="r2d" type="radio" name="radiod" value="2" checked disabled>测试内容
    <input id="s1d" type="checkbox" class="switch" disabled>测试内容
    <input id="s2d" type="checkbox" class="switch" checked disabled>测试内容
</div>

<br>
<p class="uk-heading-line uk-text-center uk-text-muted"><span>Heading Line</span></p>


<div class="uk-container uk-flex uk-flex-center uk-flex-middle" style="height: 10rem;">
        <div class="uk-text-center uk-card-body">
            <!-- 这里放置您的内容 -->
            <h2>Hello, UIkit!这是容器居中</h2>
            This is a centered container.
        </div>
    </div>

<h4 class="uk-heading-bullet">图片</h4>

nolink="true" 将无法点击 默认可以点击  width_suffix="4"一行显示的图片数量  pt="0" 顶部高度

{{< comment-imgs imgurl1="/2023/12/17/657ee3eb4561f.webp" imgurl2="/2023/12/17/657ee3eb4561f.webp" imgurl3="/2023/12/17/657ee3eb4561f.webp"  imgurl4="/2023/12/17/657ee3eb4561f.webp" width_suffix="4" pt="0" >}}  

{{< comment-imgs imgurl1="/2023/12/17/657ee3eb4561f.webp" imgurl2="/2023/12/17/657ee18b3e7bf.webp" width_suffix="2" pt="20" >}}

<h4 class="uk-heading-bullet">音乐</h4>

详细使用方法 参考：meting-js

<meting-js server="tencent" type="song" id="003FYhal2hH32y" list-folded=true /></meting-js>

