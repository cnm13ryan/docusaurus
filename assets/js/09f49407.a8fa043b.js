"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15128],{15995:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(62540);r(63696);var l=r(11750);function o({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.A)("tabItem_pnkT",r),hidden:t,children:e})}},27446:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(62540),l=r(63696),o=r(11750),s=r(7846),a=r(49519),i=r(96439),u=r(19739),c=r(66904),p=r(79244);function d(e){var t,r;return null!==(r=null===(t=l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}var g=r(10709);function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function m({className:e,block:t,selectedValue:r,selectValue:l,tabValues:a}){let i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{let t=e.currentTarget,n=a[i.indexOf(t)].value;n!==r&&(u(t),l(n))},p=e=>{var t,r;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=i.indexOf(e.currentTarget)+1;n=null!==(t=i[r])&&void 0!==t?t:i[0];break}case"ArrowLeft":{let t=i.indexOf(e.currentTarget)-1;n=null!==(r=i[t])&&void 0!==r?r:i[i.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},e),children:a.map(({value:e,label:t,attributes:l})=>(0,n.jsx)("li",h(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:p,onClick:c},l),{className:(0,o.A)("tabs__item","tabItem_AQgk",null==l?void 0:l.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function v({lazy:e,children:t,selectedValue:r}){let s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=s.find(e=>e.props.value===r);return e?(0,l.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function j(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,o=function(e){let{values:t,children:r}=e;return(0,l.useMemo)(()=>{let e=null!=t?t:d(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,c.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[s,g]=(0,l.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:o})),[f,h]=function({queryString:e=!1,groupId:t}){let r=(0,a.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,u.aZ)(n),(0,l.useCallback)(e=>{var t,l;if(!n)return;let o=new URLSearchParams(r.location.search);o.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),l=l={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(l)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[m,v]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,p.Dv)(t);return[r,(0,l.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),j=(()=>{let e=null!=f?f:m;return b({value:e,tabValues:o})?e:null})();return(0,i.A)(()=>{j&&g(j)},[j]),{selectedValue:s,selectValue:(0,l.useCallback)(e=>{if(!b({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);g(e),h(e),v(e)},[h,v,o]),tabValues:o}}(e);return(0,n.jsxs)("div",{className:(0,o.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(m,f({},t,e)),(0,n.jsx)(v,f({},t,e))]})}function y(e){let t=(0,g.A)();return(0,n.jsx)(j,h(f({},e),{children:d(e.children)}),String(t))}},30134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>n,someExport:()=>p,toc:()=>d});var n=r(39686),l=r(62540),o=r(43023),s=r(27446),a=r(15995);let i={title:"Blog post MDX Feed tests",authors:["slorber"],tags:["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],hide_reading_time:!0},u=void 0,c={authorsImageUrls:[void 0]},p=42,d=[{value:"Imports",id:"imports",level:2},{value:"Exports",id:"exports",level:2},{value:"Tabs test",id:"tabs-test",level:2}];function b(e){let t={code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Some MDX tests, mostly to test how the RSS feed render those"}),"\n","\n",(0,l.jsx)(t.h2,{id:"imports",children:"Imports"}),"\n",(0,l.jsx)(t.p,{children:"Here are some imports:"}),"\n","\n",(0,l.jsx)(t.h2,{id:"exports",children:"Exports"}),"\n",(0,l.jsx)(t.p,{children:"Here are some exports:"}),"\n","\n",(0,l.jsx)(t.h2,{id:"tabs-test",children:"Tabs test"}),"\n",(0,l.jsx)(t.p,{children:"Here are some tabs:"}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsx)(a.A,{value:"apple",label:"Apple",children:(0,l.jsx)(t.p,{children:"This is an apple \u{1F34E}"})}),(0,l.jsx)(a.A,{value:"orange",label:"Orange",children:(0,l.jsx)(t.p,{children:"This is an orange \u{1F34A}"})})]}),"\n",(0,l.jsxs)(t.p,{children:["Here are some tabs, inside ",(0,l.jsx)(t.code,{children:"mdx-code-block"}),":"]}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsx)(a.A,{value:"apple",label:"Apple",children:(0,l.jsx)(t.p,{children:"This is an apple \u{1F34E}"})}),(0,l.jsx)(a.A,{value:"orange",label:"Orange",children:(0,l.jsx)(t.p,{children:"This is an orange \u{1F34A}"})})]})]})}function g(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},43023:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(63696);let l={},o=n.createContext(l);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(o.Provider,{value:t},e.children)}},39686:e=>{e.exports=JSON.parse('{"permalink":"/tests/blog/2021/10/07/blog-post-mdx-feed-tests","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx","source":"@site/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx","title":"Blog post MDX Feed tests","description":"Some MDX tests, mostly to test how the RSS feed render those","date":"2021-10-07T00:00:00.000Z","tags":[{"inline":false,"label":"Paginated-tag","permalink":"/tests/blog/tags/paginated-tag"},{"inline":false,"label":"Blog","permalink":"/tests/blog/tags/blog"},{"inline":false,"label":"Docusaurus","permalink":"/tests/blog/tags/docusaurus"},{"inline":false,"label":"Long-long","permalink":"/tests/blog/tags/long-long"},{"inline":false,"label":"Long-long-long","permalink":"/tests/blog/tags/long-long-long"},{"inline":false,"label":"Long-long-long-long","permalink":"/tests/blog/tags/long-long-long-long"}],"hasTruncateMarker":true,"authors":[{"name":"Sebastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","twitter":"sebastienlorber","page":{"permalink":"/tests/blog/authors/slorber"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Blog post MDX Feed tests","authors":["slorber"],"tags":["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],"hide_reading_time":true},"unlisted":false,"prevItem":{"title":"Blog post MDX require Feed tests","permalink":"/tests/blog/2021/10/08/blog-post-mdx-require-feed-tests"},"nextItem":{"title":"Post with duplicate title","permalink":"/tests/blog/2021/09/13/dup-title"}}')}}]);