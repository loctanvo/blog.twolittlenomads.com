var hbs             = require('express-hbs'),
    language_content;

language_content = function (options) {
    var content = "<div class='tab-content'>";
    this.html.split("<hr />").forEach(function(element, index, array){
        if(index == 0)
        {
            content = content + "<div class='language english'><h3 style='display:none;'>English</h3>" + element.trim() + "<hr style='display: none;'/></div>"; 
        }
        else if(index == 1){
            content = content + "<div class='language german' style='display: none;'><h3 style='display:none;'>Deutsch</h3>" + element.trim() + "<hr style='display: none;'/></div>";    
        }
        else if(index == 2){
            content = content + "<div class='language norwegian' style='display: none;'><h3 style='display:none;'>Norsk</h3>" + element.trim() + "</div>";
        }
    });
    content = content + "</div>";
    return new hbs.handlebars.SafeString(content || "");
};

module.exports = language_content;
