
        const buttonMinus = document.getElementById("minus-button")
        const buttonPlus = document.getElementById("plus-button")
        const countDisplay = document.getElementById("value")
        
        let value = 0;
        buttonMinus.addEventListener("click", () =>{
            value--;
            countDisplay.textContent = value;
        } )
        buttonPlus.addEventListener("click", () =>{
            value++;
            countDisplay.textContent = value;
        } )