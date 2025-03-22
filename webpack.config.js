const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Other Webpack configurations...
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files
                    'css-loader',               // Resolves @import and url() in CSS
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './app/globals.css', 
        }),
    ],
};
