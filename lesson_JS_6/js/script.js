img1 = new Image();
img2 = new Image();

img1.src="images/img1.jpg";
img2.src="images/img2.jpg";

function ShowImage(n)
	{
		if (n==1) pic.src=img1.src;
		if (n==2) pic.src=img2.src;
	}
setInterval("ShowTime();",1000);	
function ShowTime()
{
	var d=new Date();
	var dy, dm, dd, th, tm, ts;
	dy=d.getFullYear();
	dm=d.getMonth();
	dd=d.getDay();
	th=d.getHours();
	tm=d.getMinutes();
	ts=d.getSeconds();
	s=dy+"."+dm+1+"."+dd+"   "+th+"."+tm+"."+ts;
	ptime.innerHTML=s;
}

function ShowOn()
	{
		ptime.style.color="red";
		setTimeout("ShowOff();",1000);
	}
function ShowOff()
	{
		ptime.style.color="green";
		setTimeout("ShowOn();",1000);
	}

var myT;	
var a = new Array();
	
for (k=0; k<3; k++)
	{
		a[k]=new Image();
		a[k].src="images/"+(k+1)+".gif";
	}
	/*
a[0]=new Image();
a[0].src="images/1.gif";
a[1]=new Image();
a[1].src="images/2.gif";
a[2]=new Image();
a[2].src="images/3.gif";
	*/
var i=0;

function NexStep()
	{
		i++;
		if (i>=a.length) i=0;
		picf.src=a[i].src;
	}

function StartShow()
	{
		myT=setInterval("NexStep();",1000);
	}
function StopShow()
	{
		clearInterval(myT);
	}
	
	
	
	
	
	
	
	
	
	