"use strict";
const DEFAULT_COMMAND = `--help`;
const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const MAX_ITEMS = 1000;
const USER_ARGV_INDEX = 2;

const PRICE_RESTRICTS = {
  MIN: 1000,
  MAX: 100000,
};

const OFFER_TYPES = {OFFER: `offer`, SALE: `sale`};

const PICTURE_RESTRICTS = {MIN: 1, MAX: 16};

const EXIT_CODE = {
  success: 0,
  failure: 1,
};

module.exports = {
  DEFAULT_COMMAND,
  DEFAULT_COUNT,
  EXIT_CODE,
  FILE_NAME,
  MAX_ITEMS,
  OFFER_TYPES,
  PICTURE_RESTRICTS,
  PRICE_RESTRICTS,
  USER_ARGV_INDEX,
};
