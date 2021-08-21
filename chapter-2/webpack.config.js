const path = require('path');

module.exports = {
    mode: "development",
//    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
    }
}