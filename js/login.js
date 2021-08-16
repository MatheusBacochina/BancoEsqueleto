var spn = document.querySelector('span');


function loginUser() {
    var user = document.getElementById('userName');
    var userName = user.value;
    var pass = document.getElementById('passwrd');
    var userPass = pass.value;
    if (userName == 'adminPj' && userPass == "userpass769") {
        GoToPageUser('Resumo.html')
    } else if (userName == 'adminPf' && userPass == "userpass769") {
        GoToPageUser('ResumoPf.html')
    } else if (userName == '' || userPass == '') {
        spn.innerHTML = ('preencha tudo')
    } else {

        spn.innerHTML = ('login ou senha incorreta')
    }

}


const GoToPageUser = (url) => {
    window.location.href = url
}