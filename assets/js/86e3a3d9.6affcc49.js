"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20136],{22047:(e,t,r)=>{r.d(t,{A:()=>x});var n=r(62540);r(63696);var o=r(11750),a=r(46222),c=r(36372),s=r(13111),i=r(14652),l=r(81912),d=r(37425);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m({href:e,children:t}){return(0,n.jsx)(c.A,{href:e,className:(0,o.A)("card padding--lg",u.cardContainer),children:t})}function h({href:e,icon:t,title:r,description:a}){return(0,n.jsxs)(m,{href:e,children:[(0,n.jsxs)(d.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:r,children:[t," ",r]}),a&&(0,n.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function g({item:e}){var t;let r=(0,a.Nr)(e),o=function(){let{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(h,{href:r,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:o(e.items.length)}):null}function p({item:e}){var t,r;let o=(0,i.A)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",c=(0,a.cC)(null!==(t=e.docId)&&void 0!==t?t:void 0);return(0,n.jsx)(h,{href:e.href,icon:o,title:e.label,description:null!==(r=e.description)&&void 0!==r?r:null==c?void 0:c.description})}function f({item:e}){switch(e.type){case"link":return(0,n.jsx)(p,{item:e});case"category":return(0,n.jsx)(g,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function y({className:e}){let t=(0,a.$S)();return(0,n.jsx)(x,{items:t.items,className:e})}function x(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(y,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e));let c=(0,a.d1)(t);return(0,n.jsx)("section",{className:(0,o.A)("row",r),children:c.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(f,{item:e})},t))})}},93914:(e,t,r)=>{function n(...e){return r(69615).$S(...e)}r.d(t,{$S:()=>n}),r(99468)},13111:(e,t,r)=>{r.d(t,{W:()=>i});var n=r(63696),o=r(99468);let a=["zero","one","two","few","many","other"];function c(e){return a.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},92612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>u});let n=JSON.parse('{"id":"tests/category-links/with-category-name-doc/with-category-name-doc","title":"Category with a doc of category\'s name","description":"You should be able to click on the category and browse this /.md doc","source":"@site/_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.mdx","sourceDirName":"tests/category-links/with-category-name-doc","slug":"/tests/category-links/with-category-name-doc/","permalink":"/tests/docs/tests/category-links/with-category-name-doc/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1725970596000,"frontMatter":{},"sidebar":"sidebar","previous":{"title":"Sample doc","permalink":"/tests/docs/tests/category-links/regular-category/sample-doc"},"next":{"title":"Sample doc","permalink":"/tests/docs/tests/category-links/with-category-name-doc/sample-doc"}}');var o=r(62540),a=r(43023),c=r(22047),s=r(93914);let i={},l="Category with a doc of category's name",d={},u=[{value:"Intro",id:"intro",level:2},{value:"Category content",id:"category-content",level:2}];function m(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"category-with-a-doc-of-categorys-name",children:"Category with a doc of category's name"})}),"\n",(0,o.jsxs)(t.p,{children:["You should be able to click on the category and browse this ",(0,o.jsx)(t.code,{children:"<categoryName>/<categoryName>.md"})," doc"]}),"\n",(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(t.p,{children:"Some intro text"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"It is also possible to render the card items for that category thanks to MDX:"})}),"\n",(0,o.jsx)(t.h2,{id:"category-content",children:"Category content"}),"\n","\n",(0,o.jsx)(c.A,{items:(0,s.$S)().items})]})}function h(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}h.displayName="MDXContent(_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.mdx)"},43023:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>s});var n=r(63696);let o={},a=n.createContext(o);function c(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);