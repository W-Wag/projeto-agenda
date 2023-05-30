import validator from 'validator'

const div = document.createElement('div');
const errors = document.querySelector('.errors');

export default class Contatos {
    constructor(formContatos) {
        this.form = document.querySelector(formContatos);
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
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        div.innerHTML = null;

      

        if(emailInput.value && !validator.isEmail(emailInput.value)) {
            
            div.innerHTML += 'E-mail inválido <br>';
            div.classList = 'alert alert-danger';

            errors.appendChild(div);
            error = true;
        }

        if(!nomeInput.value) {
            

            div.innerHTML += 'O nome é obrigatorio <br>';
            div.classList = 'alert alert-danger';

            errors.appendChild(div);
            error = true;
        }

        if(!emailInput.value && !telefoneInput.value) {
            

            div.innerHTML += 'Pelo menos um meio de contato precisa ser enviado: e-mail ou telefone. <br>';
            div.classList = 'alert alert-danger';

            errors.appendChild(div);
            error = true;
        }

        if(!error) el.submit()

        
    }
}