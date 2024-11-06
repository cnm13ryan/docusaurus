"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["41410"],{38584:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"guides/markdown-features/head-metadata","title":"Head metadata","description":"Declaring page-specific head metadata through MDX","source":"@site/docs/guides/markdown-features/markdown-features-head-metadata.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/head-metadata","permalink":"/docs/markdown-features/head-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-head-metadata.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1730719870000,"frontMatter":{"id":"head-metadata","description":"Declaring page-specific head metadata through MDX","slug":"/markdown-features/head-metadata"},"sidebar":"docs","previous":{"title":"Diagrams","permalink":"/docs/markdown-features/diagrams"},"next":{"title":"Styling and Layout","permalink":"/docs/styling-layout"}}'),d=a("24246"),s=a("80980");let i={id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},o="Head metadata",r={},c=[{value:"Customizing head metadata",id:"customizing-head-metadata",level:2},{value:"Markdown page description",id:"markdown-page-description",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Head:a}=t;return!a&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"head-metadata",children:"Head metadata"})}),"\n",(0,d.jsx)(t.h2,{id:"customizing-head-metadata",children:"Customizing head metadata"}),"\n",(0,d.jsxs)(t.p,{children:["Docusaurus automatically sets useful page metadata in ",(0,d.jsx)(t.code,{children:"<html>"}),", ",(0,d.jsx)(t.code,{children:"<head>"})," and ",(0,d.jsx)(t.code,{children:"<body>"})," for you. It is possible to add extra metadata (or override existing ones) with the ",(0,d.jsx)(t.code,{children:"<head>"})," tag in Markdown files:"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-md",metastring:'title="markdown-features-head-metadata.mdx"',children:'---\nid: head-metadata\ntitle: Head Metadata\n---\n\n\x3c!-- highlight-start --\x3e\n<head>\n  <html className="some-extra-html-class" />\n  <body className="other-extra-body-class" />\n  <title>Head Metadata customized title!</title>\n  <meta charSet="utf-8" />\n  <meta name="twitter:card" content="summary" />\n  <link rel="canonical" href="https://docusaurus.io/docs/markdown-features/head-metadata" />\n</head>\n\x3c!-- highlight-end --\x3e\n\n# Head Metadata\n\nMy text\n'})}),"\n",(0,d.jsxs)(a,{children:[(0,d.jsx)("html",{className:"some-extra-html-class"}),(0,d.jsx)("body",{className:"other-extra-body-class"}),(0,d.jsx)("title",{children:"Head Metadata customized title!"}),(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,d.jsx)("link",{rel:"canonical",href:"https://docusaurus.io/docs/markdown-features/head-metadata"})]}),"\n",(0,d.jsxs)(t.p,{children:["This ",(0,d.jsx)(t.code,{children:"<head>"})," declaration has been added to the current Markdown doc as a demo. Open your browser DevTools and check how this page's metadata has been affected."]}),"\n",(0,d.jsx)(t.admonition,{type:"note",children:(0,d.jsxs)(t.p,{children:["This feature is built on top of the Docusaurus ",(0,d.jsx)(t.a,{href:"/docs/docusaurus-core#head",children:(0,d.jsx)(t.code,{children:"<Head>"})})," component. Refer to ",(0,d.jsx)(t.a,{href:"https://github.com/nfl/react-helmet",children:"react-helmet"})," for exhaustive documentation."]})}),"\n",(0,d.jsx)(t.admonition,{title:"You don't need this for regular SEO",type:"tip",children:(0,d.jsxs)(t.p,{children:["Content plugins (e.g. docs and blog) provide front matter options like ",(0,d.jsx)(t.code,{children:"description"}),", ",(0,d.jsx)(t.code,{children:"keywords"}),", and ",(0,d.jsx)(t.code,{children:"image"}),", which will be automatically applied to both ",(0,d.jsx)(t.code,{children:"description"})," and ",(0,d.jsx)(t.code,{children:"og:description"}),", while you would have to manually declare two metadata tags when using the ",(0,d.jsx)(t.code,{children:"<head>"})," tag."]})}),"\n",(0,d.jsx)(t.h2,{id:"markdown-page-description",children:"Markdown page description"}),"\n",(0,d.jsxs)(t.p,{children:["The Markdown pages' description metadata may be used in more places than the head metadata. For example, the docs plugin's ",(0,d.jsx)(t.a,{href:"/docs/sidebar/items#generated-index-page",children:"generated category index"})," uses the description metadata for the doc cards."]}),"\n",(0,d.jsx)(t.p,{children:"By default, the description is the first content-ful line, with some efforts to convert it to plain text. For example, the following file..."}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-md",children:"# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})}),"\n",(0,d.jsxs)(t.p,{children:['...will have the default description "Main content... May contain some links or emphasis". However, ',(0,d.jsx)(t.strong,{children:"it's not designed to be fully functional"}),". Where it fails to produce reasonable descriptions, you can explicitly provide one through front matter:"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-md",children:"---\ndescription: This description will override the default.\n---\n\n# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},80980:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return i}});var n=a(27378);let d={},s=n.createContext(d);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);