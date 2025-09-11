this.onload = () => {
    const body = document.querySelector("body");
    const codeH1 = document.createElement("h1");
    const notImp = document.querySelectorAll(".not_important");
    
    codeH1.textContent = "Hi I am big and important";
    body.appendChild(codeH1);
    notImp.forEach(
        (e) => {
            if (e.textContent != "Don't remove me") e.remove();
        }
    );
}