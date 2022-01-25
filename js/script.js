var flag=0;
setInterval(()=>{
	if(flag==0){
		$("#change").html("Amaan's test :)");
		flag=1;
	}
	else{
		$("#change").html("Amaan's test :(");
		flag=0;
	}
},1000);