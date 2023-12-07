
if (!(localStorage.getItem('current'))) {
    window.location.href = "../pages/index.html";

} else {

    const userArr = JSON.parse(localStorage.getItem('current'));
    const changeFiles = document.getElementById('files')
    const profileImg = document.getElementById("imageProfile");

    const logout = () => {
        window.location.href = "../pages/index.html";
        localStorage.clear();
    }

    function img(userArr) {
        if (!(localStorage.getItem('photo'))) {
            localStorage.setItem('photo', userArr.photo);
            profileImg.src = localStorage.getItem('photo');
        } else {
            profileImg.src = localStorage.getItem('photo');
        }
    }
    changeFiles.onchange = function () {
        profileImg.src = URL.createObjectURL(changeFiles.files[0]);
        localStorage.removeItem('photo');
        localStorage.setItem('photo', profileImg.src)

    }
    img(userArr);
    document.getElementById('city').innerText = `City:${userArr.city}`
    document.getElementById('lname').innerText = `Last Name: ${userArr.lname}`
    document.getElementById('fname').innerText = `First Name: ${userArr.fname}`
    document.getElementById('header').innerHTML = `welcome ${userArr.username}`;
    document.getElementById('clear').addEventListener('click', logout);

}


