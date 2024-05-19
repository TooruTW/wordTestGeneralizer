const wordLibrary = [
    {
        word : "私",
        pronounce : "わたくし、わたし",
        description :"一人称",
        wordtype : "代名詞",
        correct:false
    },
    {
        word : "アタフタ",
        pronounce : "アタフタ",
        description :"慌てて騒ぐ様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "あつあつ",
        pronounce : "あつあつ",
        description :"①料理が出来立てで熱いこと。  ②カップル、夫婦が熱烈に愛し合っている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "あっさり",
        pronounce : "あっさり",
        description :"味が薄めで、しつこくない様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "いがいが",
        pronounce : "いがいが",
        description :"トゲによる刺激を感じる様子。喉の痛みやかゆみに使われることが多い。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "いじいじ",
        pronounce : "いじいじ",
        description :"① 態度や行動がはっきりしない様子。② 臆病で素直になれず、消極的になること。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "いちゃいちゃ",
        pronounce : "いちゃいちゃ",
        description :"男女が仲睦まじく戯れ合う様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "イライラ",
        pronounce : "イライラ",
        description :"自分の思い通りでなかったり、あるいは期待外れだったりして、苛立つ様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ウキー",
        pronounce : "ウキー",
        description :"猿の鳴き声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ウキウキ",
        pronounce : "ウキウキ",
        description :"嬉しさや楽しさ、心が弾んでいるいて、落ち着きの無い様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "うじゃうじゃ",
        pronounce : "うじゃうじゃ",
        description :"虫などの小さいものがたくさん集まってうごめいている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "うっかり",
        pronounce : "うっかり",
        description :"不注意で、気がつかない様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "うとうと",
        pronounce : "うとうと",
        description :"今にも眠りそうな様子。または、浅い眠りに落ちる様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "うるうる",
        pronounce : "うるうる",
        description :"目が涙でいっぱいになる様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "うろうろ",
        pronounce : "うろうろ",
        description :"行く方向や場所がはっきりせずに、あちこち歩き回る様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "えーん / うえーん",
        pronounce : "えーん / うえーん",
        description :"子供の泣き声、泣く様子。あるいは子供のように無邪気になく様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "オギャーオギャー",
        pronounce : "オギャーオギャー",
        description :"赤ちゃんの泣き声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "おどおど",
        pronounce : "おどおど",
        description :"緊張したり、恐れたりして、心が落ち着かない様子。",
        wordtype : "オノマトペ",
        correct:false
    },
];

let quextionLibrary ;
let currentQuestion = 0;
let selection;
let questionTotal = 10;
let questionCorrect;
let wrongAns;

//objects
let numShowing = document.querySelector('#taskNum');
let questionShowing = document.querySelector('#taskDescripe');

let answerAShowing = document.querySelector('#ansa');
let answerBShowing = document.querySelector('#ansb');
let answerCShowing = document.querySelector('#ansc');
let answerDShowing = document.querySelector('#ansd');

let resultTotal = document.querySelector('#total');
let resultCorrect = document.querySelector('#correct');
let resultWrong = document.querySelector('#wrongAns');


//選題功能
function pickQuestion(numOfquestion,source){
    let storage = source
    for (let i = storage.length; i > numOfquestion; i-=1) {
        let rendomNum = Math.floor(Math.random()*i);
        storage.splice(rendomNum,1)   
    }
    storage.forEach(item => {
        item.answer= Math.floor(Math.random()*4);

    });
    quextionLibrary = storage;

};
//製作題目
pickQuestion(questionTotal,wordLibrary);

console.log(quextionLibrary);

//準備隨機答案
function makeAnswers(questionNum){
    let rightAnsWord = quextionLibrary[questionNum].word;
    let rightAnsOrder = quextionLibrary[questionNum].answer;
    let ansNum = quextionLibrary.length;

    let answers =[
        quextionLibrary[(questionNum + 1) % ansNum].word, 
        quextionLibrary[(questionNum + 2) % ansNum].word,
        quextionLibrary[(questionNum + 3) % ansNum].word,
        quextionLibrary[(questionNum + 4) % ansNum].word,
        ];
    answers[rightAnsOrder] = rightAnsWord

    return answers
}


//渲染
function renderQuestion(numOfquestion){

    numShowing.innerHTML =`${numOfquestion + 1 }`;
    questionShowing.innerHTML = `${quextionLibrary[numOfquestion].description}`
    selection = makeAnswers(numOfquestion);
    answerAShowing.innerHTML = `${selection[0]}`;
    answerBShowing.innerHTML = `${selection[1]}`;
    answerCShowing.innerHTML = `${selection[2]}`;
    answerDShowing.innerHTML = `${selection[3]}`;
    
    questionTotal = quextionLibrary.length;

    resultTotal.innerHTML = `${questionTotal}`;    
};
//render resultlist
function renderResult(){

    wrongAns = quextionLibrary.filter((item)=>{        
        return item.correct === false
    })
    console.log(wrongAns);
    for (let i = 0; i < wrongAns.length; i++) {
        let itemToInsert = `<p>${wrongAns[i].word} (${wrongAns[i].pronounce})</p> <p>${wrongAns[i].description}</p> <p class="yourAns"> your answer: ${wrongAns[i].wrongAnswer}</p><br>`
        resultWrong.insertAdjacentHTML('afterend', itemToInsert);
        
    }


};


//第一次渲染
renderQuestion(currentQuestion);

//按鍵功能
function handlebtn(num){
    if(quextionLibrary[currentQuestion].answer === num) {
        quextionLibrary[currentQuestion].correct = true;
    }
    quextionLibrary[currentQuestion].wrongAnswer = selection[num];
    currentQuestion = currentQuestion + 1;
    if(currentQuestion >= quextionLibrary.length){
        document.querySelector('.exam').classList.add('hide');
        document.querySelector('.result').classList.remove('hide');

        questionCorrect = quextionLibrary.filter((item)=>{        
            return item.correct === true
        }).length;
        resultCorrect.innerHTML = `${questionCorrect}`;
        renderResult();
        return
    }
    renderQuestion(currentQuestion);
}

//按鍵互動
document.querySelector('#a').addEventListener('click',event =>{
    console.log("gotclick");
    handlebtn(0);
});
document.querySelector('#b').addEventListener('click',event =>{
    console.log("gotclick");
    handlebtn(1);
});
document.querySelector('#c').addEventListener('click',event =>{
    console.log("gotclick");
    handlebtn(2);
});
document.querySelector('#d').addEventListener('click',event =>{
    console.log("gotclick");
    handlebtn(3);
});



