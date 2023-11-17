/* ----------------------------------------------------------------------------
Process CSS files with postcss, tailwind, and cssnano
---------------------------------------------------------------------------- */

const postcss = require('postcss');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = eleventyConfig => {
  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      if (path !== './src/assets/css/global.css') {
        return;
      }

      return async () => {
        let output = await postcss([
          postcssImport,
          tailwindcss,
          autoprefixer,
          cssnano
        ]).process(content, {
          from: path
        });

        return output.css;
      };
    }
  });
};
