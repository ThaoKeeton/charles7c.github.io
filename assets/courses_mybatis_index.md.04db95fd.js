import{_ as n,c as l,a as p,b as s,d as o,e,o as r,r as t}from"./app.5a747095.js";var B="/assets/202111232219533.37056da1.png",c="/assets/202111232221059.5cbc2af9.png",y="/assets/202111232221734.786f2fa4.png";const h=JSON.parse('{"title":"MyBatis\u5FEB\u901F\u5165\u95E8","description":"","frontmatter":{"editLink":false,"lastUpdated":false,"aside":false},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"\u7279\u70B9","slug":"\u7279\u70B9"},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E"}],"relativePath":"courses/mybatis/index.md","lastUpdated":1658673321000}'),i={name:"courses/mybatis/index.md"},F=s("h1",{id:"mybatis\u5FEB\u901F\u5165\u95E8",tabindex:"-1"},[o("MyBatis\u5FEB\u901F\u5165\u95E8 "),s("a",{class:"header-anchor",href:"#mybatis\u5FEB\u901F\u5165\u95E8","aria-hidden":"true"},"#")],-1),A=e(`<h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p><strong>C\uFF1A</strong> \u5728 Java Web \u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u901A\u5E38\u5C06\u540E\u53F0\u5F00\u53D1\u62C6\u5206\u4E3A\u4E09\u5C42\u67B6\u6784\uFF0C\u5206\u522B\u662F\uFF1A\u8868\u73B0\u5C42\u3001\u4E1A\u52A1\u5C42\u3001\u6301\u4E45\u5C42\u3002</p><p>\u5728\u6301\u4E45\u5C42\u4E2D\uFF0C\u6700\u5F00\u59CB\u6211\u4EEC\u4F7F\u7528\u539F\u751F JDBC \u6765\u8FDB\u884C\u6570\u636E\u5E93\u7684 CRUD\uFF0C\u4EE3\u7801\u7E41\u7410\u7684\u4EE4\u4EBA\u6293\u72C2\u3002\u540E\u6765\u968F\u7740\u5B66\u4E60\u6DF1\u5165\uFF0C\u6211\u4EEC\u5229\u7528 DAO (Data Access Object) \u6A21\u5F0F\u5BF9 JDBC \u8FDB\u884C\u4E86\u4E00\u5B9A\u7684\u4F18\u5316\u5C01\u88C5\u3002</p><p>\u5373\u4FBF\u5982\u6B64\uFF0C\u8FD8\u662F\u8981\u5728 Java \u4EE3\u7801\u4E2D\u7F16\u5199\u5927\u91CF\u7684 SQL \u8BED\u53E5\uFF0C\u53C2\u6570\u5224\u65AD\u7B49\uFF0C\u4E0B\u9762\u662F\u6211\u622A\u53D6\u7684\u4E00\u6BB5 DAO\u6A21\u5F0F\u5C01\u88C5\u540E\u7684\u4EE3\u7801\uFF0C\u4F60\u7B80\u5355\u611F\u53D7\u4E00\u4E0B\u3002</p><div class="language-java line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">// \u5047\u8BBEBaseDao\u5DF2\u7ECF\u5C01\u88C5\u4E86\u901A\u7528CRUD\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">UserDaoImpl</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">extends</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">BaseDao</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">implements</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">UserDao</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#7F848E;font-style:italic;">// \u6839\u636E\u6761\u4EF6\u67E5\u8BE2\u7528\u6237\u5217\u8868</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">User</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#61AFEF;"> findByMap</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Map</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;">params</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">throws</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">Exception</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// \u52A8\u6001\u62FC\u63A5SQL\u8BED\u53E5</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">StringBuffer</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sqlBuffer</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">StringBuffer</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// \u52A8\u6001\u62FC\u63A5SQL\u5360\u4F4D\u7B26\u53C2\u6570</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;">paramsList</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ArrayList</span><span style="color:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; select &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;   * &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; from &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;   user &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; where 1 = 1 &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// \u6839\u636E\u7528\u6237\u540D\u6A21\u7CCA\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">EmptyUtils</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isNotEmpty</span><span style="color:#ABB2BF;">(name)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; and name like CONCAT(&#39;%&#39;,?,&#39;%&#39;) &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">paramsList</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(name);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// \u6839\u636E\u5E74\u9F84\u67E5\u8BE2</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">Integer</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (Integer) </span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;age&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">EmptyUtils</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isNotEmpty</span><span style="color:#ABB2BF;">(age)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; and age = ? &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">paramsList</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(age);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">selectList</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">paramsList</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toArray</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">User</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#7F848E;font-style:italic;">// \u4FDD\u5B58\u7528\u6237</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">int</span><span style="color:#61AFEF;"> save</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">User</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">user</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">throws</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">Exception</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">StringBuffer</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sqlBuffer</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">StringBuffer</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; insert into user &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; 	(name, age, email) &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;  values(?, ?, ?) &quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">[] </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getName</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getAge</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getEmail</span><span style="color:#ABB2BF;">()};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">sqlBuffer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">(), params);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u6709\u95EE\u9898\u5B58\u5728\uFF0C\u5C31\u4E0D\u7F3A\u89E3\u51B3\u95EE\u9898\u7684\u4EBA\u3002\u5728\u884C\u4E1A\u5185\u968F\u4E4B\u8BDE\u751F\u4E86\u5927\u91CF\u7684\u6301\u4E45\u5C42\u89E3\u51B3\u65B9\u6848\uFF0C\u9664\u4E86\u5404\u81EA\u516C\u53F8\u81EA\u7814\u7684\u65B9\u6848\u4E4B\u5916\uFF0C\u6BD4\u8F83\u6709\u540D\u7684\u901A\u7528\u5F00\u6E90\u65B9\u6848\u6709\uFF1AHibernate\u3001MyBatis\u7B49\uFF0C\u5404\u6709\u5404\u7684\u4F18\u52A3\u52BF\uFF0C\u5728\u6B64\u6211\u5148\u4E0D\u8C08\u8BBA\u5B83\u4EEC\u7684\u533A\u522B\uFF0C\u53EA\u8BF4\u4E00\u4E2A\u73B0\u8C61\uFF1A\u5728\u56FD\u5185\u6765\u8BB2MyBatis\u5E94\u7528\u76F8\u5BF9\u5E7F\u6CDB\u3002</p><p><img src="`+B+'" alt="202111232219533"></p><p>\u6240\u4EE5\u90A3\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\u4E86\uFF0C\u76F4\u63A5\u5B66\u5427\uFF1F</p><p>\u5F00\u73A9\u7B11\u7684\uFF0C\u5176\u5B9EMyBatis\u5728\u56FD\u5185\u5E94\u7528\u5E7F\u6CDB\u7684\u539F\u56E0\u662F\u56E0\u4E3A\u76F8\u5BF9\u4E8EHibernate\u7B49\uFF0C\u5B83\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\u7684\u7F16\u5199SQL\u8BED\u53E5\uFF0C\u5BF9\u4E8E\u9700\u6C42\u53D8\u52A8\u6BD4\u8F83\u9891\u7E41\uFF0C\u4E1A\u52A1\u6BD4\u8F83\u590D\u6742\uFF0C\u9AD8\u5E76\u53D1\u8981\u6C42\u8F83\u9AD8\u7684\u5E94\u7528\uFF0C\u4F18\u52BF\u663E\u800C\u6613\u89C1\u3002\u56FD\u5185\u8FD9\u4E24\u5E74\u4E92\u8054\u7F51\u53D1\u5C55\u7684\u633A\u5FEB\uFF0C\u4E92\u8054\u7F51\u7528\u6237\u7FA4\u4F53\u57FA\u6570\u5927\uFF0C\u800C\u56FD\u5916\u4EBA\u7FA4\u89C4\u6A21\u76F8\u5BF9\u8F83\u5C11\uFF0C\u76F8\u6BD4\u4E8E\u56FD\u5185\u5F00\u53D1\u8005\uFF0C\u4ED6\u4EEC\u66F4\u5173\u6CE8\u5B9E\u73B0\u6548\u7387\u800C\u975E\u6781\u81F4\u7684\u6027\u80FD\u3002</p><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>MyBatis\u8BFB\u97F3\u662F:[mai&#39;b\u0259t\u026As]\uFF08\u4E70\u676F\u6D95\u6B7B\uFF09\uFF0C\u539F\u662F Apache \u8F6F\u4EF6\u57FA\u91D1\u4F1A\u7684\u4E00\u4E2A<a href="https://baike.baidu.com/item/%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/3406069" target="_blank" rel="noopener noreferrer">\u5F00\u6E90\u9879\u76EE</a> iBatis , 2010\u5E74\u8FD9\u4E2A\u9879\u76EE\u7531 Apache \u8F6F\u4EF6\u57FA\u91D1\u4F1A\u8FC1\u79FB\u5230\u4E86 Google Code \u5E73\u53F0\uFF0C\u5E76\u4E14\u6539\u540D\u4E3A MyBatis \u30022013\u5E7411\u6708\u518D\u8FC1\u79FB\u5230 <a href="https://baike.baidu.com/item/Github/10145341" target="_blank" rel="noopener noreferrer">GitHub</a>\u3002</p><p>MyBatis \u662F\u4E00\u6B3E\u4F18\u79C0\u7684 <strong>\u534A\u81EA\u52A8\u7684\u6301\u4E45\u5C42ORM\u6846\u67B6</strong> \uFF0C\u5B83\u652F\u6301\u81EA\u5B9A\u4E49 SQL\u3001\u5B58\u50A8\u8FC7\u7A0B\u4EE5\u53CA\u9AD8\u7EA7\u6620\u5C04\u3002MyBatis \u514D\u9664\u4E86\u51E0\u4E4E\u6240\u6709\u7684 JDBC \u4EE3\u7801\u4EE5\u53CA\u8BBE\u7F6E\u53C2\u6570\u548C\u83B7\u53D6\u7ED3\u679C\u96C6\u7684\u5DE5\u4F5C\u3002MyBatis \u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684 XML \u6216\u6CE8\u89E3\u6765\u914D\u7F6E\u548C\u6620\u5C04\u539F\u59CB\u7C7B\u578B\u3001\u63A5\u53E3\u548C Java POJO\uFF08Plain Old Java Objects\uFF0C\u666E\u901A\u8001\u5F0F Java \u5BF9\u8C61\uFF09\u4E3A\u6570\u636E\u5E93\u4E2D\u7684\u8BB0\u5F55\u3002</p><p>\u5F53\u524D\uFF0C\u6700\u65B0\u7248\u672C\u662FMyBatis 3.5.6 \uFF0C\u5176\u53D1\u5E03\u65F6\u95F4\u662F2020\u5E7410\u67086\u65E5\u3002[1] <img src="'+c+'" alt="202111232221059"></p></div><details class="details custom-block"><summary><strong>1.\u4EC0\u4E48\u662F ORM \uFF1F</strong> [2]</summary><p>ORM\uFF0C\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04\uFF08Object Relation Mapping\uFF0C\u7B80\u79F0ORM\uFF0C\u6216O/RM\uFF0C\u6216O/R Mapping\uFF09\uFF0C\u5B83\u662F\u968F\u7740\u9762\u5411\u5BF9\u8C61\u7684\u8F6F\u4EF6\u5F00\u53D1\u65B9\u6CD5\u53D1\u5C55\u800C\u4EA7\u751F\u7684\u3002</p><p>\u9762\u5411\u5BF9\u8C61\u7684\u5F00\u53D1\u65B9\u6CD5\u662F\u5F53\u4ECA\u4F01\u4E1A\u7EA7\u5E94\u7528\u5F00\u53D1\u73AF\u5883\u4E2D\u7684\u4E3B\u6D41\u5F00\u53D1\u65B9\u6CD5\uFF0C\u5173\u7CFB\u6570\u636E\u5E93\u662F\u4F01\u4E1A\u7EA7\u5E94\u7528\u73AF\u5883\u4E2D\u6C38\u4E45\u5B58\u653E\u6570\u636E\u7684\u4E3B\u6D41\u6570\u636E\u5B58\u50A8\u7CFB\u7EDF\u3002\u5BF9\u8C61\u548C\u5173\u7CFB\u6570\u636E\u662F\u4E1A\u52A1\u5B9E\u4F53\u7684\u4E24\u79CD\u8868\u73B0\u5F62\u5F0F\uFF0C\u4E1A\u52A1\u5B9E\u4F53\u5728\u5185\u5B58\u4E2D\u8868\u73B0\u4E3A\u5BF9\u8C61\uFF0C\u5728\u6570\u636E\u5E93\u4E2D\u8868\u73B0\u4E3A\u5173\u7CFB\u6570\u636E\u3002\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\u4E4B\u95F4\u5B58\u5728\u5173\u8054\u548C\u7EE7\u627F\u5173\u7CFB\uFF0C\u800C\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u5173\u7CFB\u6570\u636E\u65E0\u6CD5\u76F4\u63A5\u8868\u8FBE\u591A\u5BF9\u591A\u5173\u8054\u548C\u7EE7\u627F\u5173\u7CFB\u3002\u56E0\u6B64\uFF0C\u5BF9\u8C61-\u5173\u7CFB\u6620\u5C04( ORM )\u7CFB\u7EDF\u4E00\u822C\u4EE5\u4E2D\u95F4\u4EF6\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u4E3B\u8981\u5B9E\u73B0\u7A0B\u5E8F\u5BF9\u8C61\u5230\u5173\u7CFB\u6570\u636E\u5E93\u6570\u636E\u7684\u6620\u5C04\u3002 <img src="'+y+'" alt="202111232221734"></p><p>\u9762\u5411\u5BF9\u8C61\u662F\u4ECE\u8F6F\u4EF6\u5DE5\u7A0B\u57FA\u672C\u539F\u5219(\u5982\u8026\u5408\u3001\u805A\u5408\u3001\u5C01\u88C5)\u7684\u57FA\u7840\u4E0A\u53D1\u5C55\u8D77\u6765\u7684\uFF0C\u800C\u5173\u7CFB\u6570\u636E\u5E93\u5219\u662F\u4ECE\u6570\u5B66\u7406\u8BBA\u53D1\u5C55\u800C\u6765\u7684\uFF0C\u4E24\u5957\u7406\u8BBA\u5B58\u5728\u663E\u8457\u7684\u533A\u522B\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u4E0D\u5339\u914D\u7684\u73B0\u8C61\uFF0C\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04\u6280\u672F\u5E94\u8FD0\u800C\u751F\u3002</p><p><strong>\u5B83\u53EF\u4EE5\u6709\u6548\u89E3\u51B3\u6570\u636E\u5E93\u4E0E\u7A0B\u5E8F\u95F4\u7684\u5F02\u6784\u6027\uFF0C\u5B9E\u73B0\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u8BED\u8A00\u91CC\u4E0D\u540C\u7C7B\u578B\u7CFB\u7EDF\u7684\u6570\u636E\u4E4B\u95F4\u7684\u8F6C\u6362\u3002</strong></p><p><strong>\u5927\u767D\u8BDD\uFF1A</strong> \u4E00\u4E2A\u5B8C\u6574\u7684ORM\u6846\u67B6\uFF0C\u53EF\u4EE5\u4F7F\u5F97\u6211\u4EEC\u5728\u5177\u4F53\u7684\u64CD\u4F5C\u4E1A\u52A1\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u4E0D\u9700\u8981\u518D\u53BB\u548C\u590D\u6742\u7684SQL\u8BED\u53E5\u4E4B\u6D41\u6253\u4EA4\u9053\uFF0C\u53EA\u9700\u7B80\u5355\u7684\u64CD\u4F5C\u5BF9\u8C61\u7684\u5C5E\u6027\u5373\u53EF\u3002\u4F8B\u5982\uFF1A\u5728\u6307\u5B9A\u597D\u5BF9\u8C61\u548C\u6570\u636E\u5E93\u6620\u5C04\u4E4B\u540E\uFF0C\u8981\u4FDD\u5B58\u4E00\u4E2A\u7528\u6237\u6570\u636E\uFF0C\u53EA\u9700\u8981\u521B\u5EFA\u597D\u7528\u6237\u5BF9\u8C61\uFF0C\u7136\u540E\u8C03\u7528ORM\u89E3\u51B3\u65B9\u6848\uFF0C\u5C31\u4F1A\u81EA\u52A8\u5C06\u5BF9\u8C61\u6570\u636E\u6301\u4E45\u5316\u5230\u6570\u636E\u5E93\u4E2D\u3002\uFF08\u65E0\u9700\u5173\u5FC3SQL\uFF0CORM\u81EA\u52A8\u751F\u6210SQL\uFF09 \uFF1B\u8981\u66F4\u65B0\u4E00\u4E2A\u7528\u6237\u4FE1\u606F\uFF0C\u53EA\u9700\u8981\u5728\u7A0B\u5E8F\u4E2D\u5BF9\u8BE5\u7528\u6237\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u66F4\u65B0\uFF0CORM\u89E3\u51B3\u65B9\u6848\u5C31\u4F1A\u81EA\u52A8\u5C06\u66F4\u6539\u540E\u7684\u7ED3\u679C\u6301\u4E45\u5316\u5230\u6570\u636E\u5E93\u4E2D\u3002</p></details><details class="details custom-block"><summary><strong>2.\u4E3A\u4EC0\u4E48\u8BF4 MyBatis \u662F\u534A\u81EA\u52A8 ORM \uFF1F</strong> [2]</summary><p>Mybatis \u5728\u67E5\u8BE2\u5173\u8054\u5BF9\u8C61\u6216\u5173\u8054\u96C6\u5408\u5BF9\u8C61\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u7F16\u5199 SQL \u6765\u5B8C\u6210\uFF0C\u6240\u4EE5\u79F0\u4E4B\u4E3A\u534A\u81EA\u52A8 ORM \u6620\u5C04\u5DE5\u5177\u3002\u4E5F\u53EF\u4EE5\u8BF4 MyBatis \u662F\u4E00\u4E2A\u4E1A\u52A1\u5B9E\u4F53\u5BF9\u8C61\u548C SQL \u4E4B\u95F4\u7684\u6620\u5C04\u5DE5\u5177\u3002</p></details><h2 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h2><p><strong>C\uFF1A</strong> \u7B14\u8005\u5176\u5B9E\u4E0D\u613F\u610F\u5148\u7ED9\u4F60\u4ECB\u7ECD\u4E00\u4E2A\u6280\u672F\u7684\u7279\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u7528\u8FC7\uFF0C\u5149\u9760\u8BF4\u662F\u4E0D\u884C\u7684\u3002\u53EA\u6709\u5728\u6211\u4EEC\u5B9E\u9645\u4F53\u9A8C\u4E4B\u540E\uFF0C\u5B83\u7684\u4F18\u7F3A\u70B9\u624D\u53EF\u4EE5\u611F\u53D7\u5230\u4E86\uFF0C\u4E0D\u8FC7\u63D0\u524D\u5148\u4E86\u89E3\u4E00\u4E0B\uFF0C\u4E5F\u66F4\u6709\u5B66\u4E60\u52A8\u529B\uFF0C\u5343\u4E07\u8BB0\u5F97\u5B66\u4E60\u7684\u8FC7\u7A0B\u4E2D\u53CA\u65F6\u601D\u8003\u548C\u7406\u89E3\u8FD9\u4E9B\u7279\u70B9\u3002</p><p><strong>\u4F18\u52BF\uFF1A</strong></p><ul><li><strong>\u7B80\u5355\u6613\u5B66\uFF1A</strong> \u6846\u67B6\u89C4\u6A21\u5C0F\uFF0C\u5B66\u4E60\u95E8\u69DB\u4F4E\uFF08\u5B98\u65B9\u6587\u6863\u7B80\u5355\u8BE6\u7EC6\uFF09\uFF0C\u4E0E JDBC \u76F8\u6BD4\uFF0C\u51CF\u5C11\u4E8650%\u4EE5\u4E0A\u7684\u4EE3\u7801\u91CF\uFF0C\u6D88\u9664\u4E86 JDBC \u5927\u91CF\u5197\u4F59\u7684\u4EE3\u7801\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u5F00\u5173\u8FDE\u63A5\u3002</li><li><strong>\u7075\u6D3B\u5EA6\u9AD8\uFF1A</strong> \u534A\u81EA\u52A8\u5316 ORM\uFF0C\u7A0B\u5E8F\u5458\u76F4\u63A5\u7F16\u5199\u539F\u751F\u6001 SQL \uFF0C\u53EF\u4E25\u683C\u63A7\u5236 SQL \u6267\u884C\u6027\u80FD\uFF0C\u7075\u6D3B\u5EA6\u9AD8\uFF0C\u975E\u5E38\u9002\u5408\u5BF9\u5173\u7CFB\u6570\u636E\u6A21\u578B\u8981\u6C42\u4E0D\u9AD8\u7684\u8F6F\u4EF6\u5F00\u53D1\uFF0C\u4F8B\u5982\uFF1A\u4E92\u8054\u7F51\u8F6F\u4EF6\u3001\u4F01\u4E1A\u8FD0\u8425\u7C7B\u8F6F\u4EF6\u7B49\uFF0C\u56E0\u4E3A\u8FD9\u7C7B\u8F6F\u4EF6\u9700\u6C42\u53D8\u5316\u9891\u7E41\uFF0C\u4E00\u4F46\u9700\u6C42\u53D8\u5316\u8981\u6C42\u6210\u679C\u8F93\u51FA\u8FC5\u901F\u3002</li><li><strong>\u89E3\u9664 SQL \u4E0E\u7A0B\u5E8F\u4EE3\u7801\u7684\u8026\u5408\uFF1A</strong> SQL \u4EE3\u7801\u4ECE\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u5F7B\u5E95\u5206\u79BB\uFF0C\u5199\u5728XML\u91CC\uFF0C\u53EF\u91CD\u7528\u3002</li><li><strong>\u63D0\u4F9B\u6620\u5C04\u6807\u7B7E\uFF0C\u652F\u6301\u5BF9\u8C61\u4E0E\u6570\u636E\u5E93\u7684 ORM \u5B57\u6BB5\u6620\u5C04</strong></li><li><strong>\u63D0\u4F9B XML \u6807\u7B7E\uFF0C\u652F\u6301\u7F16\u5199\u52A8\u6001 SQL \uFF1A</strong> \u5728\u4F7F\u7528 JDBC \u7684\u8FC7\u7A0B\u4E2D\uFF0C \u6839\u636E\u6761\u4EF6\u8FDB\u884C SQL \u7684\u62FC\u63A5\u662F\u5F88\u9EBB\u70E6\u4E14\u5F88\u5BB9\u6613\u51FA\u9519\u7684\u3002 MyBatis \u52A8\u6001 SQL \u7684\u51FA\u73B0\uFF0C \u89E3\u51B3\u4E86\u8FD9\u4E2A\u9EBB\u70E6\u3002</li></ul><p><strong>\u52A3\u52BF\uFF1A</strong></p><ul><li><strong>SQL\u8BED\u53E5\u7684\u7F16\u5199\u5DE5\u4F5C\u91CF\u8F83\u5927</strong>\uFF1A\u5C24\u5176\u5F53\u5B57\u6BB5\u591A\uFF0C\u5173\u8054\u8868\u591A\u65F6\uFF0C\u5BF9\u5F00\u53D1\u4EBA\u5458\u7F16\u5199SQL\u8BED\u53E5\u7684\u529F\u5E95\u6709\u4E00\u5B9A\u8981\u6C42\u3002</li><li><strong>\u6570\u636E\u5E93\u65E0\u5173\u6027\u3001\u79FB\u690D\u6027\u5DEE\uFF1A</strong> SQL\u8BED\u53E5\u4F9D\u8D56\u6570\u636E\u5E93\uFF0C\u5BFC\u81F4\u6570\u636E\u5E93\u79FB\u690D\u6027\u5DEE\uFF0C\u4E0D\u80FD\u968F\u610F\u66F4\u6362\u6570\u636E\u5E93\u3002[3]</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><p>[1]MyBatis \u5B98\u7F51. MyBatis \u7B80\u4ECB[EB/OL]. <a href="https://mybatis.org/mybatis-3/zh/index.html" target="_blank" rel="noopener noreferrer">https://mybatis.org/mybatis-3/zh/index.html</a>. 2020-12-25</p><p>[2]laouei. \u7406\u89E3 ORM \u548C\u6570\u636E\u6301\u4E45\u5316[EB/OL]. <a href="https://blog.csdn.net/u012585964/article/details/52412520" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/u012585964/article/details/52412520</a>. 2016-09-02</p><p>[3]W3CSchool. MyBatis \u6559\u7A0B[EB/OL]. <a href="https://www.w3cschool.cn/mybatis/" target="_blank" rel="noopener noreferrer">https://www.w3cschool.cn/mybatis/</a>. 2020-12-25</p>',23);function b(u,E,m,C,d,g){const a=t("ArticleMetadata");return r(),l("div",null,[F,p(a),A])}var D=n(i,[["render",b]]);export{h as __pageData,D as default};
