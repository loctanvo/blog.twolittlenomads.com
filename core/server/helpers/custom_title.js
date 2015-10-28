// # Title Helper
// Usage: `{{custom_title}}`

var hbs             = require('express-hbs'),
    custom_title;

custom_title = function () {
    return new hbs.handlebars.SafeString(this.title + '<a href="#">Skjerabagera?</a>' || '');
};

module.exports = custom_title;
