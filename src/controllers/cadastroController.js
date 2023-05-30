const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('cadastrar');
}

exports.register = async (req, res) => {
    try{
        const login = new Login(req.body)
    await login.register();

    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(() => {
           return res.redirect('/cadastrar')
        });
        return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(() => {
           return res.redirect('/cadastrar')
        });

    }catch(err) {
        console.log(err);
        return res.render('404');
    }
    
}
