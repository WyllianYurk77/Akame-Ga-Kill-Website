let signIn = document.querySelector('#signin')
let signUp = document.querySelector('#signup')
let body = document.querySelector("body")

signIn.addEventListener('click', function(){
    body.className = 'sign-in-js'
})
signUp.addEventListener('click', function(){
    body.className = 'sign-up-js'
})
