---
title: "友链"
date: 2023-06-07
layout: one
---
{{< custom
    type="comment"
    title="友谊的小船"
    description="当互联网将我们联结在一起的时候，就像星空中的明星点点，共同点亮彼此的旅程。"
    avatarImage="https://bu.dusays.com/2023/10/03/651b26eea467f.png"
    link="#"
>}}

<br>
<p uk-margin style="display: flex; justify-content: center;">
    <button class="uk-button uk-button-primary uk-border-radiulzl" uk-toggle="target: #modal">提交友链</button>
</p>
<div id="modal" uk-modal>
    <div class="uk-modal-dialog uk-border-radius">
        <button class="uk-modal-close-default" type="button" aria-label="Close" uk-close></button>
     <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
    <!-- <div class="uk-slideshow-items">
        <div style="border-radius: 15px 15px 0px 0px;">
            <img src="https://bu.dusays.com/2024/06/09/6665012f3f1f6.webp" alt="" uk-cover>
        </div>
    </div> -->
</div>
        <ul uk-accordion class="uk-border-radius uk-accordions">
            <li class="uk-open" style="padding: 40px 20px 20px 20px;">
                <a class="uk-accordion-titles uk-text-center" href="#"><em>温馨提示：请务必 认真查看</em></a>
                <div class="uk-accordion-content" style="margin-top: 10px;">
                    {{< alert color="" >}}<div style="color: var(--tw-prose-p);  overflow: hidden; text-overflow: ellipsis;"><p>
                        <strong>名 称:</strong>&nbsp; BrainSpace<br/>
                        <strong>地 址:</strong>&nbsp; https://www.brain-hole.org<br/>
                        <strong>头 像:</strong>&nbsp; https://www.brain-hole.org/logo.webp<br/>
                        <strong>描 述:</strong>&nbsp; 探索灵感 记录想法<br><br>
                        <p>1、请将本站加入友链后填写并提交表单即可，需要关闭代理。</p>
                        <p>2、静态博客需要本地修改同步，只有在更新站点的时候会更新,介意请勿提交。</p>
                        <em>本站从2024年起已不再接受资源类博客的友链，造成不便深表歉意。</em><br>
                    </div>
                    {{< /alert >}}
                </div>
            </li>
        </ul>
        <div class="uk-container" style="padding-top: 15px;">
            <div id="submittedData" style="height: 40px; overflow: hidden; width: auto; padding: 10px; max-width: 100%;"></div>
        </div>
        <div class="uk-container">
            <form id="blogForm">
                <fieldset class="uk-fieldset">
                    <div class="uk-margin">
                        <input id="blogName" class="uk-input uk-form-success" type="text" placeholder="博客名称" aria-label="Input" style="border-radius: 8px; border-color: #f3f3f3;" required>
                    </div>
                    <div class="uk-margin">
                        <input id="blogUrl" class="uk-input uk-form-success" type="url" placeholder="博客URL" aria-label="Input" style="border-radius: 8px; border-color: #f3f3f3;" required>
                    </div>
                    <div class="uk-margin">
                        <input id="blogAvatar" class="uk-input uk-form-success" type="url" placeholder="头像URL" aria-label="Input" style="border-radius: 8px; border-color: #f3f3f3;" required>
                    </div>
                    <div class="uk-margin">
                        <textarea id="blogIntro" class="uk-textarea uk-form-success" rows="4" placeholder="博客描述" aria-label="Textarea" style="border-radius: 8px; border-color: #f3f3f3;" required></textarea>
                    </div>
                    <div class="uk-grid uk-child-width-1-1" style="padding-top: 15px; margin-left: 0px;" uk-grid>
                        <div id="blogForm" style="display: flex; justify-content: center;">
                            <button class="uk-button uk-button-default uk-modal-close uk-border-radiulzl" type="button" style="margin: 0px 10px;">关闭</button>
                            <button class="uk-button uk-button-primary uk-border-radiulzl" type="submit" style="margin: 0px 10px;    border-radius: 10px;">提交</button>
                        </div>
                        <div class="uk-text-center uk-fieldset" id="submissionStatus" style="margin-top: 0px;"></div>
                        {{< avinit >}}
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</div>

<h3 class="uk-heading-bullet ">我的朋友们</h3>

<div class="uk-child-width-1-6@l uk-grid-small uk-grid-match uk-animation-slide-bottom-small " uk-grid>
{{< custom type="comment-link" >}}
</div>

<h3 class="uk-heading-bullet ">短暂的离别</h3>

<div class="uk-child-width-1-6@l uk-grid-small uk-grid-match uk-animation-slide-bottom-small " uk-grid>
{{< custom type="comment-links" >}}
</div>







