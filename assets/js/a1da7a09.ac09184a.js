"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["30125"],{72299:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>v,assets:()=>c,toc:()=>h,frontMatter:()=>d});var i=JSON.parse('{"id":"guides/docs/versioning","title":"Versioning","description":"You can use the versioning CLI to create a new documentation version based on the latest content in the docs directory. That specific set of documentation will then be preserved and accessible even as the documentation in the docs directory continues to evolve.","source":"@site/docs/guides/docs/versioning.mdx","sourceDirName":"guides/docs","slug":"/versioning","permalink":"/docs/versioning","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/versioning.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1730719870000,"frontMatter":{"slug":"/versioning"},"sidebar":"docs","previous":{"title":"Using multiple sidebars","permalink":"/docs/sidebar/multiple-sidebars"},"next":{"title":"Docs Multi-instance","permalink":"/docs/docs-multi-instance"}}'),r=s("24246"),o=s("80980"),t=s("15398"),l=s("58636");let d={slug:"/versioning"},a="Versioning",c={},h=[{value:"Overview",id:"overview",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Tutorials",id:"tutorials",level:2},{value:"Tagging a new version",id:"tagging-a-new-version",level:3},{value:"Creating new docs",id:"creating-new-docs",level:3},{value:"Updating an existing version",id:"updating-an-existing-version",level:3},{value:"Deleting an existing version",id:"deleting-an-existing-version",level:3},{value:"Configuring versioning behavior",id:"configuring-versioning-behavior",level:2},{value:"Navbar items",id:"navbar-items",level:2},{value:"Recommended practices",id:"recommended-practices",level:2},{value:"Version your documentation only when needed",id:"version-your-documentation-only-when-needed",level:3},{value:"Keep the number of versions small",id:"keep-the-number-of-versions-small",level:3},{value:"Use absolute import within the docs",id:"use-absolute-import-within-the-docs",level:3},{value:"Link docs by file paths",id:"link-docs-by-file-paths",level:3},{value:"Global or versioned collocated assets",id:"global-or-versioned-collocated-assets",level:3}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"versioning",children:"Versioning"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use the versioning CLI to create a new documentation version based on the latest content in the ",(0,r.jsx)(n.code,{children:"docs"})," directory. That specific set of documentation will then be preserved and accessible even as the documentation in the ",(0,r.jsx)(n.code,{children:"docs"})," directory continues to evolve."]}),"\n","\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Think about it before starting to version your documentation - it can become difficult for contributors to help improve it!"})}),"\n",(0,r.jsxs)(n.p,{children:["Most of the time, you don't need versioning as it will just increase your build time, and introduce complexity to your codebase. Versioning is ",(0,r.jsx)(n.strong,{children:"best suited for websites with high-traffic and rapid changes to documentation between versions"}),". If your documentation rarely changes, don't add versioning to your documentation."]}),"\n",(0,r.jsx)(n.p,{children:"To better understand how versioning works and see if it suits your needs, you can read on below."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"A typical versioned doc site looks like below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"website\n\u251C\u2500\u2500 sidebars.json        # sidebar for the current docs version\n\u251C\u2500\u2500 docs                 # docs directory for the current docs version\n\u2502   \u251C\u2500\u2500 foo\n\u2502   \u2502   \u2514\u2500\u2500 bar.md       # https://mysite.com/docs/next/foo/bar\n\u2502   \u2514\u2500\u2500 hello.md         # https://mysite.com/docs/next/hello\n\u251C\u2500\u2500 versions.json        # file to indicate what versions are available\n\u251C\u2500\u2500 versioned_docs\n\u2502   \u251C\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251C\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/foo/bar\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251C\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/1.0.0/foo/bar\n\u2502       \u2514\u2500\u2500 hello.md\n\u251C\u2500\u2500 versioned_sidebars\n\u2502   \u251C\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n\u251C\u2500\u2500 docusaurus.config.js\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"versions.json"})," file is a list of version names, ordered from newest to oldest."]}),"\n",(0,r.jsx)(n.p,{children:"The table below explains how a versioned file maps to its version and the generated URL."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Path"}),(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"URL"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"versioned_docs/version-1.0.0/hello.md"})}),(0,r.jsx)(n.td,{children:"1.0.0"}),(0,r.jsx)(n.td,{children:"/docs/1.0.0/hello"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"versioned_docs/version-1.1.0/hello.md"})}),(0,r.jsx)(n.td,{children:"1.1.0 (latest)"}),(0,r.jsx)(n.td,{children:"/docs/hello"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"docs/hello.md"})}),(0,r.jsx)(n.td,{children:"current"}),(0,r.jsx)(n.td,{children:"/docs/next/hello"})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The files in the ",(0,r.jsx)(n.code,{children:"docs"})," directory belong to the ",(0,r.jsx)(n.code,{children:"current"})," docs version."]}),(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"current"})," docs version is labeled as ",(0,r.jsx)(n.code,{children:"Next"})," and hosted under ",(0,r.jsx)(n.code,{children:"/docs/next/*"}),", but it is entirely configurable to fit your project's release lifecycle."]})]}),"\n",(0,r.jsx)(n.h3,{id:"terminology",children:"Terminology"}),"\n",(0,r.jsx)(n.p,{children:"Note the terminology we use here."}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:(0,r.jsx)("b",{children:"Current version"})}),(0,r.jsxs)("dd",{children:["The version placed in the ",(0,r.jsx)("code",{children:"./docs"})," folder."]}),(0,r.jsx)("dt",{children:(0,r.jsx)("b",{children:"Latest version / last version"})}),(0,r.jsxs)("dd",{children:["The version served by default for docs navbar items. Usually has path ",(0,r.jsx)("code",{children:"/docs"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Current version is defined by the ",(0,r.jsx)(n.strong,{children:"file system location"}),", while latest version is defined by the ",(0,r.jsx)(n.strong,{children:"the navigation behavior"}),". They may or may not be the same version! (And the default configuration, as shown in the table above, would treat them as different: current version at ",(0,r.jsx)(n.code,{children:"/docs/next"})," and latest at ",(0,r.jsx)(n.code,{children:"/docs"}),".)"]}),"\n",(0,r.jsx)(n.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsx)(n.h3,{id:"tagging-a-new-version",children:"Tagging a new version"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["First, make sure the current docs version (the ",(0,r.jsx)(n.code,{children:"./docs"})," directory) is ready to be frozen."]}),"\n",(0,r.jsx)(n.li,{children:"Enter a new version number."}),"\n"]}),"\n",(0,r.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.1.0\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.1.0\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.1.0\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"When tagging a new version, the document versioning mechanism will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Copy the full ",(0,r.jsx)(n.code,{children:"docs/"})," folder contents into a new ",(0,r.jsx)(n.code,{children:"versioned_docs/version-[versionName]/"})," folder."]}),"\n",(0,r.jsxs)(n.li,{children:["Create a versioned sidebars file based from your current ",(0,r.jsx)(n.a,{href:"/docs/sidebar",children:"sidebar"})," configuration (if it exists) - saved as ",(0,r.jsx)(n.code,{children:"versioned_sidebars/version-[versionName]-sidebars.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Append the new version number to ",(0,r.jsx)(n.code,{children:"versions.json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"creating-new-docs",children:"Creating new docs"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Place the new file into the corresponding version folder."}),"\n",(0,r.jsx)(n.li,{children:"Include the reference to the new file in the corresponding sidebar file according to the version number."}),"\n"]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(l.Z,{value:"Current version structure",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# The new file.\ndocs/new.md\n\n# Edit the corresponding sidebar file.\nsidebars.js\n"})})}),(0,r.jsx)(l.Z,{value:"Older version structure",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# The new file.\nversioned_docs/version-1.0.0/new.md\n\n# Edit the corresponding sidebar file.\nversioned_sidebars/version-1.0.0-sidebars.json\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Versioned sidebar files are, like standard sidebar files, relative to the content root for the given version \u2014 so for the example above, your versioned sidebar file may look like:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "sidebar": [\n    {\n      "type": "autogenerated",\n      "dirName": "."\n    }\n  ]\n}\n'})}),(0,r.jsx)(n.p,{children:"or for a manual sidebar:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "sidebar": [\n    {\n      "type": "doc",\n      "id": "new",\n      "label": "New"\n    }\n  ]\n}\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"updating-an-existing-version",children:"Updating an existing version"}),"\n",(0,r.jsxs)(n.p,{children:["You can update multiple docs versions at the same time because each directory in ",(0,r.jsx)(n.code,{children:"versioned_docs/"})," represents specific routes when published."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Edit any file."}),"\n",(0,r.jsx)(n.li,{children:"Commit and push changes."}),"\n",(0,r.jsx)(n.li,{children:"It will be published to the version."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example: When you change any file in ",(0,r.jsx)(n.code,{children:"versioned_docs/version-2.6/"}),", it will only affect the docs for version ",(0,r.jsx)(n.code,{children:"2.6"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"deleting-an-existing-version",children:"Deleting an existing version"}),"\n",(0,r.jsx)(n.p,{children:"You can delete/remove versions as well."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Remove the version from ",(0,r.jsx)(n.code,{children:"versions.json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'[\n  "2.0.0",\n  "1.9.0",\n  // highlight-next-line\n- "1.8.0"\n]\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Delete the versioned docs directory. Example: ",(0,r.jsx)(n.code,{children:"versioned_docs/version-1.8.0"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Delete the versioned sidebars file. Example: ",(0,r.jsx)(n.code,{children:"versioned_sidebars/version-1.8.0-sidebars.json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-versioning-behavior",children:"Configuring versioning behavior"}),"\n",(0,r.jsxs)(n.p,{children:['The "current" version is the version name for the ',(0,r.jsx)(n.code,{children:"./docs"})," folder. There are different ways to manage versioning, but two very common patterns are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You release v1, and start immediately working on v2 (including its docs). In this case, the ",(0,r.jsx)(n.strong,{children:"current version"})," is v2, which is in the ",(0,r.jsx)(n.code,{children:"./docs"})," source folder, and can be browsed at ",(0,r.jsx)(n.code,{children:"example.com/docs/next"}),". The ",(0,r.jsx)(n.strong,{children:"latest version"})," is v1, which is in the ",(0,r.jsx)(n.code,{children:"./versioned_docs/version-1"})," source folder, and is browsed by most of your users at ",(0,r.jsx)(n.code,{children:"example.com/docs"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["You release v1, and will maintain it for some time before thinking about v2. In this case, the ",(0,r.jsx)(n.strong,{children:"current version"})," and ",(0,r.jsx)(n.strong,{children:"latest version"})," will both be point to v1, since the v2 docs doesn't even exist yet!"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Docusaurus defaults work great for the first use case. We will label the current version as "next" and you can even choose not to publish it.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For the 2nd use case"}),": if you release v1 and don't plan to work on v2 anytime soon, instead of versioning v1 and having to maintain the docs in 2 folders (",(0,r.jsx)(n.code,{children:"./docs"})," + ",(0,r.jsx)(n.code,{children:"./versioned_docs/version-1.0.0"}),'), you may consider "pretending" that the current version is a cut version by giving it a path and a label:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    '@docusaurus/preset-classic',\n    docs: {\n      // highlight-start\n      lastVersion: 'current',\n      versions: {\n        current: {\n          label: '1.0.0',\n          path: '1.0.0',\n        },\n      },\n      // highlight-end\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The docs in ",(0,r.jsx)(n.code,{children:"./docs"})," will be served at ",(0,r.jsx)(n.code,{children:"/docs/1.0.0"})," instead of ",(0,r.jsx)(n.code,{children:"/docs/next"}),", and ",(0,r.jsx)(n.code,{children:"1.0.0"})," will become the default version we link to in the navbar dropdown, and you will only need to maintain a single ",(0,r.jsx)(n.code,{children:"./docs"})," folder."]}),"\n",(0,r.jsx)(n.p,{children:"We offer these plugin options to customize versioning behavior:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disableVersioning"}),": Explicitly disable versioning even with versions. This will make the site only include the current version."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"includeCurrentVersion"}),": Include the current version (the ",(0,r.jsx)(n.code,{children:"./docs"})," folder) of your docs.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tip"}),": turn it off if the current version is a work-in-progress, not ready to be published."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lastVersion"}),': Sets which version "latest version" (the ',(0,r.jsx)(n.code,{children:"/docs"})," route) refers to.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tip"}),": ",(0,r.jsx)(n.code,{children:"lastVersion: 'current'"})," makes sense if your current version refers to a major version that's constantly patched and released. The actual route base path and label of the latest version are configurable."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onlyIncludeVersions"}),": Defines a subset of versions from ",(0,r.jsx)(n.code,{children:"versions.json"})," to be deployed.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tip"}),": limit to 2 or 3 versions in dev and deploy previews to improve startup and build time."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"versions"}),": A dictionary of version metadata. For each version, you can customize the following:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"label"}),": the label displayed in the versions dropdown and banner."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"}),": the route base path of this version. By default, latest version has ",(0,r.jsx)(n.code,{children:"/"})," and current version has ",(0,r.jsx)(n.code,{children:"/next"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"banner"}),": one of ",(0,r.jsx)(n.code,{children:"'none'"}),", ",(0,r.jsx)(n.code,{children:"'unreleased'"}),", and ",(0,r.jsx)(n.code,{children:"'unmaintained'"}),'. Determines what\'s displayed at the top of every doc page. Any version above the latest version would be "unreleased", and any version below would be "unmaintained".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"badge"}),": show a badge with the version name at the top of a doc of that version."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"className"}),": add a custom ",(0,r.jsx)(n.code,{children:"className"})," to the ",(0,r.jsx)(n.code,{children:"<html>"})," element of doc pages of that version."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs#configuration",children:"docs plugin configuration"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"navbar-items",children:"Navbar items"}),"\n",(0,r.jsx)(n.p,{children:"We offer several navbar items to help you quickly set up navigation without worrying about versioned routes."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/api/themes/configuration#navbar-doc-link",children:(0,r.jsx)(n.code,{children:"doc"})}),": a link to a doc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/api/themes/configuration#navbar-doc-sidebar",children:(0,r.jsx)(n.code,{children:"docSidebar"})}),": a link to the first item in a sidebar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/api/themes/configuration#navbar-docs-version",children:(0,r.jsx)(n.code,{children:"docsVersion"})}),": a link to the main doc of the currently viewed version."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/api/themes/configuration#navbar-docs-version-dropdown",children:(0,r.jsx)(n.code,{children:"docsVersionDropdown"})}),": a dropdown containing all the versions available."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These links would all look for an appropriate version to link to, in the following order:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active version"}),": the version that the user is currently browsing, if she is on a page provided by this doc plugin. If she's not on a doc page, fall back to..."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Preferred version"}),": the version that the user last viewed. If there's no history, fall back to..."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Latest version"}),": the default version that we navigate to, configured by the ",(0,r.jsx)(n.code,{children:"lastVersion"})," option."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"recommended-practices",children:"Recommended practices"}),"\n",(0,r.jsx)(n.h3,{id:"version-your-documentation-only-when-needed",children:"Version your documentation only when needed"}),"\n",(0,r.jsxs)(n.p,{children:["For example, you are building documentation for your npm package ",(0,r.jsx)(n.code,{children:"foo"})," and you are currently in version 1.0.0. You then release a patch version for a minor bug fix and it's now 1.0.1."]}),"\n",(0,r.jsxs)(n.p,{children:["Should you cut a new documentation version 1.0.1? ",(0,r.jsx)(n.strong,{children:"You probably shouldn't"}),". 1.0.1 and 1.0.0 docs shouldn't differ according to semver because there are no new features!. Cutting a new version for it will only just create unnecessary duplicated files."]}),"\n",(0,r.jsx)(n.h3,{id:"keep-the-number-of-versions-small",children:"Keep the number of versions small"}),"\n",(0,r.jsxs)(n.p,{children:["As a good rule of thumb, try to keep the number of your versions below 10. You will ",(0,r.jsx)(n.strong,{children:"very likely"})," to have a lot of obsolete versioned documentation that nobody even reads anymore. For example, ",(0,r.jsx)(n.a,{href:"https://jestjs.io/versions",children:"Jest"})," is currently in version ",(0,r.jsx)(n.code,{children:"27.4"}),", and only maintains several latest documentation versions with the lowest being ",(0,r.jsx)(n.code,{children:"25.X"}),". Keep it small \uD83D\uDE0A"]}),"\n",(0,r.jsx)(n.admonition,{title:"archive older versions",type:"tip",children:(0,r.jsxs)(n.p,{children:["If you deploy your site on a Jamstack provider (e.g. ",(0,r.jsx)(n.a,{href:"/docs/deployment",children:"Netlify"}),"), the provider will save each production build as a snapshot under an immutable URL. You can include archived versions that will never be rebuilt as external links to these immutable URLs. The Jest website and the Docusaurus website both use such pattern to keep the number of actively built versions low."]})}),"\n",(0,r.jsx)(n.h3,{id:"use-absolute-import-within-the-docs",children:"Use absolute import within the docs"}),"\n",(0,r.jsxs)(n.p,{children:["Don't use relative paths import within the docs. Because when we cut a version the paths no longer work (the nesting level is different, among other reasons). You can utilize the ",(0,r.jsx)(n.code,{children:"@site"})," alias provided by Docusaurus that points to the ",(0,r.jsx)(n.code,{children:"website"})," directory. Example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"- import Foo from '../src/components/Foo';\n+ import Foo from '@site/src/components/Foo';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"link-docs-by-file-paths",children:"Link docs by file paths"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to other docs by relative file paths with the ",(0,r.jsx)(n.code,{children:".md"})," extension, so that Docusaurus can rewrite them to actual URL paths during building. Files will be linked to the correct corresponding version."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"The [@hello](hello.mdx#paginate) document is great!\n\nSee the [Tutorial](../getting-started/tutorial.mdx) for more info.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"global-or-versioned-collocated-assets",children:"Global or versioned collocated assets"}),"\n",(0,r.jsx)(n.p,{children:"You should decide if assets like images and files are per-version or shared between versions."}),"\n",(0,r.jsx)(n.p,{children:"If your assets should be versioned, put them in the docs version, and use relative paths:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"![img alt](./myImage.png)\n\n[download this file](./file.pdf)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If your assets are global, put them in ",(0,r.jsx)(n.code,{children:"/static"})," and use absolute paths:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"![img alt](/myImage.png)\n\n[download this file](/file.pdf)\n"})})]})}function v(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},58636:function(e,n,s){s.d(n,{Z:()=>t});var i=s("24246");s("27378");var r=s("90496");let o="tabItem_pnkT";function t(e){let{children:n,hidden:s,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o,t),hidden:s,children:n})}},15398:function(e,n,s){s.d(n,{Z:()=>g});var i=s("24246"),r=s("27378"),o=s("90496"),t=s("54947"),l=s("3620"),d=s("844"),a=s("97486"),c=s("32263"),h=s("16971");function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function v(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var x=s("71607");let j="tabList_Qoir",p="tabItem_AQgk";function m(e){let{className:n,block:s,selectedValue:r,selectValue:l,tabValues:d}=e,a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),h=e=>{let n=e.currentTarget,s=d[a.indexOf(n)].value;s!==r&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{let s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},n),children:d.map(e=>{let{value:n,label:s,attributes:t}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:h,...t,className:(0,o.Z)("tabs__item",p,t?.className,{"tabs__item--active":r===n}),children:s??n},n)})})}function f(e){let{lazy:n,children:s,selectedValue:t}=e,l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===t);return e?(0,r.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:i}=e,o=function(e){let{values:n,children:s}=e;return(0,r.useMemo)(()=>{let e=n??u(s).map(e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[t,x]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=s.find(e=>e.default)??s[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:o})),[j,p]=function(e){let{queryString:n=!1,groupId:s}=e,i=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),t=(0,a._X)(o);return[t,(0,r.useCallback)(e=>{if(!o)return;let n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})},[o,i])]}({queryString:s,groupId:i}),[m,f]=function(e){var n;let{groupId:s}=e;let i=(n=s)?`docusaurus.tab.${n}`:null,[o,t]=(0,h.Nk)(i);return[o,(0,r.useCallback)(e=>{if(!!i)t.set(e)},[i,t])]}({groupId:i}),b=(()=>{let e=j??m;return v({value:e,tabValues:o})?e:null})();return(0,d.Z)(()=>{b&&x(b)},[b]),{selectedValue:t,selectValue:(0,r.useCallback)(e=>{if(!v({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);x(e),p(e),f(e)},[p,f,o]),tabValues:o}}(e);return(0,i.jsxs)("div",{className:(0,o.Z)("tabs-container",j),children:[(0,i.jsx)(m,{...n,...e}),(0,i.jsx)(f,{...n,...e})]})}function g(e){let n=(0,x.Z)();return(0,i.jsx)(b,{...e,children:u(e.children)},String(n))}},80980:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(27378);let r={},o=i.createContext(r);function t(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);