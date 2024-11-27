"use strict";(self.webpackChunkaide_family_github_io=self.webpackChunkaide_family_github_io||[]).push([[6444],{4992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"feature/datasource","title":"\u6570\u636e\u6e90","description":"\u7cfb\u7edf\u5b9a\u4e49\u4e86\u56db\u79cd\u6570\u636e\u7c7b\u578b\uff1a\u65e5\u5fd7\u3001\u6307\u6807\u3001\u4e8b\u4ef6\u3001 \u94fe\u8def\u3002 \u6bcf\u79cd\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u6709\u591a\u79cd\u6570\u636e\u5b58\u50a8\u5668\u3002 \u4ee5\u8fd9\u79cd\u5f62\u5f0f\uff0c\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u6570\u636e\u7c7b\u578b\u7684\u7edf\u4e00\u67e5\u8be2\u3001\u5206\u6790\u3001\u544a\u8b66\u3001\u53ef\u89c6\u5316\u7b49\u3002","source":"@site/docs/2-feature/1-datasource.md","sourceDirName":"2-feature","slug":"/feature/datasource","permalink":"/docs/feature/datasource","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-feature/1-datasource.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u7cfb\u7edf\u4ecb\u7ecd","permalink":"/docs/category/\u7cfb\u7edf\u4ecb\u7ecd"},"next":{"title":"\u544a\u8b66\u7ec4","permalink":"/docs/feature/notify-group"}}');var s=r(4848),a=r(8453);const n={sidebar_position:1},c="\u6570\u636e\u6e90",l={},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u65e5\u5fd7\uff08Log\uff09",id:"\u65e5\u5fd7log",level:3},{value:"\u6307\u6807\uff08Metric\uff09",id:"\u6307\u6807metric",level:3},{value:"\u4e8b\u4ef6\uff08Event\uff09",id:"\u4e8b\u4ef6event",level:3},{value:"\u5b58\u50a8\u5668",id:"\u5b58\u50a8\u5668",level:2},{value:"prometheus",id:"prometheus",level:3},{value:"victoriametrics",id:"victoriametrics",level:3},{value:"elasticsearch",id:"elasticsearch",level:3},{value:"loki",id:"loki",level:3},{value:"kafka",id:"kafka",level:3},{value:"rocketmq",id:"rocketmq",level:3},{value:"mqtt",id:"mqtt",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u6570\u636e\u6e90",children:"\u6570\u636e\u6e90"})}),"\n",(0,s.jsx)(t.p,{children:"\u7cfb\u7edf\u5b9a\u4e49\u4e86\u56db\u79cd\u6570\u636e\u7c7b\u578b\uff1a\u65e5\u5fd7\u3001\u6307\u6807\u3001\u4e8b\u4ef6\u3001 \u94fe\u8def\u3002 \u6bcf\u79cd\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u6709\u591a\u79cd\u6570\u636e\u5b58\u50a8\u5668\u3002 \u4ee5\u8fd9\u79cd\u5f62\u5f0f\uff0c\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u6570\u636e\u7c7b\u578b\u7684\u7edf\u4e00\u67e5\u8be2\u3001\u5206\u6790\u3001\u544a\u8b66\u3001\u53ef\u89c6\u5316\u7b49\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u7c7b\u578b",children:"\u7c7b\u578b"}),"\n",(0,s.jsx)(t.h3,{id:"\u65e5\u5fd7log",children:"\u65e5\u5fd7\uff08Log\uff09"}),"\n",(0,s.jsx)(t.p,{children:"\u5b9e\u73b0\u7edf\u4e00\u7684\u65e5\u5fd7\u67e5\u8be2\u63a5\u53e3\uff0c\u4ee5\u652f\u6301\u591a\u79cd\u65e5\u5fd7\u5b58\u50a8\u5668\u3002 \u5728\u5e73\u53f0\u914d\u7f6e\u7edf\u4e00\u7684\u65e5\u5fd7\u7b56\u7565\u5b8c\u6210\u65e5\u5fd7\u7c7b\u578b\u6570\u636e\u7684\u67e5\u8be2\u3001\u5206\u6790\u3001\u544a\u8b66\u3001\u53ef\u89c6\u5316\u7b49\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u6307\u6807metric",children:"\u6307\u6807\uff08Metric\uff09"}),"\n",(0,s.jsx)(t.p,{children:"\u5b9e\u73b0\u7edf\u4e00\u7684\u6307\u6807\u67e5\u8be2\u63a5\u53e3\uff0c\u4ee5\u652f\u6301\u591a\u79cd\u6307\u6807\u5b58\u50a8\u5668\u3002 \u5728\u5e73\u53f0\u914d\u7f6e\u7edf\u4e00\u7684\u6307\u6807\u7b56\u7565\u5b8c\u6210\u6307\u6807\u7c7b\u578b\u6570\u636e\u7684\u67e5\u8be2\u3001\u5206\u6790\u3001\u544a\u8b66\u3001\u53ef\u89c6\u5316\u7b49\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u4e8b\u4ef6event",children:"\u4e8b\u4ef6\uff08Event\uff09"}),"\n",(0,s.jsx)(t.p,{children:"\u5b9e\u73b0\u7edf\u4e00\u7684\u4e8b\u4ef6\u67e5\u8be2\u63a5\u53e3\uff0c\u4ee5\u652f\u6301\u591a\u79cd\u4e8b\u4ef6\u5b58\u50a8\u5668\u3002 \u5728\u5e73\u53f0\u914d\u7f6e\u7edf\u4e00\u7684\u4e8b\u4ef6\u7b56\u7565\u5b8c\u6210\u4e8b\u4ef6\u7c7b\u578b\u6570\u636e\u7684\u67e5\u8be2\u3001\u5206\u6790\u3001\u544a\u8b66\u3001\u53ef\u89c6\u5316\u7b49\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u5b58\u50a8\u5668",children:"\u5b58\u50a8\u5668"}),"\n",(0,s.jsx)(t.h3,{id:"prometheus",children:"prometheus"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://prometheus.io/",children:"prometheus"})}),"\n",(0,s.jsx)(t.h3,{id:"victoriametrics",children:"victoriametrics"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://victoriametrics.com/",children:"victoriametrics"})}),"\n",(0,s.jsx)(t.h3,{id:"elasticsearch",children:"elasticsearch"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.elastic.co/cn/products/elasticsearch",children:"elasticsearch"})}),"\n",(0,s.jsx)(t.h3,{id:"loki",children:"loki"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://grafana.com/oss/loki/",children:"loki"})}),"\n",(0,s.jsx)(t.h3,{id:"kafka",children:"kafka"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://kafka.apache.org/",children:"kafka"})}),"\n",(0,s.jsx)(t.h3,{id:"rocketmq",children:"rocketmq"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://rocketmq.apache.org/",children:"rocketmq"})}),"\n",(0,s.jsx)(t.h3,{id:"mqtt",children:"mqtt"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://mqtt.org/",children:"mqtt"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var i=r(6540);const s={},a=i.createContext(s);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);