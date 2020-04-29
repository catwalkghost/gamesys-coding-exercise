// Dev config
const pt      = require("path")
const wbp     = require("webpack")
const mg      = require("webpack-merge")

const pts      = require("./paths");

// Common webpack config
const cmn      = require("./webpack-common-config.js");

module.exports = mg(cmn, {
    entry: [pts.appIndexJs],
    mode: "development",
    // devtool option controls if and how source maps are generated.
    // see https://webpack.js.org/configuration/devtool/
    // If you find that you need more control of source map generation,
    // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    devtool: "eval",
    plugins: [
        new wbp.HotModuleReplacementPlugin(),
        new wbp.NamedModulesPlugin(),
        new wbp.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],
    module: {
        rules: [
            {
                // look for .js or .jsx files
                test: /\.(js|jsx)$/,
                // in the `src` directory
                include: pt.resolve(pts.appSrc),
                exclude: /(node_modules)/,
                use: {
                    // use babel for transpiling JavaScript files
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/react"]
                    }
                }
            },
            {
                // look for .css or .scss files
                test: /\.(css|scss)$/,
                // in the `src` directory
                include: [pt.resolve(pts.appSrc)],
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            },
            {
                // Fonts
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        },
                    }
                ]
            },
        ]
    }
})