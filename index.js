'use strict';
let cpfork = require('child_process').fork;

exports.main_handler = async (event, context) => {
    console.log(event["Message"],__dirname);
    //async_jd?jd1.js&&jd2.js
    let mesarr = event["Message"].split("?")
    let script_folderpath = './script/'
    let scripstr='',runtype = mesarr[0]
    if (runtype=='async_jd') {
      scripstr = mesarr[1]
    }else if(runtype=='noasync_jd'){
      scripstr = require('./config.js').getnoasyncarr()
    }
    for (const scriptname of scripstr.split("&&")) {
      const scriptPath = script_folderpath+scriptname
      console.log(`${new Date().toTimeString().substr(0,17)}===运行${scriptPath}`);
      if (runtype=='async_jd') {
        async_run(scriptPath)
      }else if(runtype=='noasync_jd'){
        await noasync_run(scriptPath)
      }
    }
};
function async_run(modulePath){
  let childrt = cpfork(modulePath,{silent:true});
  let runendstr = ''
  childrt.stdout.setEncoding('utf8');
  childrt.stdout.on('data',data => {
    runendstr+=data
  });
  childrt.stderr.setEncoding('utf8')
  childrt.stderr.on('data',data => {
    runendstr+=data
  })
  childrt.on('close', (code) => {
    runendlog(runendstr,modulePath,code)
  });  
}
function noasync_run(modulePath){
  return new Promise(resolve => {
    let childrt = cpfork(modulePath,{silent:true});
    let runendstr = ''
    childrt.stdout.setEncoding('utf8');
    childrt.stdout.on('data',data => {
      runendstr+=data
    });
    childrt.stderr.setEncoding('utf8')
    childrt.stderr.on('data',data => {
      runendstr+=data
    })
    childrt.on('close', (code) => {
      runendlog(runendstr,modulePath,code)
      resolve()
    });
  })
}
function runendlog(runendstr,modulePath,code){
  console.log(`${runendstr}\n${new Date().toTimeString().substr(0,17)}===子进程:${modulePath}使用代码${code}关闭所有stdio`);
}