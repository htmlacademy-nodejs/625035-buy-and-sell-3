"use strict";

const DEFAULT_PORT = 8080;

const express = require(`express`);
const myRoutes = require(`./routes/my`);
const offersRoutes = require(`./routes/offers`);

const app = express();

app.use(`/my`, myRoutes);
app.use(`/offers`, offersRoutes);

app.get(`/`, (req, res) => res.send(`/`));
app.get(`/login`, (req, res) => res.send(`/login`));
app.get(`/register`, (req, res) => res.send(`/register`));
app.get(`/search`, (req, res) => res.send(`/search`));

app.listen(DEFAULT_PORT, () =>
  console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`)
);
