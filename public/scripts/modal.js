export default function modal(){
    function open(){
        //atribui a classe active para a modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        //remove a clase active da modal
    }

    return{
        open,
        close
    }
}