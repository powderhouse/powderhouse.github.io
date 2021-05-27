import PrismicDOM from 'prismic-dom';
const html = PrismicDOM.RichText.asHtml
import * as helpers from "../helpers.js"

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
    let meditations = data.content.meditations;
    let quotes = meditations.body[0];

    let header = `
        <div class="header">
          <img 
              alt="${meditations.section_delimiter.alt}" 
              src="${meditations.section_delimiter.url}"
          />
        </div>
        ${html(meditations.section_title)}
        `
    let preface = `
          <div id="meditations-introduction">
              ${html(meditations.section_introduction)}
          </div>
      `

    let content = quotes.items.map(q => {
        return `
          <div class="meditations-quotation">
              <blockquote>
                  ${html(q.quotation)}
              </blockquote>
              <div class="meditations-source">
                  ${html(q.quotation_source)}
              </div>
              <div class="meditations-author">
                  ${html(q.quotation_credit)}
              </div>
              <img 
                  class="meditations-monogram" 
                  alt="${q.author_monogram.alt}" 
                  src="${q.author_monogram.url}"
              \>
          </div>
      `
    }).join('\n');

    return `
       <section id='meditations'>
           ${header}
           ${preface}
           ${content}
       </section>
       `
}