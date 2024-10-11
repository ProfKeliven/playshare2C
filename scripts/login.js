function login(){
    let email = document.getElementById('login-email').value
    let password = document.getElementById('login-password').value

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    //buscar o usuario e senha no localstorage
    let usuario = usuarios.find(usuario => usuario.email === email 
        && atob(usuario.senha) === password)

    //verificando e o usuario e a senha estao corretas e se ta logado
    if(usuario){
        //armazenar que está logado no sessionStorage
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario))
        //redirecionar para a hoje
        window.location.href =  'Home.html'
    }else{
        document.getElementById('mensagem').innerText = 'Email ou senha incorretos'
        return
    }
}