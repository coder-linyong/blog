import{_ as s,o as a,c as l,M as n}from"./chunks/framework.df29e205.js";const o="/blog/assets/img1.8c2e62b3.png",e="/blog/assets/img2.7ba06b23.png",p="/blog/assets/img.34c566c7.png",t="/blog/assets/img_1.85f9087f.png",u=JSON.parse('{"title":"学习笔记","description":"","frontmatter":{},"headers":[],"relativePath":"大前端/electron/01.electron学习笔记.md","lastUpdated":1701184317000}'),r={name:"大前端/electron/01.electron学习笔记.md"},c=n('<h1 id="学习笔记" tabindex="-1">学习笔记 <a class="header-anchor" href="#学习笔记" aria-label="Permalink to &quot;学习笔记&quot;">​</a></h1><h2 id="架构原理" tabindex="-1">架构原理 <a class="header-anchor" href="#架构原理" aria-label="Permalink to &quot;架构原理&quot;">​</a></h2><h3 id="chromium架构" tabindex="-1">chromium架构 <a class="header-anchor" href="#chromium架构" aria-label="Permalink to &quot;chromium架构&quot;">​</a></h3><p><img src="'+o+'" alt="chromium架构图"> 一个浏览器中会有如下进程：</p><ul><li>一个browser进程（主进程）</li><li>多个render进程（渲染进程）</li></ul><p><strong>通信</strong>：进程间通过IPC通信进行通信，<code>RenderProcessHost</code>和<code>RenderProcess</code>专门用于处理IPC事件</p><p><strong>ResourceDispatcher</strong>：对资源请求进行处理</p><h3 id="electron架构" tabindex="-1">electron架构 <a class="header-anchor" href="#electron架构" aria-label="Permalink to &quot;electron架构&quot;">​</a></h3><p><img src="'+e+'" alt="electron架构图"></p><h4 id="主进程" tabindex="-1">主进程 <a class="header-anchor" href="#主进程" aria-label="Permalink to &quot;主进程&quot;">​</a></h4><ul><li>Electron运行<code>package.json</code>的main脚本的进程被称为主进程</li><li>每个应用只有一个主进程</li><li>管理原生 GUI，典型的窗口 (BrowserWindow、Tray、Dock、Menu)</li><li>创建渲染进程</li><li>控制应用生命周期 (app)</li></ul><h4 id="渲染进程" tabindex="-1">渲染进程 <a class="header-anchor" href="#渲染进程" aria-label="Permalink to &quot;渲染进程&quot;">​</a></h4><ul><li>展示 Web 页面的进程称为渲染进程</li><li>通过 <code>Node.js</code>、<code>Electron</code> 提供的 API可以跟系统底层打交道</li><li>一个 Electron 应用可以有多个渲染进程</li></ul><h3 id="node-js与chromiums事件融合" tabindex="-1">Node.js与Chromiums事件融合 <a class="header-anchor" href="#node-js与chromiums事件融合" aria-label="Permalink to &quot;Node.js与Chromiums事件融合&quot;">​</a></h3><p>Node.js事件循环基于<code>libuv</code>，<code>libuv</code>引入了<code>backend_fd</code>概念——<code>libuv</code>轮询事件的文件描述符；通过轮询<code>backend_fd</code>可以知道libuv`的新事件。</p><p>Electron创建一个新的安全线程轮询<code>backend_fd</code>，Node.js有新事件之后通过<code>PostTask</code>转发到chromium的事件循环中：</p><p><img src="'+p+'" alt="事件融合"></p><h2 id="桌面端技术对比" tabindex="-1">桌面端技术对比 <a class="header-anchor" href="#桌面端技术对比" aria-label="Permalink to &quot;桌面端技术对比&quot;">​</a></h2><ul><li>Native(C++/C#/0bjective-C) <ul><li>高性能</li><li>原生体验</li><li>包体积小</li><li>门槛高</li><li>迭代速度慢</li></ul></li><li>QT <ul><li>基于C++</li><li>跨平台(Mac、Windows、ios、Android、Linux、嵌入式)</li><li>高性能</li><li>媲美原生的体验</li><li>门槛高</li><li>迭代速度一般</li></ul></li><li>Fluter <ul><li>跨端(ios、Android、Mac、Windows、Linux、Web)</li><li>PC 端在发展中 (Mac &gt; Linux、Windows)</li><li>基建少</li></ul></li><li>NW.js <ul><li>跨平台 (Mac、Windows、Linux)，v0.14.7支持XP(XP 市场份额约为15%)</li><li>迭代快，Web 技术构建</li><li>源码加密、支持 Chrome 扩展</li><li>不错的社区</li><li>包体积大</li><li>性能一般</li></ul></li><li>Electron <ul><li>跨平台 (Mac、Windows、Linux、不支持 XP)</li><li>Web 技术构建</li><li>活跃的社区</li><li>大型应用案例</li><li>包体积大</li><li>性能一般 <img src="'+t+`" alt="对比图"></li></ul></li></ul><h2 id="ipc模块通信" tabindex="-1">IPC模块通信 <a class="header-anchor" href="#ipc模块通信" aria-label="Permalink to &quot;IPC模块通信&quot;">​</a></h2><p>Electron 提供了IPC通信模块，主进程的<a href="https://www.electronjs.org/zh/docs/latest/api/ipc-main#%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">ipcMain</a>和渲染进程的<a href="https://www.electronjs.org/zh/docs/latest/api/ipc-renderer" target="_blank" rel="noreferrer">ipcRenderer</a></p><p>ipcMain、ipcRenderer 都是 <a href="https://nodejs.org/api/events.html#events_class_eventemitter" target="_blank" rel="noreferrer">EventEmitter</a> 对象</p><h3 id="渲染进程到主进程通信" tabindex="-1">渲染进程到主进程通信 <a class="header-anchor" href="#渲染进程到主进程通信" aria-label="Permalink to &quot;渲染进程到主进程通信&quot;">​</a></h3><p>callback写法：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在渲染进程中</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> ipcRenderer </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">ipcRenderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello from Renderer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 在主进程中</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> ipcMain </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">ipcMain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">event</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 输出: Hello from Renderer</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Promise写法（适用于等待主进程处理结果，最好定义超时限制避免卡死）：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//主进程</span></span>
<span class="line"><span style="color:#BABED8;">ipcMain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">handle</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">invoke-example</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">event</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 打印来自渲染进程的参数</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello from Main Process</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 返回结果给渲染进程</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//渲染进程</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> ipcRenderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">invoke-example</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello from Renderer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(result)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 打印来自主进程的结果</span></span></code></pre></div><h3 id="主进程到渲染进程通信" tabindex="-1">主进程到渲染进程通信 <a class="header-anchor" href="#主进程到渲染进程通信" aria-label="Permalink to &quot;主进程到渲染进程通信&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 主进程</span></span>
<span class="line"><span style="color:#BABED8;">mainWindow</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">webContents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message-from-main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello from Main Process</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 渲染进程监听主进程发来的消息</span></span>
<span class="line"><span style="color:#BABED8;">ipcRenderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message-from-main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">event</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 打印来自主进程的消息</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="渲染进程间的通信" tabindex="-1">渲染进程间的通信 <a class="header-anchor" href="#渲染进程间的通信" aria-label="Permalink to &quot;渲染进程间的通信&quot;">​</a></h3><ul><li>通知事件：<a href="https://www.electronjs.org/zh/docs/latest/api/ipc-renderer#ipcrenderersendtowebcontentsid-channel-args-%E5%B7%B2%E5%BA%9F%E5%BC%83" target="_blank" rel="noreferrer">ipcRender.sendTo</a></li><li>数据共享：通过web技术如localStorage、sessionStorage、indexDB等</li></ul>`,31),i=[c];function D(y,F,d,B,E,A){return a(),l("div",null,i)}const m=s(r,[["render",D]]);export{u as __pageData,m as default};
