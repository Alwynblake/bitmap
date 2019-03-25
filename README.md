# Bitmap Transformer

[![Build Status](https://travis-ci.com/Alwynblake/bitmap.svg?branch=master)](https://travis-ci.com/Alwynblake/bitmap)

Group Authors:  Alistair Blake, Andrew Davis, Jerome Joof, Sarkis Aghazarian

This is a command line application that transforms .bmp files.

## How To Use:

* You can run one of three transforms on the baldy.bmp asset.
* There are three options of transforms you can run:
1. `node index.js baldy.bmp grayscale.bmp grayscale`
2. `node index.js baldy.bmp randomize.bmp randomize`
3. `node index.js baldy.bmp invert.bmp invert`

Once you have run a transform method, you can look inside the assets folder inside of __tests__ and view the output.