function check1(){
	var name=document.getElementById("first_name");
	var reg1=/^[a-zA-Z\-]+$/; 

	var cn=reg1.test(name.value);

	var lname=document.getElementById("last_name");
	var regl=/^[a-zA-Z\-]+$/; 
	console.log(lname.value);
	if(lname.value!="")
	{
		var cl=regl.test(lname.value);
		if(cl==false)
			document.getElementById("last_name_error").style.display="block";
		else
			document.getElementById("last_name_error").style.display="none";	
	}
	
	console.log(name.value);

	var email=document.getElementById("email");
	var reg2=/^[a-zA-Z0-9.]+@[a-zA-Z.]+\.[a-zA-Z]{2,4}$/;
	var ce=reg2.test(email.value);
	
	console.log(email.value);
	if(cn==true&&ce==true)
	{
		document.getElementById("StepTwoContainer").style.display="block";
		document.getElementById("StepOneContainer").style.display="none";
	}	
	else
	{
		if(cn==false)
			document.getElementById("first_name_error").style.display="block";
		else
			document.getElementById("first_name_error").style.display="none";
		if(ce==false)
			document.getElementById("email_error").style.display="block";
		else
			document.getElementById("email_error").style.display="none";
	}
}

function check2(){
	var num=document.getElementById("contact");
	var reg3=/^(\+91)|(0)|(91)?[\d]{10}$/g;
	var cn=reg3.test(num.value);

	var lc=document.getElementById("city");
	var regc=/^[a-zA-Z\-]+$/; 
	console.log(lc.value);
	if(lc.value!="")
	{
		var lcc=regc.test(lc.value);
		if(lcc==false)
			document.getElementById("city_error").style.display="block";
		else
			document.getElementById("city_error").style.display="none";	
	}	


	var c=document.getElementById("country");
	var reg4=/^[a-zA-Z\-]+$/;
	var cc=reg4.test(c.value);
	console.log(email.value);
	if(cn==true&&cc==true)
	{
		document.getElementById("StepThreeContainer").style.display="block";
		document.getElementById("StepTwoContainer").style.display="none";
	}	
	else
	{
		if(cn==false)
			document.getElementById("contact_error").style.display="block";
		else
			document.getElementById("contact_error").style.display="none";
		if(cc==false)
			document.getElementById("country_error").style.display="block";
		else
			document.getElementById("country_error").style.display="none";
	}
} 





function check3(){
	var s=document.getElementById("select_program");
	if(s.value=="")
		document.getElementById("select_program_error").style.display="block";
	else
		document.getElementById("select_program_error").style.display="none";
	var t=document.getElementById("message");
	console.log(t);
	if(t.value=="")
		document.getElementById("message_error").style.display="block";
	else
		document.getElementById("message_error").style.display="none";
	if(s.value!=""&&t.value!="")
	{
		document.getElementById("SuccessContainer").style.display="block";
		document.getElementById("MultiStepForm").style.display="none";     
	}      
} 









var next1=document.getElementById("StepOneNext");
next1.addEventListener("click",function(e){
	e.preventDefault();
	check1();
});
	
var next2=document.getElementById("StepTwoNext");
next2.addEventListener("click",function(e){
	e.preventDefault();
	check2();
});

var prev1=document.getElementById("StepTwoPrevious");
prev1.addEventListener("click",function(e){
	e.preventDefault();
	document.getElementById("StepTwoContainer").style.display="none";
	document.getElementById("StepOneContainer").style.display="block";
});

var next3=document.getElementById("StepThreeSubmit");
next3.addEventListener("click",function(e){
	e.preventDefault();
	check3();
});

var prev2=document.getElementById("StepThreePrevious");
prev2.addEventListener("click",function(e){
	e.preventDefault();
	document.getElementById("StepThreeContainer").style.display="none";
	document.getElementById("StepTwoContainer").style.display="block";
});