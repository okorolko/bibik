#!/usr/bin/env node

var fs = require("fs"),
  path = require("path");
var p = "../public/pics/product_pics";
var targetFile = "../models/lookbookTest.js";
var fileNames = [];

fs.readdir(p, function (err, files) {
  if (err) {
    throw err;
  }

  files.map(function (file) {
    return path.join(p, file)
  }).filter(function (file) {
    return fs.statSync(file).isFile() && path.extname(file) ==='.jpg';
  }).forEach(function (file) {
    fileNames.push("'" + path.basename(file).toString() + "'" + "\r\n")
  });
  console.log(fileNames)

  fs.appendFile(targetFile, fileNames, function (err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
});

