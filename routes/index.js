module.exports = function(app) {
    // homepage
    app.get('/', function(req, res) {
        res.render('home.jade');
    });
};