## jd_actiontotx
- [x] 测试是否可以热更新，仓库里新建一个文件，云函数建两个cron，一个执行代码，一个执行更新文件
**结论：腾讯云函数没有写入权限**
- [ ] 测试执行脚本文件是否能同步
**结论：用shell命令执行比较省心**
- [ ] 整理架构，把cron整合进脚本，旨在突破云函数触发器上限
  - 读取配置的一个脚本
    - 创建ym脚本对应的cron对象，包含h、m属性
      ```
      function getScript_byCron(){
        if(scriptcron.h.indexof(nowh)>-1&&scriptcron.m.indexof(nowm)){
          scriptname+='script&'
        }
        return scriptname//处理&
      }
      ```
- [ ] 执行脚本分为同步执行和异步执行，上面的可以定为同步，异步的采用直接穿脚本名字执行的方式，不通过上面的配置文件。定时任务传参：isasync-脚本名,noasync的脚本名通过配置获取
