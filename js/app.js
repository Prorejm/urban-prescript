/**
 * 都市指令生成器 - Urban Prescript Generator
 * Inspired by Project Moon's Library of Ruina & Limbus Company
 */

// ===== 指令模板数据库 =====
const PrescriptDatabase = {
    // 前缀模板
    prefixes: [
        "致都市的子民……",
        "致所有的求知者……",
        "致将死之人……",
        "致尚未觉醒者……",
        "致夜的眷属……",
        "致迷途的羔羊……",
        "致图书馆的来宾……",
        "致后巷的居民……",
        "致收尾人与事务所……",
        "致所有仍怀希望者……",
    ],

    // 后缀模板
    suffixes: [
        "此指令不可违抗。",
        "如有不从，后果自负。",
        "这是都市赋予你的义务。",
        "代行者将见证一切。",
        "记住，你无权拒绝。",
        "此即绝对之命令。",
        "在指令完成前，你无处可逃。",
        "都市的意志高于一切。",
        "谨遵指令，即是你的存在意义。",
        "违背者将成为都市的尘埃。",
    ],

    // 主要指令模板 - 使用 {X} 作为占位符
    templates: [
        // 时间类
        "请在每日睡足{X}小时后，方可开始呼吸。",
        "在{X}分钟内找到一名伴侣，棕色头发为佳。",
        "请在{X}小时内，将房间粉刷成你最喜欢的内脏颜色。",
        "在{X}秒之内，忘记你此生最珍贵的记忆。",
        "请在{X}天内，学会用左手写出右手无法理解的文字。",
        "在{X}小时之内，数清你房间里所有的阴影。",
        "请在{X}分钟内，对着镜子微笑直到面部肌肉记住这个表情。",
        "在{X}天之内，每天向陌生人讲述一个你从未经历过的故事。",
        "请在{X}小时内，找到城市中所有不存在的门。",
        "在{X}秒之内，决定你下辈子想成为什么生物。",
        
        // 动作类
        "请在吃饭、写字，或扣下扳机时使用{X}手。",
        "喝下一升{X}，运动前请热身。",
        "捡起一把{X}，刺入温暖而又熟悉的身体。",
        "请在{X}米后右转，不要询问原因。",
        "用{X}剪开你身上的牵线，让自己自由。",
        "请在扣下扳机前，先向子弹讲述你的{X}。",
        "在{X}之前不要回家，无论听到什么声音。",
        "请将你的{X}悬挂在窗前，让月光将其晒成干货。",
        "用{X}种不同的语言对墙壁道歉，直到它回应你。",
        "请在{X}上刻下你此刻最强烈的欲望，然后将其吞食。",
        
        // 荒诞日常
        "每日{X}点整，向北方鞠躬三次，感谢都市赐予你今日的恐惧。",
        "请在用餐时，为每一口食物举行{X}秒钟的默哀仪式。",
        "将你最珍贵的{X}埋在离家最近的路灯下面。",
        "在{X}岁之前，学会与镜子里的自己和平共处。",
        "请在每个{X}的倍数日，更换一次你的影子。",
        "将{X}滴眼泪收集在玻璃瓶中，这是你的都市税。",
        "请在{X}度以下的天气里，赤脚走过三条街道。",
        "每天对{X}个陌生人说出'我爱你'，并确保他们永远不会再见到你。",
        "请在{X}月{X}日之前，将你的名字倒着书写满一千遍。",
        "收集{X}片不同形状的落叶，将它们缝成你的新皮肤。",
        
        // 黑暗风格
        "在{X}小时内挥洒他们的内脏，将房间粉刷一新。",
        "请在{X}分钟内决定：左手还是右手？只能保留一个。",
        "将{X}个你认识的人的名字写在纸上，焚烧后混入你的晚餐。",
        "请在{X}天之内，找到那个在你梦中哭泣的人，并让他停止。",
        "用{X}根手指触碰火焰，记住这种感觉，那是都市的温度。",
        "请在{X}米深的地方，埋藏着你不该拥有的记忆。",
        "将{X}只飞蛾关在你的胸腔里，它们会指引你方向。",
        "请在{X}秒内，说出你所有秘密，声音必须大于心跳。",
        "在{X}个夜晚，不要闭眼。观察黑暗中滋长的东西。",
        "请将你的{X}献给都市，作为你存在的抵押。",
        
        // 数学/逻辑荒诞
        "在读完自然常数e之前不要回家。{X}",
        "请在{X}个质数之间，找到属于你的那个。",
        "计算{X}的阶乘，将结果作为你今日的步数。",
        "请在圆周率第{X}位开始，背诵到你失去意识为止。",
        "将{X}除以零，观察会出现什么样的门。",
        "请在{X}维空间中，找到回家的路。",
        "证明{X}等于无穷大，否则你将无法入睡。",
        "请在{X}个平行宇宙中，找到那个你没有出生的世界。",
        "解出{X}的解，那是你剩余寿命的秒数。",
        "请在{X}进制下，重新书写你的人生。",
        
        // 社会讽刺
        "请在{X}小时内，找到一份你完全不了解的工作。",
        "在{X}个社交媒体平台上，发布一条你从未想过的观点。",
        "请在{X}分钟内，消费掉你本月剩余的所有预算。",
        "对{X}个你讨厌的人微笑，并请求他们给你一拳。",
        "请在{X}天之内，成为你曾经最鄙视的那种人。",
        "在{X}个不同的场合，大声说出你内心最真实的想法。",
        "请将你的{X}展示给所有人看，然后假装它不存在。",
        "在{X}小时之内，让三个陌生人为你流泪。",
        "请在{X}个谎言中，找出那个唯一的真相。",
        "成为一只{X}，直到有人注意到你的变化。",
        
        // 感官体验
        "请在{X}分钟内，只使用嗅觉来辨认方向。",
        "在{X}个不同的音高上，吟唱你童年的记忆。",
        "请用{X}种不同的颜色，描述你现在感受到的疼痛。",
        "在{X}小时之内，不要触碰任何温度高于你体温的东西。",
        "请将{X}种不同的味道混合，喝下这杯名为'今日'的饮料。",
        "在{X}米之内，用耳朵寻找光源。",
        "请在{X}秒内，记住此刻所有的声音，它们将在午夜重现。",
        "将{X}种不同的触感写进诗里，念给没有手指的人听。",
        "请在{X}度角的方向，寻找你失去的第六感。",
        "在{X}种不同的光线下，观察你灵魂的折射率。",
        
        // 存在主义
        "请在{X}分钟内，证明你不是都市的一个梦。",
        "在{X}个选择中，找到那个不是你做出的决定。",
        "请询问{X}个人：'我是谁？'直到你忘记这个问题的意义。",
        "在{X}天之内，活成别人的期待，然后杀死那个自己。",
        "请在{X}小时之内，找到你自由意志的所在之处。",
        "在{X}面镜子中，找到那个没有在看着你的影像。",
        "请将你的{X}留在过去，带着空白走向明天。",
        "在{X}个轮回之后，你会明白这一切的意义。",
        "请在{X}秒内，决定是否要放弃思考的权利。",
        "你的存在是一个{X}，请找到它的解。",
    ],

    // 数值生成器 - 优先返回数字，偶尔返回特殊值
    generateValue: function() {
        const numTypes = [
            () => Math.floor(Math.random() * 900 + 100), // 100-999
            () => Math.floor(Math.random() * 90 + 10), // 10-99
            () => Math.floor(Math.random() * 24), // 0-23
            () => Math.floor(Math.random() * 60), // 0-59
            () => (Math.random() * 100).toFixed(2), // 0.00-99.99
            () => Math.floor(Math.random() * 12 + 1), // 1-12
            () => Math.floor(Math.random() * 31 + 1), // 1-31
            () => Math.floor(Math.random() * 100000), // 大数字
            () => ["一", "两", "三", "四", "五", "六", "七", "八", "九", "十"][Math.floor(Math.random() * 10)],
        ];
        
        const specialTypes = [
            () => ["左", "右"][Math.floor(Math.random() * 2)],
            () => ["红", "黑", "白", "金", "紫", "蓝", "绿"][Math.floor(Math.random() * 7)],
            () => ["刀", "剪", "针", "线", "羽毛", "石头", "火焰", "冰"][Math.floor(Math.random() * 8)],
            () => ["牛奶", "咖啡", "茶", "血", "水", "酒", "泪"][Math.floor(Math.random() * 7)],
            () => ["梦想", "记忆", "名字", "影子", "声音", "灵魂", "恐惧"][Math.floor(Math.random() * 7)],
            () => ["猫", "鸟", "蛇", "鱼", "蝴蝶", "蜘蛛", "乌鸦"][Math.floor(Math.random() * 7)],
        ];
        
        // 75% 概率返回数字，25% 概率返回特殊值
        if (Math.random() < 0.75) {
            return numTypes[Math.floor(Math.random() * numTypes.length)]();
        } else {
            return specialTypes[Math.floor(Math.random() * specialTypes.length)]();
        }
    }
};

// ===== 歌词数据 =====
const LyricsData = [
    "Sleep for a total of 800 hours per day",
    "致……请每日睡足八百小时",
    "And then drink a liter of milk",
    "喝下一升牛奶，运动前请热身",
    "Only eat, or write, or pull the trigger with your right hand",
    "请在吃饭，写字，或扣下扳机时使用右手",
    "Only thing that's left is to work on following commands",
    "唯一的准则 即是谨遵指令之意",
    "By the time you realize, you'll be restrained to a desk",
    "在你意识一切之前，你会被囚禁在书桌之前",
    "And with your dreams on the floor you comply",
    "大脑放空，谨遵指令",
    "In 30 minutes find a groom or bride, bonus if brunette",
    "在30分钟内找到一名伴侣，棕色头发为佳",
    "In 90 hours spill their insides, paint your room picturesque",
    "90小时内挥洒他们的内脏，将房间粉刷一新",
    "Now it's time for another vendetta",
    "现在，我们解决另一场血仇",
    "Going through the shelves, picking out my prewritten persona",
    "在书架之间穿行，选择我预写的可选人设",
    "Children of the city see only the neon stars",
    "都市之子目及之处",
    "Reflected upon the murky gutter sky",
    "尽霓虹星光在污水沟之中闪耀",
    "Don't ask me why I desperately wish to be included in the city's night",
    "就请不要问我为何想要陷入都市的夜色之中",
    "In 400,000 meters, turn right",
    "致……请在400,000米后右转",
    "Pick up a knife and stab a familiar warm body",
    "捡起一把刀，刺入温暖而又熟悉的身体",
    "Learned to fight before I knew love or bitterness of coffee",
    "在我品尝爱或咖啡的苦涩之前，我早已学会战斗",
    "Snippy scissors cut down the strings, I set myself free",
    "唐突地用剪刀剪开我身上的牵线，让自己自由",
    "Only to figure out everything I chose was by proxy",
    "却发现我所做的一切，依旧都在剧本以内",
    "As we suckled upon the 9mm pacifier",
    "当我们吮吸9mm的奶嘴",
    "Swallowing the fact that other than to expand we had no purpose",
    "知晓我们除扩张物种以外毫无意义的事实",
    "As my everburning will to stay afloat backfires",
    "在我的唐突终于引火烧身之时",
    "I now know must be comfortable being who I considered worthless",
    "我终于明白我必须成为我所不屑的人",
    "Follow the city's ribbon",
    "随着都市抛出的绶带",
    "To a heart nobody seems to listen",
    "走进一颗未有人倾听过的内心",
    "It takes my heart being broken and broken again",
    "终于知晓一次一次我心碎的原因",
    "To know that I am the reason why the sufferings never end",
    "自我的存在，才让我痛苦永不熄灭",
    "Don't ask me why I desperately wish to be noticed by the city's sight",
    "就请别问我为何如此迫切地想被都市所注意",
    "Do not go home until you finish reading the value of 'e'",
    "在读完自然常数e之前不要回家",
    "2.718281 82845904 52353602...",
];

// ===== 应用状态 =====
const AppState = {
    history: [],
    currentId: 0,
    isTyping: false,
    typingTimeout: null,
};

// ===== DOM 元素 =====
const Elements = {
    receiveBtn: document.getElementById('receiveBtn'),
    cardContainer: document.getElementById('cardContainer'),
    prescriptCard: document.getElementById('prescriptCard'),
    cardId: document.getElementById('cardId'),
    cardPrefix: document.getElementById('cardPrefix'),
    cardContent: document.getElementById('cardContent'),
    cardSuffix: document.getElementById('cardSuffix'),
    actionButtons: document.getElementById('actionButtons'),
    copyBtn: document.getElementById('copyBtn'),
    newBtn: document.getElementById('newBtn'),
    historyList: document.getElementById('historyList'),
    historySection: document.getElementById('historySection'),
    floatingLyrics: document.getElementById('floatingLyrics'),
};

// ===== 工具函数 =====
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function formatId(id) {
    return `NO.${String(id).padStart(3, '0')}`;
}

function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

// ===== 指令生成 =====
function generatePrescript() {
    const template = randomItem(PrescriptDatabase.templates);
    let content = template;
    
    // 替换所有 {X} 占位符
    while (content.includes('{X}')) {
        content = content.replace('{X}', PrescriptDatabase.generateValue());
    }
    
    return {
        id: ++AppState.currentId,
        prefix: randomItem(PrescriptDatabase.prefixes),
        content: content,
        suffix: randomItem(PrescriptDatabase.suffixes),
        timestamp: new Date(),
    };
}

// ===== 打字机效果 =====
function typeWriter(element, text, speed = 45) {
    return new Promise((resolve) => {
        AppState.isTyping = true;
        element.innerHTML = '<span class="cursor"></span>';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
                i++;
                
                // 标点符号暂停更久
                const char = text[i - 1];
                const delay = ['。', '，', '；', '、', '……', '！', '？'].includes(char) 
                    ? speed * 4 
                    : speed;
                
                AppState.typingTimeout = setTimeout(type, delay);
            } else {
                element.innerHTML = text;
                AppState.isTyping = false;
                resolve();
            }
        }
        
        type();
    });
}

function stopTyping() {
    if (AppState.typingTimeout) {
        clearTimeout(AppState.typingTimeout);
        AppState.typingTimeout = null;
    }
    AppState.isTyping = false;
}

// ===== 浮动歌词系统 =====
class FloatingLyrics {
    constructor() {
        this.active = false;
        this.interval = null;
    }

    start() {
        if (this.active) return;
        this.active = true;
        
        // 立即显示一条
        this.showLyric();
        
        // 定期显示
        this.interval = setInterval(() => {
            this.showLyric();
        }, randomInt(4000, 8000));
    }

    stop() {
        this.active = false;
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    showLyric() {
        const lyric = randomItem(LyricsData);
        const el = Elements.floatingLyrics;
        
        // 随机位置
        const x = randomInt(5, 85);
        const y = randomInt(10, 90);
        
        el.style.left = `${x}%`;
        el.style.top = `${y}%`;
        el.textContent = lyric;
        el.classList.add('visible');
        
        // 一段时间后消失
        setTimeout(() => {
            el.classList.remove('visible');
        }, randomInt(3000, 6000));
    }
}

const floatingLyrics = new FloatingLyrics();

// ===== 历史记录 =====
function addToHistory(prescript) {
    AppState.history.unshift(prescript);
    if (AppState.history.length > 20) {
        AppState.history.pop();
    }
    renderHistory();
}

function renderHistory() {
    if (AppState.history.length === 0) {
        Elements.historySection.style.display = 'none';
        return;
    }
    
    Elements.historySection.style.display = 'block';
    Elements.historyList.innerHTML = AppState.history.map(item => `
        <div class="history-item" data-id="${item.id}">
            <div class="history-item-id">${formatId(item.id)} · ${formatTime(item.timestamp)}</div>
            <div class="history-item-text">${item.content}</div>
        </div>
    `).join('');
    
    // 绑定点击事件
    document.querySelectorAll('.history-item').forEach(el => {
        el.addEventListener('click', () => {
            const id = parseInt(el.dataset.id);
            const prescript = AppState.history.find(p => p.id === id);
            if (prescript) {
                showPrescript(prescript, false);
            }
        });
    });
}

// ===== 显示指令 =====
async function showPrescript(prescript, animate = true) {
    // 停止当前打字
    stopTyping();
    
    // 隐藏卡片
    Elements.prescriptCard.classList.remove('visible');
    Elements.actionButtons.classList.remove('visible');
    Elements.actionButtons.style.display = 'none';
    
    await new Promise(r => setTimeout(r, 300));
    
    // 更新内容
    Elements.cardId.textContent = formatId(prescript.id);
    Elements.cardPrefix.textContent = prescript.prefix;
    Elements.cardSuffix.textContent = prescript.suffix;
    
    // 显示卡片
    Elements.prescriptCard.classList.add('visible');
    
    await new Promise(r => setTimeout(r, 400));
    
    // 打字机效果
    if (animate) {
        await typeWriter(Elements.cardContent, prescript.content, 40);
    } else {
        Elements.cardContent.textContent = prescript.content;
    }
    
    // 显示操作按钮
    Elements.actionButtons.style.display = 'flex';
    setTimeout(() => {
        Elements.actionButtons.classList.add('visible');
    }, 100);
}

// ===== 主流程 =====
async function receivePrescript() {
    if (AppState.isTyping) return;
    
    // 隐藏接收按钮
    Elements.receiveBtn.style.opacity = '0';
    Elements.receiveBtn.style.pointerEvents = 'none';
    
    const prescript = generatePrescript();
    await showPrescript(prescript, true);
    addToHistory(prescript);
    
    // 显示接收按钮
    Elements.receiveBtn.style.opacity = '1';
    Elements.receiveBtn.style.pointerEvents = 'auto';
}

// ===== 复制功能 =====
async function copyPrescript() {
    const id = Elements.cardId.textContent;
    const prefix = Elements.cardPrefix.textContent;
    const content = Elements.cardContent.textContent;
    const suffix = Elements.cardSuffix.textContent;
    
    const text = `${id}\n${prefix}\n${content}\n${suffix}\n\n—— 都市指令生成器`;
    
    try {
        await navigator.clipboard.writeText(text);
        const originalText = Elements.copyBtn.innerHTML;
        Elements.copyBtn.innerHTML = '<span>已复制</span>';
        Elements.copyBtn.style.borderColor = 'var(--accent-gold)';
        
        setTimeout(() => {
            Elements.copyBtn.innerHTML = originalText;
            Elements.copyBtn.style.borderColor = '';
        }, 2000);
    } catch (err) {
        console.error('复制失败:', err);
    }
}

// ===== 事件绑定 =====
Elements.receiveBtn.addEventListener('click', receivePrescript);
Elements.newBtn.addEventListener('click', receivePrescript);
Elements.copyBtn.addEventListener('click', copyPrescript);

// ===== 初始化 =====
function init() {
    // 启动浮动歌词
    floatingLyrics.start();
    
    // 初始状态：隐藏卡片
    Elements.prescriptCard.classList.remove('visible');
    Elements.actionButtons.style.display = 'none';
    Elements.historySection.style.display = 'none';
    
    console.log('%c都市指令生成器', 'color: #B8860B; font-size: 20px; font-family: serif;');
    console.log('%cUrban Prescript Generator', 'color: #5a5048; font-size: 12px; font-family: serif;');
    console.log('%c唯一的准则 即是谨遵指令之意', 'color: #a09080; font-size: 14px; font-family: serif;');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
