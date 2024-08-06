const mix = require('laravel-mix');

mix.setPublicPath('../')
    .sass('sass/main.scss', 'wwwroot/css')
    .js('js/main.js', 'wwwroot/js');
