// /intro

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
    return `
    <div id='intro-container'>
        <img id='stop-work' class='w-full' alt="${data.content.intro.review_header.alt}" src="${data.content.intro.review_header.url}"/>
    </div>
    `;
};