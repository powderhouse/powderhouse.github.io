import PrismicDOM from "prismic-dom";
const html = PrismicDOM.RichText.asHtml;
import * as helpers from "../helpers.js";

exports.data = {
    layout: "layouts/default.11ty.js",
};

exports.render = function (data) {
    let id = "circles";
    let doc = data.content[id];
    let header = `
    <div id='${id}-header' class='header'>
     <img class='w-full' alt="" src=""/>
    </div>   
    `;
    let preface = `
          <div id="${id}-introduction">
              ${html(doc.section_introduction)}
          </div>
      `;
    let content = ``;

    return `
       <section id='circles'>
          ${header}
          ${preface}
          ${content}
       </section>
    `;
};
