this.onload = async () => {
    const apiURL = "https://cataas.com";
    const catImageAppender = document.querySelector("#cat_image_appender");
    
    let rngCatImage = document.createElement("img");

    getCatImage().then((img) => {
        rngCatImage.src = img;
        console.log(rngCatImage.src, "aaaa");
        catImageAppender.append(rngCatImage);
    }).catch((whyRejected) => {
        console.warn("CAT IMAGE:", whyRejected);
        alert("CAT IMAGE:", whyRejected);
    });

    /** 
     * Get a random cat image using `https://cataas.com/cat` (API)
     */
    async function getCatImage() {
        // Set the width and height
        const catImageWidth = 800;
        const catImageHeight = 600;
        
        // Set the url (with width and height), get its response, set the data (as response's url)
        const rngCatImageURL = `${apiURL}/cat?width=${catImageWidth}&height=${catImageHeight}`;
        const response = await fetch(rngCatImageURL);
        const data = response.url;
        
        // Returns the url to use
        return data;
    }
}