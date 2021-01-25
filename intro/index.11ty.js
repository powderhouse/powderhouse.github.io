// /intro

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
    return `
    <div id='intro-container'>
        <div id="letter-image">
            <img id='stop-work' class='w-full' alt="${data.content.intro.review_header.alt}" src="${data.content.intro.review_header.url}"/>
        </div>
        <div id="letter-date">
            ${data.content.intro.letter_date}
        </div>
        <div id="letter-body">
            ${data.content.intro.letter_content.filter(c => c.type == 'paragraph').map(c => `<p>${c.text}</p>`).join('\n')}
        </div>
    </div>
    `;
};