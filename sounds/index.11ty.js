import PrismicDOM from 'prismic-dom';
const html = PrismicDOM.RichText.asHtml
import * as helpers from "../helpers.js"

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
    let doc = data.content.sounds;
    let header = helpers.generateHeader('sounds', doc);
    let preface = helpers.generatePreface('sounds', doc);

    let feature = `
      <div id="sounds-feature">
        <div id="sounds-feature-image">
          <img 
            alt="${doc.sounds_feature[0].sounds_feature_image.alt}"
            src="${doc.sounds_feature[0].sounds_feature_image.url}"
          />
        </div>
        ${doc.sounds_feature[0].backyard_sound_1.html}
        ${doc.sounds_feature[0].backyard_sound_2.html}
        ${doc.sounds_feature[0].backyard_sound_3.html}
      </div>
    `;
    let transition = `
      <div id="sounds-transition">
        ${doc.section_transition.text}
      </div>
    `;
    let content =`${helpers.generateMixedMediaGallery("sounds", doc.body[0].items)}`;

    return `
       <section id='sounds'>
           ${header}
           ${preface}
           ${feature}
           ${transition}
           ${content}
       </section>
    `
}