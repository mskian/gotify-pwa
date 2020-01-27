function saveOptions() {
    const apiurl = document.querySelector('#apiurl').value;
    var re = /^HTTP|HTTP|http(s)?:\/\/(localhost|www\.)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$/;
    if (apiurl == 0) {
        console.log('Gotify API URL and Key is Missing');
        document.getElementById("apicheck").innerHTML = '<div class="notification is-danger">Gotify API URL and Key is Missing</div>';
    } else if (!re.test(apiurl)) {
        console.log('Enter a Valid API URL');
        document.getElementById("apicheck").innerHTML = '<div class="notification is-danger">Enter a Valid API URL</div>';
        return false;
    } else {
        localStorage.setItem("name", apiurl)
        restoreOptions();
        const save = document.querySelector('#save');
        save.classList.add("is-loading");
        setTimeout(() => {
            save.classList.remove("is-loading");
            document.getElementById("apicheck").innerHTML = '<div class="notification is-success">API KEY Saved</div>';
        }, 1000);
        setTimeout(() => {
            window.location.reload();
        }, 1400);
    }
}

function restoreOptions() {
    var apiurl = localStorage.getItem("name");
    var apifield = document.querySelector('#apiurl');
    if (apifield != null) {
        apifield.value = apiurl;
    }
}
document.addEventListener('DOMContentLoaded', restoreOptions);
var save = document.querySelector('#save');
if (save) {
    save.addEventListener('click', saveOptions);
}
var form = document.querySelector('#form');
if (form) {
    form.addEventListener('submit', ev => {
        ev.preventDefault();
        saveOptions();
        document.querySelector('#apiurl').focus();
    });
}