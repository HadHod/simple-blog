var errors = require('./errors');
var login = require('./login');

module.exports = function(app) {

    // homepage
    app.get('/', function(req, res) {
        res.render('home.jade');
    });

    login(app);
    errors(app);
};