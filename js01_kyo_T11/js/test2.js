// 一番最初にやって欲しいことはalert();→(htmlとjsがちゃんと繋がっているかを必ず確かめる)
// alert(1111);
// （やったらコメントアウト）


var result;
let judge;


const music = new Audio('sound/後出しただーん.m4a');

const catjanken = function(){ 


  setTimeout(function(){
  $('.start').hide() 
  console.log("1秒経過しました")
},1000);

setTimeout(function(){
  $('.a').show();
  console.log("2秒経過しました")
},1500);

setTimeout(function(){
  music.play();

},1500)

setTimeout(function(){
  $('.a').hide();
  console.log("3秒経過しました")
},3500);

setTimeout(function(){
  $('.b').show();
  console.log("4秒経過しました")
},4000);

setTimeout(function(){
  $('.b').hide();
  console.log("5秒経過しました")
},5000);


setTimeout(function(){
  result = Math.floor(Math.random() * 3);
  console.log(result, "ランダムな図");
  
  if (result === 0) {
  console.log("グー");
  $(".neko_goo").show();
  } else if (result === 1) {
  console.log("チョキ");
  $(".neko_choki").show();
  } else if (result === 2) {
  console.log("パー");
  $(".neko_paa").show();
  } 

},6000);



}

//＝＝＝＝＝＝ 繰り返し処理＝＝＝＝＝＝
// var data=new Data();

// class Data {
//   constructor(){
  
  
// while(count<=10){
//     console.log("わ");
//     count++;
//       if(judge=2){
//         break;
//       }
//       if(judge=1){
//         continue;
//       }
// }
// }
// }
//＝＝＝＝＝＝ 繰り返し処理＝＝＝＝＝＝

  $('.start').click(function(){
    let count=0

    while(count<=10){
      catjanken()
      janken()
      count++

    }

    
    // setTimeout(function(){
    //   $('.start').hide() 
    //   console.log("1秒経過しました")
    // },1000);

    // setTimeout(function(){
    //   $('.a').show();
    //   console.log("2秒経過しました")
    // },1500);

    // setTimeout(function(){
    //   music.play();

    // },1500)

    // setTimeout(function(){
    //   $('.a').hide();
    //   console.log("3秒経過しました")
    // },3500);

    // setTimeout(function(){
    //   $('.b').show();
    //   console.log("4秒経過しました")
    // },4000);

    // setTimeout(function(){
    //   $('.b').hide();
    //   console.log("5秒経過しました")
    // },5000);


    // setTimeout(function(){
    //   result = Math.floor(Math.random() * 3);
    //   console.log(result, "ランダムな図");
      
    //   if (result === 0) {
    //   console.log("グー");
    //   $(".neko_goo").show();
    //   } else if (result === 1) {
    //   console.log("チョキ");
    //   $(".neko_choki").show();
    //   } else if (result === 2) {
    //   console.log("パー");
    //   $(".neko_paa").show();
    //   } 

    // },6000);

  })


  // if分岐処理

  // randomが機能していない
  // 勝ち負けの表示がうまく行かない
  // 枠の外にrandom(=result)の変数をおいたらどちらにも機能したので解決した！

  var view = "";
  var msg = "もう1回!";

  // var score;
  // var miss;

  const janken = function(){
    $("#jibun_goo").click(function(){
      console.log("クリックしました");
    
    
      if(result === 2 ){
          console.log("かち");
          view = "きみのかち！";
          console.log("表示");
          // judge=1
          
      }else {
          console.log("まけ");
          view ="ざんねん";
          console.log("表示");
          // judge=2
          
      
      }
    
      $("#echo").html(view);
    
      setTimeout(function(){
        console.log("再スタート")
        $("#resultMsg").html(msg);}
        ,1000);
    
          $('#echo').toggle();
          $("#resultMsg").toggle();
    
          
    });
    
      $("#jibun_choki").click(function(){
        console.log("クリックしました")
    
        if(result ===  0 ){
            console.log("かち");
            view = "きみのかち！";
            console.log("表示");
            // judge=1
            
        }else {
            console.log("まけ");
            view = "ざんねん";
            console.log("表示");
            // judge=2
            
        }
    
        $("#echo").html(view);
    
        setTimeout(function(){
          console.log("再スタート")
          $("#resultMsg").html(msg);}
     ,1000);
    
        $('#echo').toggle();
        $("#resultMsg").toggle();
    
        catjanken()
        });
    
      $("#jibun_paa").click(function(){
          console.log("クリックしました");
          if(result ===  1 ){
              console.log("かち");
              view = "きみのかち！";
              console.log("表示");
    
              // judge=1
              
        
          }else {
              console.log("まけ");
              view = "ざんねん";
              console.log("表示");
              // judge=2
            
          }
    
          $("#echo").html(view);
    
          setTimeout(function(){
            console.log("再スタート")
            $("#resultMsg").html(msg);}
       ,1000);
    
       $('#echo').toggle();
       $("#resultMsg").toggle();
    
          
        });
    
        $('#resultMsg').click(function(){
          $('.img').hide();
          $('#echo').toggle();
          $("#resultMsg").toggle();
          $(".start").show();
          console.log("スタートボタン");
    
      
        })
        catjanken()  
  }
  
    // 音声再生

    function audio() {
      document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
      document.getElementById('btn_audio').play(); //クリックしたら音を再生
  }


      

  

//     setTimeout(function(){
//       console.log("画像を消す")
//       $("cpu_jan").fadeOut();}
//  ,1000);

//     setTimeout(function(){
//       console.log("再スタート")
//       $("#resultMsg").html(msg);}
//  ,2000);
  

  //   setTimeout(function(){
  //       console.log("再スタート")
  //       $("#resultMsg").html(msg);}
  //  ,1000);
    







// $(".choises").click(function(){
//     console.log("クリック！");



// })

  




// 過去の遺産

// $('.choises').click(function(){
//       $('.img').fadeOut('fast');
//       $(".text_echo").show()

//   })


  // $('.a').delay(1000).fadeOut("fast"),
  // $('.b').delay(3000).fadeIn("fast"),
  // $('.b').delay(3000).fadeOut("fast"));


// 10/26 文字の切り替えできた！imgをランダム表示させる方法を調べる
// 10/27 setTimeoutで複数動作を実行できた！エラーは何か見落としがある。when doneは1回しかできなかった


