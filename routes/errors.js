module.exports = function(app) {

    // 404s
    app.use(function(req, res, next) {
        res.status(404);

        if (req.accepts('html')) {
            return res.send('<h2>I could not find that page</h2>');
        }

        if (req.accepts('json')) {
            return res.json({ error: 'Not found' });
        }

        res.type('txt');
        res.send('Could not find that page.');
    });

    // 500
    app.use(function(err, req, res, next) {
        console.error('error at %s\n', req.url, err);
        res.send(500, "we made error");
    });
};