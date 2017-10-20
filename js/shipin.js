Vue.prototype.$http=axios;
var num=localStorage.getItem("yy")-1;
console.log(num);
		new Vue({
			el:'#box',
			data:{
				items:[
				
				]
			},
			created(){
				this.ready();
				//让其打开页面就能够加载
			},
			methods:{
				ready(){
				_this=this
				 axios.get('./js/houtai.js')
				.then(function(res){
					_this.items=res.data;
					console.log(_this.items)
					
					
					
				})
			}
			}
		})