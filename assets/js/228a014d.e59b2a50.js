"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["35611"],{36287:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>f,assets:()=>u,toc:()=>h,frontMatter:()=>c});var r=JSON.parse('{"id":"api/plugins/plugin-client-redirects","title":"\uD83D\uDCE6 plugin-client-redirects","description":"Docusaurus Plugin to generate client-side redirects.","source":"@site/docs/api/plugins/plugin-client-redirects.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-client-redirects","permalink":"/docs/api/plugins/@docusaurus/plugin-client-redirects","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-client-redirects.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1730719870000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"slug":"/api/plugins/@docusaurus/plugin-client-redirects"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-content-pages","permalink":"/docs/api/plugins/@docusaurus/plugin-content-pages"},"next":{"title":"\uD83D\uDCE6 plugin-debug","permalink":"/docs/api/plugins/@docusaurus/plugin-debug"}}'),i=n("24246"),s=n("80980"),l=n("15398"),a=n("58636"),o=n("32240");let c={sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},d="\uD83D\uDCE6 plugin-client-redirects",u={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>RedirectRule</code>",id:"RedirectRule",level:4},{value:"<code>CreateRedirectsFn</code>",id:"CreateRedirectsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"-plugin-client-redirects",children:"\uD83D\uDCE6 plugin-client-redirects"})}),"\n","\n",(0,i.jsxs)(t.p,{children:["Docusaurus Plugin to generate ",(0,i.jsx)(t.strong,{children:"client-side redirects"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript."}),"\n",(0,i.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,i.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,i.jsx)(t.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsx)(t.p,{children:"It is better to use server-side redirects whenever possible."}),(0,i.jsx)(t.p,{children:"Before using this plugin, you should look if your hosting provider doesn't offer this feature."})]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(a.Z,{value:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-client-redirects\n"})})}),(0,i.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-client-redirects\n"})})}),(0,i.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-client-redirects\n"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,i.jsx)(o.Z,{children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"fromExtensions"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string[]"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{children:"The extensions to be removed from the route after redirecting."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"toExtensions"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string[]"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{children:"The extensions to be appended to the route after redirecting."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"redirects"})}),(0,i.jsx)(t.td,{children:(0,i.jsxs)("code",{children:[(0,i.jsx)(t.a,{href:"#RedirectRule",children:"RedirectRule"}),"[]"]})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{children:"The list of redirect rules."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"createRedirects"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:(0,i.jsx)(t.a,{href:"#CreateRedirectsFn",children:"CreateRedirectsFn"})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"undefined"})}),(0,i.jsx)(t.td,{children:"A callback to create a redirect rule. Docusaurus query this callback against every path it has created, and use its return value to output more paths."})]})]})]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This plugin will also read the ",(0,i.jsx)(t.a,{href:"/docs/api/docusaurus-config#onDuplicateRoutes",children:(0,i.jsx)(t.code,{children:"siteConfig.onDuplicateRoutes"})})," config to adjust its logging level when multiple files will be emitted to the same location."]})}),"\n",(0,i.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,i.jsx)(t.h4,{id:"RedirectRule",children:(0,i.jsx)(t.code,{children:"RedirectRule"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"type RedirectRule = {\n  to: string;\n  from: string | string[];\n};\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:['The idea of "from" and "to" is central in this plugin. "From" means a path that you want to ',(0,i.jsx)(t.em,{children:"create"}),', i.e. an extra HTML file that will be written; "to" means a path to want to redirect ',(0,i.jsx)(t.em,{children:"to"}),", usually a route that Docusaurus already knows about."]}),(0,i.jsx)(t.p,{children:'This is why you can have multiple "from" for the same "to": we will create multiple HTML files that all redirect to the same destination. On the other hand, one "from" can never have more than one "to": the written HTML file needs to have a determinate destination.'})]}),"\n",(0,i.jsx)(t.h4,{id:"CreateRedirectsFn",children:(0,i.jsx)(t.code,{children:"CreateRedirectsFn"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'// The parameter `path` is a route that Docusaurus has already created. It can\n// be seen as the "to", and your return value is the "from". Returning a falsy\n// value will not create any redirect pages for this particular path.\ntype CreateRedirectsFn = (path: string) => string[] | string | null | undefined;\n'})}),"\n",(0,i.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,i.jsx)(t.p,{children:"Here's an example configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      // highlight-start\n      {\n        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage\n        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)\n        redirects: [\n          // /docs/oldDoc -> /docs/newDoc\n          {\n            to: '/docs/newDoc',\n            from: '/docs/oldDoc',\n          },\n          // Redirect from multiple old paths to the new path\n          {\n            to: '/docs/newDoc2',\n            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],\n          },\n        ],\n        createRedirects(existingPath) {\n          if (existingPath.includes('/community')) {\n            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X\n            return [\n              existingPath.replace('/community', '/docs/team'),\n              existingPath.replace('/community', '/docs/support'),\n            ];\n          }\n          return undefined; // Return a falsy value: no redirect created\n        },\n      },\n      // highlight-end\n    ],\n  ],\n};\n"})})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},58636:function(e,t,n){n.d(t,{Z:()=>l});var r=n("24246");n("27378");var i=n("90496");let s="tabItem_pnkT";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s,l),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>v});var r=n("24246"),i=n("27378"),s=n("90496"),l=n("54947"),a=n("3620"),o=n("844"),c=n("97486"),d=n("32263"),u=n("16971");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("71607");let m="tabList_Qoir",g="tabItem_AQgk";function x(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==i&&(d(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...l,className:(0,s.Z)("tabs__item",g,l?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,s=function(e){let{values:t,children:n}=e;return(0,i.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,f]=(0,i.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:s})),[m,g]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,c._X)(s);return[l,(0,i.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})},[s,r])]}({queryString:n,groupId:r}),[x,j]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[s,l]=(0,u.Nk)(r);return[s,(0,i.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),b=(()=>{let e=m??x;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{b&&f(b)},[b]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),j(e)},[g,j,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",m),children:[(0,r.jsx)(x,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function v(e){let t=(0,f.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(t))}},32240:function(e,t,n){n.d(t,{Z:()=>c});var r=n("24246"),i=n("27378"),s=n("96700"),l=n("3620");let a="apiTable_e8hp",o=i.forwardRef(function(e,t){let{name:n,children:a}=e,o=function(e){let t=e;for(;(0,i.isValidElement)(t);)[t]=i.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(a),c=n?`${n}-${o}`:o,d=`#${c}`,u=(0,l.k6)();return(0,s.Z)().collectAnchor(c),(0,r.jsx)("tr",{id:c,tabIndex:0,ref:u.location.hash===d?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&u.push(d)},onKeyDown:e=>{"Enter"===e.key&&u.push(d)},children:a.props.children})});function c(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[s,l]=i.Children.toArray(t.props.children),c=(0,i.useRef)(null);(0,i.useEffect)(()=>{c.current?.focus()},[c]);let d=i.Children.map(l.props.children,e=>(0,r.jsx)(o,{name:n,ref:c,children:e}));return(0,r.jsxs)("table",{className:a,children:[s,(0,r.jsx)("tbody",{children:d})]})}},80980:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(27378);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);