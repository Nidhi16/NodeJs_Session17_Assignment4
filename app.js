// Load required module
var http = require('http');
var fs = require('fs');

// Declare data variable and set random strings into it
var data = "\nIt is a long established fact that a reader will be distracted by the readable content of a page when " +
            "looking at its layout.";

// Appending contents of data variable into lorem.txt file
fs.appendFile('lorem.txt', data, function (err) {
    if (err) throw err;
    console.log("The data was appended to file");
});