"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["85936"],{11313:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>p,toc:()=>h,frontMatter:()=>u});var r=JSON.parse('{"id":"api/plugins/plugin-google-gtag","title":"\uD83D\uDCE6 plugin-google-gtag","description":"The default Global Site Tag (gtag.js) plugin. It is a JavaScript tagging framework and API that allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. This section describes how to configure a Docusaurus site to enable global site tag for Google Analytics.","source":"@site/docs/api/plugins/plugin-google-gtag.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-google-gtag","permalink":"/docs/api/plugins/@docusaurus/plugin-google-gtag","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-gtag.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1730719870000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"slug":"/api/plugins/@docusaurus/plugin-google-gtag"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-google-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-google-analytics"},"next":{"title":"\uD83D\uDCE6 plugin-rsdoctor","permalink":"/docs/api/plugins/@docusaurus/plugin-rsdoctor"}}'),s=n("24246"),o=n("80980"),l=n("15398"),a=n("58636"),i=n("32240"),c=n("66359");let u={sidebar_position:7,slug:"/api/plugins/@docusaurus/plugin-google-gtag"},d="\uD83D\uDCE6 plugin-google-gtag",p={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function g(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-plugin-google-gtag",children:"\uD83D\uDCE6 plugin-google-gtag"})}),"\n","\n",(0,s.jsxs)(t.p,{children:["The default ",(0,s.jsx)(t.a,{href:"https://developers.google.com/tag-platform/gtagjs",children:"Global Site Tag (gtag.js)"})," plugin. It is a JavaScript tagging framework and API that allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. This section describes how to configure a Docusaurus site to enable global site tag for Google Analytics."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.a,{href:"https://tagassistant.google.com/",children:"Google's Tag Assistant"})," tool to check if your gtag is set up correctly!"]})}),"\n",(0,s.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,s.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,s.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(a.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-gtag\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-gtag\n"})})}),(0,s.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-gtag\n"})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you use the preset ",(0,s.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,s.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"trackingID"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"string | string[]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.td,{children:"The tracking ID of your gtag service. It is possible to provide multiple ids."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"anonymizeIP"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,s.jsx)(c.Z,{pluginName:"@docusaurus/plugin-google-gtag",presetOptionName:"gtag",code:"{\n  trackingID: 'G-999X9XX9XX',\n  anonymizeIP: true,\n}"})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},58636:function(e,t,n){n.d(t,{Z:()=>l});var r=n("24246");n("27378");var s=n("90496");let o="tabItem_pnkT";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o,l),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>v});var r=n("24246"),s=n("27378"),o=n("90496"),l=n("54947"),a=n("3620"),i=n("844"),c=n("97486"),u=n("32263"),d=n("16971");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var g=n("71607");let m="tabList_Qoir",f="tabItem_AQgk";function b(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=i[c.indexOf(t)].value;n!==s&&(u(t),a(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:p,onClick:d,...l,className:(0,o.Z)("tabs__item",f,l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,o=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??p(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,g]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:o})),[m,f]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,c._X)(o);return[l,(0,s.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})},[o,r])]}({queryString:n,groupId:r}),[b,j]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[o,l]=(0,d.Nk)(r);return[o,(0,s.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),x=(()=>{let e=m??b;return h({value:e,tabValues:o})?e:null})();return(0,i.Z)(()=>{x&&g(x)},[x]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),j(e)},[f,j,o]),tabValues:o}}(e);return(0,r.jsxs)("div",{className:(0,o.Z)("tabs-container",m),children:[(0,r.jsx)(b,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function v(e){let t=(0,g.Z)();return(0,r.jsx)(x,{...e,children:p(e.children)},String(t))}},56497:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(24246);n(27378);var s=n(71607);function o(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},32240:function(e,t,n){n.d(t,{Z:()=>c});var r=n("24246"),s=n("27378"),o=n("96700"),l=n("3620");let a="apiTable_e8hp",i=s.forwardRef(function(e,t){let{name:n,children:a}=e,i=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(a),c=n?`${n}-${i}`:i,u=`#${c}`,d=(0,l.k6)();return(0,o.Z)().collectAnchor(c),(0,r.jsx)("tr",{id:c,tabIndex:0,ref:d.location.hash===u?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&d.push(u)},onKeyDown:e=>{"Enter"===e.key&&d.push(u)},children:a.props.children})});function c(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[o,l]=s.Children.toArray(t.props.children),c=(0,s.useRef)(null);(0,s.useEffect)(()=>{c.current?.focus()},[c]);let u=s.Children.map(l.props.children,e=>(0,r.jsx)(i,{name:n,ref:c,children:e}));return(0,r.jsxs)("table",{className:a,children:[o,(0,r.jsx)("tbody",{children:u})]})}},66359:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(24246);n(27378);var s=n(35363),o=n(90158),l=n(77827),a=n(15398),i=n(58636),c=n(95998);let u=void 0;function d(e){let{code:t,pluginName:n,presetOptionName:d}=e,p=(0,o.zu)(u).path;return(0,r.jsxs)(a.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(i.Z,{value:"preset",label:(0,l.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(s.Z,{to:`${p}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(l.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${d}: ${t.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,r.jsxs)(i.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${n}',
      // highlight-start
      ${t.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},95998:function(e,t,n){n.d(t,{Z:()=>el});var r,s={};n.r(s),n.d(s,{ButtonExample:()=>Z});var o=n("24246"),l=n("27378"),a=n("90496"),i=n("71607"),c=n("10075"),u=n("77827"),d=n("8156"),p=n("56497"),h=n("85108"),g=n("45245"),m=n("26378");function f(){let{prism:e}=(0,m.L)(),{colorMode:t}=(0,g.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var b=n("67490");let j="playgroundContainer_6Ior",x="playgroundHeader_Tvsk",v="playgroundEditor_TySg",y="playgroundPreview_mApW";function k(e){let{children:t}=e;return(0,o.jsx)("div",{className:(0,a.Z)(x),children:t})}function w(){return(0,o.jsx)("div",{children:"Loading..."})}function B(){return(0,o.jsx)(p.Z,{fallback:(0,o.jsx)(w,{}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.Z,{fallback:e=>(0,o.jsx)(h.Ac,{...e}),children:(0,o.jsx)(c.i5,{})}),(0,o.jsx)(c.IF,{})]})})}function N(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{children:(0,o.jsx)(u.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,o.jsx)("div",{className:y,children:(0,o.jsx)(B,{})})]})}function I(){let e=(0,i.Z)();return(0,o.jsx)(c.uz,{className:v},String(e))}function C(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{children:(0,o.jsx)(u.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,o.jsx)(I,{})]})}let E=e=>`${e};`;function T(e){let{children:t,transformCode:n,...r}=e,{siteConfig:{themeConfig:s}}=(0,d.Z)(),{liveCodeBlock:{playgroundPosition:l}}=s,a=f(),i=r.metastring?.includes("noInline")??!1;return(0,o.jsx)("div",{className:j,children:(0,o.jsx)(c.nu,{code:t?.replace(/\n$/,""),noInline:i,transformCode:n??E,theme:a,...r,children:"top"===l?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{}),(0,o.jsx)(C,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(N,{})]})})})}function Z(e){return(0,o.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let L={React:l,...l,...s};var A=n("55951"),S=n("6324"),_=n.n(S);let $=/title=(?<quote>["'])(?<title>.*?)\1/,D=/\{(?<range>[\d,-]+)\}/,O={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},P={...O,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},G=Object.keys(O);function M(e,t){let n=e.map(e=>{let{start:n,end:r}=P[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let R="codeBlockContainer_jDV4";function V(e){let{as:t,...n}=e,r=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,o=t[r];o&&"string"==typeof s&&(n[o]=s)}),n}(f());return(0,o.jsx)(t,{...n,style:r,className:(0,a.Z)(n.className,R,A.k.common.codeBlock)})}let q={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W(e){let{children:t,className:n}=e;return(0,o.jsx)(V,{as:"pre",tabIndex:0,className:(0,a.Z)(q.codeBlockStandalone,"thin-scrollbar",n),children:(0,o.jsx)("code",{className:q.codeBlockLines,children:t})})}var H=n("50923");let z={attributes:!0,characterData:!0,childList:!0,subtree:!0};var F=n("7316");let X={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function U(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let i=s({line:t,className:(0,a.Z)(n,r&&X.codeLine)}),c=t.map((e,t)=>(0,o.jsx)("span",{...l({token:e})},t));return(0,o.jsxs)("span",{...i,children:[r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:X.codeLineNumber}),(0,o.jsx)("span",{className:X.codeLineContent,children:c})]}):c,(0,o.jsx)("br",{})]})}var J=n("44771");function Q(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Y(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee(e){let{code:t,className:n}=e,[r,s]=(0,l.useState)(!1),i=(0,l.useRef)(void 0),c=(0,l.useCallback)(()=>{(0,J.Z)(t),s(!0),i.current=window.setTimeout(()=>{s(!1)},1e3)},[t]);return(0,l.useEffect)(()=>()=>window.clearTimeout(i.current),[]),(0,o.jsx)("button",{type:"button","aria-label":r?(0,u.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,u.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,K.copyButton,r&&K.copyButtonCopied),onClick:c,children:(0,o.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(Q,{className:K.copyButtonIcon}),(0,o.jsx)(Y,{className:K.copyButtonSuccessIcon})]})})}function et(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let en={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function er(e){let{className:t,onClick:n,isEnabled:r}=e,s=(0,u.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,r&&en.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,o.jsx)(et,{className:en.wordWrapButtonIcon,"aria-hidden":"true"})})}function es(e){var t,n,r;let{children:s,className:i="",metastring:c,title:u,showLineNumbers:d,language:p}=e,{prism:{defaultLanguage:h,magicComments:g}}=(0,m.L)();let b=(t=p??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(i)??h,t?.toLowerCase()),j=f(),x=function(){let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1),s=(0,l.useRef)(null),o=(0,l.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),a=(0,l.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;r(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]);return!function(e,t){let[n,r]=(0,l.useState)(),s=(0,l.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,l.useEffect)(()=>{s()},[s]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z,r=(0,H.zX)(t),s=(0,H.Ql)(n);(0,l.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()},[e,r,s])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(s,a),(0,l.useEffect)(()=>{a()},[e,a]),(0,l.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:o}}();let v=(n=c,(n?.match($)?.groups.title??"")||u),{lineClassNames:y,code:k}=function(e,t){let n=e.replace(/\n$/,""),{language:r,magicComments:s,metastring:o}=t;if(o&&D.test(o)){let e=o.match(D).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=s[0].className;return{lineClassNames:Object.fromEntries(_()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===r)return{lineClassNames:{},code:n};let l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return M(["js","jsBlock"],t);case"jsx":case"tsx":return M(["js","jsBlock","jsx"],t);case"html":return M(["js","jsBlock","html"],t);case"python":case"py":case"bash":return M(["bash"],t);case"markdown":case"md":return M(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return M(["tex"],t);case"lua":case"haskell":case"sql":return M(["lua"],t);case"wasm":return M(["wasm"],t);case"vb":case"vba":case"visual-basic":return M(["vb","rem"],t);case"vbnet":return M(["vbnet","rem"],t);case"batch":return M(["rem"],t);case"basic":return M(["rem","f90"],t);case"fsharp":return M(["js","ml"],t);case"ocaml":case"sml":return M(["ml"],t);case"fortran":return M(["f90"],t);case"cobol":return M(["cobol"],t);default:return M(G,t)}}(r,s),a=n.split("\n"),i=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(l);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?i[c[n]].range+=`${e},`:u[n]?i[u[n]].start=e:d[n]&&(i[d[n]].range+=`${i[d[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let p={};return Object.entries(i).forEach(e=>{let[t,{range:n}]=e;_()(n).forEach(e=>{p[e]??=[],p[e].push(t)})}),{lineClassNames:p,code:n}}(s,{metastring:c,language:b,magicComments:g});let w=d??(r=c,!!r?.includes("showLineNumbers"));return(0,o.jsxs)(V,{as:"div",className:(0,a.Z)(i,b&&!i.includes(`language-${b}`)&&`language-${b}`),children:[v&&(0,o.jsx)("div",{className:q.codeBlockTitle,children:v}),(0,o.jsxs)("div",{className:q.codeBlockContent,children:[(0,o.jsx)(F.y$,{theme:j,code:k,language:b??"text",children:e=>{let{className:t,style:n,tokens:r,getLineProps:s,getTokenProps:l}=e;return(0,o.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,a.Z)(t,q.codeBlock,"thin-scrollbar"),style:n,children:(0,o.jsx)("code",{className:(0,a.Z)(q.codeBlockLines,w&&q.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,o.jsx)(U,{line:e,getLineProps:s,getTokenProps:l,classNames:y[t],showLineNumbers:w},t))})})}}),(0,o.jsxs)("div",{className:q.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,o.jsx)(er,{className:q.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,o.jsx)(ee,{className:q.codeButton,code:k})]})]})]})}let eo=(r=function(e){var t;let{children:n,...r}=e,s=(0,i.Z)();let a=(t=n,l.Children.toArray(t).some(e=>(0,l.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t),c="string"==typeof a?es:W;return(0,o.jsx)(c,{...r,children:a},String(s))},function(e){return e.live?(0,o.jsx)(T,{scope:L,...e}):(0,o.jsx)(r,{...e})});function el(e){return(0,o.jsx)(eo,{...e})}}}]);