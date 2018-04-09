<template>
<div class = "sect3">
		<div class="borders">
			<div class = "content">
				<p>{{newList.name}}</p>
				<div class = "product">
					<dl v-for = "(l,k) in newList.product"  :class="{bg2:k==ck}" @click = "toggle({id:k})">
						<dt>
							<img :src="l.src" alt="">
						</dt>
						<dd>
							<p>{{l.proname}}</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div class="select">
			<p>选中其中一款产品</p>
			<p>请您在购车后，</p>
			<p>到购车经销商店领取奖品</p>
			<button @click = "next" class = "next">领取奖品</button>
		</div>
</div>
	
</template>
<script>
	export default{
		data(){
			return{
				newList:[],
				ck:-1
			}
		},
		mounted(){
			var id = this.$route.query.id
			this.getJson(id)
			console.log(this.$route.query.id)
		},
		methods:{
			getJson(id){
				var that = this
				this.$https.get("../../static/data/joy.json").then(function(res){
					that.newList = res.data[id]
					console.log(that.newList)
				})
			},
			toggle:function(e){
	 			 this.ck = e.id

	 		},
	 		next(){
	 			if(this.ck==-1){
	 				alert("请选择奖品!")
	 			}else{
	 				alert(this.ck)
	 			}
	 		}
		}
	}
</script>
<style lang=  "scss" scoped>
.bg2{
	border:1px solid yellow;
}
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
	.content{
		width:100%;
		&>p{
			line-height:40px;
			font-size:20px;
			text-align:center;
			color:#e2b787;
		}
		.product{
			margin-top:10px;
			display: flex;
			dl{
				flex:1;
				box-sizing: border-box;
				text-align:center;
				dt{
					width:70%;
					margin:0 auto;
					img{
						width:100%;
						height:100%;
					}
				}
				dd{
					color:#e2b787;
				}
			}
		}
	}
	.select{
		width:200px;
		position:absolute;
		left:50%;
		top:15%;
		margin-left:-100px;
		text-align:center;
		p{
			font-size:14px;
			color:#e2b787;
		}
		p:nth-child(1){
			font-size:16px;
			color:#e2b787;
		};
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
		margin-left:7%;
		margin-top:15px;
	}
</style>