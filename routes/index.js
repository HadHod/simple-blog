var errors = require('./errors');

module.exports = function(app) {

    // homepage
    app.get('/', function(req, res) {
        res.render('home.jade');
    });

    errors(app);
};