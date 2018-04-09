<template>
    <div class="app">
    <header class = "header">  
          <img src="../static/assets/logo.png" alt="">
    </header>
    <div class="audio">
        <label @click = "change"></label>
        <audio id="audio1" width="420" loop = "loop">
          <source src="http://play.baidu.com/data/user/info?_=1497680876020" type="audio/mp3" />
    </audio>
      </div>
      <router-view class = "section"></router-view> 
    </div>   
</template>

<script>
export default {
     mounted(){
        var myAudio = document.getElementById('audio1');
        myAudio.play()
    },
    methods:{
      change(){
        this.playPause()
      },
      playPause(){
          var myAudio = document.getElementById('audio1');
          if(myAudio.paused){
              myAudio.play();
          }else if(myAudio.play){
              myAudio.pause();
          }else{
            audio.currentTime = 0
            audio.play()
          }
      }
    }
}
</script>

<style  lang = "scss" scoped>
  .app{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    display:flex;
    flex-direction: column;
    font-size:12px;
    header{
      width: 100%;
      height:50px;
      img{
        width:100%;
      }
    }
  }
  .section{
    flex:1;
    width: 100%;
  }
  label{
      display:inline-block;
      position: absolute;
      z-index:1000;
      left:0px;
      top:60px;
      width:35px;
      height:35px;
      background:url("../static/assets/music.png");
      background-size:100% 100%; 
      animation: dh  1.7s linear infinite;
    }
@-webkit-keyframes dh{
  0%{
  -webkit-transform:rotate(0deg);
  }
  100%{
  -webkit-transform:rotate(360deg)
  }
}
</style>
