import validator from 'validator'

const div = document.createElement('div');
const errors = document.querySelector('.errors');

export default class Cadastro {
    constructor(formCadastro) {
        this.form = document.querySelector(formCadastro)
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        const checkPasswordInput = el.querySelector('input[name="passwordConfirm"]');
        let error = false;

        div.innerHTML = '';

        if(!validator.isEmail(emailInput.value)) {
            
            div.innerHTML += 'E-mail inválido <br>';
            div.classList = 'alert alert-danger';

            errors.appendChild(div);
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50 ) {
            

            div.innerHTML += 'a senha precisa ter entre 3 e 50 caracteres <br>';
            div.classList = 'alert alert-danger';

            errors.appendChild(div);
            error = true;
        }

        if(passwordInput.value !== checkPasswordInput.value ) {

            div.innerHTML += 'Os campos de senha precisam ser iguais <br>';
            div.classList = 'alert alert-danger';

            error = true;
        }

        if(!error) el.submit()

        
    }
}