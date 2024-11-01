<template>
  <div id="app">
    <HeaderComponent />
    <IntroductionComponent
      v-if="!showQuiz && !showResult"
      @start-quiz="startQuiz"
    />
    <QuizComponent
      v-if="showQuiz"
      :question="currentQuestion.question"
      :options="shuffledOptions"
      :correct-answer="currentQuestion.answer"
      :selected-answer="selectedAnswer"
      :is-correct="isCorrect"
      @submit-answer="submitAnswer"
    />
    <ResultComponent
      v-if="showResult"
      :score="score"
      :totalQuestions="quizData.length"
      :totalAnswerTime="totalAnswerTime"
      @play-again="playAgain"
    />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import IntroductionComponent from "./components/Introduction.vue";
import QuizComponent from "./components/Quiz.vue";
import ResultComponent from "./components/Result.vue";

export default {
  components: {
    HeaderComponent,
    IntroductionComponent,
    QuizComponent,
    ResultComponent,
  },
  data() {
    return {
      showQuiz: false,
      showResult: false,
      selectedAnswer: null,
      isCorrect: null,
      quizData: [
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
        // 他のクイズデータも同様に続く
      ],
      currentQuestionIndex: 0,
      score: 0,
      startTime: null,
      totalAnswerTime: 0,
      shuffledOptions: [],
    };
  },
  computed: {
    currentQuestion() {
      return this.quizData[this.currentQuestionIndex];
    },
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    startQuiz() {
      this.showQuiz = true;
      this.showResult = false;
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.totalAnswerTime = 0;
      this.quizData = this.shuffleArray(this.quizData); // クイズデータをシャッフル
      this.showQuestion();
    },
    showQuestion() {
      const currentQuestion = this.quizData[this.currentQuestionIndex];
      this.shuffledOptions = this.shuffleArray([...currentQuestion.options]);
      this.startTime = Date.now();
      this.selectedAnswer = null; // 選択された答えをリセット
      this.isCorrect = null; // 正解・不正解の状態をリセット
    },
    submitAnswer(selectedOption) {
      const currentQuestion = this.quizData[this.currentQuestionIndex];
      const isCorrect = this.checkAnswer(selectedOption, currentQuestion);
      this.selectedAnswer = selectedOption; // 選択された答えを保存
      this.isCorrect = isCorrect; // 正解・不正解の状態を保存

      if (isCorrect) {
        this.score++;
        document.body.classList.add("correct-bg");
        document.body.classList.remove("incorrect-bg");
      } else {
        document.body.classList.add("incorrect-bg");
        document.body.classList.remove("correct-bg");
      }

      const endTime = Date.now();
      const answerTime = Math.floor((endTime - this.startTime) / 1000);
      this.totalAnswerTime += answerTime;

      setTimeout(() => {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.quizData.length) {
          this.showQuestion();
        } else {
          this.showResult = true;
          this.showQuiz = false;
        }
        this.isCorrect = null; // 背景色をリセット
        document.body.classList.remove("correct-bg", "incorrect-bg");
      }, 2500); // 2.5秒の遅延
    },
    checkAnswer(selectedOption, currentQuestion) {
      const selectedText = selectedOption
        .replace(/<\/?ruby[^>]*>/g, "")
        .replace(/<\/?rt[^>]*>/g, "");
      const answerText = currentQuestion.answer
        .replace(/<\/?ruby[^>]*>/g, "")
        .replace(/<\/?rt[^>]*>/g, "");
      return selectedText === answerText;
    },
    playAgain() {
      this.showQuiz = false;
      this.showResult = false;
      this.selectedAnswer = null;
    },
  },
};
</script>

<style>
.correct-bg {
  background-color: green;
  color: white;
  transition: background-color 0.5s ease;
}
.incorrect-bg {
  background-color: red;
  color: white;
  transition: background-color 0.5s ease;
}
</style>
