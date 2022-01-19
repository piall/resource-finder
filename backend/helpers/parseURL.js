const { parser } = require('html-metadata-parser');

function getImage(result) {
  if (result.meta.image) {
    return result.meta.image;
  } else if (result.og.image) {
    return result.og.image;
  } else if (result.images.length > 0) {
    return result.images[0];
  }
}

async function parseURL(url) {
  var result = await parser(url);
  console.log(JSON.stringify(result, null, 3));
  return result
    ? {
        title: result.meta.title,
        url: result.meta.url,
        description: result.meta.description,
        image: getImage(result),
      }
    : null;
}

module.exports = parseURL;
