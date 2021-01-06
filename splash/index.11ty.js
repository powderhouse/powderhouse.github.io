exports.data = {
    layout: "layouts/default.11ty.js"
};

exports.render = function(data) {
    return `
    <div id="logo" class="border-black border-2 w-full h-3/6">
        ${data.splash.data.introduction.map((intro) => `<p>${intro.text}</p>`).join('\n')}
    </div>
    `;
};