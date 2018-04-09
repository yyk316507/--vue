<template>
	<div class = "sect3">
		<div class="borders">
			<div class = "festival">
				<p>新春大众</p>
				<p>摇一摇</p>
				<img src="../../static/assets/yao.png" alt="" @click = "vibrate()" id = "img">
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			vibrate:function(){
				var that = this
				var img = document.getElementById('img');
					img.setAttribute("class","img")
					img.addEventListener("animationend",function(){
						img.setAttribute("class","")
					})
				var rand = Math.floor(Math.random()*3+0)
				console.log(rand)
				setTimeout(function(){
					that.$router.push({path:"/joy",query:{id:rand}})
				},500)
			}
			
		},
		created(){
				// 判断手机是否运动支持传感器
            if (window.DeviceMotionEvent) {
                var speed = 25;     // 定义默认加速度，达到这个速度才执行摇一摇
                // x,y 表示当前的左边，
                // lastX,lastY 表示摇一摇后最后停留的坐标
                var x = 0,
                    y = 0,
                    z = 0,
                    lastX = 0,
                    lastY = 0,
                    lastZ = 0;
                    var that = this
                // 监听设备运动事件
                window.addEventListener('devicemotion', function () {
                    var acceleration = event.accelerationIncludingGravity;  // 获取设备的加速度
                    x = acceleration.x;     // 获取加速度的x轴，用于计算水平水平加速度
                    y = acceleration.y;     // 获取加速度的y轴，用于计算垂直方向的加速度，同时计算正玄值
                    // 计算当前的加速度是否大于默认加速度
                    if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
                        // 摇一摇 奖励
                        
						var img = document.getElementById('img');
							img.setAttribute("class","img")
							img.addEventListener("animationend",function(){
								img.setAttribute("class","")
							})
						var rand = Math.floor(Math.random()*3+0)
						setTimeout(function(){
							that.$router.push({path:"/joy",query:{id:rand}})
						},500)
                    }
                    // 重新记录最后一次值，作为下一次开始坐标
                    lastX = x;
                    lastY = y;
                }, false);
            }
			}
	}

</script>
<style lang = "scss">
	.sect3{
		width:100%;
		background-color:#cb1624;
		position:relative;
	}
	.borders{
		width:90%;
		height:90%;
		position:absolute;
		left:5%;
		top:5%;
		background-image:url("../../static/assets/bian.png");
		background-size:100% 100%;	
	}	
	.festival{
		width:100px;
		position:absolute;
		height:100px;
		left:50%;
		top:50%;
		margin-left:-50px;
		margin-top:-100px;
		p{
			width:100%;
			text-align:center;
			font-size:20px;
			color:#e2b787;
		}
		img{
			display:inline-block;
			margin-top:10%;
			width:85px;
			height:85px;
		}
	}
	.img{
			animation: shock .5s;
		}
		@keyframes shock{
			0%{
				transform: translate(5px);
			}
			20%{
				transform: translate(-10px) rotate(10deg);
			}
			40%{
				transform: translate(20px) rotate(-20deg);
			}
			60%{
				transform: translate(-10px) rotate(10deg);
			}
			80%{
				transform: translate(20px) rotate(-20deg);
			}
			100%{
				transform: translate(-5px) rotate(10deg);
			}
		}
</style>