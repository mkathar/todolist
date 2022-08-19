/*Kuracağınız yapı tamamen size kalmış. Birkaç tane püf noktamız var.

-Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
-Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
-Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
Yazdığınız js dosyasını projenize eklemeyi unutmayın.
Bonus

Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.*/



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

