exports.data = {};

exports.render = function(data) {
    return `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="style.css" rel="stylesheet">
    </head>
    <body>
        ${data.content}
    </body>
    </html>
    `;    
};
