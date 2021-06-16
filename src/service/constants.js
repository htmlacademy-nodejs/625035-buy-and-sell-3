"use strict";

const DEFAULT_COMMAND = `--help`;
const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const MAX_ITEMS = 1000;
const USER_ARGV_INDEX = 2;

const TITLES = [
  `Продам книги Стивена Кинга.`,
  `Продам новую приставку Sony Playstation 5.`,
  `Продам отличную подборку фильмов на VHS.`,
  `Куплю антиквариат.`,
  `Куплю породистого кота.`,
  `Продам коллекцию журналов «Огонёк».`,
  `Отдам в хорошие руки подшивку «Мурзилка».`,
  `Продам советскую посуду. Почти не разбита.`,
  `Куплю детские санки.`,
];

const DESCRIPTIONS = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `Две страницы заляпаны свежим кофе.`,
  `При покупке с меня бесплатная доставка в черте города.`,
  `Кажется, что это хрупкая вещь.`,
  `Мой дед не мог её сломать.`,
  `Кому нужен этот новый телефон, если тут такое...`,
  `Не пытайтесь торговаться. Цену вещам я знаю.`,
];

const PRICE_RESTRICTS = {
  MIN: 1000,
  MAX: 100000,
};

const CATEGORIES = [`Книги`, `Разное`, `Посуда`, `Игры`, `Животные`, `Журналы`];

const OFFER_TYPES = {OFFER: `offer`, SALE: `sale`};

const PICTURE_RESTRICTS = {MIN: 1, MAX: 16};

const EXIT_CODE = {
  success: 0,
  failure: 1,
};

module.exports = {
  CATEGORIES,
  DEFAULT_COMMAND,
  DEFAULT_COUNT,
  DESCRIPTIONS,
  EXIT_CODE,
  FILE_NAME,
  MAX_ITEMS,
  OFFER_TYPES,
  PICTURE_RESTRICTS,
  PRICE_RESTRICTS,
  TITLES,
  USER_ARGV_INDEX,
};
