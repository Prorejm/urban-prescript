// ============================================================
// 月亮计划系列 - 敌人数据库
// 类型：人类、异想体、扭曲、血魔、清道夫、机械/义体、大湖生物
// Tier: 传闻、都市传说、都市恶疾、都市梦魇、都市之星
// ============================================================
// 使用 ES5 语法以兼容无构建环境的直接加载
// ============================================================

var ENEMY_DB = [
  // ==================== 人类 ====================
  {
    id: 'enemy_001',
    name: '后巷混混',
    type: '人类',
    tier: '传闻',
    desc: '后巷常见的帮派底层成员，手里拿着铁管或破刀，靠恐吓和人数取胜。',
    hp: 30,
    dmg: 5,
    skill: '群殴',
    drop: '零钱、破布'
  },
  {
    id: 'enemy_002',
    name: '帮派打手',
    type: '人类',
    tier: '都市传说',
    desc: '帮派中专门负责暴力讨债和地盘争夺的正式成员，经过一定的战斗训练。',
    hp: 50,
    dmg: 8,
    skill: '街头斗殴',
    drop: '帮派徽章、现金'
  },
  {
    id: 'enemy_003',
    name: '都市收尾人（九阶）',
    type: '人类',
    tier: '都市传说',
    desc: '刚取得收尾人资格的新人，执行一些简单的委托任务维持生计。',
    hp: 45,
    dmg: 9,
    skill: '委托执行',
    drop: '收尾人手册、匕首'
  },
  {
    id: 'enemy_004',
    name: '都市收尾人（六阶）',
    type: '人类',
    tier: '都市恶疾',
    desc: '经验丰富的中阶收尾人，拥有处理都市怪谈级委托的实力。',
    hp: 80,
    dmg: 15,
    skill: '精准打击',
    drop: '高品质武器、情报卷宗'
  },
  {
    id: 'enemy_005',
    name: '雇佣兵',
    type: '人类',
    tier: '都市恶疾',
    desc: '以战斗为生的职业战士，不关心委托内容，只关心报酬是否到位。',
    hp: 90,
    dmg: 14,
    skill: '战术射击',
    drop: '军火配件、战术背心'
  },
  {
    id: 'enemy_006',
    name: '翼公司精英保安',
    type: '人类',
    tier: '都市梦魇',
    desc: '翼公司直属的安保部队，装备着公司奇点技术加持的最先进装备。',
    hp: 150,
    dmg: 22,
    skill: '奇点护盾',
    drop: '翼公司通行证、高科技装备'
  },
  {
    id: 'enemy_007',
    name: '指头成员',
    type: '人类',
    tier: '都市梦魇',
    desc: '五指之一组织的正式成员，其战斗风格严格遵守所属指头的规则与传统。',
    hp: 130,
    dmg: 20,
    skill: '指法传承',
    drop: '指头令牌、都市情报'
  },
  {
    id: 'enemy_008',
    name: '色彩级收尾人',
    type: '人类',
    tier: '都市之星',
    desc: '站立在收尾人顶点的传说级存在，每一位色彩都拥有足以改变都市格局的力量。',
    hp: 400,
    dmg: 50,
    skill: '色彩解放',
    drop: '色彩称号、传说武器'
  },
  // ==================== 异想体（脑叶公司） ====================
  {
    id: 'enemy_009',
    name: '「一罪与百善」',
    type: '异想体',
    tier: '都市传说',
    desc: '一个戴着荆棘冠冕的类人形异想体，手中的天平衡量着罪与善。ZAYIN级异想体。',
    hp: 40,
    dmg: 6,
    skill: '罪孽衡量',
    drop: '圣洁碎片、荆棘枝'
  },
  {
    id: 'enemy_010',
    name: '「红焰的收割者」',
    type: '异想体',
    tier: '都市恶疾',
    desc: '手持巨镰的红色人形异想体，出没于烈火之中。TETH级异想体。',
    hp: 75,
    dmg: 18,
    skill: '烈焰收割',
    drop: '燃烧的镰刃、灰烬结晶'
  },
  {
    id: 'enemy_011',
    name: '「忏悔的修女」',
    type: '异想体',
    tier: '都市恶疾',
    desc: '身穿修女服的异想体，不断为自己的罪孽忏悔，但其善意向世人传达恩惠。TETH级异想体。',
    hp: 60,
    dmg: 12,
    skill: '恩惠洗礼',
    drop: '修女念珠、忏悔书'
  },
  {
    id: 'enemy_012',
    name: '「微笑的尸山」',
    type: '异想体',
    tier: '都市梦魇',
    desc: '由无数尸体堆积而成的异想体，每张脸上都带着诡异的微笑。HE级异想体。',
    hp: 200,
    dmg: 25,
    skill: '尸海淹没',
    drop: '笑脸面具、尸油'
  },
  {
    id: 'enemy_013',
    name: '「绝望骑士」',
    type: '异想体',
    tier: '都市梦魇',
    desc: '身穿漆黑铠甲的骑士异想体，其绝望之气会让周围所有人感到无力。HE级异想体。',
    hp: 180,
    dmg: 28,
    skill: '绝望光环',
    drop: '黑甲碎片、绝望核心'
  },
  {
    id: 'enemy_014',
    name: '「沉默乐团」',
    type: '异想体',
    tier: '都市之星',
    desc: '一支永远在演奏的异想体乐团，其音乐会在无声中夺走听众的一切。WAW级异想体。',
    hp: 350,
    dmg: 40,
    skill: '安魂曲',
    drop: '乐谱残章、乐器碎片'
  },
  {
    id: 'enemy_015',
    name: '「白夜」',
    type: '异想体',
    tier: '都市之星',
    desc: '都市最强大的异想体之一，散发着神圣而不祥的光芒。ALEPH级异想体。',
    hp: 800,
    dmg: 70,
    skill: '神罚之光',
    drop: '光之核、圣骸布'
  },
  {
    id: 'enemy_016',
    name: '「血红之夜」',
    type: '异想体',
    tier: '都市之星',
    desc: '以鲜血和月光为食的恐怖异想体，曾在都市中引发过数次大屠杀。ALEPH级异想体。',
    hp: 750,
    dmg: 75,
    skill: '血色月光',
    drop: '血月精华、夜之泪'
  },
  // ==================== 扭曲 ====================
  {
    id: 'enemy_017',
    name: '扭曲钢琴家',
    type: '扭曲',
    tier: '都市梦魇',
    desc: '曾经的人类钢琴家，在扭曲后身体与钢琴融为一体，用死亡演奏最后的乐章。',
    hp: 220,
    dmg: 30,
    skill: '死亡旋律',
    drop: '琴键碎片、谱曲手稿'
  },
  {
    id: 'enemy_018',
    name: '扭曲的收尾人',
    type: '扭曲',
    tier: '都市恶疾',
    desc: '在战斗中扭曲的收尾人，执念化为力量，同时也吞噬了其理性。',
    hp: 100,
    dmg: 20,
    skill: '执念爆发',
    drop: '扭曲结晶、残破的收尾人证'
  },
  {
    id: 'enemy_019',
    name: '「哭泣之子」',
    type: '扭曲',
    tier: '都市梦魇',
    desc: '因悲伤而扭曲的巨大人形实体，泪水化为利刃，哭声响彻整条后巷。',
    hp: 250,
    dmg: 28,
    skill: '无尽悲恸',
    drop: '泪之结晶、悲伤核心'
  },
  {
    id: 'enemy_020',
    name: '「小指」的扭曲杀手',
    type: '扭曲',
    tier: '都市之星',
    desc: '在小指的血战中扭曲的杀手，完全失去了人性，只为杀戮而存在。',
    hp: 380,
    dmg: 45,
    skill: '杀戮本能',
    drop: '扭曲之刃、小指令牌'
  },
  {
    id: 'enemy_021',
    name: '「东朗」—— 不完全扭曲',
    type: '扭曲',
    tier: '都市恶疾',
    desc: '一个在扭曲边缘挣扎的存在，身体部分异化，仍保留一定的理智。',
    hp: 110,
    dmg: 18,
    skill: '半异化突击',
    drop: '异化器官样本、残存意识碎片'
  },
  {
    id: 'enemy_022',
    name: '完全扭曲体',
    type: '扭曲',
    tier: '都市梦魇',
    desc: '理性完全丧失的扭曲存在，只剩下本能的破坏欲望和强大的异化躯体。',
    hp: 200,
    dmg: 35,
    skill: '狂乱冲击',
    drop: '扭曲核心、异形外壳'
  },
  // ==================== 血魔 ====================
  {
    id: 'enemy_023',
    name: '低级血魔',
    type: '血魔',
    tier: '都市传说',
    desc: '刚刚转化的低级血魔，对鲜血的渴望尚未完全掌控，战斗力有限。',
    hp: 60,
    dmg: 10,
    skill: '血液吸吮',
    drop: '血袋、暗红碎片'
  },
  {
    id: 'enemy_024',
    name: '中级血魔',
    type: '血魔',
    tier: '都市恶疾',
    desc: '已经掌握了血魔力量的成熟个体，能够操控血液进行攻击和防御。',
    hp: 120,
    dmg: 20,
    skill: '血之操控',
    drop: '血魔核心、强化血液'
  },
  {
    id: 'enemy_025',
    name: '血魔长老',
    type: '血魔',
    tier: '都市梦魇',
    desc: '存活了数百年的血魔，积累了强大的力量和丰富的战斗经验。',
    hp: 250,
    dmg: 35,
    skill: '血族领域',
    drop: '长老之血、古老卷轴'
  },
  {
    id: 'enemy_026',
    name: '血魔始祖',
    type: '血魔',
    tier: '都市之星',
    desc: '血魔一族的起源存在，拥有近乎不死的躯体和操控血液的终极力量。',
    hp: 500,
    dmg: 55,
    skill: '始祖之血',
    drop: '始祖核心、血族传承'
  },
  // ==================== 清道夫 ====================
  {
    id: 'enemy_027',
    name: '清道夫清扫者',
    type: '清道夫',
    tier: '都市传说',
    desc: '清道夫组织最基础的成员，负责清理后巷的「垃圾」——包括活人和尸体。',
    hp: 35,
    dmg: 7,
    skill: '高效清扫',
    drop: '清洁工具、回收品'
  },
  {
    id: 'enemy_028',
    name: '清道夫猎杀队',
    type: '清道夫',
    tier: '都市恶疾',
    desc: '清道夫的精锐猎杀小队，专门处理高价值目标和反抗者。',
    hp: 100,
    dmg: 16,
    skill: '小组战术',
    drop: '高价值回收物、清道夫制服'
  },
  {
    id: 'enemy_029',
    name: '清道夫清扫总管',
    type: '清道夫',
    tier: '都市梦魇',
    desc: '清道夫组织的中层管理者，负责指挥大范围的清扫行动和分配战利品。',
    hp: 180,
    dmg: 25,
    skill: '资源调度',
    drop: '清扫记录、稀有回收物'
  },
  // ==================== 机械/义体强化者 ====================
  {
    id: 'enemy_030',
    name: '工坊改造人',
    type: '机械/义体',
    tier: '都市恶疾',
    desc: '接受工坊大规模义体改造的战士，身体大部分被机械替代。',
    hp: 110,
    dmg: 18,
    skill: '机械强化',
    drop: '义体零件、工坊保修卡'
  },
  {
    id: 'enemy_031',
    name: '完全义体化战士',
    type: '机械/义体',
    tier: '都市梦魇',
    desc: '几乎完全机械化的战斗单位，除大脑外所有器官都被高性能义体取代。',
    hp: 200,
    dmg: 30,
    skill: '全武装展开',
    drop: '高性能CPU、合金骨架'
  },
  {
    id: 'enemy_032',
    name: 'WARP列车变异体',
    type: '机械/义体',
    tier: '都市梦魇',
    desc: '在WARP列车中经历了过长旅程的人类，身体和时间线发生了不可逆的融合变异。',
    hp: 190,
    dmg: 28,
    skill: '时空错乱',
    drop: '时间结晶、残损车票'
  },
  // ==================== 大湖生物 ====================
  {
    id: 'enemy_033',
    name: '大湖触手怪',
    type: '大湖生物',
    tier: '都市恶疾',
    desc: '出没于大湖深水区的巨型触手生物，会攻击过往的船只。',
    hp: 130,
    dmg: 22,
    skill: '触须缠绕',
    drop: '触手切片、深海粘液'
  },
  {
    id: 'enemy_034',
    name: '大湖深潜者',
    type: '大湖生物',
    tier: '都市梦魇',
    desc: '长期生活在都市大湖深处的类人生物，身体已适应了高压和黑暗环境。',
    hp: 220,
    dmg: 30,
    skill: '深渊突袭',
    drop: '深海珍珠、异化鳞片'
  },
  {
    id: 'enemy_035',
    name: '大湖利维坦',
    type: '大湖生物',
    tier: '都市之星',
    desc: '大湖中最庞大的生物，如同一座移动的岛屿，一次摆尾就能掀翻整艘巨轮。',
    hp: 600,
    dmg: 60,
    skill: '巨浪滔天',
    drop: '利维坦之鳞、远古鲸脂'
  }
];

// ============================================================
// 辅助函数
// ============================================================

/** 根据敌人类型筛选 */
function getEnemiesByType(type) {
  return ENEMY_DB.filter(function(e) { return e.type === type; });
}

/** 根据Tier等级筛选 */
function getEnemiesByTier(tier) {
  return ENEMY_DB.filter(function(e) { return e.tier === tier; });
}

/** 获取所有可用的敌人类型列表 */
function getEnemyTypes() {
  var types = [];
  for (var i = 0; i < ENEMY_DB.length; i++) {
    if (types.indexOf(ENEMY_DB[i].type) === -1) {
      types.push(ENEMY_DB[i].type);
    }
  }
  return types;
}

/** 获取所有可用的Tier等级列表 */
function getEnemyTiers() {
  var tiers = [];
  for (var i = 0; i < ENEMY_DB.length; i++) {
    if (tiers.indexOf(ENEMY_DB[i].tier) === -1) {
      tiers.push(ENEMY_DB[i].tier);
    }
  }
  return tiers;
}

/** 按ID查找敌人 */
function getEnemyById(id) {
  for (var i = 0; i < ENEMY_DB.length; i++) {
    if (ENEMY_DB[i].id === id) return ENEMY_DB[i];
  }
  return null;
}

/** 获取指定Tier范围内的敌人列表 */
function getEnemiesUpToTier(maxTier) {
  var tierOrder = ['传闻', '都市传说', '都市恶疾', '都市梦魇', '都市之星'];
  var maxIdx = tierOrder.indexOf(maxTier);
  if (maxIdx === -1) return [];
  return ENEMY_DB.filter(function(e) {
    return tierOrder.indexOf(e.tier) <= maxIdx;
  });
}
