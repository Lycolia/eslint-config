module.exports = {
  rules: {
    // トリプルイコールの強制
    eqeqeq: ['error', 'always'],
    // シングルクォートの強制
    // シングルクォートが入った文字列はダブルクォートで解決される："'aaaa'"など
    quotes: ['error', 'single'],
    // 関数宣言の代わりに関数式の使用を強制
    // アロー関数を許容
    // アロー関数の強制はできないのでお気持ち程度。const hoge = functionを禁止するだけなので、function hogeは書ける
    'func-style': [
      'error',
      'expression',
      {
        allowArrowFunctions: true,
      },
    ],
    // Arrayメソッドのコールバックにreturnを強制
    // mapなどをforEachのように使うことを防ぐことや、return漏れを防ぐのが目的
    // forEachでのreturnを禁止
    // returnの有無で使い分けするのが目的
    'array-callback-return': [
      'error',
      {
        checkForEach: true,
      },
    ],
    // 名前空間の使用を許可
    '@typescript-eslint/no-namespace': 'off',
    // 関数の戻り型を定義しないことを許可
    // 毎回書くと冗長なので推論で済む場合は省略したい
    '@typescript-eslint/explicit-function-return-type': 'off',
    // exportされた関数の戻り型を定義しないことを許可
    // 毎回書くと冗長なので推論で済む場合は省略したい
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // anyの使用を許容しない
    '@typescript-eslint/no-explicit-any': 1,
    // Boolean型以外をBoolean的に扱うことの禁止
    // !''や!0のようなケースを阻止する
    // 以下を防ぐのが目的。基本はeqeqeqと同じ信念
    // - optionalをBoolean的に扱った時に非optional化した時の誤作動
    // - 期待値の考慮漏れによる誤作動
    '@typescript-eslint/strict-boolean-expressions': ['error', {
      'allowString': false,
      'allowNumber': false,
      'allowNullableObject': false,
      'allowNullableBoolean': false,
      'allowNullableString': false,
      'allowNullableNumber': false,
      'allowAny': false,
      'allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing': false
    }],
    // 次の型変数を初期化する時に型を書くことを許容しない
    // number, string, boolean
    // コードの冗長化防止
    // 但し関数の仮引数は許可する（型があったりなかったりすると読みづらいと感じるため）
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    // 未使用の変数を許容しない
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
