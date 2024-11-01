// シャッフル関数の定義
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// クイズデータ
const quizData = [
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  1  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>貧困<rt>ひんこん</rt></ruby>をなくそう",
      "<ruby>飢餓<rt>きが</rt></ruby>をゼロに",
      "すべての<ruby>人<rt>ひと</rt></ruby>に<ruby>健康<rt>けんこう</rt></ruby>と<ruby>福祉<rt>ふくし</rt></ruby>を",
      "<ruby>質<rt>しつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>教育<rt>きょういく</rt></ruby>をみんなに",
    ],
    answer: "<ruby>貧困<rt>ひんこん</rt></ruby>をなくそう",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  2  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "ジェンダー<ruby>平等<rt>びょうどう</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>しよう",
      "<ruby>飢餓<rt>きが</rt></ruby>をゼロに",
      "すべての<ruby>人<rt>ひと</rt></ruby>に<ruby>健康<rt>けんこう</rt></ruby>と<ruby>福祉<rt>ふくし</rt></ruby>を",
      "<ruby>質<rt>しつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>教育<rt>きょういく</rt></ruby>をみんなに",
    ],
    answer: "<ruby>飢餓<rt>きが</rt></ruby>をゼロに",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  3  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "すべての<ruby>人<rt>ひと</rt></ruby>に<ruby>健康<rt>けんこう</rt></ruby>と<ruby>福祉<rt>ふくし</rt></ruby>を",
      "<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>水<rt>みず</rt></ruby>とトイレを<ruby>世界中<rt>せかいじゅう</rt></ruby>に",
      "<ruby>気候変動<rt>きこうへんどう</rt></ruby>に<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>を",
      "<ruby>働<rt>はたら</rt></ruby>きがいも<ruby>経済成長<rt>けいざいせいちょう</rt></ruby>も",
    ],
    answer:
      "すべての<ruby>人<rt>ひと</rt></ruby>に<ruby>健康<rt>けんこう</rt></ruby>と<ruby>福祉<rt>ふくし</rt></ruby>を",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  4  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>質<rt>しつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>教育<rt>きょういく</rt></ruby>をみんなに",
      "エネルギーをみんなにそしてクリーンに",
      "<ruby>人<rt>ひと</rt></ruby>や<ruby>国<rt>くに</rt></ruby>の<ruby>不平等<rt>ふびょうどう</rt></ruby>をなくそう",
      "<ruby>住<rt>す</rt></ruby>み<ruby>続<rt>つづ</rt></ruby>けられるまちづくりを",
    ],
    answer:
      "<ruby>質<rt>しつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>教育<rt>きょういく</rt></ruby>をみんなに",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  5  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "ジェンダー<ruby>平等<rt>びょうどう</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>しよう",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
      "パートナーシップで<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>しよう",
    ],
    answer:
      "ジェンダー<ruby>平等<rt>びょうどう</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>しよう",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  6  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "つくる<ruby>責任<rt>せきにん</rt></ruby>つかう<ruby>責任<rt>せきにん</rt></ruby>",
      "<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>水<rt>みず</rt></ruby>とトイレを<ruby>世界中<rt>せかいじゅう</rt></ruby>に",
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>働<rt>はたら</rt></ruby>きがいも<ruby>経済成長<rt>けいざいせいちょう</rt></ruby>も",
    ],
    answer:
      "<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>水<rt>みず</rt></ruby>とトイレを<ruby>世界中<rt>せかいじゅう</rt></ruby>に",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  7  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>水<rt>みず</rt></ruby>とトイレを<ruby>世界中<rt>せかいじゅう</rt></ruby>に",
      "エネルギーをみんなにそしてクリーンに",
      "<ruby>働<rt>はたら</rt></ruby>きがいも<ruby>経済成長<rt>けいざいせいちょう</rt></ruby>も",
      "<ruby>気候変動<rt>きこうへんどう</rt></ruby>に<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>を",
    ],
    answer: "エネルギーをみんなにそしてクリーンに",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  8  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>働<rt>はたら</rt></ruby>きがいも<ruby>経済成長<rt>けいざいせいちょう</rt></ruby>も",
      "<ruby>産業<rt>さんぎょう</rt></ruby>と<ruby>技術革新<rt>ぎじゅつかくしん</rt></ruby>の<ruby>基盤<rt>きばん</rt></ruby>をつくろう",
      "<ruby>人<rt>ひと</rt></ruby>や<ruby>国<rt>くに</rt></ruby>の<ruby>不平等<rt>ふびょうどう</rt></ruby>をなくそう",
      "<ruby>住<rt>す</rt></ruby>み<ruby>続<rt>つづ</rt></ruby>けられるまちづくりを",
    ],
    answer:
      "<ruby>働<rt>はたら</rt></ruby>きがいも<ruby>経済成長<rt>けいざいせいちょう</rt></ruby>も",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  9  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>質<rt>しつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>教育<rt>きょういく</rt></ruby>をみんなに",
      "<ruby>産業<rt>さんぎょう</rt></ruby>と<ruby>技術革新<rt>ぎじゅつかくしん</rt></ruby>の<ruby>基盤<rt>きばん</rt></ruby>をつくろう",
      "<ruby>人<rt>ひと</rt></ruby>や<ruby>国<rt>くに</rt></ruby>の<ruby>不平等<rt>ふびょうどう</rt></ruby>をなくそう",
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
    ],
    answer:
      "<ruby>産業<rt>さんぎょう</rt></ruby>と<ruby>技術革新<rt>ぎじゅつかくしん</rt></ruby>の<ruby>基盤<rt>きばん</rt></ruby>をつくろう",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  10  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>人<rt>ひと</rt></ruby>や<ruby>国<rt>くに</rt></ruby>の<ruby>不平等<rt>ふびょうどう</rt></ruby>をなくそう",
      "つくる<ruby>責任<rt>せきにん</rt></ruby>つかう<ruby>責任<rt>せきにん</rt></ruby>",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
      "パートナーシップで<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>しよう",
    ],
    answer:
      "<ruby>人<rt>ひと</rt></ruby>や<ruby>国<rt>くに</rt></ruby>の<ruby>不平等<rt>ふびょうどう</rt></ruby>をなくそう",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  11  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>住<rt>す</rt></ruby>み<ruby>続<rt>つづ</rt></ruby>けられるまちづくりを",
      "つくる<ruby>責任<rt>せきにん</rt></ruby>つかう<ruby>責任<rt>せきにん</rt></ruby>",
      "<ruby>気候変動<rt>きこうへんどう</rt></ruby>に<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>を",
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
    ],
    answer:
      "<ruby>住<rt>す</rt></ruby>み<ruby>続<rt>つづ</rt></ruby>けられるまちづくりを",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  12  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "つくる<ruby>責任<rt>せきにん</rt></ruby>つかう<ruby>責任<rt>せきにん</rt></ruby>",
      "<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>水<rt>みず</rt></ruby>とトイレを<ruby>世界中<rt>せかいじゅう</rt></ruby>に",
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
    ],
    answer:
      "つくる<ruby>責任<rt>せきにん</rt></ruby>つかう<ruby>責任<rt>せきにん</rt></ruby>",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  13  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>気候変動<rt>きこうへんどう</rt></ruby>に<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>を",
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
    ],
    answer:
      "<ruby>気候変動<rt>きこうへんどう</rt></ruby>に<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>を",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  14  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
      "パートナーシップで<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>しよう",
    ],
    answer:
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  15  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
      "パートナーシップで<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>しよう",
    ],
    answer:
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  16  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
      "パートナーシップで<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>しよう",
    ],
    answer:
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
  },
  {
    question:
      "SDGsの<ruby>目標<rt>もくひょう</rt></ruby>  17  は<ruby>何<rt>なん</rt></ruby>でしょうか？",
    options: [
      "<ruby>海<rt>うみ</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさを<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>陸<rt>りく</rt></ruby>の<ruby>豊<rt>ゆた</rt></ruby>かさも<ruby>守<rt>まも</rt></ruby>ろう",
      "<ruby>平和<rt>へいわ</rt></ruby>と<ruby>公正<rt>こうせい</rt></ruby>をすべての<ruby>人<rt>ひと</rt></ruby>に",
      "パートナーシップで<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>しよう",
    ],
    answer:
      "パートナーシップで<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>しよう",
  },
];

// シャッフル前後のデバッグログ
console.log("Before shuffle:", JSON.stringify(quizData));
shuffleArray(quizData);
console.log("After shuffle:", JSON.stringify(quizData));

let currentQuestionIndex = 0;
let score = 0;
let startTime;
let totalAnswerTime = 0;

const playAgainButton = document.getElementById("play-again-btn");
const startQuizButton = document.getElementById("start-quiz");
const introductionDiv = document.querySelector(".introduction");
const quizDiv = document.getElementById("quiz");

startQuizButton.addEventListener("click", () => {
  introductionDiv.style.display = "none";
  quizDiv.style.display = "block";
  startQuiz();
});

function startQuiz() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");
  const currentQuestionElement = document.getElementById("current-question");
  const totalQuestionsElement = document.getElementById("total-questions");
  const correctAnswersElement = document.getElementById("correct-answers");

  document.getElementById("score").style.display = "block";

  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    // 選択肢をシャッフル
    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    optionsElement.innerHTML = "";

    shuffledOptions.forEach((option) => {
      const li = document.createElement("li");
      li.innerHTML = option; // innerHTMLを使用してルビタグを含むテキストを設定
      li.addEventListener("click", () => {
        optionsElement.querySelectorAll("li").forEach((item) => {
          item.classList.remove("selected");
        });
        li.classList.add("selected");
      });
      optionsElement.appendChild(li);
    });

    currentQuestionElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = quizData.length;
    correctAnswersElement.textContent = score;

    startTime = Date.now();
  }

  function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalAnswerTime = 0;
    playAgainButton.hidden = true;
    resultElement.textContent = "";
    document.body.classList.remove("correct", "incorrect");
    document.getElementById("answer-time").textContent = "";
    document.getElementById("score").style.display = "none";
    showQuestion();
  }

  playAgainButton.addEventListener("click", () => {
    quizDiv.style.display = "none";
    introductionDiv.style.display = "block";
    resetQuiz();
  });

  submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("#options li.selected");
    if (selectedOption) {
      const isCorrect = checkAnswer(
        selectedOption.innerHTML, // innerHTMLを使用してルビタグを含むテキストを取得
        quizData[currentQuestionIndex]
      );

      if (isCorrect) {
        score++;
        document.body.classList.add("correct");
      } else {
        document.body.classList.add("incorrect");
      }
      resultElement.innerHTML = isCorrect
        ? "正解です！"
        : `不正解です。正解は「${quizData[currentQuestionIndex].answer}」です。`;

      const endTime = Date.now();
      const answerTime = Math.floor((endTime - startTime) / 1000);
      totalAnswerTime += answerTime;
      document.getElementById("answer-time").textContent = answerTime;

      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        setTimeout(() => {
          document.body.classList.remove("correct", "incorrect");
          resultElement.textContent = "";
          showQuestion();
        }, 2000);
      } else {
        setTimeout(() => {
          document.body.classList.remove("correct", "incorrect");
          resultElement.innerHTML = `クイズ終了！ ${score} / ${quizData.length} 問正解でした。<br>合計回答時間: ${totalAnswerTime}秒`;
          document.getElementById(
            "score"
          ).textContent = `${currentQuestionIndex} / ${quizData.length} 問目 ${score} 問正解 回答時間: ${answerTime}秒`;
          playAgainButton.hidden = false;
        }, 2000);
      }
    } else {
      resultElement.textContent = "選択肢を選んでください。";
    }
  });

  function checkAnswer(selectedOption, currentQuestion) {
    const selectedText = selectedOption
      .replace(/<\/?ruby[^>]*>/g, "")
      .replace(/<\/?rt[^>]*>/g, "");
    const answerText = currentQuestion.answer
      .replace(/<\/?ruby[^>]*>/g, "")
      .replace(/<\/?rt[^>]*>/g, "");
    return selectedText === answerText;
  }

  showQuestion();
}
