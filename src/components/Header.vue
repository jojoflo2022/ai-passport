<template>
  <header class="app-header">
    <!-- タイトルエフェクト -->
    <h1 class="title"><span v-html="typedTitle"></span></h1>

    <!-- サブヘッダーのアイコン付きリスト -->
    <div class="sub-headers">
      <p><i class="fas fa-robot"></i> AIについて学べる</p>
      <p><i class="fas fa-brain"></i> 知識を試そう</p>
      <p><i class="fas fa-lightbulb"></i> スキルを高める</p>
    </div>

    <!-- ボタン -->
    <div class="buttons">
      <button class="start-button">スタート</button>
      <button class="guide-button">学習ガイド</button>
    </div>

    <!-- パーティクルエフェクト -->
    <div id="particles-js"></div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import Typed from "typed.js"; // タイピングエフェクト用のライブラリ
export default {
  name: "Header",
  setup() {
    const typedTitle = ref("");
    onMounted(() => {
      new Typed(".title span", {
        strings: ["生成AIパスポート試験対策アプリ"],
        typeSpeed: 60,
        loop: true,
        backDelay: 2000,
        backSpeed: 30,
      });
    });
    return { typedTitle };
  },
};
</script>

<style scoped>
/* 背景グラデーションと全体設定 */
.app-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e3c72);
  color: #fff;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* タイトルエフェクト */
.title {
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
  color: #ffeb3b;
}

/* サブヘッダーアイコン付きリスト */
.sub-headers {
  display: flex;
  gap: 20px;
  font-size: 1.2em;
  margin: 20px 0;
}

.sub-headers p {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sub-headers i {
  color: #ffc107;
}

/* 3Dボタンのスタイル */
.buttons {
  display: flex;
  gap: 15px;
}

.start-button,
.guide-button {
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1em;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.start-button {
  background-color: #4caf50;
  color: #fff;
}

.guide-button {
  background-color: #f44336;
  color: #fff;
}

.start-button:hover,
.guide-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* パーティクルエフェクト */
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}
</style>
