// document.querySelector('#register').addEventListener("click",function(){
// 	alert("Registered!");
// })
$('#register').click(function(){
	alert("Registered!");
})


$("#Login").click(function(){
	$(".popup").css("display","flex");
})
$(".close").click(function(){
	$(".popup").css("display","none");
})

$(".to-register").click(function(){
	$(".popup").css("display","none");
	$(".register-popup").css("display","flex");
	return false;
})

$(".back").click(function(){
	$(".register-popup").css("display","none");
	$(".popup").css("display","flex");
	return false;
})

      
