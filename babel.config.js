
module.exports = {
    "plugins": [
        ["@babel/plugin-transform-modules-commonjs", {
            "allowTopLevelThis": true
        }]
    ],
    // "presets": [
    //     [
    //         "@babel/preset-env",
    //         {
    //             "useBuiltIns": "entry"
    //         }
    //     ]
    // ]
};