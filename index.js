const wordLibrary = [
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
    {
        word : "リンリン",
        pronounce : "リンリン",
        description :"鈴やベル、目覚まし時計などの鳴る音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ルンルン",
        pronounce : "ルンルン",
        description :"嬉しいことや、楽しいことがあって心が踊る様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ワイワイ",
        pronounce : "ワイワイ",
        description :"複数人が、一緒になってにぎやかに騒ぐ様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ワクワク",
        pronounce : "ワクワク",
        description :"期待や喜びなどで心が落ち着かず、胸が躍る様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ガンガン",
        pronounce : "ガンガン",
        description :"頭の中で大きな音が響くように、ひどく痛む様子。何かで頭を叩かれているようなひどい頭痛。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "カンカン",
        pronounce : "カンカン",
        description :"ひどく怒っている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ガリガリ",
        pronounce : "ガリガリ",
        description :"ひどく痩せていて、健康的でない様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "カリカリ",
        pronounce : "カリカリ",
        description :"① 硬いもの、乾いた物を噛むときに出る軽い音。② 水分や脂肪分がなく、噛むと歯切れのいい状態。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ガラガラ",
        pronounce : "ガラガラ",
        description :"① うがいの時に出る音。② 人がおらず、空いている様子。③ かすれた声。④ 物が崩れ落ちたり、ぶつかった時に出る大きく響く音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "カラカラ",
        pronounce : "カラカラ",
        description :"① 乾いていて、水分が無い様子。② 堅い物が触れ合った時に出る軽い感じの音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "がやがや",
        pronounce : "がやがや",
        description :"多くの人が騒がしく話し合っている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ガミガミ",
        pronounce : "ガミガミ",
        description :"噛みつくように、叱ったり、文句を言ったりする様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "がっかり",
        pronounce : "がっかり",
        description :"思い通りにいかず、失望する様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ガツガツ",
        pronounce : "ガツガツ",
        description :"食べ物をむさぼり食う様子。",
        wordtype : "オノマトペ",
        correct:false
    }, 
    {
        word : "ガタガタ",
        pronounce : "ガタガタ",
        description :"① 寒さや恐怖で体が激しく震える様子。② 硬い物が強い風や地震などで揺れ動くときに出る音や、その様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "カタカタ",
        pronounce : "カタカタ",
        description :"パソコンのキーボードを打つ音",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "カシャッ / パシャッ",
        pronounce : "カシャッ / パシャッ",
        description :"カメラのシャッター音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ガオー",
        pronounce : "ガオー",
        description :"ライオンの鳴き声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ガーガー / グワッグワッ",
        pronounce : "ガーガー / グワッグワッ",
        description :"アヒルの鳴き声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "カーカー",
        pronounce : "カーカー",
        description :"カラスの鳴き声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "キンコンカンコン",
        pronounce : "キンコンカンコン",
        description :"（学校の）チャイムの音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "キンキン",
        pronounce : "キンキン",
        description :"しっかりと冷えている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぎりぎり",
        pronounce : "ぎりぎり",
        description :"限界に限りなく近い様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "キリキリ",
        pronounce : "キリキリ",
        description :"鋭い痛みを表す。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "キラキラ",
        pronounce : "キラキラ",
        description :"光り輝いている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぎょろぎょろ",
        pronounce : "ぎょろぎょろ",
        description :"大きな目玉で鋭くあたりを見まわす様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "きょろきょろ",
        pronounce : "きょろきょろ",
        description :"落ち着きなく、あたりを見回す様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ギュウギュウ",
        pronounce : "ギュウギュウ",
        description :"無理に詰め込んだり押し込んだりするさま",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぎとぎと",
        pronounce : "ぎとぎと",
        description :"油ぎっている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぎっしり",
        pronounce : "ぎっしり",
        description :"中身が隙間なく詰まっている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "キツキツ",
        pronounce : "キツキツ",
        description :"① 服のサイズが小さすぎる様子。 ② 空間や時間に余裕がない様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぎすぎす",
        pronounce : "ぎすぎす",
        description :"気持ちがうまく噛み合わず、親しみにくい様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ギザギザ",
        pronounce : "ギザギザ",
        description :"のこぎりの歯のような鋭く尖った刻み目。また、その目が続いている様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ギコギコ",
        pronounce : "ギコギコ",
        description :"ノコギリで木を切る時に出る音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "キーキー",
        pronounce : "キーキー",
        description :"① 甲高く鋭い声。② かたい物が擦れて出る高い音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "グングン",
        pronounce : "グングン",
        description :"物事が勢いよく進行する様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "クンクン",
        pronounce : "クンクン",
        description :"1. においを嗅ぐ動作や様子 2. 犬などの動物が鼻を鳴らす時の声",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぐるぐる",
        pronounce : "ぐるぐる",
        description :"① 物が何回も続いて回る様子。② 物を幾重にも巻きつける様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "くるくる",
        pronounce : "くるくる",
        description :"① 物が何度も回る様子。② 物を巻いたり、回したりする様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぐらぐら",
        pronounce : "ぐらぐら",
        description :"物が安定せず揺れ動く様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "クラクラ",
        pronounce : "クラクラ",
        description :"めまいがして倒れそうになる様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "グビグビ",
        pronounce : "グビグビ",
        description :"のどを鳴らしながら、飲み物を勢いよく飲む様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "くねくね",
        pronounce : "くねくね",
        description :"体を柔らかく曲げる様子。右に左に幾度も曲がって続く様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "くどくど",
        pronounce : "くどくど",
        description :"しつこく繰り返して言う様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぐったり",
        pronounce : "ぐったり",
        description :"疲れたり弱ったりして、力が抜けた様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぐっすり",
        pronounce : "ぐっすり",
        description :"深く眠る様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "グツグツ",
        pronounce : "グツグツ",
        description :"料理が煮え立つ音やその様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぐちゃぐちゃ",
        pronounce : "ぐちゃぐちゃ",
        description :"① 水分を多く含んでいて、やわらかくなったり形が崩れたりしている様子。また、そういった物を何度もつぶしたり、かきまぜたりする時に出る音。② 混乱していて、整理できていない様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "くちゃくちゃ",
        pronounce : "くちゃくちゃ",
        description :"口の中で物を噛むときの音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "クタクタ",
        pronounce : "クタクタ",
        description :"とても疲れている様子。疲労で、力の抜けた様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "くすくす",
        pronounce : "くすくす",
        description :"声を忍ばせるようにして笑う様子。また、その声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "グキッ",
        pronounce : "グキッ",
        description :"① 骨が折れる音。② 体の関節が良くない方向に曲がって、出る音。また、その様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "グウグウ",
        pronounce : "グウグウ",
        description :"空腹でお腹が鳴る音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ぐいぐい",
        pronounce : "ぐいぐい",
        description :"① 力を込めて引いたり、押したりする様子。② 物事を勢いよく積極的に進める様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "コンコン",
        pronounce : "コンコン",
        description :"1. 狐の鳴き声。2. 咳をする時に出る音。3. 固い物が軽く打ち当たった時に出る音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ゴロゴロ",
        pronounce : "ゴロゴロ",
        description :"	① 雷の響き渡る音。② 何もしないでくつろいでいる様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "コロコロ",
        pronounce : "コロコロ",
        description :"① 丸いものや小さな物が転がる様子。② 丸々として、かわいらしい様子。③ 物事が簡単に変わる様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ゴホゴホ",
        pronounce : "ゴホゴホ",
        description :"咳をする時に出る音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "粉々(こなごな)",
        pronounce : "こなごな",
        description :"元の形がわからない程に、こまかく砕ける様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "コトコト",
        pronounce : "コトコト",
        description :"弱火で時間をかけて煮込む様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ごつん",
        pronounce : "ごつん",
        description :"かたくて重いものが強く当たること。または、その時の音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "こってり",
        pronounce : "こってり",
        description :"味が濃く、しつこい様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ごっそり",
        pronounce : "ごっそり",
        description :"① たくさんの物が残らず別のところへ移動する様子。② 数量が多い様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ごつごつ",
        pronounce : "ごつごつ",
        description :"① 表面がなめらかでなく、 角ばっている様子。② 容姿や性格が荒削りであること。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "コツコツ",
        pronounce : "コツコツ",
        description :"休まずに地道に努力を続ける様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ごちゃごちゃ",
        pronounce : "ごちゃごちゃ",
        description :"① 色々な物がまとまりなく混ざっている様子。② 文句や不満などを言う様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ゴシゴシ",
        pronounce : "ゴシゴシ",
        description :"力を入れて、物をこする様子。または、その音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "こそこそ",
        pronounce : "こそこそ",
        description :"人に知られないように隠れて何かをする様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "コケコッコー",
        pronounce : "コケコッコー",
        description :"鶏の鳴き声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ゴクゴク",
        pronounce : "ゴクゴク",
        description :"飲み物を飲む時に出る音。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ケロケロ/ゲロゲロ",
        pronounce : "ケロケロ/ゲロゲロ",
        description :"カエルの鳴き声。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "ゲラゲラ",
        pronounce : "ゲラゲラ",
        description :"大声で笑う様子。",
        wordtype : "オノマトペ",
        correct:false
    },
    {
        word : "げっそり",
        pronounce : "げっそり",
        description :"① 顔や体が急にやせ衰える様子。② 急激に気力の衰える様子。",
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

let numOfQ = document.querySelector('#nOfQ');
let startBtn = document.querySelector('#start');
let manualBtn = document.querySelector('#manual');

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
        let itemToInsert = `<p class="rightAns">${wrongAns[i].word} (${wrongAns[i].pronounce})</p> <p>${wrongAns[i].description}</p> <p class="yourAns"> your answer: ${wrongAns[i].wrongAnswer}</p><br>`
        resultWrong.insertAdjacentHTML('beforebegin', itemToInsert);   
    }
};




//按鍵功能
function startExam(){
    document.querySelector('.start').classList.add('hide');
    document.querySelector('.taskNum').classList.remove('hide');
    document.querySelector('.taskDescripe').classList.remove('hide');
    document.querySelector('.btns').classList.remove('hide');
    document.querySelector('.descripe').style.height = "60%";
}

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
    handlebtn(0);
});
document.querySelector('#b').addEventListener('click',event =>{
    handlebtn(1);
});
document.querySelector('#c').addEventListener('click',event =>{
    handlebtn(2);
});
document.querySelector('#d').addEventListener('click',event =>{
    handlebtn(3);
});

document.querySelector('.end').addEventListener('click',event =>{
    location.reload();
});

document.querySelector('#start').addEventListener('click',event =>{
    questionTotal = numOfQ.value
    //製作題目
    pickQuestion(questionTotal,wordLibrary);
    console.log(quextionLibrary);
    startExam();
    renderQuestion(currentQuestion);
});

document.querySelector('#library').addEventListener('click',event =>{

    pickQuestion(wordLibrary.length,wordLibrary);
    startExam();
    document.querySelector('.exam').classList.add('hide');
    document.querySelector('.result').classList.remove('hide');
    renderResult();
    document.querySelector('.score').classList.add('hide');
  
});


