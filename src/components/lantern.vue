<template>
	<div class="sect2">
		<div class="lantern">
			<p>猜灯谜</p>
			<p>游戏</p>
		</div>
		<div class="select">
			<p>选择灯谜</p>
			<ul>
				<li v-for = "(v,k) in name">
					<img src="../../static/assets/denglong2.png" alt="" >
					<span>{{v.name}}</span>
					<i :class="{bg2:k==ck}" @click = "toggle({id:k})"></i>
				</li>
			</ul>
			<button class = "begin" @click = "go()">开始游戏</button>
		</div>
	</div>
</template>
<script>
	 export default {
	 	data(){
	 		return{
	 			name:null,
	 			ck:-1
	 		}
	 	},
	 	mounted(){
	 		this.getJson()
	 	},
	 	methods:{
	 		getJson(){
	 			var that = this
	 			this.$https.get("../../static/data/modules.json").then(function(res){
	 					that.name = res.data
	 			})
	 		},
	 		toggle:function(e){
	 			 this.ck = e.id
	 		},
	 		go:function(){
	 			if(this.ck==-1){
	 				alert("请选择车型！")
	 			}else{
	 				this.$router.push({path:"/game",query:{id:this.ck}})
	 			}
	 		}
	 	}
	 }
</script>
<style lang = "scss">
	.sect2{
		position:relative;
		background:url("../../static/assets/bg.png");
		background-size:100% 100%;
	}
	.lantern{
		width:96px;
		height:170px;
		text-align:center;
		background:url("../../static/assets/denglong.png");
		background-size:100% 100%;
		position:absolute;
		right:8%;
		top:3%;
		p{
			color:#e2b787;
			font-size:15px;
		};
		p:nth-child(1){
			margin-top:68%;
			
		};
	}
	.select{
		margin-top:52%;
		padding-left:0.3rem;
		padding-right:0.3rem;
		box-sizing:border-box;
		color:#e2b787;
		&>p{
			font-size:14px;
		}
		ul{
			display:flex;
			flex-wrap: wrap;
			border:1px solid #e2b787;
			border-bottom:none;
			li{
				width: 50%;
				padding-left:6px;
				line-height:30px;
				box-sizing: border-box;
				border-bottom:1px solid #e2b787;
				border-right:none;
				font-size:16px;
				position: relative;
				img{
					width:15px;
					height:15px;
				}
			
			}
		}
		i{
			width:15px;
			height:15px;
			display:inline-block;
			position: absolute;
			background:url("../../static/assets/radio.png") no-repeat;
			background-size:100% 100%;
			right:20px;
			top:6px;
		}
		i.bg2{
			background:url("../../static/assets/radio_checked.png") no-repeat;
			background-size:100% 100%;
		}

	}
	.begin{
		display:inline-block;
		width:80px;
		height:20px;
		font-size:16px;
		line-height:20px;
		border-radius:5px;
		text-align:center;
		background:#e2b787;
		color:#cb1624;
		margin-left:-10px;
		margin-left:33%;
		margin-top:26px;
	}
</style>