'use strict';

const fs = require('fs');
const bitmap = require('../lib/bitmap');

describe('lib/bitmap.js', () => {
  describe('testing for valid bitmap details', () => {
    test('testing to see that we are receiving expected file paths ', (done) => {
      fs.readFile(`${__dirname}/assets/baldy.bmp`, (error, data) => {
        const parsedBitMap = bitmap.parseBitMap(data);
        expect(error).toBeNull();
        expect(parsedBitMap).not.toBeNull();
        done();
      });
    });

    test('testing to see that bitmap offsets are correct ', (done) => {
      fs.readFile(`${__dirname}/assets/baldy.bmp`, (error, data) => {
        const parsedBitMap = bitmap.parseBitMap(data);
        expect(error).toBeNull();
        expect(parsedBitMap.fileSize).toEqual(15146);
        expect(parsedBitMap.type).toEqual('BM');
        expect(parsedBitMap.pixelTableOffset).toEqual(1146);
        expect(parsedBitMap.height).toEqual(125);
        done();
      });
    });
  });
});
