﻿var login = prompt("enter login", "");

  if(login == null)
  {
  	alert("sign in canceled");
  }
  else if(login == "admin")
  {
  	var pass = prompt("enter the password","");
    	if(pass == null)
    	{
    	alert("sign in canceled");
   		}
   		else if(pass == "blackprince")
   		{
   		alert("enter success");
   		}
    	else {
        alert("incorrect pass");
        }
  }
  else
  {
  alert("incorrect login");
  }