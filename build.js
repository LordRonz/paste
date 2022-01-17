const { minify } = require('html-minifier');
const fs = require('fs');

const buildDir = './build';

const minifyOptions = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeEmptyElements: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

try {
  const data = fs.readFileSync('./index.html', 'utf8');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }
  const minified = minify(data, minifyOptions);
  fs.writeFileSync(buildDir + '/index.html', minified);
} catch (err) {
  console.error(err);
}
