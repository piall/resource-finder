const { parser } = require('html-metadata-parser');

async function parseURL(url) {
  var result = await parser(url);
  //   console.log(JSON.stringify(result, null, 3));
  return result
    ? {
        title: result.meta.title,
        url: result.meta.url,
        description: result.meta.description,
        image: result.meta.image || result.og.image,
      }
    : null;
}

module.exports = parseURL;
