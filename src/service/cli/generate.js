"use strict";

const chalk = require(`chalk`);
const {DEFAULT_COUNT, EXIT_CODE} = require(`../constants`);
const {writeIntoFile, generateOffers, readContent} = require(`./utils`);

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const run = async (count = DEFAULT_COUNT) => {
  try {
    const countOffer = Number.parseInt(count, 10);
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const content = generateOffers(countOffer, titles, categories, sentences);

    await writeIntoFile(content);

    console.info(chalk.green(`[${JSON.stringify(content[0], null, 2)}]`));
    process.exit(EXIT_CODE.success);
  } catch (error) {
    process.exit(EXIT_CODE.failure);
  }
};

module.exports = {
  name: `--generate`,
  run,
};
