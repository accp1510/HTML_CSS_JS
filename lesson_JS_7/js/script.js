var currleft=500;
var currtop=500;
var delta=10;

function keyDown(e)
	{
		var keycode=e.keyCode?e.keyCode:e.keyChar;
		if (keycode==38)
			{
				currtop=currtop-delta;
				kub2.style.top=currtop;
			}
		if (keycode==40)
			{
				currtop=currtop+delta;
				kub2.style.top=currtop;
			}
		if (keycode==37)
			{
				currleft=currleft-delta;
				kub2.style.left=currleft;
			}
		if (keycode==39)
			{
				currleft=currleft+delta;
				kub2.style.left=currleft;
			}
		return false;	
	}
	
var x,y;
var flag=0;

function handlerMM(e)
	{
		x=(e)?e.pageX:document.body.scrollLeft+event.clientX;
		y=(e)?e.pageY:document.body.scrollTop+event.clientY;
		flag=1;
	}
	
function updateKub()
	{
		if (flag==1)
			{
				kub1.style.left=x;
				kub1.style.top=y;
			}
		setTimeout("updateKub()",30)
	}
document.onmousemove=handlerMM;