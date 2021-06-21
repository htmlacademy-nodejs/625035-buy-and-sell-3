"use strict";
const fs = require(`fs`);

const {
  CATEGORIES,
  DESCRIPTIONS,
  EXIT_CODE,
  FILE_NAME,
  OFFER_TYPES,
  PICTURE_RESTRICTS,
  PRICE_RESTRICTS,
  TITLES,
} = require(`../constants`);
const {getRandomInt, shuffle} = require(`../utils`);

const {MIN, MAX} = PICTURE_RESTRICTS;

const writeIntoFile = (content, onCompleted) => {
  fs.writeFile(FILE_NAME, JSON.stringify(content), (err) => {
    if (err) {
      process.exit(EXIT_CODE.failure);
    }

    onCompleted();
  });
};

const getType = () =>
  OFFER_TYPES[
    Object.keys(OFFER_TYPES)[
      Math.floor(Math.random() * Object.keys(OFFER_TYPES).length)
    ]
  ];
const getTitle = () => TITLES[getRandomInt(0, TITLES.length - 1)];
const getDescription = () => shuffle(DESCRIPTIONS).slice(1, 5).join(` `);
const getSum = () => getRandomInt(PRICE_RESTRICTS.MIN, PRICE_RESTRICTS.MAX);
const getPicture = () => `item${getRandomInt(MIN, MAX)}.jpg`;
const getCategory = () => [CATEGORIES[getRandomInt(0, CATEGORIES.length - 1)]];

const generateOffer = () => ({
  type: getType(),
  title: getTitle(),
  description: getDescription(),
  sum: getSum(),
  picture: getPicture(),
  category: getCategory(),
});

const generateOffers = (count) => Array(count).fill({}).map(generateOffer);

module.exports = {
  writeIntoFile,
  generateOffers,
};