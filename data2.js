const lesson2 = {
  id: 2,
  title: "Family",
  titleThai: "ครอบครัว",
  titleChinese: "家庭",

  dialogue: [
    {
      id: "d1",
      speaker: "สุภาพร",
      thai: "คุณหลิวคะ คุณเป็นคนเมืองอะไรคะ?",
      chinese: "刘先生，您是哪座城市的人？",
      rom: "khun Liu kha, khun pen khon mueang arai kha?",
      keywordIds: ["w1", "w2", "w3", "w4", "w5", "w6"],
      patternIds: ["p1", "p2"]
    },
    {
      id: "d2",
      speaker: "หลิว",
      thai: "ผมเป็นคนกวางโจวครับ",
      chinese: "我是广州人。",
      rom: "phom pen khon Guangzhou krab",
      keywordIds: ["w7", "w3", "w4", "w8", "w9"],
      patternIds: ["p3"]
    },
    {
      id: "d3",
      speaker: "สุภาพร",
      thai: "ครอบครัวของคุณหลิวมีใครบ้างคะ?",
      chinese: "你家里有哪些人？",
      rom: "khropkhrua khong khun Liu mii khrai bang kha?",
      keywordIds: ["w10", "w11", "w1", "w12", "w13", "w6"],
      patternIds: ["p4"]
    },
    {
      id: "d4",
      speaker: "หลิว",
      thai: "มีทั้งหมด ๔ คนครับ มีคุณพ่อ คุณแม่ พี่สาวและผม",
      chinese: "一共四口人。有父亲、母亲、姐姐和我。",
      rom: "mii thangmot sii khon krab, mii khun phaw khun mae phii sao lae phom",
      keywordIds: ["w12", "w14", "w15", "w9", "w16", "w17", "w18", "w19", "w7"],
      patternIds: ["p5", "p6"]
    },
    {
      id: "d5",
      speaker: "สุภาพร",
      thai: "คุณพ่อคุณแม่ของคุณหลิวทำงานอะไรคะ?",
      chinese: "你父母做什么工作？",
      rom: "khun phaw khun mae khong khun Liu tham-ngaan arai kha?",
      keywordIds: ["w16", "w17", "w11", "w1", "w20", "w5", "w6"],
      patternIds: ["p7"]
    },
    {
      id: "d6",
      speaker: "หลิว",
      thai: "คุณพ่อเป็นหมอ ทำงานที่โรงพยาบาลประชาชนมณฑลกวางตุ้ง คุณแม่เป็นครู สอนภาษาอังกฤษที่โรงเรียนมัธยมแห่งหนึ่งครับ",
      chinese: "父亲是医生，在广东省人民医院工作。母亲是老师，在一所中学教英语。",
      rom: "khun phaw pen maw, tham-ngaan thi roongphayabaan prachaachon monthon Guangdung; khun mae pen khruu, son phasaa angkrit thi roongrian matthayom haeng nueng krab",
      keywordIds: ["w16", "w3", "w21", "w20", "w22", "w23", "w24", "w25", "w17", "w26", "w27", "w28", "w29", "w30", "w31", "w32", "w9"],
      patternIds: ["p8", "p9", "p10"]
    },
    {
      id: "d7",
      speaker: "สุภาพร",
      thai: "พี่สาวกับน้องชายล่ะคะ?",
      chinese: "那姐姐和弟弟呢？",
      rom: "phii sao kap nong chaai la kha?",
      keywordIds: ["w18", "w33", "w34", "w35"],
      patternIds: ["p11"]
    },
    {
      id: "d8",
      speaker: "หลิว",
      thai: "พี่สาวชื่อจันทร์ ทำงานที่ธนาคารครับ พี่จันทร์แต่งงานแล้ว และมีลูกคนเดียว เป็นลูกสาว ส่วนน้องชายมีอายุ ๑๕ ปี กำลังเรียนชั้น ม.๕ อยู่ครับ",
      chinese: "姐姐叫詹特，在银行工作。她已经结婚了，并且有一个女儿。弟弟十五岁，正在读高二。",
      rom: "phii sao chue Jan, tham-ngaan thi thanakhaan krab. phii Jan taeng-ngaan laeo, lae mii luuk khon diao, pen luuk sao. suan nong chaai mii aayu sip-haa pii, kamlang rian chan mo haa yuu krab",
      keywordIds: ["w18", "w6", "w36", "w20", "w37", "w9", "w38", "w39", "w12", "w40", "w3", "w19", "w41", "w42", "w43", "w44", "w45", "w46"],
      patternIds: ["p12", "p13", "p14", "p15", "p16"]
    },
    {
      id: "d9",
      speaker: "สุภาพร",
      thai: "ครอบครัวของคุณหลิวมีความสุขมากนะคะ",
      chinese: "你们家非常幸福啊。",
      rom: "khropkhrua khong khun Liu mii khwaam-suk maak na kha",
      keywordIds: ["w10", "w11", "w1", "w12", "w47", "w48", "w49", "w6"],
      patternIds: ["p17"]
    },
    {
      id: "d10",
      speaker: "หลิว",
      thai: "ครับ มีความสุขมาก คุณสุภาพรล่ะ มีพี่น้องกี่คนครับ?",
      chinese: "是的，很幸福。那你呢？你有几个兄弟姐妹？",
      rom: "krab, mii khwaam-suk maak. khun Suphaporn la, mii phii-nong kii khon krab?",
      keywordIds: ["w9", "w12", "w47", "w49", "w1", "w35", "w50", "w15"],
      patternIds: ["p18"]
    },
    {
      id: "d11",
      speaker: "สุภาพร",
      thai: "สามคนน่ะ ดิฉันเป็นลูกคนสุดท้องค่ะ พี่คนโตเป็นพี่ชาย พี่คนที่สองเป็นพี่สาวค่ะ",
      chinese: "三个。我是最小的孩子。老大是哥哥，第二个是姐姐。",
      rom: "saam khon na. dichan pen luuk khon sut-thong kha. phii khon to pen phii chaai. phii khon thi song pen phii sao kha",
      keywordIds: ["w51", "w15", "w52", "w3", "w53", "w54", "w18"],
      patternIds: ["p19", "p20"]
    }
  ],

  keywords: [
    {
      id: "w1",
      thai: "คุณ",
      chinese: "你；您",
      english: "you",
      rom: "khun",
      type: "pronoun",
      level: "core",
      sentenceIds: ["d1", "d3", "d5", "d9", "d10"]
    },
    {
      id: "w2",
      thai: "คนเมือง",
      chinese: "城里人；某城市的人",
      english: "city person / person from a city",
      rom: "khon mueang",
      type: "chunk",
      level: "core",
      sentenceIds: ["d1"]
    },
    {
      id: "w3",
      thai: "เป็น",
      chinese: "是；成为",
      english: "to be",
      rom: "pen",
      type: "verb",
      level: "core",
      sentenceIds: ["d1", "d2", "d6", "d8", "d11"]
    },
    {
      id: "w4",
      thai: "คน",
      chinese: "人",
      english: "person",
      rom: "khon",
      type: "word",
      level: "core",
      sentenceIds: ["d1", "d2", "d4", "d8", "d10", "d11"]
    },
    {
      id: "w5",
      thai: "อะไร",
      chinese: "什么",
      english: "what",
      rom: "arai",
      type: "question_word",
      level: "core",
      sentenceIds: ["d1", "d5"]
    },
    {
      id: "w6",
      thai: "คะ / ค่ะ",
      chinese: "女性礼貌语气词",
      english: "polite particle (female)",
      rom: "kha",
      type: "particle",
      level: "core",
      sentenceIds: ["d1", "d3", "d5", "d7", "d9", "d11"]
    },
    {
      id: "w7",
      thai: "ผม",
      chinese: "我（男性）",
      english: "I (male)",
      rom: "phom",
      type: "pronoun",
      level: "core",
      sentenceIds: ["d2", "d4"]
    },
    {
      id: "w8",
      thai: "กวางโจว",
      chinese: "广州",
      english: "Guangzhou",
      rom: "Guangzhou",
      type: "word",
      level: "support",
      sentenceIds: ["d2"]
    },
    {
      id: "w9",
      thai: "ครับ",
      chinese: "男性礼貌语气词",
      english: "polite particle (male)",
      rom: "krab",
      type: "particle",
      level: "core",
      sentenceIds: ["d2", "d4", "d6", "d8", "d10"]
    },
    {
      id: "w10",
      thai: "ครอบครัว",
      chinese: "家庭",
      english: "family",
      rom: "khropkhrua",
      type: "word",
      level: "core",
      sentenceIds: ["d3", "d9"]
    },
    {
      id: "w11",
      thai: "ของ",
      chinese: "……的",
      english: "of",
      rom: "khong",
      type: "particle",
      level: "core",
      sentenceIds: ["d3", "d5", "d9"]
    },
    {
      id: "w12",
      thai: "มี",
      chinese: "有",
      english: "have / there is",
      rom: "mii",
      type: "verb",
      level: "core",
      sentenceIds: ["d3", "d4", "d8", "d9", "d10"]
    },
    {
      id: "w13",
      thai: "ใคร",
      chinese: "谁",
      english: "who",
      rom: "khrai",
      type: "question_word",
      level: "core",
      sentenceIds: ["d3"]
    },
    {
      id: "w14",
      thai: "ทั้งหมด",
      chinese: "总共；一共",
      english: "in total",
      rom: "thangmot",
      type: "adverb",
      level: "core",
      sentenceIds: ["d4"]
    },
    {
      id: "w15",
      thai: "คน",
      chinese: "人；口（量词）",
      english: "person; classifier",
      rom: "khon",
      type: "classifier",
      level: "core",
      sentenceIds: ["d4", "d10", "d11"]
    },
    {
      id: "w16",
      thai: "คุณพ่อ",
      chinese: "父亲；爸爸",
      english: "father",
      rom: "khun phaw",
      type: "word",
      level: "core",
      sentenceIds: ["d4", "d5", "d6"]
    },
    {
      id: "w17",
      thai: "คุณแม่",
      chinese: "母亲；妈妈",
      english: "mother",
      rom: "khun mae",
      type: "word",
      level: "core",
      sentenceIds: ["d4", "d5", "d6"]
    },
    {
      id: "w18",
      thai: "พี่สาว",
      chinese: "姐姐",
      english: "older sister",
      rom: "phii sao",
      type: "word",
      level: "core",
      sentenceIds: ["d4", "d7", "d8", "d11"]
    },
    {
      id: "w19",
      thai: "และ",
      chinese: "和；并且",
      english: "and",
      rom: "lae",
      type: "particle",
      level: "support",
      sentenceIds: ["d4", "d8"]
    },
    {
      id: "w20",
      thai: "ทำงาน",
      chinese: "工作",
      english: "work",
      rom: "tham-ngaan",
      type: "verb",
      level: "core",
      sentenceIds: ["d5", "d6", "d8"]
    },
    {
      id: "w21",
      thai: "หมอ",
      chinese: "医生",
      english: "doctor",
      rom: "maw",
      type: "word",
      level: "core",
      sentenceIds: ["d6"]
    },
    {
      id: "w22",
      thai: "ที่",
      chinese: "在；于",
      english: "at / in",
      rom: "thi",
      type: "particle",
      level: "core",
      sentenceIds: ["d6", "d8"]
    },
    {
      id: "w23",
      thai: "โรงพยาบาล",
      chinese: "医院",
      english: "hospital",
      rom: "roongphayabaan",
      type: "word",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w24",
      thai: "ประชาชน",
      chinese: "人民",
      english: "people",
      rom: "prachaachon",
      type: "word",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w25",
      thai: "มณฑล",
      chinese: "省",
      english: "province",
      rom: "monthon",
      type: "word",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w26",
      thai: "ครู",
      chinese: "老师",
      english: "teacher",
      rom: "khruu",
      type: "word",
      level: "core",
      sentenceIds: ["d6"]
    },
    {
      id: "w27",
      thai: "สอน",
      chinese: "教",
      english: "teach",
      rom: "son",
      type: "verb",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w28",
      thai: "ภาษาอังกฤษ",
      chinese: "英语",
      english: "English language",
      rom: "phasaa angkrit",
      type: "word",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w29",
      thai: "โรงเรียนมัธยม",
      chinese: "中学",
      english: "secondary school",
      rom: "roongrian matthayom",
      type: "word",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w30",
      thai: "แห่งหนึ่ง",
      chinese: "一所；某一……",
      english: "a certain ... / one",
      rom: "haeng nueng",
      type: "chunk",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w31",
      thai: "กวางตุ้ง",
      chinese: "广东",
      english: "Guangdong",
      rom: "Guangdung",
      type: "word",
      level: "support",
      sentenceIds: ["d6"]
    },
    {
      id: "w32",
      thai: "ธนาคาร",
      chinese: "银行",
      english: "bank",
      rom: "thanakhaan",
      type: "word",
      level: "support",
      sentenceIds: ["d8"]
    },
    {
      id: "w33",
      thai: "กับ",
      chinese: "和",
      english: "with / and",
      rom: "kap",
      type: "particle",
      level: "support",
      sentenceIds: ["d7"]
    },
    {
      id: "w34",
      thai: "น้องชาย",
      chinese: "弟弟",
      english: "younger brother",
      rom: "nong chaai",
      type: "word",
      level: "core",
      sentenceIds: ["d7", "d8"]
    },
    {
      id: "w35",
      thai: "ล่ะ",
      chinese: "呢",
      english: "then / and ...?",
      rom: "la",
      type: "particle",
      level: "core",
      sentenceIds: ["d7", "d10"]
    },
    {
      id: "w36",
      thai: "ชื่อ",
      chinese: "名字；叫做",
      english: "name / be called",
      rom: "chue",
      type: "word",
      level: "core",
      sentenceIds: ["d8"]
    },
    {
      id: "w37",
      thai: "แต่งงาน",
      chinese: "结婚",
      english: "marry",
      rom: "taeng-ngaan",
      type: "verb",
      level: "core",
      sentenceIds: ["d8"]
    },
    {
      id: "w38",
      thai: "แล้ว",
      chinese: "已经；然后",
      english: "already / then",
      rom: "laeo",
      type: "particle",
      level: "core",
      sentenceIds: ["d8"]
    },
    {
      id: "w39",
      thai: "ลูกคนเดียว",
      chinese: "独生孩子；唯一的孩子",
      english: "only child / single child",
      rom: "luuk khon diao",
      type: "chunk",
      level: "core",
      sentenceIds: ["d8"]
    },
    {
      id: "w40",
      thai: "ลูกสาว",
      chinese: "女儿",
      english: "daughter",
      rom: "luuk sao",
      type: "word",
      level: "core",
      sentenceIds: ["d8"]
    },
    {
      id: "w41",
      thai: "ส่วน",
      chinese: "至于；而",
      english: "as for",
      rom: "suan",
      type: "particle",
      level: "support",
      sentenceIds: ["d8"]
    },
    {
      id: "w42",
      thai: "อายุ",
      chinese: "年龄；岁数",
      english: "age",
      rom: "aayu",
      type: "word",
      level: "core",
      sentenceIds: ["d8"]
    },
    {
      id: "w43",
      thai: "ปี",
      chinese: "年；岁",
      english: "year",
      rom: "pii",
      type: "word",
      level: "support",
      sentenceIds: ["d8"]
    },
    {
      id: "w44",
      thai: "กำลัง...อยู่",
      chinese: "正在……",
      english: "be doing",
      rom: "kamlang ... yuu",
      type: "chunk",
      level: "core",
      sentenceIds: ["d8"]
    },
    {
      id: "w45",
      thai: "ชั้น",
      chinese: "年级；班",
      english: "grade / class",
      rom: "chan",
      type: "word",
      level: "support",
      sentenceIds: ["d8"]
    },
    {
      id: "w46",
      thai: "ม.๕",
      chinese: "高二",
      english: "grade 11 / high school year 2",
      rom: "mo haa",
      type: "word",
      level: "support",
      sentenceIds: ["d8"]
    },
    {
      id: "w47",
      thai: "ความสุข",
      chinese: "幸福",
      english: "happiness",
      rom: "khwaam-suk",
      type: "word",
      level: "core",
      sentenceIds: ["d9", "d10"]
    },
    {
      id: "w48",
      thai: "มาก",
      chinese: "很；非常",
      english: "very",
      rom: "maak",
      type: "adverb",
      level: "core",
      sentenceIds: ["d9", "d10"]
    },
    {
      id: "w49",
      thai: "นะ",
      chinese: "语气助词",
      english: "softening particle",
      rom: "na",
      type: "particle",
      level: "support",
      sentenceIds: ["d9"]
    },
    {
      id: "w50",
      thai: "พี่น้อง",
      chinese: "兄弟姐妹",
      english: "siblings",
      rom: "phii-nong",
      type: "word",
      level: "core",
      sentenceIds: ["d10"]
    },
    {
      id: "w51",
      thai: "สาม",
      chinese: "三",
      english: "three",
      rom: "saam",
      type: "number",
      level: "support",
      sentenceIds: ["d11"]
    },
    {
      id: "w52",
      thai: "ดิฉัน",
      chinese: "我（女性）",
      english: "I (female)",
      rom: "dichan",
      type: "pronoun",
      level: "core",
      sentenceIds: ["d11"]
    },
    {
      id: "w53",
      thai: "ลูกคนสุดท้อง",
      chinese: "最小的孩子；老幺",
      english: "youngest child",
      rom: "luuk khon sut-thong",
      type: "chunk",
      level: "core",
      sentenceIds: ["d11"]
    },
    {
      id: "w54",
      thai: "พี่คนโต / พี่คนที่สอง",
      chinese: "老大 / 第二个",
      english: "eldest sibling / second sibling",
      rom: "phii khon to / phii khon thi song",
      type: "chunk",
      level: "support",
      sentenceIds: ["d11"]
    }
  ],

  categorizedVocabulary: {
    familyMembers: [
      { thai: "ปู่", chinese: "祖父；爷爷", rom: "puu" },
      { thai: "ย่า", chinese: "祖母；奶奶", rom: "yaa" },
      { thai: "ตา", chinese: "外祖父；外公", rom: "taa" },
      { thai: "ยาย", chinese: "外祖母；外婆", rom: "yaai" },
      { thai: "พ่อ", chinese: "父亲；爸爸", rom: "phaw" },
      { thai: "แม่", chinese: "母亲；妈妈", rom: "mae" },
      { thai: "พี่สาว", chinese: "姐姐", rom: "phii sao" },
      { thai: "พี่ชาย", chinese: "哥哥", rom: "phii chaai" },
      { thai: "น้องสาว", chinese: "妹妹", rom: "nong sao" },
      { thai: "น้องชาย", chinese: "弟弟", rom: "nong chaai" },
      { thai: "ลุง", chinese: "伯父；叔叔（比父亲年长）", rom: "lung" },
      { thai: "น้า", chinese: "舅舅；姨（比母亲年幼）", rom: "naa" },
      { thai: "ป้า", chinese: "姑妈；姨妈（比父母年长）", rom: "paa" },
      { thai: "อา", chinese: "叔叔；姑姑（比父亲年幼）", rom: "aa" },
      { thai: "ลูกสาว", chinese: "女儿", rom: "luuk sao" },
      { thai: "ลูกชาย", chinese: "儿子", rom: "luuk chaai" },
      { thai: "หลาน", chinese: "孙；侄；外甥等", rom: "laan" },
      { thai: "ลูกพี่ลูกน้อง", chinese: "堂表兄弟姐妹", rom: "luuk-phii-luuk-nong" }
    ],
    numbersThai: [
      { thai: "๑", chinese: "1", rom: "nueng" },
      { thai: "๒", chinese: "2", rom: "song" },
      { thai: "๓", chinese: "3", rom: "saam" },
      { thai: "๔", chinese: "4", rom: "sii" },
      { thai: "๕", chinese: "5", rom: "haa" },
      { thai: "๖", chinese: "6", rom: "hok" },
      { thai: "๗", chinese: "7", rom: "chet" },
      { thai: "๘", chinese: "8", rom: "paet" },
      { thai: "๙", chinese: "9", rom: "kao" },
      { thai: "๐", chinese: "0", rom: "suun" }
    ],
    usefulWords: [
      { thai: "โรงเรียนมัธยม", chinese: "中学", rom: "roongrian matthayom" },
      { thai: "ธนาคาร", chinese: "银行", rom: "thanakhaan" },
      { thai: "ชั้น", chinese: "年级；班", rom: "chan" },
      { thai: "แต่งงาน", chinese: "结婚", rom: "taeng-ngaan" },
      { thai: "เดียว", chinese: "单个；单独", rom: "diao" },
      { thai: "กำลัง...อยู่", chinese: "正在……", rom: "kamlang ... yuu" },
      { thai: "กี่", chinese: "几；多少", rom: "kii" },
      { thai: "อายุ", chinese: "年龄", rom: "aayu" },
      { thai: "แห่ง", chinese: "所；处", rom: "haeng" },
      { thai: "ลูกคนสุดท้อง", chinese: "最小的孩子；老幺", rom: "luuk khon sut-thong" },
      { thai: "ลูกคนโต", chinese: "老大", rom: "luuk khon to" },
      { thai: "พี่คนโต", chinese: "大姐；大哥", rom: "phii khon to" },
      { thai: "พี่คนที่สอง", chinese: "二姐；二哥", rom: "phii khon thi song" }
    ]
  },

  patterns: [
    {
      id: "p1",
      name: "Ask what city someone is from",
      thai: "คุณเป็นคนเมืองอะไรคะ?",
      chinese: "你是哪座城市的人？",
      rom: "khun pen khon mueang arai kha?",
      structure: ["คุณ", "เป็น", "คนเมือง", "อะไร", "คะ"],
      note: "用于询问别人是哪个城市的人。",
      sentenceIds: ["d1"]
    },
    {
      id: "p2",
      name: "Ask family members",
      thai: "ครอบครัวของ...มีใครบ้างคะ?",
      chinese: "……家里有哪些人？",
      rom: "khropkhrua khong ... mii khrai bang kha?",
      structure: ["ครอบครัว", "ของ", "...", "มี", "ใคร", "บ้าง", "คะ"],
      note: "ถาม家庭成员有哪些。",
      sentenceIds: ["d3"]
    },
    {
      id: "p3",
      name: "Say you are from a city",
      thai: "ผมเป็นคน...ครับ",
      chinese: "我是……人。",
      rom: "phom pen khon ... krab",
      structure: ["ผม", "เป็น", "คน", "...", "ครับ"],
      note: "用于回答籍贯或城市来源。",
      sentenceIds: ["d2"]
    },
    {
      id: "p4",
      name: "Ask who is in the family",
      thai: "ครอบครัวของ...มีใครบ้างคะ?",
      chinese: "……家里有哪些人？",
      rom: "khropkhrua khong ... mii khrai bang kha?",
      structure: ["ครอบครัวของ...", "มี", "ใครบ้าง"],
      note: "บ้าง 表示‘一些、哪些’。",
      sentenceIds: ["d3"]
    },
    {
      id: "p5",
      name: "Say total number of family members",
      thai: "มีทั้งหมด ... คนครับ",
      chinese: "一共有……口人。",
      rom: "mii thangmot ... khon krab",
      structure: ["มี", "ทั้งหมด", "...", "คน", "ครับ"],
      note: "ทั้งหมด 表示‘总共’。",
      sentenceIds: ["d4"]
    },
    {
      id: "p6",
      name: "List family members",
      thai: "มี...และ...",
      chinese: "有……和……",
      rom: "mii ... lae ...",
      structure: ["มี", "...", "และ", "..."],
      note: "用于列举家庭成员。",
      sentenceIds: ["d4"]
    },
    {
      id: "p7",
      name: "Ask parents' jobs",
      thai: "คุณพ่อคุณแม่ของ...ทำงานอะไรคะ?",
      chinese: "……的父母做什么工作？",
      rom: "khun phaw khun mae khong ... tham-ngaan arai kha?",
      structure: ["คุณพ่อคุณแม่ของ...", "ทำงาน", "อะไร", "คะ"],
      note: "ถาม职业。",
      sentenceIds: ["d5"]
    },
    {
      id: "p8",
      name: "Say someone's profession",
      thai: "...เป็นหมอ / เป็นครู",
      chinese: "……是医生 / 是老师",
      rom: "... pen maw / pen khruu",
      structure: ["...", "เป็น", "职业"],
      note: "用于说明职业身份。",
      sentenceIds: ["d6"]
    },
    {
      id: "p9",
      name: "Work somewhere",
      thai: "ทำงานที่...",
      chinese: "在……工作",
      rom: "tham-ngaan thi ...",
      structure: ["ทำงาน", "ที่", "..."],
      note: "表示工作地点。",
      sentenceIds: ["d6", "d8"]
    },
    {
      id: "p10",
      name: "Teach a language somewhere",
      thai: "สอนภาษาอังกฤษที่โรงเรียน...",
      chinese: "在……教英语",
      rom: "son phasaa angkrit thi roongrian ...",
      structure: ["สอน", "语言", "ที่", "地点"],
      note: "表示教授某门语言。",
      sentenceIds: ["d6"]
    },
    {
      id: "p11",
      name: "Ask about siblings",
      thai: "พี่สาวกับน้องชายล่ะคะ?",
      chinese: "那姐姐和弟弟呢？",
      rom: "phii sao kap nong chaai la kha?",
      structure: ["...กับ...", "ล่ะคะ"],
      note: "ล่ะ 承接上文，表示‘那……呢？’。",
      sentenceIds: ["d7"]
    },
    {
      id: "p12",
      name: "Say someone is already married",
      thai: "...แต่งงานแล้ว",
      chinese: "……已经结婚了",
      rom: "... taeng-ngaan laeo",
      structure: ["...", "แต่งงาน", "แล้ว"],
      note: "แล้ว 在这里表示动作已经完成。",
      sentenceIds: ["d8"]
    },
    {
      id: "p13",
      name: "Say someone has an only child",
      thai: "มีลูกคนเดียว",
      chinese: "有一个孩子 / 独生孩子",
      rom: "mii luuk khon diao",
      structure: ["มี", "ลูก", "คนเดียว"],
      note: "เดียว 表示‘只有一个’。",
      sentenceIds: ["d8"]
    },
    {
      id: "p14",
      name: "Say age",
      thai: "มีอายุ ... ปี",
      chinese: "……岁",
      rom: "mii aayu ... pii",
      structure: ["มีอายุ", "...", "ปี"],
      note: "用于表达年龄。",
      sentenceIds: ["d8"]
    },
    {
      id: "p15",
      name: "Be doing now",
      thai: "กำลังเรียน...อยู่",
      chinese: "正在学习……",
      rom: "kamlang rian ... yuu",
      structure: ["กำลัง", "动词", "อยู่"],
      note: "表示动作正在进行。",
      sentenceIds: ["d8"]
    },
    {
      id: "p16",
      name: "Say school grade",
      thai: "เรียนชั้น ม.๕ อยู่",
      chinese: "正在读高二",
      rom: "rian chan mo haa yuu",
      structure: ["เรียน", "ชั้น", "年级", "อยู่"],
      note: "用于说明就读年级。",
      sentenceIds: ["d8"]
    },
    {
      id: "p17",
      name: "Comment that a family is very happy",
      thai: "ครอบครัวของ...มีความสุขมากนะคะ",
      chinese: "……家很幸福啊",
      rom: "khropkhrua khong ... mii khwaam-suk maak na kha",
      structure: ["ครอบครัวของ...", "มี", "ความสุข", "มาก", "นะคะ"],
      note: "นะคะ 使语气更柔和。",
      sentenceIds: ["d9"]
    },
    {
      id: "p18",
      name: "Ask how many siblings",
      thai: "มีพี่น้องกี่คนครับ?",
      chinese: "有几个兄弟姐妹？",
      rom: "mii phii-nong kii khon krab?",
      structure: ["มี", "พี่น้อง", "กี่", "คน", "ครับ"],
      note: "กี่ 表示‘几、多少’。",
      sentenceIds: ["d10"]
    },
    {
      id: "p19",
      name: "Say you are the youngest child",
      thai: "ดิฉันเป็นลูกคนสุดท้องค่ะ",
      chinese: "我是最小的孩子。",
      rom: "dichan pen luuk khon sut-thong kha",
      structure: ["ดิฉัน", "เป็น", "ลูกคนสุดท้อง", "ค่ะ"],
      note: "用于说明排行。",
      sentenceIds: ["d11"]
    },
    {
      id: "p20",
      name: "Say eldest / second sibling",
      thai: "พี่คนโตเป็น... / พี่คนที่สองเป็น...",
      chinese: "老大是…… / 第二个是……",
      rom: "phii khon to pen ... / phii khon thi song pen ...",
      structure: ["พี่คนโต", "เป็น", "..."],
      note: "用于介绍兄弟姐妹排行。",
      sentenceIds: ["d11"]
    }
  ],

  grammarNotes: [
    {
      id: "g1",
      topic: "กำลัง...อยู่",
      chinese: "助动词结构，放在动词前后，表示‘正在……’。",
      examples: [
        {
          thai: "อาจารย์กำลังสอนอยู่",
          chinese: "老师正在上课。"
        },
        {
          thai: "พี่กำลังกินข้าวอยู่",
          chinese: "哥哥正在吃饭。"
        },
        {
          thai: "นักศึกษากำลังเรียนภาษาไทยอยู่",
          chinese: "学生正在学泰语。"
        }
      ]
    },
    {
      id: "g2",
      topic: "กี่",
      chinese: "疑问副词，常用于数量询问，意思是‘几、多少’。",
      examples: [
        {
          thai: "มหาวิทยาลัยมีนักศึกษากี่คน?",
          chinese: "你们学校有多少学生？"
        },
        {
          thai: "ครอบครัวของคุณมีกี่คน?",
          chinese: "你家有几口人？"
        },
        {
          thai: "คุณมีพี่น้องกี่คน?",
          chinese: "你有几个兄弟姐妹？"
        }
      ]
    },
    {
      id: "g3",
      topic: "ของ",
      chinese: "介词，表示所属关系，相当于‘……的’。",
      examples: [
        {
          thai: "คุณพ่อของคุณ",
          chinese: "你的父亲"
        },
        {
          thai: "น้องชายของเขา",
          chinese: "他的弟弟"
        },
        {
          thai: "พี่ของฉัน",
          chinese: "我的姐姐/哥哥"
        }
      ]
    },
    {
      id: "g4",
      topic: "คือ กับ เป็น",
      chinese: "两者都可对应汉语里的‘是’，但用法不同。คือ常用于解释说明，เป็น常用于说明身份、性质、职业。",
      examples: [
        {
          thai: "นี่คืออะไรครับ?",
          chinese: "这是什么？"
        },
        {
          thai: "ผมเป็นนักศึกษา",
          chinese: "我是大学生。"
        },
        {
          thai: "คุณแม่เป็นอาจารย์",
          chinese: "妈妈是老师。"
        }
      ]
    },
    {
      id: "g5",
      topic: "ทั้งหมด",
      chinese: "副词，放在动词后，修饰动词，表示‘总共、一共’。",
      examples: [
        {
          thai: "ครอบครัวของผมมีทั้งหมด ๔ คน",
          chinese: "我家总共有四口人。"
        },
        {
          thai: "โรงเรียนของเรามีครูทั้งหมดแปดสิบคน",
          chinese: "我们学校总共有八十名老师。"
        }
      ]
    },
    {
      id: "g6",
      topic: "ที่",
      chinese: "本课常见两类：一是介词，表示地点‘在、于’；二是序数前缀，表示‘第……’。",
      examples: [
        {
          thai: "เขาทำงานที่โรงพยาบาล",
          chinese: "他在医院工作。"
        },
        {
          thai: "นักศึกษาปีที่ ๑",
          chinese: "大一学生。"
        },
        {
          thai: "พี่สาวคนที่สอง",
          chinese: "二姐。"
        }
      ]
    },
    {
      id: "g7",
      topic: "ท่าน",
      chinese: "尊称代词，可对应‘您’或第三人称尊称，也可用于职务前。",
      examples: [
        {
          thai: "ท่านทำงานที่โรงพยาบาล",
          chinese: "您/他在医院工作。"
        },
        {
          thai: "ท่านอธิการบดี",
          chinese: "校长"
        },
        {
          thai: "ท่านอาจารย์",
          chinese: "老师（尊称）"
        }
      ]
    },
    {
      id: "g8",
      topic: "ส่วน",
      chinese: "连词，用于第二句句首，提出另一件事或另一方面，意思相当于‘至于……’。",
      examples: [
        {
          thai: "พี่สาวเป็นครู น้องชายเป็นนักเรียน ส่วนเขาเป็นหมอ",
          chinese: "姐姐是老师，弟弟是学生，至于他是医生。"
        }
      ]
    },
    {
      id: "g9",
      topic: "บ้าง",
      chinese: "在疑问句中放在疑问词后，表示答案是两个以上的数量，相当于‘一些、哪些’。",
      examples: [
        {
          thai: "ครอบครัวของคุณหลิวมีใครบ้างคะ?",
          chinese: "你家里有哪些人？"
        },
        {
          thai: "คุณทำอะไรบ้าง?",
          chinese: "你做些什么？"
        }
      ]
    },
    {
      id: "g10",
      topic: "แห่งหนึ่ง",
      chinese: "一种口语表达方式，通常相当于‘一所、某一……’，常放在量词后。",
      examples: [
        {
          thai: "สอนภาษาอังกฤษที่โรงเรียนมัธยมแห่งหนึ่ง",
          chinese: "在一所中学教英语。"
        }
      ]
    },
    {
      id: "g11",
      topic: "แล้ว",
      chinese: "在本课中作时态助词，表示某种动作、行为或状态已经完成。",
      examples: [
        {
          thai: "พี่จันทร์แต่งงานแล้ว",
          chinese: "姐姐已经结婚了。"
        },
        {
          thai: "เขาไปปักกิ่งแล้ว",
          chinese: "他去北京了。"
        }
      ]
    },
    {
      id: "g12",
      topic: "เดียว / ...เดียวเท่านั้น",
      chinese: "放在量词后，表示‘仅此一个、只有一个’。",
      examples: [
        {
          thai: "มีลูกคนเดียว",
          chinese: "只有一个孩子。"
        },
        {
          thai: "ห้องนี้มีโต๊ะตัวเดียวเท่านั้น",
          chinese: "这个房间里只有一张桌子。"
        }
      ]
    },
    {
      id: "g13",
      topic: "นะ / นะคะ",
      chinese: "语气助词，在陈述句后表示提醒对方注意或加强语气，使表达更柔和。",
      examples: [
        {
          thai: "ครอบครัวของคุณหลิวมีความสุขมากนะคะ",
          chinese: "你们家很幸福啊。"
        }
      ]
    }
  ],

  practice: [
    {
      id: "q1",
      type: "meaning_match",
      promptThai: "ครอบครัวของคุณหลิวมีใครบ้างคะ?",
      promptChinese: null,
      answer: "你家里有哪些人？",
      options: ["你家里有哪些人？", "你父母做什么工作？", "你是哪座城市的人？"],
      explanation: "ครอบครัว = 家庭，มีใครบ้าง = 有哪些人。"
    },
    {
      id: "q2",
      type: "reply_choice",
      promptThai: "ครอบครัวของคุณหลิวมีใครบ้างคะ?",
      promptChinese: "你家里有哪些人？",
      answer: "มีทั้งหมด ๔ คนครับ มีคุณพ่อ คุณแม่ พี่สาวและผม",
      options: [
        "มีทั้งหมด ๔ คนครับ มีคุณพ่อ คุณแม่ พี่สาวและผม",
        "ผมเป็นคนกวางโจวครับ",
        "คุณพ่อเป็นหมอ"
      ],
      explanation: "这是在问家庭成员有哪些，应该回答家里有哪些人。"
    },
    {
      id: "q3",
      type: "meaning_match",
      promptThai: "คุณพ่อคุณแม่ของคุณหลิวทำงานอะไรคะ?",
      promptChinese: null,
      answer: "你父母做什么工作？",
      options: ["你父母做什么工作？", "你家一共几口人？", "你在哪里学习？"],
      explanation: "ทำงานอะไร = 做什么工作。"
    },
    {
      id: "q4",
      type: "reply_choice",
      promptThai: "คุณพ่อคุณแม่ของคุณหลิวทำงานอะไรคะ?",
      promptChinese: "你父母做什么工作？",
      answer: "คุณพ่อเป็นหมอ คุณแม่เป็นครู",
      options: ["คุณพ่อเป็นหมอ คุณแม่เป็นครู", "มีทั้งหมด ๔ คนครับ", "ผมเป็นคนกวางโจวครับ"],
      explanation: "这是在问父母职业，应该回答医生、老师等职业。"
    },
    {
      id: "q5",
      type: "pattern_fill",
      promptThai: "มีทั้งหมด ____ คนครับ",
      promptChinese: "一共____口人。",
      answer: "๔",
      options: ["๔", "๑๕", "๒"],
      explanation: "课文里刘家一共四口人。"
    },
    {
      id: "q6",
      type: "pattern_fill",
      promptThai: "คุณพ่อเป็น ____",
      promptChinese: "爸爸是____。",
      answer: "หมอ",
      options: ["หมอ", "ธนาคาร", "ครอบครัว"],
      explanation: "这里要填职业。"
    },
    {
      id: "q7",
      type: "reply_choice",
      promptThai: "มีพี่น้องกี่คนครับ?",
      promptChinese: "有几个兄弟姐妹？",
      answer: "สามคนน่ะ",
      options: ["สามคนน่ะ", "ผมเป็นคนกวางโจวครับ", "มีความสุขมาก"],
      explanation: "กี่คน 是问数量，所以要用数字回答。"
    },
    {
      id: "q8",
      type: "meaning_match",
      promptThai: "กำลังเรียนชั้น ม.๕ อยู่ครับ",
      promptChinese: null,
      answer: "正在读高二。",
      options: ["正在读高二。", "已经结婚了。", "在银行工作。"],
      explanation: "กำลัง...อยู่ 表示‘正在……’。"
    }
  ],

  extraExercisesFromBook: [
    {
      type: "translation_cn_to_th",
      note: "根据教材练习与课文内容整理，可后续扩展为正式题目。",
      items: [
        "你家有几口人？",
        "你父母做什么工作？",
        "你有几个兄弟姐妹？",
        "我是最小的孩子。",
        "我姐姐已经结婚了。",
        "我弟弟十五岁。",
        "他在银行工作。",
        "她在一所中学教英语。"
      ]
    },
    {
      type: "translation_th_to_cn",
      note: "根据教材练习与课文内容整理，可后续扩展。",
      items: [
        "ผมเป็นคนกวางโจวครับ",
        "ครอบครัวของคุณหลิวมีใครบ้างคะ?",
        "มีทั้งหมด ๔ คนครับ",
        "คุณพ่อเป็นหมอ",
        "คุณแม่เป็นครู",
        "พี่สาวชื่อจันทร์",
        "พี่จันทร์แต่งงานแล้ว",
        "น้องชายมีอายุ ๑๕ ปี กำลังเรียนชั้น ม.๕ อยู่ครับ"
      ]
    },
    {
      type: "bookExercises",
      note: "教材里还有词语造句、汉译泰、泰译中等练习，可后续继续细化。",
      items: [
        "请用以下词语或词组造句：กำลัง...อยู่, กี่, ของ, ทั้งหมด, ที่, ส่วน ...",
        "根据课文内容编写对话，上台表演。",
        "请说出泰语名词的种类，并举例说明。"
      ]
    }
  ]
};

window.LESSON_2 = lesson2;