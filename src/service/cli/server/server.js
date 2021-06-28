"use strict";

const http = require(`http`);
const chalk = require(`chalk`);
const {onClientConnect} = require(`./utils`);
const {DEFAULT_PORT} = require(`../../constants`);

const run = (port = DEFAULT_PORT) => {
  http
    .createServer(onClientConnect)
    .listen(port)
    .on(`listening`, () => {
      console.info(chalk.green(`Ожидаю соединений на ${port}`));
    })
    .on(`error`, ({message}) => {
      console.error(`Ошибка при создании сервера: ${message}`);
    });
};

module.exports = {
  name: `--server`,
  run,
};
