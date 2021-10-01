import Modal from './modal.js'

const modal = Modal()

//pegar os botoes com as classes check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    
    button.addEventListener("click", event => {
        //abrir modal
        modal.open()
    })
})

