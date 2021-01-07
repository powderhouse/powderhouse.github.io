exports.data = {
    layout: "layouts/default.11ty.js"
};

exports.render = function(data) {
    return `
    <div id="logo" class="border-black border-2 w-full h-3/6 bg-gray-50"></div>
    <div class='flex justify-center'>
    <div id="introduction" class="border-black border-2 w-full h-3/6 md:w-8/12 lg:w-6/12 text-lg md:text-xl lg:text-2xl">
        ${data.splash.data.introduction.map((intro) => `<p>${intro.text}</p>`).join('\n')}
    </div>
</div>
    <div id="transition" class="border-black border-2 w-full h-5 bg-gray-50"></div>
    `;
};