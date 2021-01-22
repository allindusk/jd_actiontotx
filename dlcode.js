'use strict';
let request = require('request')
let fs = require('fs')

const urlarr = require('./config').geturlarr();
// console.log(urlarr)
dlcodefile(urlarr)

function dlcodefile(urlarr){
  for (const urlstr of urlarr) {
    let scriptname = (/raw\/.*\/(.*\.js)/).exec(urlstr)[1]
    console.log(urlstr)
    request.get({
        url: urlstr,
      },
      (err, resp, body) => {
        if(err){
          console.log(err)
        }else if(resp.statusCode==200){
          fs.writeFile(`${__dirname}/script/${scriptname}`,String(body), error =>{
            if (error) {console.log(`写入失败:${error}`)
            }else {console.log(`写入成功:${scriptname}`)}
          })
        }else{console.log(body)}
      }
    )
  }
}
