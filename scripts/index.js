let response = [];


let xhr = new XMLHttpRequest();
xhr.open("GET", "../data/users.json", true);
xhr.onload = function () {
    response = JSON.parse(this.responseText);
    response = response.users;
    console.log(response);
    const login_handler = () => {
        let flag = false;
        let uname = document.getElementById("uname");
        let password = document.getElementById("password");
        if (uname.value == "" || password.value == "") {
            alert("MISSING DATA! PLEASE FILL ALL FIELDS")
        }else{
        for (let x in response) {
            if (uname.value == response[x].username && password.value == response[x].password) {
                flag = true;
                localStorage.setItem("current", JSON.stringify(response[x]));
            }
        }
        if (flag == true) {
            localStorage.setItem("users", JSON.stringify(response));
            window.location.href = "../pages/home.html";
        } else {
            alert("THE DATA ENTERED DOES NOT EXIST! PLEASE TRY AGAIN.")
        }}
    }
    document.getElementById("btn").addEventListener("click", login_handler)
}
xhr.send()
const think = () => {
    if(uname.value == ""){
        alert("PLEASE ENTER YOUR USER NAME!")
    } else{
        for (let x in response) {
            if (uname.value == response[x].username){
        alert("THINK HARD!")
alert("THINK HERDER");
alert("HOW ABOUT NOW?");
alert("COME AGAIN WHEN U REMEMBER -;");
alert(`JUST KIDDING, YUOR PASSWORD IS ${response[x].password}`);
}
}
}
}
