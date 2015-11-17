var hbs             = require('express-hbs'),
    language_content;

language_content = function (options) {
    var content = "<div class='tab-content'>";
    this.html.split("<hr />").forEach(function(element, index, array){
        if(index == 0)
        {
            content = content + "<div class='language english'>" + element.trim() + "</div>"; 
        }
        else if(index == 1){
            content = content + "<div class='language german' style='display: none;'>" + element.trim() + "</div>";    
        }
        else if(index == 2){
            content = content + "<div class='language norwegian' style='display: none;'>" + element.trim() + "</div>";
        }
    });
    content = content + "</div>";
    return new hbs.handlebars.SafeString(content || "");
};

module.exports = language_content;
