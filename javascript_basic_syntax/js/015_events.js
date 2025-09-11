this.onload = () => {
    const highlight = document.querySelectorAll("#highlight");
    const highlight2 = document.querySelectorAll("#highlight2");
    const write = document.querySelectorAll("#keypressing");

    highlight.forEach(
        (e) => {
            e.addEventListener("click", highlightFunc1);
        }
    );

    highlight2.forEach(
        (e) => {
            e.addEventListener("dblclick", highlightFunc2);
        }
    );

    write.forEach(
        (e) => {
            document.addEventListener("keydown", writeFunc1);
        }
    );
}

function highlightFunc1(e) {
    e.target.classList.toggle("highlighted1");
}

function highlightFunc2(e) {
    e.target.classList.toggle("highlighted2");
}

function writeFunc1(e) {
    e.target.textContent += e.key;
}