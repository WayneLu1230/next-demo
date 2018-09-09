const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {}
}

module.exports = withSass(withCss({
    webpack(config) {
        config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
        return config
    }
}))



