import PrismicDOM from 'prismic-dom';
const html = PrismicDOM.RichText.asHtml
import * as helpers from "../helpers.js"

exports.data = {
    layout: "layouts/default.11ty.js"
}

exports.render = function(data) {
     let doc = data.content.sights;
     console.log("doc for sights is", doc);
     let header = helpers.generateHeader('sights', doc);
     let preface = helpers.generatePreface('preface', doc);
     let content = doc.body.map((slice) => {
        if (slice.slice_type == 'image_trio') {
            return helpers.generateImageTrio('sights', slice.items);
        }
        else if (slice.slice_type == 'mixed_media_gallery') {
            return helpers.generateMixedMediaGallery('sights', slice.items);
        }
     })
 
     return `
        <section id='sights'>
            ${header}
            ${preface}
            ${content}
        </section>
     `
}