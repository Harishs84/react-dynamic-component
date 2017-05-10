/**
 * For production ready builds
 */

const exec = require('child_process').exec
let webpack;
let mkdirp;
let rimraf;

const js_dist_dir = './dist/UFD/js';

installDeps();

function clean() {
    rimraf = require('rimraf')

    rimraf(js_dist_dir, {}, function(output) {
        console.log('\nCleaning any existing builds\n');
        console.log('output', output);
        createDirectories();
    });
}

function createDirectories() {
    mkdirp = require('mkdirp');

    mkdirp(js_dist_dir, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('\ncreated directory ' + js_dist_dir + '\n');
            optimizeScripts();
        }
    });
}

function addCheckMark(callback) {
    console.log('installation done');
    if (callback) callback();
}

function installDeps() {
    process.stdout.write('\nInstalling dependencies... (This might take a while)');

    exec('yarn --version', function (err, stdout, stderr) {
        if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
            exec('npm install', addCheckMark.bind(null, clean));
        } else {
            exec('yarn install', addCheckMark.bind(null, clean));
        }
    });
}

function optimizeScripts() {
    webpack = require('webpack')

    exec('cross-env NODE_ENV=production webpack --config ./ufd/webpack.config.js', function (err, stdout, stderr) {
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