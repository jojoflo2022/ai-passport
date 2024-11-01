<template>
  <div>
    <h2 v-html="question"></h2>
    <ul id="options">
      <li
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        :class="{ selected: selectedOption === option }"
      >
        <span v-html="option"></span>
      </li>
    </ul>
    <button @click="submitAnswer" id="submit-btn" class="btn">答える</button>
    <div v-if="selectedAnswer" class="feedback">
      <p v-if="isCorrect" class="correct">正解です！</p>
      <p v-else class="incorrect">
        残念。正解は <span v-html="correctAnswer"></span> です。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizComponent",
  props: {
    question: String,
    options: Array,
    correctAnswer: String,
    selectedAnswer: String,
    isCorrect: Boolean,
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  watch: {
    question() {
      // 新しい質問が表示された時に選択肢をリセットする
      this.selectedOption = null;
    },
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    submitAnswer() {
      if (this.selectedOption) {
        this.$emit("submit-answer", this.selectedOption);
      } else {
        alert("選択肢を選んでください。");
      }
    },
  },
};
</script>

<style scoped>
.selected {
  background-color: #d3d3d3;
}
.feedback {
  margin-top: 20px;
  text-align: center;
}
.correct,
.incorrect {
  color: #333;
  font-size: 1.75em;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
li:not(.selected) span {
  color: #333; /* 選択されていない選択肢のテキストカラー */
}
</style>
