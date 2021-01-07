var Prismic = require('prismic-javascript');

var apiEndpoint = "https://powderhs.cdn.prismic.io/api/v2";

module.exports = async function() {
    return await Prismic.getApi(apiEndpoint).then(async function(api) {
        let introduction = await api.getByID('X-v1WBEAACMAIOkL').then(function(document) {
            console.log(document);
            return document.data;
        });

        return introduction;
    });
};