
        const buttonMinus= document.getElementById("minus-button")
        const buttonPlus= document.getElementById("plus-button")
        const span= document.getElementById("value")
        
        let value= 0;
        buttonMinus.addEventListener("click", ()=>{
            value--;
            span.textContent= value;
        } )
        buttonPlus.addEventListener("click", ()=>{
            value++
            span.textContent= value;
        } )