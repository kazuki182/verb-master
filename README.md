export type Example = { en: string; ja: string }
export type Verb = {
  id: string
  word: string
  rank: number
  core: string
  meanings: { title: string; explanation: string; examples: Example[] }[]
  patterns: { pattern: string; meaning: string; examples: Example[] }[]
  collocations: { phrase: string; meaning: string; examples: Example[] }[]
  phrasalVerbs: { phrase: string; meaning: string; examples: Example[] }[]
  mistakes: { wrong: string; correct: string; explanation: string }[]
  tests: { q: string; answer: string }[]
}

export const verbs: Verb[] = [
  {
    id: 'get', word: 'GET', rank: 1, core: '手に入れる／ある状態へ移動する／到着する',
    meanings: [
      { title: '手に入れる', explanation: '物・情報・機会などを得る。', examples: [{en:'I got a new phone yesterday.',ja:'昨日新しいスマホを手に入れた。'}, {en:'She got a ticket for the concert.',ja:'彼女はコンサートのチケットを手に入れた。'}]},
      { title: '〜になる', explanation: '状態の変化を表す。', examples: [{en:"I'm getting tired.",ja:'疲れてきた。'}, {en:"It's getting cold.",ja:'寒くなってきた。'}]},
      { title: '到着する', explanation: '場所へ着く。homeにはtoを付けない。', examples: [{en:'I got home at 8.',ja:'8時に帰宅した。'}, {en:'What time did you get to work?',ja:'何時に会社へ着いた？'}]},
      { title: '理解する', explanation: '内容や意味が分かる。', examples: [{en:'I get it.',ja:'分かった。'}, {en:"I don't get the joke.",ja:'その冗談が分からない。'}]}
    ],
    patterns: [
      { pattern:'S + get + 名詞', meaning:'〜を手に入れる', examples:[{en:'I got a new laptop.',ja:'新しいノートPCを買った。'}, {en:'We got useful information.',ja:'有益な情報を得た。'}]},
      { pattern:'S + get + 形容詞', meaning:'〜になる', examples:[{en:"I'm getting hungry.",ja:'お腹が空いてきた。'}, {en:'The weather got better.',ja:'天気が良くなった。'}]},
      { pattern:'S + get + 人 + 物', meaning:'人に物を用意する', examples:[{en:'Can you get me some water?',ja:'水を取ってくれる？'}, {en:'I got my son a bicycle.',ja:'息子に自転車を買った。'}]}
    ],
    collocations: [
      { phrase:'get ready', meaning:'準備する', examples:[{en:'Get ready for school.',ja:'学校の準備をしなさい。'}, {en:'We need to get ready now.',ja:'今準備する必要がある。'}]},
      { phrase:'get better', meaning:'良くなる', examples:[{en:"You'll get better soon.",ja:'すぐ良くなるよ。'}, {en:'My English is getting better.',ja:'英語が上達している。'}]}
    ],
    phrasalVerbs: [
      { phrase:'get up', meaning:'起きる', examples:[{en:'I get up at six.',ja:'6時に起きる。'}, {en:'He got up early today.',ja:'今日は早起きした。'}]},
      { phrase:'get over', meaning:'乗り越える', examples:[{en:'He got over his illness.',ja:'彼は病気を克服した。'}, {en:'It took time to get over the breakup.',ja:'失恋から立ち直るのに時間がかかった。'}]}
    ],
    mistakes: [{wrong:'get to home', correct:'get home', explanation:'homeは副詞なのでto不要。'}, {wrong:'get married with', correct:'get married to', explanation:'結婚相手はtoを使う。'}],
    tests: [{q:'I _____ home at 8.', answer:'get'}, {q:"I don't _____ it.", answer:'get'}, {q:'Can you _____ me some water?', answer:'get'}]
  },
  ...['take','make','have','give','go','come','put','keep','bring'].map((v, i) => ({
    id:v, word:v.toUpperCase(), rank:i+2, core:'日常会話で頻出する基本動詞。詳細データを順次追加。',
    meanings:[{title:'基本の意味', explanation:'まずは日常会話で使う基本イメージを覚える。', examples:[{en:`I use ${v} in everyday English.`, ja:`${v} は日常英語でよく使う。`}, {en:`Let's practice ${v} today.`, ja:`今日は ${v} を練習しよう。`}]}],
    patterns:[{pattern:`S + ${v} + 目的語`, meaning:'基本文型', examples:[{en:`I ${v} it every day.`, ja:'私はそれを毎日使う。'}, {en:`She ${v}s it well.`, ja:'彼女はそれを上手に使う。'}]}],
    collocations:[{phrase:`${v} phrase`, meaning:'頻出表現', examples:[{en:`This is a common ${v} phrase.`, ja:'これはよく使う表現です。'}, {en:`Practice this ${v} phrase.`, ja:'この表現を練習しましょう。'}]}],
    phrasalVerbs:[{phrase:`${v} up`, meaning:'句動詞サンプル', examples:[{en:`Let's ${v} up.`, ja:'句動詞の練習例です。'}, {en:`He ${v}s up often.`, ja:'句動詞の練習例です。'}]}],
    mistakes:[{wrong:`wrong ${v}`, correct:`correct ${v}`, explanation:'自然な形に直す。'}],
    tests:[{q:`I _____ it every day.`, answer:v}, {q:`Let's practice _____.`, answer:v}]
  })) as Verb[]
]
