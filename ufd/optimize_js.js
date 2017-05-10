
const exec = require('child_process').exec
const webpack = require('webpack');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf')

const js_dist_dir = './dist/UFD/js';

clean();

function clean() {

    rimraf(js_dist_dir, {}, function(output) {
        console.log('\nCleaning any existing builds\n');
        console.log('output', output);
        createDirectories();
    });
}

function createDirectories() {

    mkdirp(js_dist_dir, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('\ncreated directory ' + js_dist_dir + '\n');
            optimizeScripts();
        }
    });
}

function optimizeScripts() {

    exec('cross-env NODE_ENV=development webpack --config ./ufd/webpack.config.js', function (err, stdout, stderr) {
        // use --display-error-details for detailed errors

        if (err) {
            console.log('error', stdout);
            console.log('debug', 'Please run webpack with --display-error-details parameter for complete error details');
        } else {
            console.log('Build successful');
            console.log(stdout);
        }
    });
}