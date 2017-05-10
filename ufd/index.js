/*
    UFD specific server configuration

    This file is intended to create a simple development environment
    while keeping all the artifacts provided by the react-boilerplate
    intact and making no changes to the existing boilerplate configuration.

 */

const express = require('express');
const exphbs = require('express-handlebars'); // 'express-handlebars' is a node compatible wrapper of handlebars
const path = require('path');
const port = process.env.port || 8080;
const winston = require('winston');
const routes = require('./config/routes');
const staticRoutes = require('./config/static');
const ufd = express();



/* Initialize routes for static assets */
staticRoutes.init(ufd, express, path);



/**
 * Using handlebars as a templating framework to allow dynamic modifications to the generated markup
 */
ufd.engine('.html', exphbs({defaultLayout: 'main', extname: '.html'}));
ufd.set('view engine', '.html');



/* Initialize the routes */
routes.init(ufd, path, express);



winston.log('info', '... starting the ufd development server');

if (!module.parent) {
    ufd.listen(port);
    winston.log('info', 'Server started on port ' + port);
}