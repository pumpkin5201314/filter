var personArr = [
    {name: '小王', src: './img/3.png', des: '大家好我是小王', sex: 'm', age: 18}, 
    {name: '小刘', src: './img/5.png',des: '大家好我是小刘', sex: 'f', age: 23}, 
    {name: '小张', src: './img/4.png', des: '大家好我是小张', sex: 'f', age: 25}, 
    {name: '小嘉', src: './img/1.png', des: '大家好我是小贾', sex: 'm', age: 15}, 
    {name: '小飞', src: './img/2.png', des: '大家好我是小飞', sex: 'm', age: 20},
     {name: '小磊', src: './img/1.png', des: '大家好我是小磊', sex: 'm', age: 15}, 
    {name: '小李', src: './img/2.png', des: '大家好我是小李', sex: 'm', age: 20}
];

//数据渲染
	var oInput=document.getElementsByTagName("input")[0];

	var oUl=document.getElementsByTagName("ul")[0];
	var filterText="";
	var filterSex="a";

	function RanderPage(data){
		//遍历
		var htmlStr="";//字符串拼接比creatElement效率更高
		oUl.innerHTML="";
		data.forEach(function(ele,index){
			htmlStr+='<li>\
					<img src="'+ele.src+' " alt="">\
					 <p class="name">'+ele.name+'</p>\
					 <p class="des">'+ele.des+'</p>\
				</li>'
		})

		oUl.innerHTML=htmlStr;
	}

	RanderPage(personArr);





	//添加行为  
	oInput.oninput=debounce(handle,1000)//防抖
	  

	function handle(){//找到输入的数据(数据过滤)--》渲染   
		 filterText=this.value;
		 var newArr1=filterArryByText(personArr,this.value);
		 console.log(newArr1);
		 console.log(filterText);

		 // console.log(filterArryBySex(newArr1,filterSex))
		 RanderPage(filterArryBySex(newArr1,filterSex))
	}





	function filterArryByText(data,text){
     //根据文本过滤数组  纯函数 
	     if(!text){
	     	return data;
	    	 }
	     else{
	     	var newData=data.filter(function(ele,index){
		      // console.log(ele.name)

	     		 
	     			return ele.name.indexOf(text)!=-1;

	     		 
	     	})
		      // console.log(newData)

	     	return newData;
	     }

	}


		//根据性别过滤
		function filterArryBySex(data,sex){
			if(sex=="a"){
				return data;
			}else if(sex=='m'){
				return data.filter(function(ele,index){
					return ele.sex=="m" 
				})

			}else if(sex=='f'){
				return data.filter(function(ele,index){
					return ele.sex=="f" 
				})

			}

		}	





	//防抖
		function debounce(handle,delay){
				var timer=null;
				clearTimeout(timer);
				return function(e){
				    var _self=this;
				    var _arg=arguments;
					timer=setTimeout(function(){
						handle.apply(_self,_arg)
					},delay)
				}
			}


//btn style
var oBtnArr=[].slice.call(document.getElementsByClassName("btn"),0);
// console.log(oBtnArr)
var lastActiveBtn=oBtnArr[2];

	oBtnArr.forEach(function(ele,index){
		ele.onclick=function(){

			changeActive(this);
			filterSex=this.getAttribute('sex');
			var newArr2=filterArryBySex(personArr,this.getAttribute('sex'))
		       // console.log(newArr2)
		       // console.log(filterText)

		       // console.log(filterArryByText(newArr2,filterText))

			RanderPage(filterArryByText(newArr2,filterText))
		}
	})

function changeActive(dom){
	lastActiveBtn.className="btn";
	dom.className="btn active";
	lastActiveBtn=dom;

}