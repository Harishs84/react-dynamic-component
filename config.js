/*
    Configuration for UFD
    Development environment only
 */

module.exports = {
    "json_var" : {
        "mpc": "mpcJson",
    },

     "pages": [
        {
            "route": "/monthly-payment-calculator",
            "view_file": "monthly-payment-calculator",
            "title": "Price Calculator",
            "json": [ // All your page json variables should be defined here < json_var > (must be available in json_var object above)
                "mpc"
            ]
        }
    ]
};
