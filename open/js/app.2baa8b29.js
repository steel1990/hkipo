(function(n){function e(e){for(var d,i,r=e[0],c=e[1],s=e[2],p=0,m=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(n[d]=c[d]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],d=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(d=!1)}d&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var d={},a={app:0},o=[];function i(e){if(d[e])return d[e].exports;var t=d[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=d,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var d in n)i.d(t,d,function(e){return n[e]}.bind(null,d));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="https://steel1990.gitee.io/hkipo/open/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";t("85ec")},"0ab0":function(n,e,t){"use strict";t("c432")},3194:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var d=t("2b0e"),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("Page",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],i=t("b970"),r=(t("157a"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("van-sticky",[t("van-dropdown-menu",[t("van-dropdown-item",{attrs:{options:n.appOptions},on:{change:n.onSelectApp},model:{value:n.current,callback:function(e){n.current=e},expression:"current"}}),t("van-dropdown-item",{attrs:{options:n.filterOptions},on:{change:n.onFilterChange},model:{value:n.filterType,callback:function(e){n.filterType=e},expression:"filterType"}}),t("van-dropdown-item",{attrs:{options:n.articleOptions},on:{change:n.onSelectArticle},model:{value:n.articleIndex,callback:function(e){n.articleIndex=e},expression:"articleIndex"}})],1)],1),t("van-popup",{staticClass:"article-popup",on:{close:n.hideArticle},model:{value:n.articleVisible,callback:function(e){n.articleVisible=e},expression:"articleVisible"}},[n.article?t("Article",{attrs:{article:n.article}}):n._e(),t("van-icon",{staticClass:"popup-close-icon",attrs:{color:"red",size:"20",name:"cross"},on:{click:n.hideArticle}})],1),t("div",{attrs:{id:"list"}},n._l(n.list,(function(n,e){return t("Card",{key:e,ref:"card-"+e,refInFor:!0,attrs:{data:n}})})),1)],1)}),c=[],s=(t("99af"),t("4de4"),t("7db0"),t("caad"),t("d81d"),t("b0c0"),t("a9e3"),t("4d63"),t("ac1f"),t("25f0"),t("2532"),"./"),l=s+"logo/",p=[{name:"富途牛牛",openLink:"https://growth1.futunn.com/common-invite/temp/96?code=87055a0e726b01edf8ed78135e57347b&channel=535&subchannel=10001&fx=23",logo:l+"futu.jpeg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"银证转账",good:!0},{name:"自有暗盘",good:!0},{name:"FPS入金"},{name:"现金打新50",bad:!0}],desc:["\n            <p>腾讯投资的互联网券商，暗盘交易价格比其他券商高很多。</p>\n            <dl>\n                <dt>【非港卡入金奖励】首次入金大于等于2万，可获4重福利 价值1000元奖励</dt>\n                <dt>首次净入金2万港币或等值美金，奖励3天年化15%的基金收益券+1次抽奖机会，100%中奖，平均价值300-400港币</dt>\n                <dt>交易佣金：</dt>\n                <dd>0.03%（最低3元）+平台费15元/笔，暗盘同</dd>\n            </dl>\n        "],tips:[]},{name:"辉立证券",openLink:"https://eforms.phillip.com.sg/Runtime/Runtime/Form/Introduction/?PromoCode=TTU4Mzk2NA==&Lang=zh-hk&AECode=CQ9968",logo:l+"phillip.png",tags:[{name:"现金打新免费",good:!0},{name:"打新套餐",good:!0},{name:"20倍打新",good:!0},{name:"FPS入金"},{name:"自有暗盘"},{name:"开户2周",bad:!0}],desc:["\n        <p>香港最大本地港美股券商，有暗盘，目前最适合港股打新的券商，0手续费，0佣金。</p>\n        <dl>\n            <dt>【打新套餐】：</dt>\n            <dd>认购1万元或以下, 提供十成孖展认购, 客户无需存入资金, $0手续费及免利息</dd>\n            <dd>认购5万元或以下, 提供十成孖展认购, 客户无需存入资金, $38手续费及免利息</dd>\n            <dd>认购10万元或以下, 辉立提供九成孖展认购, 客户需存入一成资金, $68手续费及免利息</dd>\n            <dd>认购20万元或以下, 辉立提供九成孖展认购, 客户需存入一成资金, $100手续费及免利息</dd>\n        </dl>\n        <p>通过本页面开户成功后，可获价值<b>700港元</b>的现金券，可用于减免佣金及打新手续费等，月底发放。</p>\n        <p>交易佣金：0.2%（最低75元），无平台费，暗盘同</p>\n        "],tips:[]},{name:"广发易淘金",openLink:"https://hd.gf.com.cn/gfhkstore/openSendStock/?isshare=1&invited=11600627&from=91505&isnew=1",logo:l+"gf.jpeg",tags:[{name:"入金奖励",good:!0},{name:"银证转账",good:!0},{name:"现金打新免费",good:!0},{name:"FPS入金"},{name:"电话暗盘",bad:!0},{name:"开户1周",bad:!0}],desc:["\n            <p><b>开户并入金1万港币，送16股安硕A50ETF，价值约350港币</b></p>\n            <p>支持民生、招行、永隆银证转账</p>\n            <dl>\n                <dt>交易佣金：</dt>\n                <dd>0.1%（最低100元），无平台费</dd>\n                <dd>暗盘150元起</dd>\n            </dl>\n        "],tips:[]},{name:"耀才证券",openLink:"https://chinaweb1.bsgroup.com.hk/campaign/oddlot/",logo:l+"yc.jpg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"现金打新免费",good:!0},{name:"银证转账",good:!0},{name:"融资额度足"},{name:"FPS入金"},{name:"自有暗盘"}],desc:["\n            <p>耀才证券，香港第二大证券公司，甲组10倍、乙组20倍，额度比较充足的券商，热门股融资额度一直排名前三。</p>\n            <dl>\n                <dt>开户奖励</dt>\n                <dd>首次入金至少10000港币，并于开户后90天内完成5次买入交易（注意：同一只股票同一天买入多次，只算一次交易），送2股阿里（次月中旬直接发至账户）</dd>\n            </dl>\n            <p><b></b></p>\n            <p>支持民生、招行银证转账，独立暗盘</p>\n            <p>交易佣金：0.01%（最低5元），无平台费，首年免佣，暗盘同</p>\n        "],tips:[]},{name:"华泰涨乐全球通",openLink:"https://gb.zhangle.com/views/new-customer-gift/index.htm?ciphertext=6ddc392d49f9f9b7d2d24237a3e1b1b03dcec73e9a20b8b578300d018f44b4f88b69d0657685dd9fc24efcccfe8b7dd1b78fde53f8b9d090111b4c244a1dbb2a",logo:l+"ht.jpeg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"会员打新免费",good:!0},{name:"FPS入金"},{name:"辉立暗盘"}],desc:["\n            <p><b>3.31 前开户即送30天V2会员和1股南方恒生科技ETF，首次入金≥20000港币送1股阿里巴巴+3股南方恒生科技ETF</b></p>\n            <p>会员（8港币每月）现金打新0，融资打新0，10-33倍杠杆</p>\n            <dl>\n                <dt>交易佣金：</dt>\n                <dd>会员0佣金+0平台费；非会员0.029%（最低2.9元）+ 平台费15元/笔</dd>\n                <dd>暗盘0.03%（最低3元）</dd>\n            </dl>\n        "],tips:[]},{name:"盈立智投",openLink:"https://m.yxzq.com/u/010000Ix1J",logo:l+"usmart.jpg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"现金打新5元",good:!0},{name:"FPS入金"},{name:"辉立暗盘"}],desc:["\n            <p><b>首次入金>=2万港币，送100现金券，入金>=5万港币送200现金券，10万以上送300现金券，现金券需要交易满指定额度才可兑换</b></p>\n            <dl>\n                <dt>交易佣金：</dt>\n                <dd>0.08%（最低8元），无平台费</dd>\n                <dd>暗盘0.08%（最低12元）</dd>\n            </dl>\n        "],tips:[]},{name:"尊嘉金融",openLink:"http://opt.investassistant.com/miningopt/roulette/index?channelopen=ZPWDAPP&hmsr=wechat&hmpl=b304c3d41751a4b2&hmcu=ZPWDAPP&hmkw=&hmci=&share=399864&miningfrom=wechat",logo:l+"zj.jpeg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"现金打新5元",good:!0},{name:"FPS入金"},{name:"永久免佣"},{name:"辉立暗盘"}],desc:["\n            <p><b>首次入金>=1万港币，获得一次轮盘赢股票的机会，价值一般</b></p>\n            <dl>\n                <dt>交易佣金：</dt>\n                <dd>0佣金+平台费1元/笔</dd>\n                <dd>暗盘0.05%（最低11.9元）</dd>\n            </dl>\n        "],tips:[]},{name:"富元环球",openLink:"https://sns.fyact.com/sunline/active/2019/official-friends-invite/?channelId=666&utm_source=Web&utm_medium=haoyouyaoqing&invUserId=686993&hashPath=invite/#/invite",logo:l+"fy.png",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"银证转账",good:!0},{name:"现金打新10元",good:!0},{name:"FPS入金"},{name:"辉立暗盘"}],desc:["\n            <dl>\n                <dt>入金奖励</dt>\n                <dd>首次入金>=1.1万港币，30天内不出金且任意交易一笔，可抽奖，100%中奖</dd>\n                <dd>奖品包含：飞天茅台，iPhone12 Pro、AirPods Pro、现金红包、铁塔股票、平安股票、美团股票、港股免佣券</dd>\n                <dt>支持民生香港、招商永隆银证转账</dt>\n                <dt>交易佣金：</dt>\n                <dd>0.029%（最低15元），无平台费</dd>\n                <dd>暗盘0.05%（最低15元）</dd>\n            </dl>\n        "],tips:[]},{name:"华盛证券",openLink:"https://hd.hstong.com/team-activity/2020/account/1?invite=WEYAS",logo:l+"hst.jpeg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"银证转账",good:!0},{name:"FPS入金"},{name:"辉立暗盘"},{name:"现金打新50元",bad:!0}],desc:["\n            <dl>\n                <dt>开户奖励</dt>\n                <dd>开户并认证为阿里巴巴员工，送100港币融资打新券12张</dd>\n                <dd>入金>=2万港币，送1股阿里巴巴股票</dd>\n                <dt>支持民生、招行、永隆银证转账</dt>\n                <dt>交易佣金：</dt>\n                <dd>0.03%（最低3元）+平台费15元/笔，暗盘同</dd>\n            </dl>\n        "],tips:[]},{name:"东方易赢",openLink:"https://app.dfzq.com.hk/app/download/index.html",logo:l+"dfyy.png",tags:[{name:"银证转账",good:!0},{name:"现金打新免费",good:!0},{name:"FPS入金"},{name:"辉立暗盘"},{name:"开户1周",bad:!0}],desc:["\n            <dl>\n                <dt>支持民生、招行银证转账</dt>\n                <dt>交易佣金：</dt>\n                <dd>0.1%，最低50元，平台费10元/笔，暗盘同</dd>\n            </dl>\n        "],tips:[]},{name:"东财国际证券",openLink:"https://hkkhapp.eastmoney.com/regist/Index?versionModel=H5&returl=hkreturl&notBackIndex=1&ad_id=zwtg_kh_act_xct_01_01_12_0&Channelname=12",logo:l+"dfcf.png",tags:[{name:"银证转账",good:!0},{name:"现金打新25"},{name:"FPS入金"},{name:"辉立暗盘"},{name:"开户1周",bad:!0}],desc:["\n            <dl>\n                <dt>支持民生、招行、工银银证转账</dt>\n                <dt>交易佣金：</dt>\n                <dd>0.025%（最低5元）+平台费15元/笔，暗盘同</dd>\n            </dl>\n        "],tips:[]},{name:"微牛",openLink:"https://act.webullzone.com/actv2/routine/invitation/cn/landing.html?inviteCode=UhtwsO7pJx3x&inviteSource=wb_invite_cn&source=main",logo:l+"wn.jpeg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"现金打新免费",good:!0},{name:"FPS入金"},{name:"无暗盘",bad:!0},{name:"无融资打新",bad:!0}],desc:["\n            <dl>\n                <dt>开户奖励</dt>\n                <dd><b>入金港股账户>=1万港币，放满30天并在30天内主动交易1笔，奖励1股美团</b></dd>\n                <dt>交易佣金：</dt>\n                <dd>0.02%（最低2港币）+ 平台费10元/笔</dd>\n            </dl>\n        "],tips:[]},{name:"老虎证券",openLink:"https://www-web.itiger.com/activity/forapp/invitation/*HWY22W-signup.html?invite=HWY22W#/",logo:l+"lh.jpeg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"美股打新",good:!0},{name:"FPS入金"},{name:"辉立暗盘"},{name:"现金打新50",bad:!0}],desc:["\n            <dl>\n                <dt>开户奖励</dt>\n                <dd>开户即送1股小米兑换券</dd>\n                <dd>首次入金3000美金及以上（或等值其他货币），可获得10股小米股票或200元人民币现金/或1股阿里港股</dd>\n                <dt>交易佣金：</dt>\n                <dd>0.029%+15元平台费，暗盘同</dd>\n            </dl>\n        "],tips:[]},{name:"青石证券",openLink:"http://enstatine.bluestonehk.com/wap/event/inviteActivity_share.html?invite=243574&activity=a201224388",logo:l+"qs.jpeg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"现金打新免费"},{name:"FPS入金"},{name:"辉立暗盘"}],desc:["\n            <dl>\n                <dt>开户奖励</dt>\n                <dd>入金大于1万港币（或等值美元），送一张15%收益基金加息券及价值360港元的融资打新券。</dd>\n                <dt>日均资产1万港币以上可享现金打新0(50先收后返），融资打新88（先收100，后返12）</dt>\n                <dt>交易佣金：</dt>\n                <dd>0.05%（最低40元），无平台费</dd>\n                <dd>暗盘0.05%(100元起)</dd>\n            </dl>\n        "],tips:[]},{name:"长桥证券",openLink:"https://activity.lbkrs.com/zh-CN/invite-friend/invite?type=share&invite-code=747088&channel=HM000001",logo:l+"cq.jpg",tags:[{name:"开户快",good:!0},{name:"入金奖励",good:!0},{name:"FPS入金"},{name:"辉立暗盘"},{name:"现金打新49",bad:!0}],desc:["\n            <dl>\n                <dt>开户奖励</dt>\n                <dd>入金超过2000美金或等值港币，奖励融资打新券2张（2*99港币）+现金打新券1张（49港币）+港股交易佣金50港币</dd>\n                <dt>交易佣金：</dt>\n                <dd>0.028%（最低15元），无平台费，暗盘同</dd>\n            </dl>\n        "],tips:[]},{name:"艾德证券",openLink:"http://www.eddidapp.com/landing/xrjxfl/",logo:l+"ad.jpeg",tags:[{name:"开户快",good:!0},{name:"现金打新免费",good:!0},{name:"FPS入金"},{name:"辉立暗盘"}],desc:["\n            <dl>\n                <dt>交易佣金：</dt>\n                <dd>0.028%，最低8元，免佣期间不收佣金，平台费12元/笔</dd>\n                <dd>暗盘0.05%(30元起)</dd>\n            </dl>\n        "],tips:[]}],m=[{title:"港股打新名词解释",content:"\n        <dl>\n            <dt>银证转账</dt>\n            <dd>股票银证转账是指证券公司和银行之间建立的资金通道，资金可以在银行账户和证券账户之间相互划转，而无需通过银行转账，具有方便、快捷、安全的特点。</dd>\n            <dt>FPS（转数快）</dt>\n            <dd>转数快是一个全面接通香港银行及储值支付工具营运商的平台，让用户可以随时随地进行转帐，令支付变得更方便、更快捷。</dd>\n            <dt>暗盘</dt>\n            <dd>暗盘就是场外交易市场，在香港一般用于新股上市前交易，于新股上市前一个交易日，收盘后进行（16:15-18:30）。港股交易一般是交易时段通过港交所系统撮合。暗盘交易不通过交易所系统,而是通过某些大型券商的内部系统进行报价撮合。</dd>\n        </dl>\n    "},{title:"为什么要多账户打新？",content:'\n        <p>港股打新的核心原理是利用了港交所给内地投资者的制度福利。按照新股分配散户优先一手的原则，账户越多分配到的新股就会越多，因此第一手认购的收益率最高，资金集中在一个账户的新股的收益率远低于资金分散到不同账户的新股。</p>\n        <h5>以<b>快手</b>和<b>京东健康</b>的打新举例</h5>\n        <img src="'.concat(s,'img/ks.png" />\n        <img src="').concat(s,'img/jdjk.png" />\n    ')}],u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("van-image",{staticClass:"card-logo",attrs:{radius:"10",width:"60",height:"60",src:n.data.logo}}),t("div",{staticClass:"card-title"},[t("h3",[n._v(n._s(n.data.name))]),t("div",{staticClass:"card-tags"},n._l(n.data.tags,(function(e,d){return t("van-tag",{key:d,attrs:{size:"medium",plain:"",type:e.bad?"danger":e.good?"success":"primary"}},[e.bad?t("van-icon",{attrs:{name:"fail"}}):e.good?t("van-icon",{attrs:{name:"success"}}):t("van-icon",{attrs:{name:"plus"}}),n._v(" "+n._s(e.name)+" ")],1)})),1)])],1),t("div",{staticClass:"card-content"},[t("div",{staticClass:"card-desc"},n._l(n.data.desc,(function(e,d){return t("p",{key:d,domProps:{innerHTML:n._s(e)}})})),0),t("div",{staticClass:"card-tips"},n._l(n.data.tips,(function(e,d){return t("p",{key:d},[n._v(n._s(e))])})),0)]),t("div",{staticClass:"card-link"},[t("a",{attrs:{href:n.data.openLink,target:"_blank"}},[t("van-button",{attrs:{type:"primary",block:""}},[n._v("点击去开户")])],1)])])},g=[],f={props:["data"]},h=f,b=(t("0ab0"),t("2877")),v=Object(b["a"])(h,u,g,!1,null,null,null),k=v.exports,x=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"article"},[t("h3",[n._v(n._s(n.article.title))]),t("div",{staticClass:"article-desc",domProps:{innerHTML:n._s(n.article.content)}})])},y=[],_={props:["article"]},w=_,P=(t("7703"),Object(b["a"])(w,x,y,!1,null,null,null)),j=P.exports,S={components:{Card:k,Article:j},data:function(){return{list:p,current:0,appOptions:p.map((function(n,e){return{text:n.name,value:e}})),filterType:0,filterOptions:[{text:"全部",value:0},{text:"现金打新免费",value:1},{text:"现金打新0~10",value:2},{text:"现金打新10~50",value:3},{text:"支持银证转账",value:5},{text:"入金有奖励",value:6}],articleIndex:0,article:null,articleVisible:!1,articleOptions:[{text:"打新知识",value:0}].concat(m.map((function(n,e){return{text:n.title,value:e+1}})))}},methods:{onSelectApp:function(n){var e=this.$refs["card-"+n][0].$el;window.scrollTo({top:e.offsetTop-60,behavior:"smooth"})},onFilterChange:function(n){var e=p;if(n){var t=[-1,0,10,50,1e3,1e3,1e3],d=n>4?0:t[n-1],a=t[n],o=5==n,i=6==n;e=p.filter((function(n){if(o)return n.tags.find((function(n){return n.name.includes("银证")}));if(i)return!n.tags.find((function(n){return n.name.includes("奖励")}));var e=0,t=n.tags.find((function(n){return/打新(免费|\d+元?)/.test(n.name)}));return t&&/打新(免费|\d+)元?$/.test(t.name)&&"免费"!==RegExp.$1&&(e=Number(RegExp.$1)),e<=a&&e>d}))}console.log(e.map((function(n){return n.name}))),this.list=e,this.appOptions=e.map((function(n,e){return{text:n.name,value:e}})),this.current=0,window.scrollTo({top:0,behavior:"smooth"})},onSelectArticle:function(n){0!=n&&(this.articleVisible=!0,this.article=m[n-1])},hideArticle:function(){this.articleVisible=!1,this.article=null,this.articleIndex=0}}},F=S,C=(t("f321"),Object(b["a"])(F,r,c,!1,null,null,null)),O=C.exports;d["a"].use(i["a"]);var L={name:"App",components:{Page:O}},A=L,T=(t("034f"),Object(b["a"])(A,a,o,!1,null,null,null)),$=T.exports;d["a"].config.productionTip=!1,new d["a"]({render:function(n){return n($)}}).$mount("#app")},7703:function(n,e,t){"use strict";t("e6ad")},"85ec":function(n,e,t){},c432:function(n,e,t){},e6ad:function(n,e,t){},f321:function(n,e,t){"use strict";t("3194")}});