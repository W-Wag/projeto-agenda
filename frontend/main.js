// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// import './assets/css/style.css';

import Cadastro from './modules/Cadastro';
import Login from './modules/Login';
import Contatos from './modules/Contatos';

const cadastro = new Cadastro('.form-cadastro');
const login = new Login('.form-login');
const contatos = new Contatos('.form-contato');

cadastro.init();
login.init();
contatos.init();

console.log('oi')

