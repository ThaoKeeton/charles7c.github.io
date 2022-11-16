import{_ as r}from"./chunks/ArticleMetadata.3463f0f7.js";import{_ as i,c as y,g as C,w as B,b as o,f as A,a as d,i as F,o as e,e as D,q as E}from"./app.266f6f9a.js";const m="/assets/202210282235156.aacc81a2.png",_="/assets/202210282236211.fd67d645.png",T=JSON.parse('{"title":"Docker \u5B89\u88C5 MinIO \u8BE6\u7EC6\u6B65\u9AA4","description":"","frontmatter":{"title":"Docker \u5B89\u88C5 MinIO \u8BE6\u7EC6\u6B65\u9AA4","author":"\u67E5\u5C14\u65AF","date":"2022/10/28 22:37","categories":["\u6742\u788E\u9006\u88AD\u53F2"],"tags":["MinIO","Docker","\u5BB9\u5668"],"showComment":false},"headers":[{"level":2,"title":"\u62C9\u53D6\u955C\u50CF","slug":"\u62C9\u53D6\u955C\u50CF","link":"#\u62C9\u53D6\u955C\u50CF","children":[]},{"level":2,"title":"\u8FD0\u884C\u5BB9\u5668","slug":"\u8FD0\u884C\u5BB9\u5668","link":"#\u8FD0\u884C\u5BB9\u5668","children":[]},{"level":2,"title":"\u9A8C\u8BC1","slug":"\u9A8C\u8BC1","link":"#\u9A8C\u8BC1","children":[]},{"level":2,"title":"Docker Compose\u811A\u672C","slug":"docker-compose\u811A\u672C","link":"#docker-compose\u811A\u672C","children":[]}],"relativePath":"categories/fragments/2022/10/28/Docker\u5B89\u88C5MinIO.md","lastUpdated":1668604952000}'),I={name:"categories/fragments/2022/10/28/Docker\u5B89\u88C5MinIO.md"},S=o("h1",{id:"docker-\u5B89\u88C5-minio-\u8BE6\u7EC6\u6B65\u9AA4",tabindex:"-1"},[A("Docker \u5B89\u88C5 MinIO \u8BE6\u7EC6\u6B65\u9AA4 "),o("a",{class:"header-anchor",href:"#docker-\u5B89\u88C5-minio-\u8BE6\u7EC6\u6B65\u9AA4","aria-hidden":"true"},"#")],-1),u=d(`<div class="tip custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u7B14\u8005\u4E0B\u9762\u7684\u6B65\u9AA4\u53CA\u914D\u7F6E\u662F\u57FA\u4E8E\u6307\u5B9A\u7248\u672C\u7684\u5B9E\u8DF5\uFF0C\u5927\u591A\u6570\u7A0B\u5E8F\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5728\u76F8\u5DEE\u4E0D\u5927\u7684\u7248\u672C\u65F6\u53EF\u4EE5\u76F4\u63A5\u53C2\u8003\u3002\uFF08\u5F53\u7136\u4E86\uFF0C\u5373\u4F7F\u662F\u975E Docker \u65B9\u5F0F\u5B89\u88C5\u7A0B\u5E8F\u4E5F\u662F\u4E00\u6837\u9053\u7406\uFF09</p></div><h2 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1">\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u62C9\u53D6\u955C\u50CF\u65F6\u9700\u8981\u660E\u786E\u955C\u50CF\u7248\u672C\uFF08Tag\uFF09\u3002</p></div><p>\u4E0D\u6307\u5B9A\u7248\u672C\uFF08Tag\uFF09\u5C31\u62C9\u53D6\u955C\u50CF\uFF0C\u90A3\u62C9\u53D6\u4E0B\u6765\u7684\u955C\u50CF\u7248\u672C\uFF08Tag\uFF09\u9ED8\u8BA4\u662F <code>latest</code>\uFF08\u6700\u65B0\u7684\uFF09\u3002<code>latest</code> \u4F1A\u8DDF\u968F Docker Registry \u4E2D\u7684\u8BB0\u5F55\u53D8\u5316\uFF0C\u73B0\u5728\u62C9\u53D6\u4E0B\u6765\u7684 <code>latest</code> \u662F x1 \u7248\u672C\uFF0C\u4F46\u9694\u4E86\u4E00\u6BB5\u65F6\u95F4\u540E\u4F60\u5728\u5176\u4ED6\u673A\u5668\u4E0A\u518D\u62C9\u53D6 <code>latest</code> \u53EF\u80FD\u5C31\u662F x2 \u7248\u672C\u4E86\u3002</p><p>\u53D8\u5316\u7684\u7248\u672C\uFF0C\u4E0D\u5229\u4E8E\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u7684\u7A33\u5B9A\u3002\u65E0\u8BBA\u662F\u540E\u7EED\u5728\u5176\u4ED6\u73AF\u5883\u90E8\u7F72\u8FD8\u662F\u6269\u5BB9\u96C6\u7FA4\u7B49\u573A\u666F\u5747\u8981\u6C42\u6839\u636E\u67B6\u6784\u8981\u6C42\u6307\u5B9A\u597D\u7248\u672C\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">docker pull minio/minio:RELEASE.2022-08-02T23-59-16Z.fips</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">docker pull minio/minio:RELEASE.2022-08-02T23-59-16Z.fips</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD0\u884C\u5BB9\u5668" tabindex="-1">\u8FD0\u884C\u5BB9\u5668 <a class="header-anchor" href="#\u8FD0\u884C\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p><strong>\u4E0B\u65B9\u7684\u914D\u7F6E\uFF0C\u5207\u8BB0\u8981\u6839\u636E\u4E2A\u4EBA\u5B9E\u9645\u60C5\u51B5\u6765\u4FEE\u6539\u3002</strong></p></div><ul><li>\u5BB9\u5668\u7684\u540D\u79F0</li><li>\u955C\u50CF\u540D\u79F0:\u7248\u672C</li><li>\u662F\u5426\u8BBE\u7F6E\u81EA\u542F\u52A8\uFF1F</li><li>\u662F\u5426\u7AEF\u53E3\u6620\u5C04\uFF1F</li><li>\u73AF\u5883\u53D8\u91CF\u914D\u7F6E</li><li>\u6620\u5C04\u7684\u8BDD\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u54EA\u4E2A\u7AEF\u53E3\uFF1F</li><li>\u662F\u5426\u6302\u8F7D\u5377\uFF1F</li><li>\u6302\u8F7D\u7684\u8BDD\u8981\u6302\u8F7D\u5BBF\u4E3B\u673A\u54EA\u4E2A\u76EE\u5F55\uFF1F</li><li>......</li><li>\u7B49\u81EA\u5B9A\u4E49\u914D\u7F6E</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># MINIO_ACCESS_KEY\uFF1A\u7528\u6237\u540D\uFF0C\u9ED8\u8BA4\u4E3A minioadmin</span></span>
<span class="line"><span style="color:#7F848E;"># MINIO_SECRET_KEY\uFF1A\u7528\u6237\u5BC6\u7801\uFF0C\u9ED8\u8BA4\u4E3A minioadmin</span></span>
<span class="line"><span style="color:#7F848E;"># MINIO_COMPRESS\uFF1A\u5F00\u542F\u538B\u7F29 on \u5F00\u542F off \u5173\u95ED</span></span>
<span class="line"><span style="color:#7F848E;"># MINIO_COMPRESS_EXTENSIONS\uFF1A\u6269\u5C55\u540D .pdf,.doc \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#7F848E;"># MINIO_COMPRESS_MIME_TYPES\uFF1Amime \u7C7B\u578B application/pdf \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#7F848E;"># MINIO_SERVER_URL\uFF1AHTTPS \u9700\u8981\u6307\u5B9A\u670D\u52A1\u57DF\u540D\uFF0C\u4F8B\u5982\uFF1Ahttps://xxx.com:9000</span></span>
<span class="line"><span style="color:#7F848E;"># MINIO_BROWSER_REDIRECT_URL\uFF1AHTTPS \u9700\u8981\u6307\u5B9A\u670D\u52A1\u57DF\u540D\uFF0C\u4F8B\u5982\uFF1Ahttps://xxx.com:9001</span></span>
<span class="line"><span style="color:#ABB2BF;">docker run -d \\</span></span>
<span class="line"><span style="color:#ABB2BF;">--name minio minio/minio:RELEASE.2022-08-02T23-59-16Z.fips \\</span></span>
<span class="line"><span style="color:#ABB2BF;">--restart=always \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e TZ=</span><span style="color:#98C379;">&quot;Asia/Shanghai&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e MINIO_ACCESS_KEY=</span><span style="color:#98C379;">&quot;minioadmin&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e MINIO_SECRET_KEY=</span><span style="color:#98C379;">&quot;minioadmin&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e MINIO_COMPRESS=</span><span style="color:#98C379;">&quot;off&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e MINIO_COMPRESS_EXTENSIONS=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e MINIO_COMPRESS_MIME_TYPES=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-p 9000:9000 -p 9001:9001 \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v /opt/disk/docker/volumes/minio/conf:/root/.minio \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v /opt/disk/docker/volumes/minio/data:/data \\</span></span>
<span class="line"><span style="color:#ABB2BF;">server --address </span><span style="color:#98C379;">&#39;:9000&#39;</span><span style="color:#ABB2BF;"> --console-address </span><span style="color:#98C379;">&#39;:9001&#39;</span><span style="color:#ABB2BF;"> /data \\</span></span>
<span class="line"><span style="color:#7F848E;"># \u4F7F\u7528\u8BE5\u53C2\u6570\uFF0C\u5BB9\u5668\u5185\u7684 root \u7528\u6237\u624D\u62E5\u6709\u771F\u6B63\u7684 root \u6743\u9650</span></span>
<span class="line"><span style="color:#ABB2BF;">--privileged=true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;"># MINIO_ACCESS_KEY\uFF1A\u7528\u6237\u540D\uFF0C\u9ED8\u8BA4\u4E3A minioadmin</span></span>
<span class="line"><span style="color:#676E95;"># MINIO_SECRET_KEY\uFF1A\u7528\u6237\u5BC6\u7801\uFF0C\u9ED8\u8BA4\u4E3A minioadmin</span></span>
<span class="line"><span style="color:#676E95;"># MINIO_COMPRESS\uFF1A\u5F00\u542F\u538B\u7F29 on \u5F00\u542F off \u5173\u95ED</span></span>
<span class="line"><span style="color:#676E95;"># MINIO_COMPRESS_EXTENSIONS\uFF1A\u6269\u5C55\u540D .pdf,.doc \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#676E95;"># MINIO_COMPRESS_MIME_TYPES\uFF1Amime \u7C7B\u578B application/pdf \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#676E95;"># MINIO_SERVER_URL\uFF1AHTTPS \u9700\u8981\u6307\u5B9A\u670D\u52A1\u57DF\u540D\uFF0C\u4F8B\u5982\uFF1Ahttps://xxx.com:9000</span></span>
<span class="line"><span style="color:#676E95;"># MINIO_BROWSER_REDIRECT_URL\uFF1AHTTPS \u9700\u8981\u6307\u5B9A\u670D\u52A1\u57DF\u540D\uFF0C\u4F8B\u5982\uFF1Ahttps://xxx.com:9001</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name minio minio/minio:RELEASE.2022-08-02T23-59-16Z.fips \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart=always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e TZ=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Asia/Shanghai</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MINIO_ACCESS_KEY=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">minioadmin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MINIO_SECRET_KEY=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">minioadmin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MINIO_COMPRESS=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MINIO_COMPRESS_EXTENSIONS=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MINIO_COMPRESS_MIME_TYPES=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 9000:9000 -p 9001:9001 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /opt/disk/docker/volumes/minio/conf:/root/.minio \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /opt/disk/docker/volumes/minio/data:/data \\</span></span>
<span class="line"><span style="color:#A6ACCD;">server --address </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:9000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> --console-address </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:9001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /data \\</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528\u8BE5\u53C2\u6570\uFF0C\u5BB9\u5668\u5185\u7684 root \u7528\u6237\u624D\u62E5\u6709\u771F\u6B63\u7684 root \u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9A8C\u8BC1" tabindex="-1">\u9A8C\u8BC1 <a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a></h2><p>\u670D\u52A1\u5668\u5F00\u653E\u597D\u76F8\u5E94\u7AEF\u53E3\u6216\u8BBE\u7F6E\u597D\u5B89\u5168\u7EC4\u89C4\u5219\u540E\uFF0C\u8BBF\u95EE <code>http://\u5BBF\u4E3B\u673AIP:\u6620\u5C04\u7684\u7AEF\u53E3</code> \uFF08\u4F8B\u5982\u6309\u4E0A\u65B9\u914D\u7F6E\u90A3\u5C31\u662F\uFF1A<a href="http://xn--IP-wz2c754c5qn:9001" target="_blank" rel="noreferrer">http://\u5BBF\u4E3B\u673AIP:9001</a>\uFF09\u5373\u53EF\u770B\u5230 MinIO \u7BA1\u7406\u754C\u9762\u3002</p><p><img src="`+m+'" alt="202210282235156"></p><p>\u8F93\u5165\u4F60\u521A\u624D\u6307\u5B9A\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF0C\u767B\u5F55\u8FDB\u6765\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u4E00\u4E2A Bucket \u4E5F\u6CA1\u6709\uFF0C\u53EF\u4EE5\u70B9\u51FB\u53F3\u4FA7\u7684 [Create Bucket] \u6765\u521B\u5EFA\u3002</p><p><img src="'+_+`" alt="202210282236211"></p><h2 id="docker-compose\u811A\u672C" tabindex="-1">Docker Compose\u811A\u672C <a class="header-anchor" href="#docker-compose\u811A\u672C" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u662F\u7528\u7684 docker-compose \u6765\u5B89\u88C5\uFF0C\u4E0B\u65B9\u9644\u4E0A\u76F8\u5E94 docker-compose.yml \u811A\u672C\u5185\u5BB9\u3002</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#E06C75;">services</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">minio</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">minio</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">minio/minio:RELEASE.2022-08-02T23-59-16Z.fips</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">restart</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">always</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">TZ</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MINIO_ACCESS_KEY</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">minioadmin</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MINIO_SECRET_KEY</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">minioadmin</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;"># HTTPS \u9700\u8981\u6307\u5B9A\u57DF\u540D</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">#MINIO_SERVER_URL: &#39;https://xxx.com:9000&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;">#MINIO_BROWSER_REDIRECT_URL: &#39;https://xxx.com:9001&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;"># \u5F00\u542F\u538B\u7F29 on \u5F00\u542F off \u5173\u95ED</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MINIO_COMPRESS</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;off&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;"># \u6269\u5C55\u540D .pdf,.doc \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MINIO_COMPRESS_EXTENSIONS</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;"># mime \u7C7B\u578B application/pdf \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">MINIO_COMPRESS_MIME_TYPES</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">ports</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">9000:9000</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">9001:9001</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/minio/conf:/root/.minio</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/minio/data:/data</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">command</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">server --address &#39;:9000&#39; --console-address &#39;:9001&#39; /data</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">privileged</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minio</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minio</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minio/minio:RELEASE.2022-08-02T23-59-16Z.fips</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">TZ</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Asia/Shanghai</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MINIO_ACCESS_KEY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minioadmin</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MINIO_SECRET_KEY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minioadmin</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># HTTPS \u9700\u8981\u6307\u5B9A\u57DF\u540D</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">#MINIO_SERVER_URL: &#39;https://xxx.com:9000&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">#MINIO_BROWSER_REDIRECT_URL: &#39;https://xxx.com:9001&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># \u5F00\u542F\u538B\u7F29 on \u5F00\u542F off \u5173\u95ED</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MINIO_COMPRESS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># \u6269\u5C55\u540D .pdf,.doc \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MINIO_COMPRESS_EXTENSIONS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># mime \u7C7B\u578B application/pdf \u4E3A\u7A7A \u6240\u6709\u7C7B\u578B\u5747\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">MINIO_COMPRESS_MIME_TYPES</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">9000:9000</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">9001:9001</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/minio/conf:/root/.minio</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/minio/data:/data</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server --address &#39;:9000&#39; --console-address &#39;:9001&#39; /data</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">privileged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u5199\u597D docker-compose.yml \u811A\u672C\u540E\uFF0C\u5728\u811A\u672C\u540C\u7EA7\u76EE\u5F55\u6267\u884C\u4E0B\u65B9\u547D\u4EE4\u5373\u53EF\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">docker-compose up -d</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span></code></pre></div>`,20);function h(s,M,O,k,R,f){const c=r,t=F("ClientOnly");return e(),y("div",null,[S,C(t,null,{default:B(()=>{var n,a,l,p;return[((a=(n=s.$frontmatter)==null?void 0:n.aside)!=null?a:!0)&&((p=(l=s.$frontmatter)==null?void 0:l.showArticleMetadata)!=null?p:!0)?(e(),D(c,{key:0,article:s.$frontmatter},null,8,["article"])):E("",!0)]}),_:1}),u])}const g=i(I,[["render",h]]);export{T as __pageData,g as default};
