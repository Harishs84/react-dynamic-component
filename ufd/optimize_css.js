
const CleanCSS = require('clean-css');
const fs = require('fs');
const copydir = require('copy-dir');

/**
 * Distribution directory
 */
const css_dist_dir = './dist/UFD/css';
// const img_dist_dir = './dist/UFD/img';

/**
 * configuration for clean-css
 * see: https://www.npmjs.com/package/clean-css
 * @default {{returnPromise: boolean}}
 */
const options = {
    returnPromise: true,
    level: {
        1: {
            transform: function (propertyName, propertyValue) {
                if (propertyName == 'src' && propertyValue.indexOf('fonts') > -1) {
                    return propertyValue.replace('app/styles/fonts', 'fonts'); // avoid transforming the font paths, the fonts directory will be copied at the relative location.
                }
            }
        }
    }
};

/**
 * Map for optimizing css files.
 * e.g; { target.min.css: [source1.css, source2.css] }
 */
const outputMap = {
    './dist/UFD/css/combined.min.css': [
        './app/styles/global.css',
        './app/styles/paymentCalculator.css'
    ]
};

clean();

function clean() {
    const rimraf = require('rimraf')

    rimraf(css_dist_dir, {}, function(output) {
        console.log('\nCleaning any existing builds\n');
        console.log('output', output);
        createDirectories();
    });
}

function createDirectories() {
    const mkdirp = require('mkdirp');

    mkdirp(css_dist_dir, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('\ncreated directory ' + css_dist_dir + '\n');
            mkdirp(css_dist_dir + '/fonts', function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log('\ncreated directory ' + css_dist_dir + '/fonts' + '\n');
                    optimizeStyles();
                    /*mkdirp(img_dist_dir, function (err) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('\ncreated directory ' + img_dist_dir + '\n');
                            optimizeStyles();
                        }
                    });*/
                }
            });
        }
    });
}

function optimizeStyles() {

    for (let file in outputMap) {
        new CleanCSS(options).minify(outputMap[file]).then(function(output) {
            fs.writeFile(file, output.styles, (err) => {
                if (err) throw err;
                console.log(file + ' created !!');
            });
        }).catch(function(error) {
            console.log('error ocurred while optimizing styles', error);
        });
    }

    copyFonts();
};

function copyFonts() {
    copydir.sync('./app/styles/fonts', css_dist_dir + '/fonts');
    console.log('copying fonts complete...');
    // copydir.sync('./app/img', img_dist_dir);
    // console.log('copying images complete...');
};
