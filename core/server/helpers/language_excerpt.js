// # Excerpt Helper
// Usage: `{{excerpt}}`, `{{excerpt words="50"}}`, `{{excerpt characters="256"}}`
//
// Attempts to remove all HTML from the string, and then shortens the result according to the provided option.
//
// Defaults to words="50"

var hbs             = require('express-hbs'),
    _               = require('lodash'),
    downsize        = require('downsize'),
    language_excerpt;

language_excerpt = function (options) {
    var truncateOptions = (options || {}).hash || {};

    truncateOptions = _.pick(truncateOptions, ['words', 'characters']);
    _.keys(truncateOptions).map(function (key) {
        truncateOptions[key] = parseInt(truncateOptions[key], 10);
    });
    
    if (!truncateOptions.words && !truncateOptions.characters) {
        truncateOptions.words = 50;
    }

    var text = "";
    this.html.split("<hr />").forEach(function(element, index, array){
        if(index == 0)
        {
            text = text + "<span class='english language'>" + trimAndDownsize(element, truncateOptions) + "</span>"; 
        }
        else if(index == 1){
            console.log("yes, german");
            text = text + "<span class='german language' style='display:none;'>" + trimAndDownsize(element, truncateOptions) + "</span>";    
        }
        else if(index == 2){
            console.log("yes, norwegian");
            text = text + "<span class='norwegian language' style='display:none;'>" + trimAndDownsize(element, truncateOptions) + "</span>";
        }
    });
    
    function trimAndDownsize(content, options){
        var escaped = String(content.trim());
        // Strip inline and bottom footnotes
        escaped = escaped.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, '');
        escaped = escaped.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, '');
        // Strip other html
        escaped = escaped.replace(/<\/?[^>]+>/gi, '');
        escaped = escaped.replace(/(\r\n|\n|\r)+/gm, ' ');
 
        return downsize(escaped, options);        
    }
    
    return new hbs.handlebars.SafeString(text || "");
};

module.exports = language_excerpt;
