function SwithBG(d)
	{
		var r, g, b, s;
		var div = document.getElementById(d);
		
		if (div.style.backgroundColor=='red')
			{
				r = Math.random()*1000;
				r = r.toFixed();
				r = r%240+16;
				r = r.toString(16);

				g = Math.random()*1000;
				g = g.toFixed();
				g = g%240+16;
				g = g.toString(16);

				b = Math.random()*1000;
				b = b.toFixed();
				b = b%240+16;
				b = b.toString(16);	
		
				s='#'+r+g+b;

				div.style.backgroundColor = s;
			}
		else
			{
				r = Math.random()*1000;
				r = r.toFixed();
				r = r%240+16;
				r = r.toString(16);

				g = Math.random()*1000;
				g = g.toFixed();
				g = g%240+16;
				g = g.toString(16);

				b = Math.random()*1000;
				b = b.toFixed();
				b = b%240+16;
				b = b.toString(16);	
		
				s='#'+r+g+b;

				div.style.backgroundColor = s;
			}
		
		
	}
function ShowDiv(d)
	{
		div1.style.visibility='hidden';
		div1.style.visibility='hidden';
		
		d.style.visibility='visible';
	}
function NewWnd()
	{
		myWind = window.open("https://ya.ru","wnd1","width=500,height=400,status=on,toolbar=no,menubar=no");
	}
function Forma()
	{
		myFormWind = window.open("","wnd2","width=700,height=500,status=on,toolbar=no,menubar=no");
		myFormWind.document.open();
		myFormWind.document.write("<html><body>"+Namet.value+Emailt.value"</body></html>");
		myFormWind.document.close();		
	}