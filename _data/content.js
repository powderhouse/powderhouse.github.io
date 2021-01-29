var Prismic = require('prismic-javascript');

var apiEndpoint = "https://powderhs.cdn.prismic.io/api/v2";

module.exports = async function() {
 return await Prismic.getApi(apiEndpoint).then(async function(api) {
     var getByID = async function(id) {
         return await api.getByID(id).then(function(document) {
             var data = document.data;
             return data;
         });
     };

     [splash, intro] = await Promise.all(['X-v1WBEAACMAIOkL','X-v3UBEAACAAIPHA'].map(id => getByID(id))).then(values => values);

     return {
         splash: splash,
         intro: intro
     }
 });
};