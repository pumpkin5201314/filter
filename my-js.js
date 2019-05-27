 //深度克隆
	// 	var A={
	// 		name:"www",
	// 		age:13,
	// 		sex:"nv",
	// 		son:{
	// 			name:"hhh",
	// 			sex:"boy",
	// 			sonson:{
	// 				name:"nnn"
	// 			}
	// 		}
	// 	}
	// 	// A=['sss',1,4,"dhhw",[6,6,6,8]]
	 function clone(Origin,Target){

		 	
		 	if(Object.prototype.toString.call(Origin)=="[object Object]")
		 	{
		 		var Target=Target||{};
		 	}else if(Object.prototype.toString.call(Origin)=="[object Array]"){
		 		var Target=Target||[];
		 	}


		    for(var prop in Origin){
		 		if(Origin.hasOwnProperty(prop)){
				 		var a=Object.prototype.toString.call(Origin[prop]);

				 		if(a=="[object Array]" ){
				 			Target[prop]=[];
				 			clone(Origin[prop],Target[prop]);

				 		}else if(a=="[object Object]"){
				 			Target[prop]={};
				 			clone(Origin[prop],Target[prop]);


				 		}else{
				 			Target[prop]=Origin[prop];
				 		}
				 		


				}

				 		
			}
			return Target;
		 		
	}
		 
	// 	 var B=clone(A);





//封装type
		// function type(a){

		// 	if(a===null){
		// 		return "null";

		// 	}else if(typeof(a)=='object'){
		// 		//数组，对象，包装类---》"object"
		// 		if(Object.prototype.toString.call(a)=="[object Array]"){
		// 			return "Array";
		// 		}
		// 		else if(Object.prototype.toString.call(a)=="[object Object]"){
		// 			return "Object";
		// 		}else if(Object.prototype.toString.call(a)=="[object Number]"){
		// 			return "object-Number";
		// 		}else if(Object.prototype.toString.call(a)=="[object String]"){
		// 			return "object-String";
		// 		}else if(Object.prototype.toString.call(a)=="[object Boolean]"){
		// 			return "object-Boolean";
		// 		}
				

		// 	}else{
		// 		return typeof(a);//number, String, function ,undefined ,boolean
		// 	}



		// } 



//继承--圣杯模式
	// var inherit=(function(){
	// 		function F(){}
	// 		return function(Origin,Target){
	// 			F.prototype=Origin.prototype;
	// 			Target.prototype=new F();
	// 			Target.prototype.constructor=Target;
	// 			Target.prototype.uber=Origin.prototype;
	// 		}
	// })();


//数组去重
	// Array.prototype.unique=function(){
	// 			var newArray=[];
	// 			var object={};
	// 			var array=this;
	// 			for(var i=0;i<array.length;i++)
	// 			{
	// 				if(!object[array[i]]){
	// 					object[array[i]]="aaa";
	// 					newArray.push(array[i]);
	// 				}

	// 			}
	// 			return newArray;
 // 		}


//字符串去重
 	// String.prototype.unique=function(){
		// 		var newString='';
		// 		var object={};
		// 		var string=this;
		// 		for(var i=0;i<string.length;i++)
		// 		{
		// 			if(!object[string[i]]){
		// 				object[string[i]]="aaa";
		// 				newString+=string[i];
						 
		// 			}

		// 		}
		// 		return newString;
 	// 	}

//找出字符串中第一次只出现一次的字母----不对
   // String.prototype.firstOnece=function(){
 			
 		// 	var len=this.length;
 		// 	for(var i=0;i<len;i++){
 		// 		var flag=1;
 		// 		for(var j=0;j<len;j++){
 		// 			if(i==j){
 						 
 		// 				continue;
 		// 			}
 		// 			else{
 						 
 		// 				if(this[i]==this[j]){
 		// 				flag=0;
 					 
 		// 				break;
 					
 		// 				}
 		// 			}
 		// 		}

 					
	
 		// 		if(flag==1){
 				 
 		// 			return this[i];
 		// 		}
 				
 		// 	}

 		// }

 		// var a="aabacbhyayic"
 		// var b=a.firstOnece();

//遍历元素节点树（在原型链上编程）


 	// <div>
 	// 	<div>
 	// 		<span>
 	// 			<a href="" title=""></a>
 	// 		</span>
 	// 	</div>
 	// 	 <span></span>
 	// </div>
 	// <div>
 	// 	<div>
 	// 		<div>
 	// 			<span></span>
 	// 		</div>
 	// 	</div>
 	// </div>
	// var div=document.getElementsByTagName("div")
 // 	var a=[];
 // 	 HTMLElement.prototype.allElements=function(){
 	 	
 // 	 	var dom=this
 // 	 	for(var i=0;i<dom.children.length;i++){
 // 	 		a.push(dom.children[i])
 // 	 		if(dom.children[i].hasChildNodes()){
 // 	 			// console.log(this.children[i].children[i])

 // 	 			 dom.children[i].allElements();
 // 	 		}
 	 		 
 	 		 
 // 	 	}
	//    return a;

	// }


//封装元函数返回元素e的第n层祖先元素节点
	

		// <div>
	 // 		<div >
	 // 			<span>
	 // 				<a href="" title=""></a>
	 // 			</span>
	 // 		</div>
	 // 	</div>

	//  var a=document.getElementsByTagName('a')[0]
	// function retParent(elem,n){
	 
	 	
	//  	while(n&&elem){
	//  	  elem=elem.parentElement
	//  	  n--

	//  	}
	//  return elem;

	// }


//封装函数，返回元素e的第n个兄弟元素节点，n为正返回后面的，负返回前面的为0 返回自己
	
// 	var span=document.getElementsByClassName("t")[0]
// function retSibling(e,n){
// 	while(n&&e){

// 		if(n>0){
// 		 		if(e.nextElementSibling){
// 		 			e=e.nextElementSibling
// 		 		}else{
		 		 
// 					do{
// 						 e=e.nextSibling
// 						}while(e&&e.nodeType!=1)
			 	
// 		 		}
				
			 
// 			     n--
// 		}else{
// 			if(e.previousElementSibling ){
// 				e=e.previousElementSibling 
// 			}else{
				 
// 			       do{
// 						 e=e.previousSibling
// 						}while(e&&e.nodeType!=1)
			 	
		 		
				
		 
// 			 }
		 
// 			n++
// 		}
// 	}
// 	return e
// }

//封装children


	//  var div=document.getElementsByTagName("div")[0]

	// Element.prototype.myChildren=function(){
	// 	var childNodes=this.childNodes;
	// 	var a=[]
	// 	for(var i=0;i<childNodes.length;i++){
	// 		if(childNodes[i].nodeType==1){
	// 			a.push(childNodes[i])
	// 		}
	// 	}


	// 	return a 
	// }




//封装hasChildren方法

		//  var div=document.getElementsByTagName("div")[0]

		// Element.prototype.hadChildren=function(){
		// 	var childNodes=this.childNodes;
		// 	for(var i=0;i<childNodes.length;i++){
		// 		if(childNodes[i].nodeType==1){
		// 			return true;
		// 		} 
					
				 
		// 	}
		// 	return false;
		 

		// }



//封装函数insertAfter()
			// Element.prototype.insertAfter=function(target,afterNode){
			// 	if(!afterNode.nextElementSibling){
			// 		this.appendChild(target)
			// 	}else{
			// 		var beforeNode=afterNode.nextElementSibling;
			// 		this.insertBefore(target,beforeNode)
			// 	}
			// }


//将目标节点内部的节点逆序
	
 	  // <div>
	 	 //  	<a href=""></a>
	 	 //  	<em></em>
	 	 //  	<div></div>
	 	 //  	<p></p>
 	  // </div>

		// var div=document.getElementsByTagName('div')[0]


	// Element.prototype.reverseNode=function(){
	// 			for(var i=this.children.length-2;i>=0;i--){
	// 				this.appendChild(this.children[i])

	// 	        }
	// 	        return this;
	// 	    }


//封装函数，打印当前是何年何月何日何时何分何秒
		 // var retMyDate=function(){
		 //    var date=new Date()
		 //    var year=date.getFullYear();
		 //    var month=date.getMonth()+1;
		 //    var day=date.getDate();
		 //    var hour=date.getHours()
		 //    var Mi=date.getMinutes()
		 //    var se=date.getSeconds()
		 
		 //    console.log("今天是"+year+"年"+month+"月"+day+"日"+hour+"时"+Mi+"分"+se+"秒")
		    
		 // }


//封装兼容性滚动条滚动距离
		//  var getScrollOffset=function(){
		// 	if(window.pageXOffset){
		// 		return{
		// 			x:window.pageXOffset,
		// 			y:window.pageYOffset
		// 		}
		// 	}else{
		// 		return{
		// 			x:document.body.scrollLeft+document.documentElement.scrollLeft,
		// 			y:document.body.scrollTop+document.documentElement.scrollTop
		// 		}
		// 	}
		// }

//封装可视窗口尺寸  getViewportOffset
		//  function getViewportOffset(){
		//  	if(window.innerWidth){
		//  		return{
		//  			w:window.innerWidth,
		//  			h:window.innerHeight
		//  		}
		//  	}else{
		//  		if(document.compatMode=="backCompat"){
		//  			return{
		//  				w:document.body.clientWidth,
		//  				h:document.body.clientHeigt
		//  			}
		//  		}else{ return{ 
		//  				w:document.documentElement.clientWidth,
		//  				h:document.documentElement.clientHeigt
		//  			}
		//  			}
		//  	}
		// }


//封装兼容性方法getStyle(elem,prop)获取元素的css属性

// Element.prototype.getStyle=function(prop){
// 			if(window.getComputedStyle){
// 				return window.getComputedStyle(this,null)[prop]
// 			}else{
// 				return this.currentStyle[prop];
// 			}
// }



//封装事件处理函数
	// function addEvent(elem,type,handle){
	// 	if(elem.addEventListener){
	// 		elem.addEventListener(type,handle,false)
	// 	}else if(elem.attachEvent){
	// 		elem.attachEvent('on'+type,function(){
	// 			handle.call(elem)
	// 		})
	// 	}else{
	// 		elem['on'+type]=handle
	// 	}
	// }

//封装取消冒泡的函数
		// function stopBubble(event){
		// 		if(event.stopPropagation){
		// 			event.stopPropagation();
		// 		}else{
		// 			event.cancelBubble=true;
		// 		}
		// }


//封装阻止默认事件的函数
		// function cancelHandler(event){
		// 	if(event.preventDefault){
		// 		event.preventDefault();
		// 	}else{
		// 		event.returnValue=false;
		// 	}
		// }
//解除事件绑定
			 // function removeEvent(elem,type,handler){
				// 	 	if(elem.removeEventListener){
				// 	 		elem.removeEventListener(type,handler,false)
				// 	 	}else if(elem.detachEvent){
				// 	 		elem.detachEvent('on'+type,handler);

				// 	 	}else{
				// 	 		elem['on'+type]=null;
				// 	 	}
				// 	 }


//封装拖拽事件
			// function drag(elem){
		 // 		var disX,disY;
		 // 		addEvent(elem,"mousedown",function(){
		 // 			var event=e||window.event;
		 // 			disX=event.clientX-parseInt(elem.getStyle("left"));
			// 	    disY=event.clientY-parseInt(elem.getStyle("top"));
		 // 			addEvent(document,"mouseMove",mouseMove);
		 // 			addEvent(document,"mouseUp",mouseUp);
		 // 			stopBubble(event);
		 // 			cancelHandler(event);
		 // 		});
		 // 		function mouseMove(e){
		 // 			var event=e||window.event;
		 // 			elem.sttyle.left=event.clientX-disX+"px";
		 // 			elem.sttyle.top=event.clientY-disY+"px";

		 // 		}
		 // 		function mouseUp(e){
		 // 			var event=e||window.event;
		 // 			removeEvent(document,"mouseMove",mouseMove);
		 // 			removeEvent(document,"mouseUp",mouseUp);
		 // 		}
		 // 	}


//封装异步加载js函数
// function loadScript(url,callback){
// 	var script=document.createElement("script");
// 	script.type="text/javascript";
// 	if(script.readyState){
// 		script.onreadstatechange=function(){
// 			if(script.readyState=="complete"||script.readyState=="loaded"){
// 				callback();//执行加载的js中的函数---按需加载-执行
// 			}
// 		}
// 	}else{
// 		script.onload=function(){
// 			callback();//执行加载的js中的函数---按需加载-执行
// 		}
// 	}

// 	script.src=url;//位置很重要
// 	document.head.appendChild(script);
// }


//注意使用时的传参方法---
//loadScript('xxxxx'),function(){test()}    因为调用时test()还没加载




//原生js匀速运动
	// var div=document.getElementsByTagName("div")[0]
 // 		var btn=document.getElementsByTagName("button")[0]
 // 		function startMove(dom,target,speed){//目标元素，目标点(数字)，速度

 // 		        var speed=(target-dom.offsetLeft)>0?speed:-speed;

	//  			var flag=true;
	//  			btn.onclick=function(){
	//  			if(flag){
	//  				flag=false;

	// 	 			var timer=setInterval(function(){
		 			
	// 	 			  if(Math.abs(target-dom.offsetLeft)<=Math.abs(speed )){
	// 	 				 	clearInterval(timer)
	//  			      		dom.style.left=target+"px";
	//  					}else{
	//  						 dom.style.left=dom.offsetLeft+speed+"px";

	//  					}
	// 	 			},30)
	//  			}
	 			
 // 		}

 // 		}
 		

 // 		startMove(div,600,8);




 //缓冲运动
 	// function startMove(dom,target){//目标元素，目标点(数字)    缓冲运动
 	// 	      	    var speed;
	 			 
	 // 			 	clearInterval(timer);
	 				 
		//  			var timer=setInterval(function(){
		 					 
		//  				speed=(target-dom.offsetLeft)/6  ;
		//  				speed=speed>0?Math.ceil(speed):Math.floor(speed)

		//  			  if(dom.offsetLeft==target){
		//  				 	clearInterval(timer)
	 // 					}else{
	 // 						 dom.style.left=dom.offsetLeft+speed+"px";
	 						 
	 						
	 // 					}
		//  			},30)
	 			 
	 			
 	// 	}

 	//  