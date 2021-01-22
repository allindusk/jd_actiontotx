'use strict';
/**
- 仓库列表
  - https://github.com/LXK9301/jd_scripts
  - https://github.com/shylocks/Loon
  - https://gitee.com/lxk0301/jd_scripts
 */
let scriptobj_shell = {
//==============限时=================
  jd_nianCollect:{//炸年兽专门收集爆竹  50 * * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_nianCollect.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_nianCollect.js&&'
  },
  jd_firecrackers:{//集鞭炮赢京豆  10 8,21 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_firecrackers.js',
    cron:{m:'13',h:'15,22'},
    shellcode:'node jd_firecrackers.js&&'
  },
  jd_immortal:{//京东神仙书院  20 8 * * * 
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_immortal.js',
    cron:{m:'13',h:'07,21'},
    shellcode:'node jd_immortal.js&&'
  },
  jd_nh:{//京东年货节  1 7 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_nh.js',
    cron:{m:'13',h:'06,22'},
    shellcode:'node jd_nh.js&&'
  },
  jd_nian:{//京东炸年兽  10 * * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_nian.js',
    cron:{m:'43',h:'08,20'},
    shellcode:'node jd_nian.js&&'
  },
  jd_nian_ar:{//京东炸年兽AR  0 9 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_nian_ar.js',
    cron:{m:'13',h:'21,23'},
    shellcode:'node jd_nian_ar.js&&'
  },
  jd_nian_sign:{//京东炸年兽签到任务  30 8 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_nian_sign.js',
    cron:{m:'13',h:'20,22'},
    shellcode:'node jd_nian_sign.js&&'
  },
  jd_nian_wechat:{//京东炸年兽小程序  50 8 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_nian_wechat.js',
    cron:{m:'43',h:'20,22'},
    shellcode:'node jd_nian_wechat.js&&'
  },
  jd_xg:{//小鸽有礼  5 7 * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_xg.js',
    cron:{m:'43',h:'06,22'},
    shellcode:'node jd_xg.js&&'
  },
  //==============常驻=================
  jd_gyec:{//工业品爱消除  20 * * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_gyec.js',
    cron:{m:'43',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_gyec.js&&'
  },
  jd_mh:{//盲盒抽京豆  1 7 * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_mh.js',
    cron:{m:'13',h:'06,19'},
    shellcode:'node jd_mh.js&&'
  },
  jd_xxl:{//东东爱消除  0 * * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_xxl.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_xxl.js&&'
  },
  jd_xxl_gh:{//个护爱消除  40 * * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_xxl_gh.js',
    cron:{m:'43',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_xxl_gh.js&&'
  },
  jd_ms:{//京东秒秒币  10 7 * * * 
    url:'https://github.com/shylocks/Loon/raw/main/jd_ms.js',
    cron:{m:'13',h:'06,19'},
    shellcode:'node jd_ms.js&&'
  },
  jd_bean_change:{//京豆变动通知  2 9 * * * 
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_bean_change.js',
    cron:{m:'13',h:'05'},
    shellcode:'node jd_bean_change.js&&'
  },
  jd_bean_home:{//领京豆额外奖励  10 7 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_bean_home.js',
    cron:{m:'13',h:'07,20'},
    shellcode:'node jd_bean_home.js&&'
  },
  jd_bookshop:{//口袋书店  1 8,12,18 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_bookshop.js',
    cron:{m:'13',h:'01,06,11,22'},
    shellcode:'node jd_bookshop.js&&'
  },
  jd_car:{//京东汽车  10 7 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_car.js',
    cron:{m:'13',h:'09,21'},
    shellcode:'node jd_car.js&&'
  },
  jd_cash:{//签到领现金  2 0 * * * 
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_cash.js',
    cron:{m:'13',h:'00,21'},
    shellcode:'node jd_cash.js&&'
  },
  jd_club_lottery:{//摇京豆  5 0 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_club_lottery.js',
    cron:{m:'13',h:'00,22'},
    shellcode:'node jd_club_lottery.js&&'
  },
  jd_crazy_joy:{//crazyJoy任务  10 7 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_crazy_joy.js',
    cron:{m:'13',h:'07,23'},
    shellcode:'node jd_crazy_joy.js&&'
  },
  jd_daily_egg:{//京东金融-天天提鹅  10 * * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_daily_egg.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_daily_egg.js&&'
  },
  jd_dreamFactory:{//京东京喜工厂  10 * * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_dreamFactory.js',
    cron:{m:'43',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_dreamFactory.js&&'
  },
  jd_family:{//京东家庭号  1 * * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_family.js',
    cron:{m:'43',h:'00,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_family.js&&'
  },
  jd_fruit:{//东东农场  5 6-18/6 * * * 
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_fruit.js',
    cron:{m:'13',h:'07,13,20'},
    shellcode:'node jd_fruit.js&&'
  },
  jd_jdfactory:{//东东工厂  10 * * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_jdfactory.js',
    cron:{m:'43',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_jdfactory.js&&'
  },
  jd_jdzz:{//京东赚赚  10 0 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_jdzz.js',
    cron:{m:'43',h:'00,22'},
    shellcode:'node jd_jdzz.js&&'
  },
  jd_joy:{//jd宠汪汪  15 0-23/2 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_joy.js',
    cron:{m:'13',h:'00,02,04,06,08,10,12,14,16,18,20,22'},
    shellcode:'node jd_joy.js&&'
  },
  jd_joy_feedPets:{//京东宠汪汪喂食  15 0-23/1 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_joy_feedPets.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_joy_feedPets.js&&'
  },
  jd_joy_steal:{//宠汪汪偷好友积分与狗粮  0 0-10/2 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_joy_steal.js',
    cron:{m:'43',h:'00,02,04,06,08,10,21'},
    shellcode:'node jd_joy_steal.js&&'
  },
  jd_jxnc:{//京喜农场  0 9,12,18 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_jxnc.js',
    cron:{m:'43',h:'06,07,22'},
    shellcode:'node jd_jxnc.js&&'
  },
  jd_kd:{//京东快递签到  10 0 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_kd.js',
    cron:{m:'43',h:'00,17'},
    shellcode:'node jd_kd.js&&'
  },
  jd_moneyTree:{//京东摇钱树  3 0-23/2 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_moneyTree.js',
    cron:{m:'43',h:'00,02,04,06,08,10,12,14,16,18,20,22'},
    shellcode:'node jd_moneyTree.js&&'
  },
  jd_necklace:{//点点券  10 0,20 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_necklace.js',
    cron:{m:'13',h:'00,20'},
    shellcode:'node jd_necklace.js&&'
  },
  jd_pet:{//东东萌宠  15 6-18/6 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_pet.js',
    cron:{m:'13',h:'06,12,18'},
    shellcode:'node jd_pet.js&&'
  },
  jd_pigPet:{//京东金融养猪猪  12 * * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_pigPet.js',
    cron:{m:'13',h:'00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'},
    shellcode:'node jd_pigPet.js&&'
  },
  jd_plantBean:{//种豆得豆  1 7-21/2 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_plantBean.js',
    cron:{m:'13',h:'07,09,11,13,15,17,19,21'},
    shellcode:'node jd_plantBean.js&&'
  },
  jd_redPacket:{//京东全民开红包  1 1 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_redPacket.js',
    cron:{m:'43',h:'00,19'},
    shellcode:'node jd_redPacket.js&&'
  },
  jd_shop:{//进店领豆  10 0 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_shop.js',
    cron:{m:'13',h:'00,20'},
    shellcode:'node jd_shop.js&&'
  },
  jd_small_home:{//东东小窝  16 22 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_small_home.js',
    cron:{m:'13',h:'22,23'},
    shellcode:'node jd_small_home.js&&'
  },
  jd_speed:{//京东天天加速  8 0-23/3 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_speed.js',
    cron:{m:'13',h:'00,03,06,09,12,15,18,21'},
    shellcode:'node jd_speed.js&&'
  },
  jd_superMarket:{//东东超市  11 1-23/5 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_superMarket.js',
    cron:{m:'13',h:'01,06,11,16,21,23'},
    shellcode:'node jd_superMarket.js&&'
  },
  jd_syj:{//十元街  10 7 * * * 
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_syj.js',
    cron:{m:'13',h:'07,22'},
    shellcode:'node jd_syj.js&&'
  },
  jd_unsubscribe:{//取关京东店铺和商品  55 23 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_unsubscribe.js',
    cron:{m:'43',h:'23'},
    shellcode:'node jd_unsubscribe.js&&'
  },
  jx_sign:{//京喜签到  5 0 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jx_sign.js',
    cron:{m:'13',h:'00,23'},
    shellcode:'node jx_sign.js&&'
  },
}
let scriptobj_async = {
//==============限时=================
  jd_live_redrain2:{//超级直播间红包雨  0,1 19-21/1 * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_live_redrain2.js',
  },
  jd_live_redrain_half:{//半点红包雨  30,31 12-23/1 * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_live_redrain_half.js',
  },
  jd_live_redrain_nian:{//年货直播红包雨  0 0,9,11,13,15,17,19,20,21,23 3,5,20-30/1 1,2 *
    url:'https://github.com/shylocks/Loon/raw/main/jd_live_redrain_nian.js',
  },
  jd_live_redrain_offical:{//官方号直播红包雨  0 0,9,11,13,15,17,19,20,21,22,23 * * *
    url:'https://github.com/shylocks/Loon/raw/main/jd_live_redrain_offical.js',
  },
//==============常驻=================
  jd_live:{//京东直播，每日18豆  10-20/5 12 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_live.js',
  },
  jd_car_exchange:{//京东汽车兑换       0 0 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_car_exchange.js',
  },
  jd_blueCoin:{//东东超市兑换奖品        0 0 0 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_blueCoin.js',
  },
  jd_get_share_code:{//一键获取所有需要互助类脚本的互助码        20 13 * * 6 
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_get_share_code.js',
  },
  jd_crazy_joy_coin:{//crazy joy挂机领金币  云函数顶不住不运行
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_crazy_joy_coin.js',
  },
  jd_joy_help:{//宠汪汪强制为别人助力  
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_joy_help.js',
  },
  jd_joy_run:{//宠汪汪邀请助力与赛跑助力脚本  token时效很短，几个小时就失效了,闲麻烦的放弃就行
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_joy_run.js',
  },
  jd_lotteryMachine:{//京东抽奖机
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_lotteryMachine.js',
  },
  jd_petTreasureBox:{//聚宝盆投狗粮辅助  0 9,12,18 * * *
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_petTreasureBox.js',
  },
  jd_rankingList:{//京东排行榜  自用
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_rankingList.js',
  },
  jd_unbind:{//注销京东会员卡  55 23 * * 6
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_unbind.js',
  },
  jd_bean_sign:{//京豆签到
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jd_bean_sign.js'
  },
}
let scriptobj_env = {
  sendNotify:{//jd通知
    url:'https://github.com/LXK9301/jd_scripts/raw/master/sendNotify.js'
  },
  jdCookie:{//jdCookie
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdCookie.js'
  },
  USER_AGENTS:{//云端UA
    url:'https://github.com/LXK9301/jd_scripts/raw/master/USER_AGENTS.js'
  },
  jdDreamFactoryShareCodes:{//京喜工厂互助码
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdDreamFactoryShareCodes.js'
  },
  jdFactoryShareCodes:{//东东工厂互助码
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdFactoryShareCodes.js'
  },
  jdFruitShareCodes:{//东东农场互助码
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdFruitShareCodes.js'
  },
  jdJxncShareCodes:{//京喜农场助力码
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdJxncShareCodes.js'
  },
  jdJxncTokens:{//京喜农场 Tokens
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdJxncTokens.js'
  },
  jdPetShareCodes:{//东东萌宠互助码
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdPetShareCodes.js'
  },
  jdPlantBeanShareCodes:{//京东种豆得豆互助码
    url:'https://github.com/LXK9301/jd_scripts/raw/master/jdPlantBeanShareCodes.js'
  },
}

let scriptobj = Object.assign({},scriptobj_shell,scriptobj_async,scriptobj_env)
// console.log(scriptobj)

function getshellstr(){
  let shellstr = ''
  const date = new Date();
  let hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  hour = hour.length<2?`0${hour}`:hour
  minute = minute.length<2?`0${minute}`:minute
  for (const key in scriptobj_shell) {
    let cron = scriptobj_shell[key]['cron']
    let shellcode = scriptobj_shell[key]['shellcode']
    if(cron.m.includes(minute)&&cron.h.includes(hour)){
      shellstr+=shellcode
    }
  }
  return shellstr.substr(0,shellstr.length-2)
}

function geturlarr(){
  let urlarr = []
  for (const key in scriptobj) {
    urlarr.push(scriptobj[key]['url']);
  }
  return urlarr
}

module.exports = {
  getshellstr,
  geturlarr,
}