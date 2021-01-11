'use strict';
let request = require('request')
let fs = require('fs')

let urlarr = [
  //jd通知
  'https://github.com/lxk0301/jd_scripts/raw/master/sendNotify.js',
  //京东汽车兑换  "0 0 * * *"
  'https://github.com/lxk0301/jd_scripts/raw/master/jd_car_exchange.js',
]
for (const urlstr of urlarr) {
  let scriptname = (/raw\/.*\/(.*\.js)/).exec(urlstr)[1]
  request.get({
      url:urlstr,
      timeout:3000},
    (err, resp, body) => {
      if(resp.statusCode==200){
        fs.writeFile(__dirname+`/jd_script/${scriptname}`,String(body), function (error) {
          if (error) {console.log(`写入失败 ${scriptname}`)
          }else {console.log(`写入成功 ${scriptname}`)}
        })
      }else{console.log(body)}
      if(err){console.log(err)}
    }
  )
}