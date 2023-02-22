const firstAnchor = document.getElementById("firstA");
const secondAnchor = document.getElementById("secondA");
const thirdAnchor = document.getElementById("thirdA");

const title = document.getElementById("h1").innerHTML;

if(title == "Home"){
    firstAnchor.style.backgroundColor = "red";
}
if(title == "About"){
    secondAnchor.style.backgroundColor = "green";
}
if(title == "Contact"){ 
    thirdAnchor.style.backgroundColor = "pink";
}