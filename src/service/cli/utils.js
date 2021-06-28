"use strict";
const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {
  FILE_NAME,
  OFFER_TYPES,
  PICTURE_RESTRICTS,
  PRICE_RESTRICTS,
} = require(`../constants`);
const {getRandomInt, shuffle} = require(`../utils`);

const {MIN, MAX} = PICTURE_RESTRICTS;

const readContent = async (path) => {
  try {
    const content = await fs.readFile(path, `utf8`);

    if (!content) {
      throw new Error(`empty file for such path: ${path}`);
    }

    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    throw err;
  }
};

const writeIntoFile = async (content) => {
  try {
    await fs.writeFile(FILE_NAME, JSON.stringify(content));
  } catch (error) {
    console.error(chalk.red(`Can't write data to file...`));
    throw error;
  }
};

const getCategory = (categories) => [
  categories[getRandomInt(0, categories.length - 1)],
];
const getDescription = (sentences) => shuffle(sentences).slice(1, 5).join(` `);
const getPicture = () => `item${getRandomInt(MIN, MAX)}.jpg`;
const getSum = () => getRandomInt(PRICE_RESTRICTS.MIN, PRICE_RESTRICTS.MAX);
const getTitle = (titles) => titles[getRandomInt(0, titles.length - 1)];
const getType = () =>
  OFFER_TYPES[
    Object.keys(OFFER_TYPES)[
      Math.floor(Math.random() * Object.keys(OFFER_TYPES).length)
    ]
  ];

const generateOffer = (titles, categories, sentences) => ({
  category: getCategory(categories),
  description: getDescription(sentences),
  picture: getPicture(),
  sum: getSum(),
  title: getTitle(titles),
  type: getType(),
});

const generateOffers = (count, titles, categories, sentences) =>
  Array(count)
    .fill({})
    .map(() => generateOffer(titles, categories, sentences));

module.exports = {
  generateOffers,
  readContent,
  writeIntoFile,
};
