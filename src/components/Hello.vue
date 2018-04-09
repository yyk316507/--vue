<template>
  <router-link class = "sect1" to = "/carGift">
      <div class="fireworks1 fireworks animated zoomIn"></div>
      <div class="fireworks2 fireworks animated zoomIn"></div>
      <div class = "firecrackers">
        <img src="../../static/assets/img.png" alt="">
      </div>
      <div class="fireworks3 fireworks animated zoomIn"></div>
      <div class="fireworks4 fireworks animated zoomIn"></div>
      <div class="fireworks5 fireworks animated zoomIn"></div>
  </router-link>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
  .sect1{
    position:relative;
    flex:1;
    width: 100%;
    background: #cb1624;
  }
  .fireworks{
      
      background: url("../../static/assets/star.png") no-repeat;
      background-size:100% 100%;
      background-position:center;
      
    }
    .fireworks1{
      width:40px;
      height:40px;
      animation: change  0.8s alternate infinite;
      position:absolute;
      left:10%;
      top:5%;
    }
    .fireworks2{
      width:50px;
      height:50px;
      animation: change  2.9s alternate infinite;
      position:absolute;
      right:20%;
      top:10%;
    }
    .fireworks3{
      width:60px;
      height:60px;
      animation: change  1s alternate infinite;
      position:absolute;
      right:20%;
      bottom:20%;
    }
    .fireworks4{
      width:50px;
      height:50px;
      animation: change  2s alternate infinite;
      position:absolute;
      left:10%;
      bottom:10%;
    }
    .fireworks5{
      width:70px;
      height:70px;
      animation: change  1.7s alternate infinite;
      position:absolute;
      left:20%;
      bottom:40%;
    }
    .firecrackers{
      width:30px;
      height:85px;
      margin-left:-15px;
      margin-top:-42px;
      position:absolute;
      left:50%;
      top:50%;
      img{
        width: 100%;
        height:100%;
      }

    }
    @-webkit-keyframes change{
      from{ 
        transform:scale(0)
      }
      to{ 
        transform:scale(1.5)
      }
    }
</style>
