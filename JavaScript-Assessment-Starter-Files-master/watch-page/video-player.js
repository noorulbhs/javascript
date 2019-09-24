


var httpRequest=new XMLHttpRequest();

var player=document.getElementById("playlist-wrapper");
player.addEventListener("click",function(e){

	var a=e.path;
	//console.log(a[1]);
	var n=a[1].id.split('d')[1];
	var addr=$("#"+a[1].id+" img").attr('src');;
	
	httpRequest.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/video/'+n,true);
	httpRequest.send();

	httpRequest.onreadystatechange=function(){
	if(this.readyState===4)
	{
		if(this.status===200)
		{
			console.log("call is Successful")
			var obj=JSON.parse(this.responseText);
			//player(obj,addr);
			$('#video-player').attr('src',addr);
			document.getElementById('views-count').innerHTML=obj.views;
			document.getElementById('video-title').innerHTML=obj.title;
			document.getElementById('video-description').innerHTML=obj.description;
		}
	}
	}
	
});
















