const pages = [
  "home",
  "fun",
  "buttonGame",
  "court",
  "wheel",
  "mystery",
  "quiz",
  "letter"
];

// Page change karna
function go(pageId) {
  pages.forEach(id => {
    document.getElementById(id).classList.toggle(
      "active",
      id === pageId
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Navigation buttons
document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    go(button.dataset.page);
  });
});

// Chhota confetti effect
function confetti() {
  const emojis = ["💗", "✨", "⭐", "💜", "🌸"];

  for (let i = 0; i < 14; i++) {
    const item = document.createElement("span");

    item.className = "confetti";
    item.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    item.style.left = Math.random() * 95 + "vw";
    item.style.top = 70 + Math.random() * 20 + "vh";

    document.body.appendChild(item);

    setTimeout(() => item.remove(), 1900);
  }
}

// Breaking News
document.getElementById("breakingBtn").addEventListener("click", () => {
  const result = document.getElementById("breakingResult");

  result.hidden = false;
  result.innerHTML =
    "<b>BREAKING NEWS 🚨</b><br>" +
    "Ek bewakoof insaan ko samajh aa gaya hai ki words hurt " +
    "kar sakte hain. Suspect ne excuses chhodkar apni galti " +
    "accept kar li hai aur better banne ki koshish kar raha hai. 😭💗";
});

// Random funny messages
document.getElementById("jokeBtn").addEventListener("click", () => {
  const jokes = [
    "jab aap entered the chat. Common sense left the building. 😂",
    "kya hua mja aa rha h na, free ki cheej h mja to aayega hi.. 😎",
    "Mushkurahat to aa rhi h aapke hotho pr hyeeee... 🤡",
    "Tumhara eye-roll space se detect ho gaya hai. 🛰️",
    "Ek virtual hug tumhari taraf aa raha hai. 🫂",
    "System error: Kalu Don ki cuteness process nahi ho rahi. 💗"
  ];

  const result = document.getElementById("jokeResult");

  result.hidden = false;
  result.textContent =
    jokes[Math.floor(Math.random() * jokes.length)];

  confetti();
});

// Don't click game
const buttonMessages = [
  ["🐸", "Frog says: interesting decision!"],
  ["🤡", "Achievement unlocked: Professional Button Clicker."],
  ["🚨", "Breaking news: tumne phir click kar diya!"],
  ["💗", "Kalu Don ke saamne button bhi fail hai."],
  ["👽", "Tumhara click Galactic Council ko bhej diya gaya."],
  ["🫡", "Curiosity: 100. Self-control: buffering."]
];

document.getElementById("suspiciousBtn").addEventListener("click", () => {
  const selected =
    buttonMessages[Math.floor(Math.random() * buttonMessages.length)];

  document.getElementById("buttonFace").textContent = selected[0];
  document.getElementById("buttonResult").textContent = selected[1];

  confetti();
});

// Sorry Court
document.querySelectorAll("[data-verdict]").forEach(button => {
  button.addEventListener("click", () => {
    const verdicts = {
      guilty:
        "Guilty! Mujhe apni galti accept karke tumhari baat " +
        "sunni chahiye aur apne actions se better banna chahiye. 🫡",

      snack:
        "Court awards Kalu Don imaginary cookies and snacks! 🍪 " +
        "Lekin sorry dil se hai, sirf snacks ke liye nahi.",

      lecture:
        "Judge sahiba ko naraz hone ka haq hai. Main bina " +
        "excuses banaye tumhari baat sunne ki koshish karunga. 💜"
    };

    const result = document.getElementById("verdictResult");

    result.hidden = false;
    result.textContent = verdicts[button.dataset.verdict];
  });
});

// Chaos Wheel
document.getElementById("spinBtn").addEventListener("click", () => {
  const missions = [
    "Virtual high-five! ✋",
    "Three-second silly dance mission! 💃",
    "Reminder: tumhari feelings matter karti hain. 💗",
    "Apna favourite song play karo. 🎶",
    "Aaj khud ke saath bhi kindness rakho. 🌷",
    "Why was the computer cold? It left its Windows open! 😂",
    "Your title: CEO of Kalu Don Enterprises. 😎"
  ];

  document.getElementById("wheelResult").hidden = false;
  document.getElementById("wheelResult").textContent =
    missions[Math.floor(Math.random() * missions.length)];

  const icons = ["🎡", "✨", "💗", "🪐"];

  document.getElementById("wheelIcon").textContent =
    icons[Math.floor(Math.random() * icons.length)];

  confetti();
});

// Mystery Room
document.getElementById("unlockBtn").addEventListener("click", () => {
  const code = document.getElementById("secretCode").value.trim();
  const result = document.getElementById("mysteryResult");

  result.hidden = false;

  if (code === "5") {
    result.innerHTML =
      "<b>Unlocked, Detective Don! 🎉</b><br>" +
      "Your reward: stars, a virtual hug and a sincere apology. " +
      "Maaf karne ki koi jaldi nahi. 💜";

    confetti();
  } else {
    result.textContent =
      "Not quite, Detective! 😭 Hint: 2 + 3. Try again.";
  }
});

// Personality Quiz
const questions = [
  {
    question: "Tumko khud me sabse jyada kya pasnd h?",
    answers: [
      ["body", "self obsessed"],
      ["eye", "aankh k kaarnaame"],
      ["behaviour", "pure h bhai ekdum"],
      ["smilee", "Ayeeee Hyeeee"]
    ]
  },
  {
    question: "jidngi me glti to ho hi jati h",
    answers: [
      ["nhi ho skti", "never"],
      ["kabhi kabhi ho skti h", "only few times"],
      ["Sirf me kr skti hu 😭", "self lover"],
      ["krke dikhaaa", "saaf dhamki.."]
    ]
  },
  {
    question: "Ek superpower choose karo:",
    answers: [
      ["Nokri mil jaye", "jindgi safal ho jayegi"],
      ["acha nokri vala partner", "jo jidngi safal bna de"],
      ["nokri + vo", "kya hi bole fir to"],
      ["Hmesha khush rehna", "vo mil gya to jindgi safal ho hi jayegi"]
    ]
  }
];

let questionIndex = 0;
let scores = {};

document.getElementById("startQuizBtn").addEventListener("click", startQuiz);

function startQuiz() {
  questionIndex = 0;

  scores = {
    nap: 0,
    wild: 0,
    cozy: 0,
    chaos: 0
  };

  document.getElementById("quizResult").hidden = true;

  go("quiz");
  showQuestion();
}

function showQuestion() {
  if (questionIndex >= questions.length) {
    finishQuiz();
    return;
  }

  const question = questions[questionIndex];

  document.getElementById("quizQuestion").textContent = `
    ${questionIndex + 1} / ${questions.length} — ${question.question}`;

  document.getElementById("quizProgress").style.width =`
    ${questionIndex / questions.length * 100}%`;

  const answers = document.getElementById("quizAnswers");
  answers.innerHTML = "";

  question.answers.forEach(([label, type]) => {
    const button = document.createElement("button");

    button.textContent = label;

    button.addEventListener("click", () => {
      scores[type]++;
      questionIndex++;
      showQuestion();
    });

    answers.appendChild(button);
  });
}

function finishQuiz() {
  document.getElementById("quizProgress").style.width = "100%";

  document.getElementById("quizQuestion").textContent =
    "Your highly scientific result is...";

  document.getElementById("quizAnswers").innerHTML = "";

  const type = Object.keys(scores).sort(
    (a, b) => scores[b] - scores[a]
  )[0];

  const results = {
    nap: [
      "yehhhheeeeeeeeee",
      "answer dene k baad itna khush kon hota h. Sab milega mere bache bas aap man lgake mehnat kro or hmesha khush raho.."
    ],

    wild: [
      "Main Character jaag rha hai",
      "."
    ],

    cozy: [
      "Cozy Potato 🥔",
      "Blankets, comfort and snacks. Elite taste."
    ],

    chaos: [
      "Certified Chaos Don 🤡",
      "10% plan, 90% plot twist. Iconic behaviour."
    ]
  };

  const result = results[type];
  const box = document.getElementById("quizResult");

  box.hidden = false;

  box.innerHTML = ` 
  <h3>${result[0]}</h3>
  <p>${result[1]}</p>
  <button id="againBtn">Play Again ↻</button>
`;

  document.getElementById("againBtn").addEventListener("click", startQuiz);

  confetti();
}

// Virtual hug button
document.getElementById("hugBtn").addEventListener("click", () => {
  const result = document.getElementById("hugResult");

  result.hidden = false;
  result.textContent =
    "Ek warm virtual hug tumhare liye. 🫂💗 " +
    "Hum dono ko kisi ki najar na lage..";

  confetti();
});
