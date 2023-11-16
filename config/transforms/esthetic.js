const esthetic = require('esthetic');

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("html", function(content) {
    if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
      let prettified = esthetic.format(content, {
        language: 'html',
        preset: 'default',
        indentSize: 2,
        wrap: 80,
        markup: {
          forceAttribute: 3,
          delimiterTerminus: "adapt",
          quoteConvert: "double"
        }
      });
      return prettified;
    }
    return content;
  });
};


