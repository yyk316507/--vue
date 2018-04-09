<template>
	<div class = "sect3">
		<div class = "lantern">
			<p>{{newList.title}}</p>
		</div>
		<div class = "options">
			<ul>
				<li v-for = "(l,k) in newList.options"> 
					<span>{{k}}</span>
					<span>{{l}}</span>
					<i :class="{bg2:k==ck}" @click = "toggle({id:k})"></i>
				</li>
			</ul>
			<button @click = "next" class = "next" v-show = "flag1">下一题</button>
			<button @click = "next" class = "next" v-show = "flag2">确认</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				id:"",
				newList:[],
				i:0,
				ck:-1,
				correct:"",
				flag1:true,
				flag2:false

			}
		},
		mounted(){
			this.id = this.$route.query.id
			this.getJson(this.id)
			this.ck = -1
			if(this.$route.query.i){
				this.i = this.$route.query.i
				if(this.i==2){
					this.flag1 = false
 					this.flag2 =true
				}
			}		
		},
		methods:{
			getJson(id){
	 			var that = this
	 			this.$https.get("../../static/data/modules.json").then(function(res){
	 					that.newList = res.data[id].question[that.i]
	 					if(res.data[id].question[that.i].correct){
	 					that.correct = res.data[id].question[that.i].correct
	 					}		
	 			})
	 		},
	 		toggle:function(e){
	 			 this.ck = e.id

	 		},
	 		next(){
	 			var id = this.$route.query.id
	 			this.getJson(id)
	 			if(this.ck==-1){
	 				alert("请选择选项")
	 			}else if(this.correct==this.ck){
	 				if(this.i<=2){
	 					this.i++
	 					this.ck=-1
	 				}
	 				if(this.i==2){
 						this.flag1 = false
 						this.flag2 =true
	 				}
	 				if(this.i==3){
	 					this.i=0
	 					this.$router.push({path:"/success"})

	 				}
	 			}else if(this.correct!=this.ck){
	 				this.$router.push({path:"/error",query:{id:this.id,i:this.i}})
	 			}
	 		}
		}
	}
</script>
<style lang = "scss" scoped>
	.sect3{
		background:url("../../static/assets/bg_2.png");
		background-size:100% 100%;
	}
	.lantern{
		width:137px;
		height:255px;
		background:url("../../static/assets/denglong3.png");
		background-size:100% 100%;
		position:absolute;
		left:50%;
		top:13%;
		margin-left:-68.5px;
		p{	
			position: absolute;
			padding-left:2%;
			top:7%;
			font-size:14px;
			color:#e2b787;
		}
	}
	.options{
		width:100%;
		position: absolute;
		left:10%;
		top:67%;
		box-sizing: border-box;
		color:#e2b787;
		ul{
			width:100%;
			box-sizing: border-box;
			display:flex;
			flex-wrap:wrap;
			li{
				width:100%;
				height: 30px;
				line-height:30px;
				position: relative;
				box-sizing:border-box;
				i{
					width:15px;
					height:15px;
					display:inline-block;
					position: absolute;
					right:30%;
					top:20%;
					background:url("../../static/assets/radio.png") no-repeat;
					background-size:100% 100%;
				}
				i.bg2{
					background:url("../../static/assets/radio_checked.png") no-repeat;
					background-size:100% 100%;
				}
			}
		}
	}
	.next{
		display:inline-block;
		width:80px;
		height:30px;
		font-size:16px;
		line-height:20px;
		border-radius:5px;
		text-align:center;
		background:#e2b787;
		color:#cb1624;
		margin-left:-10px;
		margin-left:27%;
		margin-top:15px;
	}
</style>