import validator from 'validator'

const div = document.createElement('div');
const errors = document.querySelector('.errors');

export default class Login {
    constructor(formLogin) {
        this.form = document.querySelector(formLogin);
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
        let error = false;

        div.innerHTML = '';

        if(!validator.isEmail(emailInput.value)) {
            
            div.innerHTML += 'E-mail inválido <br>';
            div.classList = 'alert alert-danger';

            errors.appendChild(div);
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50 ) {
            

            div.innerHTML += 'Coloque a mesma senha do cadastro <br>';
            div.classList = 'alert alert-danger';

            errors.appendChild(div);
            error = true;
        }

        if(!error) el.submit()

        
    }
}