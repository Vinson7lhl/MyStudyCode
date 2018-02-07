/**
 * 1、组件必须在Vue对象之前声明
 * 2、组件必须在vue对象所在的元素内部
 * 3、vue对象所在的元素不能是body和html元素
 * 
 * 
 * 以下为全局组件
 */
Vue.component("app-item",{
	template:"<p v-on:click='addNum'>全局组件</p>",
	methods:{
		addNum:function(){
			//触发父组件的自定义的lhl事件
			this.$emit("lhl");
	}}
});
Vue.component("app-item2",{
	template:"<div class='app-item2'><slot></slot>全局组件2</div>"
});

Vue.component("app-empty",{
	template:"<div class='app-empty'><slot></slot>全局组件empty</div>"
});


/**
 * 以下为局部组件
 */
 var localComponent={
	 data:function(){
		 return {counter:0};
	 },
	 template:'<p @click="counter+=1">局部组件，父给子的数据是：{{child_message.data1}}-{{child_message.data2}},点击counter值：{{counter}}</p>',
	 props:["child_message"]
 };

/**
 * 以下为初始化根实例
 */
var app=new Vue({
	el:".app",
	data:{
		message:"李红磊",
		father_message:{data1:"data1",data2:"data2"},
		items:[{name:"老大"},{name:"老二"},{name:"老三"}],
		num:0,
		htmls:'<h1>这里是解析html代码输出</h1>',
		texts:'<h1>这里是不解析text代码输出</h1>',
	},
	components:{
		"local-component":localComponent
	},
	methods:{
		lhl_m:function(){
			this.num+=1;
		}
	},
	//生命周期:created-实例被创建之后运行
	created:function(){
		console.log("生命周期钩子-实例被创建后，message:"+this.message);
	}
});
/**
 * 第二个根实例
 */
var root2=new Vue({
	el:".app2",
	data:{
		num:1,
		testArray:[
		{"name":"南帝","age":71},
		{"name":"西毒","age":66},
		{"name":"东邪","age":71},
		{"name":"北丐","age":61}],
		testObj:{
			a:"No1",
			b:"No2",
			c:"No3",
			d:"No4"
		},
		testArray2:['哈哈'],
		count:0,
		input_message:"",
		picked:""

	},
	methods:{

	},
	computed:{
		addNum:{
			get:function(){
				return this.num*2;
			},
			set:function(num){
				this.num=num;
			}
		}
	}
});


/**
 * 第三个根实例
 */
// Vue.component('button-counter-component', {
// 	template:'<button v-on:click="incrementCounter">{{count}}</button>',
// 	data:function(){
// 		return {count:0};
// 	},
// 	methods:{
// 		incrementCounter:function(){
// 			this.count+=1;
// 			this.$emit("increment");
// 		}
// 	}
// });
var root3=new Vue({
	el:"#app3",
	data:{
		total:0,
		checked:[]
	},
	methods:{
		getAllNum:function(data){
			this.total+=1;
			console.log("获取的数据："+data);
		}
	},
	components:{
		"slotComponent":{
			template:'<div class="slotClass">非槽……<slot></slot></div>'
		},
		"buttonCounterComponent":{
			template:'<button v-on:click="incrementCounter">{{count}}</button>',
			data:function(){
				return {count:0};
			},
			methods:{
				incrementCounter:function(){
					this.count+=1;
					this.$emit("increment","fromChildData");
				}
			}
		}
	},
	/**
	 * 从全局看
	 * Vue.directive('focus', {
		inserted: function (el) {
			// 聚焦元素
			el.focus()
		}
		})
	 */
	directives:{
		//指令名-v-foucus
		focus:{
			//el是被绑定的dom，binding
			inserted:function(el,binding){
				el.focus();
			}
		}
	}
});
