page();
       
function page() {
  document.body.style.backgroundColor = "grey";
  //style page
    
  createButtons(25);
}
    
function createButtons(amount){
  for (var a = 1;a <(amount + 1); a++) {
           
     var button = document.createElement("button"); 
     button.classList.add("button")
     button.id = "button" + a; 
     button.innerHTML = "" + a; 
     container.appendChild(button);
  }
}
