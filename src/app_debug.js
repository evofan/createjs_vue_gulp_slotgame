// 変更するデータ
let items = [
  {
    name: "当たる確率",
    num: 10
  },
  {
    name: "コイン",
    num: 10
  }
];

// Vue コンストラクタ
let vm = new Vue({
  // dataプロパティ
  data: {
    items: items
  },

  // 算出プロパティ
  computed: {
    // 1以上判別する
    canOdds: function() {
      return this.items[0].num > 0;
    },

    // 10コイン以上か判別する
    canBet: function() {
      return this.items[1].num > 9;
    },

    // エラー時のスタイルを返す
    errorMessageStyle: function() {
      return {
        border: this.canOdds && this.canBet ? "" : "1px solid #ff0033",
        color: this.canOdds && this.canBet ? "" : "#ff0033"
      };
    }
  },

  // データ更新時の処理
  updated: function() {
    console.log("***** [app.debug] データが入力され更新されました。");
    window.sg.odds = items[0].num;
    window.sg.score_bet = items[1].num;
  }
});
vm.$mount("#app"); // 任意のタイミングでマウント
