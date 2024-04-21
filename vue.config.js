const path = require('path');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/sub-path/' : '/', // We currently don't have an .env file.
    outputDir: 'dist/prod', // Changes the default build path
    transpileDependencies: ['vue-tailwind'],
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'src'), // @ will return the default path starting from src
                '@components': path.resolve(__dirname, 'src/components'),
                '@assets': path.resolve(__dirname, 'src/assets'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.m?js?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime'],
                        },
                    },
                },
                // Additional rules can be added
            ],
        },
    },
    chainWebpack: (config) => {
        config.plugin('define').tap((definitions) => {
            Object.assign(definitions[0], {
                __VUE_OPTIONS_API__: 'true',
                __VUE_PROD_DEVTOOLS__: 'false',
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
            });
            return definitions;
        });

        // For larger projects we can increase bunld sizes.
        config.performance.maxAssetSize(10 * 1024 * 1024); // 10MB
        config.performance.maxEntrypointSize(10 * 1024 * 1024); // 10MB
        config.optimization.splitChunks({
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: { test: /[\\/]node_modules[\\/]/ },
            },
        });
    },
});
