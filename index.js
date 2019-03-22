'use strict';

const fs = require('fs');
const bitmap = require('./lib/bitmap');
const transforms = require('./lib/transforms');
// node index.js blady.bmp  baldyTransformed.bmp
const inputFile = process.argv[2];
const outputFile = process.argv[3];
const myArgs = process.argv.slice(4);

fs.readFile(`${__dirname}/__tests__/assets/${inputFile}`, (error, data) => {
  if (error) {
    console.error(error);
  }

  const parsedBitMap = bitmap.parseBitMap(data);

  // This is the data to look at:
  switch (myArgs[0]) {
    case 'grayscale':
      transforms.grayscale(parsedBitMap);
      console.log(`a grayscale  image has been created at ${outputFile}`);
      break;
      // create a case for the image:
    case 'randomize':
      transforms.randomize(parsedBitMap);
      console.log(`a randomized image has been created at ${outputFile}`);
      break;
    case 'invert':
      transforms.invert(parsedBitMap);
      console.log(`an inverted image has been created at ${outputFile}`);
      break;
    default:
      console.log('Sorry, invalid tranform method');
  }

  fs.writeFile(`${__dirname}/__tests__/assets/${outputFile}`,
    parsedBitMap.buffer, (error) => {
      if (error) {
        console.error(error);
      }
    });
});
