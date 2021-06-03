class Modal {
    constructor(){
        this.modal = document.querySelector(".modal")
    }
    open() {
        this.modal.style.display = "initial"
    }
    close() {
        this.modal.style.display = "none"
    }
    accept(){
        this.modal.style.display = "none"
    }
}

const openBtn = document.querySelector(".js-open");
const closeBtn = document.querySelector(".js-close");
const acceptBtn = document.querySelector(".js-accept")
const modal = new Modal()


openBtn.addEventListener('click',function(event){
  modal.open()
})

closeBtn.addEventListener("click", function(event){
  modal.close()
})
acceptBtn.addEventListener("click", function(event){
  modal.accept()
  alert("Please accept the terms and conditions?")
})