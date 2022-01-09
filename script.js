var button = document.getElementById("button");
var image = document.getElementById("cat-image");

function fetchPics(){
    image.src = ""
    fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url
        image.src = catsImgUrl
    })
}

button.onclick = function(){
    fetchPics();
};