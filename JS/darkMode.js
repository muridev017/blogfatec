let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#switch-shadow')


const ativarModoEscuro = () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'enabled')
}

const desativarModoEscuro = () => {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', null)
}

if(darkMode === 'enabled'){
    ativarModoEscuro()
}else{
    desativarModoEscuro()
}

darkModeToggle.addEventListener('click', () =>{
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        ativarModoEscuro()
        console.log(darkMode)
    }else {
        desativarModoEscuro()
        console.log(darkMode)
    }
})