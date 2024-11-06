"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["23265"],{14150:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},41550:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},35122:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return t},toc:function(){return h}});var t=s(28878),r=s(24246),a=s(80980),i=s(14522),o=s(15398),l=s(58636);let u={title:"Docusaurus 2.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2023-01-27T00:00:00.000Z")},c=void 0,d={image:s(14150).Z,authorsImageUrls:[void 0]},h=[{value:"Highlights",id:"highlights",level:2},{value:"Google Tag Manager plugin",id:"google-tag-manager-plugin",level:3},{value:"Tabs Query String Support",id:"tabs-query-string-support",level:3},{value:"Nested admonitions",id:"nested-admonitions",level:3},{value:"Blog <code>createFeedItems</code>",id:"blog-createfeeditems",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function g(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["We are happy to announce ",(0,r.jsx)(n.strong,{children:"Docusaurus 2.3"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The upgrade should be easy: as explained in our ",(0,r.jsx)(n.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,r.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Docusaurus 2.2 social card",src:s(41550).Z+"",width:"1200",height:"600"})}),"\n",(0,r.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(n.h3,{id:"google-tag-manager-plugin",children:"Google Tag Manager plugin"}),"\n",(0,r.jsx)(n.p,{children:"Google Tag Manager is a tag management system that allows great flexibility. It enables analytics and marketing teams to easily load other third-party trackers and fire analytics tags."}),"\n",(0,r.jsxs)(n.p,{children:["We now have a ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:(0,r.jsx)(n.code,{children:"@docusaurus/plugin-google-tag-manager"})})," package that you can use alongside or as an alternative to the existing ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"})," (refer to ",(0,r.jsx)(n.a,{href:"https://support.google.com/tagmanager/answer/7582054",children:"this doc"})," to understand when to use which solution)."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Google is sunsetting Universal Analytics",type:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"Google will sunset its Universal Analytics"})," on ",(0,r.jsx)(n.strong,{children:"July 1, 2023"}),", and ask users to migrate to ",(0,r.jsx)(n.strong,{children:"Google Analytics 4"}),"."]}),(0,r.jsxs)(n.p,{children:["Therefore, we are also ",(0,r.jsxs)(n.strong,{children:["deprecating our existing ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-analytics",children:(0,r.jsx)(n.code,{children:"@docusaurus/plugin-google-analytics"})})]})," package. Docusaurus users should create a new Google Analytics 4 property, and migrate to the ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"}),", or the ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:"Google Tag Manager plugin"}),". Refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"dedicated Docusaurus issue"})," for details and questions."]})]}),"\n",(0,r.jsx)(n.h3,{id:"tabs-query-string-support",children:"Tabs Query String Support"}),"\n",(0,r.jsxs)(n.p,{children:["It is now possible to link a selected tab to a query string parameter. When a tab is selected, it will be stored in your browser URL as a ",(0,r.jsx)(n.code,{children:"?qs-param=tab-value"})," search parameter."]}),"\n",(0,r.jsx)(n.p,{children:"This feature allows deep-linking to a specific documentation tab that will pre-selected on page load."}),"\n",(0,r.jsxs)(n.p,{children:["When used alongside the ",(0,r.jsx)(n.code,{children:"groupId"})," prop, the query string tab value takes precedence over the ",(0,r.jsx)(n.code,{children:"localStorage"})," value."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure to check the ",(0,r.jsx)(n.a,{href:"/docs/markdown-features/tabs#query-string",children:"documentation"})," and the demo below to understand how it works:"]}),"\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsxs)(o.Z,{groupId:"current-os",queryString:!0,children:[(0,r.jsx)(l.Z,{value:"android",label:"Android",children:(0,r.jsx)(n.p,{children:"Android"})}),(0,r.jsx)(l.Z,{value:"ios",label:"iOS",children:(0,r.jsx)(n.p,{children:"iOS"})})]})}),"\n",(0,r.jsx)(n.h3,{id:"nested-admonitions",children:"Nested admonitions"}),"\n",(0,r.jsx)(n.p,{children:"It is now possible to nest one admonition within another by adding extra colons for the outer/enclosing admonition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"::::tip[nested admonitions]\n\nYou can now nest one admonition within another!\n\n:::danger\n\nUse this sparingly when it makes sense.\n\n:::\n\n::::\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"nested admonitions",type:"tip",children:[(0,r.jsx)(n.p,{children:"You can now nest one admonition within another!"}),(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Use this sparingly when it makes sense."})})]}),"\n",(0,r.jsxs)(n.h3,{id:"blog-createfeeditems",children:["Blog ",(0,r.jsx)(n.code,{children:"createFeedItems"})]}),"\n",(0,r.jsxs)(n.p,{children:["A new blog plugin option ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog/#CreateFeedItemsFn",children:(0,r.jsx)(n.code,{children:"feedOptions.createFeedItems"})})," gives you more control over the RSS/Atom feed generation. It is now possible to transform/filter/limit feed items through a new callback."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="docusaurus.config.js"',children:"[\n  '@docusaurus/preset-classic',\n  {\n    blog: {\n      feedOptions: {\n        // highlight-start\n        createFeedItems: async (params) => {\n          const {blogPosts, defaultCreateFeedItems, ...rest} = params;\n          return defaultCreateFeedItems({\n            // keep only the 10 most recent blog posts in the feed\n            blogPosts: blogPosts.filter((item, index) => index < 10),\n            ...rest,\n          });\n        },\n        // highlight-end\n      },\n    },\n  },\n];\n"})}),"\n",(0,r.jsx)(n.h3,{id:"translations",children:"Translations"}),"\n",(0,r.jsx)(n.p,{children:"We added or completed the default theme translation support for multiple languages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\uD83C\uDDF8\uD83C\uDDEE ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8541",children:"#8541"})," Slovenian"]}),"\n",(0,r.jsxs)(n.li,{children:["\uD83C\uDDF9\uD83C\uDDF7 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8289",children:"#8289"})," Turkish"]}),"\n",(0,r.jsxs)(n.li,{children:["\uD83C\uDDEE\uD83C\uDDF7 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8406",children:"#8406"})," Farsi"]}),"\n",(0,r.jsxs)(n.li,{children:["\uD83C\uDDF5\uD83C\uDDF1 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8525",children:"#8525"})," Polish"]}),"\n",(0,r.jsxs)(n.li,{children:["\uD83C\uDDE8\uD83C\uDDF3 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8423",children:"#8423"})," Chinese"]}),"\n",(0,r.jsxs)(n.li,{children:["\uD83C\uDDF8\uD83C\uDDEA ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8312",children:"#8312"})," Swedish"]}),"\n",(0,r.jsxs)(n.li,{children:["\uD83C\uDDFB\uD83C\uDDF3 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8450",children:"#8450"})," Vietnamese"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Completing theme translations is an ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(n.p,{children:"Other notable changes include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8463",children:"#8463"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8328",children:"#8328"}),": fix some annoying Docusaurus layout issues"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8539",children:"#8539"}),": Algolia plugin ",(0,r.jsx)(n.code,{children:"options.searchPagePath"})," should be correctly applied to search modal footer"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8462",children:"#8462"}),": Algolia plugin now makes it easier to transform displayed search results with custom logic"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8397",children:"#8397"}),": the ",(0,r.jsx)(n.code,{children:"deploy"})," CLI now understands git url ",(0,r.jsx)(n.code,{children:"insteadOf"})," config"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/changelog/2.3.0",children:"2.3.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},58636:function(e,n,s){s.d(n,{Z:()=>i});var t=s("24246");s("27378");var r=s("90496");let a="tabItem_pnkT";function i(e){let{children:n,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:s,children:n})}},15398:function(e,n,s){s.d(n,{Z:()=>v});var t=s("24246"),r=s("27378"),a=s("90496"),i=s("54947"),o=s("3620"),l=s("844"),u=s("97486"),c=s("32263"),d=s("16971");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var p=s("71607");let m="tabList_Qoir",f="tabItem_AQgk";function b(e){let{className:n,block:s,selectedValue:r,selectValue:o,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,s=l[u.indexOf(n)].value;s!==r&&(c(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=u.indexOf(e.currentTarget)+1;n=u[s]??u[0];break}case"ArrowLeft":{let s=u.indexOf(e.currentTarget)-1;n=u[s]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},n),children:l.map(e=>{let{value:n,label:s,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item",f,i?.className,{"tabs__item--active":r===n}),children:s??n},n)})})}function x(e){let{lazy:n,children:s,selectedValue:i}=e,o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:t}=e,a=function(e){let{values:n,children:s}=e;return(0,r.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[i,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=s.find(e=>e.default)??s[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[m,f]=function(e){let{queryString:n=!1,groupId:s}=e,t=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),i=(0,u._X)(a);return[i,(0,r.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:s,groupId:t}),[b,x]=function(e){var n;let{groupId:s}=e;let t=(n=s)?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(t);return[a,(0,r.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),j=(()=>{let e=m??b;return g({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{j&&p(j)},[j]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!g({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),x(e)},[f,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",m),children:[(0,t.jsx)(b,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,t.jsx)(j,{...e,children:h(e.children)},String(n))}},14522:function(e,n,s){s.d(n,{Z:()=>g});var t=s("24246");s("27378");var r=s("90496");let a="browserWindow_my1Q",i="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",u="dot_giz1",c="browserWindowMenuIcon_Vhuh",d="bar_rrRL",h="browserWindowBody_Idgs";function g(e){let{children:n,minHeight:s,url:g="http://localhost:3000",style:p,bodyStyle:m}=e;return(0,t.jsxs)("div",{className:a,style:{...p,minHeight:s},children:[(0,t.jsxs)("div",{className:i,children:[(0,t.jsxs)("div",{className:o,children:[(0,t.jsx)("span",{className:u,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:u,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:u,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,r.Z)(l,"text--truncate"),children:g}),(0,t.jsx)("div",{className:c,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:d}),(0,t.jsx)("span",{className:d}),(0,t.jsx)("span",{className:d})]})})]}),(0,t.jsx)("div",{className:h,style:m,children:n})]})}},80980:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(27378);let r={},a=t.createContext(r);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}},28878:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/2.3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.3/index.mdx","source":"@site/blog/releases/2.3/index.mdx","title":"Docusaurus 2.3","description":"We are happy to announce Docusaurus 2.3.","date":"2023-01-27T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":2.89,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 2.3","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2023-01-27T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1730719870000,"lastUpdatedBy":"S\xe9bastien Lorber","prevItem":{"title":"Docusaurus 2.4","permalink":"/blog/releases/2.4"},"nextItem":{"title":"Docusaurus 2.2","permalink":"/blog/releases/2.2"}}')}}]);