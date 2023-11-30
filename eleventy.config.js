/**
 *  @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 */

// get package.json
const packageVersion = require('./package.json').version;

// plugins
const esbuild = require('./config/plugins/esbuild.js');
const tailwind = require('./config/plugins/tailwind.js');
const markdownLib = require('./config/plugins/markdown.js');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

// other utilities
const esthetic = require('./config/transforms/esthetic.js');
const yaml = require('js-yaml');
const { slugifyString } = require('./config/utilities');

// module import collections
const {
  usaSeasons,
  salSeasons,
  tcsSeasons
} = require('./config/collections/index.js');

// module import filters
const {
  where,
  count,
  first,
  formatDate,
  formatDateUTC,
  fileExists
} = require('./config/filters/index.js');

// module import shortcodes
const {
  responsiveImage
} = require('./config/shortcodes/index.js');

module.exports = function (eleventyConfig) {

  /* --------------------------------------------------------------------------
  Support for YAML in eleventy data files
  -------------------------------------------------------------------------- */ 
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));
  eleventyConfig.addDataExtension('yml', contents => yaml.load(contents));

  /* --------------------------------------------------------------------------
  Plugins
  -------------------------------------------------------------------------- */

  // Process CSS through tailwind, postcss, cssnano and output to dist/assets/css
  eleventyConfig.addPlugin(tailwind);
  // Proecess JS through ESBuild, link, minify and output to dist/assets/js
  eleventyConfig.addPlugin(esbuild); 
  // Process HTML through esthetic to make it more readable after templating
  eleventyConfig.addPlugin(esthetic);
  // Markdown-It
  eleventyConfig.setLibrary('md', markdownLib);
  // Eleventy Navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin); 

  /* --------------------------------------------------------------------------
  Shortcodes, filters, collections
  -------------------------------------------------------------------------- */

  // Shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('image', responsiveImage);

  // Filters
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addFilter('count', count);
  eleventyConfig.addFilter('first', first);
  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('formatDateUTC', formatDateUTC);
  eleventyConfig.addFilter('fileExists', fileExists);

  // Collections
  eleventyConfig.addCollection('usaSeasons', usaSeasons);
  eleventyConfig.addCollection('salSeasons', salSeasons);
  eleventyConfig.addCollection('tcsSeasons', tcsSeasons);


  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.addWatchTarget('./src/assets');

  eleventyConfig.addPassthroughCopy({'src/robots.txt': '/robots.txt'});
  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy('src/assets/images');

  // Copy the raw results files without any processing
  // disabled because I am processing the html as templates
  // eleventyConfig.addPassthroughCopy('src/**/results/*.html');


  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};