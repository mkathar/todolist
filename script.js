
var data= document.getElementById("task");
var ekleBtn= document.getElementById("liveToastBtn")

var mylist=document.getElementById("list")
var myNodelist = document.getElementsByTagName("LI");


var i; 

for (i = 0; i < myNodelist.length; i++) 
{
    var xspani = document.createElement("SPAN");
    xspani.textContent="\u00D7";
    xspani.className = "close ";
    xspani.onclick=removeButton;
    myNodelist[i].append(xspani);
    myNodelist[i].onclick= check;

}

function newElement()
{
    var datavalue = data.value.trim();
    if(datavalue!="" && datavalue.length < 100)
    {
        let li= document.createElement("li");
        li.textContent=data.value;
        list.appendChild(li);
        data.value="";
        var xspani = document.createElement("SPAN");
        var x = document.createTextNode("\u00D7");
        xspani.className = "close ";
        
        xspani.onclick=removeButton;
        xspani.appendChild(x);
        myNodelist[myNodelist.length-1].appendChild(xspani)    
        $(".success").toast("show");
        
    }

    else
    {
        $(".error").toast("show");
    }    
  
}
function check(){
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
    $(".alert").toast("show");
    
}

