'use strict';
exports.main_handler = async (event, context) => {
    console.log(event["Message"],__dirname);
    //async_jd?jd1.js&&jd2.js
    let mesarr = event["Message"].split("?")
    let script_folderpath = `${__dirname}/script/`
    let scripstr='',runtype = mesarr[0]
    if (runtype=='async_jd') {
      scripstr = mesarr[1]
    }else if(runtype=='noasync_jd'){
      scripstr = require('./config').getnoasyncarr()
    }
    for (const scriptname of scripstr.split("&&")) {
      const scriptPath = script_folderpath+scriptname
      console.log(`运行:${scriptPath}`)
      if (runtype=='async_jd') {
        async_run(scriptPath)
      }else if(runtype=='noasync_jd'){
        await noasync_run(scriptPath)
      }
    }
};
function async_run(scriptPath){
  delete require.cache[require.resolve(scriptPath)];
  require(scriptPath)
}
function noasync_run(modulePath){
  return new Promise(resolve => {
    let fork = require('child_process').fork;
    let childrt = fork(modulePath,{silent:true});
    childrt.stdout.setEncoding('utf8');
    childrt.stdout.on('data',data => {
      console.log(data);
      resolve()
    });
    childrt.stderr.setEncoding('utf8')
    childrt.stderr.on('data',data => {
      console.log(data);
      resolve()
    })
  })
}