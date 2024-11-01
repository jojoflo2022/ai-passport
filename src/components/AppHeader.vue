<template>
  <header class="app-header">
    <div class="header-content">
      <h1 class="app-title">生成AIパスポート試験対策アプリ</h1>
      <p class="app-subtitle">
        生成AIの知識を楽しく学び、試験を通してスキルを向上させましょう！
      </p>
    </div>
  </header>
</template>

<style scoped>
/* ヘッダーの全体レイアウト */
.app-header {
  background: linear-gradient(135deg, #4a90e2, #145da0);
  padding: 40px 20px;
  text-align: center;
  color: #fff;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  animation: fadeInDown 1.2s ease;
}

/* コンテンツの内側デザイン */
.header-content {
  max-width: 900px;
  margin: 0 auto;
}

/* メインタイトル */
.app-title {
  font-size: 3em;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  animation: expandText 1.2s ease;
  position: relative;
  display: inline-block;
}

.app-title:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 4px;
  background: #fff;
  border-radius: 2px;
  animation: expandLine 0.6s ease;
}

/* サブタイトル */
.app-subtitle {
  font-size: 1.5em;
  margin-top: 15px;
  line-height: 1.6;
  color: #f0f4f8;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  animation: fadeInText 1.5s ease;
}

/* アニメーション */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandText {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
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

@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* レスポンシブ設定 */
@media (max-width: 768px) {
  .app-title {
    font-size: 2.5em;
  }

  .app-subtitle {
    font-size: 1.2em;
  }
}

@media (max-width: 480px) {
  .app-title {
    font-size: 2em;
  }

  .app-subtitle {
    font-size: 1.1em;
  }
}
</style>
