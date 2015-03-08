var express = require('express');
var router = express.Router();

var marked = require('marked');

router.get('/', function(req, res, next) {

    var fs = require('fs');
    var apis = [];

    var descriptionFile = fs.readFileSync('./doc/description.json');
    var description = JSON.parse(descriptionFile);
    for(var i in description.table) {

        var obj = {};
        for(var j in description.table[i].list) {
            var file = './doc/' + description.table[i].list[j].url + '.md';
            var content;
            try {
                content = fs.readFileSync(file, {encoding: 'utf-8'});
            } catch(e) {
                continue;
            }
            var html = marked(content);

            obj[description.table[i].list[j].url] = html;
        }

        apis.push(obj);
    }

    res.render('index', {apis: apis, table: description.table, title: description['page-title']});
});

module.exports = router;
