export type Blog = {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  content: string[];
};

export const blogs: Blog[] = [
  {
    slug: "how-to-learn-quran-with-tajweed",
    title: "How to Learn Quran with Tajweed?",
    category: "Quran Learning",
    date: "July 2026",
    description:
      "Learn the importance of Tajweed and how to improve your Quran recitation step by step.",
    content: [
      "Tajweed is the set of rules that govern how the Quran should be recited correctly. It ensures that each letter is pronounced from its correct point of articulation (makhraj) and given its proper characteristics (sifaat).",
      "Beginners should start by learning the Arabic alphabet and basic pronunciation rules before moving to longer verses. A qualified teacher can correct mistakes in real time, which is very hard to do through self-study alone.",
      "Practicing daily, even for 15-20 minutes, helps build muscle memory for correct pronunciation. Listening to expert reciters (Qaris) also trains the ear to recognize proper Tajweed.",
      "At Shoaib Quran Academy, our teachers guide students step by step, from basic Noorani Qaida to advanced Tajweed rules, ensuring every student recites the Quran beautifully and correctly.",
    ],
  },
  {
    slug: "benefits-of-learning-arabic-language",
    title: "Benefits of Learning Arabic Language",
    category: "Arabic Language",
    date: "July 2026",
    description:
      "Discover how learning Arabic helps you understand Quran and Islamic teachings better.",
    content: [
      "Arabic is the language of the Quran. Learning it allows Muslims to understand the Quran directly, without depending entirely on translations, which can sometimes lose nuance and meaning.",
      "Understanding Arabic grammar and vocabulary also helps in following Hadith, classical Islamic texts, and scholarly commentary (Tafseer) in their original form.",
      "Beyond religious benefits, Arabic is spoken by hundreds of millions of people worldwide, opening doors for communication, travel, and career opportunities in many countries.",
      "Our Arabic language course covers reading, writing, grammar, and conversation, designed for students of all ages and skill levels.",
    ],
  },
  {
    slug: "daily-masnoon-duas",
    title: "10 Daily Masnoon Duas Every Muslim Should Know",
    category: "Duas",
    date: "July 2026",
    description:
      "A collection of important daily duas with Arabic text and meanings.",
    content: [
      "Masnoon duas are supplications taught by Prophet Muhammad (peace be upon him) for various daily situations, from waking up to sleeping, eating, traveling, and more.",
      "Reciting these duas connects our daily actions with remembrance of Allah, turning ordinary moments into acts of worship.",
      "Some essential duas include those for entering and leaving the home, before and after meals, and before sleeping. Learning them with correct pronunciation and understanding their meaning increases their spiritual benefit.",
      "Join our Islamic Studies course to learn these duas properly, along with their context and virtues.",
    ],
  },
  {
    slug: "importance-of-salah-in-islam",
    title: "Importance of Salah in Islam",
    category: "Islamic Knowledge",
    date: "July 2026",
    description:
      "Understand the importance of Salah and its role in a Muslim's life.",
    content: [
      "Salah (prayer) is the second pillar of Islam and a direct connection between a Muslim and Allah, performed five times a day.",
      "It instills discipline, mindfulness, and regular remembrance of Allah throughout the day, helping believers stay grounded in their faith amid daily life.",
      "Salah also has physical and mental benefits, including structured movement and a sense of calm through consistent routine and reflection.",
      "Our Islamic Studies classes cover the proper method of performing Salah, its conditions, and its deeper spiritual significance.",
    ],
  },
  {
    slug: "seerah-of-prophet-muhammad",
    title: "Seerah of Prophet Muhammad ﷺ",
    category: "Seerah",
    date: "July 2026",
    description: "Learn beautiful lessons from the life of Prophet Muhammad ﷺ.",
    content: [
      "The Seerah is the biography of Prophet Muhammad (peace be upon him), covering his life, character, and teachings from birth to his passing.",
      "Studying the Seerah provides practical examples of honesty, patience, leadership, and compassion that Muslims can apply in daily life.",
      "It also gives context to many verses of the Quran, showing when and why they were revealed, deepening overall understanding of Islamic teachings.",
      "Our Islamic Studies course includes structured Seerah lessons suitable for both children and adults.",
    ],
  },
  {
    slug: "quran-reading-for-beginners",
    title: "Quran Reading for Beginners",
    category: "Beginner Course",
    date: "July 2026",
    description:
      "A complete guide for beginners who want to start learning Quran.",
    content: [
      "Starting Quran reading as a complete beginner can feel overwhelming, but with the right structured approach, anyone can learn at their own pace.",
      "The journey typically begins with learning the Arabic alphabet (Noorani Qaida), followed by basic word formation, then progressing to reading full verses with proper Tajweed.",
      "Consistency matters more than speed — even short daily sessions lead to steady improvement over weeks and months.",
      "Our beginner-friendly Quran reading course is designed for students of all ages, with patient, experienced teachers guiding every step.",
    ],
  },
];