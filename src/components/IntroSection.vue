<template>
  <section class="intro-section">
    <!-- タイトルとイントロダクション -->
    <div class="intro-header">
      <h2>生成AIパスポート試験対策アプリとは？</h2>
      <p>
        生成AIの知識を楽しく学び、スキルアップに役立つクイズ形式の試験対策アプリです。生成AIパスポート試験の内容に沿った問題を解くことで、スキルを強化し、自信を持って試験に臨むことができます。
      </p>
    </div>

    <!-- 特徴セクション -->
    <div class="features">
      <h3><i class="fas fa-star"></i> 特徴・機能</h3>
      <ul class="feature-list">
        <li class="slide-up">
          <i class="fas fa-clipboard-check"></i> <strong>実践的な問題</strong> -
          試験範囲を網羅した内容。
        </li>
        <li class="slide-up delay">
          <i class="fas fa-sync-alt"></i> <strong>即時フィードバック</strong> -
          効果的な学習体験を提供。
        </li>
        <li class="slide-up delay-2">
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

    <!-- クイズに進むボタン -->
    <button class="start-quiz-button" @click="$emit('start-quiz')">
      クイズを始める
    </button>
  </section>
</template>

<style scoped>
/* 全体レイアウト設定 */
.intro-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #ffffff, #f0f4f8);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: center;
  animation: fadeIn 1.2s ease;
}

/* タイトルとイントロダクション */
.intro-header h2 {
  font-size: 2.5em;
  color: #4a90e2;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
}

.intro-header h2:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #4a90e2;
  border-radius: 2px;
  animation: expandLine 0.6s ease;
}

.intro-header p {
  font-size: 1.2em;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
  max-width: 700px;
  margin: 0 auto;
}

/* 特徴セクション */
.features h3 {
  font-size: 2em;
  color: #333;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 600;
}

.feature-list {
  list-style-type: none;
  padding-left: 0;
  font-size: 1.5em;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-list li i {
  color: #4a90e2;
  font-size: 1.2em;
}

/* 使い方ガイド */
.usage-guide h3 {
  font-size: 2em;
  color: #333;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 600;
}

.guide-steps {
  list-style-type: none;
  padding-left: 0;
  font-size: 1.5em;
  color: #555;
}

.guide-steps li {
  margin-bottom: 20px;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.guide-steps li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* ボタンのスタイル */
.start-quiz-button {
  margin-top: 30px;
  padding: 15px 30px;
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
  background: #4a90e2;
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.start-quiz-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.start-quiz-button:active {
  transform: translateY(2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

/* アニメーション */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandLine {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.slide-up {
  opacity: 0;
  transform: translateY(30px);
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
    opacity: 1;
    transform: translateY(0);
  }
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .intro-section {
    padding: 20px;
  }

  .intro-header h2 {
    font-size: 2em;
  }

  .intro-header p,
  .feature-list li,
  .guide-steps li {
    font-size: 1.2em;
  }

  .features h3,
  .usage-guide h3 {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .intro-header h2 {
    font-size: 1.8em;
  }

  .intro-header p,
  .feature-list li,
  .guide-steps li {
    font-size: 1.1em;
  }

  .features h3,
  .usage-guide h3 {
    font-size: 1.6em;
  }
}
</style>
