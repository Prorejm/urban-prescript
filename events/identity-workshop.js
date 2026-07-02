// ===== 收尾人工坊工匠身份专属事件（60个）=====
// 都市世界观：工坊是后巷中由武器匠人、装备师和发明家经营的场所
// 工匠们为收尾人提供武器锻造、装备维修、特殊定制服务
// 高阶工坊主有时本身就是退役的高阶收尾人

// ===== 1. 订单制作（12个：id_workshop_01 ~ id_workshop_12）=====
// tag: '订单'
// 武器锻造、装备维修、特殊定制

registerEvent({
  id: 'id_workshop_01',
  text: '一位六阶收尾人拎着断成两截的长刀闯进你的工坊。刀身上布满了裂纹，显然是经历了异常激烈的战斗。你花了一整夜重新淬火锻接，在刀刃上加入了少量你珍藏的翼公司废料合金。客户取刀时满意地多付了两成报酬。',
  flag: 'id_workshop_01',
  effectText: '力量+1，金钱+6，精神-1',
  major: false,
  tag: '订单',
  minAge: 16, maxAge: 65
});

registerEvent({
  id: 'id_workshop_02',
  text: '一名穿着破烂风衣的客人送来了一副破损的机械臂铠。他说这是他在郊区废墟中捡到的，想让你修复并改装成可用的武器。你拆卸后发现内部的齿轮结构远超后巷的技术水平——这玩意儿八成是从某个翼公司的垃圾场流出来的。',
  flag: 'id_workshop_02',
  effectText: '智力+2，金钱+5，精神+1',
  major: false,
  tag: '订单',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_03',
  text: '一个戴着口罩的神秘客人下了一份奇怪的订单：要求在匕首的握柄内暗藏一个微型空腔。你没有问用途——干这行的规矩之一就是别对客人的要求刨根问底。你精心打磨了握柄的接缝，使空腔完全无法从外部察觉。',
  flag: 'id_workshop_03',
  effectText: '智力+2，金钱+7，精神-1',
  major: false,
  tag: '订单',
  minAge: 16, maxAge: 70
});

registerEvent({
  id: 'id_workshop_04',
  text: '你接到了一份来自Zwei协会的批量订单——为他们的支部维修三十面制式盾牌。这活计枯燥但稳定，够你吃半个月的。你敲敲打打了一周，每一面盾牌都检查了至少三遍焊点。交货时Zwei的后勤官面无表情地点了点头，这在他们协会就算是大加赞赏了。',
  flag: 'id_workshop_04',
  effectText: '力量+1，体质+1，金钱+10，精神-2',
  major: false,
  tag: '订单',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_05',
  text: '一位年轻的收尾人把自己唯一的武器——一柄普通得不能再普通的铁剑——送到你这里保养。他付不起太贵的费用，但态度诚恳得让你想起了自己入行时的模样。你给他做了全套保养，没收手工费，只收了材料钱。他感激得差点给你鞠躬。',
  flag: 'id_workshop_05',
  effectText: '魅力+2，精神+2，金钱-3',
  major: false,
  tag: '订单',
  minAge: 16, maxAge: 65
});

registerEvent({
  id: 'id_workshop_06',
  text: '某位富裕的巢内商人定制了一把仪式用剑。他要求剑身上镶嵌宝石、镀上金边，完全不在乎这剑能否用于实战。你按他的要求做了，内心却在叹息那把好钢被你浪费在了这种华而不实的玩意儿上。交货时商人喜笑颜开，给了你一笔可观的报酬。',
  flag: 'id_workshop_06',
  effectText: '金钱+8，魅力+1，智力+1',
  major: false,
  tag: '订单',
  minAge: 16, maxAge: 65
});

registerEvent({
  id: 'id_workshop_07',
  text: '你接到了一项高难度订单：修复一把被某种腐蚀性液体严重损坏的弯刀。刀刃上的蚀痕呈现出不规则的脉络，仿佛活物的血管。你尝试了七种不同的打磨和补金工艺才勉强复原了刀锋的锋利度。这把刀的来历恐怕不简单。',
  flag: 'id_workshop_07',
  effectText: '智力+2，力量+1，金钱+6，精神-2',
  major: false,
  tag: '订单',
  minAge: 18, maxAge: 70
});

registerEvent({
  id: 'id_workshop_08',
  text: '你为一个收尾人小队定制了四套统一的制式装备。他们的事务所刚刚成立，没什么名气，但几个人眼神里充满了干劲。你在每把武器的柄上都刻上了他们选择的徽记——一只展翅的铁鸟。这单生意利润不高，但看着新事务所起步让你心里有些感慨。',
  flag: 'id_workshop_08',
  effectText: '力量+1，魅力+2，金钱+4，精神+1',
  major: false,
  tag: '订单',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_09',
  text: '一个穿着Hana协会制服的人带着一只沉重的金属箱来到你的工坊。箱子里是一把造型诡异的武器——刀刃上布满了蜂窝状的孔洞，锋口泛着幽蓝色的光泽。他只是淡淡地说"保养它"，但你知道这绝对不是普通人的武器。你小心翼翼地完成了工作，不敢有任何差池。',
  flag: 'id_workshop_09',
  effectText: '智力+2，精神-2，金钱+9，名誉+1',
  major: false,
  tag: '订单',
  minAge: 20, maxAge: 70
});

registerEvent({
  id: 'id_workshop_10',
  text: '某个巷鼠拿来了一袋零件，想让你组装成一件可用的武器。那些零件一看就是拼凑的——有旧钢管、废铁片、甚至还有几根自行车辐条。你花了一下午把它们敲打成型，做成了勉强能用的短矛。巷鼠高兴地扛着它走了，你知道它大概率撑不过三场战斗。',
  flag: 'id_workshop_10',
  effectText: '力量+1，智力+1，金钱+2，精神-1',
  major: false,
  tag: '订单',
  minAge: 16, maxAge: 65
});

registerEvent({
  id: 'id_workshop_11',
  text: '一个表情阴郁的客人送来了一对短剑——刀身漆黑如墨，完全不反光。他说这是"那个地方"的产物，你需要用最细的磨石来保养。你在打磨时发现刀刃的金属结构异常致密，绝非后巷常规工艺可以锻造。完成工作后，客人留下了一大袋钱和一句话："忘掉今天的事。"',
  flag: 'id_workshop_11',
  effectText: '智力+2，精神-3，金钱+12，意志+1',
  major: false,
  tag: '订单',
  minAge: 20, maxAge: 70
});

registerEvent({
  id: 'id_workshop_12',
  text: '一位年迈的收尾人把他的佩剑送到你这里做了最后一次保养。剑身上密密麻麻布满了刻痕，每一道都代表着一场战斗。他说他打算退休了，这把剑会挂在他开的小酒馆墙上当招牌。你仔细打磨了每一个缺口，上好防锈油，把剑擦得锃亮。他接过剑时手在微微发抖。',
  flag: 'id_workshop_12',
  effectText: '魅力+1，精神+3，金钱+3，意志+1',
  major: false,
  tag: '订单',
  minAge: 16, maxAge: 65
});

// ===== 2. 工坊声誉（12个：id_workshop_13 ~ id_workshop_24）=====
// tag: '声誉'
// 口碑积累、名人光顾、星级评价

registerEvent({
  id: 'id_workshop_13',
  text: '你在后巷的收尾人圈子里渐渐有了名气。一位常客在酒桌上帮你吹嘘了一番，说你的手艺比巢内那些"装模作样的官方工匠"强多了。陆续有人慕名而来，你的工坊门口第一次排起了队。你看着那条短短的队伍，心里有点得意。',
  flag: 'id_workshop_13',
  effectText: '魅力+2，名誉+2，金钱+5，精神+1',
  major: false,
  tag: '声誉',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_14',
  text: '一个来头不小的人物光顾了你的工坊——有人告诉你，那位穿着普通夹克的顾客其实是某家知名事务所的副所长。他对你的手艺赞不绝口，说之后有大批装备维护订单会交给你。他还问你能不能收几个学徒，说这个街区正缺真正的手艺人。',
  flag: 'id_workshop_14',
  effectText: '魅力+2，名誉+3，金钱+4，智力+1',
  major: false,
  tag: '声誉',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_15',
  text: '后巷的黑市上有人在贩卖冒用你工坊名义的劣质武器。那些粗制滥造的仿冒品不但工艺拙劣，还在战斗中断裂导致客户受伤。你气得砸了手中的锤子，决定找到那个冒牌货给他一点"教训"。这不仅关乎声誉，更关乎你作为工匠的尊严。',
  flag: 'id_workshop_15',
  effectText: '力量+1，意志+2，精神-3，名誉-1',
  major: false,
  tag: '声誉',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_16',
  text: '一位来自巢内的武器收藏家专程到访你的工坊。他穿着讲究的西装，带着两个保镖，对你的每一件作品都投以审视的目光。最后他选中了你去年打制的一把猎刀，出了三倍的价格买下。你听说那把刀后来被陈列在他的私人展室里，与其他名匠的作品放在一起。',
  flag: 'id_workshop_16',
  effectText: '名誉+2，金钱+10，魅力+1',
  major: false,
  tag: '声誉',
  minAge: 18, maxAge: 70
});

registerEvent({
  id: 'id_workshop_17',
  text: '协会的评级官来到了你的工坊——收尾人工匠也有自己的评级体系，从丁级到甲级不等。评级官检查了你的工具、材料和成品，问了你几个关于金属工艺的问题。最后他在表格上勾了"丙级上等"，说再做两年可以申请乙级评定。不算好，但也不算差。',
  flag: 'id_workshop_17',
  effectText: '智力+1，名誉+1，精神+1，金钱-2',
  major: false,
  tag: '声誉',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_18',
  text: '你在后巷的一位老主顾被人杀了。他是你最忠实的客户之一，每个月都会来保养他那把用了二十年的砍刀。你听说他在一次委托中遭到了埋伏。你去参加了他的葬礼——后巷的葬礼简单得可怜，几块木板和一堆黄土。你在他的坟前放了一枚你亲手打的铁钉。',
  flag: 'id_workshop_18',
  effectText: '精神-3，意志+2，魅力+1',
  major: false,
  tag: '声誉',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_19',
  text: '有人在后巷的酒馆里散播关于你工坊的谣言，说你用劣质材料以次充好。你知道这是隔壁街区的竞争对手搞的鬼。你当天晚上就去那家酒馆，当着所有人的面把一把你自己打造的剑砍进了石桌里，拔都拔不出来。谣言不攻自破。',
  flag: 'id_workshop_19',
  effectText: '力量+2，魅力+2，名誉+1，精神-1',
  major: false,
  tag: '声誉',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_20',
  text: '一位情报贩子告诉你，某家翼公司正在秘密寻找后巷里手艺最精湛的工匠，为一个"特殊项目"提供技术支持。据说报酬是以巢内居住权计算的。你犹豫了——跟翼公司打交道就像握着一把双刃剑，但巢内居住权对你这种后巷出生的人来说几乎是不可能拒绝的诱惑。',
  flag: 'id_workshop_20',
  effectText: '智力+2，精神-2，意志+2，名誉+1',
  major: false,
  tag: '声誉',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_21',
  text: '你的工坊被收录进了后巷街区的一本"工匠指南"中。这本指南是收尾人们口口相传的小册子，记录了辖区内值得信赖的维修点和补给站。当你在指南上看到自己工坊的名字时，你意识到自己终于不再是那个无人知晓的街边铁匠了。',
  flag: 'id_workshop_21',
  effectText: '名誉+3，魅力+1，精神+2',
  major: false,
  tag: '声誉',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_22',
  text: '一名自称是Liu协会成员的人来到你的工坊送修一把烧焦的武器。他说这把刀在一次"特殊行动"中被高温损毁了。你在修复过程中发现刀身上附着着一种奇异的油脂残留物，闻起来像某种化学燃烧剂。你没有多问，但你知道Liu协会的火不是普通的火。',
  flag: 'id_workshop_22',
  effectText: '智力+2，金钱+7，精神-1，名誉+1',
  major: false,
  tag: '声誉',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_23',
  text: '一个少年跑进你的工坊，气喘吁吁地说他的刀被人打断了——那是他父亲留给他的遗物。你看着那把断成三截的旧刀，刀柄上缠着洗得发白的布条。你花了一整天焊接和加固，虽然再也恢复不了原貌，但至少能让那少年继续带着它。他走的时候回头看了你好几次。',
  flag: 'id_workshop_23',
  effectText: '魅力+2，精神+2，金钱-2，意志+1',
  major: false,
  tag: '声誉',
  minAge: 16, maxAge: 65
});

registerEvent({
  id: 'id_workshop_24',
  text: '经过长时间的口碑积累，你的工坊终于成为了这个街区公认的"最佳维修点"。连隔壁街区的收尾人都愿意多走二十分钟路来找你。你决定扩展工坊规模，招一个学徒。消息贴出去不到半天，门口就站了十几个想学手艺的年轻人。你选了那个眼神最坚定的。',
  flag: 'id_workshop_24',
  effectText: '魅力+2，名誉+2，金钱+5，智力+1',
  major: true,
  tag: '声誉',
  minAge: 22, maxAge: 65
});

// ===== 3. 材料收集（12个：id_workshop_25 ~ id_workshop_36）=====
// tag: '材料'
// 寻找稀有材料、与收尾人交易、后巷探索

registerEvent({
  id: 'id_workshop_25',
  text: '你听说镰刀区的废品站新到了一批翼公司的报废机械零件。你挎上工具包赶了过去，在堆积如山的废铁中翻找了大半天。最终你找到了几块还算完好的记忆合金板和一组精密的微型齿轮。废品站老板用看疯子的眼神看着你为了一堆垃圾付了钱。',
  flag: 'id_workshop_25',
  effectText: '智力+2，体质+1，金钱-4，精神-1',
  major: false,
  tag: '材料',
  minAge: 16, maxAge: 65
});

registerEvent({
  id: 'id_workshop_26',
  text: '你去郊区边缘寻找一种特殊的耐火石材。据老工匠说，那种石材只在翼公司废弃物焚烧场附近的焦土中才能找到。你在灰烬和残渣中搜索了整整一天，手指刨得全是血泡。终于赶在日落前找到了一块拳头大小的样品——够做三把耐高温刀柄。',
  flag: 'id_workshop_26',
  effectText: '体质+2，力量+1，精神-2，智力+1',
  major: false,
  tag: '材料',
  minAge: 18, maxAge: 60
});

registerEvent({
  id: 'id_workshop_27',
  text: '一个收尾人用一截来历不明的金属锭抵债。那块金属锭呈现出诡异的暗红色，重量异常沉重，你用锉刀试了一下——根本锉不动。你把它扔进熔炉试了试，它在普通炉火中完全不熔化。这不是都市里常见的任何材料，你知道自己捡到宝了。',
  flag: 'id_workshop_27',
  effectText: '智力+2，金钱-3，精神+2，名誉+1',
  major: false,
  tag: '材料',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_28',
  text: '后巷下了一场罕见的酸雨。雨水腐蚀了露天堆放的不少木材和普通金属，但对于你这样的工匠来说，酸雨之后反而有机会——被冲刷出来的地下矿脉和隐藏的废弃管線会因为腐蚀而暴露。你戴着防毒面具在雨后去熟悉的地点搜索，收获了几段耐腐蚀的合金管线。',
  flag: 'id_workshop_28',
  effectText: '体质+1，智力+2，金钱-2，精神-2',
  major: false,
  tag: '材料',
  minAge: 18, maxAge: 60
});

registerEvent({
  id: 'id_workshop_29',
  text: '一条情报让你找到了一个被废弃的L公司实验设施入口。设施外围被铁锈色的藤蔓覆盖，门口散落着"禁止入内"的标牌。你在里面找到了几管未开封的工业级溶剂和一块标有L公司徽记的合金板。离开时你总觉得有东西在黑暗中注视着你。',
  flag: 'id_workshop_29',
  effectText: '智力+2，精神-3，意志+2，金钱-2',
  major: false,
  tag: '材料',
  minAge: 20, maxAge: 60
});

registerEvent({
  id: 'id_workshop_30',
  text: '你和一位常合作的收尾人达成了材料交换协议。他帮你从任务中带回稀有的战利品材料，你则为他提供优先维修服务。他在一次委托后带回来一块被"色彩级收尾人的武器"斩断的金属碎片——碎片断面呈现出诡异的彩虹色光泽，这绝不是普通撞击能形成的。',
  flag: 'id_workshop_30',
  effectText: '智力+2，魅力+2，金钱+3，精神+1',
  major: false,
  tag: '材料',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_31',
  text: '你在后巷的排水管道中搜寻废弃金属时遭遇了一窝变异老鼠。那些老鼠体型如野狗，红色的眼睛里闪着饥饿的光芒。你挥舞着手中的铁管边打边退，身上被咬了好几口。最终你逃了出来，虽然空手而归，但至少还活着。排水沟里的材料让给老鼠们了。',
  flag: 'id_workshop_31',
  effectText: '体质+1，力量+1，精神-2，金钱-1',
  major: false,
  tag: '材料',
  minAge: 16, maxAge: 60
});

registerEvent({
  id: 'id_workshop_32',
  text: '一名商人向你兜售一批据称是"K公司特供的合金材料"。你把样品拿回工坊做了硬度测试，发现确实比后巷能买到的普通钢材强得多。但价格也高得离谱。你咬了咬牙，把积攒了大半年的积蓄全砸了进去。材料到手后你连夜打造了一把新刀——它可能是你迄今为止最好的作品。',
  flag: 'id_workshop_32',
  effectText: '力量+2，智力+1，金钱-12，精神+2',
  major: false,
  tag: '材料',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_33',
  text: '你听说后巷深处有一棵在污染中存活下来的铁树。它的木质异常坚硬，可以与金属媲美。你花了三天时间寻找它，最终在一片被化学废料污染的荒地上找到了。树干上布满了瘢痕，但木质的纹理紧密而沉重。你锯下了一段手臂粗的树枝，够做十几把刀柄的材料。',
  flag: 'id_workshop_33',
  effectText: '体质+2，智力+1，精神-1，金钱-1',
  major: false,
  tag: '材料',
  minAge: 18, maxAge: 60
});

registerEvent({
  id: 'id_workshop_34',
  text: '你参加了一场后巷工匠之间的材料交流会。每个工匠都带来了自己珍藏的稀有材料。有人展出半块R公司军用装甲板，有人拿出一瓶据说是U公司出品的纳米修复液。你用一块珍藏多年的陨铁碎片换到了一小管"液态记忆合金"——它能自动恢复轻微形变。',
  flag: 'id_workshop_34',
  effectText: '智力+2，魅力+2，意志+1，精神+1',
  major: false,
  tag: '材料',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_35',
  text: '你试图加工那块神秘的暗红色金属，但普通的锻造工具根本无法在它上面留下痕迹。你试了高温炉、酸蚀、甚至动用了你珍藏的一块W公司出品的超硬磨石——效果甚微。这块材料似乎在嘲笑你的手艺。你不甘心，决定想办法弄到更好的工具。',
  flag: 'id_workshop_35',
  effectText: '智力+2，意志+2，精神-2，力量+1',
  major: false,
  tag: '材料',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_36',
  text: '一位老工匠在临终前把他的材料库留给了你。你推开那扇生锈的铁门时，差点被眼前的景象惊呆了——满满一屋子的珍稀金属、合成材料、以及各种你只听说过没见过的翼公司废料。老工匠在遗书中写道：这些东西与其跟着我埋进土里，不如交给真正懂得它们价值的人。',
  flag: 'id_workshop_36',
  effectText: '智力+1，金钱+15，精神+3，名誉+1',
  major: true,
  tag: '材料',
  minAge: 20, maxAge: 65
});

// ===== 4. 工坊竞争（12个：id_workshop_37 ~ id_workshop_48）=====
// tag: '竞争'
// 同行竞争、技术机密、挖角

registerEvent({
  id: 'id_workshop_37',
  text: '隔壁街区新开了一家工坊，老板是从巢内出来的科班工匠。他带了一整套现代化的锻造设备和三个学徒，抢走了你不少老客户。你站在自己的工坊门口，看着对面那人流不断的店铺，握紧了手中的锤子。后巷的竞争从不讲情面。',
  flag: 'id_workshop_37',
  effectText: '精神-3，意志+2，智力+1，金钱-3',
  major: false,
  tag: '竞争',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_38',
  text: '有人深夜潜入你的工坊试图偷窃你的工艺图纸。你被响动惊醒，抄起铁锤冲了出去。小偷在黑暗中跟你搏斗了几招，然后撞破窗户逃走了。你检查后发现他翻过的那叠图纸是最旧的——上面记录的是你三年前已经淘汰的工艺。你暗暗庆幸自己把真正的手艺记在脑子里。',
  flag: 'id_workshop_38',
  effectText: '力量+1，智力+1，意志+2，精神-2',
  major: false,
  tag: '竞争',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_39',
  text: '一个自称是某大型工坊"猎头"的人找到了你。他开出了诱人的条件——丰厚的薪水、稳定的订单、甚至还有巢内居住的资格——只要你愿意关掉自己的小工坊，去他们的工坊当首席工匠。你沉默了很长时间。后巷的孩子能拿到这样的机会，简直是做梦都不敢想的事。',
  flag: 'id_workshop_39',
  effectText: '智力+1，魅力+2，意志+2，精神-1',
  major: false,
  tag: '竞争',
  minAge: 22, maxAge: 65
});

registerEvent({
  id: 'id_workshop_40',
  text: '你发现自己的一个学徒被对面的工坊挖走了。那孩子平时话不多，干活很踏实，你没少教他真本事。他走的时候没打招呼，只是在工作台上留下了一张纸条："师傅，对面给的钱多一倍。对不住。"你烧掉纸条，继续打铁。后巷就是这样，没什么可抱怨的。',
  flag: 'id_workshop_40',
  effectText: '精神-3，意志+1，魅力-1，金钱-2',
  major: false,
  tag: '竞争',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_41',
  text: '竞争对手在公开场合质疑你的工艺水平，说你用的材料是劣质货。你一话不说，当场掏出一把你打造的匕首和对面工坊的产品对砍。你的匕首在对面那柄刀上留下了一个深深的缺口，而自己的刀刃毫发无损。围观的人群发出一阵喝彩。那个质疑你的人铁青着脸走了。',
  flag: 'id_workshop_41',
  effectText: '力量+2，魅力+2，名誉+2，精神+1',
  major: false,
  tag: '竞争',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_42',
  text: '你发现后巷的材料供应商给了竞争对手更低的价格。那个供应商是你多年合作的老搭档了，你说服他继续保持给你的价格不变——你用手指在铁砧上敲了三下，这是工匠之间的誓言。供应商叹了口气，答应了你。在都市里，有时候信誉比金钱更值钱。',
  flag: 'id_workshop_42',
  effectText: '魅力+2，智力+1，金钱-2，意志+1',
  major: false,
  tag: '竞争',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_43',
  text: '你在一场工匠技艺比拼中击败了你的主要竞争对手。比赛内容是在限定时间内将一块标准钢料锻造成一柄实战用的刀具。你的作品在硬度测试和锋利度测试中都胜出了。主办方把一面写着"本区第一"的锦旗挂在了你的工坊门口。竞争对手连贺喜都没有就转身离开了。',
  flag: 'id_workshop_43',
  effectText: '力量+1，名誉+3，魅力+2，精神+2',
  major: false,
  tag: '竞争',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_44',
  text: '你的竞争对手在后台散播谣言，说你使用了"禁忌工艺"——据说是用人体组织淬火的技术。这种传言在后巷很有市场，也确实有一些黑心工坊在用类似的方法。你不得不在协会的调查员面前公开演示了一遍你的锻造流程，以证明自己的清白。虽然洗清了嫌疑，但恶心的感觉久久不散。',
  flag: 'id_workshop_44',
  effectText: '智力+1，精神-3，名誉-1，意志+2',
  major: false,
  tag: '竞争',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_45',
  text: '你的一个老客户带着一把你在三年前打造的刀回来了。刀刃上有了豁口，但整体依然坚实。他说这把刀救了他至少五次命。竞争对手想要挖走他，他拒绝了，说"那个工匠的手艺值得我多走几条街"。你听完这话，觉得自己这些年抡锤子的每一分钟都值得了。',
  flag: 'id_workshop_45',
  effectText: '精神+3，魅力+2，名誉+2，意志+1',
  major: false,
  tag: '竞争',
  minAge: 18, maxAge: 65
});

registerEvent({
  id: 'id_workshop_46',
  text: '你赢得了一份来自Seven协会的长期订单合同。你的竞争对手——那个从巢内出来的科班工匠——气得在酒馆里摔了杯子。Seven协会选择你的原因很简单：你的维修速度更快，而且更加耐用。合同在手，你终于可以安心一段时间了。',
  flag: 'id_workshop_46',
  effectText: '名誉+2，金钱+10，精神+2，智力+1',
  major: false,
  tag: '竞争',
  minAge: 22, maxAge: 65
});

registerEvent({
  id: 'id_workshop_47',
  text: '你的竞争对手的工坊发生了火灾。有人说是意外，有人说是他们自己在实验新工艺时出了事故。你在街对面看着那片火光，身后是自己安然无恙的工坊。你没有幸灾乐祸——在都市里，任何人的不幸都可能在某天降临到自己头上。第二天你甚至还借了他们几件工具应急。',
  flag: 'id_workshop_47',
  effectText: '魅力+2，意志+1，精神+1，名誉+1',
  major: false,
  tag: '竞争',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_48',
  text: '经过多番竞争，那个来自巢内的竞争对手终于承认了你的实力。他来你的工坊找你喝酒，带了一瓶他珍藏的好酒。他说他刚来的时候以为后巷的工匠都是粗人，没想到被你上了一课。你跟他碰了碰杯，算是和解。竞争归竞争，后巷里的工匠本来就不多，多个朋友总比多个敌人好。',
  flag: 'id_workshop_48',
  effectText: '魅力+3，智力+1，精神+2，金钱+3',
  major: true,
  tag: '竞争',
  minAge: 22, maxAge: 65
});

// ===== 5. 突破创新（12个：id_workshop_49 ~ id_workshop_60）=====
// tag: '创新'
// 发明新武器、改进工艺、E.G.O接触

registerEvent({
  id: 'id_workshop_49',
  text: '你花了三个月设计了一种折叠式战术长矛。收尾人经常需要在狭窄的后巷中行动，传统长矛太长不便携带，而折叠结构能让他们在战斗时快速展开。第一个样品在经过两周的调整后终于成功通过了承重测试。你打算把这个设计推广出去。',
  flag: 'id_workshop_49',
  effectText: '智力+3，力量+1，精神+1，金钱-3',
  major: false,
  tag: '创新',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_50',
  text: '你改良了传统淬火工艺，发明了一种两步冷却法。新工艺能让刀锋硬度提升的同时保持韧性，不易崩口。你试做了三把样品，测试结果都远超预期。你把这套新工艺记录在了你的私人手册里，决定只传给最信得过的徒弟。',
  flag: 'id_workshop_50',
  effectText: '智力+3，力量+2，精神+2，金钱-2',
  major: false,
  tag: '创新',
  minAge: 22, maxAge: 70
});

registerEvent({
  id: 'id_workshop_51',
  text: '一个奇怪的客人委托你制作一件"能够触碰灵魂的武器"。他给了你一块闪烁着淡蓝色光芒的结晶碎片——散发着一种让你感到既舒适又不安的能量。你在加工这块结晶时，脑海中不断出现模糊的画面：一个巨大的树、深不见底的洞、和无数哭泣的声音。',
  flag: 'id_workshop_51',
  effectText: '精神-4，智力+2，意志+3，名誉+1',
  major: false,
  tag: '创新',
  minAge: 22, maxAge: 70
});

registerEvent({
  id: 'id_workshop_52',
  text: '你萌生了一个将合成纤维与金属丝混合编织来制作护甲的想法。普通皮甲太笨重，金属甲又影响灵活性。你拆了一条报废的W公司货运绑带，抽出里面的高强度纤维，与细钢丝混编后制成了一块测试样本。初步测试显示它在防割性能上比普通皮甲强三倍。',
  flag: 'id_workshop_52',
  effectText: '智力+2，力量+1，体质+1，金钱-4',
  major: false,
  tag: '创新',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_53',
  text: '你从一把损坏的R公司制式军刀上研究出了他们的合金配方。虽然无法完全复制——他们的工艺涉及一些精密设备——但你找到了一个替代方案，用后巷能搞到的材料做出了接近七成性能的仿制品。你给这种新材料取名为"巷铁"。',
  flag: 'id_workshop_53',
  effectText: '智力+3，金钱+8，名誉+2，精神+1',
  major: false,
  tag: '创新',
  minAge: 22, maxAge: 65
});

registerEvent({
  id: 'id_workshop_54',
  text: '你在加工一批从旧L公司设施回收的材料时，发现其中一块金属对生物组织有奇异的"排斥反应"——把它贴近皮肤会感到刺痛。你试图用它打造一把武器，但在锻造过程中它不断发出高频振动，像在尖叫。最终成品虽然锋利异常，但握在手里总有一种说不出的不安感。',
  flag: 'id_workshop_54',
  effectText: '智力+2，精神-3，力量+2，意志+1',
  major: false,
  tag: '创新',
  minAge: 20, maxAge: 65
});

registerEvent({
  id: 'id_workshop_55',
  text: '你发明了一种可拆卸式武器模块系统——一把刀的主干可以适配不同的刀头和配件，一柄武器变成了一套武器。这个设计理念太超前了，一开始没人理解它的价值。直到一位五阶收尾人试用后赞不绝口，订单才渐渐多了起来。你称之为"模块刀"。',
  flag: 'id_workshop_55',
  effectText: '智力+3，魅力+2，金钱+6，名誉+1',
  major: false,
  tag: '创新',
  minAge: 22, maxAge: 65
});

registerEvent({
  id: 'id_workshop_56',
  text: '你尝试复制L公司装备上那种奇异的"自修复"涂层。你在工坊里熬了整整一周，实验了几十种配方组合，混合了你能搞到的所有化学试剂。最终你做出了一种粘稠的黑色液体，涂在金属上干燥后能形成保护膜，轻微划痕确实会缓慢"愈合"。虽然远不如L公司的正品，但已经让你兴奋得一夜没睡。',
  flag: 'id_workshop_56',
  effectText: '智力+3，精神-2，金钱-6，意志+2',
  major: false,
  tag: '创新',
  minAge: 22, maxAge: 70
});

registerEvent({
  id: 'id_workshop_57',
  text: '你接到了一份诡异的委托：制作一个能够储存"声音"的容器。委托人没有解释用途，只是留下了一块奇异的黑色晶体——和你之前接触过的"共鸣材料"很像。你在加工过程中听到晶体发出了微弱的人声，像是无数人在低语。你强迫自己专注手艺，完成了委托。委托人取货时整个人隐藏在阴影中，留下了一句"你什么都没听到"。',
  flag: 'id_workshop_57',
  effectText: '智力+2，精神-4，意志+2，金钱+10',
  major: false,
  tag: '创新',
  minAge: 24, maxAge: 70
});

registerEvent({
  id: 'id_workshop_58',
  text: '你发明了一种利用后巷废弃材料制作高硬度工具钢的方法。这个方法成本低廉，工艺简单，足以让任何稍懂锻造的工匠都能做出好工具。你在工匠交流会上分享了这项技术，有人骂你断了他们的财路，有人默默做了笔记。但你觉得手艺这种东西，藏得越深死得越快。',
  flag: 'id_workshop_58',
  effectText: '智力+2，魅力+3，名誉+2，金钱-2',
  major: false,
  tag: '创新',
  minAge: 22, maxAge: 65
});

registerEvent({
  id: 'id_workshop_59',
  text: '一位神秘客人再次到访——就是那个给你蓝色结晶碎片的人。他对你的作品非常满意，又给了你一块更大的结晶。这块碎片散发出的能量清晰可感，工坊里的温度都下降了好几度。他说这是"来自某棵树的馈赠"，并问你愿不愿意为他制作一件真正的"E.G.O武器"。你虽然不完全明白这个词的含义，但你知道这可能是你工匠生涯最重要的转折点。',
  flag: 'id_workshop_59',
  effectText: '智力+2，精神-4，意志+3，名誉+2',
  major: true,
  tag: '创新',
  minAge: 24, maxAge: 70
});

registerEvent({
  id: 'id_workshop_60',
  text: '你完成了迄今为止最伟大的作品——一把真正嵌入了E.G.O结晶的武器。当结晶与金属完成融合的瞬间，整个工坊被一道刺目的蓝光笼罩，你听到了从那块石头中传来的声音——不像言语，更像是一种原始的、超越了人类理解的共鸣。这把武器不再是单纯的工具，它有了自己的"意志"。你看着手中的作品，双手在颤抖，不知是恐惧还是自豪。',
  flag: 'id_workshop_60',
  effectText: '智力+3，精神-5，力量+3，名誉+3，意志+2',
  major: true,
  tag: '创新',
  minAge: 26, maxAge: 70
});
