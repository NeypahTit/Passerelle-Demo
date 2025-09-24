// DOM initialization
window.onload = () => {
    const debug = false; // enables console logs if true

    // timers
    const timeout = 300;
    const timeout2 = 500;
    const timeout3 = 500;

    // arrays of random characters
    const center = ['@', '®', '©'];
    const secondary = ['\\', '/', '|', '-', '_','&boxv;','&boxh;','&boxvl;','&boxvl;','&boxhd;','&boxhu;'];
    const tertiary = ['.', '*', '•', '°'];

    // circles
    const max = 2; // first circle around center
    const max2 = 3; // second circle around center

    const primary = "&nbsp;" // initial character
    
    let rows = 0;
    let cols = 0;
    let currentHue = Math.floor(Math.random() * 360); // start with a random hue

    /**
     * Calculates the grid size of the window
     */
    const calculateGridSize = () => {
        // create a test Span
        const testSpan = document.createElement("span");
    
        // setup of the test Span
        testSpan.innerHTML = "&nbsp;";
        testSpan.style.visibility = "hidden";
        document.body.appendChild(testSpan);
    
        // calculate cell width & height via the previously appended test Span
        const cellWidth = testSpan.offsetWidth;
        const cellHeight = testSpan.offsetHeight;

        // no longer needed, remove the test Span
        document.body.removeChild(testSpan);

        // determines the columns and rows
        cols = Math.floor(window.innerWidth / cellWidth) + 4;
        rows = Math.floor(window.innerHeight / cellHeight) + 1;
    }

    /**
     * Kickstarts the animation process;
     * gets called whenever mouseover event happens
     * @param {Event} e The event
     */
    const ballChanger = (e) => {
        if (debug) {
            console.log(e);
            console.log(e.target);
        }

        // increase the hue by a little
        currentHue += 2;

        // grabs the id, splits it via "-"
        // results in "idXX" and "YY" strings
        const [rowStr, colStr] = e.target.id.split("-");
        const x = Number(rowStr.slice(2)); // removes the "id" at the string's start
        const y = Number(colStr);

        // for reach row...
        for (let k = 0; k < rows; k++) {
            // for each column...
            for (let l = 0; l < cols; l++) {
                // grabs a cell
                const item = document.querySelector(`#id${k}-${l}`);

                // if it gives an error, skip this iteration
                if (!item) continue;

                // computes Euclidian distance from k,l to x,y
                const distance = Math.sqrt((k - x) ** 2 + (l - y) ** 2);
                if (debug) console.log(distance);

                // does different characters, timers and classes depending on distance
                if (distance === 0) {
                    animateItem(item, randomFromArray(center), timeout * Math.random() + timeout, "shadow");
                } else if (distance <= max) {
                    animateItem(item, randomFromArray(secondary), timeout2 * Math.random() + timeout2, `circle${k % 3}`);
                } else if (distance <= max2) {
                    animateItem(item, randomFromArray(tertiary), timeout3 * Math.random() + timeout3, `circle${k % 3}`);
                }
            }
        }
    }

    /**
     * Gets a random item from an array
     * @param {Array} arr The array
     * @returns `any`: Whatever is within the randomly chosen index of `arr`
     */
    const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

    /**
     * Animation logic
     * @param {Element} item The element
     * @param {String} char Sets the `item`'s `innerHTML` to this
     * @param {Number} delay The base delay of start and end status subfunctions
     * @param {String} extraClass An HTML class to add to the element
     */
    const animateItem = (item, char, delay, extraClass) => {
        // launch a function with delay to make the start status of the element
        setTimeout(() => {
            // set the text content
            item.innerHTML = char;
            
            item.style.backgroundColor = `hsla(${currentHue % 360}, 100%, 30%, .8)`; // sets the text background's color of the element
            item.style.color = `hsla(${(currentHue + 180) % 360}, 100%, 70%, 1)`; // sets the text's color of the element
            item.classList.add(extraClass); // appends the HTML class defined by `extraClass` to the element
        }, delay);

        // launch a function with delay to make the end status of the element
        setTimeout(() => {
            // go back to the initial character
            item.innerHTML = primary;

            item.style.backgroundColor = `hsla(${currentHue % 360}, 100%, 50%, .3)`; // sets the text background's color of the element
            item.classList.remove(extraClass); // removes the HTML class defined by `extraClass` to the element
        }, delay * 2);
    }

    /**
     * Builds a grid via known rows and columns
     */
    const buildGrid = () => {
        // for reach row...
        for (let i = 0; i < rows; i++) {
            // for each column...
            for (let j = 0; j < cols; j++) {
                // create a span
                const span = document.createElement("span");

                span.id = `id${i}-${j}` // sets the id; based on its x,y coordinates
                span.innerHTML = primary; // fill it in with the initial character
                span.addEventListener("mouseover", ballChanger); // makes it look out for mouse hoverings, then calls "ballChanger" function if it happened

                // add the cell
                document.body.appendChild(span);
            }

            // add a new line
            document.body.appendChild(document.createElement("br"));
        }
    }

    calculateGridSize();
    buildGrid();
    if (debug) console.log(cols, rows);
}