'use strict';

const transforms = module.exports = {};

transforms.grayscale = (parsedBitMap) => {
  parsedBitMap.colorTable.forEach((value, position, array) => {
    if (position % 4 === 1) {
      parsedBitMap.colorTable.writeUInt8(array[position - 1],
        position);
    }
    if (position % 4 === 2) {
      parsedBitMap.colorTable.writeUInt8(array[position - 2],
        position);
    }
    if (position % 4 === 3) {
      parsedBitMap.colorTable.writeUInt8(array[position - 3],
        position);
    }
  });
  return parsedBitMap;
};

transforms.randomize = (parsedBitMap) => {
  parsedBitMap.colorTable.forEach((value, position, array) => {
    if (position % 4 === 1) {
      parsedBitMap.colorTable
        .writeUInt8(Math.abs((Math.random() * 255) - array[position]), position);
    }
    if (position % 4 === 2) {
      parsedBitMap.colorTable
        .writeUInt8(Math.abs((Math.random() * 255) - array[position]), position);
    }
    if (position % 4 === 3) {
      parsedBitMap.colorTable
        .writeUInt8(Math.abs((Math.random() * 255) - array[position]), position);
    }
  });
  return parsedBitMap;
};

transforms.invert = (parsedBitMap) => {
  parsedBitMap.colorTable.forEach((value, position, array) => {
    if (position % 4 === 1) {
      parsedBitMap.colorTable.writeUInt8(255 - array[position],
        position);
    }
    if (position % 4 === 2) {
      parsedBitMap.colorTable.writeUInt8(255 - array[position],
        position);
    }
    if (position % 4 === 3) {
      parsedBitMap.colorTable.writeUInt8(255 - array[position],
        position);
    }
  });
  return parsedBitMap;
};
transforms.blueman = (parsedBitMap) => {
  parsedBitMap.colorTable.forEach((value, position, array) => {
    if (position % 4 === 1) {
      parsedBitMap.colorTable
        .writeUInt8(Math.abs((Math.random() * 255) - array[position]), position);
    }
    if (position % 4 === 2) {
      parsedBitMap.colorTable.writeUInt8(255 - array[position],
        position);
    }
    if (position % 4 === 3) {
      parsedBitMap.colorTable.writeUInt8(255 - array[position],
        position);
    }
  });
  return parsedBitMap;
};
