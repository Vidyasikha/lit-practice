const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-QfqcM9pP.js","./iframe-BSVAgeoH.js","./index-BCI4JQNS.js","./index-ogSvIofg.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./iframe-BSVAgeoH.js";var s=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,a]=r;return a.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await o(()=>import("./DocsRenderer-CFRXHY34-QfqcM9pP.js").then(r=>r.D),__vite__mapDeps([0,1,2,3]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{l as parameters};
