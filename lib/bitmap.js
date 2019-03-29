'use strict';

const bitmap = module.exports = {};

bitmap.parseBitMap = (buffer) => {
  const parsedBitMap = {};

  const HEIGHT_OFFSET = 22;
  const PIXEL_TABLE_OFFSET = 10;
  const FILE_SIZE_OFFSET = 2;
  // attach the following properties:
  parsedBitMap.buffer = buffer;
  parsedBitMap.type = buffer.toString('utf-8', 0, 2);
  parsedBitMap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitMap.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
  parsedBitMap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitMap.colorTable = buffer.slice(54, parsedBitMap.pixelTableOffset);
  console.log(parsedBitMap.colorTable);
  return parsedBitMap;
};
