


let xhr = new XMLHttpRequest();
xhr.open("GET", "../data/users.json", true);
xhr.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(response);

}
xhr.send()