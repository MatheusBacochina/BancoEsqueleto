var spn = document.querySelector('span');

function loginUser() {
    var user = document.getElementById('userName');
    var userName = user.value;
    var pass = document.getElementById('passwrd');
    var userPass = pass.value;
    if (userName == 'admin' && userPass == "userpass769") {
        window.location.href = ('Resumo.html')
    }
    if (userName == '' || userPass == '') {
        spn.innerHTML = ('preencha tudo')
    } else {

        spn.innerHTML = ('login ou senha incorreta')
    }

}