(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[830],{3648:(e,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>r});const r={key:"v-6c585e7e",path:"/02-after-install.html",title:"Quick start",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Tree-sitter",slug:"tree-sitter",children:[]},{level:2,title:"Language Server",slug:"language-server",children:[]},{level:2,title:"Language Server Configuration",slug:"language-server-configuration",children:[]},{level:2,title:"Nerd Fonts",slug:"nerd-fonts",children:[]}],filePathRelative:"02-after-install.md",git:{updatedTime:1627570411e3,contributors:[]}}},2776:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>L});var r=n(6252);const t=(0,r.uE)('<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h1><p>After installing you should be able to start LunarVim with the <code>lvim</code> command</p><p><strong>NOTE:</strong> <code>&lt;TAB&gt;</code> indicates that you should press the <code>&lt;TAB&gt;</code> key and cycle through your options</p><h2 id="tree-sitter" tabindex="-1"><a class="header-anchor" href="#tree-sitter" aria-hidden="true">#</a> Tree-sitter</h2><p>To install syntax highlighting and treesitter support for your language:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),s=(0,r.Uk)("Not all languages are supported. For a list of supported languages "),o={href:"https://github.com/nvim-treesitter/nvim-treesitter#supported-languages",target:"_blank",rel:"noopener noreferrer"},l=(0,r.Uk)("look here"),i=(0,r.uE)('<h2 id="language-server" tabindex="-1"><a class="header-anchor" href="#language-server" aria-hidden="true">#</a> Language Server</h2><p>To install a Language Server for your language:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),u=(0,r.Uk)("Sometimes the language server for your language will not have an obvious name. For instance, the language server for ruby is solargraph. Metals is the language server for scala, etc. To find the corresponding language server for your language "),g={href:"https://github.com/kabouzeid/nvim-lspinstall",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("look here"),c=(0,r.uE)('<h2 id="language-server-configuration" tabindex="-1"><a class="header-anchor" href="#language-server-configuration" aria-hidden="true">#</a> Language Server Configuration</h2><p>To create a configuration file for your language server:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>NlspSettings <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>\n<span class="token punctuation">:</span>NlspSettings <span class="token operator">&lt;</span>NAME_OF_LANGUAGE_SERVER<span class="token operator">&gt;</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>NOTE:</strong> This will create a directory in <code>~/.config/lvim/lsp-settings</code> where you will be able to configure your language server.</p>',4),d=(0,r.Uk)("Make sure to install "),h=(0,r.Wm)("code",null,"jsonls",-1),m=(0,r.Uk)(" for autocompletion. Not all language servers are supported. For a list of supported language servers "),v={href:"https://github.com/tamago324/nlsp-settings.nvim/blob/main/schemas/README.md",target:"_blank",rel:"noopener noreferrer"},f=(0,r.Uk)("look here"),k=(0,r.Wm)("h2",{id:"nerd-fonts",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#nerd-fonts","aria-hidden":"true"},"#"),(0,r.Uk)(" Nerd Fonts")],-1),b=(0,r.Uk)("Installing a "),y={href:"https://www.nerdfonts.com/",target:"_blank",rel:"noopener noreferrer"},T=(0,r.Uk)("nerd font"),W=(0,r.Uk)(" is recommended. Otherwise some symbols won't be rendered properly. For more information go to the "),U=(0,r.Uk)(" configuration section "),w=(0,r.Uk)("."),L={render:function(e,a){const n=(0,r.up)("OutboundLink"),L=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[t,(0,r.Wm)("p",null,[s,(0,r.Wm)("a",o,[l,(0,r.Wm)(n)])]),i,(0,r.Wm)("p",null,[u,(0,r.Wm)("a",g,[p,(0,r.Wm)(n)])]),c,(0,r.Wm)("p",null,[d,h,m,(0,r.Wm)("a",v,[f,(0,r.Wm)(n)])]),k,(0,r.Wm)("p",null,[b,(0,r.Wm)("a",y,[T,(0,r.Wm)(n)]),W,(0,r.Wm)(L,{to:"/configuration/nerd-fonts.html#nerd-fonts"},{default:(0,r.w5)((()=>[U])),_:1}),w])],64)}}}}]);