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

const HTTP_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const DEFAULT_PORT = 3000;

module.exports = {
  DEFAULT_COMMAND,
  DEFAULT_PORT,
  DEFAULT_COUNT,
  EXIT_CODE,
  FILE_NAME,
  HTTP_CODE,
  MAX_ITEMS,
  OFFER_TYPES,
  PICTURE_RESTRICTS,
  PRICE_RESTRICTS,
  USER_ARGV_INDEX,
};
