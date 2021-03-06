/**
  - 仓库列表
  - https://github.com/LXK9301/jd_scripts/raw/master
  - https://github.com/shylocks/Loon/raw/main
  - https://gitee.com/lxk0301/jd_scripts/raw/master
  - https://github.com/allindusk/codebackup_ym/raw/shy/jd_gyec.js
  - https://github.com/allindusk/jd_xmly/raw/main/jx_cfd.js
  - https://github.com/yangtingxiao/QuantumultX/raw/master/scripts/jd/jd_lotteryMachine.js
  - https://github.com/allindusk/codebackup_ym/raw/master/index.js
 */

// let cronconfig = process.env.CRON_CONFIG?JSON.parse(process.env.CRON_CONFIG):""
//{"scripts1":{"cron":{"m":"13","h":"02"}},"scripts2":{"cron":{"m":"13","h":"02"}}}

let runconfig = process.env.RUN_CONFIG?JSON.parse(process.env.RUN_CONFIG):""
//{"jd_bean_change":{"run":"true"},"jd_bean_sign":{"run":"true"}}

let scriptobj_noasync = {
//======限时=================
//======常驻=================
  jd_sgmh:{//闪购盲盒  20 8 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_sgmh.js',
    cron:{m:'43',h:'16'},
    run:runconfig['jd_sgmh']?runconfig['jd_sgmh']['run']:'true',
    shellcode:'node jd_sgmh.js&&'
  },
  jd_beauty:{//美丽研究院  1 7,12,19 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_beauty.js',
    cron:{m:'43',h:'06,11,18'},
    run:runconfig['jd_beauty']?runconfig['jd_beauty']['run']:'false',
    shellcode:'node jd_beauty.js&&'
  },
  jd_cfd:{//京喜财富岛  0 * * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_cfd.js',
    cron:{m:'43',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    run:runconfig['jd_cfd']?runconfig['jd_cfd']['run']:'true',
    shellcode:'node jd_cfd.js&&'
  },
  jd_ms:{//京东秒秒币  10 7 * * * 
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_ms.js',
    cron:{m:'43',h:'19'},
    run:runconfig['jd_ms']?runconfig['jd_ms']['run']:'true',
    shellcode:'node jd_ms.js&&'
  },
  jd_bean_change:{//京豆变动通知  2 9 * * * 
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_bean_change.js',
    cron:{m:'13',h:'05'},
    run:runconfig['jd_bean_change']?runconfig['jd_bean_change']['run']:'true',
    shellcode:'node jd_bean_change.js&&'
  },
  jd_bean_home:{//领京豆额外奖励  10 7 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_bean_home.js',
    cron:{m:'13',h:'07'},
    run:runconfig['jd_bean_home']?runconfig['jd_bean_home']['run']:'true',
    shellcode:'node jd_bean_home.js&&'
  },
  jd_bookshop:{//口袋书店  1 8,12,18 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_bookshop.js',
    cron:{m:'13',h:'01,05,11,22'},
    run:runconfig['jd_bookshop']?runconfig['jd_bookshop']['run']:'true',
    shellcode:'node jd_bookshop.js&&'
  },
  jd_car:{//京东汽车  10 7 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_car.js',
    cron:{m:'13',h:'09'},
    run:runconfig['jd_car']?runconfig['jd_car']['run']:'true',
    shellcode:'node jd_car.js&&'
  },
  jd_cash:{//签到领现金  2 0 * * * 
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_cash.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    run:runconfig['jd_cash']?runconfig['jd_cash']['run']:'true',
    shellcode:'node jd_cash.js&&'
  },
  jd_club_lottery:{//摇京豆  5 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_club_lottery.js',
    cron:{m:'13',h:'01'},
    run:runconfig['jd_club_lottery']?runconfig['jd_club_lottery']['run']:'true',
    shellcode:'node jd_club_lottery.js&&'
  },
  jd_crazy_joy:{//crazyJoy任务  10 7 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_crazy_joy.js',
    cron:{m:'13',h:'07'},
    run:runconfig['jd_crazy_joy']?runconfig['jd_crazy_joy']['run']:'true',
    shellcode:'node jd_crazy_joy.js&&'
  },
  jd_daily_egg:{//京东金融-天天提鹅  10 * * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_daily_egg.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    run:runconfig['jd_daily_egg']?runconfig['jd_daily_egg']['run']:'true',
    shellcode:'node jd_daily_egg.js&&'
  },
  jd_dreamFactory:{//京东京喜工厂  10 * * * * 黑了
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_dreamFactory.js',
    cron:{m:'43',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22'},
    run:runconfig['jd_dreamFactory']?runconfig['jd_dreamFactory']['run']:'true',
    shellcode:'node jd_dreamFactory.js&&'
  },
  jd_jdfactory:{//东东工厂  10 * * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_jdfactory.js',
    cron:{m:'43',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22'},
    run:runconfig['jd_jdfactory']?runconfig['jd_jdfactory']['run']:'true',
    shellcode:'node jd_jdfactory.js&&'
  },
  jd_jdzz:{//京东赚赚  10 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_jdzz.js',
    cron:{m:'43',h:'19'},
    run:runconfig['jd_jdzz']?runconfig['jd_jdzz']['run']:'true',
    shellcode:'node jd_jdzz.js&&'
  },
  jd_joy:{//jd宠汪汪  15 0-23/2 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_joy.js',
    cron:{m:'13',h:'00,02,04,06,08,10,12,14,16,18,20,22'},
    run:runconfig['jd_joy']?runconfig['jd_joy']['run']:'true',
    shellcode:'node jd_joy.js&&'
  },
  jd_joy_feedPets:{//京东宠汪汪喂食  15 0-23/1 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_joy_feedPets.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    run:runconfig['jd_joy_feedPets']?runconfig['jd_joy_feedPets']['run']:'false',
    shellcode:'node jd_joy_feedPets.js&&'
  },
  jd_joy_steal:{//宠汪汪偷好友积分与狗粮  10 0-21/3 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_joy_steal.js',
    cron:{m:'13',h:'00,03,06,09,12,15,18,21'},
    run:runconfig['jd_joy_steal']?runconfig['jd_joy_steal']['run']:'false',
    shellcode:'node jd_joy_steal.js&&'
  },
  jd_jxnc:{//京喜农场  0 9,12,18 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_jxnc.js',
    cron:{m:'43',h:'00,20'},
    run:runconfig['jd_jxnc']?runconfig['jd_jxnc']['run']:'true',
    shellcode:'node jd_jxnc.js&&'
  },
  jd_kd:{//京东快递签到  10 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_kd.js',
    cron:{m:'43',h:'17'},
    run:runconfig['jd_kd']?runconfig['jd_kd']['run']:'true',
    shellcode:'node jd_kd.js&&'
  },
  jd_moneyTree:{//京东摇钱树  3 0-23/2 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_moneyTree.js',
    cron:{m:'43',h:'00,02,04,06,08,10,12,14,16,18,21,22'},
    run:runconfig['jd_moneyTree']?runconfig['jd_moneyTree']['run']:'true',
    shellcode:'node jd_moneyTree.js&&'
  },
  jd_necklace:{//点点券  10 0,20 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_necklace.js',
    cron:{m:'43',h:'01,19'},
    run:runconfig['jd_necklace']?runconfig['jd_necklace']['run']:'true',
    shellcode:'node jd_necklace.js&&'
  },
  jd_pet:{//东东萌宠  15 6-18/6 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_pet.js',
    cron:{m:'13',h:'06,12,18'},
    run:runconfig['jd_pet']?runconfig['jd_pet']['run']:'true',
    shellcode:'node jd_pet.js&&'
  },
  jd_pigPet:{//京东金融养猪猪  12 * * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_pigPet.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    run:runconfig['jd_pigPet']?runconfig['jd_pigPet']['run']:'true',
    shellcode:'node jd_pigPet.js&&'
  },
  jd_plantBean:{//种豆得豆  1 7-21/2 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_plantBean.js',
    cron:{m:'13',h:'08,09,11,13,15,17,19,21'},
    run:runconfig['jd_plantBean']?runconfig['jd_plantBean']['run']:'true',
    shellcode:'node jd_plantBean.js&&'
  },
  jd_redPacket:{//京东全民开红包  1 1 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_redPacket.js',
    cron:{m:'43',h:'01'},
    run:runconfig['jd_redPacket']?runconfig['jd_redPacket']['run']:'true',
    shellcode:'node jd_redPacket.js&&'
  },
  jd_shop:{//进店领豆  10 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_shop.js',
    cron:{m:'43',h:'10'},
    run:runconfig['jd_shop']?runconfig['jd_shop']['run']:'true',
    shellcode:'node jd_shop.js&&'
  },
  jd_small_home:{//东东小窝  16 22 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_small_home.js',
    cron:{m:'43',h:'03'},
    run:runconfig['jd_small_home']?runconfig['jd_small_home']['run']:'true',
    shellcode:'node jd_small_home.js&&'
  },
  jd_speed:{//京东天天加速  8 0-23/3 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_speed.js',
    cron:{m:'13',h:'00,03,06,09,12,15,18,21'},
    run:runconfig['jd_speed']?runconfig['jd_speed']['run']:'true',
    shellcode:'node jd_speed.js&&'
  },
  jd_superMarket:{//东东超市  11 1-23/5 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_superMarket.js',
    cron:{m:'13',h:'01,06,11,16,21,23'},
    run:runconfig['jd_superMarket']?runconfig['jd_superMarket']['run']:'true',
    shellcode:'node jd_superMarket.js&&'
  },
  jd_syj:{//十元街  10 7 * * * 
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_syj.js',
    cron:{m:'13',h:'08'},
    run:runconfig['jd_syj']?runconfig['jd_syj']['run']:'true',
    shellcode:'node jd_syj.js&&'
  },
  jd_unsubscribe:{//取关京东店铺和商品  55 23 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_unsubscribe.js',
    cron:{m:'43',h:'03,05'},
    run:runconfig['jd_unsubscribe']?runconfig['jd_unsubscribe']['run']:'true',
    shellcode:'node jd_unsubscribe.js&&'
  },
  jx_sign:{//京喜签到  5 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jx_sign.js',
    cron:{m:'13',h:'00,01'},
    run:runconfig['jx_sign']?runconfig['jx_sign']['run']:'true',
    shellcode:'node jx_sign.js&&'
  },
  jd_bean_sign:{//京东每日签到 0 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_bean_sign.js',
    cron:{m:'13',h:'00'},
    run:runconfig['jd_bean_sign']?runconfig['jd_bean_sign']['run']:'true',
    shellcode:'node jd_bean_sign.js&&'
  },
  jd_rankingList:{//京东排行榜  19 16 * * *
    url:'https://github.com/yangtingxiao/QuantumultX/raw/master/scripts/jd/jd_rankingList.js',
    cron:{m:'13',h:'09'},
    run:runconfig['jd_rankingList']?runconfig['jd_rankingList']['run']:'true',
    shellcode:'node jd_rankingList.js&&'
  },
  jd_fruit:{//东东农场  5 6-18/6 * * * 
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_fruit.js',
    cron:{m:'13',h:'07,13,20'},
    run:runconfig['jd_fruit']?runconfig['jd_fruit']['run']:'true',
    shellcode:'node jd_fruit.js&&'
  },
}
let scriptobj_async = {
//======限时=================

//======常驻=================
  jd_lotteryMachine:{//京东抽奖机   17 23 * * * 超时
    url:'https://github.com/yangtingxiao/QuantumultX/raw/master/scripts/jd/jd_lotteryMachine.js',
  },
  jd_car_exchange:{//京东汽车兑换       0 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_car_exchange.js',
  },
  jd_blueCoin:{//东东超市兑换奖品        0 0 0 * * *
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_blueCoin.js',
  },
  jd_get_share_code:{//一键获取所有需要互助类脚本的互助码        20 13 * * 6 
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_get_share_code.js',
  },
  jd_crazy_joy_coin:{//crazy joy挂机领金币  云函数顶不住不运行
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_crazy_joy_coin.js',
  },
  jd_joy_help:{//宠汪汪强制为别人助力
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_joy_help.js',
  },
  jd_joy_run:{//宠汪汪邀请助力与赛跑助力脚本  token时效很短，几个小时就失效了,闲麻烦的放弃就行
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_joy_run.js',
  },
  jd_unbind:{//注销京东会员卡  55 23 * * 6
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jd_unbind.js',
  },
}
let scriptobj_env = {
  sendNotify:{//jd通知
    url:'https://github.com/allindusk/codebackup_ym/raw/master/sendNotify.js'
  },
  jdCookie:{//jdCookie
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdCookie.js'
  },
  USER_AGENTS:{//云端UA
    url:'https://github.com/allindusk/codebackup_ym/raw/master/USER_AGENTS.js'
  },
  jdDreamFactoryShareCodes:{//京喜工厂互助码
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdDreamFactoryShareCodes.js'
  },
  jdFactoryShareCodes:{//东东工厂互助码
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdFactoryShareCodes.js'
  },
  jdFruitShareCodes:{//东东农场互助码
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdFruitShareCodes.js'
  },
  jdJxncShareCodes:{//京喜农场助力码
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdJxncShareCodes.js'
  },
  jdJxncTokens:{//京喜农场 Tokens
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdJxncTokens.js'
  },
  jdPetShareCodes:{//东东萌宠互助码
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdPetShareCodes.js'
  },
  jdPlantBeanShareCodes:{//京东种豆得豆互助码
    url:'https://github.com/allindusk/codebackup_ym/raw/master/jdPlantBeanShareCodes.js'
  },
  jdShareCodes:{//从日志中获取互助码
    url:'https://github.com/allindusk/codebackup_ym/raw/master/utils/jdShareCodes.js'
  },
}

let scriptobj = Object.assign({},scriptobj_noasync,scriptobj_async,scriptobj_env)
// console.log()
// allnoasyncstr()
function allnoasyncstr(){
  for (let index = 0; index < 24; index++) {
    ['13','43'].forEach(minute => {
      const tmpi = index.toString()
      let scriptstr = '',snum = 0,hour = tmpi.length<2?'0'+tmpi:tmpi
      for (const sname in scriptobj_noasync) {
        let cron = scriptobj_noasync[sname]['cron']
        if(cron.m.includes(minute)&&cron.h.includes(hour)&&scriptobj_noasync[sname]['run']=='true'){
          scriptstr+=sname+'|'
          snum++
        }
      }
      console.log(`${hour}:${minute}共${snum}个`,scriptstr)
    });
  }
}
function getnoasyncstr(){
  let scriptstr = ''
  const date = new Date();
  date.setHours(date.getHours() + 8)
  let hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  hour = hour.length<2?`0${hour}`:hour
  minute = minute.length<2?`0${minute}`:minute
  for (const sname in scriptobj_noasync) {
    let cron = scriptobj_noasync[sname]['cron']
    if(cron.m.includes(minute)&&cron.h.includes(hour)&&scriptobj_noasync[sname]['run']=='true'){
      scriptstr+=`${sname}.js&&`
    }
  }
  return scriptstr.substr(0,scriptstr.length-2)
}
// console.log(geturlarr())
function geturlarr(){
  let urlarr = []
  for (const key in scriptobj) {
    let url = scriptobj[key]['url']
    if (url) {
      if (!url.includes("codebackup_ym/raw/master")) {
        urlarr.push(scriptobj[key]['url']);
      }
    }
  }
  return urlarr
}

module.exports = {
  getnoasyncstr,
  allnoasyncstr,
  geturlarr,
}