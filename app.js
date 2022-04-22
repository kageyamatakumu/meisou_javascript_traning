// 要素を取得
const container = document.querySelector('.container')
const text = document.getElementById('text')

// 時間を変数に
let totalTime = 7500; //全体の時間
let breatheTime = (totalTime / 5) * 2; //全体の時間を５で割、2を✖かける。3秒が作れる
let holdTime = totalTime / 5; //全体を５で割ると１.５秒が作れ、息を止める時間を作れる

meditateAnimation(); //関数を呼び出す。


//関数

//setTimeout・・・ 第二引数に設定した時間になると、第一引数で設定した関数が実行される
function meditateAnimation() {
    text.innerHTML ="吸って";
    container.className = "container grow";
    setTimeout(() => {
        text.innerHTML = "止めて";

        setTimeout(() => {
            text.innerHTML ="吐いて";
            container.className = "container shrink";
        }, holdTime)
    }, breatheTime);
}

//setInterval・・・ 第二引数に設定した時間になると、第一引数で設定した関数が実行される。今回だと繰り返しで使用。
setInterval(meditateAnimation, totalTime);