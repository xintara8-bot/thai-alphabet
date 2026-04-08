const lesson1 = {
  id: 1,
  title: "Greeting",
  titleThai: "การทักทาย",
  titleChinese: "打招呼",

  dialogue: [
    {
      id: "d1",
      speaker: "ปิติ",
      thai: "สวัสดีครับ",
      chinese: "你好。",
      rom: "sawasdee krab",
      keywordIds: ["w1", "w2"],
      patternIds: ["p1"]
    },
    {
      id: "d2",
      speaker: "สุมาลี",
      thai: "สวัสดีค่ะ",
      chinese: "你好。",
      rom: "sawasdee kha",
      keywordIds: ["w1", "w3"],
      patternIds: ["p1"]
    },
    {
      id: "d3",
      speaker: "ปิติ",
      thai: "ขอโทษครับ คุณชื่ออะไรครับ?",
      chinese: "请问，你叫什么名字？",
      rom: "kho thot krab, khun chue arai krab?",
      keywordIds: ["w4", "w5", "w6", "w7", "w2"],
      patternIds: ["p2", "p3"]
    },
    {
      id: "d4",
      speaker: "สุมาลี",
      thai: "ดิฉันชื่อสุมาลีค่ะ คุณล่ะคะ?",
      chinese: "我叫苏玛丽。你呢？",
      rom: "dichan chue Sumalee kha. khun la kha?",
      keywordIds: ["w8", "w6", "w3", "w9", "w10"],
      patternIds: ["p4", "p5"]
    },
    {
      id: "d5",
      speaker: "ปิติ",
      thai: "ผมชื่อปิติครับ ยินดีที่ได้รู้จักครับ",
      chinese: "我叫比迪。很高兴认识你。",
      rom: "phom chue Piti krab. yin dee thi dai ruu jak krab",
      keywordIds: ["w11", "w6", "w2", "w12"],
      patternIds: ["p4", "p6"]
    },
    {
      id: "d6",
      speaker: "สุมาลี",
      thai: "เช่นกันค่ะ",
      chinese: "我也是。/我也很高兴认识你。",
      rom: "chen kan kha",
      keywordIds: ["w13", "w3"],
      patternIds: ["p7"]
    },
    {
      id: "d7",
      speaker: "ปิติ",
      thai: "คุณสุมาลีเป็นนักศึกษาใหม่หรือครับ?",
      chinese: "苏玛丽，你是新生吗？",
      rom: "khun Sumalee pen nak sueksa mai rue krab?",
      keywordIds: ["w5", "w14", "w15", "w16", "w2"],
      patternIds: ["p8"]
    },
    {
      id: "d8",
      speaker: "สุมาลี",
      thai: "ค่ะ ดิฉันเป็นนักศึกษาใหม่ค่ะ",
      chinese: "是的，我是新生。",
      rom: "kha. dichan pen nak sueksa mai kha",
      keywordIds: ["w3", "w8", "w14", "w15"],
      patternIds: ["p9"]
    },
    {
      id: "d9",
      speaker: "ปิติ",
      thai: "คุณสุมาลีมาจากไหนครับ?",
      chinese: "苏玛丽，你从哪里来？",
      rom: "khun Sumalee maa chak nai krab?",
      keywordIds: ["w5", "w17", "w18", "w2"],
      patternIds: ["p10"]
    },
    {
      id: "d10",
      speaker: "สุมาลี",
      thai: "มาจากมณฑลหูหนานค่ะ",
      chinese: "我来自湖南省。",
      rom: "maa chak monthon Hunan kha",
      keywordIds: ["w17", "w19", "w3"],
      patternIds: ["p11"]
    },
    {
      id: "d11",
      speaker: "ปิติ",
      thai: "คุณสุมาลีเรียนที่ไหนครับ?",
      chinese: "你在哪里读书？",
      rom: "khun Sumalee rian thi nai krab?",
      keywordIds: ["w5", "w20", "w21", "w18", "w2"],
      patternIds: ["p12"]
    },
    {
      id: "d12",
      speaker: "สุมาลี",
      thai: "เรียนที่มหาวิทยาลัยภาษาและการค้าต่างประเทศกวางตุ้งค่ะ",
      chinese: "我在广东外语外贸大学学习。",
      rom: "rian thi mahawitthayalai phasaa lae kaan khaa tang prathet Guang-dung kha",
      keywordIds: ["w20", "w21", "w22", "w23", "w24", "w25", "w3"],
      patternIds: ["p13"]
    },
    {
      id: "d13",
      speaker: "ปิติ",
      thai: "เรียนวิชาอะไรครับ?",
      chinese: "你学什么专业？",
      rom: "rian wicha arai krab?",
      keywordIds: ["w20", "w26", "w7", "w2"],
      patternIds: ["p14"]
    },
    {
      id: "d14",
      speaker: "สุมาลี",
      thai: "วิชาภาษาไทยค่ะ",
      chinese: "泰语专业。",
      rom: "wicha phasaa thai kha",
      keywordIds: ["w26", "w23", "w27", "w3"],
      patternIds: ["p15"]
    },
    {
      id: "d15",
      speaker: "ปิติ",
      thai: "ผมก็เรียนภาษาไทยครับ แล้วพบกันใหม่นะครับ สวัสดีครับ",
      chinese: "我也学泰语。那么再见。你好/再见。",
      rom: "phom ko rian phasaa thai krab. laeo phop kan mai na krab. sawasdee krab",
      keywordIds: ["w11", "w20", "w23", "w27", "w28", "w29", "w30", "w1", "w2"],
      patternIds: ["p16", "p17"]
    },
    {
      id: "d16",
      speaker: "สุมาลี",
      thai: "สวัสดีค่ะ",
      chinese: "再见。/你好。",
      rom: "sawasdee kha",
      keywordIds: ["w1", "w3"],
      patternIds: ["p1"]
    }
  ],

  keywords: [
    {
      id: "w1",
      thai: "สวัสดี",
      chinese: "你好；再见",
      english: "hello; goodbye",
      rom: "sawasdee",
      type: "word",
      level: "core",
      sentenceIds: ["d1", "d2", "d15", "d16"]
    },
    {
      id: "w2",
      thai: "ครับ",
      chinese: "男性礼貌语气词",
      english: "polite particle (male)",
      rom: "krab",
      type: "particle",
      level: "core",
      sentenceIds: ["d1", "d3", "d5", "d7", "d9", "d11", "d13", "d15"]
    },
    {
      id: "w3",
      thai: "ค่ะ",
      chinese: "女性礼貌语气词",
      english: "polite particle (female)",
      rom: "kha",
      type: "particle",
      level: "core",
      sentenceIds: ["d2", "d4", "d6", "d8", "d10", "d12", "d14", "d16"]
    },
    {
      id: "w4",
      thai: "ขอโทษ",
      chinese: "对不起；请问",
      english: "excuse me; sorry",
      rom: "kho thot",
      type: "word",
      level: "core",
      sentenceIds: ["d3"]
    },
    {
      id: "w5",
      thai: "คุณ",
      chinese: "你；您",
      english: "you",
      rom: "khun",
      type: "pronoun",
      level: "core",
      sentenceIds: ["d3", "d4", "d7", "d9", "d11"]
    },
    {
      id: "w6",
      thai: "ชื่อ",
      chinese: "名字",
      english: "name",
      rom: "chue",
      type: "word",
      level: "core",
      sentenceIds: ["d3", "d4", "d5"]
    },
    {
      id: "w7",
      thai: "อะไร",
      chinese: "什么",
      english: "what",
      rom: "arai",
      type: "question_word",
      level: "core",
      sentenceIds: ["d3", "d13"]
    },
    {
      id: "w8",
      thai: "ดิฉัน",
      chinese: "我（女性）",
      english: "I (female)",
      rom: "dichan",
      type: "pronoun",
      level: "core",
      sentenceIds: ["d4", "d8"]
    },
    {
      id: "w9",
      thai: "ล่ะ",
      chinese: "呢",
      english: "then / and ...?",
      rom: "la",
      type: "particle",
      level: "core",
      sentenceIds: ["d4"]
    },
    {
      id: "w10",
      thai: "คุณล่ะคะ",
      chinese: "你呢？",
      english: "and you?",
      rom: "khun la kha?",
      type: "chunk",
      level: "core",
      sentenceIds: ["d4"]
    },
    {
      id: "w11",
      thai: "ผม",
      chinese: "我（男性）",
      english: "I (male)",
      rom: "phom",
      type: "pronoun",
      level: "core",
      sentenceIds: ["d5", "d15"]
    },
    {
      id: "w12",
      thai: "ยินดีที่ได้รู้จัก",
      chinese: "很高兴认识你",
      english: "nice to meet you",
      rom: "yin dee thi dai ruu jak",
      type: "chunk",
      level: "core",
      sentenceIds: ["d5"]
    },
    {
      id: "w13",
      thai: "เช่นกัน",
      chinese: "同样；我也是",
      english: "same here",
      rom: "chen kan",
      type: "chunk",
      level: "core",
      sentenceIds: ["d6"]
    },
    {
      id: "w14",
      thai: "เป็น",
      chinese: "是；成为",
      english: "to be",
      rom: "pen",
      type: "verb",
      level: "core",
      sentenceIds: ["d7", "d8"]
    },
    {
      id: "w15",
      thai: "นักศึกษาใหม่",
      chinese: "新生",
      english: "new student / freshman",
      rom: "nak sueksa mai",
      type: "noun_phrase",
      level: "core",
      sentenceIds: ["d7", "d8"]
    },
    {
      id: "w16",
      thai: "หรือ",
      chinese: "吗（疑问）",
      english: "question marker",
      rom: "rue",
      type: "particle",
      level: "core",
      sentenceIds: ["d7"]
    },
    {
      id: "w17",
      thai: "มาจาก",
      chinese: "来自",
      english: "come from",
      rom: "maa chak",
      type: "verb_phrase",
      level: "core",
      sentenceIds: ["d9", "d10"]
    },
    {
      id: "w18",
      thai: "ไหน",
      chinese: "哪里；哪",
      english: "where / which",
      rom: "nai",
      type: "question_word",
      level: "core",
      sentenceIds: ["d9", "d11"]
    },
    {
      id: "w19",
      thai: "มณฑล",
      chinese: "省",
      english: "province",
      rom: "monthon",
      type: "word",
      level: "support",
      sentenceIds: ["d10"]
    },
    {
      id: "w20",
      thai: "เรียน",
      chinese: "学习；读书",
      english: "study",
      rom: "rian",
      type: "verb",
      level: "core",
      sentenceIds: ["d11", "d12", "d13", "d15"]
    },
    {
      id: "w21",
      thai: "ที่",
      chinese: "在；于",
      english: "at / in",
      rom: "thi",
      type: "particle",
      level: "core",
      sentenceIds: ["d11", "d12"]
    },
    {
      id: "w22",
      thai: "มหาวิทยาลัย",
      chinese: "大学",
      english: "university",
      rom: "mahawitthayalai",
      type: "word",
      level: "support",
      sentenceIds: ["d12"]
    },
    {
      id: "w23",
      thai: "ภาษา",
      chinese: "语言",
      english: "language",
      rom: "phasaa",
      type: "word",
      level: "support",
      sentenceIds: ["d12", "d14", "d15"]
    },
    {
      id: "w24",
      thai: "การค้า",
      chinese: "贸易",
      english: "trade",
      rom: "kaan khaa",
      type: "word",
      level: "support",
      sentenceIds: ["d12"]
    },
    {
      id: "w25",
      thai: "ต่างประเทศ",
      chinese: "外国；国外",
      english: "foreign country / abroad",
      rom: "tang prathet",
      type: "word",
      level: "support",
      sentenceIds: ["d12"]
    },
    {
      id: "w26",
      thai: "วิชา",
      chinese: "专业；课程；科目",
      english: "subject / major",
      rom: "wicha",
      type: "word",
      level: "core",
      sentenceIds: ["d13", "d14"]
    },
    {
      id: "w27",
      thai: "ไทย",
      chinese: "泰国；泰语；泰国的",
      english: "Thai / Thailand",
      rom: "thai",
      type: "word",
      level: "core",
      sentenceIds: ["d14", "d15"]
    },
    {
      id: "w28",
      thai: "ก็",
      chinese: "也",
      english: "also",
      rom: "ko",
      type: "particle",
      level: "support",
      sentenceIds: ["d15"]
    },
    {
      id: "w29",
      thai: "แล้ว",
      chinese: "那么；然后",
      english: "then",
      rom: "laeo",
      type: "particle",
      level: "support",
      sentenceIds: ["d15"]
    },
    {
      id: "w30",
      thai: "พบกันใหม่",
      chinese: "再见；下次见",
      english: "see you again",
      rom: "phop kan mai",
      type: "chunk",
      level: "core",
      sentenceIds: ["d15"]
    }
  ],

  categorizedVocabulary: {
    provinces: [
      { thai: "กวางตุ้ง", chinese: "广东", rom: "Guang-dung" },
      { thai: "กวางสี", chinese: "广西", rom: "Guang-xi" },
      { thai: "ยูนนาน", chinese: "云南", rom: "Yunnan" },
      { thai: "ฮกเกี้ยน", chinese: "福建", rom: "Hokkien/Fujian" },
      { thai: "เสฉวน", chinese: "四川", rom: "Sichuan" },
      { thai: "ไหหลำ", chinese: "海南", rom: "Hainan" },
      { thai: "กังไส", chinese: "江西", rom: "Jiangxi" },
      { thai: "ทิเบต", chinese: "西藏", rom: "Tibet" }
    ],
    cities: [
      { thai: "ปักกิ่ง", chinese: "北京", rom: "Beijing" },
      { thai: "เชียงไฮ้", chinese: "上海", rom: "Shanghai" },
      { thai: "เทียนสิน", chinese: "天津", rom: "Tianjin" },
      { thai: "นานกิง", chinese: "南京", rom: "Nanjing" },
      { thai: "กวางโจว / กวางเจา", chinese: "广州", rom: "Guangzhou" },
      { thai: "ฉ่งกิ่ง", chinese: "重庆", rom: "Chongqing" },
      { thai: "ฮาร์บิน", chinese: "哈尔滨", rom: "Harbin" },
      { thai: "ซัวเถา", chinese: "汕头", rom: "Shantou" },
      { thai: "แต้จิ๋ว", chinese: "潮州", rom: "Chaozhou" }
    ]
  },

  patterns: [
    {
      id: "p1",
      name: "Greeting",
      thai: "สวัสดีครับ / สวัสดีค่ะ",
      chinese: "你好。/ 再见。",
      rom: "sawasdee krab / sawasdee kha",
      structure: ["สวัสดี", "ครับ / ค่ะ"],
      note: "男性常用ครับ，女性常用ค่ะ。",
      sentenceIds: ["d1", "d2", "d16"]
    },
    {
      id: "p2",
      name: "Polite question opening",
      thai: "ขอโทษครับ ...",
      chinese: "请问……",
      rom: "kho thot krab ...",
      structure: ["ขอโทษ", "ครับ"],
      note: "课文中用于礼貌地发问。",
      sentenceIds: ["d3"]
    },
    {
      id: "p3",
      name: "Ask name",
      thai: "คุณชื่ออะไรครับ?",
      chinese: "你叫什么名字？",
      rom: "khun chue arai krab?",
      structure: ["คุณ", "ชื่อ", "อะไร", "ครับ"],
      note: "ถามชื่อ / 用来询问姓名。",
      sentenceIds: ["d3"]
    },
    {
      id: "p4",
      name: "Say your name",
      thai: "ผมชื่อ...ครับ / ดิฉันชื่อ...ค่ะ",
      chinese: "我叫……",
      rom: "phom chue ... krab / dichan chue ... kha",
      structure: ["ผม / ดิฉัน", "ชื่อ", "...", "ครับ / ค่ะ"],
      note: "男性用ผม，女性用ดิฉัน。",
      sentenceIds: ["d4", "d5"]
    },
    {
      id: "p5",
      name: "And you?",
      thai: "คุณล่ะคะ?",
      chinese: "你呢？",
      rom: "khun la kha?",
      structure: ["คุณ", "ล่ะ", "คะ"],
      note: "承接上文，反问对方。",
      sentenceIds: ["d4"]
    },
    {
      id: "p6",
      name: "Nice to meet you",
      thai: "ยินดีที่ได้รู้จักครับ / ค่ะ",
      chinese: "很高兴认识你。",
      rom: "yin dee thi dai ruu jak krab / kha",
      structure: ["ยินดีที่ได้รู้จัก", "ครับ / ค่ะ"],
      note: "初次见面的常用礼貌语。",
      sentenceIds: ["d5"]
    },
    {
      id: "p7",
      name: "Same here",
      thai: "เช่นกันค่ะ / ครับ",
      chinese: "我也是。/ 同样。",
      rom: "chen kan kha / krab",
      structure: ["เช่นกัน", "ค่ะ / ครับ"],
      note: "用于回应‘很高兴认识你’。",
      sentenceIds: ["d6"]
    },
    {
      id: "p8",
      name: "Are you ...?",
      thai: "คุณ...หรือครับ?",
      chinese: "你是……吗？",
      rom: "khun ... rue krab?",
      structure: ["คุณ", "...", "หรือ", "ครับ"],
      note: "句末用หรือ构成疑问。",
      sentenceIds: ["d7"]
    },
    {
      id: "p9",
      name: "Yes, I am ...",
      thai: "ค่ะ ดิฉันเป็น...",
      chinese: "是的，我是……",
      rom: "kha. dichan pen ...",
      structure: ["ค่ะ", "ดิฉัน", "เป็น", "..."],
      note: "肯定回答。",
      sentenceIds: ["d8"]
    },
    {
      id: "p10",
      name: "Ask origin",
      thai: "คุณ...มาจากไหนครับ?",
      chinese: "你从哪里来？",
      rom: "khun ... maa chak nai krab?",
      structure: ["คุณ", "...", "มาจาก", "ไหน", "ครับ"],
      note: "ถาม来源。",
      sentenceIds: ["d9"]
    },
    {
      id: "p11",
      name: "Say origin",
      thai: "มาจาก...",
      chinese: "来自……",
      rom: "maa chak ...",
      structure: ["มาจาก", "..."],
      note: "回答籍贯或来源。",
      sentenceIds: ["d10"]
    },
    {
      id: "p12",
      name: "Ask where someone studies",
      thai: "เรียนที่ไหนครับ?",
      chinese: "在哪里学习？",
      rom: "rian thi nai krab?",
      structure: ["เรียน", "ที่", "ไหน", "ครับ"],
      note: "ถาม地点。",
      sentenceIds: ["d11"]
    },
    {
      id: "p13",
      name: "Study at ...",
      thai: "เรียนที่...",
      chinese: "在……学习",
      rom: "rian thi ...",
      structure: ["เรียน", "ที่", "..."],
      note: "回答学校或地点。",
      sentenceIds: ["d12"]
    },
    {
      id: "p14",
      name: "Ask major",
      thai: "เรียนวิชาอะไรครับ?",
      chinese: "学什么专业？",
      rom: "rian wicha arai krab?",
      structure: ["เรียน", "วิชา", "อะไร", "ครับ"],
      note: "ถาม专业/课程。",
      sentenceIds: ["d13"]
    },
    {
      id: "p15",
      name: "Say major",
      thai: "วิชาภาษาไทยค่ะ",
      chinese: "泰语专业。",
      rom: "wicha phasaa thai kha",
      structure: ["วิชา", "...", "ค่ะ"],
      note: "用于回答所学专业。",
      sentenceIds: ["d14"]
    },
    {
      id: "p16",
      name: "Also study ...",
      thai: "ผมก็เรียนภาษาไทยครับ",
      chinese: "我也学泰语。",
      rom: "phom ko rian phasaa thai krab",
      structure: ["ผม", "ก็", "เรียน", "...", "ครับ"],
      note: "ก็ 表示‘也’。",
      sentenceIds: ["d15"]
    },
    {
      id: "p17",
      name: "See you again",
      thai: "แล้วพบกันใหม่นะครับ",
      chinese: "那么，再见。/ 下次见。",
      rom: "laeo phop kan mai na krab",
      structure: ["แล้ว", "พบกันใหม่", "นะ", "ครับ"],
      note: "แล้ว表示‘那么/然后’，นะ用于语气柔和。",
      sentenceIds: ["d15"]
    }
  ],

  grammarNotes: [
    {
      id: "g1",
      topic: "ก็",
      chinese: "连词，意思是“也”",
      examples: [
        {
          thai: "คุณเป็นนักศึกษา ผมก็เป็นนักศึกษา",
          chinese: "你是大学生，我也是大学生。"
        },
        {
          thai: "เขาเรียนวิชาภาษาไทย ดิฉันก็เรียนวิชาภาษาไทย",
          chinese: "他学泰语专业，我也学泰语专业。"
        }
      ]
    },
    {
      id: "g2",
      topic: "คุณ",
      chinese: "常见用法很多：可作第二人称‘你’，也可加在人名前表示礼貌尊称，还可加在职务前表示尊敬。",
      examples: [
        {
          thai: "คุณชื่ออะไรคะ?",
          chinese: "你叫什么名字？"
        },
        {
          thai: "คุณปิติครับ คุณเรียนวิชาอะไรครับ?",
          chinese: "比迪先生，你学什么专业？"
        },
        {
          thai: "สวัสดีครับ คุณครู",
          chinese: "老师您好！"
        }
      ]
    },
    {
      id: "g3",
      topic: "จาก",
      chinese: "介词，表示‘从、自、由’。",
      examples: [
        {
          thai: "เรามาจากประเทศจีน",
          chinese: "我们来自中国。"
        },
        {
          thai: "เขามาจากยูนนาน",
          chinese: "他来自云南。"
        }
      ]
    },
    {
      id: "g4",
      topic: "เป็น",
      chinese: "系动词，表示‘是’。",
      examples: [
        {
          thai: "ผมเป็นนักศึกษา",
          chinese: "我是大学生。"
        },
        {
          thai: "คุณแม่เป็นอาจารย์",
          chinese: "妈妈是大学老师。"
        }
      ]
    },
    {
      id: "g5",
      topic: "ไหน",
      chinese: "疑问词，可表示‘哪里’或修饰前面的名词表示‘哪/哪一个’。",
      examples: [
        {
          thai: "คุณมาจากไหน?",
          chinese: "你来自哪里？"
        },
        {
          thai: "คุณเรียนที่มหาวิทยาลัยไหน?",
          chinese: "你在哪所大学读书？"
        }
      ]
    },
    {
      id: "g6",
      topic: "หรือ",
      chinese: "疑问副词，放在句末，表示“吗”。",
      examples: [
        {
          thai: "คุณชื่อสุภาสิหรือครับ?",
          chinese: "你叫苏玛丽吗？"
        },
        {
          thai: "คุณปิติเป็นคนจีนหรือคะ?",
          chinese: "比迪先生是中国人吗？"
        }
      ]
    },
    {
      id: "g7",
      topic: "อะไร",
      chinese: "疑问词，可表示‘什么’。",
      examples: [
        {
          thai: "คุณชื่ออะไรคะ?",
          chinese: "你叫什么名字？"
        },
        {
          thai: "คุณทำอะไรครับ?",
          chinese: "你做什么？"
        }
      ]
    },
    {
      id: "g8",
      topic: "ขอโทษ",
      chinese: "原意是‘对不起’，本课用于问话时表示礼貌，相当于‘劳驾、请问’。",
      examples: [
        {
          thai: "ขอโทษค่ะ คุณเรียนวิชาอะไรคะ?",
          chinese: "请问你学什么专业？"
        }
      ]
    },
    {
      id: "g9",
      topic: "ดิฉัน / ผม",
      chinese: "ดิฉัน常作女性‘我’，较正式；ผม常作男性‘我’。",
      examples: [
        {
          thai: "ดิฉันชื่อสุมาลีค่ะ",
          chinese: "我叫苏玛丽。"
        },
        {
          thai: "ผมชื่อปิติครับ",
          chinese: "我叫比迪。"
        }
      ]
    },
    {
      id: "g10",
      topic: "ล่ะ / คุณล่ะคะ",
      chinese: "承接上文的省略反问，意思是‘你呢？’。",
      examples: [
        {
          thai: "คุณชื่ออะไรคะ? คุณล่ะคะ?",
          chinese: "你叫什么名字？你呢？"
        }
      ]
    },
    {
      id: "g11",
      topic: "ยินดีที่ได้รู้จัก",
      chinese: "初次见面时的礼貌用语，回答常是“เช่นกัน”或“ยินดีเช่นกัน”。",
      examples: [
        {
          thai: "ยินดีที่ได้รู้จักครับ",
          chinese: "很高兴认识你。"
        }
      ]
    },
    {
      id: "g12",
      topic: "ที่",
      chinese: "常见用法很多，本课最重要的是表示地点‘在、于’。",
      examples: [
        {
          thai: "เขาเรียนภาษาต่างประเทศที่มหาวิทยาลัยปักกิ่ง",
          chinese: "他在北京大学学外语。"
        },
        {
          thai: "เราไปเรียนที่ประเทศไทย",
          chinese: "我们去泰国学习。"
        }
      ]
    },
    {
      id: "g13",
      topic: "นะ",
      chinese: "语气助词，这里用在陈述句后，提醒对方注意，使语气柔和。",
      examples: [
        {
          thai: "สวัสดีนะคะ",
          chinese: "你好呀。"
        },
        {
          thai: "ยินดีที่ได้รู้จักนะครับ",
          chinese: "很高兴认识你呀。"
        }
      ]
    }
  ],

  practice: [
    {
      id: "q1",
      type: "meaning_match",
      promptThai: "คุณชื่ออะไรครับ?",
      promptChinese: null,
      answer: "你叫什么名字？",
      options: ["你叫什么名字？", "你从哪里来？", "你好吗？"],
      explanation: "ชื่อ 是‘名字’，อะไร 是‘什么’。"
    },
    {
      id: "q2",
      type: "reply_choice",
      promptThai: "คุณชื่ออะไรครับ?",
      promptChinese: "请问，你叫什么名字？",
      answer: "ดิฉันชื่อสุมาลีค่ะ",
      options: ["ดิฉันชื่อสุมาลีค่ะ", "มาจากมณฑลหูหนานค่ะ", "สวัสดีครับ"],
      explanation: "这是在问名字，所以应用‘我叫……’回答。"
    },
    {
      id: "q3",
      type: "meaning_match",
      promptThai: "คุณสุมาลีมาจากไหนครับ?",
      promptChinese: null,
      answer: "苏玛丽，你从哪里来？",
      options: ["苏玛丽，你从哪里来？", "苏玛丽，你学什么专业？", "苏玛丽，你好吗？"],
      explanation: "มาจาก = 来自，ไหน = 哪里。"
    },
    {
      id: "q4",
      type: "reply_choice",
      promptThai: "คุณสุมาลีมาจากไหนครับ?",
      promptChinese: "你从哪里来？",
      answer: "มาจากมณฑลหูหนานค่ะ",
      options: ["มาจากมณฑลหูหนานค่ะ", "วิชาภาษาไทยค่ะ", "เช่นกันค่ะ"],
      explanation: "问来源，就用 มาจาก... 回答。"
    },
    {
      id: "q5",
      type: "pattern_fill",
      promptThai: "ดิฉันชื่อ ____ ค่ะ",
      promptChinese: "我叫____。",
      answer: "สุมาลี",
      options: ["สุมาลี", "หูหนาน", "ภาษาไทย"],
      explanation: "这里要填人名。"
    },
    {
      id: "q6",
      type: "pattern_fill",
      promptThai: "มาจาก ____ ค่ะ",
      promptChinese: "来自____。",
      answer: "มณฑลหูหนาน",
      options: ["มณฑลหูหนาน", "วิชาภาษาไทย", "ยินดีที่ได้รู้จัก"],
      explanation: "这里要填地点来源。"
    },
    {
      id: "q7",
      type: "reply_choice",
      promptThai: "ยินดีที่ได้รู้จักครับ",
      promptChinese: "很高兴认识你。",
      answer: "เช่นกันค่ะ",
      options: ["เช่นกันค่ะ", "ขอโทษครับ", "คุณชื่ออะไรครับ?"],
      explanation: "这是固定礼貌回应。"
    },
    {
      id: "q8",
      type: "meaning_match",
      promptThai: "เรียนวิชาอะไรครับ?",
      promptChinese: null,
      answer: "学什么专业？",
      options: ["学什么专业？", "在哪里学习？", "你是谁？"],
      explanation: "วิชา 是‘专业/科目’，อะไร 是‘什么’。"
    }
  ],

  extraExercisesFromBook: [
    {
      type: "translation_cn_to_th",
      note: "来自教材练习页，可后续扩展为更正式的题型。",
      items: [
        "你好！你叫什么名字？",
        "很高兴认识你。",
        "你是新生吗？",
        "你在哪里读书？",
        "你是中国人吗？",
        "你学泰语，你呢？",
        "你来自哪个省？",
        "你从哪里来？"
      ]
    },
    {
      type: "translation_th_to_cn",
      note: "来自教材练习页，可后续扩展。",
      items: [
        "สวัสดีค่ะ",
        "ขอโทษค่ะ คุณชื่ออะไรคะ?",
        "ดิฉันชื่อสุภาพรค่ะ",
        "ค่ะ ดิฉันเป็นนักศึกษาใหม่",
        "ดิฉันเรียนภาษาไทยค่ะ",
        "ผมชื่อหลิวครับ คุณล่ะครับ",
        "คุณสุภาพรเป็นนักศึกษาใหม่หรือครับ?",
        "ผมเรียนวิชาภาษาไทย คุณสุภาพรล่ะครับ?"
      ]
    }
  ]
};

window.LESSON_1 = lesson1;