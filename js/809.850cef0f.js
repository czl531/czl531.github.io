"use strict";(self["webpackChunkscript"]=self["webpackChunkscript"]||[]).push([[809],{5809:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var r=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"contain"},[r("van-tabs",{model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[r("van-tab",{attrs:{title:"第一幕"}},[r("div",{staticClass:"content",attrs:{slot:"default"},domProps:{innerHTML:t._s(t.script[0])},slot:"default"})]),r("van-tab",{attrs:{title:"第二幕"}},[t.level>2?r("div",{staticClass:"content",attrs:{slot:"default"},domProps:{innerHTML:t._s(t.script[1])},slot:"default"}):r("div",{staticClass:"content"},[r("van-button",{attrs:{round:"",color:"#FFB700",block:""},on:{click:function(i){return t.levelup(3)}}},[t._v("解锁第二幕")])],1)])],1),r("van-tabbar",{attrs:{"active-color":"#FFB700","inactive-color":"#fff"}},[r("van-tabbar-item",{attrs:{icon:"description"}},[t._v("剧本")]),r("van-tabbar-item",{attrs:{icon:"search"},on:{click:function(i){t.isShowPopup=!0}}},[t._v("线索")]),r("van-tabbar-item",{attrs:{icon:"completed"},on:{click:function(i){t.isShowEnd=!0}}},[t._v("真相")])],1),r("van-popup",{style:{height:"90%"},attrs:{position:"bottom"},model:{value:t.isShowPopup,callback:function(i){t.isShowPopup=i},expression:"isShowPopup"}},[r("van-tabs",{model:{value:t.activeClue,callback:function(i){t.activeClue=i},expression:"activeClue"}},[r("van-tab",{attrs:{title:"人物线索1"}},[t.level>0?r("div",[t.isShowClue?r("div",[r("van-nav-bar",{attrs:{title:"点击人物查询"}}),r("van-grid",{attrs:{"column-num":3,gutter:10}},t._l(t.clue,(function(i,e){return r("van-grid-item",{key:i.id,on:{"~click":function(i){return t.pickClue(e)}}},[r("van-image",{attrs:{src:i.picUrl}}),r("div",{staticClass:"title"},[t._v(t._s(i.name))])],1)})),1)],1):r("div",[r("van-nav-bar",{attrs:{title:t.clueTitle,"left-arrow":""},on:{"click-left":function(i){t.isShowClue=!0}}}),t._l(t.clue1List,(function(i){return r("van-card",{key:i.id,attrs:{title:i.title,thumb:i.picUrl},on:{click:function(e){return t.ImagePre(i.picUrl)}}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(t._s(i.desc))])])}))],2)]):r("van-button",{staticClass:"btn",attrs:{color:"#FFB700",round:""},on:{click:function(i){return t.levelup(1)}}},[t._v("解锁线索")])],1),r("van-tab",{attrs:{title:"地图线索"}},[t.level>1?r("div",[t.isShowMapClue?r("div",[r("van-nav-bar",{attrs:{title:"点击地点查询"}}),r("van-grid",{attrs:{"column-num":4,gutter:5}},[r("van-grid-item",{on:{click:function(i){t.ImagePre(e(1858))}}},[r("van-image",{attrs:{src:e(1858)}}),r("div",{staticClass:"title"},[t._v("地图")])],1),t._l(t.mapclue,(function(i,e){return r("van-grid-item",{key:i.id,on:{click:function(i){return t.pickMapClue(e)}}},[r("van-image",{attrs:{src:i.picUrl}}),r("div",{staticClass:"title"},[t._v(t._s(i.name))])],1)}))],2)],1):r("div",[r("van-nav-bar",{attrs:{title:t.mapClueTitle,"left-arrow":""},on:{"click-left":function(i){t.isShowMapClue=!0}}}),t._l(t.mapClueList,(function(i){return r("van-card",{key:i.id,attrs:{title:i.title,thumb:i.picUrl},on:{click:function(e){return t.ImagePre(i.picUrl)}}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(t._s(i.desc))])])}))],2)]):r("van-button",{staticClass:"btn",attrs:{color:"#FFB700",round:""},on:{click:function(i){return t.levelup(2)}}},[t._v("解锁线索")])],1),r("van-tab",{attrs:{title:"人物线索2"}},[t.level>3?r("div",[t.isShowClue2?r("div",[r("van-nav-bar",{attrs:{title:"点击人物查询"}}),r("van-grid",{attrs:{"column-num":3,gutter:10}},t._l(t.clue,(function(i,e){return r("van-grid-item",{key:i.id,on:{"~click":function(i){return t.pickClue2(e)}}},[r("van-image",{attrs:{src:i.picUrl}}),r("div",{staticClass:"title"},[t._v(t._s(i.name2))])],1)})),1)],1):r("div",[r("van-nav-bar",{attrs:{title:t.clue2Title,"left-arrow":""},on:{"click-left":function(i){t.isShowClue2=!0}}}),t._l(t.clue2List,(function(i){return r("van-card",{key:i.id,attrs:{title:i.title,thumb:i.picUrl},on:{click:function(e){return t.ImagePre(i.picUrl)}}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(t._s(i.desc))])])}))],2)]):r("van-button",{staticClass:"btn",attrs:{color:"#FFB700",round:""},on:{click:function(i){return t.levelup(4)}}},[t._v("解锁线索")])],1),r("van-tab",{attrs:{title:"公共线索"}},[t.level>4?r("div",[r("van-card",{attrs:{title:"公共线索1"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 段大鹏手机里有不少他和一个气质貌美的女孩亲密合影的照片，但大家意外的发现，刘克和马晓光的手机里也有他们和这个女孩亲密合影的照片，不过这个女孩穿的衣服和拍照的场景并不相同。 ")])]),r("van-card",{attrs:{title:"公共线索2"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安2018年时和北冰洋保险公司一直在打官司，但最后败诉了。 ")])]),r("van-card",{attrs:{title:"公共线索3"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安前不久卖掉了自己名下的2套房产，一共得了300多万。 ")])]),r("van-card",{attrs:{title:"公共线索4"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("何子安用不同的化名买了很多新康泰克感冒药。")])]),r("van-card",{attrs:{title:"公共线索5"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安的手机里显示他经常看一个直播平台，他的用户名叫“宅男好可乐”还给里边一个叫“魔力闪闪亮”的主播刷过好几万元的礼物。 ")])]),r("van-card",{attrs:{title:"公共线索6"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安所在大学的实验室表示，这里少了一些实验用的浓硝酸、浓硫酸和甲苯，另外还少了一台蒸馏装置。 ")])]),r("van-card",{attrs:{title:"公共线索7"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安和张萱萱亲密合影发了很多朋友圈，但奇怪的是，这些朋友圈都是设置的“只对段大鹏可见”。 ")])]),r("van-card",{attrs:{title:"公共线索8"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安家里的电脑里有一个叫“富豪时时彩”的网站后台，何子安的身份是最高管理员。 ")])]),r("van-card",{attrs:{title:"公共线索9"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安的电脑里有一个“3M互助金融平台”的网站后台，何子安的身份是最高管理员。 ")])]),r("van-card",{attrs:{title:"公共线索10"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安的电脑里有2张PS的保险单，都是100买500万保险的。受益人一张填的刘克名字，另一张填的马晓光名字。 ")])]),r("van-card",{attrs:{title:"公共线索11"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安身上有一个小u盘，打开一看，里边是一个压缩包，压缩包名字写的“魔力闪闪亮”。但有密码，打不开。 ")])]),r("van-card",{attrs:{title:"公共线索12"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安在×江文学网的用户名是“宅男好可乐”，他收藏了一本《残照又当楼》的小说，还给小说作者“雨慢漫”打赏过不少钱。 ")])]),r("van-card",{attrs:{title:"公共线索13"}},[r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v(" 何子安的遗物里发现了一张他的白血病化验单，结果是阳性。而且已经是晚期。还有，何子安带着一块卡西欧G-SHOCK表。 ")])])],1):r("van-button",{staticClass:"btn",attrs:{color:"#FFB700",round:""},on:{click:function(i){return t.levelup(5)}}},[t._v("解锁线索")])],1)],1)],1),r("van-popup",{style:{height:"90%"},attrs:{position:"bottom"},model:{value:t.isShowEnd,callback:function(i){t.isShowEnd=i},expression:"isShowEnd"}},[t.level>5?r("van-tabs",{model:{value:t.activeEnd,callback:function(i){t.activeEnd=i},expression:"activeEnd"}},[r("van-tab",{staticClass:"content",attrs:{title:"人物"}},[t._v("NPC1男"),r("br"),t._v(" 何子安 男 28岁厦门大学物理系讲师(死者)"),r("br"),r("br"),t._v(" 玩家3男3女 "),r("br"),r("br"),t._v(" 马晓光 男 29岁 家族企业继承人（代驾司机）"),r("br"),t._v(" 刘克 男 28岁 国防单位计算机安防员（网吧网管）"),r("br"),t._v(" 段大鹏 男 29岁领导人营养师（小餐馆厨子）"),r("br"),t._v(" 徐如雨 女 28岁 著名编剧（名不见经传女频网文作家）"),r("br"),t._v(" 莫丽 女 28岁 ladyface酒吧特约歌手（网络小主播） "),r("br"),t._v(" 张萱萱 女 29岁 对接明星高级化妆师（入殓师） ")]),r("van-tab",{staticClass:"content",attrs:{title:"推凶理由"}},[t._v(" 说明推出何子安被徐如雨杀的理由是 "),r("br"),r("br"),t._v(" 【线索】徐如雨的购买记录显示，她自2013年开始，每过一段时间就会购买一些苯丙胺。但在2014年后就没有再买过了。 "),r("br"),r("br"),t._v(" 说明徐如雨之前经常服用兴奋剂，后来不服用了，说明她有了强烈的耐药性，应该换更强药效的东西了（何子安给的冰毒 徐如雨拍了自己很多毒瘾犯了的照片）。在前半部分的剧本中，她开始和大家一样玩的很HIGH，但到结尾的时候她的思路很清晰。所以徐如雨没有最后3条的片段性记忆，而是相对完整的一些记忆。所以徐如雨描述后边的关键词记忆时，会和大家脑海里的有一定偏差（如果徐如雨是高手则会隐瞒的很好） "),r("br"),r("br"),t._v(" （何子安邀请大家去HIGH，在段大鹏的视角里，徐如雨是和何子安说了几句话的，大家问徐如雨说什么话，玩徐如雨的玩家也许会说出“何子安。张萱萱”的全名）这是大家片段性的记忆里，徐如雨是第一个说全3个字名字的人。也就是说她的思路比一般人清晰。 "),r("br"),r("br"),t._v(" 其实徐如雨当时已经清醒，她是在问何子安要他许诺给自己的冰毒。何子安的意思是你跟着我来才给你，所以徐如雨才上车。但徐如雨肯定不会说这个事。只能用其他话来搪塞。 "),r("br"),r("br"),t._v(" 另外就是前边组织者说过何子安的包是空的，那么作为“绝命毒师”的何子安，是很有可能带着一包毒品的，但包却是空的，就说明有人拿走了他的包里东西。如果能推出徐如雨有毒瘾，这里很容易把矛头指向她。何子安包里的毒品足够徐如雨吸十年（作者请教过警察，冰毒每次大约吸0.5克，5天吸一次。一年36.5克，10年不到400克，而且冰毒属于化学品，只要在冰箱里干燥储存，可以存放很久很久。） 另外就是，大家混得都不如意，段大鹏，刘克，马晓光是看在和何子安的“兄弟情”才来的。莫丽是被何子安要挟公布脱衣舞视频胁迫才来的。而同样混的不好的徐如雨为什么会来?她能没把柄在何子安手上?（在张萱萱本里有说莫丽和徐如雨开始都不想来，但是后来突然表示要来其实就是被何子安胁迫了）"),r("br"),r("br"),t._v(" 何子安是学化学的，他长期接触化学物质，导致了白血病。而且他们大学丢失了一些实验用的化学品和器具。正是何子安用来做TNT炸药了，用浓硝酸和浓硫酸混合，冷却后加入甲苯，用水浴蒸馏装置加热蒸馏提取TNT炸药。"),r("br"),r("br"),t._v(" 何子安物理很好，他之前经常去东坪山（张萱萱故事里有提到）爬山，早就知道有一块大石头在公路上方的山头。他用炸药做了定时炸弹，用物理知识可以计算出石头一旦失去支撑力后的下落速度。同时也能推导出落点和准确时间，他只要在临界值到达公路入口匀速开车运动就可以被石头砸中。然后接来下的暴雨会冲刷掉痕迹。"),r("br"),r("br"),t._v(" 另外，就是何子安之前发现得了白血病，但他知道如果自己坦白，张萱萱一定不会放弃救治他。何子安被安娜一直胁迫制毒，所以他卖了自己的房产，弄了一个最大的意外险。本想将自己和安娜还有欺负过他的同学一波带走。留给张萱萱巨额保险金。但不料喝醉后的张萱萱非要和同学们坐一个车，何子安为了张萱萱饶过了其他人，只让自己和安娜的车被石头砸。"),r("br"),r("br"),t._v(" 但人算不如天算，何子安并没有实验过TNT炸药的威力，爆破炸下来的石头有了裂缝，在山体上撞击碎裂了，只有一些小块击中了他的车。 警察给出的信息是“被山上滚落的碎石块砸中，车上有1人不幸被砸中头颅当场死亡”，注意是“碎石块”。"),r("br"),r("br"),t._v(" 但警察给出的信息是“像是一起意外事故”，而安娜的死明显不是意外事故，就说明肯定有真凶。"),r("br"),r("br"),r("br"),r("br")]),r("van-tab",{staticClass:"content",attrs:{title:"人物关系"}},[t._v(" 大家都是高中时期的同学2008届华美高中毕业。"),r("br"),r("br"),t._v(" 何子安高中时期个头比较低，性格内向，但学习很好，尤其是数理化，次次都几乎可以达到满分，老师都说何子安是未来的科学家。他和马晓光和刘克关系比较好。 段大鹏高中时期是有名的班霸，总是欺负班里同学，尤其爱欺负老实的何子安。还在徐如雨的灵感启迪下给何子安起了外号“河狸”。何子安想向段大鹏示好，主动想和段大鹏学习打篮球，但段大鹏让何子安从自己胯下钻过去。何子安不钻，段大鹏恼羞成怒又打了何子安。"),r("br"),r("br"),t._v(" 刘克爱逃课玩电脑打游戏很缺钱，总问何子安借钱。何子安开始一直将他当朋友，但是刘克遇到校外的社会青年要钱，刘克为了自保竞把何子安出卖，让那些社会青年把何子安带走打了一顿并抢了钱。"),r("br"),r("br"),t._v(" 马晓光向徐如雨表白被拒，他也想看何子安出丑，便故意撮合何子安和莫丽，结果导致莫丽在全班同学面前公然羞辱何子安。他还把徐如雨父亲的照片撕碎了偷偷放进何子安的书包嫁祸他。"),r("br"),r("br"),t._v(" 徐如雨是学习委员，不喜欢何子安，因为何子安总比自己成绩好，总压她一头。她还向老师告状说何子安为了逃避上体育课用石灰袋加水增加额头和温度计温度。导致何子安被通报批评罚做俯卧撑，在全班人面前丢脸。何子安想和徐如雨搞好关系，把马晓光撕碎的照片PS好还给了徐如雨，但徐如雨反而冤枉何子安拿了她爸爸的照片，并且公然扇他耳光。"),r("br"),r("br"),t._v(" 莫丽上体育课时意外从双杠摔下，昏迷了过去。同学们都送来礼品慰问，何子安折了一夜千纸鹤，折了999只，第1000只的纸上写下来（希望莫丽快点康复的心愿）送她了第1000只千纸鹤，让她打开。结果被醒来的莫丽当着他面扔进垃圾桶。(只要折好999 只千纸鹤，第1000只就可以许愿成功，何子安的母亲当年心脏病病发，何子安为母亲折到966只千纸鹤时母亲去世）"),r("br"),r("br"),t._v(" 一直被人欺负，一直没有真心朋友的何子安心里逐渐扭曲。但这时候的他还没有杀人的念头。他怕被欺负，怕被疏远，所以何子安尽全力维护着他拥有的“友情（马晓光和刘克）”，也拼尽全力去讨好段大鹏，还将母亲的遗物吉他送给了段大鹏。"),r("br"),r("br"),t._v(" 其实对比起段大鹏，他更恨刘克和马晓光，连张萱萱都看不惯段大鹏欺负何子安的事情出来主持过公道。但这2个人自诩是他的好朋友，却在他受到段大鹏欺负的时候没有站出来为何子安说过一句话。等段大鹏走了，刘克和马晓光又继续和何子安称兄道弟。"),r("br"),r("br"),t._v(" 但何子安是一个十分内向，并且心有城府的人，他从来不会在同学面前显露出他的恨意。"),r("br"),r("br"),t._v(" 毕业后何子安考入了名牌大学，人也变帅了，是同学中混的最好的一个。他开始尝试性的做一些报复。"),r("br"),r("br"),t._v(" 他故意给同学们都说自己混的很好，意图就是让大家羡慕。故意追求张萱萱，拍了和张萱萱亲密的照片只对段大鹏朋友圈可见，故意气段大鹏。"),r("br"),r("br"),t._v(" 他气气段大鹏的同时，还要表现出很无辜的样子，还对段大鹏嘘寒问暖，让段大鹏有火没处发。"),r("br"),r("br"),t._v(" 至于他最恨的刘克马晓光，他利用自己数学方面的天份写了庞氏骗局的公式和外国的骗子合作，骗了马晓光钱再拉他一把，让马晓光感激涕零。还借钱给刘克开网吧，但他见到刘克生意不错，就故意戳弄马晓光去放火，导致刘克一直欠着他的。"),r("br"),r("br"),t._v(" 何子安把刘克马晓光骗的一愣一愣，他还PS了保险公司的意外险保险单受益人填写了刘克马晓光的名字，让二人深受感动，也买了多份保险填下了何子安的名字。"),r("br"),r("br"),t._v(" 因为刘克和马晓光买保险属于随机事件。何子安这时候其实也没动杀心。"),r("br"),r("br"),t._v(" 另外，莫丽和徐如雨他也没有放过。"),r("br"),r("br"),t._v(" 他冒充徐如雨写的小说的读者，给徐如雨打赏，取得信任后劝徐如雨服用毒品来激发创作灵感，成功的让徐如雨染上了毒瘾。"),r("br"),r("br"),t._v(" 这个毒品是何子安利用自己的化学天赋从【新康泰克感冒药】里含的麻黄碱提取出来的冰毒。"),r("br"),r("br"),t._v(" 何子安利用之前的人脉开设私彩网站，骗光莫丽的钱，再放贷给她，让莫丽拍下脱衣舞视频来偿还。"),r("br"),r("br"),t._v(" 何子安利用毒品控制了徐如雨，利用借贷控制了莫丽。但他的心里还是很空虚。"),r("br"),r("br"),t._v(" 他在酒吧买醉的时候遇到了“知己”安娜。其实安娜是当地黑社会老大的女人，她会催眠术，从何子安那里套出了何子安会制毒的本领。"),r("br"),r("br"),t._v(" 于是安娜半拉拢半逼迫何子安成了他们的摇钱树。何子安负责制毒，黑社会老大的亲信“鬼哥”负责运毒和交易。"),r("br"),r("br"),t._v(" 鬼哥为了掩人耳目，经常把毒品藏在公仔玩具里，他为人谨慎从未被抓住过。"),r("br"),r("br"),t._v(" 但毕竟树大招风，鬼哥的名气传了出去，被公安局悬赏通缉。所以有些人曾经在通缉令上看到过鬼哥的照片。（他鼻头有个黑痣）"),r("br"),r("br"),t._v(" 有个人（酱油NPC是谁不重要）突发奇想，心想只要能提供线索，公安局就会给奖金，他便故意在电线杆上贴了【寻人启事】故意说鬼哥是自己精神分裂的哥哥，还说鬼哥有暴力倾向，让大家不要和他说话，只需要暗暗的把鬼哥的行踪电话告诉自己就行。"),r("br"),r("br"),t._v(" 何子安的父亲被醉酒渣土车司机撞死，何子安提前给父亲买了保险，但保险公司为了节省保险金抠字眼，说醉酒不属于理赔范围，何子安气不过和他们打官司，结果输了。"),r("br"),r("br"),t._v(" 这时候的何子安就想到了骗保，因为之前马晓光和刘克刚好买了保险，何子安动了杀心，心想杀了你们我不光复了仇，还能骗保。所以他一直在酝酿机会。"),r("br"),r("br"),t._v(" 何子安的父亲的脸庞被车祸撞的支离破碎，是张萱萱把何子安的父亲拼起来复原的。何子安深受感动，他又联想起张萱萱从未欺负过他，而且还在段大鹏欺负何子安时打抱不平，所以这时候的何子安是真的爱上张萱萱了。他想金盆洗手和张萱萱结婚。"),r("br"),r("br"),t._v(" 但黑社会老大和安娜不同意，他们怕何子安洗白上岸后断了财路，所以他们一直在逼迫何子安。结婚的日期就一直拖着。"),r("br"),r("br"),t._v(" 就在这时候，何子安发现自己得了白血病晚期（经常接触化学品）。"),r("br"),r("br"),t._v(" 幼年丧母，上学时被人羞辱欺负，朋友的虚情假意，以及父亲的死，保险公司的卑鄙无耻，外加安娜的贪婪，他的心里已经扭曲了。在他的眼里，这个社会只有张萱萱一个好人，其他人都该死。"),r("br"),r("br"),t._v(" 他终于想好了报复计划，他利用浓硫酸硝酸提纯制造了三硝基甲苯（TNT炸药），制作了定时炸弹，然后在东坪山的一块巨石下埋好了炸弹，设置好起爆时间。利用他的物理天赋计算出巨石的落点。"),r("br"),r("br"),t._v(" 然后他卖了房，买了300万元的意外险，保险金足足有十亿。收益人写的张萱萱。一来让张萱萱下半生不愁钱，二来要报复保险公司。"),r("br"),r("br"),t._v(" 何子安故意和安娜示好，说他想通了，只有贩毒才能让他发财，故意给安娜说他和张萱萱好是为了报复段大鹏。还说要设局砸死张萱萱骗保。让安娜帮助他。 安娜当然同意，但其实何子安的真正目标是安娜，他早就准备了安眠药，放在了安娜的饮料里。就是为了到时候偷梁换柱。"),r("br"),r("br"),t._v(" 同时，何子安也要将欺负过他的那些同学一波带走。所以他故意借口同学聚会，还逼迫徐如雨和莫丽必须来。到时候由安娜将他们催眠，这样何子安就能把他们都安排在一辆车上。"),r("br"),r("br"),t._v(" 但何子安没想到张萱萱窃听到了他和安娜的话，张萱萱以为何子安一直没有爱过自己，还设计要砸死自己骗保，她后悔万分，转念想到可以将计就计。知道何子安布的这个陷阱非常依赖时间，而且何子安一直带着一块非常准时的表。她故意调整了何子安的表，目的就是让落石砸在何子安自己头上。谁料何子安带着的是电波自动对时表，张萱萱的操作完全落空。"),r("br"),r("br"),t._v(" 安娜催眠需要服用一些辅助性药品，她让何子安去她那里拿放在心理咨询室的辅助药品，但何子安拿错成了兴奋剂。"),r("br"),r("br"),t._v(" 兴奋剂导致大家被催眠后并没有失去自主意识，而是成了一群不受控制的人。"),r("br"),r("br"),t._v(" 何子安努力把大家聚拢在一起，想着等到4点时一波带走。但大家分别闹出了不少乱子，还把何子安的下线“鬼哥”给抓住了。"),r("br"),r("br"),t._v(" 何子安怕鬼哥认出他，当时就借口上厕所藏了起来。等他回来，鬼哥已经被马晓光刘克送到了警察局。而鬼哥被大家按在地上的时候，手一甩（某人剧本里有写），将装有毒品的哆啦A梦摔到了一边，被徐如雨捡到。"),r("br"),r("br"),t._v(" 徐如雨看到饭店供桌上的关公，她心想拜关公又不能要什么来什么，但哆啦A梦可以啊!于是就好心换了哆啦A梦上去。将饭店的关公自己装到了包里。"),r("br"),r("br"),t._v(" 马晓光和刘克回来，何子安怕大家再走散，就张罗着大家一起去HIGH，他把安娜迷晕，抱上车，然后让大家一起上车，又借口车坐不下，让张萱萱打车回家。（徐如雨本里有些详细过程因为徐如雨以前经常服用兴奋剂有了抗性提前清醒）"),r("br"),r("br"),t._v(" 但服用了兴奋剂的张萱萱非要和大家一起去。她这个无意的举动成了拯救大家的天使。"),r("br"),r("br"),t._v(" 何子安眼看时间快到了，他不能再磨蹭，于是他为了张萱萱的安全打算饶了大家一命，只带着安娜去踩自己布下的自杀陷阱。让大家坐后车，自己开前车。虽然张萱萱调了何子安的表，但何子安的表自动对时，这时候早就是正常时间了。"),r("br"),r("br"),t._v(" 但是何子安低估了TNT炸药的威力，导致石头被炸裂，在山体上碰撞后解体成碎石，其中一块碎石砸穿了挡风玻璃，但是并未砸死何子安和安娜。"),r("br"),r("br"),t._v(" 这时候大家的后车追尾到前车，何子安看到徐如雨出来拿走他包里的毒品，他故意大喊起来，目的就是逼迫徐如雨砸死他，不管警察是否查的出来徐如雨是凶手，他这个都属于意外身亡。张萱萱还是可以得到理赔金。"),r("br"),r("br"),t._v(" 徐如雨砸死何子安后，安娜也醒了，她想逃跑，但被徐如雨追上砸死，抛尸悬崖（这里就是为了给大家说明何子安和安娜不是被意外砸死的）"),r("br"),r("br"),t._v(" 然后徐如雨藏好抢来的毒品，回到车上装晕。等待救援。"),r("br"),r("br"),t._v(" 然后，作品的名字叫【醉后一夜】，其实也就是“最后一夜”。这是一个反校园暴力的本，有些人自认为开玩笑，嘻嘻哈哈过去的事情，在受害者心里却是一道永远都抹不平的伤痕。"),r("br"),r("br"),t._v(" 你永远不知道那些被你欺凌的人会怎样报复你。"),r("br"),r("br")]),r("van-tab",{staticClass:"content",attrs:{title:"案件时间线"}},[t._v(" 晚上8点，大伙儿到了酒吧见面。"),r("br"),r("br"),t._v(" 大家喝酒时【安娜】来了，给6个人（除了何子安）进行了催眠，但何子安把药放错了，放成了兴奋剂。"),r("br"),r("br"),t._v(" 大家喝的越来越高兴，开始了一系列精彩的表演。"),r("br"),r("br"),t._v(" 9点整，大家一起离开了酒吧，恰好来了个公交车，大家一起上了这趟公交车，但没有带零钱，一个老奶奶帮大家投了钱。在车上遇到了小偷，段大鹏大喝一声:“我是警察叔叔”挺身而出，被盗匪划破了大腿后跳窗逃跑。"),r("br"),r("br"),t._v(" 9点15，老奶奶（赵奶奶）陪着几个人下车找到了一家宠物医院【爱心宝贝诊所】，段大鹏很感激老奶奶，认她做了奶奶。"),r("br"),r("br"),t._v(" 进去后要医生给段大鹏包扎，结果马晓光把诊所里的哈士奇当做狼给痛打了一顿，被诊所的人拿棍棒轰了出去在路边休息，张萱萱让刘克去便利店买一包卫生巾，刘克说他一个大男人不好意思。徐如雨让刘克套个黑塑料袋，刘克把塑料袋套头上去了【熊大便利店】，店员以为他打劫，给他一包卫生巾，刘克还不忘要了小票。"),r("br"),r("br"),t._v(" 9点30，段大鹏黏上卫生巾。老奶奶说她有些头疼，就不陪大家了。赵大鹏拦了计程车说:“我奶头疼，这里最好的医院是哪个？”司机看他五大三粗的，嘴里胡言乱语，几个人都一身酒气，不敢拉他们，便说了个他下班了，前边坐地铁2站路就是【蓝海医院】"),r("br"),r("br"),t._v(" 老奶奶说她不用去医院，回去睡一觉就好了。大家便坐在路边聊天,。"),r("br"),r("br"),t._v(" 9点40，马晓光尿急去找厕所，看到一家包子店门口放了个桶，两个小男孩在那里撒尿，桶上写“童子尿”，马晓光心想自己还是童子之身，便也尿了一泡在里边，被老板追着打出来，头也打破了。马晓光一摸头上有血，他说自己快死了，大家便陪着马晓光去坐地铁。"),r("br"),r("br"),t._v(" 9点50，大家上了地铁，买了5张票，徐如雨掏的100元钱，给找了90个钢铺。车上有人给孩子喝可乐（倒在儿童水壶里），不小心撒了一点，地上有泡沫，刘克看到后抢过水壶撒在地上，义正言辞的说:“这有毒!”被地铁安全员教育，发了个朋友圈，说自己在地铁上捣乱，集满40个赞才能离开。"),r("br"),r("br"),t._v(" 10点15分，大家去了医院，医生说马晓光只是擦破了皮，没事，贴个创可贴就好了。而这时段大鹏因为失血感觉头晕，医生批评了他们，卸掉卫生巾重新包扎了段大鹏的大腿。并嘱咐回去喝点排骨汤补补。"),r("br"),r("br"),t._v(" 10点40分，大家出来，都说饿了，徐如雨找了间能做饭的民宿。去的路上马晓光把一辆电单车（因为他平时是代驾）扛了上去，说兄弟平时我总骑你，今天你也骑我一回。"),r("br"),r("br"),t._v(" 莫丽和张萱萱则去永丰超市买了骨头和萝卜准备熬汤，买了些土豆，给马晓光带了创可贴。"),r("br"),r("br"),t._v("11点，段大鹏说萝卜要切成丁才好。（莫丽把萝卜切成了“丁”）马晓光让莫丽帮他贴创可贴，莫丽说没时间，让他找别人，他找了徐如雨，徐如雨说写诗呢，让他对着镜子贴创可贴，都贴在了镜子上，徐如雨写下了诗“愿以笔杆化神剑 ，斩破苍穹怒问天，前生犯了什么错，使我今生没人怜？”徐如雨想吃苹果，把土豆啃成了苹果核状。"),r("br"),r("br"),t._v(" 11点15分，发现灶具打不着火（没有气），大家都说去外边吃吧。张萱萱拿了电视遥控器以为是手机。 11点25分，在电线杆上看到贴的寻人启事（自己的哥哥精神分裂找到后联系某电话号码其实是何子安的下线“鬼哥”），徐如雨顺手撕下来就放在了包里。"),r("br"),r("br"),t._v(" 11点30分，几个人到了小吃店回马枪餐馆，刘克想尿尿，问店员卫生间，店员说在后边，刘克回来后说卫生间有鬼，一开门就自己亮灯，还有寒气袭来，其实他尿在了冰箱里。马晓光拿着一只小龙虾给了刘克，说好歹有个龙字，带上驱驱邪。"),r("br"),r("br"),t._v(" 11点45分，几个人吃饭，段大鹏说饭店的排骨汤真好喝，菜也好吃，非要认饭店老板当干爹，还加了微信（老头微信名是:宝刀未老（朋友圈发的回马枪美食店秋季小龙虾折扣季开始了!）。这时看到有人进来坐在一个小角落吃饭（这个人就是鬼哥，他在和买毒品的人接头，何子安为了避免鬼哥见到自己,提前藏进了厕所,张萱萱拿遥控器打电话打不通，几个人硬是把鬼哥送进了派出所）"),r("br"),r("br"),t._v(" 鬼哥为了毁灭证据，把装有毒品的哆啦A梦扔在了饭店角落被徐如雨捡到换了关公。"),r("br"),r("br"),t._v(" 12点30分，马晓光出门看到一辆出租车停在路边，他让司机带着鬼哥去警察局，鬼哥说快放开我,否则我叫兄弟杀你全家，司机害怕惹事，不敢开车，大家说这是精神分裂的症状，段大鹏把司机拉下来，让马晓光上去发动了车，和刘克一起把鬼哥送到了警察局。（得了2个好市民锦旗）"),r("br"),r("br"),t._v(" 1点10分，马晓光和一个法拉利飚车。以漂移的方式在十字路口掉头，被一帮社会青年称作车神。说要带去见大哥，给马晓光在美发厅做了一个葬爱帮的朋克发型。给刘克在纹身店做了一个葬爱无敌的纹身。"),r("br"),r("br"),t._v(" 葬爱老大让马晓光开车压死对头魅影家族一头（以飚车作为胜负赢一只很珍稀的金刚黑琵琶），然后马晓光胜利，对方给马晓光一个箱子。里边装着装蝎子的笼子。说你的车技果然了得，东西算你们的。"),r("br"),r("br"),t._v(" 刘克说这个蝎子好漂亮，一摸口袋，有个小龙虾是之前马晓光给刘克拿的。他拿小龙虾换了蝎子。"),r("br"),r("br"),t._v("马晓光把东西给了葬爱老大。因为天黑，老大没注意，夸了马晓光几句，还给了他2000元奖励。马晓光和刘克对半分了。"),r("br"),r("br"),t._v(" 2点，马晓光和刘克回来了。马晓光给了司机500元车辆使用费，司机高兴的走了。刘克把蝎子放在了小龙虾的盆子里说养着。"),r("br"),r("br"),t._v(" 2点30分，大家离开小饭馆，刘克说坏了，蝎子忘在饭馆小龙虾盆里了，段大鹏连忙给老头打电话:干爹，我朋友旁边放的那盆小龙虾还在不?老头说他去看看去。过了10分钟回微信:你妈炸了!"),r("br"),r("br"),t._v(" 2点45分，路过名表店，莫丽说最喜欢劳力士了，刘克说难得赚了点钱，买个劳力士去，问老板1000能买个什么劳力士？老板看他们一身酒气，说1000我给你画一个。给莫丽手腕上画了一个劳力士图案。"),r("br"),r("br"),t._v(" 3点，莫丽说这表也不走，一直都是2点50分，要在典当行当了，被典当行的人撵出来了。"),r("br"),r("br"),t._v(" 3点15分，莫丽看到一个美容院，她最恨这个，要买炸弹炸美容院。于是徐如雨在小卖部买了副扑克，拿走了所有的炸弹牌（4个一组)，放在了美容院里，然后张萱萱让段大鹏打电话给110（因为张萱萱的电话是电视遥控器），说有人在美容院放了13个炸弹。"),r("br"),r("br"),t._v(" 3点30分，之前和鬼哥联络买毒品的人找到了大家，拿刀逼着他们交出哆啦A梦，何子安怕这些人破坏自己的计划，他刚好身上有带一些毒品，便出面说明了自己的身份，给了那些人毒品支走了他们（所以何子安包里的毒品少了）"),r("br"),r("br"),t._v(" 何子安在机关布置的石头要砸下来之前，对着siri说:告诉张萱萱，说我爱她。被Siri理解错误，发给了张萱萱的手机“我爱她”。其实何子安的意思是他爱张萱萱。"),r("br"),r("br")])],1):r("van-button",{staticClass:"btn",attrs:{color:"#FFB700",round:""},on:{click:function(i){return t.levelup(6)}}},[t._v("解锁真相")])],1)],1)},c=[],n=(e(6888),e(8256)),s=(e(7841),e(9515)),p=(e(798),e(2277)),l={data(){return{active:0,activeEnd:0,script:JSON.parse(localStorage.getItem("script")),activeClue:0,chapter:[{id:1,title:"第一幕"},{id:2,title:"第二幕"}],level:localStorage.getItem("level")||0,isShowPopup:!1,isShowClue:!0,isShowMapClue:!0,isShowClue2:!0,isShowEnd:!1,isClue1:!1,isClue2:!1,isMapClue:!1,isSecond:!1,clue1List:[],clue2List:[],mapClueList:[],myMapClue:[],clueTitle:"",mapClueTitle:"",clue2Title:"",clue:[{id:1,name:"有些宅的女子",name2:"徐如雨",picUrl:e(5244),clue1:[{id:111,picUrl:e(6433),desc:"她随身携带的提包里有一堆一元硬币，数了一下，有90枚。"},{id:112,picUrl:e(5163),desc:"她随身携带的提包里有一个陶瓷关公像。"},{id:113,picUrl:e(4605),desc:"她随身携带的提包里有一张揉皱了的寻人启事，上边有照片，是个陌生人，鼻头上有一颗大黑痣，底下的文字写的是:我的哥哥于前日走失，他患有严重的精神分裂症，时而会以为自己是另外一个人，有时会有暴力倾向，如果有见到他的人请悄悄的拨打我电话137XXXXXXXX，千万不要试图和他沟通，因为他也许会使用暴力反抗，请知情者告诉我哥哥在哪里即可，万分感谢。"}],clue2:[{id:121,picUrl:e(3113),desc:"徐如雨的手机相册里有一个隐藏相册，打开一看，里边都是徐如雨一脸鼻涕眼泪的照片。"},{id:122,picUrl:e(6383),desc:"徐如雨的购买记录显示，她自2013年开始，每过一段时间就会购买一些苯丙胺。但在2014年底后就没有再买过了。"},{id:123,picUrl:e(7299),desc:"徐如雨在X江文学网连载了一部名为《残照又当楼》的小说，但人气平平，不过其中的一个名为“创世一哥”的读者给她打赏过好几万的礼物。还有一个名为“宅男好可乐”的读者也给她打赏了不少。"}]},{id:2,name:"壮硕男子",name2:"段大鹏",picUrl:e(4173),clue1:[{id:211,picUrl:e(6633),desc:"他的大腿上有一道锐器划破的伤口已经包好了纱布，手腕的腕带上的标识是“蓝海医院”。"},{id:212,picUrl:e(5624),desc:"他的口袋里塞着一条被血浸透了的卫生巾。"},{id:213,picUrl:e(8810),desc:"他的手机里有一条微信信息,是一个名称叫“宝刀未老”的朋友发来的,信息内容只有四个字:“你妈炸了”。"}],clue2:[{id:221,picUrl:e(4157),desc:"段大鹏的手机里有些照片，是段大鹏在各种场合弹奏吉他的照片。马晓光认出来，段大鹏抱着的吉他似乎是何子安高中时期家里的那一把。"},{id:222,picUrl:e(3941),desc:"段大鹏的手机通讯记录里有一个他发给通讯名为“大领导”的信息“老大，我兄弟订婚，我得请几天假。”还有领导的回复“大鹏，都是自己兄弟，去吧去吧，不过那几道菜还是你做的拿手，我只能凑合先替你顶几天，你可得早点回来!”"},{id:223,picUrl:e(7783),desc:"段大鹏前不久曾经频繁浏览过一个叫“金不换”的网站。"}]},{id:3,name:"漂亮女子",name2:"莫丽",picUrl:e(3495),clue1:[{id:311,picUrl:e(3265),desc:"她随身携带的手包里有一个扑克牌盒，但里边只有大王和小王(也称大鬼和小鬼）两张牌。"}],clue2:[{id:321,picUrl:e(5482),desc:"莫丽的个人签名写的是“男人都是大猪蹄子，尤其是富二代!"},{id:322,picUrl:e(1104),desc:"莫丽的QQ群里有一个她是群主的群，名为“魔力闪闪后援团”，里边人不多，只有几十个。里边零星的聊天记录问的都是“今天几点开始?”“今天记得穿职业一点”“闪闪什么时候给我们来点真正的福利啊?"}]},{id:4,name:"文静女生",name2:"张萱萱",picUrl:e(6155),clue1:[{id:411,picUrl:e(4128),desc:"她随身携带的提包里有一个电视机遥控器。"}],clue2:[{id:421,picUrl:e(2312),desc:"张萱萱的QQ黑名单里有段大鹏的QQ号。"},{id:422,picUrl:e(8725),desc:"张萱萱和何子安的聊天记录显示他们日常很恩爱，不过有时候张萱萱会询问何子安“安娜”的事情。"},{id:423,picUrl:e(3612),desc:"张萱萱的通讯记录里有个叫“太平王子林老师”的人经常给她发信息“萱萱，有个妆很难搞，看来非得你出马。”“萱萱，有个脸你不出马恐怕不行!”“萱萱，有个老头，他家人非得让你来化这个妆，还说愿意出双倍价格。"}]},{id:5,name:"消瘦眼镜男",name2:"刘克",picUrl:e(9779),clue1:[{id:511,picUrl:e(8743),desc:"他的口袋塞着一面锦旗，上边绣着:一身正气智勇双全。"},{id:512,picUrl:e(864),desc:"他的口袋里有一张小票，可能因为被搓揉过，上边的字模糊不清，隐约能看到“熊大便”3个字。"},{id:513,picUrl:e(2621),desc:"打开他的手机微信，他于昨晚10点发了一个朋友圈，一张地铁车厢的图配文:我在地铁上扰乱公共秩序，安全员说集满40个赞才能够让我走，求大家帮帮忙点个赞!"}],clue2:[{id:521,picUrl:e(406),desc:"刘克的手机网盘里有一些加密的压缩包，名称有“冰河最强版”“灰鸽子最新版”“橙色八月”“卡巴克星”“防火墙攻破全教程”。"},{id:522,picUrl:e(9233),desc:"刘克的QQ群里有一个“梦飞翔加油群”，里边的用户大多都是编号“002”“005”“006”这些，刘克的编号是“007”。还有他和“015”的聊天记录“小豆，你替我几天班，我得请几天假，兄弟结婚。”还有“015”的回复“好的，邦德哥，你早点回来，别被BOSS发现了! ”"},{id:523,picUrl:e(6577),desc:"警察查了一下刘克的信息，说刘克2009年7月被冠以“计算机安全犯罪”的罪名坐牢了2年。"},{id:524,picUrl:e(9244),desc:"刘克前不久曾经频繁浏览过一个叫“金不换”的网站。"},{id:525,picUrl:e(4091),desc:"刘克和何子安的聊天记录显示刘克曾多次借过何子安的钱，而且没有还过。而且2013年何子安一把给了刘克50万元。"}]},{id:6,name:"微胖男子",name2:"马晓光",picUrl:e(7595),clue1:[{id:611,picUrl:e(8101),desc:"他的头上有一处新伤痕，不过只是破了点皮，几乎已经快愈合了。"},{id:612,picUrl:e(433),desc:"他的口袋塞着一面锦旗，上边绣着:一身正气智勇双全。"}],clue2:[{id:621,picUrl:e(363),desc:"马晓光的微信群里有一个叫“3M金融互助维权群”。里边的聊天记录都是一些人哭诉自己被3M金融互助平台骗了多少多少万的信息。"},{id:622,picUrl:e(7060),desc:"马晓光的手机阅读软件里显示，他曾经收藏了一些常看的书，有《魔刀祖师》《盗墓日记》《斗破天空》《残照又当楼》《花万骨》。"},{id:623,picUrl:e(8385),desc:"马晓光的交易记录里显示，何子安几年前曾经给他转过2万元。同时他在2013年的时候网购了不少酒精。"},{id:624,picUrl:e(3452),desc:"马晓光的微信朋友圈里发过很多张他驾驶豪车的照片，但奇怪的是，副驾驶总是有不同的人，而且看起来副驾驶的人脸红彤彤的，似乎是喝了酒。"},{id:625,picUrl:e(2978),desc:"马晓光前不久曾经频繁浏览过一个叫“金不换”的网站。"}]}],mapclue:[{id:1010,name:"爱心宝贝诊所",picUrl:e(6072),clue:[{id:1011,picUrl:e(6466),desc:"员工A气愤愤地说:“昨晚就是你们在我们这里捣乱，都说了我们这里只有兽医，没办法替人缝合伤口，你们还不依不饶的。”"},{id:1012,picUrl:e(6466),desc:"员工B瞪了一眼你们，骂道:“昨晚那个死胖子把顾客寄存在这里的哈士奇犬暴打了一顿!发神经啊!”"}]},{id:1030,name:"安娜心理咨询",picUrl:e(5474),clue:[{id:1031,picUrl:e(7376),desc:"这里没有人，桌上放了一满瓶药，药瓶上贴了标签【深度催眠辅助型药品】。"}]},{id:1040,name:"拘留所",picUrl:e(6538),clue:[{id:1041,picUrl:e(9368),desc:"一群留着杀马特造型的人一看到消瘦眼镜男和微胖男子就鼓噪起来，一个大哥模样的人怒骂道:“你们這些口乞裹扒外嘚!嗱勒卧嘚200塊，還把卧得钅刚潶琵琶调鲍勒!赶快還给卧!缶则等卧绌祛砍死你锕!%。”"}]},{id:1050,name:"雄大便利店",picUrl:e(7334),clue:[{id:1051,picUrl:e(5957),desc:"便利店员工看了看你们，说:“昨晚大概9点25左右，一个头上套着黑色塑料袋的神经病来了，我们开始还以为遇到打劫了呢!结果那神经病买了一包卫生巾就跑了。对了，他还让我们给他撕了张小票……”"}]},{id:1060,name:"酒吧",picUrl:e(8874),clue:[{id:1061,picUrl:e(2724),desc:"酒吧的服务员说:“大约8点20左右，我看到你们那个看起来文质彬彬的朋友给你们的酒里放了点什么东西。后来你们走了后，我在你们的酒杯里发现了苯丙胺（兴奋剂）的残迹。”"},{id:1062,picUrl:e(5988),desc:"酒吧的调酒师说:“昨晚你们几个在这里喝酒，喝到8点半左右，一个带着墨镜，看上去很有神秘感的女子来了，她和你们中那个看起来文质彬彬的男子交谈了几句，然后那女子卸下眼镜和你们每个人都说了几句话就离开了。”"},{id:1063,picUrl:e(466),desc:"酒吧的门童说:“你们大约是9点离开这里的，我问你们需不需要叫两辆车，胖哥说不用，说他从来没有坐过公交车，要体验一次。那文质彬彬的男子也说不愿意和大家分开。”"}]},{id:1070,name:"天地良心包子店",picUrl:e(1982),clue:[{id:1071,picUrl:e(1334),desc:"包子铺的招牌上写:【招牌牛肉包2元】【三鲜包1.5元】【南瓜稀饭2元】【正宗童子尿煮鸡蛋2元】"}]},{id:1080,name:"沃尔牛超市",picUrl:e(2681),clue:[{id:1081,picUrl:e(4281),desc:"昨天有个文文静静的姑娘在我们这里买了排骨，萝卜，创可贴，还自言自语的说要几个苹果，但看到进口苹果的价格后，身体却很老实的挑了几个土豆"}]},{id:1090,name:"瑞士原装名表店",picUrl:e(7742),clue:[{id:1091,picUrl:e(5821),desc:"店主看到你们，轻蔑的笑了笑，说:“呦，买到1000块的劳力士了吗?要不要再画一个?"}]},{id:1100,name:"出租车公司",picUrl:e(1843),clue:[{id:1101,picUrl:e(5990),desc:"这里的管理人员说:“号牌为2B250的司机师傅说你们昨晚在路边打车，那个大个子说他“奶头疼”，问司机最近的医院在哪里。司机师傅见你们行为怪异，一身酒气，于是就推说下班拒绝了你们，并且给你们指出了地铁站的方向。”"}]},{id:1110,name:"公交车调度站",picUrl:e(4696),clue:[{id:1111,picUrl:e(9973),desc:"调度站工作人员说:“听当事司机说，你们几个人一身的酒气，也没带零钱，非要上车，还是一位老奶奶帮你们投的币。”"},{id:1112,picUrl:e(9630),desc:"工作人员调出了事发公交车昨晚的监控录像,录像上看到壮硕男子在车上喝止小愉行窃，小愉掏出匕首划伤了他的大腿，一个慈祥的老奶奶带着众人一起下了车。"}]},{id:1120,name:"四季如春民宿",picUrl:e(2548),clue:[{id:1121,picUrl:e(8659),desc:"前台接待员看到你们，不满意的说:“昨天看你们喝醉了不和你们计较，以后电动车只能停在楼下啊，不可以扛进房间。”"},{id:1122,picUrl:e(5631),desc:"房间内的一堵墙上用口红写着一首诗:愿以笔杆化神剑，斩破苍穹怒问天，前生犯了什么错，使我今生没人怜？房间放着一个IPhone手机，打开手机，看到的第一条短信是凌晨3点59分一个联系名叫“亲爱的河狸先森”发来的，内容只有3个字:我爱她。"},{id:1123,picUrl:e(4130),desc:"房间里卫生间的镜子上贴着一张创可贴。电视遥控器也找不到了。垃圾桶里扔着2个啃成苹果核状的土豆。厨房的切菜板上有一些雕成文字状的萝卜，看字形应该是个“丁”字。"}]},{id:1130,name:"大发小卖部",picUrl:e(4919),clue:[{id:1131,picUrl:e(5304),desc:"小卖部里的大妈看了一眼有些宅的女子，说:“你昨晚在这买了副扑克牌就走了。”"}]},{id:1140,name:"回马枪餐馆",picUrl:e(1272),clue:[{id:1141,picUrl:e(9181),desc:"餐馆的老板是个老头，看到你们中的壮硕男子就兴高采烈地说:“干儿子，你昨晚打电话给我，张口就问那盆小龙虾干啥?”"},{id:1142,picUrl:e(8580),desc:"餐馆的伙计骂骂咧咧的说:“也不知道哪个缺德鬼，在冰箱里撒了一泡尿……”"},{id:1143,picUrl:e(1074),desc:"餐馆放武财神的供台上放着一个哆啦A梦，你心里很纳闷:还有人拜这个的?"},{id:1144,picUrl:e(3019),desc:"餐馆的伙计看到你们，问:“你们昨晚把那个精神病人送到公安局了吗?”"},{id:1145,picUrl:e(9768),desc:"餐馆的伙计心有余悸地说:“昨晚你们离开后，有一群凶神恶煞般的家伙跑来问那个精神病人的事情，我就说了是你们把他带走了。”"}]},{id:1150,name:"尔康美发造型",picUrl:e(5306),clue:[{id:1151,picUrl:e(3896),desc:"一个店员告诉你们:“昨天葬爱家族的人带来这个胖哥哥来做造型，是TONY老师给他做的。”"},{id:1152,picUrl:e(4194),desc:"造型师TONY说:“整个葬爱家族的发型都是我刘壮实……哦骚瑞，是我TONY刘给做的。昨天葬爱家族要和魅影家族飙车，还说赌注是什么金刚黑琵琶。”"}]},{id:1160,name:"富贵楼典当行",picUrl:e(9236),clue:[{id:1161,picUrl:e(7799),desc:"店员看到你们，厌恶的说:“我们这里是正规典当行，请不要像昨晚一样无理取闹!”"}]},{id:1170,name:"超新星纹身店",picUrl:e(7995),clue:[{id:1171,picUrl:e(5760),desc:"店员看到消瘦眼镜男，兴奋的说:“帅哥，怎么样，那四个字纹的还满意吗?你们赢得比赛了吗?"}]},{id:1180,name:"地铁",picUrl:e(2091),clue:[{id:1181,picUrl:e(7534),desc:"一台自动售票机上挂了个牌子:【本机找零硬币不足，现金用户请到旁边机器购票】"},{id:1182,picUrl:e(2818),desc:"一个工作人员看到你们，严厉的说:“你们都是成年人了，以后乘坐地铁时请勿将饮料泼洒在车厢里。”完了又补充了一句:“而且泼的还是别人的饮料……”"}]},{id:1190,name:"蓝海医院",picUrl:e(6094),clue:[{id:1191,picUrl:e(6772),desc:"两个年轻护士在角落聊天，一边聊一边笑，隐约听到一个护士在说:“露露，听说了吗?昨晚急诊来了一群2B，居然拿卫生巾当止血带，幸亏那个受伤的身体素质不错，要不然非得吸死他……另外一个护士在说:“听说那群人里还有一个矮胖子，头上破了点皮就要找医生，小树医生说这幸亏来得早，来的晚点伤口都愈合了呢!蛋蛋，你说搞笑不?"}]},{id:1020,name:"公安局",picUrl:e(7934),clue:[{id:1021,picUrl:e(40),desc:"这里的民警看到你们，热情的说:“同志，你们昨晚送来的毒枭我们已经押解去上级部门了，这次破冰行动，你们立下的功劳当属第一!”"},{id:1022,picUrl:e(7283),desc:"民警告诉你们:“这个毒枭昨晚就是去和人接头交易的，幸亏你们及时抓住了他!”"},{id:1023,picUrl:e(1866),desc:"一个警官叮嘱你们:“这个毒枭有不少同伙，你们如果遇到威胁报复，请及时联系我们，我们会派出专人保护你们的安全。以后遇到这样的事情你们电话报警就可以了，奖金我们一样会给，不要再次尝试去抓捕罪犯了，太危险了。”"},{id:1024,picUrl:e(7440),desc:"一个民警在给一个警官汇报:“队长，经专业人员检测，昨晚抓住的毒枭体内也没有藏毒，也许是他看到势头不好，提前将毒品丢弃或者藏起来了。”"},{id:1025,picUrl:e(5548),desc:"一个民警在给一个警官汇报:“队长，昨晚半夜3点20分有人打电话，说爱尔美容店里放了13个炸弹，经过我们仔细排查，并未发现炸弹。应该是恶作剧。”"},{id:1026,picUrl:e(7667),desc:"一个民警在给一个警官汇报:“队长，凌晨4点左右，东坪山景区山体发生塌方，一辆行驶中的轿车被山上滚落的碎石块砸穿挡风玻璃，车上有1人不幸被砸中头颅当场死亡。我们的人冒着暴雨在凌晨5点多时赶到现场进行了取证，发现这像是一起意外事故。死者的身份仍在确认中。”另外，这辆车被后边的一辆SUV追尾了，后车损坏并不严重，但后车上却没有人。"},{id:1027,picUrl:e(9088),desc:"一个民警对你们说:“作为市民积极抓捕罪犯是好事，但也得注意一下交通规则，兄弟单位说你们中那个胖子昨晚以飘移的方式在十字路口掉头，后来还和一群混混在路上飙车，我们考虑到他立的功劳,就帮忙把这个事情给抹平了。不过那群混混已经被我们以违反治安罪拘留了。他们的头头还说你们私吞了他的赌注，看在你们立功的份上，我就不过问此事了。"}]}]}},computed:{},created(){console.log(JSON.parse(localStorage.getItem("script")))},methods:{pickClue(t){this.isShowClue=!1,this.clue1List=this.clue[t].clue1,this.clueTitle=this.clue[t].name},ImagePre(t){(0,p.Z)([t])},pickMapClue(t){this.isShowMapClue=!1,this.mapClueList=this.mapclue[t].clue,this.mapClueTitle=this.mapclue[t].name},pickClue2(t){this.isShowClue2=!1,this.clue2List=this.clue[t].clue2,this.clue2Title=this.clue[t].name2},levelup(t){this.level==t-1?s.Z.confirm({title:"确认是否解锁",message:"请根据主持人安排解锁相关的线索"}).then((()=>{this.level++,localStorage.setItem("level",this.level)})).catch((()=>{})):(console.log(this.level,t-1),(0,n.Z)("请按主持人提示解锁"))}}},o=l,a=e(1001),d=(0,a.Z)(o,r,c,!1,null,"e59764da",null),u=d.exports},5244:function(t,i,e){t.exports=e.p+"img/01.2c1e8980.jpg"},4173:function(t,i,e){t.exports=e.p+"img/02.861526c3.jpg"},3495:function(t,i,e){t.exports=e.p+"img/03.5cb1b2de.jpg"},6155:function(t,i,e){t.exports=e.p+"img/04.f7551e67.jpg"},9779:function(t,i,e){t.exports=e.p+"img/05.fe00e5d1.jpg"},7595:function(t,i,e){t.exports=e.p+"img/06.e461e6d6.jpg"},6072:function(t,i,e){t.exports=e.p+"img/1010.fa12f435.png"},6466:function(t,i,e){t.exports=e.p+"img/1011.0f7dde97.png"},7934:function(t,i,e){t.exports=e.p+"img/1020.b9dcff46.png"},40:function(t,i,e){t.exports=e.p+"img/1021.c2932c3f.png"},7283:function(t,i,e){t.exports=e.p+"img/1022.0e4bc322.png"},1866:function(t,i,e){t.exports=e.p+"img/1023.fe66df4b.png"},7440:function(t,i,e){t.exports=e.p+"img/1024.a42cd134.png"},5548:function(t,i,e){t.exports=e.p+"img/1025.aa8fc771.png"},7667:function(t,i,e){t.exports=e.p+"img/1026.d73348fe.png"},9088:function(t,i,e){t.exports=e.p+"img/1027.4d7eadb5.png"},5474:function(t,i,e){t.exports=e.p+"img/1030.eba4e5d6.png"},7376:function(t,i,e){t.exports=e.p+"img/1031.8aeefc90.png"},6538:function(t,i,e){t.exports=e.p+"img/1040.35a8237c.png"},9368:function(t,i,e){t.exports=e.p+"img/1041.cb8ebc63.png"},7334:function(t,i,e){t.exports=e.p+"img/1050.38d23b4b.png"},5957:function(t,i,e){t.exports=e.p+"img/1051.98134393.png"},8874:function(t,i,e){t.exports=e.p+"img/1060.92b14225.png"},2724:function(t,i,e){t.exports=e.p+"img/1061.05a4e6ad.png"},5988:function(t,i,e){t.exports=e.p+"img/1062.01341268.png"},466:function(t,i,e){t.exports=e.p+"img/1063.a39e3f29.png"},1982:function(t,i,e){t.exports=e.p+"img/1070.d447f6ef.png"},1334:function(t,i,e){t.exports=e.p+"img/1071.3faa6d7e.png"},2681:function(t,i,e){t.exports=e.p+"img/1080.93ae48a8.png"},4281:function(t,i,e){t.exports=e.p+"img/1081.dd7f0b91.png"},7742:function(t,i,e){t.exports=e.p+"img/1090.edba2393.png"},5821:function(t,i,e){t.exports=e.p+"img/1091.6118655f.png"},1843:function(t,i,e){t.exports=e.p+"img/1100.f176f9a2.png"},5990:function(t,i,e){t.exports=e.p+"img/1101.aafb51fe.png"},6433:function(t,i,e){t.exports=e.p+"img/111.38836d97.png"},4696:function(t,i,e){t.exports=e.p+"img/1110.288f4ba8.png"},9973:function(t,i,e){t.exports=e.p+"img/1111.df5d7f32.png"},9630:function(t,i,e){t.exports=e.p+"img/1112.bdd8f187.png"},5163:function(t,i,e){t.exports=e.p+"img/112.1ef7d76c.png"},2548:function(t,i,e){t.exports=e.p+"img/1120.38592e6e.png"},8659:function(t,i,e){t.exports=e.p+"img/1121.ed14a9bf.png"},5631:function(t,i,e){t.exports=e.p+"img/1122.4c6d7238.png"},4130:function(t,i,e){t.exports=e.p+"img/1123.a3c93a52.png"},4605:function(t,i,e){t.exports=e.p+"img/113.fb284138.png"},4919:function(t,i,e){t.exports=e.p+"img/1130.fdea84b8.png"},5304:function(t,i,e){t.exports=e.p+"img/1131.ada636de.png"},1272:function(t,i,e){t.exports=e.p+"img/1140.65bc789b.png"},9181:function(t,i,e){t.exports=e.p+"img/1141.f6f6a414.png"},8580:function(t,i,e){t.exports=e.p+"img/1142.0c82f3d9.png"},1074:function(t,i,e){t.exports=e.p+"img/1143.fa1c8883.png"},3019:function(t,i,e){t.exports=e.p+"img/1144.225e7019.png"},9768:function(t,i,e){t.exports=e.p+"img/1145.a8409f74.png"},5306:function(t,i,e){t.exports=e.p+"img/1150.fe887aa3.png"},3896:function(t,i,e){t.exports=e.p+"img/1151.0af9d35c.png"},4194:function(t,i,e){t.exports=e.p+"img/1152.99082bc2.png"},9236:function(t,i,e){t.exports=e.p+"img/1160.735c3ff8.png"},7799:function(t,i,e){t.exports=e.p+"img/1161.9f20e9cb.png"},7995:function(t,i,e){t.exports=e.p+"img/1170.f4dc2b2e.png"},5760:function(t,i,e){t.exports=e.p+"img/1171.d920654a.png"},2091:function(t,i,e){t.exports=e.p+"img/1180.a1a4dbf6.png"},7534:function(t,i,e){t.exports=e.p+"img/1181.034f7566.png"},2818:function(t,i,e){t.exports=e.p+"img/1182.ef01b409.png"},6094:function(t,i,e){t.exports=e.p+"img/1190.5deb7124.png"},6772:function(t,i,e){t.exports=e.p+"img/1191.f425f403.png"},3113:function(t,i,e){t.exports=e.p+"img/121.53ced1bf.png"},6383:function(t,i,e){t.exports=e.p+"img/122.b346f959.png"},7299:function(t,i,e){t.exports=e.p+"img/123.700f99fc.png"},6633:function(t,i,e){t.exports=e.p+"img/211.7704e07f.png"},5624:function(t,i,e){t.exports=e.p+"img/212.8f1c1508.png"},8810:function(t,i,e){t.exports=e.p+"img/213.6b8ea77c.png"},4157:function(t,i,e){t.exports=e.p+"img/221.4090f099.png"},3941:function(t,i,e){t.exports=e.p+"img/222.ac22e54d.png"},7783:function(t,i,e){t.exports=e.p+"img/223.71e9f538.png"},3265:function(t,i,e){t.exports=e.p+"img/311.af80a5f3.png"},5482:function(t,i,e){t.exports=e.p+"img/321.27a57406.png"},1104:function(t,i,e){t.exports=e.p+"img/322.1d33a8b3.png"},4128:function(t,i,e){t.exports=e.p+"img/411.2f8d5ebf.png"},2312:function(t,i,e){t.exports=e.p+"img/421.c9abc39e.png"},8725:function(t,i,e){t.exports=e.p+"img/422.a127d772.png"},3612:function(t,i,e){t.exports=e.p+"img/423.7cde0367.png"},8743:function(t,i,e){t.exports=e.p+"img/511.4e4fdcec.png"},864:function(t,i,e){t.exports=e.p+"img/512.483241e1.png"},2621:function(t,i,e){t.exports=e.p+"img/513.8bc9496e.png"},406:function(t,i,e){t.exports=e.p+"img/521.ccbaecc1.png"},9233:function(t,i,e){t.exports=e.p+"img/522.0162381b.png"},6577:function(t,i,e){t.exports=e.p+"img/523.d7178c04.png"},9244:function(t,i,e){t.exports=e.p+"img/524.c23d37c0.png"},4091:function(t,i,e){t.exports=e.p+"img/525.99ee6812.png"},8101:function(t,i,e){t.exports=e.p+"img/611.d09e556b.png"},433:function(t,i,e){t.exports=e.p+"img/612.87daf043.png"},363:function(t,i,e){t.exports=e.p+"img/621.fec5cec0.png"},7060:function(t,i,e){t.exports=e.p+"img/622.b6eb0a9d.png"},8385:function(t,i,e){t.exports=e.p+"img/623.40e4ffd3.png"},3452:function(t,i,e){t.exports=e.p+"img/624.8d86ba6e.png"},2978:function(t,i,e){t.exports=e.p+"img/625.6d5eb8ee.png"},1858:function(t,i,e){t.exports=e.p+"img/map.4307e434.jpg"}}]);
//# sourceMappingURL=809.850cef0f.js.map