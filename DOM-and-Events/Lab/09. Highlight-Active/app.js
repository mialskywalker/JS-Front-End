function focused() {
    
    const inputs = Array.from(document.querySelectorAll('div > input'));

    for (el of inputs) {
        el.addEventListener('focus', (event) => {
            event.target.parentElement.style.background = "gray";
            event.target.parentElement.className = "focused";
            
        });
        el.addEventListener("blur", (event) => {
            event.target.parentElement.style.background = "";
            event.target.parentElement.classList.remove('focused');
          });
    } 

}