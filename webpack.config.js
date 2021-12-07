const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "[name]-[contenthash].bundle.js",
    },
    devServer: {
        port: 3000,
        // watchContentBase: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash].bundle.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                sideEffects: true,
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "[name].[hash].[ext]",
                            outputPath: "imgs",
                        },
                    },
                ],
                type: "javascript/auto",
            },
            { test: /\.json$/, loader: "json-loader" },
        ],
    },
    optimization: {
        minimizer: [new OptimizeCssWebpackPlugin(), new TerserPlugin()],
    },
};
