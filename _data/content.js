const Prismic = require('prismic-javascript');
const apiEndpoint = "https://powderhs.cdn.prismic.io/api/v2";
const { AssetCache } = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
    let json = await Cache("https://api.github.com/repos/11ty/eleventy", {
        duration: "1d", // 1 day
        type: "json" // also supports "text" or "buffer"
    });

    return {
        stargazers: json.stargazers_count
    };
};

let refreshData = async function() {
    console.log("Refreshing data from the Prismic API…");
    let data = await Prismic.getApi(apiEndpoint).then(async api => {
        let getByID = async function(id) {
            let doc = await api.getByID(id);
            return doc.data;
        };

        let pageIDs = {
            splash: 'X-v1WBEAACMAIOkL',
            intro: 'X-v3UBEAACAAIPHA',
            meditations: 'X-vzrBEAACIAIOGo',
            sights: 'X-vUJxEAACAAIFaw',
            sounds: 'X-vvvxEAACIAINBa',
            circles: 'X-vZzxEAACAAIG-9',
            administrivia: 'X-v7WREAACEAIQOX',
            prototypes: 'X-v9ThEAACMAIQw8',
            inquiry: 'X-wOIBEAACEAIVa1',
            algebra: 'X-wqHREAACIAIdJN',
            random: 'X-wgFxEAACIAIaX6',
            moving: 'X-wYOBEAACEAIYM2',
            outro: 'X-wn_xEAACIAIcjx',
        };

        for ([page, id] of Object.entries(pageIDs)) {
            pageIDs[page] = await getByID(id)
        }

        return pageIDs;
    });

    return data;
}

module.exports = async function() {
    console.log("Beginning export…")
    let asset = new AssetCache("powderhs");
    let refreshCache = async function() {
        console.log("Refreshing cache…")
        let prismicData = await refreshData();

        await asset.save(prismicData, "json");

        return prismicData;
    };

    try {
        if (asset.isCacheValid("1d")) {
            console.log("Retrieving cached value…")
            return await asset.getCachedValue();
        } else {
            console.log("Retrieving fresh data…")
            return await refreshCache();
        }
    } catch (e) {
        console.log("First time, maybe")
        return await refreshCache();
    }
};