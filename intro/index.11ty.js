// intro

// Bring in PrismicDOM helper for rendering HTML
import PrismicDOM from 'prismic-dom';
const html = PrismicDOM.RichText.asHtml
import * as helpers from "../helpers.js"

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
    const intro = data.content.intro;

    let header = `
    <div id='intro-header' class='header'>
     <img class='w-full' alt="${intro.review_header.alt}" src="${intro.review_header.url}"/>
    </div>   
    `;

    let letter = `
    <div id='intro-content'>
        ${html(intro.letter_content)}
     </div>
    `

    let closing = `
    <div id='intro-closing'>
        ${html(intro.body[0].primary.salutation)}
         <div id='signatures'>
            ${
                intro.body[0].items.map(i => `
                <div class='signature-image'>
                    <img src="${i.signature_image.url}"/>
                </div>
                <div class='signature-person'>
                    ${html(i.printed_name)}
                </div>       
                    `).join('\n')
            }
         </div>
     </div>
    `;

    let toc = `
    <div id='table-of-contents'>
        <div class='toc-item'>TK</div>
    </div>
    `

return `
 <section id='intro'>
    ${header}
    ${letter}
    ${closing}
    ${toc}
 </section>
`
}