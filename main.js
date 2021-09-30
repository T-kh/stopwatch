'use strict';

//form部品であるbuttonタグで作るときのコード
// {
//   const timer = document.getElementById('timer');
//   const start = document.getElementById('start');
//   const stop = document.getElementById('stop');
//   const reset = document.getElementById('reset');
//   let startTime;
//   let timeoutId;   //timeoutIdはcountUpを止めるsetTimeoutを受けて止める。その値は変わり続けるので、let 変数 = 0;としてリセットせずに変数を作る。
//   let elaspedTime = 0;


//   //ストップウォッチの機能
//   function countUp () {

//     // 定数dでclickされたときのstartTime(Date.now)をDate.now()から引くことで、現在の分、秒、ミリ秒を定義する。加えて、stopした時の時間を足しあげた値を持つstopボタン機能で示された、elaspedTime += Date.now() - startTime;を入れることで、ストップしたときの時間を保持したままstartできるようにする。

//     const d = new Date(Date.now() - startTime + elaspedTime);
//     const m = String(d.getMinutes()).padStart(2, '0');
//     const s = String(d.getSeconds()).padStart(2, '0');
//     const ms = String(d.getMilliseconds()).padStart(3, '0');


//     timer.textContent = `${m}:${s}:${ms}`;


//     //setTimeoutでcountUp()を10ミリ秒ずつ表示させる。その値をstopボタンを押したときに、clearTimeout()に入れるための変数timeoutIdでその値を受け取る。
//     timeoutId = setTimeout(() => {
//       countUp();
//     }, 10);
//   }

//   //startボタンを押す前の表示
//   function setButtonStateInitial() {
//     start.disabled = false;
//     stop.disabled = true;
//     reset.disabled = true;
//   }
//   //startボタンを押した後、ストップウォッチが起動している時のボタンの表示
//   function setButtonStateRunnnig(){
//     start.disabled = true;
//     stop.disabled = false;
//     reset.disabled = true;
//   }

//   //startを押して、stopを押した後のボタンの表示
//   function setButtonStateStopped(){
//     start.disabled = false;
//     stop.disabled = true;
//     reset.disabled = false;
//   }

//   //画面起動時にstartボタンだけ押せるようにする。
//   setButtonStateInitial();

//   //startボタンの挙動
//   start.addEventListener('click', () => {

//     //startボタンを押した後、stopボタンしか押せないようにする。
//     setButtonStateRunnnig();          
//     startTime = Date.now();
//     countUp();
//   });

//   stop.addEventListener('click', () => {

//     //startを押して、stopを押したときに、もう一度startかresetを押せるようにする
//     setButtonStateStopped();
//     clearTimeout(timeoutId);       //stopしたときに、setTimeoutを受けた変数timeoutIdをclearTimeoutに入れてあげる。
//     elaspedTime += Date.now() - startTime;
//   });

//   reset.addEventListener('click', () => {

//     //resetしたときに、startボタンだけ押せるようにする処理
//     setButtonStateInitial();
//     //resetを押したときに、timerのテクストを元に戻す。
//     timer.textContent = '00:00:000';
//     //resetしたときに、前に行っていた処理を残さないようにする。
//     elaspedTime = 0;
//   });
// }


// ➀countUp内のconsole.log(Date.now() - startTime);の挙動について。
//Date now()で基準となる時間から、UTC の 1970 年 1 月 1 日 00:00:00 から経過したミリ秒 (閏秒は無視) を表す数値を返す。
//例えば、1632748671713のような数値を返す。
// 今回時間、分、秒、ミリ秒を取り出したい。
// startボタンを押したときにDate.now();を取得しておく。
// そしてその後にcountUp()を実行したいのだが、ストップウォッチはstartしてからの差の時間から表示させたい。
// なので、countUp()関数の中で、Date.now() - startTimeとした。
// このように書くと、現在の年、月、日の数値は互いに一緒なので、その数値は帰らずに、逆に差が生じる時間、、分、秒、ミリ秒だけの数値を取得することができる。
// で、countUpはsetTimeoutによって、十ミリ秒後に呼び出されるので、クリックしてから、10, 20, 30, 40,,,,,,ミリ秒ごとの数値が順に表示される。



// ② elaspedTime += Date.now() - startTime;でストップを押して、その後にスタートをした後もストップ時の時間から始められる理由。
// (ex)
// 0秒でstartを押して、5秒の時点でstopを押し、またstartを押したときに5秒からスタートする計算は
// let elaspedTime = 0;
// elaspedTime += Date.now() - startTime;を書き換えると、elaspedTime = elaspedTime + Date.now() - startTime;となる。
// これに数字を入れると、
// elaspedTime = 0 + 5 - 0;となり、elaspedTime = 5秒となる。ここで5秒保持することができる。
// このelaspedTImeをcountUp関数にいれることで、5秒の時点から開始することができる。



//divでボタンを作るときの処理
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  let startTime;
  let timeoutId;   //timeoutIdはcountUpを止めるsetTimeoutを受けて止める。その値は変わり続けるので、let 変数 = 0;としてリセットせずに変数を作る。
  let elaspedTime = 0;


  //ストップウォッチの機能
  function countUp () {

    // 定数dでclickされたときのstartTime(Date.now)をDate.now()から引くことで、現在の分、秒、ミリ秒を定義する。加えて、stopした時の時間を足しあげた値を持つstopボタン機能で示された、elaspedTime += Date.now() - startTime;を入れることで、ストップしたときの時間を保持したままstartできるようにする。

    const d = new Date(Date.now() - startTime + elaspedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');


    timer.textContent = `${m}:${s}:${ms}`;


    //setTimeoutでcountUp()を10ミリ秒ずつ表示させる。その値をstopボタンを押したときに、clearTimeout()に入れるための変数timeoutIdでその値を受け取る。
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  //startボタンを押す前の表示
  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }
  //startボタンを押した後、ストップウォッチが起動している時のボタンの表示
  function setButtonStateRunnnig(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  //startを押して、stopを押した後のボタンの表示
  function setButtonStateStopped(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  //画面起動時にstartボタンだけ押せるようにする。
  setButtonStateInitial();

  //startボタンの挙動
  start.addEventListener('click', () => {

    if(start.classList.contains('inactive') === true) {
      return;
    }

    //startボタンを押した後、stopボタンしか押せないようにする。
    setButtonStateRunnnig();          
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {

    if(stop.classList.contains('inactive') === true) {
      return;
    }


    //startを押して、stopを押したときに、もう一度startかresetを押せるようにする
    setButtonStateStopped();
    clearTimeout(timeoutId);       //stopしたときに、setTimeoutを受けた変数timeoutIdをclearTimeoutに入れてあげる。
    elaspedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {

    if(reset.classList.contains('inactive') === true) {
      return;
    }

    //resetしたときに、startボタンだけ押せるようにする処理
    setButtonStateInitial();
    //resetを押したときに、timerのテクストを元に戻す。
    timer.textContent = '00:00:000';
    //resetしたときに、前に行っていた処理を残さないようにする。
    elaspedTime = 0;
  });
}
