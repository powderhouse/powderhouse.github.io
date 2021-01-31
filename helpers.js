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
    let title = function (i){
        if (i.more_resources.url !== undefined) {
            return `
                <a href="${item.more_resources.url}">
                    ${html(item.mixed_media_gallery_title)}
                </a>
            `
        }
        else {
            return `${html(item.mixed_media_gallery_title)}`;
        }
    }(item);

    let description = `${html(item.media_description)}`
    let figureCaption = `
        <figcaption class='mixed-media-gallery-item-caption'>
            ${title}
            ${description}
        </figcaption>
    `
    let figureBody = function(fig) {
        if (Object.keys(fig.mixed_media_gallery_image).length > 0) {
            return `
            <img
                class="w-full"
                alt="${fig.mixed_media_gallery_image.alt}"
                src="${fig.mixed_media_gallery_image.url}"
            \>
            `
        } else if (fig.mixed_media_gallery_link.hasOwnProperty('embed_url')) {
            // Is embed
            let src = function(embed) {
                if (embed.provider_name == "YouTube") {
                    let matches = /^.+\:\/\/(youtu\.be|www.youtube.com)\/([A-Za-z0-9]+)/.exec(embed.embed_url);
                    let embedID = matches.length > 0 ? matches[1] : null;
                    return "https://www.youtube.com/embed/" + embedID + "?feature=oembed";
                }
            }(fig.mixed_media_gallery_link)

            return `
            <iframe
                src='${src}'
                loading='lazy'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
                title='${fig.mixed_media_gallery_link.title}'
            >
            </iframe>
            `
        }
    }(item);

    return `
        <figure>
            ${figureBody}
            ${figureCaption}
        </figure>
    `
}

export function generateMixedMediaGallery(slug, slice) {
    return `
        <div id='${slug}-gallery'>
            ${slice.map(generateGalleryItem).join('\n')}
        </div>
    `
}

function generateImageForImageTrio(image) {
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