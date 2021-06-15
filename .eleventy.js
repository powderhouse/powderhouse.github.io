module.exports = function (eleventyConfig) {
    // via https://www.11ty.dev/docs/copy/#manual-passthrough-file-copy-(faster)
    eleventyConfig.addPassthroughCopy("media");

    return {
        dir: {
            // ⚠️ These values are both relative to the eleventy input directory.
            includes: "_includes",
            layouts: "_layouts",
        },
    };
};