`brew install wrk`
> `wrk -t12 -c400 -d30s http://www.baidu.com`
- 这条命令表示，利用 wrk 对 www.baidu.com 发起压力测试，线程数为 12，模拟 400 个并发请求，持续 30 秒。
```
Options:                                           
     -c, --connections <N>     跟服务器建立并保持的TCP连接数量 
     -d, --duration       <T>      压测时间          
     -t, --threads         <N>      使用多少个线程进行压测                                                        
     -s, --script            <S>      指定Lua脚本路径      
     -H, --header         <H>     为每一个HTTP请求添加HTTP头     
           --latency                     在压测结束后，打印延迟统计信息  
           --timeout         <T>      超时时间    
     -v, --version                       打印正在使用的wrk的详细版本信息
```
- 线程数不是设置的越大越好，推荐设置成压测机器CPU核心数的2倍到4倍。线程设置过大会导致线程切换过于频繁，效果降低
```
Running 30s test @ http://www.baidu.com (压测时间30s)
   12 threads and 400 connections (共12个测试线程，400个连接)
   Thread Stats   Avg(平均值)     Stdev(标准差)           Max(最大值)         +/- Stdev(正负一个标准差所占比例)
     Latency         386.32ms         380.75ms                 2.00s                     86.66%
     Req/Sec        17.06                13.91                       252.00                   87.89%
   Latency Distribution (延迟分布)
      50%  218.31ms
      75%  520.60ms
      90%  955.08ms
      99%    1.93s
   4922 requests in 30.06s, 73.86MB read (30.06s内处理了4922个请求，耗费流量73.86MB)
   Socket errors: connect 0, read 0, write 0, timeout 311 (错误统计)
Requests/sec:    163.76 (QPS 163.76,即平均每秒处理请求数为163.76)
Transfer/sec:      2.46MB (平均每秒流量2.46MB)
```

- LUA