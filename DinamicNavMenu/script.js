switch(document.querySelector("h1").innerHTML){
    case "Home":
        document.getElementById("homeLink").style.backgroundColor = "red";
      break;
    case "About" :
        document.getElementById("aboutLink").style.backgroundColor = "green";
      break;
    case "Contact" :
        document.getElementById("contactLink").style.backgroundColor = "pink";
      break;
  }