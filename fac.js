// var fs = require('fs'),
//     xml2js = require('xml2json');

// // var parser = new xml2json.Parser();

// fs.readFile('DTEC_1637048399811481117.xml', function(err, data) {
//     if (!err) {
//         // console.log(JSON.stringify(data));
//         // parser.parseString(data, function(err, result) {
//         //     console.log(result);
//         //     console.log('Lectura terminada');
//         // });
//         // console.log(JSON.stringify(data.split());

//         var json = parser.toJson(data);
//         console.log("to json ->", json);

//     }

// });

fs = require('fs');
var parser = require('xml2json');

fs.readFile('DTEC_1637048399811481117.xml', 'ISO-8859-1', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json.padStart(12));
});