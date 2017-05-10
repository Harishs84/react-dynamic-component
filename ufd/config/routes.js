
const page_json_dir = '../../ufd/json/page';
const api_json_dir = '../../ufd/json/api';

const properties = require('../../config');

function createRoute(app, page) {
    getJson(function(json) {
        app.get(page.route, function (req, res) {
            res.render(page.view_file, {
                title: page.title,
                properties: properties,
                json: json
            });
        });
    }, page.json);
}
function createApiRoute(jsonFile) {
    return function (req, res) {
        res.setHeader('Content-Type', 'application/json') // Setting the correct header as response is expected to be a json
        res.send(require(api_json_dir + '/' + jsonFile));
    }
}
function getJson(cb, jsonArr) {
    let json = {};

    for (let j in jsonArr) {
        json[properties.json_var[jsonArr[j]]] = JSON.stringify(require(page_json_dir + '/' + jsonArr[j]));
    }

    cb(json);
}
module.exports = {

    init: function(app, path, express) {
        /**
         * These routes will allow to map separate configurations & htmls for various pages of app
         * To add a new route a html file for mapping needs to be added as a template under /views/*
         */

        /**
         * All the apis must be defined in config.js
         * @type {Array}
         */
        let paths = {
            apis: [],
            pages: []
        };

        const api = express();

        const apis = properties.apis;

        console.log('\nApis - \n');

        for (let route in apis) {
            if (route.indexOf('/ufd') > -1) {
                app.get(route, createApiRoute(apis[route]));
                app.post(route, createApiRoute(apis[route]));
                console.log(route);
                paths.apis.push(route);
            } else {
                api.get(route, createApiRoute(apis[route]));
                api.post(route, createApiRoute(apis[route]));
                console.log('/api' + route);
                paths.apis.push('/api' + route);
            }
        }

        app.use('/api', api);

        /**
         * All the routes must be defined in config.js
         * @type {Array}
         */
        const pages = properties.pages;

        console.log('\nPages - \n');

        for (let i in pages) {
            createRoute(app, pages[i]);
            console.log(pages[i].title + ': ' + pages[i].route);
            paths.pages.push(pages[i]);
        }

        console.log('\n\n')

        var static = express();

        /*static.get('/appraiseDevice', function(req, res) {
            res.sendFile(path.join(__dirname, '../../views/static/appraise_device.html'));
        });*/

        app.use('/static', static);

        app.get('/', function(req, res) {
            // res.sendFile(path.join(__dirname, '../../views/static/index.html'));
            res.render('ufd', {
                title: 'UFD Dev',
                properties: properties,
                paths: paths
            });
        });

        /**
         * default route - should respond with 404
         */
        // app.get('*', function(req, res){
        //     res.status(404).send('This page doesn\'t exists or isn\'t ready to be displayed yet');
        // });
        app.get('*', function(req, res){
            res.status(404).render('error', {
                title: '404 - Not Found',
                properties: properties,
                json: {
                    errorPageJson: JSON.stringify( {"errorTitle":"We can't find the page you're looking for but we're sure it's out there somewhere.","errorDesc":"","buttonLabel":"Take me home","redirectUrl":"/"} )
                }
            });
        });
    }
};