const express = require('express');
const chalk = require('chalk');
const app = express();

app.use(express.json());

app.post('/success', (req, res) => {
  console.log(chalk.italic.blueBright('calling /success endpoint'));
  console.log(req.headers['authorization']);

  res.status(200).send({ message: 'Working' });
});

app.post('/error', (req, res) => {
  console.log(chalk.italic.redBright('calling /error endpoint'));
  console.log(req.headers['authorization']);
  
  res.status(500).send({ message: 'Error' });
});

app.listen(3001, () => {
  console.log(chalk.green.bgWhite('\n\n||*=========================================*||'));
  console.log(chalk.green.bold.bgWhite('||*Local testing API is running on port 3001*||'));
  console.log(chalk.green.bgWhite('||*=========================================*||\n\n'));
});
