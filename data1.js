const lessons = [
  {
    id: 1,
    titleCn: "打招呼",
    titleEn: "Greeting",
    topic: "first meeting",

    words: [
      {
        id: "l1w1",
        thai: "สวัสดี",
        english: "hello",
        chinese: "你好",
        type: "expression",
        exampleThai: "สวัสดีครับ",
        exampleChinese: "你好。（男说）",
        note: "A common greeting. Often used with polite particles such as ครับ / ค่ะ."
      },
      {
        id: "l1w2",
        thai: "ครับ",
        english: "polite particle (male)",
        chinese: "礼貌词（男）",
        type: "particle",
        exampleThai: "สวัสดีครับ",
        exampleChinese: "你好。（男说）",
        note: "Used by male speakers to make the sentence polite."
      },
      {
        id: "l1w3",
        thai: "ค่ะ",
        english: "polite particle (female)",
        chinese: "礼貌词（女）",
        type: "particle",
        exampleThai: "สวัสดีค่ะ",
        exampleChinese: "你好。（女说）",
        note: "Used by female speakers to make the sentence polite."
      },
      {
        id: "l1w4",
        thai: "คุณ",
        english: "you",
        chinese: "你",
        type: "pronoun",
        exampleThai: "คุณชื่ออะไรคะ",
        exampleChinese: "你叫什么名字？",
        note: "A polite second-person pronoun. Also used before names or titles."
      },
      {
        id: "l1w5",
        thai: "ชื่อ",
        english: "name",
        chinese: "名字",
        type: "noun",
        exampleThai: "คุณชื่ออะไรคะ",
        exampleChinese: "你叫什么名字？",
        note: "Used when asking or telling someone's name."
      },
      {
        id: "l1w6",
        thai: "อะไร",
        english: "what",
        chinese: "什么",
        type: "question word",
        exampleThai: "คุณชื่ออะไรคะ",
        exampleChinese: "你叫什么名字？",
        note: "A question word meaning 'what'."
      },
      {
        id: "l1w7",
        thai: "ฉัน",
        english: "I",
        chinese: "我",
        type: "pronoun",
        exampleThai: "ฉันชื่อหลิน",
        exampleChinese: "我叫 Lin。",
        note: "Common first-person pronoun, often used by female speakers in textbook-style Thai."
      },
      {
        id: "l1w8",
        thai: "ผม",
        english: "I",
        chinese: "我",
        type: "pronoun",
        exampleThai: "ผมชื่อสมชาย",
        exampleChinese: "我叫 Somchai。",
        note: "Common first-person pronoun, often used by male speakers."
      },
      {
        id: "l1w9",
        thai: "จาก",
        english: "from",
        chinese: "来自，从",
        type: "preposition",
        exampleThai: "คุณมาจากไหนครับ",
        exampleChinese: "你来自哪里？",
        note: "Used to show origin or starting point."
      },
      {
        id: "l1w10",
        thai: "ไหน",
        english: "where",
        chinese: "哪里",
        type: "question word",
        exampleThai: "คุณมาจากไหนครับ",
        exampleChinese: "你来自哪里？",
        note: "Often appears in questions asking about place."
      },
      {
        id: "l1w11",
        thai: "มา",
        english: "come",
        chinese: "来",
        type: "verb",
        exampleThai: "คุณมาจากไหนครับ",
        exampleChinese: "你来自哪里？",
        note: "In มาจาก..., it means 'come from'."
      },
      {
        id: "l1w12",
        thai: "เรียน",
        english: "study",
        chinese: "学习",
        type: "verb",
        exampleThai: "คุณเรียนภาษาไทยไหมคะ",
        exampleChinese: "你学泰语吗？",
        note: "Used for studying a subject."
      },
      {
        id: "l1w13",
        thai: "ภาษาไทย",
        english: "Thai language",
        chinese: "泰语",
        type: "noun",
        exampleThai: "ฉันเรียนภาษาไทย",
        exampleChinese: "我学泰语。",
        note: "ภาษา means language; ภาษาไทย means Thai language."
      },
      {
        id: "l1w14",
        thai: "นักศึกษา",
        english: "student",
        chinese: "学生",
        type: "noun",
        exampleThai: "ฉันเป็นนักศึกษา",
        exampleChinese: "我是学生。",
        note: "A noun meaning student."
      },
      {
        id: "l1w15",
        thai: "เป็น",
        english: "to be",
        chinese: "是",
        type: "verb",
        exampleThai: "ฉันเป็นนักศึกษา",
        exampleChinese: "我是学生。",
        note: "Used to describe identity, role, or status."
      },
      {
        id: "l1w16",
        thai: "ยินดีที่ได้รู้จัก",
        english: "nice to meet you",
        chinese: "很高兴认识你",
        type: "expression",
        exampleThai: "ยินดีที่ได้รู้จักค่ะ",
        exampleChinese: "很高兴认识你。（女说）",
        note: "A common expression used when meeting someone for the first time."
      },
      {
        id: "l1w17",
        thai: "แล้วพบกันใหม่",
        english: "see you again",
        chinese: "再见，下次见",
        type: "expression",
        exampleThai: "แล้วพบกันใหม่นะครับ",
        exampleChinese: "那下次再见。（男说）",
        note: "A common leave-taking expression."
      },
      {
        id: "l1w18",
        thai: "ไหม",
        english: "question particle",
        chinese: "吗（疑问词）",
        type: "particle",
        exampleThai: "คุณเรียนภาษาไทยไหมคะ",
        exampleChinese: "你学泰语吗？",
        note: "Placed at the end of a sentence to form a yes/no question."
      }
    ],

    dialogues: [
      {
        id: "l1d1",
        scene: "first greeting",
        promptThai: "สวัสดีครับ",
        promptChinese: "你好。（男说）",
        options: [
          "สวัสดีค่ะ",
          "คุณชื่ออะไรคะ",
          "ฉันเป็นนักศึกษา",
          "แล้วพบกันใหม่"
        ],
        answer: "สวัสดีค่ะ",
        explanation: "The most natural response to a greeting is another greeting."
      },
      {
        id: "l1d2",
        scene: "asking name",
        promptThai: "คุณชื่ออะไรคะ",
        promptChinese: "你叫什么名字？",
        options: [
          "ฉันชื่อหลิน",
          "ฉันมาจากจีน",
          "ฉันเรียนภาษาไทย",
          "สวัสดีค่ะ"
        ],
        answer: "ฉันชื่อหลิน",
        explanation: "This question asks for a name, so the response should be 'My name is...'"
      },
      {
        id: "l1d3",
        scene: "asking hometown",
        promptThai: "คุณมาจากไหนครับ",
        promptChinese: "你来自哪里？",
        options: [
          "ฉันมาจากจีน",
          "ฉันชื่อหลิน",
          "ฉันเป็นนักศึกษา",
          "ยินดีที่ได้รู้จักค่ะ"
        ],
        answer: "ฉันมาจากจีน",
        explanation: "The question asks where someone comes from, so the answer should give a place of origin."
      },
      {
        id: "l1d4",
        scene: "asking study subject",
        promptThai: "คุณเรียนภาษาไทยไหมคะ",
        promptChinese: "你学泰语吗？",
        options: [
          "เรียนค่ะ",
          "ฉันชื่อหลิน",
          "มาจากจีนค่ะ",
          "แล้วพบกันใหม่"
        ],
        answer: "เรียนค่ะ",
        explanation: "ไหม makes this a yes/no question, so a short confirmation is a natural answer."
      },
      {
        id: "l1d5",
        scene: "first meeting closing",
        promptThai: "ยินดีที่ได้รู้จักค่ะ",
        promptChinese: "很高兴认识你。（女说）",
        options: [
          "ยินดีที่ได้รู้จักครับ",
          "คุณชื่ออะไรคะ",
          "ฉันเป็นนักศึกษา",
          "คุณมาจากไหนครับ"
        ],
        answer: "ยินดีที่ได้รู้จักครับ",
        explanation: "A natural response to 'Nice to meet you' is to repeat the same expression politely."
      },
      {
        id: "l1d6",
        scene: "goodbye",
        promptThai: "แล้วพบกันใหม่นะครับ",
        promptChinese: "那下次再见。（男说）",
        options: [
          "สวัสดีค่ะ",
          "แล้วพบกันใหม่ค่ะ",
          "ฉันชื่อหลิน",
          "คุณเรียนภาษาไทยไหมคะ"
        ],
        answer: "แล้วพบกันใหม่ค่ะ",
        explanation: "This is a leave-taking expression, so the matching response is another farewell."
      }
    ]
  }
];
window.lessons = lessons;