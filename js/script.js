// References to HTML
const container = document.getElementById('main-content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';

//initial load
document.addEventListener('DOMContentLoaded', function() {
    handelAjax(url);
});

function handelAjax(urlValue) {
    fetch(urlValue)
    .then(function (response) {
        if(response.ok) {
            return response.text();
        } else {
            throw new Error(response.statusText);
        }
    })
    .then(function (dataString){
        container.innerHTML = dataString; 
    })
    .catch(function (error) {
        console.log(error.message);
    });
}

for (let link of links) {
    link.addEventListener('click', handleClick);
}

function handleClick(event) {
    event.preventDefault();
    url = event.target.href;

    handelAjax(url);
}