<template>
  <section class="introduction">
    <!-- タイトルセクション -->
    <div class="intro-header">
      <h2 class="fade-in">生成AIパスポート試験対策アプリとは？</h2>
      <p class="fade-in delay">
        生成AIの知識を楽しく学び、スキルアップに役立つクイズアプリです！
      </p>
      <img
        src="src\components\IntroSection.vue"
        alt="生成AIのイメージ"
        class="intro-image"
      />
    </div>

    <!-- 特徴セクション -->
    <div class="features">
      <h3><i class="fas fa-star"></i> 特徴・機能</h3>
      <ul class="feature-list">
        <li class="fade-in">
          <i class="fas fa-clipboard-check"></i> <strong>実践的な問題</strong> -
          試験範囲を網羅した内容。
        </li>
        <li class="fade-in delay">
          <i class="fas fa-sync-alt"></i> <strong>即時フィードバック</strong> -
          効果的な学習体験を提供。
        </li>
        <li class="fade-in delay-2">
          <i class="fas fa-chart-line"></i> <strong>スコア機能</strong> -
          進捗を見える化し、成長を実感。
        </li>
      </ul>
    </div>

    <!-- 使い方ガイド -->
    <div class="usage-guide">
      <h3><i class="fas fa-lightbulb"></i> 使い方ガイド</h3>
      <ol class="guide-steps">
        <li class="slide-up">
          「スタート」ボタンを押して、クイズを始めましょう。
        </li>
        <li class="slide-up delay">
          問題ごとに4つの選択肢から答えを選んでください。
        </li>
        <li class="slide-up delay-2">
          すべての問題を解き終わると結果が表示されます！
        </li>
      </ol>
    </div>

    <!-- モチベーションメッセージ -->
    <div class="motivation">
      <p class="pulse">
        生成AIパスポートは、キャリアに新たな道を開くパスポート！一緒に学んでスキルを向上させましょう。
      </p>
      <button class="goal-button">目標を設定する</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSection",
};
</script>

<style scoped>
/* セクション全体の背景とレイアウト */
.introduction {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  color: #333;
  background: linear-gradient(to right, #1e3c72, #2a5298);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease;
}

/* タイトルセクション */
.intro-header h2 {
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 10px;
}

.intro-header p {
  font-size: 1.2em;
  color: #d0e4ff;
  margin-bottom: 20px;
}

.intro-image {
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  border-radius: 8px;
}

/* 特徴セクション */
.features h3,
.usage-guide h3 {
  font-size: 1.8em;
  color: #ffeb3b;
  margin-top: 30px;
}

.feature-list {
  text-align: left;
  margin: 0 auto;
  font-size: 1.1em;
}

.feature-list li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* 使い方ガイド */
.guide-steps {
  list-style-type: decimal;
  margin: 0 auto;
  padding-left: 1em;
  font-size: 1.1em;
}

.guide-steps li {
  margin-bottom: 8px;
}

/* モチベーションメッセージ */
.motivation {
  margin-top: 30px;
  font-size: 1.3em;
  color: #f44336;
  font-weight: bold;
}

.goal-button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  font-size: 1.1em;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.goal-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* アニメーション */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease;
}

.fade-in.delay {
  animation-delay: 0.5s;
}

.fade-in.delay-2 {
  animation-delay: 1s;
}

.slide-up {
  transform: translateY(20px);
  opacity: 0;
  animation: slideUp 0.7s ease forwards;
}

.slide-up.delay {
  animation-delay: 0.3s;
}

.slide-up.delay-2 {
  animation-delay: 0.6s;
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>
