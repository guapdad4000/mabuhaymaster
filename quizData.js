const levels = {
  1: {
    name: "Lechon Roast",
    trainer: "Tito Juan",
    background: "https://i.imgur.com/bHy5EFE.gif",
    quizVersions: [
      [
        // Version 1 (Original)
        {
          text: "How do you say 'hello' in Tagalog?",
          options: ["A) Salamat", "B) Kamusta", "C) Matulog", "D) Kain"],
          answer: "B",
          hint: "Gamitin mo ito para batiin ang mga bisita.",
        },
        {
          text: "What’s 'food' in Tagalog?",
          options: ["A) Tubig", "B) Pagkain", "C) Bahay", "D) Damit"],
          answer: "B",
          hint: "Masarap ang pagkain sa pista.",
        },
        {
          text: "'Mabuhay' means 'goodbye'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Mabuhay means 'long live' or 'welcome'.",
        },
        {
          text: "What’s 'pig' in Tagalog?",
          options: ["A) Baboy", "B) Manok", "C) Baka", "D) Isda"],
          answer: "A",
          hint: "Iniihaw natin ang baboy para sa lechon.",
        },
        {
          text: "Say 'Thank you' in Tagalog:",
          options: [
            "A) Salamat",
            "B) Matulog ka",
            "C) Kumusta ka",
            "D) Kain tayo",
          ],
          answer: "A",
          hint: "Pasalamatan mo si Tito Juan.",
        },
      ],
      [
        // Version 2 (Original)
        {
          text: "What’s 'good morning' in Tagalog?",
          options: [
            "A) Magandang umaga",
            "B) Magandang gabi",
            "C) Matulog ka",
            "D) Paalam",
          ],
          answer: "A",
          hint: "Sabihin mo ito kapag umaga.",
        },
        {
          text: "What’s 'water' in Tagalog?",
          options: ["A) Gatas", "B) Tubig", "C) Kanin", "D) Tinapay"],
          answer: "B",
          hint: "Inumin mo ang tubig pagkatapos kumain.",
        },
        {
          text: "'Lechon' is roasted chicken. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Lechon ay baboy, hindi manok.",
        },
        {
          text: "What’s 'eat' in Tagalog?",
          options: ["A) Kain", "B) Tulog", "C) Takbo", "D) Laro"],
          answer: "A",
          hint: "Kain na tayo ng lechon!",
        },
        {
          text: "Say 'Let’s eat' in Tagalog:",
          options: [
            "A) Kain tayo",
            "B) Matulog tayo",
            "C) Laro tayo",
            "D) Takbo tayo",
          ],
          answer: "A",
          hint: "Sabihin mo ito sa mga bisita.",
        },
      ],
      [
        // Version 3 (Original)
        {
          text: "What’s 'goodbye' in Tagalog?",
          options: ["A) Paalam", "B) Salamat", "C) Kamusta", "D) Mabuhay"],
          answer: "A",
          hint: "Sabihin mo ito kapag aalis ka.",
        },
        {
          text: "What’s 'rice' in Tagalog?",
          options: ["A) Kanin", "B) Tubig", "C) Gatas", "D) Prutas"],
          answer: "A",
          hint: "Kumain ka ng kanin kasama ang lechon.",
        },
        {
          text: "'Salamat' means 'please'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Salamat ay 'thank you'.",
        },
        {
          text: "What’s 'chicken' in Tagalog?",
          options: ["A) Baka", "B) Manok", "C) Baboy", "D) Kambing"],
          answer: "B",
          hint: "Minsan iniihaw din ang manok.",
        },
        {
          text: "Say 'See you later' in Tagalog:",
          options: [
            "A) Kita tayo mamaya",
            "B) Matulog ka na",
            "C) Kain na tayo",
            "D) Salamat po",
          ],
          answer: "A",
          hint: "Sabihin mo ito bago umalis.",
        },
      ],
      [
        // Version 4 (New)
        {
          text: "What’s 'delicious' in Tagalog?",
          options: ["A) Masarap", "B) Matamis", "C) Maalat", "D) Mapait"],
          answer: "A",
          hint: "Masarap ang lechon ni Tito Juan.",
        },
        {
          text: "How do you say 'please' in Tagalog?",
          options: ["A) Pakikalmahan", "B) Paki", "C) Salamat", "D) Sige"],
          answer: "B",
          hint: "Paki bigyan mo ako ng pagkain.",
        },
        {
          text: "'Adobo' is a Filipino roasted dish. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Adobo ay nilaga, hindi inihaw.",
        },
        {
          text: "What’s 'fish' in Tagalog?",
          options: ["A) Isda", "B) Karne", "C) Gulay", "D) Prutas"],
          answer: "A",
          hint: "Minsan may inihaw na isda sa pista.",
        },
        {
          text: "Say 'The food is good' in Tagalog:",
          options: [
            "A) Masarap ang pagkain",
            "B) Matulog ang bisita",
            "C) Malaki ang mesa",
            "D) Mainit ang tubig",
          ],
          answer: "A",
          hint: "Purihin mo ang pagkain ni Tito.",
        },
      ],
      [
        // Version 5 (New)
        {
          text: "What’s 'bread' in Tagalog?",
          options: ["A) Tinapay", "B) Kanin", "C) Keso", "D) Mantikilya"],
          answer: "A",
          hint: "Kumain ka ng tinapay kasama ang kape.",
        },
        {
          text: "How do you say 'drink' in Tagalog?",
          options: ["A) Inom", "B) Kain", "C) Luto", "D) Tulog"],
          answer: "A",
          hint: "Inom ka ng tubig pagkatapos kumain.",
        },
        {
          text: "'Pista' means 'fiesta'. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Ang pista ay masaya.",
        },
        {
          text: "What’s 'sweet' in Tagalog?",
          options: ["A) Maalat", "B) Matamis", "C) Malamig", "D) Mainit"],
          answer: "B",
          hint: "Matamis ang mga panghimagas.",
        },
        {
          text: "Say 'I’m hungry' in Tagalog:",
          options: [
            "A) Gutom ako",
            "B) Busog ako",
            "C) Matulog ako",
            "D) Malakas ako",
          ],
          answer: "A",
          hint: "Sabihin mo ito bago kumain.",
        },
      ],
      [
        // Version 6 (New)
        {
          text: "What’s 'cook' in Tagalog?",
          options: ["A) Luto", "B) Kain", "C) Inom", "D) Hawak"],
          answer: "A",
          hint: "Luto ni Tito ang lechon.",
        },
        {
          text: "How do you say 'hot' in Tagalog?",
          options: ["A) Malamig", "B) Mainit", "C) Matamis", "D) Maalat"],
          answer: "B",
          hint: "Mainit ang bagong luto na lechon.",
        },
        {
          text: "'Kain na' means 'Let’s sleep'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Kain na ay 'Let’s eat'.",
        },
        {
          text: "What’s 'fruit' in Tagalog?",
          options: ["A) Gulay", "B) Prutas", "C) Karne", "D) Isda"],
          answer: "B",
          hint: "May prutas pagkatapos ng lechon.",
        },
        {
          text: "Say 'Enjoy your meal' in Tagalog:",
          options: [
            "A) Matamis ang pagkain",
            "B) Matulog ka na",
            "C) Kain ka nang mahimbing",
            "D) Matakaw ka",
          ],
          answer: "C",
          hint: "Sabihin mo ito sa mga bisita.",
        },
      ],
    ],
  },
  2: {
    name: "Boxing Academy",
    trainer: "Coach Manny",
    background: "https://i.imgur.com/ET2rlOd.gif",
    quizVersions: [
      [
        // Version 1 (Original)
        {
          text: "What’s 'punch' in Tagalog?",
          options: ["A) Suntok", "B) Sipain", "C) Takbo", "D) Laro"],
          answer: "A",
          hint: "Ginagamit mo ito sa boxing.",
        },
        {
          text: "How do you say 'run' in Tagalog?",
          options: ["A) Tumalon", "B) Takbo", "C) Matulog", "D) Umupo"],
          answer: "B",
          hint: "Takbo para maging malakas.",
        },
        {
          text: "'Laban' means 'fight'. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Laban tayo sa ring!",
        },
        {
          text: "What’s 'strong' in Tagalog?",
          options: ["A) Mahina", "B) Malakas", "C) Matulog", "D) Maliit"],
          answer: "B",
          hint: "Malakas ang suntok ni Coach Manny.",
        },
        {
          text: "Say 'I will win' in Tagalog:",
          options: [
            "A) Mananalo ako",
            "B) Matatalo ako",
            "C) Matutulog ako",
            "D) Kakain ako",
          ],
          answer: "A",
          hint: "Sabihin mo ito bago ang laban.",
        },
      ],
      [
        // Version 2 (Original)
        {
          text: "What’s 'kick' in Tagalog?",
          options: ["A) Suntok", "B) Sipain", "C) Hawak", "D) Tapon"],
          answer: "B",
          hint: "Sipain mo ang bag sa training.",
        },
        {
          text: "How do you say 'jump' in Tagalog?",
          options: ["A) Tumalon", "B) Tumakbo", "C) Umupo", "D) Matulog"],
          answer: "A",
          hint: "Tumalon ka para mag-warm-up.",
        },
        {
          text: "'Malakas' means 'weak'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Malakas ay 'strong'.",
        },
        {
          text: "What’s 'win' in Tagalog?",
          options: ["A) Panalo", "B) Talo", "C) Laro", "D) Tulog"],
          answer: "A",
          hint: "Layunin natin ang panalo.",
        },
        {
          text: "Say 'Let’s fight' in Tagalog:",
          options: [
            "A) Laban tayo",
            "B) Matulog tayo",
            "C) Kain tayo",
            "D) Takbo tayo",
          ],
          answer: "A",
          hint: "Sabihin mo ito sa kalaban.",
        },
      ],
      [
        // Version 3 (Original with Correction)
        {
          text: "What’s 'rest' in Tagalog?",
          options: ["A) Matulog", "B) Laban", "C) Takbo", "D) Suntok"],
          answer: "A",
          hint: "Matulog ka pagkatapos ng laban.",
        },
        {
          text: "Translate 'speed' in Tagalog:",
          options: ["A) Bilis", "B) Bagal", "C) Lakas", "D) Hina"],
          answer: "A",
          hint: "Mahalaga ang bilis sa boxing.",
        },
        {
          text: "What’s 'gloves' in Tagalog?",
          options: ["A) Sapatos", "B) Guwantes", "C) Sumbrero", "D) Baril"],
          answer: "B",
          hint: "Suot mo ito sa kamay.",
        },
        {
          text: "'Talo' means 'lose'. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Ayaw natin ng talo.",
        },
        {
          text: "Say 'Good luck' in Tagalog:",
          options: [
            "A) Matagumpay ka",
            "B) Matulog ka",
            "C) Suwerte sa’yo",
            "D) Kain muna",
          ],
          answer: "C",
          hint: "Sabihin mo ito bago ang laban.",
        },
      ],
      [
        // Version 4 (New)
        {
          text: "What’s 'block' in Tagalog?",
          options: ["A) Harang", "B) Sipain", "C) Suntok", "D) Laro"],
          answer: "A",
          hint: "Harang mo ang suntok ng kalaban.",
        },
        {
          text: "How do you say 'train' in Tagalog?",
          options: ["A) Sanay", "B) Laban", "C) Takbo", "D) Tulog"],
          answer: "A",
          hint: "Sanay ka para maging malakas.",
        },
        {
          text: "'Suntok' means 'kick'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Suntok ay 'punch'.",
        },
        {
          text: "What’s 'weak' in Tagalog?",
          options: ["A) Malakas", "B) Mahina", "C) Matulin", "D) Mabagal"],
          answer: "B",
          hint: "Huwag kang mahina sa laban.",
        },
        {
          text: "Say 'Keep going' in Tagalog:",
          options: [
            "A) Tuloy lang",
            "B) Matulog ka",
            "C) Kain muna",
            "D) Tapos na",
          ],
          answer: "A",
          hint: "Sabihin mo ito sa training.",
        },
      ],
      [
        // Version 5 (New)
        {
          text: "What’s 'ring' in Tagalog?",
          options: ["A) Singsing", "B) Ring", "C) Labanan", "D) Entablado"],
          answer: "B",
          hint: "Laban tayo sa ring.",
        },
        {
          text: "How do you say 'hit' in Tagalog?",
          options: ["A) Pukpok", "B) Hawak", "C) Tapon", "D) Tulog"],
          answer: "A",
          hint: "Pukpok mo ang kalaban.",
        },
        {
          text: "'Panalo' means 'victory'. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Panalo ang layunin natin.",
        },
        {
          text: "What’s 'fast' in Tagalog?",
          options: ["A) Mabagal", "B) Matulin", "C) Mahina", "D) Malakas"],
          answer: "B",
          hint: "Matulin ang suntok ni Coach.",
        },
        {
          text: "Say 'Don’t give up' in Tagalog:",
          options: [
            "A) Huwag sumuko",
            "B) Matulog ka na",
            "C) Kain tayo",
            "D) Takbo ka",
          ],
          answer: "A",
          hint: "Sabihin mo ito sa teammate.",
        },
      ],
      [
        // Version 6 (New)
        {
          text: "What’s 'sweat' in Tagalog?",
          options: ["A) Pawis", "B) Tubig", "C) Dugo", "D) Lupa"],
          answer: "A",
          hint: "Pawis ka pagkatapos magsanay.",
        },
        {
          text: "How do you say 'practice' in Tagalog?",
          options: ["A) Laro", "B) Ensayo", "C) Tulog", "D) Takbo"],
          answer: "B",
          hint: "Ensayo araw-araw para manalo.",
        },
        {
          text: "'Takbo' means 'jump'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Takbo ay 'run'.",
        },
        {
          text: "What’s 'champion' in Tagalog?",
          options: ["A) Kampeon", "B) Talo", "C) Kaibigan", "D) Kalaban"],
          answer: "A",
          hint: "Si Coach Manny ay kampeon.",
        },
        {
          text: "Say 'You’re the best' in Tagalog:",
          options: [
            "A) Pinakamahusay ka",
            "B) Matulog ka na",
            "C) Kain ka muna",
            "D) Mahina ka",
          ],
          answer: "A",
          hint: "Purihin mo ang nanalo.",
        },
      ],
    ],
  },
  3: {
    name: "NayNay's Home",
    trainer: "Lola Sita",
    background: "https://i.imgur.com/hMwzotY.gif",
    quizVersions: [
      [
        // Version 1 (Original)
        {
          text: "What’s 'father' in Tagalog?",
          options: ["A) Nanay", "B) Tatay", "C) Kuya", "D) Ate"],
          answer: "B",
          hint: "Si tatay ang nagtatrabaho araw-araw.",
        },
        {
          text: "How do you say 'house' in Tagalog?",
          options: ["A) Bahay", "B) Kwarto", "C) Mesa", "D) Bintana"],
          answer: "A",
          hint: "Malaki ang bahay ni lola.",
        },
        {
          text: "'Tito' means 'uncle'. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Si tito ay kapatid ni tatay.",
        },
        {
          text: "What’s 'window' in Tagalog?",
          options: ["A) Pintuan", "B) Bintana", "C) Bubong", "D) Dingding"],
          answer: "B",
          hint: "Buksan mo ang bintana para pumasok ang hangin.",
        },
        {
          text: "Say 'I love my family' in Tagalog:",
          options: [
            "A) Mahal ko ang pamilya ko",
            "B) Gutom ang pamilya ko",
            "C) Malaki ang bahay ko",
            "D) Matulog ang nanay ko",
          ],
          answer: "A",
          hint: "Mahal ko sila nang buong puso.",
        },
      ],
      [
        // Version 2 (Original)
        {
          text: "What’s 'sister' in Tagalog?",
          options: ["A) Bunso", "B) Ate", "C) Tito", "D) Lolo"],
          answer: "B",
          hint: "Si Ate ay mas matanda sa akin.",
        },
        {
          text: "How do you say 'room' in Tagalog?",
          options: ["A) Kwarto", "B) Sala", "C) Kusina", "D) Labahan"],
          answer: "A",
          hint: "Malinis ang kwarto ko ngayon.",
        },
        {
          text: "'Lola' means 'aunt'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Lola means grandmother.",
        },
        {
          text: "What’s 'kitchen' in Tagalog?",
          options: ["A) Silid-tulugan", "B) Kusina", "C) Banyo", "D) Hardin"],
          answer: "B",
          hint: "Nasa kusina si nanay.",
        },
        {
          text: "Say 'Welcome home' in Tagalog:",
          options: [
            "A) Matulog ka",
            "B) Salamat po",
            "C) Maligayang pagdating sa bahay",
            "D) Kumain ka",
          ],
          answer: "C",
          hint: "Pagbati sa pag-uwi.",
        },
      ],
      [
        // Version 3 (Original)
        {
          text: "What’s 'mother' in Tagalog?",
          options: ["A) Nanay", "B) Tatay", "C) Ate", "D) Lolo"],
          answer: "A",
          hint: "Si nanay ang nag-aalaga sa atin.",
        },
        {
          text: "Translate 'my family' in Tagalog:",
          options: [
            "A) Aking pamilya",
            "B) Pamilya ko",
            "C) Pamilya namin",
            "D) Ating pamilya",
          ],
          answer: "B",
          hint: "Pamilya ko ay masaya.",
        },
        {
          text: "What is 'door' in Tagalog?",
          options: ["A) Bintana", "B) Hagdan", "C) Pintuan", "D) Bubong"],
          answer: "C",
          hint: "Isara mo ang pintuan.",
        },
        {
          text: "What’s 'bathroom' in Tagalog?",
          options: ["A) Banyo", "B) Sala", "C) Kwarto", "D) Hardin"],
          answer: "A",
          hint: "Malinis ang banyo.",
        },
        {
          text: "Say 'Good night' in Tagalog:",
          options: [
            "A) Magandang gabi",
            "B) Maligayang gabi",
            "C) Matulog ka na",
            "D) Paalam na",
          ],
          answer: "A",
          hint: "Batiin sila bago matulog.",
        },
      ],
      [
        // Version 4 (New)
        {
          text: "What’s 'brother' in Tagalog?",
          options: ["A) Kuya", "B) Ate", "C) Bunso", "D) Tita"],
          answer: "A",
          hint: "Si Kuya ay mas matanda sa akin.",
        },
        {
          text: "How do you say 'table' in Tagalog?",
          options: ["A) Mesa", "B) Silya", "C) Kwarto", "D) Pintuan"],
          answer: "A",
          hint: "Nasa mesa ang pagkain.",
        },
        {
          text: "'Tita' means 'grandmother'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Tita ay 'aunt'.",
        },
        {
          text: "What’s 'garden' in Tagalog?",
          options: ["A) Hardin", "B) Kusina", "C) Sala", "D) Banyo"],
          answer: "A",
          hint: "Maganda ang hardin ni Lola.",
        },
        {
          text: "Say 'Come inside' in Tagalog:",
          options: [
            "A) Pasok ka",
            "B) Matulog ka",
            "C) Kumain ka",
            "D) Lumabas ka",
          ],
          answer: "A",
          hint: "Sabihin mo ito sa bisita.",
        },
      ],
      [
        // Version 5 (New)
        {
          text: "What’s 'grandfather' in Tagalog?",
          options: ["A) Lolo", "B) Tito", "C) Kuya", "D) Nanay"],
          answer: "A",
          hint: "Si Lolo ay matanda na.",
        },
        {
          text: "How do you say 'chair' in Tagalog?",
          options: ["A) Silya", "B) Mesa", "C) Bintana", "D) Pintuan"],
          answer: "A",
          hint: "Umupo ka sa silya.",
        },
        {
          text: "'Bunso' means 'youngest'. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Si Bunso ang pinakabata.",
        },
        {
          text: "What’s 'living room' in Tagalog?",
          options: ["A) Sala", "B) Kwarto", "C) Kusina", "D) Hardin"],
          answer: "A",
          hint: "Magkita tayo sa sala.",
        },
        {
          text: "Say 'I’m home' in Tagalog:",
          options: [
            "A) Nandito na ako",
            "B) Matulog na ako",
            "C) Gutom na ako",
            "D) Lumabas ako",
          ],
          answer: "A",
          hint: "Sabihin mo ito pagdating mo.",
        },
      ],
      [
        // Version 6 (New)
        {
          text: "What’s 'cousin' in Tagalog?",
          options: ["A) Pinsan", "B) Ate", "C) Tito", "D) Lolo"],
          answer: "A",
          hint: "Si Pinsan ay anak ni Tito.",
        },
        {
          text: "How do you say 'roof' in Tagalog?",
          options: ["A) Bubong", "B) Dingding", "C) Bintana", "D) Pintuan"],
          answer: "A",
          hint: "Mataas ang bubong ng bahay.",
        },
        {
          text: "'Kwarto' means 'kitchen'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Kwarto ay 'room'.",
        },
        {
          text: "What’s 'stairs' in Tagalog?",
          options: ["A) Hagdan", "B) Mesa", "C) Silya", "D) Hardin"],
          answer: "A",
          hint: "Akyat ka sa hagdan.",
        },
        {
          text: "Say 'Sleep well' in Tagalog:",
          options: [
            "A) Matulog kang mahimbing",
            "B) Kumain kang mabuti",
            "C) Lumabas kang mabilis",
            "D) Salamat sa’yo",
          ],
          answer: "A",
          hint: "Sabihin mo ito kay Lola.",
        },
      ],
    ],
  },
  4: {
    name: "The Mactan Melee",
    trainer: "Elder Lapu",
    background: "https://i.imgur.com/Cr7Q6ep.gif",
    quizVersions: [
      [
        // Version 1 (Original)
        {
          text: "Who defeated Ferdinand Magellan?",
          options: [
            "A) Lapu-Lapu",
            "B) Rajah Humabon",
            "C) Jose Rizal",
            "D) Andres Bonifacio",
          ],
          answer: "A",
          hint: "Si Lapu-Lapu ay isang bayani.",
        },
        {
          text: "What’s 'war' in Tagalog?",
          options: ["A) Digmaan", "B) Kapayapaan", "C) Laro", "D) Pamilya"],
          answer: "A",
          hint: "Digmaan ay matindi.",
        },
        {
          text: "The Battle of Mactan was in 1521. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Ito ay nangyari noong 1521.",
        },
        {
          text: "What’s 'shield' in Tagalog?",
          options: ["A) Baril", "B) Kalasag", "C) Sibat", "D) Balisong"],
          answer: "B",
          hint: "Ginamit sa laban ang kalasag.",
        },
        {
          text: "Say 'We will fight' in Tagalog:",
          options: [
            "A) Lalaban kami",
            "B) Matutulog kami",
            "C) Kakain kami",
            "D) Tatakbo kami",
          ],
          answer: "A",
          hint: "Handa na kaming lumaban.",
        },
      ],
      [
        // Version 2 (Original)
        {
          text: "What was Lapu-Lapu’s title?",
          options: ["A) Datu", "B) Sultan", "C) Gobernador", "D) Kapitan"],
          answer: "A",
          hint: "Siya ang Datu ng Mactan.",
        },
        {
          text: "What’s 'boat' in Tagalog?",
          options: ["A) Bangka", "B) Kabayo", "C) Eroplano", "D) Kotse"],
          answer: "A",
          hint: "Gamit ang bangka sa paglalakbay.",
        },
        {
          text: "The Philippines was named after King Philip II. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Totoo yan.",
        },
        {
          text: "What’s 'freedom' in Tagalog?",
          options: [
            "A) Kalayaan",
            "B) Digmaan",
            "C) Paghihirap",
            "D) Pagsunod",
          ],
          answer: "A",
          hint: "Ipaglaban ang kalayaan.",
        },
        {
          text: "Say 'The enemy is coming' in Tagalog:",
          options: [
            "A) Darating ang kaaway",
            "B) Matutulog ang kaibigan",
            "C) Kakain ang pamilya",
            "D) Tatakbo ang bata",
          ],
          answer: "A",
          hint: "Maghanda na tayo.",
        },
      ],
      [
        // Version 3 (Original)
        {
          text: "What’s 'sword' in Tagalog?",
          options: ["A) Espada", "B) Kalasag", "C) Balisong", "D) Itak"],
          answer: "A",
          hint: "Ginamit sa digmaan.",
        },
        {
          text: "Translate 'hero' in Tagalog:",
          options: ["A) Bayani", "B) Kaaway", "C) Sundalo", "D) Kapitan"],
          answer: "A",
          hint: "Si Lapu-Lapu ay bayani.",
        },
        {
          text: "Say 'For the country' in Tagalog:",
          options: [
            "A) Para sa bayan",
            "B) Sa bundok tayo",
            "C) Laban ng pagkain",
            "D) Sa lupa lang",
          ],
          answer: "A",
          hint: "Laban para sa bayan.",
        },
        {
          text: "What’s 'soldier' in Tagalog?",
          options: ["A) Sundalo", "B) Datu", "C) Kaibigan", "D) Anak"],
          answer: "A",
          hint: "Ang sundalo ay mandirigma.",
        },
        {
          text: "Say 'Protect the land' in Tagalog:",
          options: [
            "A) Protektahan ang lupa",
            "B) Buksan ang pinto",
            "C) Kumain ng tinapay",
            "D) Uminom ng gatas",
          ],
          answer: "A",
          hint: "Iyan ang ating misyon.",
        },
      ],
      [
        // Version 4 (New)
        {
          text: "What’s 'spear' in Tagalog?",
          options: ["A) Sibat", "B) Baril", "C) Espada", "D) Pana"],
          answer: "A",
          hint: "Ginamit ni Lapu-Lapu ang sibat.",
        },
        {
          text: "How do you say 'enemy' in Tagalog?",
          options: ["A) Kaibigan", "B) Kaaway", "C) Bayani", "D) Kapitan"],
          answer: "B",
          hint: "Ang kaaway ay kalaban natin.",
        },
        {
          text: "Ferdinand Magellan was Spanish. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Siya ay galing sa Espanya.",
        },
        {
          text: "What’s 'battle' in Tagalog?",
          options: ["A) Labanan", "B) Kapayapaan", "C) Pamilya", "D) Laro"],
          answer: "A",
          hint: "Ang labanan ay matindi.",
        },
        {
          text: "Say 'We are brave' in Tagalog:",
          options: [
            "A) Matapang kami",
            "B) Matulog kami",
            "C) Mahina kami",
            "D) Gutom kami",
          ],
          answer: "A",
          hint: "Ipakita ang tapang natin.",
        },
      ],
      [
        // Version 5 (New)
        {
          text: "What’s 'arrow' in Tagalog?",
          options: ["A) Pana", "B) Sibat", "C) Espada", "D) Kalasag"],
          answer: "A",
          hint: "Ginamit din ang pana sa digmaan.",
        },
        {
          text: "How do you say 'brave' in Tagalog?",
          options: ["A) Matapang", "B) Mahina", "C) Matulog", "D) Mabagal"],
          answer: "A",
          hint: "Matapang si Lapu-Lapu.",
        },
        {
          text: "The Battle of Mactan was on Cebu. True or False?",
          options: ["A) True", "B) False"],
          answer: "A",
          hint: "Nangyari ito sa Mactan, Cebu.",
        },
        {
          text: "What’s 'peace' in Tagalog?",
          options: [
            "A) Digmaan",
            "B) Kapayapaan",
            "C) Labanan",
            "D) Paghihirap",
          ],
          answer: "B",
          hint: "Pagkatapos ng digmaan ay kapayapaan.",
        },
        {
          text: "Say 'Defend our home' in Tagalog:",
          options: [
            "A) Ipagtanggol ang bahay",
            "B) Matulog sa bahay",
            "C) Kumain sa labas",
            "D) Takbo sa bundok",
          ],
          answer: "A",
          hint: "Layunin natin ito sa laban.",
        },
      ],
      [
        // Version 6 (New)
        {
          text: "What’s 'armor' in Tagalog?",
          options: ["A) Baluti", "B) Damit", "C) Sapatos", "D) Baril"],
          answer: "A",
          hint: "Suot ito ng mga sundalo.",
        },
        {
          text: "How do you say 'victory' in Tagalog?",
          options: ["A) Panalo", "B) Talo", "C) Laro", "D) Tulog"],
          answer: "A",
          hint: "Panalo ang nakuha ni Lapu-Lapu.",
        },
        {
          text: "'Bayani' means 'villain'. True or False?",
          options: ["A) True", "B) False"],
          answer: "B",
          hint: "Bayani ay 'hero'.",
        },
        {
          text: "What’s 'island' in Tagalog?",
          options: ["A) Bundok", "B) Isla", "C) Ilog", "D) Dagat"],
          answer: "B",
          hint: "Ang Mactan ay isang isla.",
        },
        {
          text: "Say 'Stand strong' in Tagalog:",
          options: [
            "A) Tumayo nang matibay",
            "B) Matulog nang mahimbing",
            "C) Kumain nang marami",
            "D) Takbo nang mabilis",
          ],
          answer: "A",
          hint: "Sabihin mo ito sa mga kasama.",
        },
      ],
    ],
  },
};

export default levels;
