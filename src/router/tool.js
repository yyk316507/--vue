import jquery from "jquery"
export default {
	install:function(Vue){
		Object.defineProperty(Vue.prototype,"_$",function(){
			value:jquery
		})
	}
}