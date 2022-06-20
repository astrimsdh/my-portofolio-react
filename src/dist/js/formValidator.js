class FormValidator{
    constructor(form, fields){
        this.form = form
        this.fields = fields
    }

    initialize(){
        this.validateOnEntry()
        this.validateOnSubmit()
    }

    validateOnEntry(){
        let self = this
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`)
                self.validateFields(input)
            })
        })
    }

    validateFields(field){
        // Check ada nilai input
        if(field.value.trim() === ""){
            this.setStatus(field, `${field.previousElementSibling.innerText} tidak boleh kosong`, "error")
        }else{
            this.setStatus(field, null, "success")
        }

        // Check apakah merupakan email yang valid
        if(field.type === "email"){
            const re = /\S+@\S+\.\S+/
            if(re.test(field.value)){
                this.setStatus(field, null, "success")
            }else {
                this.setStatus(field, "Masukkan Email yang valid", "error")
            }
        }

        // Konfirmasi Password
        if(field.id === "password_confirmation"){
            const passwordField = this.form.querySelector('#password')

            if(field.value.trim() == ""){
                this.setStatus(field, "Password confirmation required", "error")
            } else if (field.value != passwordField.value){
                this.setStatus(field, "Password tidak sama", "error")
            }else{
                this.setStatus(field, null, "success")
            }
        }
    }

    setStatus(field, message, status){
        const successIcon = field.parentElement.querySelector('.icon-success')
        const errorIcon = field.parentElement.querySelector('.icon-error')
        const errorMessage = field.parentElement.querySelector('.error-message')

        if (status === "success"){
            if (errorIcon) { errorIcon.classList.add('hidden')}
            if (errorMessage) { errorMessage.innerText = ""}
            successIcon.classList.remove('hidden')
            field.classList.remove('border')
        }

        if (status === "error") {
            if(successIcon) { successIcon.classList.add('hidden')}
            if (errorMessage) { errorMessage.innerText = message}
            errorIcon.classList.remove('hidden')
            field.classList.add('border')
        }
    }
}


const form = document.querySelector('.form')
const fields = ["name", "email"]

const validator = new FormValidator(form, fields)
validator.initialize()