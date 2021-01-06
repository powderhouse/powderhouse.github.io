var Prismic = require('prismic-javascript');

var apiEndpoint = "https://powderhs.cdn.prismic.io/api/v2";
  
module.exports = async function() {
  return await Prismic.getApi(apiEndpoint).then(function(api) {  
    return api.getByID('X-v1WBEAACMAIOkL').then(function(document) {
      // document contains the document content
      console.log("Document: ", document);
      return document;
    });
  });
};