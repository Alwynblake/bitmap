'use strict';

const transforms = require('../lib/transforms');

describe('lib/transforms.js', () => {
  describe('testing transforms.grayscale', () => {
    test('function should return expected values', () => {
      const sampleObj = {};
      sampleObj.buffer = Buffer.from([0, 56, 80, 70]);
      sampleObj.colorTable = sampleObj.buffer.slice(0);
      const newArray = transforms.grayscale(sampleObj);
      expect(newArray.buffer.readUInt8(1)).toBe(0);
      expect(newArray.buffer.readUInt8(2)).toBe(0);
    });
  });

  describe('testing transforms.random', () => {
    test('function should return expected values', () => {
      const sampleObj = {};
      sampleObj.buffer = Buffer.from([0, 0, 80, 70]);
      sampleObj.colorTable = sampleObj.buffer.slice(0);
      const newArray = transforms.randomize(sampleObj);
      expect(newArray.buffer.readUInt8(1)).not.toBe(0);
      expect(newArray.buffer.readUInt8(2)).not.toBe(80);
    });
  });

  describe('testing transforms.invert', () => {
    test('function should return expected values', () => {
      const sampleObj = {};
      sampleObj.buffer = Buffer.from([0, 0, 80, 70]);
      sampleObj.colorTable = sampleObj.buffer.slice(0);
      const newArray = transforms.invert(sampleObj);
      expect(newArray.buffer.readUInt8(1)).toBe(255);
      expect(newArray.buffer.readUInt8(2)).toBe(175);
    });
  });
});
