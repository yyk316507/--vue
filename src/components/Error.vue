<template>
	<div class = "sect3">
		<div class = "lantern">
			<div>
				<p>很遗憾,</p>
				<p>您没有答对......</p>
			</div>
		</div>
		<div class = "options">
			<button @click = "next" class = "next">重新答题</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				id:0,
				i:0
			}
		},
		mounted(){
			this.id = this.$route.query.id
			this.i = this.$route.query.i
		},
		methods:{
			next(){
				this.$router.push({path:"/game",query:{id:this.id,i:this.i}})
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
		text-align:center;
		margin-left:-68.5px;
		&>div{
			margin-top:90%;
			p{
				color:#e2b787;
				font-size:16px;
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
		position: absolute;
		background:#e2b787;
		color:#cb1624;
		margin-left:-40px;
		left:50%;
		margin-top:100%;
	}
</style>
