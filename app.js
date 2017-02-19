$(document).ready(function(){
	$("#login").click(function(){
		var usr=$("#username").val();
		if(usr.length==0){
			alert("give username")
		}
		
	});

	$("#login").click(function(){
			var pass=$("#pass").val();

		if(pass.length<6){
			alert("weak password");
		}

	});
	$("#rst").click(function(){
		$("#username").val("");
		$("#pass").val("");
	})
	$("#login").click(function(){
		var usr=$("#username").val();
		var pass=$("#pass").val();
		if(usr==pass){
			window.onload=load("href=profile page/index.html");
		}
		else{
			alert("wrong password")
		}

	});



});