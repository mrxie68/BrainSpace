---
title: "留言板"
date: 2023-06-07
layout: one
---
<h3 class="uk-heading-bullet">最近来访的小伙伴</h3>
<!-- 小伙伴展示js -->
{{< twikoo type="message" >}}
<h3 class="uk-heading-bullet">留言板</h3>
{{< twikoo type="current" >}}

<style>
.prose :where(p):not(:where([class~=not-prose] *)) {
margin: 0em 0rem !important;
}
</style>