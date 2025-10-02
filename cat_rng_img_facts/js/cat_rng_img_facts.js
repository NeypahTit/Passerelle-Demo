/*
TODO
Make API fetching use `async`, to be able to catch errors in response
*/

const catImageWidth = 800;
const catImageHeight = 600;
const rngCatImageURL = `https://cataas.com/cat?width=${catImageWidth}&height=${catImageHeight}`;

this.onload = () => {
    const catImageAppender = document.querySelector("#cat_image_appender");
    let rngCatImage = document.createElement("img");

    rngCatImage.src = rngCatImageURL;
    catImageAppender.append(rngCatImage);
}