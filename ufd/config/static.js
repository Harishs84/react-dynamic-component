
module.exports = {
    init: function(app, express, path) {
        app.use('/css', express.static(path.join(__dirname, '../../app/css')));
        app.use('/img', express.static(path.join(__dirname, '../../app/img')));
        app.use('/ufd', express.static(path.join(__dirname, '../../dist/UFD')));
        app.use('/ufd_static/img', express.static(path.join(__dirname, '../../app/img')));
        app.use('/ufd_static', express.static(path.join(__dirname, '../../dist/UFD')));
    }
};