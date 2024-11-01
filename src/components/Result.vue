<template>
  <div class="result-container">
    <h2>クイズ終了！</h2>
    <p>{{ score }} / {{ totalQuestions }} 問正解でした。</p>
    <p>合計回答時間: {{ totalAnswerTime }}秒</p>
    <button @click="$emit('play-again')" id="play-again-btn" class="btn">
      もう一度プレイ
    </button>
  </div>
</template>

<script>
export default {
  name: "ResultComponent",
  props: {
    score: Number,
    totalQuestions: Number,
    totalAnswerTime: Number,
  },
};
</script>

<style scoped>
.result-container {
  font-size: 1.75em;
  text-align: center;
  margin-top: 20px;
}
</style>
