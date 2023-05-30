const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado')
    res.render('login');
}

exports.login = async (req, res) => {
    try{
    const login = new Login(req.body)
    await login.logar();

    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(() => {
           return res.redirect('/login')
        });
        return;
    }

    req.flash('success', 'Você entrou no sistema.');
        req.session.user = login.user;
        req.session.save(() => {
           return res.redirect('/')
        });

    }catch(err) {
        console.log(err);
        return res.render('404');
    }
    
}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
  
}