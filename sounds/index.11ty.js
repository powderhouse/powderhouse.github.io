import PrismicDOM from 'prismic-dom';
const html = PrismicDOM.RichText.asHtml

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
    let doc = null;
    let header = ``;
    let preface = ``;
    let content = ``;

    return `
       <section id='sounds'>
           ${header}
           ${preface}
           ${content}
       </section>
    `
}