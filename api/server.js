require('dotenv').config({ path: './../.env'});
const express = require('express');
const chalk = require('chalk');

const app = express();
const tinyRoutes = require('./routes/tiny');
const basicRoutes = require('./routes/basic');

app.use(express.json());
app.use('/', basicRoutes);
app.use('/', tinyRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(chalk.green.bgWhite('\n\n||*=========================================*||'));
  console.log(chalk.green.bold.bgWhite(`||*Local testing API is running on port ${process.env.APP_PORT}*||`));
  console.log(chalk.green.bgWhite('||*=========================================*||\n\n'));
});
