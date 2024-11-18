"use strict";(self.webpackChunkaide_family_github_io=self.webpackChunkaide_family_github_io||[]).push([[9554],{4474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>_});var s=t(688),a=t(4848),r=t(8453);const l={title:"PromQL \u5e38\u7528\u67e5\u8be2\u8bed\u53e5\u793a\u4f8b",date:new Date("2024-11-18T00:00:00.000Z"),authors:["wutong"],description:"\u6536\u96c6\u6574\u7406 Prometheus \u76d1\u63a7\u4e2d\u6700\u5e38\u7528\u7684 PromQL \u67e5\u8be2\u8bed\u53e5\u793a\u4f8b",tags:["Prometheus","PromQL","\u76d1\u63a7","\u53ef\u89c2\u6d4b\u6027"]},i="PromQL \u5e38\u7528\u67e5\u8be2\u8bed\u53e5\u793a\u4f8b",o={authorsImageUrls:[void 0]},_=[{value:"\u7cfb\u7edf\u76d1\u63a7",id:"\u7cfb\u7edf\u76d1\u63a7",level:2},{value:"CPU \u76f8\u5173\u67e5\u8be2",id:"cpu-\u76f8\u5173\u67e5\u8be2",level:3},{value:"\u5185\u5b58\u76f8\u5173\u67e5\u8be2",id:"\u5185\u5b58\u76f8\u5173\u67e5\u8be2",level:3},{value:"\u78c1\u76d8\u76f8\u5173\u67e5\u8be2",id:"\u78c1\u76d8\u76f8\u5173\u67e5\u8be2",level:3},{value:"\u7f51\u7edc\u76f8\u5173\u67e5\u8be2",id:"\u7f51\u7edc\u76f8\u5173\u67e5\u8be2",level:3},{value:"\u5bb9\u5668\u76d1\u63a7",id:"\u5bb9\u5668\u76d1\u63a7",level:2},{value:"\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528",id:"\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528",level:3},{value:"\u5e94\u7528\u76d1\u63a7",id:"\u5e94\u7528\u76d1\u63a7",level:2},{value:"HTTP \u670d\u52a1\u76d1\u63a7",id:"http-\u670d\u52a1\u76d1\u63a7",level:3},{value:"JVM \u76d1\u63a7",id:"jvm-\u76d1\u63a7",level:3},{value:"\u544a\u8b66\u89c4\u5219\u793a\u4f8b",id:"\u544a\u8b66\u89c4\u5219\u793a\u4f8b",level:2},{value:"\u7cfb\u7edf\u544a\u8b66",id:"\u7cfb\u7edf\u544a\u8b66",level:3},{value:"\u5e94\u7528\u544a\u8b66",id:"\u5e94\u7528\u544a\u8b66",level:3},{value:"\u6027\u80fd\u4f18\u5316\u67e5\u8be2",id:"\u6027\u80fd\u4f18\u5316\u67e5\u8be2",level:2},{value:"\u9ad8\u7ea7\u76d1\u63a7\u573a\u666f",id:"\u9ad8\u7ea7\u76d1\u63a7\u573a\u666f",level:2},{value:"Kubernetes \u96c6\u7fa4\u76d1\u63a7",id:"kubernetes-\u96c6\u7fa4\u76d1\u63a7",level:3},{value:"\u6570\u636e\u5e93\u76d1\u63a7",id:"\u6570\u636e\u5e93\u76d1\u63a7",level:3},{value:"MySQL \u76d1\u63a7",id:"mysql-\u76d1\u63a7",level:4},{value:"Redis \u76d1\u63a7",id:"redis-\u76d1\u63a7",level:4},{value:"\u6d88\u606f\u961f\u5217\u76d1\u63a7",id:"\u6d88\u606f\u961f\u5217\u76d1\u63a7",level:3},{value:"RabbitMQ \u76d1\u63a7",id:"rabbitmq-\u76d1\u63a7",level:4},{value:"Kafka \u76d1\u63a7",id:"kafka-\u76d1\u63a7",level:4},{value:"\u7f51\u5173\u548c\u4ee3\u7406\u76d1\u63a7",id:"\u7f51\u5173\u548c\u4ee3\u7406\u76d1\u63a7",level:3},{value:"Nginx \u76d1\u63a7",id:"nginx-\u76d1\u63a7",level:4},{value:"\u5e94\u7528\u6027\u80fd\u76d1\u63a7",id:"\u5e94\u7528\u6027\u80fd\u76d1\u63a7",level:3},{value:"\u670d\u52a1\u4f9d\u8d56\u76d1\u63a7",id:"\u670d\u52a1\u4f9d\u8d56\u76d1\u63a7",level:4},{value:"\u7f13\u5b58\u6027\u80fd\u76d1\u63a7",id:"\u7f13\u5b58\u6027\u80fd\u76d1\u63a7",level:4},{value:"\u65e5\u5fd7\u76f8\u5173\u76d1\u63a7",id:"\u65e5\u5fd7\u76f8\u5173\u76d1\u63a7",level:3},{value:"\u5b89\u5168\u76d1\u63a7",id:"\u5b89\u5168\u76d1\u63a7",level:3},{value:"\u9ad8\u7ea7\u544a\u8b66\u89c4\u5219",id:"\u9ad8\u7ea7\u544a\u8b66\u89c4\u5219",level:2},{value:"\u8d8b\u52bf\u9884\u6d4b\u544a\u8b66",id:"\u8d8b\u52bf\u9884\u6d4b\u544a\u8b66",level:3},{value:"\u590d\u5408\u544a\u8b66\u6761\u4ef6",id:"\u590d\u5408\u544a\u8b66\u6761\u4ef6",level:3},{value:"\u6700\u4f73\u5b9e\u8df5\u8865\u5145",id:"\u6700\u4f73\u5b9e\u8df5\u8865\u5145",level:2},{value:"\u67e5\u8be2\u4f18\u5316\u8fdb\u9636",id:"\u67e5\u8be2\u4f18\u5316\u8fdb\u9636",level:3},{value:"\u5fae\u670d\u52a1\u76d1\u63a7",id:"\u5fae\u670d\u52a1\u76d1\u63a7",level:3},{value:"\u670d\u52a1\u7f51\u683c\u76d1\u63a7",id:"\u670d\u52a1\u7f51\u683c\u76d1\u63a7",level:4},{value:"\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173",id:"\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173",level:4},{value:"\u4e91\u539f\u751f\u7ec4\u4ef6\u76d1\u63a7",id:"\u4e91\u539f\u751f\u7ec4\u4ef6\u76d1\u63a7",level:3},{value:"Etcd \u76d1\u63a7",id:"etcd-\u76d1\u63a7",level:4},{value:"CoreDNS \u76d1\u63a7",id:"coredns-\u76d1\u63a7",level:4},{value:"\u5b58\u50a8\u7cfb\u7edf\u76d1\u63a7",id:"\u5b58\u50a8\u7cfb\u7edf\u76d1\u63a7",level:3},{value:"Elasticsearch \u76d1\u63a7",id:"elasticsearch-\u76d1\u63a7",level:4},{value:"MongoDB \u76d1\u63a7",id:"mongodb-\u76d1\u63a7",level:4},{value:"\u7f51\u7edc\u76d1\u63a7\u8fdb\u9636",id:"\u7f51\u7edc\u76d1\u63a7\u8fdb\u9636",level:3},{value:"\u7f51\u7edc\u8d28\u91cf\u76d1\u63a7",id:"\u7f51\u7edc\u8d28\u91cf\u76d1\u63a7",level:4},{value:"\u534f\u8bae\u76d1\u63a7",id:"\u534f\u8bae\u76d1\u63a7",level:4},{value:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u76d1\u63a7",id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u76d1\u63a7",level:3},{value:"\u4e1a\u52a1\u6307\u6807\u76d1\u63a7",id:"\u4e1a\u52a1\u6307\u6807\u76d1\u63a7",level:4},{value:"\u7528\u6237\u4f53\u9a8c\u76d1\u63a7",id:"\u7528\u6237\u4f53\u9a8c\u76d1\u63a7",level:4},{value:"\u9ad8\u7ea7\u544a\u8b66\u573a\u666f",id:"\u9ad8\u7ea7\u544a\u8b66\u573a\u666f",level:3},{value:"\u667a\u80fd\u544a\u8b66",id:"\u667a\u80fd\u544a\u8b66",level:4},{value:"\u591a\u7ef4\u5ea6\u544a\u8b66",id:"\u591a\u7ef4\u5ea6\u544a\u8b66",level:4}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u672c\u6587\u6536\u96c6\u6574\u7406\u4e86\u5728 Prometheus \u76d1\u63a7\u4e2d\u6700\u5e38\u7528\u7684 PromQL \u67e5\u8be2\u8bed\u53e5\uff0c\u65b9\u4fbf\u65e5\u5e38\u67e5\u8be2\u548c\u544a\u8b66\u89c4\u5219\u7f16\u5199\u65f6\u53c2\u8003\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u7cfb\u7edf\u76d1\u63a7",children:"\u7cfb\u7edf\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h3,{id:"cpu-\u76f8\u5173\u67e5\u8be2",children:"CPU \u76f8\u5173\u67e5\u8be2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# CPU \u4f7f\u7528\u7387\n100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)\n\n# CPU \u5404\u4e2a\u72b6\u6001\u5360\u6bd4\nrate(node_cpu_seconds_total[5m]) * 100\n\n# \u6309\u6838\u5fc3\u7edf\u8ba1 CPU \u4f7f\u7528\u7387\navg by (cpu) (rate(node_cpu_seconds_total{mode!="idle"}[5m]) * 100)\n\n# CPU \u8d1f\u8f7d\nnode_load1  # 1\u5206\u949f\u8d1f\u8f7d\nnode_load5  # 5\u5206\u949f\u8d1f\u8f7d\nnode_load15 # 15\u5206\u949f\u8d1f\u8f7d\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5185\u5b58\u76f8\u5173\u67e5\u8be2",children:"\u5185\u5b58\u76f8\u5173\u67e5\u8be2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u5185\u5b58\u4f7f\u7528\u7387\n(1 - node_memory_MemAvailable_bytes/node_memory_MemTotal_bytes) * 100\n\n# \u53ef\u7528\u5185\u5b58\nnode_memory_MemAvailable_bytes / 1024 / 1024 / 1024\n\n# \u5185\u5b58\u4f7f\u7528\u91cf\u524d\u4e94\u7684\u8fdb\u7a0b\ntopk(5, sum by (name) (container_memory_usage_bytes{container!=""}))\n\n# Swap \u4f7f\u7528\u7387\n(1 - node_memory_SwapFree_bytes/node_memory_SwapTotal_bytes) * 100\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u78c1\u76d8\u76f8\u5173\u67e5\u8be2",children:"\u78c1\u76d8\u76f8\u5173\u67e5\u8be2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u78c1\u76d8\u4f7f\u7528\u7387\n100 - ((node_filesystem_avail_bytes * 100) / node_filesystem_size_bytes)\n\n# \u78c1\u76d8\u8bfb\u5199\u901f\u7387\nrate(node_disk_read_bytes_total[5m])\nrate(node_disk_written_bytes_total[5m])\n\n# \u78c1\u76d8 IO \u4f7f\u7528\u7387\nrate(node_disk_io_time_seconds_total[5m]) * 100\n\n# \u9884\u6d4b\u78c1\u76d8\u6ee1\u7684\u65f6\u95f4\uff08\u5c0f\u65f6\uff09\npredict_linear(node_filesystem_free_bytes[1h], 4 * 3600) < 0\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u7f51\u7edc\u76f8\u5173\u67e5\u8be2",children:"\u7f51\u7edc\u76f8\u5173\u67e5\u8be2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u7f51\u7edc\u63a5\u53e3\u6d41\u91cf\nrate(node_network_receive_bytes_total[5m])\nrate(node_network_transmit_bytes_total[5m])\n\n# \u7f51\u7edc\u63a5\u53e3\u9519\u8bef\u7387\nrate(node_network_receive_errs_total[5m])\nrate(node_network_transmit_errs_total[5m])\n\n# TCP \u8fde\u63a5\u72b6\u6001\nnode_netstat_Tcp_CurrEstab\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5bb9\u5668\u76d1\u63a7",children:"\u5bb9\u5668\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h3,{id:"\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528",children:"\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u5bb9\u5668 CPU \u4f7f\u7528\u7387\nsum(rate(container_cpu_usage_seconds_total{container!=""}[5m])) by (container) * 100\n\n# \u5bb9\u5668\u5185\u5b58\u4f7f\u7528\u91cf\uff08GB\uff09\nsum(container_memory_usage_bytes{container!=""}) by (container) / 1024^3\n\n# \u5bb9\u5668\u7f51\u7edc IO\nsum(rate(container_network_receive_bytes_total[5m])) by (container)\nsum(rate(container_network_transmit_bytes_total[5m])) by (container)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u5e94\u7528\u76d1\u63a7",children:"\u5e94\u7528\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h3,{id:"http-\u670d\u52a1\u76d1\u63a7",children:"HTTP \u670d\u52a1\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u8bf7\u6c42\u901f\u7387\uff08QPS\uff09\nsum(rate(http_requests_total[5m])) by (handler)\n\n# \u9519\u8bef\u7387\nsum(rate(http_requests_total{status=~"5.."}[5m])) \n  / \nsum(rate(http_requests_total[5m])) * 100\n\n# \u5e73\u5747\u54cd\u5e94\u65f6\u95f4\nrate(http_request_duration_seconds_sum[5m]) \n  / \nrate(http_request_duration_seconds_count[5m])\n\n# P90/P95/P99 \u5ef6\u8fdf\nhistogram_quantile(0.90, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))\nhistogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))\nhistogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))\n'})}),"\n",(0,a.jsx)(n.h3,{id:"jvm-\u76d1\u63a7",children:"JVM \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u5806\u5185\u5b58\u4f7f\u7528\u7387\njvm_memory_bytes_used{area="heap"} \n  / \njvm_memory_bytes_max{area="heap"} * 100\n\n# GC \u6b21\u6570\nrate(jvm_gc_collection_seconds_count[5m])\n\n# GC \u8017\u65f6\nrate(jvm_gc_collection_seconds_sum[5m])\n\n# \u7ebf\u7a0b\u6570\njvm_threads_current\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u544a\u8b66\u89c4\u5219\u793a\u4f8b",children:"\u544a\u8b66\u89c4\u5219\u793a\u4f8b"}),"\n",(0,a.jsx)(n.h3,{id:"\u7cfb\u7edf\u544a\u8b66",children:"\u7cfb\u7edf\u544a\u8b66"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# CPU \u4f7f\u7528\u7387\u8fc7\u9ad8\n100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80\n\n# \u5185\u5b58\u4f7f\u7528\u7387\u8fc7\u9ad8\n(1 - node_memory_MemAvailable_bytes/node_memory_MemTotal_bytes) * 100 > 90\n\n# \u78c1\u76d8\u4f7f\u7528\u7387\u8fc7\u9ad8\n100 - ((node_filesystem_avail_bytes * 100) / node_filesystem_size_bytes) > 85\n\n# \u78c1\u76d8\u5c06\u5728 4 \u5c0f\u65f6\u5185\u6ee1\npredict_linear(node_filesystem_free_bytes[1h], 4 * 3600) < 0\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5e94\u7528\u544a\u8b66",children:"\u5e94\u7528\u544a\u8b66"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u670d\u52a1\u5b9e\u4f8b\u4e0d\u53ef\u7528\nup{job="my-service"} == 0\n\n# \u9519\u8bef\u7387\u8fc7\u9ad8\nsum(rate(http_requests_total{status=~"5.."}[5m])) \n  / \nsum(rate(http_requests_total[5m])) * 100 > 5\n\n# \u54cd\u5e94\u5ef6\u8fdf\u8fc7\u9ad8\nhistogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le)) > 1\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u6027\u80fd\u4f18\u5316\u67e5\u8be2",children:"\u6027\u80fd\u4f18\u5316\u67e5\u8be2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u67e5\u627e\u9ad8\u57fa\u6570\u7684\u6307\u6807\ntopk(10, count by (__name__) ({__name__=~".+"}))\n\n# \u67e5\u627e\u6700\u6d3b\u8dc3\u7684 targets\ntopk(10, count by (job) (up))\n\n# \u67e5\u627e\u91c7\u96c6\u901f\u7387\u6700\u9ad8\u7684\u6307\u6807\ntopk(10, rate(prometheus_tsdb_head_samples_appended_total[5m]))\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u9ad8\u7ea7\u76d1\u63a7\u573a\u666f",children:"\u9ad8\u7ea7\u76d1\u63a7\u573a\u666f"}),"\n",(0,a.jsx)(n.h3,{id:"kubernetes-\u96c6\u7fa4\u76d1\u63a7",children:"Kubernetes \u96c6\u7fa4\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u8282\u70b9 Ready \u72b6\u6001\nkube_node_status_condition{condition="Ready",status="true"}\n\n# Pod \u8fd0\u884c\u72b6\u6001\u7edf\u8ba1\nsum by (namespace) (kube_pod_status_phase{phase="Running"})\n\n# \u5bb9\u5668\u91cd\u542f\u6b21\u6570\nsum by (namespace, pod) (kube_pod_container_status_restarts_total)\n\n# \u8282\u70b9\u8d44\u6e90\u538b\u529b\nsum by (node) (\n  kube_pod_container_resource_requests{resource="cpu"} \n) / sum by (node) (\n  kube_node_status_allocatable{resource="cpu"}\n) * 100\n\n# \u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d\u4f7f\u7528\u7387\nsum by (namespace) (\n  kube_resourcequota{type="used"}\n) / sum by (namespace) (\n  kube_resourcequota{type="hard"}\n) * 100\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u6570\u636e\u5e93\u76d1\u63a7",children:"\u6570\u636e\u5e93\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"mysql-\u76d1\u63a7",children:"MySQL \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u8fde\u63a5\u6570\u4f7f\u7528\u7387\nmysql_global_status_threads_connected \n  / \nmysql_global_variables_max_connections * 100\n\n# \u6162\u67e5\u8be2\u7edf\u8ba1\nrate(mysql_global_status_slow_queries[5m])\n\n# InnoDB \u7f13\u51b2\u6c60\u4f7f\u7528\u7387\nmysql_global_status_innodb_buffer_pool_pages_total \n  - \nmysql_global_status_innodb_buffer_pool_pages_free\n\n# \u4e8b\u52a1\u7edf\u8ba1\nrate(mysql_global_status_commands_total{command="commit"}[5m])\n'})}),"\n",(0,a.jsx)(n.h4,{id:"redis-\u76d1\u63a7",children:"Redis \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u5185\u5b58\u4f7f\u7528\u7387\nredis_memory_used_bytes / redis_memory_max_bytes * 100\n\n# \u547d\u4ee4\u6267\u884c\u7387\nrate(redis_commands_total[5m])\n\n# \u952e\u8fc7\u671f\u7387\nrate(redis_expired_keys_total[5m])\n\n# \u8fde\u63a5\u6570\nredis_connected_clients\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u6d88\u606f\u961f\u5217\u76d1\u63a7",children:"\u6d88\u606f\u961f\u5217\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"rabbitmq-\u76d1\u63a7",children:"RabbitMQ \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u961f\u5217\u6d88\u606f\u5806\u79ef\nrabbitmq_queue_messages_ready\n\n# \u6d88\u8d39\u8005\u6570\u91cf\nrabbitmq_queue_consumers\n\n# \u6d88\u606f\u5904\u7406\u7387\nrate(rabbitmq_queue_messages_delivered_total[5m])\n\n# \u672a\u786e\u8ba4\u6d88\u606f\u6570\nrabbitmq_queue_messages_unacknowledged\n"})}),"\n",(0,a.jsx)(n.h4,{id:"kafka-\u76d1\u63a7",children:"Kafka \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u4e3b\u9898\u6d88\u606f\u7387\nrate(kafka_topic_partition_current_offset[5m])\n\n# \u6d88\u8d39\u7ec4\u5ef6\u8fdf\nsum by (topic) (\n  kafka_consumergroup_lag\n)\n\n# Broker \u6d3b\u8dc3\u8fde\u63a5\u6570\nkafka_server_socket_server_metrics_connection_count\n\n# \u526f\u672c\u540c\u6b65\u5ef6\u8fdf\nkafka_replica_lag\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u7f51\u5173\u548c\u4ee3\u7406\u76d1\u63a7",children:"\u7f51\u5173\u548c\u4ee3\u7406\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"nginx-\u76d1\u63a7",children:"Nginx \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u8bf7\u6c42\u5904\u7406\u7387\nrate(nginx_http_requests_total[5m])\n\n# \u6d3b\u8dc3\u8fde\u63a5\u6570\nnginx_connections_active\n\n# \u9519\u8bef\u7387\nsum(rate(nginx_http_requests_total{status=~"5.."}[5m])) \n  / \nsum(rate(nginx_http_requests_total[5m])) * 100\n\n# \u4e0a\u6e38\u54cd\u5e94\u65f6\u95f4\nhistogram_quantile(0.95, \n  rate(nginx_upstream_response_time_seconds_bucket[5m])\n)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5e94\u7528\u6027\u80fd\u76d1\u63a7",children:"\u5e94\u7528\u6027\u80fd\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"\u670d\u52a1\u4f9d\u8d56\u76d1\u63a7",children:"\u670d\u52a1\u4f9d\u8d56\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u670d\u52a1\u8c03\u7528\u9519\u8bef\u7387\nsum by (service) (\n  rate(service_calls_total{result="error"}[5m])\n) / sum by (service) (\n  rate(service_calls_total[5m])\n) * 100\n\n# \u670d\u52a1\u4f9d\u8d56\u53ef\u7528\u6027\nsum by (dependency) (\n  rate(dependency_up[5m])\n)\n\n# \u5916\u90e8\u670d\u52a1\u8c03\u7528\u5ef6\u8fdf\nhistogram_quantile(0.95,\n  rate(external_service_response_time_bucket[5m])\n)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"\u7f13\u5b58\u6027\u80fd\u76d1\u63a7",children:"\u7f13\u5b58\u6027\u80fd\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u7f13\u5b58\u547d\u4e2d\u7387\nsum(rate(cache_hits_total[5m])) \n  / \nsum(rate(cache_requests_total[5m])) * 100\n\n# \u7f13\u5b58\u8fc7\u671f\u7387\nrate(cache_evictions_total[5m])\n\n# \u7f13\u5b58\u5ef6\u8fdf\u5206\u5e03\nhistogram_quantile(0.99,\n  rate(cache_operation_duration_seconds_bucket[5m])\n)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u65e5\u5fd7\u76f8\u5173\u76d1\u63a7",children:"\u65e5\u5fd7\u76f8\u5173\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u9519\u8bef\u65e5\u5fd7\u7387\nrate(log_messages_total{level="error"}[5m])\n\n# \u6309\u7167\u670d\u52a1\u7edf\u8ba1\u9519\u8bef\u6570\nsum by (service) (\n  increase(log_errors_total[1h])\n)\n\n# \u65e5\u5fd7\u5199\u5165\u5ef6\u8fdf\nhistogram_quantile(0.95,\n  rate(log_write_duration_seconds_bucket[5m])\n)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5b89\u5168\u76d1\u63a7",children:"\u5b89\u5168\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u8ba4\u8bc1\u5931\u8d25\u6b21\u6570\nrate(auth_failures_total[5m])\n\n# IP \u5c01\u7981\u6b21\u6570\nincrease(ip_blacklist_total[1h])\n\n# HTTPS \u8bc1\u4e66\u8fc7\u671f\u65f6\u95f4\uff08\u5929\uff09\n(\n  ssl_certificate_expiry_timestamp_seconds \n  - \n  time()\n) / 86400\n\n# \u5f02\u5e38\u767b\u5f55\u5c1d\u8bd5\nsum by (user) (\n  rate(failed_login_attempts_total[5m])\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u9ad8\u7ea7\u544a\u8b66\u89c4\u5219",children:"\u9ad8\u7ea7\u544a\u8b66\u89c4\u5219"}),"\n",(0,a.jsx)(n.h3,{id:"\u8d8b\u52bf\u9884\u6d4b\u544a\u8b66",children:"\u8d8b\u52bf\u9884\u6d4b\u544a\u8b66"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u9884\u6d4b 4 \u5c0f\u65f6\u540e\u7684\u503c\u662f\u5426\u8d85\u8fc7\u9608\u503c\npredict_linear(\n  http_requests_total[1h], \n  4 * 3600\n) > 1000\n\n# \u5f02\u5e38\u503c\u68c0\u6d4b\nabs(\n  rate(http_requests_total[5m])\n  - \n  avg_over_time(rate(http_requests_total[5m])[1h:5m])\n) > 2\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u590d\u5408\u544a\u8b66\u6761\u4ef6",children:"\u590d\u5408\u544a\u8b66\u6761\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# CPU \u548c\u5185\u5b58\u540c\u65f6\u9ad8\u8d1f\u8f7d\n(\n  instance:cpu_usage:rate5m > 80\n  and\n  instance:memory_usage:ratio > 80\n)\n\n# \u670d\u52a1\u591a\u9879\u6307\u6807\u5f02\u5e38\n(\n  service:error_rate:5m > 1\n  and\n  service:latency:p95_5m > 0.5\n  and\n  service:success_rate:5m < 99\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5\u8865\u5145",children:"\u6700\u4f73\u5b9e\u8df5\u8865\u5145"}),"\n",(0,a.jsx)(n.h3,{id:"\u67e5\u8be2\u4f18\u5316\u8fdb\u9636",children:"\u67e5\u8be2\u4f18\u5316\u8fdb\u9636"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"\u4f7f\u7528\u5b50\u67e5\u8be2\u4f18\u5316\u590d\u6742\u8ba1\u7b97"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u4f18\u5316\u524d\nsum(rate(http_requests_total[5m])) / sum(rate(http_requests_total[5m]))\n\n# \u4f18\u5316\u540e\nsum(rate(http_requests_total[5m])) \n  / \ngroup(sum(rate(http_requests_total[5m])))\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"\u4f7f\u7528 recording rules \u4f18\u5316\u5e38\u7528\u67e5\u8be2"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u8bb0\u5f55\u89c4\u5219\u793a\u4f8b\nrules:\n  - record: job:http_errors:rate5m\n    expr: sum by (job) (rate(http_requests_total{status=~"5.."}[5m]))\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5fae\u670d\u52a1\u76d1\u63a7",children:"\u5fae\u670d\u52a1\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"\u670d\u52a1\u7f51\u683c\u76d1\u63a7",children:"\u670d\u52a1\u7f51\u683c\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u670d\u52a1\u95f4\u8c03\u7528\u5ef6\u8fdf\nhistogram_quantile(0.95,\n  sum(rate(istio_request_duration_milliseconds_bucket[5m])) by (source_app, destination_app, le)\n)\n\n# \u670d\u52a1\u9519\u8bef\u7387\nsum(rate(istio_requests_total{response_code=~"5.*"}[5m])) by (destination_service) \n  / \nsum(rate(istio_requests_total[5m])) by (destination_service) * 100\n\n# \u670d\u52a1\u91cd\u8bd5\u7387\nsum(rate(istio_requests_total{response_flags="RR"}[5m])) by (destination_service)\n  /\nsum(rate(istio_requests_total[5m])) by (destination_service) * 100\n\n# \u65ad\u8def\u5668\u5f00\u542f\u6b21\u6570\nincrease(istio_circuit_breaker_open_total[5m])\n'})}),"\n",(0,a.jsx)(n.h4,{id:"\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173",children:"\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u8ffd\u8e2a\u91c7\u6837\u7387\nsum(rate(spans_sampled_total[5m])) \n  / \nsum(rate(spans_total[5m])) * 100\n\n# \u8ffd\u8e2a\u5ef6\u8fdf\u5206\u5e03\nhistogram_quantile(0.95, sum(rate(trace_duration_seconds_bucket[5m])) by (service, le))\n\n# \u8ffd\u8e2a\u9519\u8bef\u7387\nsum(rate(spans_errors_total[5m])) by (service)\n  /\nsum(rate(spans_total[5m])) by (service) * 100\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4e91\u539f\u751f\u7ec4\u4ef6\u76d1\u63a7",children:"\u4e91\u539f\u751f\u7ec4\u4ef6\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"etcd-\u76d1\u63a7",children:"Etcd \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# Leader \u9009\u4e3e\u72b6\u6001\netcd_server_is_leader\n\n# \u5199\u5165\u5ef6\u8fdf\nhistogram_quantile(0.99, rate(etcd_disk_wal_fsync_duration_seconds_bucket[5m]))\n\n# \u6570\u636e\u5e93\u5927\u5c0f\netcd_debugging_mvcc_db_total_size_in_bytes\n\n# Raft \u63d0\u6848\u5931\u8d25\u7387\nrate(etcd_server_proposals_failed_total[5m])\n  /\nrate(etcd_server_proposals_committed_total[5m]) * 100\n"})}),"\n",(0,a.jsx)(n.h4,{id:"coredns-\u76d1\u63a7",children:"CoreDNS \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# DNS \u67e5\u8be2\u7387\nsum(rate(coredns_dns_requests_total[5m])) by (zone)\n\n# \u67e5\u8be2\u5ef6\u8fdf\nhistogram_quantile(0.95, sum(rate(coredns_dns_request_duration_seconds_bucket[5m])) by (zone, le))\n\n# \u9519\u8bef\u7387\nsum(rate(coredns_dns_responses_total{rcode!="NOERROR"}[5m])) \n  / \nsum(rate(coredns_dns_responses_total[5m])) * 100\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5b58\u50a8\u7cfb\u7edf\u76d1\u63a7",children:"\u5b58\u50a8\u7cfb\u7edf\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"elasticsearch-\u76d1\u63a7",children:"Elasticsearch \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u96c6\u7fa4\u72b6\u6001\nelasticsearch_cluster_health_status{color="green"}\n\n# \u7d22\u5f15\u5199\u5165\u5ef6\u8fdf\nrate(elasticsearch_index_stats_indexing_index_time_seconds_total[5m])\n  /\nrate(elasticsearch_index_stats_indexing_index_total[5m])\n\n# JVM \u5806\u4f7f\u7528\u7387\nelasticsearch_jvm_memory_used_bytes{area="heap"}\n  /\nelasticsearch_jvm_memory_max_bytes{area="heap"} * 100\n\n# \u641c\u7d22\u5ef6\u8fdf\nrate(elasticsearch_indices_search_fetch_time_seconds[5m])\n  /\nrate(elasticsearch_indices_search_fetch_total[5m])\n'})}),"\n",(0,a.jsx)(n.h4,{id:"mongodb-\u76d1\u63a7",children:"MongoDB \u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u8fde\u63a5\u6570\nmongodb_connections{state="current"}\n\n# \u64cd\u4f5c\u5ef6\u8fdf\nrate(mongodb_op_latencies_latency_total[5m])\n  /\nrate(mongodb_op_latencies_ops_total[5m])\n\n# \u590d\u5236\u5ef6\u8fdf\nmongodb_replset_member_optime_date{state="SECONDARY"}\n  -\nmongodb_replset_member_optime_date{state="PRIMARY"}\n\n# \u6162\u67e5\u8be2\u6570\nrate(mongodb_mongod_metrics_query_executor_total{state="scanned_objects"}[5m])\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u7f51\u7edc\u76d1\u63a7\u8fdb\u9636",children:"\u7f51\u7edc\u76d1\u63a7\u8fdb\u9636"}),"\n",(0,a.jsx)(n.h4,{id:"\u7f51\u7edc\u8d28\u91cf\u76d1\u63a7",children:"\u7f51\u7edc\u8d28\u91cf\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u7f51\u7edc\u5ef6\u8fdf\navg_over_time(ping_average_response_ms[5m])\n\n# \u4e22\u5305\u7387\nrate(ping_loss_count[5m])\n  /\nrate(ping_count[5m]) * 100\n\n# \u7f51\u7edc\u6296\u52a8\nstddev_over_time(ping_average_response_ms[5m])\n"})}),"\n",(0,a.jsx)(n.h4,{id:"\u534f\u8bae\u76d1\u63a7",children:"\u534f\u8bae\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# TCP \u91cd\u4f20\u7387\nrate(node_netstat_Tcp_RetransSegs[5m])\n  /\nrate(node_netstat_Tcp_OutSegs[5m]) * 100\n\n# TCP \u8fde\u63a5\u72b6\u6001\u5206\u5e03\nnode_netstat_Tcp_CurrEstab\n\n# UDP \u7f13\u51b2\u533a\u6ea2\u51fa\nrate(node_netstat_Udp_RcvbufErrors[5m])\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u76d1\u63a7",children:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u76d1\u63a7"}),"\n",(0,a.jsx)(n.h4,{id:"\u4e1a\u52a1\u6307\u6807\u76d1\u63a7",children:"\u4e1a\u52a1\u6307\u6807\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:'# \u8ba2\u5355\u5904\u7406\u901f\u7387\nrate(business_orders_processed_total[5m])\n\n# \u652f\u4ed8\u6210\u529f\u7387\nsum(rate(payment_transactions_total{status="success"}[5m]))\n  /\nsum(rate(payment_transactions_total[5m])) * 100\n\n# \u7528\u6237\u4f1a\u8bdd\u6570\nsum(rate(user_sessions_total{status="active"}[5m]))\n\n# \u4e1a\u52a1\u9519\u8bef\u5206\u5e03\ntopk(10, sum by (error_type) (rate(business_errors_total[1h])))\n'})}),"\n",(0,a.jsx)(n.h4,{id:"\u7528\u6237\u4f53\u9a8c\u76d1\u63a7",children:"\u7528\u6237\u4f53\u9a8c\u76d1\u63a7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u9875\u9762\u52a0\u8f7d\u65f6\u95f4\nhistogram_quantile(0.95, sum(rate(page_load_time_seconds_bucket[5m])) by (page, le))\n\n# JS \u9519\u8bef\u7387\nsum(rate(frontend_errors_total[5m])) by (error_type)\n\n# API \u54cd\u5e94\u65f6\u95f4\nhistogram_quantile(0.99, sum(rate(api_response_time_seconds_bucket[5m])) by (api, le))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u9ad8\u7ea7\u544a\u8b66\u573a\u666f",children:"\u9ad8\u7ea7\u544a\u8b66\u573a\u666f"}),"\n",(0,a.jsx)(n.h4,{id:"\u667a\u80fd\u544a\u8b66",children:"\u667a\u80fd\u544a\u8b66"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u52a8\u6001\u9608\u503c\u544a\u8b66\nabs(\n  rate(http_requests_total[5m])\n  - \n  avg_over_time(rate(http_requests_total[5m])[1d:5m])\n) > stddev_over_time(rate(http_requests_total[5m])[1d:5m]) * 3\n\n# \u5b63\u8282\u6027\u611f\u77e5\u544a\u8b66\n(\n  rate(http_requests_total[5m])\n  / \n  avg_over_time(rate(http_requests_total[5m] offset 7d)[1h:5m])\n) > 2\n"})}),"\n",(0,a.jsx)(n.h4,{id:"\u591a\u7ef4\u5ea6\u544a\u8b66",children:"\u591a\u7ef4\u5ea6\u544a\u8b66"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-promql",children:"# \u670d\u52a1\u8d28\u91cf\u7efc\u5408\u544a\u8b66\n(\n  service:error_rate:5m > 1\n  and\n  service:latency:p95_5m > 0.5\n  and\n  service:success_rate:5m < 99\n  and\n  service:traffic:rate5m > 10\n)\n\n# \u8d44\u6e90\u9971\u548c\u5ea6\u544a\u8b66\n(\n  instance:cpu_usage:rate5m > 80\n  or\n  instance:memory_usage:ratio > 80\n  or\n  instance:disk_usage:ratio > 85\n)\n  and\n  instance:load1 > count(instance:cpu_cores) by (instance)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(6540);const a={},r=s.createContext(a);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}},688:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/11/18/promql-examples","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-11-18-promql-examples/index.md","source":"@site/blog/2024-11-18-promql-examples/index.md","title":"PromQL \u5e38\u7528\u67e5\u8be2\u8bed\u53e5\u793a\u4f8b","description":"\u6536\u96c6\u6574\u7406 Prometheus \u76d1\u63a7\u4e2d\u6700\u5e38\u7528\u7684 PromQL \u67e5\u8be2\u8bed\u53e5\u793a\u4f8b","date":"2024-11-18T00:00:00.000Z","tags":[{"inline":true,"label":"Prometheus","permalink":"/blog/tags/prometheus"},{"inline":true,"label":"PromQL","permalink":"/blog/tags/prom-ql"},{"inline":true,"label":"\u76d1\u63a7","permalink":"/blog/tags/\u76d1\u63a7"},{"inline":true,"label":"\u53ef\u89c2\u6d4b\u6027","permalink":"/blog/tags/\u53ef\u89c2\u6d4b\u6027"}],"readingTime":8.915,"hasTruncateMarker":false,"authors":[{"name":"\u68a7\u6850","title":"\u6c38\u8fdc\u5e74\u8f7b\uff0c\u6c38\u8fdc\u70ed\u7231","url":"https://github.com/aide-cloud","page":{"permalink":"/blog/authors/wutong"},"socials":{"github":"https://github.com/aide-cloud"},"imageURL":"https://avatars.githubusercontent.com/u/52439018?v=4","key":"wutong"}],"frontMatter":{"title":"PromQL \u5e38\u7528\u67e5\u8be2\u8bed\u53e5\u793a\u4f8b","date":"2024-11-18T00:00:00.000Z","authors":["wutong"],"description":"\u6536\u96c6\u6574\u7406 Prometheus \u76d1\u63a7\u4e2d\u6700\u5e38\u7528\u7684 PromQL \u67e5\u8be2\u8bed\u53e5\u793a\u4f8b","tags":["Prometheus","PromQL","\u76d1\u63a7","\u53ef\u89c2\u6d4b\u6027"]},"unlisted":false,"nextItem":{"title":"Prometheus \u6307\u6807\u7c7b\u578b\u8be6\u89e3","permalink":"/blog/2024/11/17/prometheus-metrics"}}')}}]);