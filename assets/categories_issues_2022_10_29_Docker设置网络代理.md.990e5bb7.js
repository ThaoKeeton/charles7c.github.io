import{_ as r}from"./chunks/ArticleMetadata.43849579.js";import{_ as d,c as i,g as h,w as y,b as l,f as u,a as m,i as k,o as t,e as v,q as C}from"./app.d002cfd5.js";const g="/assets/202210291930211.92d4ec2d.png",S=JSON.parse('{"title":"Docker \u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406","description":"","frontmatter":{"title":"Docker \u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406","author":"\u67E5\u5C14\u65AF","date":"2022/10/29 19:50","categories":["Bug\u4E07\u8C61\u96C6"],"tags":["Docker","Linux","CentOS","\u7F51\u7EDC\u4EE3\u7406"]},"headers":[{"level":2,"title":"\u95EE\u9898\u63CF\u8FF0","slug":"\u95EE\u9898\u63CF\u8FF0","link":"#\u95EE\u9898\u63CF\u8FF0","children":[]},{"level":2,"title":"\u539F\u56E0\u5206\u6790","slug":"\u539F\u56E0\u5206\u6790","link":"#\u539F\u56E0\u5206\u6790","children":[]},{"level":2,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599","link":"#\u53C2\u8003\u8D44\u6599","children":[]}],"relativePath":"categories/issues/2022/10/29/Docker\u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406.md","lastUpdated":1667230305000}'),_={name:"categories/issues/2022/10/29/Docker\u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406.md"},D=l("h1",{id:"docker-\u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406",tabindex:"-1"},[u("Docker \u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406 "),l("a",{class:"header-anchor",href:"#docker-\u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406","aria-hidden":"true"},"#")],-1),A=m(`<h2 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1">\u95EE\u9898\u63CF\u8FF0 <a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><strong>C\uFF1A</strong> \u4ECA\u5929\u7B14\u8005\u5728\u516C\u53F8\u7684\u4E00\u53F0\u5185\u7F51\u670D\u52A1\u5668\u4E0A\uFF0C\u6253\u7B97\u7528 docker-compose \u62C9\u8D77\u4E00\u5957\u5F00\u53D1\u73AF\u5883\u3002\u7ED3\u679C\u521A\u56DE\u8F66\u5B8C\u547D\u4EE4\u5C31\u62A5\u9519\u4E86\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">docker-compose up -d</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span></code></pre></div><p><img src="`+g+`" alt="202210291930211"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">Error response from daemon: Get &quot;https://registry-1.docker.io/v2/&quot;: x509: certificate signed by unknown authority</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">Error response from daemon: Get &quot;https://registry-1.docker.io/v2/&quot;: x509: certificate signed by unknown authority</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u7B14\u8005\u53C8\u8BD5\u4E86\u8BD5 <code>docker pull</code>\u3001<code>docker search</code> \u8FD9\u4E9B\u547D\u4EE4\uFF0C\u4E5F\u90FD\u62A5\u8FD9\u4E2A\u9519\u8BEF\u3002</p><h2 id="\u539F\u56E0\u5206\u6790" tabindex="-1">\u539F\u56E0\u5206\u6790 <a class="header-anchor" href="#\u539F\u56E0\u5206\u6790" aria-hidden="true">#</a></h2><p>\u4ECE\u62A5\u9519\u63D0\u793A\u4E0A\u6765\u770B\u7684\u8BDD\uFF0C\u7B14\u8005\u6709\u4E24\u4E2A\u6000\u7591\u7684\u53EF\u80FD\u6027\uFF1A</p><ol><li>SSL \u8BC1\u4E66\u7684\u95EE\u9898</li><li>\u7F51\u7EDC\u95EE\u9898</li></ol><p>\u7B2C 1 \u4E2A\u6000\u7591\u4E3B\u8981\u662F\u56E0\u4E3A\u540E\u9762\u7684\u63D0\u793A\u90E8\u5206\uFF1Acertificate signed by unknown authority\uFF0C\u800C\u4E14\u7B80\u5355\u53BB\u641C\u4E86\u4E00\u4E0B\uFF0C\u786E\u5B9E\u6709\u4E00\u4E9B\u89E3\u51B3\u65B9\u6848\u662F\u51B2\u7740\u8FD9\u4E2A\u70B9\u89E3\u51B3\u7684\u3002</p><p>\u7B2C 2 \u4E2A\u6000\u7591\u4E3B\u8981\u662F\u56E0\u4E3A\u524D\u9762\u7684\u63D0\u793A\u90E8\u5206\uFF1AError response from daemon\uFF0C\u524D\u6587\u5DF2\u7ECF\u63D0\u8FC7\u4E86\uFF0C\u8FD9\u662F\u4E00\u53F0\u5185\u7F51\u673A\u5668\uFF0C\u5185\u7F51\u673A\u5668\u8FD9\u4E2A\u8EAB\u4EFD\u57FA\u672C\u53EF\u4EE5\u8868\u660E\u5B83\u672C\u8EAB\u662F\u6CA1\u6709\u7F51\u7EDC\u7684\uFF0C\u80FD\u4E0A\u7F51\u4E5F\u662F\u56E0\u4E3A\u8BBE\u7F6E\u4E86\u7F51\u7EDC\u4EE3\u7406\u7684\u539F\u56E0\u3002\u800C\u4E14\uFF0C\u7B14\u8005\u4E4B\u524D\u4E5F\u8BB0\u5F55\u8FC7\u4E00\u4E2A\u95EE\u9898\uFF0C\u90A3\u4E2A\u95EE\u9898\u4EA7\u751F\u7684\u539F\u56E0\u5C31\u662F\u7CFB\u7EDF\u670D\u52A1\u4E0D\u4F1A\u8BC6\u522B <code>/etc/profile</code> \u4E2D\u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0Cdocker \u4E5F\u662F\u4E00\u79CD\u7CFB\u7EDF\u670D\u52A1\uFF0C\u6240\u4EE5\u8FD9\u8BA9\u7B14\u8005\u66F4\u503E\u5411\u4E8E\u662F\u8FD9\u79CD\u53EF\u80FD\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u65E2\u7136\u6709\u8FC7\u7C7B\u4F3C\u7684\u7ECF\u9A8C\uFF0C\u90A3\u80AF\u5B9A\u5C31\u6309\u4E4B\u524D\u7684\u7ECF\u9A8C\u5148\u64CD\u4F5C\u4E00\u4E0B\u8BD5\u8BD5\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u644A\u724C\u5427\uFF0C\u4E24\u79CD\u53EF\u80FD\uFF0C\u7B14\u8005\u90FD\u641C\u4E86\u3002\u4F46\u7B14\u8005\u592A\u61D2\u4E86\uFF0C\u770B\u4E86\u770B\u7B2C 1 \u79CD\u53EF\u80FD\u7684\u89E3\u51B3\u65B9\u6848\u6B65\u9AA4\uFF0C\u5B9E\u5728\u61D2\u5F97\u53BB\u64CD\u4F5C\u8BD5\u8BD5\u3002\u6240\u4EE5\u53C8\u53BB\u7B80\u5355\u641C\u4E86\u4E00\u4E0B Docker \u7F51\u7EDC\u4EE3\u7406\u7684\u8BBE\u7F6E\uFF0C\u610F\u5916\u53D1\u73B0\u5B83\u7684\u89E3\u51B3\u65B9\u6848\u548C\u7B14\u8005\u521A\u624D\u63D0\u5230\u8BB0\u5F55\u8FC7\u7684\u95EE\u9898\u89E3\u51B3\u65B9\u6848\u4E00\u6837\uFF0C\u8FD9\u4E5F\u8BA9\u7B14\u8005\u786E\u5B9A\u4E86\u95EE\u9898\u7684\u539F\u56E0\u3002</p></div><p>\u9996\u5148\uFF0C\u505C\u6B62 docker \u670D\u52A1\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">systemctl stop docker</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">systemctl stop docker</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\uFF0C\u521B\u5EFA docker \u670D\u52A1\u76EE\u5F55\uFF0C\u5E76\u521B\u5EFA HTTP \u4EE3\u7406\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">mkdir -p /etc/systemd/system/docker.service.d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">vi /etc/systemd/system/docker.service.d/http-proxy.conf</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /etc/systemd/system/docker.service.d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">vi /etc/systemd/system/docker.service.d/http-proxy.conf</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u4E0B\u65B9\u914D\u7F6E\u8D34\u5230 HTTP \u4EE3\u7406\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u662F\u7684\u6CA1\u9519\uFF0C\u5C31\u662F\u6DFB\u52A0\u4E86\u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\u5728 <code>/etc/profile</code> \u4E2D\u4E5F\u8BBE\u7F6E\u8FC7\uFF0C\u8BE6\u60C5\u89C1\u4E4B\u524D\u7B14\u8005\u8BB0\u5F55\u8FC7\u7684\u4E00\u7BC7\u8BBE\u7F6E\u7F51\u7EDC\u4EE3\u7406\u7684\u6587\u7AE0\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">[Service]</span></span>
<span class="line"><span style="color:#ABB2BF;">Environment=</span><span style="color:#98C379;">&quot;HTTP_PROXY=http://\u7528\u6237\u540D:\u5BC6\u7801@\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740:\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u7AEF\u53E3\u53F7&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">Environment=</span><span style="color:#98C379;">&quot;HTTPS_PROXY=http://\u7528\u6237\u540D:\u5BC6\u7801@\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740:\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u7AEF\u53E3\u53F7&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Service</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">Environment=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HTTP_PROXY=http://\u7528\u6237\u540D:\u5BC6\u7801@\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740:\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u7AEF\u53E3\u53F7</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Environment=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HTTPS_PROXY=http://\u7528\u6237\u540D:\u5BC6\u7801@\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740:\u4F60\u7684\u4EE3\u7406\u670D\u52A1\u5668\u7AEF\u53E3\u53F7</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\uFF0C\u91CD\u65B0\u52A0\u8F7D\u670D\u52A1\u914D\u7F6E\uFF0C\u91CD\u542F\u670D\u52A1\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#ABB2BF;">systemctl restart docker</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker</span></span>
<span class="line"></span></code></pre></div><p>OK\uFF0C\u518D\u6267\u884C docker \u547D\u4EE4\u5C31\u6CA1\u95EE\u9898\u4E86\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><ol><li>Control Docker with systemd#Custom Docker daemon options \u4E4B HTTP/HTTPS proxy\uFF1A<a href="https://docs.docker.com/config/daemon/systemd/#httphttps-proxy" target="_blank" rel="noreferrer">https://docs.docker.com/config/daemon/systemd/#httphttps-proxy</a></li></ol><div class="tip custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u8FD9\u91CC\u63D0\u4E00\u4E0B\uFF0C\u5B98\u65B9\u6587\u6863\u771F\u7684\u5F88\u9999\u3002</p></div>`,26);function f(s,b,B,T,F,x){const p=r,c=k("ClientOnly");return t(),i("div",null,[D,h(c,null,{default:y(()=>{var e,a,n,o;return[((a=(e=s.$frontmatter)==null?void 0:e.aside)!=null?a:!0)&&((o=(n=s.$frontmatter)==null?void 0:n.showArticleMetadata)!=null?o:!0)?(t(),v(p,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),A])}const E=d(_,[["render",f]]);export{S as __pageData,E as default};
