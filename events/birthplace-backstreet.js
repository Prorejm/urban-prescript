// ===== 后巷(Backstreet)出生地专属事件（125个）=====
// 都市世界观：后巷是巢与巢之间的缓冲地带，是都市中最混乱、最危险也最真实的地带
// 这里没有翼公司的保护，没有认知滤网的净化，只有赤裸裸的生存法则
// 出生在这里的孩子从学会走路的那一天起，就在学习如何活下去
// 后巷的孩子没有童年，只有求生的每一天

// ================================================================
// 幼儿期（0-6岁，65个）
// ================================================================

// ===== 1. 街头生存（15个：bp_backstreet_001 ~ bp_backstreet_015）=====
// tag: '后巷幼儿-生存'

registerEvent({
  id: 'bp_backstreet_001',
  text: '你才刚学会走路不久，就已经明白了一件事——后巷的地面不能随便碰。今天你好奇地把手伸进一条排水沟里，瞬间被尖锐的玻璃碎片划破了手指。血滴落在脏水里，你疼得大哭起来。路过的老乞丐看了你一眼，扔给你一块脏兮兮的布条，嘟囔了一句："后巷第一课——别碰你不认识的东西。"',
  flag: 'bp_backstreet_001',
  effectText: '体质-1，意志+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_002',
  text: '你今天学会了一件事——分辨帮派的涂鸦标志。墙角那个红色的三角形是"红棍会"的地盘，蓝色圆圈是"蓝水帮"的标记，而那个用黑色喷漆画的骷髅头——你被大人警告过，看到那个标志要绕道走，那是"手指"留下的标记。你在心里默默记住了这些图案，像是在学习一种只有后巷孩子才懂的文字。',
  flag: 'bp_backstreet_002',
  effectText: '智力+1，意志+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_003',
  text: '你跟着几个大孩子去翻垃圾堆找吃的。他们教你哪些垃圾堆是"安全"的——餐馆后厨的垃圾通常有剩饭，但得小心厨余桶里的碎骨头和油污；居民区的垃圾可能有半块面包，但运气好的时候还能找到被扔掉的衣服。你今天找到了一根还有肉的鸡腿骨，开心得像捡到了宝藏。',
  flag: 'bp_backstreet_003',
  effectText: '体质+1，智力+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_004',
  text: '你在巷子尽头发现了一个生锈的公共水龙头，居然还能出水！你兴奋地跑回去告诉大人。等你们拿着桶赶来时，已经有几个流浪汉在那里排队了。他们没有赶走你，反而朝你笑了笑，说："小鬼眼力不错。"你排在队伍末尾，第一次感受到——在后巷，发现一个水源是一件值得庆祝的事。',
  flag: 'bp_backstreet_004',
  effectText: '魅力+1，精神+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_005',
  text: '你今天差点走丢了。后巷的巷子七拐八拐，每一条看起来都差不多。你追着一只野猫跑过了三个路口，然后发现自己站在一个完全不认识的地方。你害怕得想哭，但想起大人说过——在后巷哭会引来危险。你咬着嘴唇，靠着墙站了一会儿，终于找到了熟悉的垃圾堆，顺着气味走回了家。',
  flag: 'bp_backstreet_005',
  effectText: '意志+2，精神-1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_006',
  text: '你饿了一整天，肚子咕咕叫个不停。家里什么都没有了，你只能喝凉水充饥。这时巷口卖面的婆婆偷偷招手让你过去，端了一碗清汤面给你——说是卖剩下的，不要钱。你知道她是故意的，因为她碗里还有大半锅面。你低头吃面的时候假装没看到她在笑。后巷的温暖，总是藏在最不起眼的角落里。',
  flag: 'bp_backstreet_006',
  effectText: '体质+1，精神+2，魅力+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_007',
  text: '你今天学会了一个重要的生存技能——听脚步声。后巷里不同人的脚步声是不一样的：收尾人的皮靴声沉稳有力，帮派成员的拖鞋声拖沓随意，普通居民的布鞋声急促慌张。你趴在窗台上，闭着眼睛分辨外面走过的人，像在玩一个用生命做赌注的游戏。',
  flag: 'bp_backstreet_007',
  effectText: '智力+1，意志+1，精神+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_008',
  text: '你发现了一个藏身的好地方——两个废弃集装箱之间的夹缝，刚好能容下你瘦小的身体。你搬来一些纸板和破布，把它布置成了你的"秘密基地"。在这里你可以看到外面的动静，但外面的人不容易看到你。你把这个地方记在心里，告诉自己——万一遇到危险，就往这里跑。',
  flag: 'bp_backstreet_008',
  effectText: '智力+1，意志+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_009',
  text: '你今天跟大人去后巷的"黑市"——实际上就是一条摆满了地摊的街道。这里卖什么的都有：来路不明的罐头、二手衣物、生锈的工具、发霉的药品。你好奇地东张西望，被一个卖旧玩具的摊位吸引了。大人拉紧你的手，低声说："别看太久，这里的小偷专盯走神的小孩。"',
  flag: 'bp_backstreet_009',
  effectText: '智力+1，意志+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_010',
  text: '后巷下雨了。雨水混着垃圾和污垢从高处流下来，形成一条条黑色的溪流。你躲在屋檐下，看着雨水冲刷着巷子。雨水把墙上的帮派涂鸦冲淡了一些，也把空气中的臭味冲走了几分。你伸手接了一捧雨水，发现水里有淡淡的铁锈味和汽油味。这就是后巷雨水的味道。',
  flag: 'bp_backstreet_010',
  effectText: '精神-1，体质+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_011',
  text: '你今天记住了一个重要的教训——永远不要相信陌生人给的食物。一个穿着脏风衣的男人笑着递给你一块糖果，你正要接的时候，邻居大叔一把打掉了那块糖，恶狠狠地瞪着那个男人。男人悻悻地走了，大叔蹲下来对你说："记住，后巷里没有免费的糖。"你点了点头，虽然不太明白为什么，但你记住了那个男人的脸。',
  flag: 'bp_backstreet_011',
  effectText: '智力+1，意志+2',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_012',
  text: '你在垃圾堆里翻了半天，找到了一双还算完好的旧鞋——虽然大了好几号，但总比你脚上那双露出脚趾的破鞋强。你用绳子把鞋绑紧在脚上，走了几步，虽然不太跟脚，但至少脚底不会被碎玻璃划破了。你得意地在巷子里走了几个来回，觉得自己今天是个大赢家。',
  flag: 'bp_backstreet_012',
  effectText: '体质+1，精神+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_013',
  text: '今天在后巷的公共水龙头旁，你看到了一场"水的战争"。几个人为了谁先接水吵了起来，越吵越凶，最后动了手。你躲在一个翻倒的垃圾桶后面，看着他们扭打在一起，水桶被踢翻，水流了一地。最后谁也没接到水。你等他们散了之后，小心翼翼地走过去，捡起一个没摔破的桶，接满了水带回家。',
  flag: 'bp_backstreet_013',
  effectText: '智力+1，精神-1，意志+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_014',
  text: '你第一次注意到后巷的"宵禁"。天黑之后，大人不让你出门，你趴在窗户上看外面的街道。巷子里安静得可怕，平常热闹的摊贩都收了，只剩下几只流浪狗在路灯下翻垃圾。突然，你看到几个穿黑色制服的人影走过，他们手里拿着奇怪的武器，步伐一致，像是在巡逻。你屏住呼吸，直到他们走远才敢喘气。后来你才知道，那是"清道夫"。',
  flag: 'bp_backstreet_014',
  effectText: '意志+2，精神-1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_015',
  text: '今天有人教了你一个后巷的生存口诀——"遇事不决蹲墙角，看到打架赶紧跑；天黑之后不出门，听到枪声趴低好。"你跟着念了好几遍，把它牢牢记在心里。虽然很多字你还不太认识，但你知道这些话能救命。你把口诀讲给巷子里更小的孩子听，觉得自己像个小大人了。',
  flag: 'bp_backstreet_015',
  effectText: '智力+2，意志+1，魅力+1',
  major: false,
  tag: '后巷幼儿-生存',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

// ===== 2. 家庭/群落（12个：bp_backstreet_016 ~ bp_backstreet_027）=====
// tag: '后巷幼儿-家庭'

registerEvent({
  id: 'bp_backstreet_016',
  text: '你的家在后巷深处的一栋老旧公寓里，说是公寓，其实就是一个不到十平米的单间。你和家人挤在一起，连转身都得小心翼翼。墙壁上糊着发黄的报纸来挡风，天花板上的裂缝在下雨天会漏水。但你记得的并不是狭小和破旧，而是晚上全家人挤在一起取暖时的那种温度。',
  flag: 'bp_backstreet_016',
  effectText: '精神+2，意志+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_017',
  text: '你生病了，发着高烧。后巷没有医院，只有一家挂着破牌子的"诊所"——实际上就是个懂点医术的老头。家人花了一笔不小的钱请他来看了你一眼，他留下了几包苦得要命的药粉。你喝药的时候苦得直皱眉，但看着家人担心的眼神，你还是捏着鼻子喝完了。那几包药花掉了家里大半个月的收入。',
  flag: 'bp_backstreet_017',
  effectText: '体质-1，意志+2，精神+1，家境-1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_018',
  text: '你家隔壁住着一对老夫妻，老爷爷以前是个收尾人，腿瘸了之后就在后巷开了个小修鞋摊。他经常坐在门口修鞋，你蹲在旁边看他干活。他会一边用粗大的手指捏着细针穿过鞋底，一边给你讲他年轻时的故事——虽然你听不太懂那些关于"收尾""委托""禁忌"的词，但你很喜欢听他的声音。',
  flag: 'bp_backstreet_018',
  effectText: '智力+1，魅力+1，精神+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_019',
  text: '今天你这栋楼来了几个帮派的人收"保护费"。他们挨家挨户敲门，拿到钱就走，没拿到钱的就砸东西。你听到邻居家的东西被砸碎的声音，吓得缩在家人怀里发抖。家人紧紧搂着你，把仅有的几张皱巴巴的钞票准备好，等他们敲门时乖乖递了出去。他们走后，你在家人的眼睛里看到了一种你后来才懂的东西——屈辱。',
  flag: 'bp_backstreet_019',
  effectText: '意志+1，精神-2',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_020',
  text: '家里今天来了一个远房亲戚，据说是从别的后巷区过来的。他带来了一个消息——巢里最近在招工，虽然干的是最脏最累的活，但工资比后巷高几倍。家人围坐在一起商量了很久，声音压得很低。你听不懂他们说的那些事，但你记住了"巢"这个字——那个在远处闪烁着霓虹灯光的地方。',
  flag: 'bp_backstreet_020',
  effectText: '智力+1，精神+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_021',
  text: '你帮家里做了一件力所能及的事——用捡来的废铁丝把松动了的门栓加固了。虽然绑得歪歪扭扭的，但大人摸了摸你的头，说："有用。"那两个字让你高兴了一整天。在后巷，被承认"有用"是一件很重要的事，因为没用的人会被抛弃。你暗暗下定决心，要做一个有用的人。',
  flag: 'bp_backstreet_021',
  effectText: '力量+1，魅力+1，精神+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_022',
  text: '你的家族在后巷已经住了三代人。奶奶告诉你，你的曾祖父是第一批搬到这条巷子的人，那时候这里还没有这么多帮派，后巷虽然穷但还算太平。她说起往事的时候眼神很遥远，像是在看一个你永远看不到的地方。你问她想不想离开后巷，她笑了笑，没有回答。',
  flag: 'bp_backstreet_022',
  effectText: '精神+2，意志+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_023',
  text: '你的父亲/母亲今天回来得很晚，身上带着一股奇怪的金属味和血腥味。他们没有解释发生了什么，只是让你别问。你看到他们的手上有新的伤疤，指甲缝里全是洗不掉的黑色的东西。你默默地倒了一杯水递过去，他们接过来喝了一口，疲惫地靠在墙上闭上了眼睛。',
  flag: 'bp_backstreet_023',
  effectText: '精神-1，意志+2，魅力+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_024',
  text: '楼里的几户人家商量着搞了一个"互助会"——每家轮流看管所有的小孩，这样大人就能腾出手去干活了。今天轮到你家的邻居值日，你和其他五六个孩子被关在一个房间里待了一整天。有玩具可以玩——虽然都是些缺胳膊少腿的旧玩具——还有大人分发的粗面饼子。你第一次感受到了"集体"的感觉。',
  flag: 'bp_backstreet_024',
  effectText: '魅力+2，精神+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_025',
  text: '你的家人今天拿到了帮派发的"补贴"——一小袋米和一瓶劣质食用油。你知道这意味着他们最近在帮帮派做事。你看到家人接过米袋时低垂的眼帘和紧抿的嘴唇，他们不想拿这些施舍，但他们更不想看你挨饿。那天晚上的粥特别稠，但你吃得并不开心。',
  flag: 'bp_backstreet_025',
  effectText: '体质+1，精神-1，意志+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_026',
  text: '今天你家里发生了一件大事——你的一个年长亲戚决定离开后巷，去巢里碰碰运气。全家人凑了一笔钱给他做路费和"入门费"。他走的那天穿着一件借来的干净外套，背着一个破旧的包。他回头看了一眼这条他住了几十年的巷子，然后头也不回地走了。你看着他的背影消失在巷口，心里有一种说不出的感觉。',
  flag: 'bp_backstreet_026',
  effectText: '精神+2，意志+1',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_027',
  text: '你问家人为什么不搬家到更好的地方去。家人沉默了很久，然后告诉你——后巷的人是"没有身份"的。巢需要身份认证才能进入，那需要钱和关系——比他们拥有的多得多的钱和关系。后巷就是他们唯一能待的地方。你第一次听懂了"被困住"这个词的意思。',
  flag: 'bp_backstreet_027',
  effectText: '精神-1，智力+2',
  major: false,
  tag: '后巷幼儿-家庭',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

// ===== 3. 危险认知（12个：bp_backstreet_028 ~ bp_backstreet_039）=====
// tag: '后巷幼儿-危险'

registerEvent({
  id: 'bp_backstreet_028',
  text: '你躲在楼梯间的缝隙里，目睹了一场帮派之间的火并。七八个人在巷子里拿着刀和铁管互相砍杀，喊叫声、金属碰撞声、惨叫声混在一起。你捂住嘴巴，不让自己发出声音。有人倒在了血泊里，其他人从他身上跨过去继续打。你第一次知道——人命在后巷是这么不值钱的东西。',
  flag: 'bp_backstreet_028',
  effectText: '精神-3，意志+2',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_029',
  text: '你看到一个收尾人在执行委托。他穿着整洁的制服——和脏乱的后巷格格不入——手中握着一把闪着寒光的武器。他的目标是一个躲在后巷的逃债人。收尾人没有说话，没有警告，只是一拳打碎了那人的下巴，然后像拖一袋垃圾一样把人拖走了。你躲在垃圾桶后面，大气都不敢出。这就是都市的执行方式。',
  flag: 'bp_backstreet_029',
  effectText: '意志+2，精神-2，力量+1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_030',
  text: '清道夫来后巷扫荡了。你不知道他们为什么来，只知道整条巷子的人都在跑。大人拉着你的手拼命跑，你的脚几乎离地被拖拽着。身后传来什么东西被砸碎的声音，有人在尖叫，有人在哭喊。你们躲进了一个地下室里，所有人挤在一起，在黑暗中屏住呼吸，听着外面的动静持续了整整一个晚上。',
  flag: 'bp_backstreet_030',
  effectText: '意志+3，精神-3，体质-1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_031',
  text: '你在后巷的墙角发现了一具尸体。那是一个你认识的人——街角卖报纸的老张。他蜷缩在墙角，像是睡着了一样，但他的眼睛睁着，胸口有一个血洞。你愣在原地，不知道该做什么。后来是收垃圾的大叔发现了你，把你拉开，用一块破布盖住了老张的脸。"别看太久，"大叔说，"后巷这种事常有。"',
  flag: 'bp_backstreet_031',
  effectText: '精神-3，意志+2',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_032',
  text: '你听到了枪声——很近的枪声。你本能地蹲下，蜷缩在一个墙角里。然后是脚步声，有人从你身边跑过，他捂着肩膀，血从指缝里渗出来。他看了你一眼，眼神里是纯粹的恐惧。他继续跑，消失在另一条巷子里。紧接着又有几个人追了过去。你在原地蹲了很久，直到确定安全了才敢站起来，发现自己的腿已经蹲麻了。',
  flag: 'bp_backstreet_032',
  effectText: '意志+2，精神-2',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_033',
  text: '你所在的公寓楼发生了煤气泄漏。刺鼻的气味弥漫了整个楼道，有人大喊着"快跑"。你被大人拽着往下跑，楼梯上挤满了人，有人在哭，有人在骂，有人跌倒了又被后面的人扶起来。你们跑到街上，回头看到消防队——后巷那种私人的、收费高昂的消防队——姗姗来迟。幸运的是没有爆炸，但那天晚上整条街的人都没敢回家。',
  flag: 'bp_backstreet_033',
  effectText: '体质+1，精神-2，意志+1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_034',
  text: '你在后巷的公共厕所附近闻到了一股奇怪的气味——甜的，像是化学品。一个路过的老人闻到后脸色大变，捂着口鼻拉着你就跑。"快走！有人在处理尸体！他们用的那种药水闻了会中毒！"你被拽着跑了很远，直到那股甜味完全消失。老人松开你的手，咳嗽了好一阵子。你记住了一件事——后巷的甜味比臭味更危险。',
  flag: 'bp_backstreet_034',
  effectText: '智力+1，意志+1，精神-1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_035',
  text: '今天后巷来了几个穿西装的陌生人。他们和这里格格不入——干净的皮鞋踩在污水里，昂贵的西装和周围的破败形成了鲜明的对比。他们是某个翼公司派来的人，据说是来找一个欠债的"技术员"的。他们没找到人，于是把技术员住的整栋楼的水电都断了。你第一次见识到——翼公司的力量可以隔着巢的墙壁伸进后巷。',
  flag: 'bp_backstreet_035',
  effectText: '智力+1，意志+1，精神-1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_036',
  text: '你在玩耍的时候掉进了一个废弃的下水道井里。井不深，但壁上全是滑溜溜的苔藓，你爬不上去。你在黑暗里喊了很久，嗓子都喊哑了，没有人听到。你缩在井底，听着上面偶尔传来的脚步声，但那些声音来了又走了，没有人往井里看一眼。最后是一个听到你哭声的流浪汉用绳子把你拉了上来。你满身污泥，但活下来了。',
  flag: 'bp_backstreet_036',
  effectText: '体质-1，意志+2，精神-2',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_037',
  text: '你看到了都市中被称为"扭曲"的东西的痕迹。那天晚上后巷的天空中掠过一道不正常的影子，空气变得沉重而黏稠。大人们惊恐地关上窗户，把所有的灯都熄灭了。你从窗帘缝隙里看到一个人形的黑影在远处的楼顶上一闪而过，它的身体像是由光和扭曲的空气组成。第二天，那条街被封了，有人说那里发生了"不自然的事故"。',
  flag: 'bp_backstreet_037',
  effectText: '意志+2，精神-2，智力+1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_038',
  text: '你被一个疑似拐卖儿童的人盯上了。那人假装迷路向你问路，但他的眼神让你觉得不舒服——像是一条蛇在打量一只老鼠。你想起了大人教你的，大声说了一句"我不认识你！"然后转身就跑。你听到身后传来一声低沉的咒骂和追赶的脚步声。你钻进了自己知道的密道——那个只容小孩通过的墙洞——才甩掉了那个人。',
  flag: 'bp_backstreet_038',
  effectText: '意志+2，智力+1，力量+1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_039',
  text: '后巷爆发了一场小型火灾，据说是一个流浪汉取暖时不慎点燃了废品堆。火势蔓延得很快，黑烟滚滚。你和家人抓起最值钱的东西就往外跑。你们站在街上，看着火焰吞噬了半条街的房子。你听到有人在哭喊，有人在呼救，但火太大了，没人敢靠近。消防队来了，但因为后巷的路太窄，消防车进不来。',
  flag: 'bp_backstreet_039',
  effectText: '精神-3，意志+2，体质+1',
  major: false,
  tag: '后巷幼儿-危险',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

// ===== 4. 早期社会化（10个：bp_backstreet_040 ~ bp_backstreet_049）=====
// tag: '后巷幼儿-社交'

registerEvent({
  id: 'bp_backstreet_040',
  text: '你交到了后巷里的第一个朋友——一个和你差不多大的瘦小男孩/女孩。你们是在抢同一个易拉罐时认识的。本来差点打起来，但你们发现罐子里还有几滴汽水，于是你一口我一口地分着喝了。从此你们成了朋友，经常一起翻垃圾堆，一起躲帮派成员，互相分享找到的食物。后巷的孩子，友谊就是这么简单的事。',
  flag: 'bp_backstreet_040',
  effectText: '魅力+2，精神+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_041',
  text: '巷子里的大孩子组成了一个小团体，他们自称"后巷之牙"。他们占据了巷口的一个废弃岗亭作为据点，主要活动是保护"自己人"不受外面混混的欺负，当然也被保护的人要上缴一点点"贡品"——有时是半块面包，有时是一个有用的零件。你看着他们，心里既羡慕又有点害怕。',
  flag: 'bp_backstreet_041',
  effectText: '智力+1，魅力+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_042',
  text: '你被一群大孩子围住了，他们嘲笑你的衣服破旧，说你身上臭。你低着头，脸涨得通红，不知道该怎么回应。这时候跟你一起玩的那个朋友站了出来，挡在你面前——他比你还瘦小，但他气势很足地回骂了过去。大孩子们无趣地走开了。你看着朋友，心里暖暖的。在后巷，有人愿意为你站出来是件奢侈的事。',
  flag: 'bp_backstreet_042',
  effectText: '魅力+2，精神+2，意志+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_043',
  text: '你们这些后巷的孩子发明了一个游戏——"躲清道夫"。规则是一个人当清道夫，其他人躲藏，被找到的人就变成下一个"清道夫"。你们在废弃的建筑间跑来跑去，钻洞爬墙，玩得不亦乐乎。这个游戏其实是大人默许的——它在训练你们的躲藏能力和逃跑速度。在后巷，游戏也是生存训练的一部分。',
  flag: 'bp_backstreet_043',
  effectText: '体质+1，智力+1，魅力+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_044',
  text: '你和几个孩子在后巷的空地上踢一个用破布和绳子绑成的"足球"。你们没有球门，就用两块石头代替。巷子狭窄，墙就是边界，经常有人一脚把"球"踢到别人家的窗户上。今天你的"球"就砸中了一户人家晾在外面的衣服，被一个愤怒的女人追着骂了两条街。你们一边跑一边笑，笑得上气不接下气。',
  flag: 'bp_backstreet_044',
  effectText: '体质+1，魅力+1，精神+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_045',
  text: '你今天学会了一样东西——交换。你用捡到的一卷铜线从一个小孩那里换到了一本缺了封面和封底的旧漫画书。虽然书页残缺不全，很多图案也模糊不清了，但你依然看得津津有味。那是关于一个"收尾人"的故事——漫画里的主角穿着帅气的风衣，手持奇特的武器，惩恶扬善。你把这本书翻了无数遍，每一页都记住了。',
  flag: 'bp_backstreet_045',
  effectText: '智力+2，精神+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_046',
  text: '你和朋友之间发生了一次争吵——因为一块捡到的巧克力。你们都想吃那块巧克力，谁也不肯让谁。最后你们决定一人一半，但为了谁拿比较大的一半又吵了一架。最后你拿了大的一半，但回家后越想越后悔。第二天你把家里仅有的一块干饼掰了一半带给朋友。你们什么也没说，但就这样和好了。',
  flag: 'bp_backstreet_046',
  effectText: '魅力+1，精神+1，意志+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_047',
  text: '你们几个后巷的孩子成立了一个"秘密组织"——虽然说白了就是一个四五个小孩子的玩伴圈子。你们选了最年长的孩子当"首领"，制定了简单的规则：不准背叛同伴、找到的食物要分享、遇到危险要互相提醒。你们用捡来的喷漆在墙上画了一个代表你们的标记——一个简单的圆圈里三道杠。你觉得这是你人生中第一次归属。',
  flag: 'bp_backstreet_047',
  effectText: '魅力+2，意志+1，智力+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_048',
  text: '你第一次参加了后巷的"社区聚会"——其实就是几户人家凑在一起喝酒聊天。大人们喝着劣质的酒，说着工作、帮派、生存这些你听不懂的话题。你们小孩子则被赶到一边自己玩。你蹲在角落里，听着大人们的谈话声和笑声，偶尔夹杂着几声叹息。你注意到大人们只有在喝醉的时候才会笑出声音来。',
  flag: 'bp_backstreet_048',
  effectText: '精神+2，智力+1',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_049',
  text: '你和其他后巷的孩子一起被人带去做了一件"好事"——帮一家地下餐馆洗碗，报酬是一顿免费的饭。餐馆的后厨油腻腻的，碗盘堆得像小山一样高。你踩在一个倒扣的桶上才能够到水槽，用冰冷的自来水和劣质的洗涤剂洗了三个小时的碗。你的手被泡得发白起皱，但当你吃上那碗热腾腾的汤面时，你觉得一切都值得了。',
  flag: 'bp_backstreet_049',
  effectText: '体质+1，力量+1，精神+1，金钱+2',
  major: false,
  tag: '后巷幼儿-社交',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

// ===== 5. 小事件/彩蛋（16个：bp_backstreet_050 ~ bp_backstreet_065）=====
// tag: '后巷幼儿-彩蛋'

registerEvent({
  id: 'bp_backstreet_050',
  text: '后巷今天来了一个街头艺人。他提着一把破旧的小提琴，在巷口拉了起来。琴声并不好听——琴弦的音都不准——但你从未听过这样的声音。后巷只有噪音：机器的轰鸣、帮派的争吵、清道夫的皮靴声。你蹲在他面前听了整整一个下午。走的时候，他把那根断掉的琴弦送给了你。你把它当宝贝一样收了好多年。',
  flag: 'bp_backstreet_050',
  effectText: '精神+3，智力+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_051',
  text: '你在一个废弃的工厂车间里发现了一窝刚出生的小猫。猫妈妈警惕地看着你，但并没有攻击你。你远远地蹲着，看着那些毛茸茸的小家伙挤在一起吃奶。你每天都会偷偷去看它们，带一点自己都舍不得吃的食物给猫妈妈。后来小猫们长大了，有的跑了，有的死了，但你一直记得那个春天。',
  flag: 'bp_backstreet_051',
  effectText: '精神+2，魅力+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_052',
  text: '你在垃圾堆里发现了一本被丢弃的旧书——《都市基础机械原理》。书页已经发黄变脆，上面还有前主人用铅笔画的笔记。你虽然看不懂那些复杂的公式和图表，但你被书里的机械结构图吸引了。齿轮、杠杆、链条——那些精密的东西和你粗糙的后巷生活形成了巨大的反差。你把书藏在了你的秘密基地里。',
  flag: 'bp_backstreet_052',
  effectText: '智力+2，精神+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_053',
  text: '后巷举行了一场"市集"——实际上就是各家各户把还能用的东西拿出来交换而已。你跟着大人在摊位间穿梭，看到有人在卖旧衣服、有人在换工具、还有人在兜售一种据说是从巢里偷运出来的"高级零食"。你站在那个卖零食的摊位前挪不动腿，那透明的包装纸和鲜艳的颜色是你从未见过的东西。当然，那零食贵得离谱。',
  flag: 'bp_backstreet_053',
  effectText: '智力+1，精神+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_054',
  text: '你今天发现了一样奇怪的东西——一个从巢里飘出来的气球。那是一只银色的、印着某家翼公司商标的气球。它一定是从巢里飞出来的，越过了高大的围墙，落在了后巷的泥地里。你把它捡起来，虽然上面沾了泥巴，但你仍然觉得它是你见过的最美的东西。你把气球绑在窗台上，看着它在风里飘动，像是从另一个世界寄来的信。',
  flag: 'bp_backstreet_054',
  effectText: '精神+2，智力+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_055',
  text: '你在巷子里捡到一块奇怪的金属牌，上面刻着一串编号和一个模糊的徽章。你拿给隔壁的老修鞋匠看，他眯着眼睛研究了半天，说这可能是某个收尾人协会的身份牌，不知为什么遗落在这里。他把牌子还给你，叮嘱你收好，别让帮派的人看到了。你把牌子挂在脖子上，藏在衣服里面，觉得那是你的护身符。',
  flag: 'bp_backstreet_055',
  effectText: '意志+1，魅力+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_056',
  text: '今天后巷的孩子们聚在一起比赛——比谁能从垃圾堆里找到最有用的东西。你翻遍了三座垃圾山，最后找到了一卷还算完整的绝缘胶带、一个还能走的老式怀表（虽然慢了半小时）、以及一把缺了几个齿的扳手。你凭着怀表赢得了比赛。"冠军奖品"是其他孩子每人分给你一小块他们找到的饼干。',
  flag: 'bp_backstreet_056',
  effectText: '智力+1，魅力+1，精神+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_057',
  text: '你发现后巷有一面神奇的墙，上面贴满了各种纸条和传单。有寻人启事、有招工广告、有帮派的警告、还有不知道谁写的涂鸦诗。你虽然很多字都不认识，但你喜欢站在那里看。有一张纸条上写了一行字："只要还没死，就还有机会。"下面有人用不同的笔迹回了三个字："说得好。「',
  flag: 'bp_backstreet_057',
  effectText: '精神+2，意志+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_058',
  text: '后巷进来了一只三条腿的流浪狗。它虽然少了一条腿，但跑得并不慢，而且异常机灵——知道哪些人可以靠近、哪些人要躲开。你每天分一点食物给它，慢慢地它就跟你熟了。它会在你回家的路上等你，陪你在垃圾堆里翻找东西。你给它取了个名字——"瘸三"，虽然简单，但它是你第一个真正的动物朋友。',
  flag: 'bp_backstreet_058',
  effectText: '魅力+2，精神+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_059',
  text: '你今天偷偷爬上了后巷最高的那栋废弃水塔。从上面看下去，后巷像一个巨大的迷宫——灰色的建筑物密密麻麻地挤在一起，中间是蜿蜒狭窄的通道。你能看到远处巢的高楼和霓虹灯，它们在雾中闪闪发光，像是一座悬浮在空中的城市。你在水塔顶上坐了很久，风吹着你的头发，你第一次觉得后巷很小，世界很大。',
  flag: 'bp_backstreet_059',
  effectText: '精神+2，智力+1，意志+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_060',
  text: '后巷停电了。整片区域陷入了一片黑暗，只有远处巢的霓虹灯光像星星一样闪烁着。邻居们都走了出来，站在巷子里聊天——因为没有灯可看，没有电视可看，反而让大家都聚到了一起。有人点起了蜡烛，有人拿出了自酿的酒。你在人群中跑来跑去，觉得黑暗也没有那么可怕。',
  flag: 'bp_backstreet_060',
  effectText: '精神+2，魅力+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_061',
  text: '你在墙缝里发现了一个"时间胶囊"——一个生锈的铁盒子里装着一些旧照片、一封信和几枚古老的硬币。照片上的人穿着几十年前的衣服，背景里的后巷比现在看起来干净一些。信是用一种你不太懂的语言写的，你只认出了开头的一个词——"亲爱的"。你把盒子放回了原处，没有拿走任何东西。那是别人的人生，你不想打扰。',
  flag: 'bp_backstreet_061',
  effectText: '精神+2，智力+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_062',
  text: '一个醉醺醺的老头在巷子里大声唱着歌。他的调子完全不在音上，歌词也是胡编乱造的，但他唱得很投入，像是这个世界上最快乐的疯子。有人在笑他，有人在大声让他闭嘴，但你蹲在角落里听了很久。他唱到一句让你印象深刻的歌词——"都市是座大监狱，后巷是牢房里的马桶。"多年后你回想起这句话，觉得真是个精妙的比喻。',
  flag: 'bp_backstreet_062',
  effectText: '精神+2，智力+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_063',
  text: '你在一堆工业废料中发现了一些废弃的芯片和电路板。它们闪烁着金属的光泽，像是什么精密设备的部件。你把它们收集起来——虽然你不知道用途，但你觉得这些东西也许能卖钱。后来一个懂行的人告诉你这些是"认知滤网"的部件，是巢里的人用来过滤现实的东西。你看着那些小小的芯片，第一次对"滤网"这个概念产生了好奇。',
  flag: 'bp_backstreet_063',
  effectText: '智力+2，精神+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_064',
  text: '后巷里来了一个奇怪的流浪汉，他声称自己以前是某个翼公司的高管，因为"看到了不该看的东西"被流放到后巷。他说的话半真半假——他对后巷一无所知，连找水源都不会，但他说起巢里的制度和技术时又头头是道。孩子们围着他听他讲故事，他讲到都市顶层的秘密时压低了声音，像是怕被什么监听。你听得入迷。',
  flag: 'bp_backstreet_064',
  effectText: '智力+2，精神+1',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_065',
  text: '你在你的秘密基地的墙上刻下了一行歪歪扭扭的字——"我要离开这里"。你还不完全理解这句话的重量，但你隐约知道自己不属于后巷。你用捡来的钉子一笔一划地刻着，墙壁发出刺耳的声音。刻完之后你退后几步看了看，为自己能写出这么多字感到了一丝自豪。多年后你回来看到这行字时，心情复杂得难以言说。',
  flag: 'bp_backstreet_065',
  effectText: '意志+2，精神+2',
  major: false,
  tag: '后巷幼儿-彩蛋',
  minAge: 0, maxAge: 6,
  birthplace: 'backstreet'
});

// ================================================================
// 少年期（7-18岁，60个）
// ================================================================

// ===== 6. 生存竞争（15个：bp_backstreet_066 ~ bp_backstreet_080）=====
// tag: '后巷少年-竞争'

registerEvent({
  id: 'bp_backstreet_066',
  text: '后巷的资源越来越紧张了。最近新来了一批被巢里驱逐出来的人，让本来就拥挤不堪的后巷更加混乱。你今天在垃圾堆里跟一个陌生男孩打了一架——为了半块发霉的面包。你比他瘦小，但你更狠——你咬了他的手臂，用指甲抓了他的脸。最后你抢到了面包，跑回家时满嘴的血腥味。你不知道那是他的血还是你自己的。',
  flag: 'bp_backstreet_066',
  effectText: '体质+1，力量+1，意志+2，精神-1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_067',
  text: '你发现了一条"赚钱"的路子——帮一家地下加工厂运送"货物"。所谓的"货物"装在不透光的袋子里，你不知道里面是什么，也被告知不要问。你只需要把包裹从A点送到B点，就能拿到一笔小钱。你做了几次，每次都提心吊胆。你明白自己在做的很可能是违法的事，但后巷的孩子没有挑活的资格。',
  flag: 'bp_backstreet_067',
  effectText: '力量+1，意志+1，金钱+3，精神-1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_068',
  text: '你所在的小团体和另一群孩子因为地盘问题发生了冲突。地盘的分界线是一条排水沟——谁占据了排水沟附近的垃圾堆，谁就拥有了更好的觅食区。你们两边对峙着，用最恶毒的话互相咒骂。你站在人群中，手里握着一根铁管，心跳快得像要蹦出来。最后没有打起来——一个大人路过时吼了一嗓子，把你们都吓跑了。',
  flag: 'bp_backstreet_068',
  effectText: '体质+1，意志+2，精神-1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_069',
  text: '你在黑市上发现了一个赚钱的机会——帮商人看摊。虽然工资很少，但至少是份正经工作。你站了一整天，喉咙喊哑了，脚站酸了，卖出了几件小东西。收摊时商人多给了你一张皱巴巴的钞票，说："你嘴甜，明天还来。"你攥着那张钞票，觉得它比任何从垃圾堆里翻出来的东西都珍贵。',
  flag: 'bp_backstreet_069',
  effectText: '魅力+2，体质+1，金钱+3',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_070',
  text: '你的家人被帮派逼着去干一件危险的事——可能是偷东西，可能是送死。你看到家人出门前在袖子里藏了一把刀。你在门口等着，从天亮等到天黑，等他们浑身是伤地回来。你帮他们清洗伤口时手在发抖，但你咬着牙没有哭。那天晚上你做了一个决定——你要变强，强到没人敢再这样对你的家人。',
  flag: 'bp_backstreet_070',
  effectText: '意志+3，力量+1，精神-2',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_071',
  text: '你在后巷的废弃工厂里发现了一个秘密——那里藏了一批武器。钢管、砍刀、甚至还有几把手枪。这显然是谁的军火库。你看着那些武器，心跳加速。如果你拿走一把，你可能在下次冲突中多一分胜算；但如果被主人发现了...你犹豫了很久，最后空着手离开了。但你把位置牢牢记在了心里。',
  flag: 'bp_backstreet_071',
  effectText: '智力+1，意志+2',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_072',
  text: '你所在的区域发生了帮派之间的"资源重新分配"。说白了就是两个帮派打了一架，赢家接管了输家的地盘。新的帮派来收保护费时要求翻倍，而且态度比旧帮派更恶劣。你和邻居们聚在一起抱怨，但没有人敢反抗。你躲在人群后面，看着那些带刀的帮派成员，默默记住了他们的特征。',
  flag: 'bp_backstreet_072',
  effectText: '意志+2，精神-1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_073',
  text: '有人偷了你辛辛苦苦攒下的钱——你藏在床板下面的那笔钱。你知道是谁偷的——隔壁那个游手好闲的混混。你直接冲到他面前，握紧拳头要他还钱。他比你高大得多，轻而易举就把你推倒在地。你站起来，又被他打倒。你再站起来...如此三次之后，他终于有点慌了，扔下几张钞票就跑了。你满脸是血，但你拿回了大部分钱。',
  flag: 'bp_backstreet_073',
  effectText: '力量+2，意志+2，体质-1，金钱+4',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_074',
  text: '今天后巷来了一个需要"跑腿"的人——一个看起来很有钱、但不属于这里的人。他说他需要有人把他带到一个指定的地点，愿意出高价。你直觉这不对劲，但高价确实诱人。你接下委托后没有直接走他说的路线，而是绕了好几条路，确认没人跟踪后才到达目的地。交货后那人多给了你一笔小费，说："后巷的小鬼果然机灵。"',
  flag: 'bp_backstreet_074',
  effectText: '智力+2，金钱+4，意志+1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_075',
  text: '后巷的水源被污染了。不知道是谁在上游倒了什么化学品，水龙头里流出来的水带着一股刺鼻的味道。你跑了很远的路才找到一口还能用的井，但那里已经排了长队。你等了两个小时，才接到了半桶水。回家路上你小心翼翼地端着水桶，一厘米都不敢洒。这天晚上你学会了一件事——在后巷，干净的水比钱还贵。',
  flag: 'bp_backstreet_075',
  effectText: '体质-1，意志+2，精神-1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_076',
  text: '你被几个混混堵在了巷子里。他们想要你身上所有的钱。你虽然害怕，但你已经不是当年那个只会哭的小孩了。你假装顺从地掏口袋，然后趁他们松懈的瞬间，一脚踢翻了旁边的垃圾桶，转身就跑。你在狭窄的巷子里七拐八拐，利用那些你从小就跑惯了的路线甩掉了他们。你靠在墙上喘着气，心脏狂跳。',
  flag: 'bp_backstreet_076',
  effectText: '体质+1，力量+1，智力+1，意志+1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_077',
  text: '你的一个伙伴决定加入帮派。他穿着帮派发的新外套来跟你告别——那是条件的一部分，加入后就要和过去的"软弱的"关系一刀两断。他看着你的眼神里带着歉意和决绝。"别怪我，"他说，"我想活得好一点。"你看着他走远，新外套在路灯下反着光，像是另一个世界的人。你知道他选择了他的路。',
  flag: 'bp_backstreet_077',
  effectText: '精神-2，意志+2，魅力-1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_078',
  text: '你找到了一份在废品回收站工作的活儿。你的工作是分拣废品——把金属、塑料、纸张分别归类。工作又脏又累，灰尘让你的鼻子和肺都不舒服，但工头按天结钱，从不拖欠。你在废品堆里学会了分辨不同金属的手感，学会了怎么从一堆垃圾中快速找出值钱的东西。这些技能在后巷很有用。',
  flag: 'bp_backstreet_078',
  effectText: '力量+1，智力+1，金钱+3，体质-1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_079',
  text: '后巷爆发了一场流感。很多人病倒了，街上到处都是咳嗽声。你也没能幸免，发着低烧，浑身酸痛。但你不敢躺下——躺下了就没钱吃饭了。你拖着病体去干活，头重脚轻地走在巷子里，感觉整个世界都在旋转。一个卖药的老中医给了你几包草药，说"先欠着，好了再给钱"。你感激得差点哭出来。',
  flag: 'bp_backstreet_079',
  effectText: '体质-2，意志+2，精神-1，魅力+1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_080',
  text: '你今天鼓起勇气去了一家"工坊"——就在后巷边缘的一家小型机械修理铺。铺主是个沉默寡言的中年人，手上全是机油和伤疤。你问他还收不收学徒，他上下打量了你一眼，问你："会什么？"你说你会分拣废品、会跑腿、会打架。他笑了一下——那是你第一次看到他笑——然后说："明天来试试吧。"',
  flag: 'bp_backstreet_080',
  effectText: '智力+2，魅力+2，意志+1',
  major: false,
  tag: '后巷少年-竞争',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

// ===== 7. 收尾人启蒙（12个：bp_backstreet_081 ~ bp_backstreet_092）=====
// tag: '后巷少年-收尾人'

registerEvent({
  id: 'bp_backstreet_081',
  text: '你目睹了两个收尾人在后巷交手。那不是帮派混混那种乱砍乱打的斗殴——那是技艺的较量。两个人的动作精准而致命，每一次攻击都瞄准要害。他们的武器在昏暗的灯光下划出银色的弧线。战斗很快就结束了——一方被制服，另一方用简洁的动作完成了"收尾"。你躲在角落里，被那种力量深深震撼了。这就是收尾人。',
  flag: 'bp_backstreet_081',
  effectText: '力量+1，意志+2，智力+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_082',
  text: '你捡到了一个收尾人遗落的手册。封面上印着某个收尾人协会的徽章，里面记载了一些基础的任务流程和注意事项。你翻来覆去地看了很多遍，记住了里面的一些内容——如何评估任务难度、如何与委托人沟通、如何确认"收尾"完成。虽然这只是一本普通的手册，但你把它当成了一本通往另一个世界的指南。',
  flag: 'bp_backstreet_082',
  effectText: '智力+2，意志+1，精神+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_083',
  text: '你第一次以非正式的方式参与了一次"委托"。一个看起来不像后巷居民的人找到你，要你帮忙盯一个人——只需要记下那个人每天什么时间出门、去了哪里、见了谁。你觉得这很像收尾人的工作。你做了三天观察，把结果告诉委托人，他给了你一笔不错的报酬。你后来才知道，那真的是一个收尾人协会的分包任务。你算是入行了——虽然只是最边缘。',
  flag: 'bp_backstreet_083',
  effectText: '智力+2，意志+1，金钱+4',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_084',
  text: '你从一个退役的收尾人那里学到了第一堂武器使用课。他用一根木棍教你基础的挥砍和格挡动作。他说："武器不是用来吓人的，是用来完成工作的。每一次挥动都要有目的，没有目的的挥动只会浪费体力。"你学得很认真，因为你知道——在后巷，多一分战斗技能就多一分活下去的机会。',
  flag: 'bp_backstreet_084',
  effectText: '力量+2，体质+1，智力+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_085',
  text: '你在街上看到一个收尾人正在执行"禁忌"相关的事务。他追捕的是一个违反了某个翼公司禁忌的人。那个逃亡者跪在地上求饶，说他只是不小心看到了不该看的东西。收尾人面无表情地完成了工作。你站在远处，感到一种深入骨髓的寒意。你第一次真正理解了"禁忌"这个词的分量——那不是法律，那是比法律更绝对的东西。',
  flag: 'bp_backstreet_085',
  effectText: '意志+2，精神-2，智力+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_086',
  text: '你偶然得到了一个机会——帮一个受伤的收尾人传递信息。他在执行任务时受了伤，需要一个熟悉后巷地形的人帮他送一封信到某个指定地点。你接过那封封着火漆的信，穿过后巷的密道和捷径，避开了帮派的眼线，成功把信送到了。收尾人康复后专程来找你道谢，还给了你一个联系方式——"如果你以后想走上这条路，可以来找我。"',
  flag: 'bp_backstreet_086',
  effectText: '魅力+2，意志+1，智力+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_087',
  text: '你开始练习使用一种武器——你捡到的一把生锈的短刀。你在废弃建筑的墙上划出道道痕迹，练习刺击和切割的动作。刀很钝，但你用捡来的磨刀石一点一点把它磨锋利了。你握着那把短刀的时候，感觉它像是你身体的一部分。你不知道这把刀以前属于谁，但现在——它是你的了。',
  flag: 'bp_backstreet_087',
  effectText: '力量+2，意志+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_088',
  text: '你遇到了一位自称是"Hana协会"下级成员的收尾人。他穿着整洁的制服——和其他收尾人不同，他的制服上绣着金色的边线。他在后巷调查什么事情，你鼓起勇气上前跟他搭话。他看了你一眼，似乎看出了你眼中的向往。他说："想成为收尾人？先学会不被人发现地跟踪我，如果到天黑你还没跟丢，我就告诉你入门要准备什么。"',
  flag: 'bp_backstreet_088',
  effectText: '智力+2，意志+2，魅力+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_089',
  text: '你目睹了一个收尾人在执行"处理扭曲"的任务。那个"扭曲"曾经是一个人——你从对话中听出他是因为丧失了重要的东西而扭曲的。收尾人的战斗方式和你见过的完全不同——他的动作中带着某种近乎仪式的庄重。战斗结束后，收尾人对着尸体说了一句简短的话，像是在为死者送行。你在那一刻觉得，收尾人不仅仅是杀手。',
  flag: 'bp_backstreet_089',
  effectText: '意志+3，精神-1，智力+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_090',
  text: '你在后巷的地下擂台打了一场——不是为了钱，而是为了测试自己的实力。你的对手是一个比你大几岁的少年，他已经在擂台上赢了三场。你没有受过正规训练，但你从小在后巷摸爬滚打出来的本能让你出奇地灵活。你躲过了他几次攻击，找准机会一拳打在他下巴上——那是个侥幸，但也证明了你不是好欺负的。',
  flag: 'bp_backstreet_090',
  effectText: '力量+2，体质+1，意志+1，魅力+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_091',
  text: '你认识了一个从别的后巷区来的收尾人学徒。他跟着师父在城市里到处跑，见识过很多你没见过的东西。他给你讲其他区的见闻——有的区被帮派完全控制，有的区是工坊的天下，还有的区据说隐藏着都市的秘密入口。你听得入迷，恨不得立刻背上包跟他走。但他临走前告诉你："收尾人的路不是那么好走的，每一天都在拿命换经验。"',
  flag: 'bp_backstreet_091',
  effectText: '智力+2，精神+1，意志+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_092',
  text: '你终于鼓起勇气，走进了一家位于后巷深处的"收尾人事务所"。那是一个破旧的门面，门口挂着一块掉了漆的招牌。里面坐着一个看上去没什么特别的中年人，他正在看报纸。你结结巴巴地说你想接委托，他隔着报纸看了你一眼，说："小崽子，收尾人的工作是会死人的。你做好准备了吗？"你张了张嘴，发现自己在发抖——不是因为害怕，而是因为兴奋。',
  flag: 'bp_backstreet_092',
  effectText: '意志+3，魅力+2，精神+1',
  major: false,
  tag: '后巷少年-收尾人',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

// ===== 8. 帮派接触（12个：bp_backstreet_093 ~ bp_backstreet_104）=====
// tag: '后巷少年-帮派'

registerEvent({
  id: 'bp_backstreet_093',
  text: '"手指"的人今天在后巷出现了。你知道"手指"——那是都市中最庞大的情报组织之一，连后巷的孩子都知道他们的名字。他们穿着一成不变的制服，面无表情地在巷子里穿行。你躲在人群中看着他们，发现他们在记录着什么。一个"手指"的成员似乎注意到了你的目光，朝你看了过来。你赶紧低下头，心跳如鼓。',
  flag: 'bp_backstreet_093',
  effectText: '意志+2，精神-1，智力+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_094',
  text: '一个帮派的招募员找上了你。他看起来很和善——当然，所有帮派的招募员看起来都很和善。他对你说了他们帮派的好话："有饭吃、有地方住、有钱拿、有人罩着。"他让你考虑考虑。你表面上点头应着，但心里在打鼓。你知道加入帮派意味着什么——意味着你再也不是"普通人"了，意味着你这一生都会被帮派的印记束缚。',
  flag: 'bp_backstreet_094',
  effectText: '意志+2，魅力+1，智力+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_095',
  text: '两个帮派在你的街区发生了冲突。起因是因为"越界"——帮派之间有严格的地盘划分，一方的成员进入了另一方的地盘收保护费，这被视为挑衅。你站在自家窗户后面看着街上的对峙，双方各有十几个人，手里都拿着家伙。气氛紧张到了极点，连空气都像凝固了。最后是一声警笛——据说是某个协会的人来了——才让双方散开了。',
  flag: 'bp_backstreet_095',
  effectText: '意志+2，精神-2，智力+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_096',
  text: '一个帮派的小头目看上了你的能力——你在后巷跑了几年腿，对这里的路比谁都熟。他提出让你做他们的"信使"，专门负责送一些不方便通过常规渠道送的东西。报酬很丰厚，但你知道——帮派的信使知道的秘密太多，一旦出事第一个被灭口的就是信使。你想了一个晚上，最后拒绝了。小头目没说什么，但你看到他眼神冷了一瞬。',
  flag: 'bp_backstreet_096',
  effectText: '意志+2，智力+1，魅力+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_097',
  text: '你今天不小心闯入了另一个帮派的地盘。你只是在追一只跑掉的野兔——你已经好几天没吃过肉了——追着追着就跑过了界。等你反应过来的时候，几个面色不善的帮派成员已经围了上来。你赔着笑脸解释自己只是路过，但那几个人不依不饶。最后你不得不把身上所有的钱都交出来才被放走。回家的路上你又饿又气。',
  flag: 'bp_backstreet_097',
  effectText: '金钱-3，意志+1，精神-1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_098',
  text: '你在后巷的墙上看到了你的名字——被写在帮派的"黑名单"上。你心里一沉，开始回想最近有没有得罪什么人。是上次拒绝加入帮派的事？还是那次在冲突中站错了队？你花了一整夜的时间想办法，最后找到中间人递了话——你愿意为之前的"冒犯"赔礼。送出你半个月的收入后，你的名字从墙上消失了。在后巷，面子就是钱，钱就是命。',
  flag: 'bp_backstreet_098',
  effectText: '金钱-5，意志+2，智力+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_099',
  text: '今天帮派之间谈判，地点就在你家楼下。你被迫待在家里不能出门，听着楼下一群人在那里"讲数"。他们的声音时而高亢时而低沉，偶尔有拍桌子和摔东西的声音。你透过地板缝隙往下看，看到几双靴子围着一张桌子。谈判持续了几个小时，最后似乎是达成了什么协议。双方的人握手——然后各自在地上吐了一口唾沫，表示约定生效。',
  flag: 'bp_backstreet_099',
  effectText: '智力+1，意志+1，精神-1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_100',
  text: '你的一个亲戚加入了帮派，并且很快就爬到了不错的位置。他开始穿好衣服、戴金链子、走路带风。他回后巷来时总是带着几个手下，看起来风光无限。他拍着你的肩膀说："跟着我干吧，总比你在这里捡垃圾强。"你看着他——看着他那双已经变得冰冷的眼睛和手上若隐若现的伤疤——你第一次意识到，帮派会把人的什么东西吃掉。',
  flag: 'bp_backstreet_100',
  effectText: '精神-1，意志+2，魅力+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_101',
  text: '帮派在你家楼下的空地上设了一个"据点"。他们搬来了桌椅，架起了遮阳棚，每天都有几个人坐在那里打牌、喝酒、盯梢。你上下楼都得从他们面前经过，有时他们会用那种掂量货物的眼神看你。你学会了低头快步走过，不跟他们对视。但你知道——他们已经把你的脸记住了，你也被他们算进了这片"辖区"的居民名单里。',
  flag: 'bp_backstreet_101',
  effectText: '精神-1，意志+2',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_102',
  text: '你目睹了一场帮派内部的"清理"。一个被怀疑是叛徒的成员被带到了后巷深处，没人知道后面发生了什么。但第二天那个人的铺盖就被人扔了出来，有人说是被扔进河里了。帮派里的人对此闭口不谈，像是那个人从未存在过。你第一次感受到——帮派内部的规则比外部的更残酷。背叛的代价，是彻底的消失。',
  flag: 'bp_backstreet_102',
  effectText: '意志+2，精神-2，智力+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_103',
  text: '一个帮派的老大突然大发善心——在街口摆了几桌流水席"请客"。说是请客，其实就是展示实力——让大家看看他们帮派有多"阔气"。你和邻居们去吃了几口，菜色确实比平时吃的好得多。但你注意到吃饭的人都不怎么说话，默默地来，默默地走。你看了一眼坐在主桌上那个大笑的帮派老大，觉得他的笑容底下藏着什么。',
  flag: 'bp_backstreet_103',
  effectText: '体质+1，精神+1，意志+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_104',
  text: '你在后巷的边缘地带看到了一场收尾人和帮派之间的对峙。收尾人来抓一个人——那人据说是被某个协会下了"收尾令"的。帮派的人试图保护他，因为他是帮派的成员。收尾人只有一个人，但他站在那里，气势压过了对面十几个人。最后帮派的人让步了，把那个人交了出去。你明白了——在后巷的规则之上，还有更高级的规则。',
  flag: 'bp_backstreet_104',
  effectText: '意志+2，智力+2，力量+1',
  major: false,
  tag: '后巷少年-帮派',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

// ===== 9. 教育与技能（10个：bp_backstreet_105 ~ bp_backstreet_114）=====
// tag: '后巷少年-教育'

registerEvent({
  id: 'bp_backstreet_105',
  text: '后巷里有一个"私塾"——虽然那其实就是一间又小又破的房间，墙上挂着一块黑板，坐着十来个年龄不一的孩子。教书的是一个戴着厚眼镜的老先生，据说他以前是巢里的教师，因为得罪了人被赶了出来。他教的是最基础的东西——识字、算数、以及一些关于"都市常识"的课程。你交不起学费，于是你每天趴在窗外偷听。',
  flag: 'bp_backstreet_105',
  effectText: '智力+2，精神+1，意志+1',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_106',
  text: '你用自己的积蓄买了一本旧书——《都市通用语言基础》。这本书教你认字和书写——虽然你已经在后巷生活了十几年，但你认的字加起来不超过一百个。你每天晚上在昏暗的灯光下自学，把那本书翻来覆去地读。你用手指一个字一个字地指着念，遇到不认识的字就跳过去。慢慢地，你能看懂墙上的传单和告示了。',
  flag: 'bp_backstreet_106',
  effectText: '智力+3，精神+1，金钱-2',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_107',
  text: '你开始跟一个修理师傅学手艺。他教你怎么修水管、接电线、补屋顶——这些都是后巷里最实用的技能。你学得很认真，因为你知道这些技能就是你的饭碗。你第一次独立修好了一户人家的漏水水管时，那家主人给了你一笔工钱，还夸你"比那个老家伙修得还利索"。你开心了一整天。',
  flag: 'bp_backstreet_107',
  effectText: '智力+2，力量+1，魅力+1，金钱+3',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_108',
  text: '你在一家书店的废品堆里发现了一本被丢弃的百科全书——虽然只有半本，从"都"到"机"，正好是都市相关的词条最集中的部分。你如获至宝，把那些词条读了一遍又一遍。关于"都市的起源""翼公司的历史""收尾人协会的等级制度"——这些知识让你看到了后巷之外那个庞大的世界。你开始意识到，后巷只是都市的一个小小的角落。',
  flag: 'bp_backstreet_108',
  effectText: '智力+3，精神+2',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_109',
  text: '你跟着一个退休的收尾人学习了一段时间的基础体能训练。他每天早上五点叫你起来跑步，然后是俯卧撑、仰卧起坐、拉伸——你的身体每天都在酸疼中醒来。但你坚持下来了。一个月后你发现自己跑得更快了，力气更大了，连以前搬不动的东西都能搬动了。他看了你一眼，难得地说了一句："还行。"',
  flag: 'bp_backstreet_109',
  effectText: '体质+2，力量+1，意志+2',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_110',
  text: '你学会了一项在后巷极为重要的技能——开锁。教你的不是别人，是住在你家楼上的一个小偷。他见你聪明，就教了你几手。你用他给的一套旧工具练习，从最简单的弹子锁开始，慢慢地能打开一些更复杂的锁了。他没有教你偷东西，只是说："能开锁的人不会被锁链困住，这就是自由。"你不太确定他的话对不对，但这项技能确实有用。',
  flag: 'bp_backstreet_110',
  effectText: '智力+2，力量+1',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_111',
  text: '你自学了基础的医疗知识。起因是你看到有人因为伤口感染而死——只是一个小小的划伤，因为没有及时处理，最后高烧不退，三天就没了。你去一家地下诊所门口蹲了好几天，偷看医生怎么处理伤口。后来你壮着胆子进去说想帮忙，医生看你认真，就让你做一些打杂的活。你趁机学了一些基本的清创、包扎和止血技巧。',
  flag: 'bp_backstreet_111',
  effectText: '智力+2，意志+1，魅力+1',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_112',
  text: '你今天在一个废弃的实验室里发现了大量专业书籍。这里以前可能是一个地下的研究所——不知道什么原因被废弃了。桌上的仪器落满了灰，书架上的书还能看。你找到了一本《机械义肢基础原理》，虽然很多术语你看不懂，但那些图示让你大开眼界。你把书偷走了——不，你把它"借"走了。反正也没人会在意了。',
  flag: 'bp_backstreet_112',
  effectText: '智力+2，精神+1',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_113',
  text: '你学会了后巷的"黑话"——那种夹带着手势和暗语的交流方式。每一个街区的黑话都不一样，但有一些通用的词汇：尖峰代表危险的区域、白纸代表安全的通道、老钟代表清道夫要来的时间。你花了不少时间才掌握这门"语言"。掌握了之后，你能从陌生人打招呼的方式判断他来自哪个区，是敌是友。',
  flag: 'bp_backstreet_113',
  effectText: '智力+2，魅力+1，意志+1',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_114',
  text: '你遇到了一位愿意免费教你的老师——一个自称是"流浪学者"的老人。他没有固定的住处，在每个后巷区待几个月就走。他教你的不是实用的谋生技能，而是历史和哲学。他给你讲了都市的建立、翼公司的起源、以及"扭曲"的成因。你听得半懂不懂，但他临走时对你说了一句话："知识是你的翅膀，后巷关不住有翅膀的人。"',
  flag: 'bp_backstreet_114',
  effectText: '智力+3，精神+2，意志+1',
  major: false,
  tag: '后巷少年-教育',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

// ===== 10. 成长抉择（11个：bp_backstreet_115 ~ bp_backstreet_125）=====
// tag: '后巷少年-抉择'

registerEvent({
  id: 'bp_backstreet_115',
  text: '你面临了一个重大的抉择：离开后巷的机会终于来了。一个来自巢内的商人需要一名熟悉后巷的向导，他想找一个年轻人跟他一起做事。报酬不多，但最关键的是——他能给你搞到一张巢的临时通行证。你站在人生的岔路口，看着远处巢的霓虹灯光，又回头看了一眼你从小长大的巷子。你的心跳得很快。',
  flag: 'bp_backstreet_115',
  effectText: '意志+2，精神+2，智力+1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_116',
  text: '你的一个朋友因帮派冲突死了。昨天他还跟你一起吃饭，今天你就看到他的尸体被扔在巷子里——身上满是刀伤，眼睛还睁着。你参加了他的葬礼——其实就是在后巷的空地上挖了个坑，几个人围着说了几句话。他的母亲没有哭，只是坐在那里，眼神空洞。你站在坑边，攥紧了拳头。你不知道是该为他报仇，还是该忘掉这一切继续活下去。',
  flag: 'bp_backstreet_116',
  effectText: '精神-3，意志+3，力量+1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_117',
  text: '你一直在攒钱想买一张假的身份卡——有了它你就能进入巢内找一份体面的工作。但你今天发现，那个卖假身份卡的人是个骗子。他收了你的定金就消失了，你蹲在他以前的住处门口等了三天，他再也没有回来。你损失了一大笔钱。你坐在巷子里，第一次认真地思考——是不是该用别的方式离开这里？',
  flag: 'bp_backstreet_117',
  effectText: '金钱-5，精神-2，意志+2',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_118',
  text: '你的师父——那个教你修理手艺的老人——去世了。他走得很平静，在睡梦中走的。你帮他整理遗物时发现了一个铁盒子，里面装着一封信和一串钥匙。信上写着："如果你决定离开后巷，去巢里的这个地址，找一个叫老陈的人，他会帮你。"你握着那串钥匙，手心出汗。这是你的师父留给你的最后一份礼物——一个离开的选项。',
  flag: 'bp_backstreet_118',
  effectText: '精神+2，意志+2，智力+1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_119',
  text: '你被一个收尾人看中了，他说你有成为收尾人的潜质。他给你留了一个地址，说如果你改变主意了就来这个协会找他。你知道收尾人的路是什么样的——危险、不稳定、但也充满了力量和自由。你拿着那张纸条反复看了很久。一张纸条的重量很轻，但你知道——接住它，你的人生就会彻底转向。',
  flag: 'bp_backstreet_119',
  effectText: '意志+2，魅力+2，精神+1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_120',
  text: '你暗恋的一个后巷女孩/男孩要走了——被一户人家收养，带到别的区去。临走前她/他给了你一样东西——一个小挂坠，里面有一张她/他的小照片。"离开这里，"她/他对你说，"你不属于后巷。"你挂了那个挂坠在脖子上，觉得有什么东西在心里扎了根。你站在巷口看着她/他的背影消失，直到天黑。那天晚上你失眠了。',
  flag: 'bp_backstreet_120',
  effectText: '精神+2，意志+2，魅力+1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_121',
  text: '你做了一个重要的决定——不再接受帮派的"保护"。你告诉他们说你自己能照顾自己，不需要他们的"服务"。帮派的人冷笑了一声，说你会后悔的。接下来的日子里，你的家门被人泼了油漆，你晾在外面的衣服被人偷了，你在街上走的时候经常被人故意撞一下。你没有屈服。你开始随身带一把刀。后巷教会了你——不屈服是要付出代价的。',
  flag: 'bp_backstreet_121',
  effectText: '意志+3，力量+1，精神-1，魅力+1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_122',
  text: '你发现你的家人病得很重，需要一大笔钱治疗。你手头的积蓄连零头都不够。你面临着一个残酷的选择——是冒险去接那些来钱快但极其危险的工作，还是眼睁睁看着家人一天天衰弱下去。你在医院——一家后巷的地下诊所——的走廊里坐了一整夜，双手抱着头。天亮的时候你站了起来，走向了一个你以前一直避开的地址。',
  flag: 'bp_backstreet_122',
  effectText: '精神-3，意志+3，力量+1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_123',
  text: '你在后巷的垃圾桶里发现了一个被遗弃的婴儿。那么小的一个孩子，裹在一件破旧的衣服里，哭得声音都哑了。你站在垃圾桶前，手足无措。你知道如果你不管他，他可能活不过今晚。但如果你管了——你自己都活得很艰难，怎么再负担一个孩子？你伸出手，犹豫了很久很久。最终你的决定可能会改变你一生的轨迹。',
  flag: 'bp_backstreet_123',
  effectText: '精神+2，意志+2，魅力+2',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_124',
  text: '有一个机会摆在你的面前——参加一个地下组织的"选拔"。这个组织据说和某个翼公司有关，他们招募有天赋的年轻人去做"特殊工作"。选拔的内容包括体能测试、智力测试、以及某种心理评估。通过了就能离开后巷，过上想都不敢想的生活。但你听说——没通过的人再也没有出现过。你站在报名处门口，面临着你人生中最艰难的选择。',
  flag: 'bp_backstreet_124',
  effectText: '意志+3，智力+2，精神-1',
  major: false,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});

registerEvent({
  id: 'bp_backstreet_125',
  text: '你站在后巷的出口处。今天是你十八岁的最后一天——从明天开始，你就是成年人了。后巷的法律很简单：成年人不能再依赖任何人的庇护，你必须自己养活自己。你面前是三条路：留在后巷继续挣扎、想办法进入巢里寻找机会、或者成为一名收尾人去都市的其他地方闯荡。你回头看了一眼身后那条你从小走到大的巷子，然后深深地吸了一口气。无论选择哪条路，头也不回地走下去才是最好的方式。都市不会等你犹豫。',
  flag: 'bp_backstreet_125',
  effectText: '意志+3，精神+3，智力+2',
  major: true,
  tag: '后巷少年-抉择',
  minAge: 7, maxAge: 18,
  birthplace: 'backstreet'
});