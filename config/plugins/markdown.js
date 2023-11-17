/* ----------------------------------------------------------------------------
Process MD files with markdown-it
---------------------------------------------------------------------------- */
const markdownIt = require('markdown-it'); // Markdown parser more advanced than the built-in 11ty parser
const markdownitAbbr = require('markdown-it-abbr'); // Add support for the <abbr> html tag
const markdownItAnchor = require('markdown-it-anchor'); // Automatically add ID's and anchors to header elements
const markdownItAttrs = require('markdown-it-attrs'); // Add atttributes such as classes and id's to md elements
const markdownItEmoji = require('markdown-it-emoji'); // Add emjoi support
const markdownItFootnote = require('markdown-it-footnote'); // Add footnote support
const markdownItLinkAttributes = require('markdown-it-link-attributes'); // Automatically apply attributes to links such as _blank on external
const markdownitMark = require('markdown-it-mark'); // Add support for the <mark> html tag
const markdownItPrism = require('markdown-it-prism'); // Code highlighting
const {slugifyString} = require('../utilities'); // Generate slugs from titles

const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
  .disable('code')
  .use(markdownItPrism, {
    defaultLanguage: 'plaintext'
  })
  .use(markdownItAnchor, {
    slugify: slugifyString,
    tabIndex: false,
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'before',
      symbol: '🔗'   // https://graphemica.com/%F0%9F%94%97
    })
  })
  .use(markdownItLinkAttributes, [
    {
      // match external links
      matcher(href) {
        return href.match(/^https?:\/\//);
      },
      attrs: {
        target: '_blank',
        rel: 'noopener'
      }
    }
  ])
  .use(markdownItEmoji)
  .use(markdownItFootnote)
  .use(markdownitMark)
  .use(markdownItAttrs)
  .use(markdownitAbbr);

module.exports = markdownLib;
