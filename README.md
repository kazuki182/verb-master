export const verbs = [
 {id:'get',word:'GET',status:'learning',core:'手に入れる／状態が変わる／到着する',examples:['I got home at 8.','I got a message from him.']},
 {id:'take',word:'TAKE',status:'done',core:'自分の方へ取り込む',examples:['Let’s take a break.','I take the train to work.']},
 {id:'make',word:'MAKE',status:'new',core:'作り出す／結果を生む',examples:['I made a cake.','You make me happy.']},
 {id:'have',word:'HAVE',status:'new',core:'持っている／経験する',examples:['I have a question.','We had dinner together.']},
 {id:'give',word:'GIVE',status:'new',core:'相手に渡す',examples:['Give me a second.','She gave him advice.']},
 {id:'go',word:'GO',status:'new',core:'離れて進む',examples:['I go to work by train.','Let’s go home.']},
 {id:'come',word:'COME',status:'new',core:'こちらへ来る',examples:['Come here.','Spring is coming.']},
 {id:'put',word:'PUT',status:'new',core:'置く',examples:['Put it on the table.','I put my phone in my bag.']},
 {id:'keep',word:'KEEP',status:'new',core:'保ち続ける',examples:['Keep going.','Please keep this secret.']},
 {id:'bring',word:'BRING',status:'new',core:'持ってくる',examples:['Bring your laptop.','This song brings back memories.']}
];
export function getVerb(id:string){return verbs.find(v=>v.id===id) ?? verbs[0]}
