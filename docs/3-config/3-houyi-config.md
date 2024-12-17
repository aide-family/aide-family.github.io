---
sidebar_position: 3
---

# 后裔(HouYi)配置

```protocol
message Bootstrap {
  pkg.conf.Server server = 1;
  string env = 2;
  Watch watch = 3;
  // 月宫代理服务
  pkg.conf.MicroServer palace_server = 5;
  // 服务发现配置， 如果配置了服务发现，endpoint则会被当作服务发现地址, 没有配置直接当作服务地址
  pkg.conf.Discovery discovery = 6;
  pkg.conf.HTTPServer http = 7;
  pkg.conf.GRPCServer grpc = 8;
  pkg.conf.Cache cache = 9;
  // 是否依赖Palace服务
  bool dependPalace = 10;
  // 选择团队, 为空则默认为所有团队
  repeated uint32 teams = 11;
  // metrics配置
  string metricsToken = 19;
  // log配置
  pkg.conf.Log log = 20;
}

message Watch {
  message Strategy {
    // 超时时间
    google.protobuf.Duration timeout = 1;
    // 执行频率 cron 表达式
    string interval = 2;
  }
  message AlertEvent {
    // 超时时间
    google.protobuf.Duration timeout = 1;
    // 执行频率
    google.protobuf.Duration interval = 2;
  }
  Strategy strategy = 1;
  AlertEvent alertEvent = 2;
}
```