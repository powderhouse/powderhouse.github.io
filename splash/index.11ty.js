// /splash

exports.data = {
    layout: "layouts/default.11ty.js"
};

exports.render = function(data) {
    return `
     <div id="splash-container" class="min-h-screen">
         <div class="grid">
             <div id="logo" class="border-black border-2 justify-self-center w-full lg:w-6/12 bg-gray-50">
                 <img alt="${data.content.splash.logo.alt}" src="${data.content.splash.logo.url}"/>
             </div>
         </div>
         <div class='flex justify-center'>
             <div id="introduction" class="border-black border-2 w-full h-3/6 md:w-8/12 lg:w-6/12 text-lg md:text-xl lg:text-2xl">
                 ${data.content.splash.introduction.map((intro) => `<p>${intro.text}</p>`).join('\n')}
             </div>
         </div>
         <div id="transition" class="border-black border-2 w-full h-24 bg-gray-50 absolute bottom-0"></div>
     </div>
     <div class='h-screen bg-red-500'></div>
     `;
};