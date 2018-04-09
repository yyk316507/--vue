<template>
	<div class = "sect3">
		<div class = "lantern">
			<p>购车有礼</p>
		</div>
		<div class="info">
			<ul>
				<li><span>姓名</span> <input type="text" v-model = "xm"></li>
				<li><span>性别</span> <input type="text" v-model = "xb"></li>
				<li><span>电话</span> <input type="text" v-model = "dh" ></li>
				<li><span>身份证</span> <input type="text" v-model = "sfz" ></li>
				<li><span>日期</span> <input type="text" v-model = "rq"></li>
				<li><span>车型</span> <input type="text" v-model = "cx"></li>
				<li><span>经销商店</span> <input type="text" v-model = "jxsd"></li>
			</ul>
			<div class = "su">
				<button @click = "sure" class = "next">确认提交</button>
			</div>
		</div>
	</div>
</template>

<script>
  export default{
		data(){
			return {
				xm:"",
				xb:"",
				dh:"",
				sfz:"",
				rq:"",
				cx:"",
				jxsd:""
			}
		},
		methods: {
      sure() {
        var reg1 = /^1[3|4|6|7]\d{9}$/
        var reg2 = /^[1-9]\d{16}[0-9x]$/
//				if(this.xm==""){
//					alert("请输入姓名")
//
//				}else {
//          if (this.xb == "") {
//            alert("请输入性别")
//          } else {
//            if (this.dh == "") {
//              alert("请输入电话号码")
//            } else if (!reg1.test(this.dh)) {
//              alert("电话号码输入格式有误!")
//            } else {
//              if (this.sfz == "") {
//                alert("请输入身份证")
//              } else if (!reg2.test(this.sfz)) {
//                alert("身份证格式输入有误!")
//              } else {
//                if (this.rq == "") {
//                  alert("请输入购车日期")
//                } else {
//                  if (this.cx == "") {
//                    alert("请输入购车车型")
//                  } else {
//                    if (this.jxsd == "") {
//                      alert("请输入商店名")
//                    } else {
											var that = this
////											that.$https({
////							                    url: '/api/sel',
////							                    method: 'post',
////							                    data:{
////							                    	name:that.xm,
////							                    	sex:that.xb,
////							                    	phone:that.dh,
////							                    	IDs:that.sfz,
////							                    	data:that.rq,
////							                    	module:that.mx,
////							                    	shopping:that.jxsd
////							                    },
////							                    transformRequest: [function (data) {
////							                        // Do whatever you want to transform the data
////							                        let ret = ''
////							                        for (let it in data) {
////							                          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
////							                        }
////							                        return ret
////							                    }],
////							                    headers: {
////							                        'Content-Type': 'application/x-www-form-urlencoded'
////							                    }
////							                }).then(function(res){
////							                	if(res.data.code==1){
						                		that.$router.push({path:"/luck"})
////							                	}else{
////							                		alert("输入信息有误！")
////							                	}
////
////							                }).catch(function(err){
////							                    console.log(err)
////							                })
////										}
////									}
////								}
////                    }
////                  }
////                }
////              }
//            }
      }
    }
  }

</script>
<style lang = "scss" scoped>
	.sect3{
		background:url("../../static/assets/bg_3.png");
		background-size:100% 100%;
	}
	.lantern{
		width:82px;
		height:153px;
		background:url("../../static/assets/denglong.png");
		background-size:100% 100%;
		position:absolute;
		right:10%;
		top:13%;
		margin-left:-68.5px;
		p{
			position: absolute;
			padding-left:10%;
			top:5%;
			font-size:16px;
			color:#e2b787;
		}
	}

	.info{
		width:240px;
		height: 200px;
		position: absolute;
		left:50%;
		top:62%;
		z-index:2000;
		color:#e2b787;
		margin-left:-120px;
		margin-top:-100px;
		ul{
			width:100%;
			display:flex;
			flex-wrap:wrap;
			border:1px solid #e2b787;
			border-bottom: none;
			li{
				line-height:25px;
				padding-left:10px;
				width:50%;
				display:flex;
				box-sizing: border-box;
				border-bottom:1px solid #e2b787;
				span{
					display:inline-block;
					width:40px;
					height:25px;
					line-height:25px;
				}
				input{
					border:none;
					width:80px;
					background:#cb1624;
					color:#fff;
				}
			}
			li:last-child{
				width:100%;
				span{
					display:inline-block;
					width:120px;
					height:25px;
					line-height:25px;
				}
				input{
					border:none;
					width:160px;
					background:#cb1624;
					color:#fff;
				}
			}
			li:nth-child(4){
				width:50%;
				span{
					display:inline-block;
					width:60px;
					height:25px;
					line-height:25px;
				}
				input{
					border:none;
					width:70px;
					background:#cb1624;
					color:#fff;
				}
			}
		}
	}
	.su{
		width:240px;
		height:30px;
		border:1px solid #e2b787;
		border-top:none;
	}
	.next{
		display:inline-block;
		width:70px;
		height:20px;
		font-size:12px;
		line-height:20px;
		border-radius:5px;
		text-align:center;
		background:#e2b787;
		color:#cb1624;
		margin-left:35%;
		margin-top:5px;
	}
</style>
