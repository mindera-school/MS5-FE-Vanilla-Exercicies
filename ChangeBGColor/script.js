let a = document.getElementsByTagName("a");
for(let i = 0; i < a.length; i++){
    if(a[i].innerHTML == document.getElementById("title").innerHTML){
       a[i].style.background = "red";
    };
}