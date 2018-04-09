<template>
	<div class="sect2">
	<img src="../../static/assets/txt.png" alt="" class="animated slideInDown spring">
		<router-link tag = "label" to = "/lantern"></router-link>
	<img src="../../static/assets/car.png" alt="" class = "animated zoomIn car">
	</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.spring{
		width:166px;
		height:73px;
		position:absolute;
		left:50%;
		top:30%;
		margin-left:-83px;
	}
	.car{
		width:240x;
		height:41px;
		position:absolute;
		left:50%;
		top:80%;
		margin-left:-120px;
	}
	.sect2{
		background:url(../../static/assets/index1.png);
		background-size:100% 100%;
	}
	label{
		position:absolute;
		width:200px;
		height:50px;
		border:none;
		background:url(../../static/assets/index2.png);
		background-size:100% 100%;
		left:50%;
		top:70%;
		color:#fff;
		border-radius:10px;
		margin-left:-100px;
		margin-top:-25px;

	}
</style>