let string="";

document.getElementById("key").addEventListener("click",function(e)
{
   
  if(e.target.innerHTML=='='){
  document.getElementById("23").value=Number(eval(string));
  
  }
 else if(e.target.innerHTML=='X')
{
    string=string.slice(0,-1);
    document.getElementById("23").value=string;
}
else if(e.target.innerHTML=='C'){
string="";
document.getElementById("23").value=string;
}  
else{
    if(e.target.innerHTML=="00")
string+='0';
else
    string+=e.target.innerHTML
   document.getElementById("23").value=string
}
// document.getElementById("23").value=string
})
