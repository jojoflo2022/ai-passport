<template>
  <div class="introduction">
    <h2>
      <ruby>目的<rt>もくてき</rt></ruby>
    </h2>
    <p>
      このクイズは、SDGsの17の<ruby>目標<rt>もくひょう</rt></ruby
      >について <ruby>楽<rt>たの</rt></ruby
      >しみながら<ruby>学<rt>まな</rt></ruby
      >べるように <ruby>作成<rt>さくせい</rt></ruby
      >されました。 <ruby>社会課題<rt>しゃかいかだい</rt></ruby
      >への<ruby>関心<rt>かんしん</rt></ruby> を<ruby>高<rt>たか</rt></ruby
      >め、<ruby>自<rt>みずから</rt></ruby
      >ら <ruby>行動<rt>こうどう</rt></ruby
      >を<ruby>起<rt>お</rt></ruby
      >こすきっかけを <ruby>提供<rt>ていきょう</rt></ruby
      >することを<ruby>目的<rt>もくてき</rt></ruby>
      としています。
    </p>
    <h2>SDGsとは</h2>
    <img
      src="https://www.town.minamifurano.hokkaido.jp/wp-content/uploads/2024/04/sdgs_01.png"
      alt="SDGs Icons"
      class="sdgs-icons"
    />
    <p>
      SDGs（<ruby>持続可能<rt>じぞくかのう</rt></ruby
      >な <ruby>開発目標<rt>かいはつもくひょう</rt></ruby
      >）とは、 2015年9月の <ruby>国連<rt>こくれん</rt></ruby
      >サミットで<ruby>採択<rt>さいたく</rt></ruby> された「<ruby
        >持続可能<rt>じぞくかのう</rt></ruby
      >な <ruby>開発<rt>かいはつ</rt></ruby
      >のための2030アジェンダ」 にて <ruby>記載<rt>きさい</rt></ruby
      >された2016年から2030年までの <ruby>国際<rt>こくさい</rt></ruby
      >目標です。 <ruby>持続可能<rt>じぞくかのう</rt></ruby
      >な<ruby>世界<rt>せかい</rt></ruby> を<ruby>実現<rt>じつげん</rt></ruby
      >するための17のゴール・169のターゲットから
      <ruby>構成<rt>こうせい</rt></ruby
      >され、 <ruby>地球上<rt>ちきゅうじょう</rt></ruby
      >の<ruby>誰一人<rt>だれひとり</rt></ruby> として<ruby>取<rt>と</rt></ruby
      >り<ruby>残<rt>のこ</rt></ruby
      >さない （leave no one behind）ことを<ruby>誓<rt>ちか</rt></ruby
      >っています。 SDGsは<ruby>発展途上国<rt>はってんとじょうこく</rt></ruby
      >のみならず、 <ruby>先進国<rt>せんしんこく</rt></ruby
      >自らが<ruby>取<rt>と</rt></ruby
      >り <ruby>組<rt>く</rt></ruby
      >むユニバーサル（<ruby>普遍的<rt>ふへんてき</rt></ruby
      >） なものであり、<ruby>日本<rt>にほん</rt></ruby
      >としても <ruby>積極的<rt>せっきょくてき</rt></ruby
      >に<ruby>取<rt>と</rt></ruby
      >り <ruby>組<rt>く</rt></ruby
      >んでいます。
    </p>
    <button @click="$emit('start-quiz')" id="start-quiz" class="btn">
      クイズに進む
    </button>
  </div>
</template>

<script>
export default {
  name: "IntroductionComponent",
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
