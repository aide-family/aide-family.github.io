"use strict";(self.webpackChunkaide_family_github_io=self.webpackChunkaide_family_github_io||[]).push([[1909],{7024:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"config/public-config","title":"\u516c\u5171\u914d\u7f6e","description":"\u670d\u52a1\u914d\u7f6e","source":"@site/docs/3-config/1-public-config.md","sourceDirName":"3-config","slug":"/config/public-config","permalink":"/docs/config/public-config","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-config/1-public-config.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u914d\u7f6e\u8bf4\u660e","permalink":"/docs/category/\u914d\u7f6e\u8bf4\u660e"},"next":{"title":"\u5e7f\u5bd2\u5bab(Palace)\u914d\u7f6e","permalink":"/docs/config/palace-config"}}');var s=i(4848),t=i(8453);const o={sidebar_position:1},a="\u516c\u5171\u914d\u7f6e",l={},c=[{value:"\u670d\u52a1\u914d\u7f6e",id:"\u670d\u52a1\u914d\u7f6e",level:2},{value:"HTTP\u670d\u52a1\u914d\u7f6e",id:"http\u670d\u52a1\u914d\u7f6e",level:2},{value:"GRPC\u670d\u52a1\u914d\u7f6e",id:"grpc\u670d\u52a1\u914d\u7f6e",level:2},{value:"\u670d\u52a1\u53d1\u73b0\u914d\u7f6e",id:"\u670d\u52a1\u53d1\u73b0\u914d\u7f6e",level:2},{value:"etcd\u914d\u7f6e",id:"etcd\u914d\u7f6e",level:2},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u6570\u636e\u5e93\u914d\u7f6e",id:"\u6570\u636e\u5e93\u914d\u7f6e",level:2},{value:"\u7f13\u5b58\u914d\u7f6e",id:"\u7f13\u5b58\u914d\u7f6e",level:2},{value:"\u90ae\u4ef6\u53d1\u9001\u914d\u7f6e",id:"\u90ae\u4ef6\u53d1\u9001\u914d\u7f6e",level:2},{value:"\u94fe\u8def\u8ffd\u8e2a\u914d\u7f6e",id:"\u94fe\u8def\u8ffd\u8e2a\u914d\u7f6e",level:2},{value:"\u901a\u77e5\u63a5\u6536\u5bf9\u8c61\u914d\u7f6e",id:"\u901a\u77e5\u63a5\u6536\u5bf9\u8c61\u914d\u7f6e",level:2},{value:"\u5fae\u670d\u52a1\u914d\u7f6e",id:"\u5fae\u670d\u52a1\u914d\u7f6e",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u516c\u5171\u914d\u7f6e",children:"\u516c\u5171\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.h2,{id:"\u670d\u52a1\u914d\u7f6e",children:"\u670d\u52a1\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// \u670d\u52a1\u914d\u7f6e\nmessage Server {\n  // \u670d\u52a1\u540d\u79f0\n  string name = 1;\n  // \u670d\u52a1\u5143\u6570\u636e\n  map<string, string> metadata = 2;\n  // \u670d\u52a1http\u5730\u5740\n  string httpEndpoint = 3;\n  // grpc\u5730\u5740\n  string grpcEndpoint = 4;\n  // \u7f51\u7edc\u7c7b\u578b\n  string network = 5;\n  optional string secret = 6;\n  //\u4e0a\u7ebf\u65f6\u95f4\n  string startTime = 7;\n  //\u5728\u7ebf\u65f6\u957f\n  string upTime = 8;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"http\u670d\u52a1\u914d\u7f6e",children:"HTTP\u670d\u52a1\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// http\u670d\u52a1\u914d\u7f6e\nmessage HTTPServer {\n  // \u7f51\u7edc\u7c7b\u578b\n  string network = 1;\n  // \u670d\u52a1\u5730\u5740\n  string addr = 2;\n  // \u8bfb\u5199\u8d85\u65f6\u65f6\u95f4\n  google.protobuf.Duration timeout = 3;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"grpc\u670d\u52a1\u914d\u7f6e",children:"GRPC\u670d\u52a1\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// grpc\u670d\u52a1\u914d\u7f6e\nmessage GRPCServer {\n  // \u7f51\u7edc\u7c7b\u578b\n  string network = 1;\n  // \u670d\u52a1\u5730\u5740\n  string addr = 2;\n  // \u8bfb\u5199\u8d85\u65f6\u65f6\u95f4\n  google.protobuf.Duration timeout = 3;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u670d\u52a1\u53d1\u73b0\u914d\u7f6e",children:"\u670d\u52a1\u53d1\u73b0\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// \u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u914d\u7f6e\nmessage Discovery {\n  // \u7c7b\u578b\uff0c \u540d\u79f0\u548c\u6570\u636e\u6e90\u4fdd\u6301\u4e00\u81f4\uff0c\u4f8b\u5982etcd\n  string driver = 1;\n  // \u6570\u636e\u6e90\n  ETCD etcd = 2;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"etcd\u914d\u7f6e",children:"etcd\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// ETCD\u6570\u636e\u6e90\u914d\u7f6e\nmessage ETCD {\n  // \u7aef\u70b9\n  repeated string endpoints = 1;\n  // \u8fde\u63a5\u8d85\u65f6\n  optional google.protobuf.Duration timeout = 2;\n  // \u7528\u6237\u540d\n  optional string username = 3;\n  // \u5bc6\u7801\n  optional string password = 4;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u65e5\u5fd7\u914d\u7f6e",children:"\u65e5\u5fd7\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"message Log {\n  // default, slog, aliyun, zap\n  string type = 1;\n  // \u65e5\u5fd7\u7ea7\u522b\n  string level = 2;\n\n  // \u963f\u91cc\u4e91\u65e5\u5fd7\n  optional AliYunLogConfig aliyun = 4;\n  // zap\u65e5\u5fd7\n  optional ZapLogConfig zap = 5;\n  // slog\u65e5\u5fd7\n  optional SLogConfig slog = 6;\n  // loki\u65e5\u5fd7\n  optional LokiLogConfig loki = 7;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636e\u5e93\u914d\u7f6e",children:"\u6570\u636e\u5e93\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// \u6570\u636e\u5e93\u914d\u7f6e\nmessage Database {\n  // \u9a71\u52a8\uff0c \u652f\u6301gorm\u5373\u53ef\n  string driver = 1;\n  // \u6570\u636e\u5e93\u8fde\u63a5\u4e32\n  string dsn = 2;\n  // \u662f\u5426\u5f00\u542f\u8c03\u8bd5\n  bool debug = 3;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7f13\u5b58\u914d\u7f6e",children:"\u7f13\u5b58\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// \u7f13\u5b58\u914d\u7f6e\nmessage Cache {\n  //redis nuts-db  free\n  string driver = 1;\n  // redis\u914d\u7f6e\n  Redis redis = 2;\n  // nuts db\u914d\u7f6e\n  NutsDB nutsDB = 3;\n  // \u5185\u5b58\u7f13\u5b58\u914d\u7f6e\n  Free free = 4;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u90ae\u4ef6\u53d1\u9001\u914d\u7f6e",children:"\u90ae\u4ef6\u53d1\u9001\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// \u90ae\u4ef6\u53d1\u9001\u914d\u7f6e\nmessage EmailConfig {\n  // \u7528\u6237\n  string user = 1;\n  // \u53d1\u9001\u7684\u90ae\u7bb1\u5bc6\u7801\n  string pass = 2;\n  // \u53d1\u9001\u7684\u90ae\u7bb1\u670d\u52a1\u5668\n  string host = 3;\n  // \u53d1\u9001\u7684\u90ae\u7bb1\u7aef\u53e3\n  uint32 port = 4;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u94fe\u8def\u8ffd\u8e2a\u914d\u7f6e",children:"\u94fe\u8def\u8ffd\u8e2a\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// \u94fe\u8def\u8ffd\u8e2a\u914d\u7f6e\nmessage Tracer {\n  // \u9a71\u52a8\uff0c \u652f\u6301jaeger\n  string driver = 1;\n  // jaeger\u914d\u7f6e\n  Jaeger jaeger = 2;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u901a\u77e5\u63a5\u6536\u5bf9\u8c61\u914d\u7f6e",children:"\u901a\u77e5\u63a5\u6536\u5bf9\u8c61\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"message Receiver {\n  repeated ReceiverHook hooks = 1;\n\n  repeated ReceiverPhone phones = 2;\n\n  repeated ReceiverEmail emails = 3;\n\n  EmailConfig emailConfig = 4;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5fae\u670d\u52a1\u914d\u7f6e",children:"\u5fae\u670d\u52a1\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-protobuf",children:"// \u5fae\u670d\u52a1\u914d\u7f6e\nmessage MicroServer {\n  // \u670d\u52a1\u5730\u5740\n  string endpoint = 1;\n  // \u5bc6\u94a5\n  optional string secret = 2;\n  // \u8d85\u65f6\u65f6\u95f4\n  optional google.protobuf.Duration timeout = 3;\n  // \u7f51\u7edc\u7c7b\u578b\uff0c http, https, grpc\n  string network = 4;\n  // node\u7248\u672c\n  string nodeVersion = 5;\n  // name \u670d\u52a1\u540d\n  string name = 6;\n}\n"})})]})}function g(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var r=i(6540);const s={},t=r.createContext(s);function o(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);