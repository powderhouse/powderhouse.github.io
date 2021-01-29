// intro

// Bring in PrismicDOM helper for rendering HTML
import PrismicDOM from 'prismic-dom';
const html = PrismicDOM.RichText.asHtml

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
    const intro = data.content.intro;
    console.log(intro.body[0].items[0]);

    let header = `
    <div id='stop-work-header'>
     <img id='stop-work' class='w-full' alt="${intro.review_header.alt}" src="${intro.review_header.url}"/>
    </div>   
    `;

    let letter = `
    <div id='letter-content'>
        ${html(intro.letter_content)}
     </div>
    `

    let closing = `
    <div id='letter-closing'>
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
        <div class='toc-item'></div>
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