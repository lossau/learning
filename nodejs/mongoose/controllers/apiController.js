module.exports = function(app) {

    app.get('/api/person/:id', function(req, res) {
        // get that data from db
        console.log(req.params);
        res.json({ id_: req.params.id });
    });

    app.post('/api/person', function(req, res) {
        // save to the db
    });

    app.delete('/api/person/:id', function(req, res) {
        // delete from the db
    });

};