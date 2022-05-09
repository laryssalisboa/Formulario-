const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const submitButton = document.querySelector("#submit-button")
const errorMessage = document.querySelector(".msg-error")
const nomeEmail = document.querySelector(".nomeEmail")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const nomeValue = nameInput.value
    const emailValue = emailInput.value

    if(nomeValue === "" || emailValue === ""){
        errorMessage.textContent = "Por favor, preencha os campos corretamente."
        errorMessage.classList = "error"
       
        setTimeout(() => {
            errorMessage.textContent = ""
            errorMessage.classList = ""
        }, 3000)
        return
    }
    
    const li = document.createElement("li")
    li.classList = "item"
    li.innerHTML = `Nome: $(nameValue)<br> E-mail: $(emailValue)`

    nomeEmail.appendChild(li)

    nameInput.value = ""
    emailInput.value = ""
})



