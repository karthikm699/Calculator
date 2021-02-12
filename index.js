  



function hello(obj)
        {
          var y =obj.innerHTML;
            
            if (y=="AC")
                {
                     document.getElementById("outtd").innerHTML="0"
                }
        else if(y=="DEL")
            {
                document.getElementById("outtd").innerHTML=document.getElementById("outtd").innerHTML.slice(0,-1);
            }

  else if(y=="=")
      {
         document.getElementById("outtd").innerHTML=eval(document.getElementById("outtd").innerHTML);
      }
            else 
                {
                    if(document.getElementById("outtd").innerHTML=="0")
                        {
                            document.getElementById("outtd").innerHTML=y;
                        }
                            else
                            {
                                document.getElementById("outtd").innerHTML+=y;
                            }
                        }
                }
        
