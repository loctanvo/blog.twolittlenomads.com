// # Title Helper
// Usage: `{{language_title}}`

var hbs             = require('express-hbs'),
    language_title;

language_title = function () {
    var title = "";
    this.title.split("|").forEach(function(element, index, array){
        if(index == 0)
        {
            title = title + "<span class='english'>" + element + "</span>"; 
        }
        else if(index == 1){
            title = title + "<span class='german hidden'>" + element + "</span>";    
        }
        else if(index == 2){
            title = title + "<span class='norwegian hidden'>" + element + "</span>";
        }
    });
    return new hbs.handlebars.SafeString(title || '');
};

module.exports = language_title;
