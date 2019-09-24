





var httpRequest=new XMLHttpRequest();
httpRequest.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/quiz',true);
httpRequest.send();

httpRequest.onreadystatechange=function(){
	if(this.readyState===4)
	{
		if(this.status===200)
		{
			console.log("call is Successful")
			var obj=JSON.parse(this.responseText);
			check(obj);
		}
	}
}




var ans=window.location.href.split("?");
if(ans.length>1)
{
	ans=ans[1].split("&");
}
var score=0;
function check(obj)
{
	if(ans!=undefined)	
	if(ans.length==5)
	{
		for(var i=0;i<5;i++)
		{
			if(obj[i].answer==ans[i].split("=")[1])
			{
				score=score+1;
			}
		}
		var result=document.getElementById('result');
		result.innerHTML=score+"/5";
		$('#modal-wrapper').css('display','block');
	}
}