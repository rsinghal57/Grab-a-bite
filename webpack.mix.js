// webpack.mix.js

let mix = require('laravel-mix');

mix.babelConfig({
    "plugins": ["@babel/plugin-proposal-class-properties"]
});

mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss', 'public/css/app.css');
//setPublicPath('dist');