import{_ as t}from"./chunks/ArticleMetadata.096763b2.js";import{_ as i,c as d,g as y,w as A,b as e,f as D,a as C,i as B,o,e as m,q as u}from"./app.13cf9883.js";const F="/assets/202210262026166.bf550ff7.png",b="/assets/202210262026266.299da677.png",_="/assets/202210262026566.0b098c6c.png",T=JSON.parse('{"title":"Docker \u5B89\u88C5 OpenLDAP \u8BE6\u7EC6\u6B65\u9AA4","description":"","frontmatter":{"title":"Docker \u5B89\u88C5 OpenLDAP \u8BE6\u7EC6\u6B65\u9AA4","author":"\u67E5\u5C14\u65AF","date":"2022/10/26 20:28","categories":["\u6742\u788E\u9006\u88AD\u53F2"],"tags":["LDAP","Docker","\u5BB9\u5668"],"showComment":false},"headers":[{"level":2,"title":"\u62C9\u53D6\u955C\u50CF","slug":"\u62C9\u53D6\u955C\u50CF","link":"#\u62C9\u53D6\u955C\u50CF","children":[]},{"level":2,"title":"\u8FD0\u884C\u5BB9\u5668","slug":"\u8FD0\u884C\u5BB9\u5668","link":"#\u8FD0\u884C\u5BB9\u5668","children":[]},{"level":2,"title":"\u9A8C\u8BC1","slug":"\u9A8C\u8BC1","link":"#\u9A8C\u8BC1","children":[]},{"level":2,"title":"Docker Compose\u811A\u672C","slug":"docker-compose\u811A\u672C","link":"#docker-compose\u811A\u672C","children":[]}],"relativePath":"categories/fragments/2022/10/26/Docker\u5B89\u88C5OpenLDAP.md","lastUpdated":1667125570000}'),v={name:"categories/fragments/2022/10/26/Docker\u5B89\u88C5OpenLDAP.md"},k=e("h1",{id:"docker-\u5B89\u88C5-openldap-\u8BE6\u7EC6\u6B65\u9AA4",tabindex:"-1"},[D("Docker \u5B89\u88C5 OpenLDAP \u8BE6\u7EC6\u6B65\u9AA4 "),e("a",{class:"header-anchor",href:"#docker-\u5B89\u88C5-openldap-\u8BE6\u7EC6\u6B65\u9AA4","aria-hidden":"true"},"#")],-1),E=C(`<div class="tip custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u7B14\u8005\u4E0B\u9762\u7684\u6B65\u9AA4\u53CA\u914D\u7F6E\u662F\u57FA\u4E8E\u6307\u5B9A\u7248\u672C\u7684\u5B9E\u8DF5\uFF0C\u5927\u591A\u6570\u7A0B\u5E8F\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5728\u76F8\u5DEE\u4E0D\u5927\u7684\u7248\u672C\u65F6\u53EF\u4EE5\u76F4\u63A5\u53C2\u8003\u3002\uFF08\u5F53\u7136\u4E86\uFF0C\u5373\u4F7F\u662F\u975E Docker \u65B9\u5F0F\u5B89\u88C5\u7A0B\u5E8F\u4E5F\u662F\u4E00\u6837\u9053\u7406\uFF09</p></div><h2 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1">\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u62C9\u53D6\u955C\u50CF\u65F6\u9700\u8981\u660E\u786E\u955C\u50CF\u7248\u672C\uFF08Tag\uFF09\u3002</p></div><p>\u4E0D\u6307\u5B9A\u7248\u672C\uFF08Tag\uFF09\u5C31\u62C9\u53D6\u955C\u50CF\uFF0C\u90A3\u62C9\u53D6\u4E0B\u6765\u7684\u955C\u50CF\u7248\u672C\uFF08Tag\uFF09\u9ED8\u8BA4\u662F <code>latest</code>\uFF08\u6700\u65B0\u7684\uFF09\u3002<code>latest</code> \u4F1A\u8DDF\u968F Docker Registry \u4E2D\u7684\u8BB0\u5F55\u53D8\u5316\uFF0C\u73B0\u5728\u62C9\u53D6\u4E0B\u6765\u7684 <code>latest</code> \u662F x1 \u7248\u672C\uFF0C\u4F46\u9694\u4E86\u4E00\u6BB5\u65F6\u95F4\u540E\u4F60\u5728\u5176\u4ED6\u673A\u5668\u4E0A\u518D\u62C9\u53D6 <code>latest</code> \u53EF\u80FD\u5C31\u662F x2 \u7248\u672C\u4E86\u3002</p><p>\u53D8\u5316\u7684\u7248\u672C\uFF0C\u4E0D\u5229\u4E8E\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u7684\u7A33\u5B9A\u3002\u65E0\u8BBA\u662F\u540E\u7EED\u5728\u5176\u4ED6\u73AF\u5883\u90E8\u7F72\u8FD8\u662F\u6269\u5BB9\u96C6\u7FA4\u7B49\u573A\u666F\u5747\u8981\u6C42\u6839\u636E\u67B6\u6784\u8981\u6C42\u6307\u5B9A\u597D\u7248\u672C\u3002</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">docker pull osixia/openldap:1.5.0</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">docker pull osixia/openldap:1.5.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u8FD0\u884C\u5BB9\u5668" tabindex="-1">\u8FD0\u884C\u5BB9\u5668 <a class="header-anchor" href="#\u8FD0\u884C\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p><strong>\u4E0B\u65B9\u7684\u914D\u7F6E\uFF0C\u5207\u8BB0\u8981\u6839\u636E\u4E2A\u4EBA\u5B9E\u9645\u60C5\u51B5\u6765\u4FEE\u6539\u3002</strong></p></div><ul><li>\u5BB9\u5668\u7684\u540D\u79F0</li><li>\u955C\u50CF\u540D\u79F0:\u7248\u672C</li><li>\u662F\u5426\u8BBE\u7F6E\u81EA\u542F\u52A8\uFF1F</li><li>\u662F\u5426\u7AEF\u53E3\u6620\u5C04\uFF1F</li><li>\u73AF\u5883\u53D8\u91CF\u914D\u7F6E</li><li>\u6620\u5C04\u7684\u8BDD\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u54EA\u4E2A\u7AEF\u53E3\uFF1F</li><li>\u662F\u5426\u6302\u8F7D\u5377\uFF1F</li><li>\u6302\u8F7D\u7684\u8BDD\u8981\u6302\u8F7D\u5BBF\u4E3B\u673A\u54EA\u4E2A\u76EE\u5F55\uFF1F</li><li>......</li><li>\u7B49\u81EA\u5B9A\u4E49\u914D\u7F6E</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># LDAP_ORGANISATION \u7EC4\u7EC7\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3A Example Inc</span></span>
<span class="line"><span style="color:#7F848E;"># LDAP_DOMAIN \u57DF\uFF0C\u9ED8\u8BA4\u4E3A example.org</span></span>
<span class="line"><span style="color:#7F848E;"># LDAP_ADMIN_PASSWORD \u7BA1\u7406\u5458\u5BC6\u7801\uFF0C\u9ED8\u8BA4\u4E3A admin</span></span>
<span class="line"><span style="color:#7F848E;"># LDAP_TLS_VERIFY_CLIENT TLS\u9A8C\u8BC1\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#7F848E;">#   demand\uFF1A\u9ED8\u8BA4\u3002\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u6CA1\u6709\u8BC1\u4E66\u6216\u8BC1\u4E66\u9519\u8BEF\u90FD\u5C06\u7ACB\u5373\u7EC8\u6B62\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#7F848E;">#   try\uFF1A\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u6CA1\u6709\u8BC1\u4E66\uFF08\u5141\u8BB8\u8FDE\u63A5\uFF09\uFF0C\u8BC1\u4E66\u9519\u8BEF\uFF08\u7EC8\u6B62\u8FDE\u63A5\uFF09</span></span>
<span class="line"><span style="color:#7F848E;">#   allow\uFF1A\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u6CA1\u6709\u8BC1\u4E66\u6216\u8BC1\u4E66\u9519\u8BEF\uFF0C\u90FD\u5141\u8BB8\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#7F848E;">#   never\uFF1A\u4E0D\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8BC1\u4E66</span></span>
<span class="line"><span style="color:#ABB2BF;">docker run -d \\</span></span>
<span class="line"><span style="color:#ABB2BF;">--name openldap osixia/openldap:1.5.0 \\</span></span>
<span class="line"><span style="color:#ABB2BF;">--restart=always \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_ORGANISATION=</span><span style="color:#98C379;">&quot;baidu&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_DOMAIN=</span><span style="color:#98C379;">&quot;baidu.com&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_ADMIN_PASSWORD=</span><span style="color:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_TLS_VERIFY_CLIENT=try \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-p 389:389 -p 636:636 \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v /opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v /opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#676E95;"># LDAP_ORGANISATION \u7EC4\u7EC7\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3A Example Inc</span></span>
<span class="line"><span style="color:#676E95;"># LDAP_DOMAIN \u57DF\uFF0C\u9ED8\u8BA4\u4E3A example.org</span></span>
<span class="line"><span style="color:#676E95;"># LDAP_ADMIN_PASSWORD \u7BA1\u7406\u5458\u5BC6\u7801\uFF0C\u9ED8\u8BA4\u4E3A admin</span></span>
<span class="line"><span style="color:#676E95;"># LDAP_TLS_VERIFY_CLIENT TLS\u9A8C\u8BC1\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#676E95;">#   demand\uFF1A\u9ED8\u8BA4\u3002\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u6CA1\u6709\u8BC1\u4E66\u6216\u8BC1\u4E66\u9519\u8BEF\u90FD\u5C06\u7ACB\u5373\u7EC8\u6B62\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#676E95;">#   try\uFF1A\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u6CA1\u6709\u8BC1\u4E66\uFF08\u5141\u8BB8\u8FDE\u63A5\uFF09\uFF0C\u8BC1\u4E66\u9519\u8BEF\uFF08\u7EC8\u6B62\u8FDE\u63A5\uFF09</span></span>
<span class="line"><span style="color:#676E95;">#   allow\uFF1A\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u6CA1\u6709\u8BC1\u4E66\u6216\u8BC1\u4E66\u9519\u8BEF\uFF0C\u90FD\u5141\u8BB8\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#676E95;">#   never\uFF1A\u4E0D\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8BC1\u4E66</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name openldap osixia/openldap:1.5.0 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart=always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_ORGANISATION=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baidu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_DOMAIN=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baidu.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_ADMIN_PASSWORD=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_TLS_VERIFY_CLIENT=try \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 389:389 -p 636:636 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u9A8C\u8BC1" tabindex="-1">\u9A8C\u8BC1 <a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a></h2><p>\u670D\u52A1\u5668\u5F00\u653E\u597D\u76F8\u5E94\u7AEF\u53E3\u6216\u8BBE\u7F6E\u597D\u5B89\u5168\u7EC4\u89C4\u5219\u540E\uFF0C\u6211\u4EEC\u4F7F\u7528 Apache Directory Studio \u6765\u9A8C\u8BC1\u4E00\u4E0B\u3002</p><p><img src="`+F+'" alt="202210262026166"></p><p><img src="'+b+'" alt="202210262026266"></p><p><img src="'+_+`" alt="202210262026566"></p><h2 id="docker-compose\u811A\u672C" tabindex="-1">Docker Compose\u811A\u672C <a class="header-anchor" href="#docker-compose\u811A\u672C" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u662F\u7528\u7684 docker-compose \u6765\u5B89\u88C5\uFF0C\u4E0B\u65B9\u9644\u4E0A\u76F8\u5E94 docker-compose.yml \u811A\u672C\u5185\u5BB9\u3002</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#E06C75;">services</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">openldap</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">openldap</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">osixia/openldap:1.5.0</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">restart</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">always</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_ORGANISATION</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">baidu</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_DOMAIN</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">baidu.com</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_ADMIN_PASSWORD</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">123456</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_TLS_VERIFY_CLIENT</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">try</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">ports</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">389:389</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">636:636</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">openldap</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openldap</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">osixia/openldap:1.5.0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_ORGANISATION</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">baidu</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_DOMAIN</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">baidu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_ADMIN_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_TLS_VERIFY_CLIENT</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">try</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">389:389</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">636:636</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u7F16\u5199\u597D docker-compose.yml \u811A\u672C\u540E\uFF0C\u5728\u811A\u672C\u540C\u7EA7\u76EE\u5F55\u6267\u884C\u4E0B\u65B9\u547D\u4EE4\u5373\u53EF\u3002</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">docker-compose up -d</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,20);function h(s,g,L,I,P,N){const c=t,r=B("ClientOnly");return o(),d("div",null,[k,y(r,null,{default:A(()=>{var n,a,l,p;return[((a=(n=s.$frontmatter)==null?void 0:n.aside)!=null?a:!0)&&((p=(l=s.$frontmatter)==null?void 0:l.showArticleMetadata)!=null?p:!0)?(o(),m(c,{key:0,article:s.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),E])}const f=i(v,[["render",h]]);export{T as __pageData,f as default};
