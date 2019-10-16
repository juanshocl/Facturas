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

//fs.readFile('DTEC_1637048399811481117.xml', 'utf-8', function(err, data) {
fs.readFile('test.xml', 'utf-8', function(err, data) {

    var json = parser.toJson(data);
    console.log(JSON.parse(json));

    //console.log("to json ->", json.padStart(12));
});

//------------------

// var fs = require('fs');
// var parseString = require('xml2js').parseString;

// function loadXML(cb) {
//     fs.readFile('DTEC_1637048399811481117.xml', function(err, data) {
//         parseString(data, function(err, result) {
//             cb(result.xml.record)
//         });
//     });
// }

// loadXML(function(yourRecods) {
//     // do whatever
// });
//-----------------------------
// const camaro = require('camaro')
// var parser = require('xml2json');

// const xml = `<yyy:response xmlns:xxx='http://example.com'> <yyy:success><yyy:data>some-value</yyy:data> </yyy:success></yyy:response>`

// const template = {
//     data: '//Documento ID'
// }

// console.log(camaro(xml, template))

//-----------------------------