var result = true;
function CheckForm()
	{
		if (formf.nmf.value=="")										//имя
			{
				formf.nmf.style.borderColor="red";
				result = false;
			}
		else
			{
				formf.nmf.style.borderColor="green";
			}
		if (formf.prf1.value!=formf.prf2.value)							//Пароль совпадение
			{
				formf.prf1.style.borderColor="red";
				formf.prf2.style.borderColor="red";
				result = false;
			}
		else
			{
				if (formf.prf1.value=="")								//Пароль пустой
					{
						formf.prf1.style.borderColor="red";
						formf.prf2.style.borderColor="red";
						result = false;
					}
				else
					{
						var l=formf.prf1.value;							//Пароль короче 6
						var len=l.length;
						if (len<6)
							{
								formf.prf1.style.borderColor="red";
								formf.prf2.style.borderColor="red";
								result = false;
							}
						else
							{
								formf.prf1.style.borderColor="green";
								formf.prf2.style.borderColor="green";
							}
					}
			}
		if (formf.emf.value=="")										//Email
			{
				formf.emf.style.borderColor="red";
				result = false;
			}
		else
			{
				var s=formf.emf.value;
				var n=s.search("^.+@.+\\..+$");
				if (n==-1)
					{
						formf.emf.style.borderColor="red";
						result = false;
					}
				else
					{
						formf.emf.style.borderColor="green";
					}				
			}
		var k=0;
		if (formf.box1.checked==true) k++;
		if (formf.box2.checked==true) k++;
		if (formf.box3.checked==true) k++;
		if(k==0) {alert("Не выставлен не один");}
		
		return result;
	}