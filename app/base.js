/**
 * Created by guptvi5 on 3/1/2017.
 */

const properties = require('../config.js');

const conf = {
    static_js_path: '/ufd_static/js/',
    json_dir: './json/'
};

function getJsonVar(pageName) {
    return properties.json_var[pageName];
}

/**
 * Returns json from html page if defined as global variable.
 *
 * @param pageName
 * @returns {*} or undefined
 */
// function loadJsonFromPage(pageName) {
//     return window[properties.json_var[pageName]];
// }

/**
 * Returns json from one of json files (/app/json/*)
 *
 * @param pageName
 * @returns {*}
 */
// function loadJsonFromFile(pageName) {
//     return require(conf.json_dir + pageName + '.json');
// }

/**
 * This is required to configure cdn generated path for static bundles
 * Regex added to remove any trailing slashes in the server url to avoid
 * multiple slashes
 *
 * @returns string < static_js_path >
 */
function getPublicPath() {
    if (typeof webServer === 'undefined') {
        return conf.static_js_path;
    } else {
        return webServer.replace(/\/$/, '') + conf.static_js_path;
    }
}

export { getJsonVar, properties, getPublicPath };