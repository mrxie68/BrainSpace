---
title: "常用的 Hugo 命令"
date: 2024-11-15T14:33:00+08:00
author: 小茗同学
tags: ["博客搭建"]
featured_image: "/2023/07/05/64a4504a70872.webp"
summary: Hugo是一个流行的静态网站生成器，旨在帮助开发者快速构建高性能的网站。它是基于 Go 语言开发的，具有速度快、易于使用和灵活的特点。
---


Hugo是一个流行的静态网站生成器，旨在帮助开发者快速构建高性能的网站。它是基于 Go 语言开发的，具有速度快、易于使用和灵活的特点。然而对于我这小白来说比hexo上手难得多。所以把一些常用命令记下来用。

<h3 class="uk-heading-bullet">常用命令</h3>

```js
hugo server --bind="0.0.0.0"


hugo new post/my-article.md
//创建一个新的文章，指定文章路径、名称和文件扩展名。

hugo server
//启动 Hugo 的开发服务器，用于在本地预览网站。

hugo server -D
//启动开发服务器，并包括草稿（draft）文章在内。

hugo
//生成静态网站文件。默认情况下，生成的文件将保存在 public 目录中。

hugo -D
//生成静态网站文件，包括草稿（draft）文章在内。

hugo --gc
//生成静态网站文件之前清除缓存。

hugo --gc --minify
//生成静态网站文件之前清除缓存并压缩代码。

hugo deploy
//将生成的网站文件部署到指定的部署目标，如 GitHub Pages、Netlify 等。
```

<!--<h3>首次推送</h3>

   ```js
   git init
   git add .
   //初始化 Git 仓库并将生成的静态文件添加到仓库中

   git commit -m "Initial commit"
   //提交你的更改

   git remote add origin <your-github-repo>
   //关联本地仓库与 GitHub 仓库。

   git push -u origin master
   //推送本地仓库到 GitHub 仓库
   ```
-->
<h3 class="uk-heading-bullet">常用的git命令</h3>


   ```js
   git add .
   //添加所有修改或更新的文件到 Git 仓库

   git commit -m "Update"
   //提交你的更改

   git push origin master
   //推送你的更改到 GitHub 仓库
   ```

1. 初始化一个仓库：
```js
git init
```
这将在当前目录创建一个新的Git仓库。

2. 克隆仓库：
```js
git clone <仓库URL>
```
这将复制远程仓库的内容到本地。

3. 添加文件到暂存区：
```js
git add <文件名>
```
将指定的文件添加到暂存区，准备提交。

4. 提交更改：
```js
git commit -m "提交信息"
```
将暂存区的更改提交到版本历史中。

5. 查看状态：
```js
git status
```
查看工作目录和暂存区的状态。

6. 查看提交历史：
```js
git log
```
显示提交历史记录，包括作者、日期和提交信息。

7. 切换分支：
```js
git checkout <分支名>
```
切换到指定的分支。

8. 创建分支：
```js
git branch <新分支名>
```
创建一个新的分支。

9. 合并分支：
```js
git merge <目标分支名>
```
将目标分支的更改合并到当前分支。

10. 拉取远程更改：
```js
git pull
```
从远程仓库拉取最新更改并合并到当前分支。

11. 推送更改：
```js
git push
```
 将本地提交推送到远程仓库。

12. 删除文件：
```js
 git rm <文件名>
```
从版本控制中删除文件。

13. 重命名文件：
```js
git mv <旧文件名> <新文件名>
```
对文件进行重命名，并将更改提交到版本控制。

14. 查看远程仓库：
 ```js
git remote -v
```
查看与本地仓库关联的远程仓库。

15. 创建标签：
```js
git tag <标签名>
```
创建一个标签，通常用于标记版本。