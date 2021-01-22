'use strict';
exports.main_handler = async (event, context) => {
    console.log(event["Message"]);
    console.log(__dirname)

    let mesarr = event["Message"].split("?")
    let script_folderpath = `${__dirname}/script`
    if (mesarr[0]=='async_jd') {
      //async_jd-jd1.js&&jd2.js
      run_async(mesarr[1],script_folderpath)
    }else if(mesarr[0]=='shell_jd'){
      const shellcode = require('./config').getshellstr()
      const shell_str = `cd ${script_folderpath}&&${shellcode}`
      run_shell(shell_str)
    }
};
function run_async(scripstr,script_folderpath){
  for (const scriptname of scripstr.split("&&")) {
    console.log(`开始执行 ${scriptname}`);
    const scrippath = `${script_folderpath}/${scriptname}`
    delete require.cache[require.resolve(scrippath)];
    require(scrippath)
  }
}
function run_shell(shell_str){
  const exec = require('child_process').exec;
  exec(shell_str, (err,stdout,stderr)=>{
      if(err) {
        console.log(stderr);
      } else {
        console.log(stdout);
      }
  });
}