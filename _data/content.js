var Prismic = require('prismic-javascript');

var apiEndpoint = "https://powderhs.cdn.prismic.io/api/v2";

module.exports = async function() {
    return await Prismic.getApi(apiEndpoint).then(async function(api) {
        let getByID = async function(id) {
            let doc = await api.getByID(id).then(d => d);
            return doc.data;
        };

        let pageIDs = {
            splash: 'X-v1WBEAACMAIOkL',
            intro: 'X-v3UBEAACAAIPHA',
            meditations: 'X-vzrBEAACIAIOGo',
            // sights: 'X-vUJxEAACAAIFaw',
            // sounds: 'X-vvvxEAACIAINBa',
            // circles: 'X-vZzxEAACAAIG-9',
            // administrivia: 'X-v7WREAACEAIQOX',
            // prototypes: 'X-v9ThEAACMAIQw8',
            // inquiry: 'X-wOIBEAACEAIVa1',
            // algebra: 'X-wqHREAACIAIdJN',
            // random: 'X-wgFxEAACIAIaX6',
            // moving: 'X-wYOBEAACEAIYM2',
            // outro: 'X-wn_xEAACIAIcjx'
        };

        for ([page, id] of Object.entries(pageIDs)) {
            pageIDs[page] = await getByID(id)
        }

        return pageIDs;
    });
};