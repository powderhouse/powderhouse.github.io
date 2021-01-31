import PrismicDOM from 'prismic-dom';
const html = PrismicDOM.RichText.asHtml

export function generateHeader(slug, content, content_slug = null) {

    content_slug = content_slug === null ? slug : content_slug;

    return `
        <div id="${slug}-delimiter" class='w-full'>
        <img
            class="w-full"
            alt="${content.section_delimiter.alt}"
            src="${content.section_delimiter.url}"
        \>
        </div>
        ${html(content.section_title)}
    `
}

export function generatePreface(slug, content, content_slug = null) {
    content_slug = content_slug === null ? slug : content_slug;

    return `
    <div id="${slug}-introduction">
        ${html(content.section_introduction)}
    </div>
    `
}

function generateGalleryItem(item) {
    let header = `${html(item.mixed_media_gallery_title)}`;

    if (Object.keys(item.mixed_media_gallery_image).length > 0) {
        // Is image
        return `IMAGETK`
    }
    else if (item.mixed_media_gallery_link.hasOwnProperty('embed_url')) {
        // Is embed
        let src = function(embed) {
            if (embed.provider_name == "YouTube") {
                let matches = /^.+\:\/\/youtu.be\/([A-Za-z0-9]+)/.exec(embed.embed_url);
                let embedID = matches.length > 0 ? matches[1] : null;
                return "https://www.youtube.com/embed/" + embedID + "?feature=oembed";
            }
        }(item.mixed_media_gallery_link)
        
        return `
        <figure class='mixed-media-gallery-item'>
            <iframe
                src='${src}'
                loading='lazy'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
                title='${item.mixed_media_gallery_link.title}'
            >
                    
            </iframe>
            <figcaption class='mixed-media-gallery-item-caption'>
                ${html(item.mixed_media_gallery_title)}
                ${html(item.media_description)}
            </figcaption>
        </figure>
        `
    }
}

export function generateMixedMediaGallery(slug, slice) {
    return `
        <div id='${slug}-gallery'>
            ${slice.map(generateGalleryItem).join('\n')}
        </div>
    `
}

function generateImageForImageTrio(image) {
    console.log("Trying to generate image for", image)
    return `
        <figure class="image-trio-image">
            <img alt="${image.image_trio.alt}" src="${image.image_trio.url}">
            <figcaption>
                ${html(image.image_title)}
                ${html(image.image_description)}
            </figcaption>
        </figure>
    `
}

export function generateImageTrio(slug, slice) {
    return `
        <div id='${slug}-image-trio'>
            ${slice.map(generateImageForImageTrio).join('\n')}
        </div>
    `
}