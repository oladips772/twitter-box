const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter =document.querySelector(".counter"),
button = document.querySelector("button");


editableInput.onkeyup = (e)=>{
    let element = e.target; /// getting keypressed element
    checkInput(element);
}
editableInput.onkeypress = (e)=>{
    let element = e.target; /// getting keypressed element
    checkInput(element);
    placeholder.style.display = "none";
}

function checkInput(element){
    let currentLenght = element.innerText.length;   //getting keypressed length
    let maxLength = 15;
    let textTag = element.innerHTML;
    if(currentLenght <= 0){
         placeholder.style.display = "block";
         counter.style.display = "none";
         button.classList.remove("active");
    }else{
        counter.style.display = "block";
         placeholder.style.display = "none";
         button.classList.add("active");
    }
    counter.innerText = maxLength - currentLenght;

if(currentLenght > maxLength){
    let overText = element.innerText.substr(maxLength);
    overText = `<span class = "highlight">${overText}</span>`;
    textTag = element.innerText.substr( 0, maxLength) + overText;
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  }else{
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  }

   readonlyInput.innerHTML = textTag;
}
