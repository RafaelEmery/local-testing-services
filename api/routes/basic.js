const express = require('express');
const chalk = require('chalk');
const router = express.Router();

router.get('/success', (req, res) => {
    console.log(chalk.italic.blueBright('calling /success endpoint'));
    console.log(req.headers['authorization']);
  
    res.status(200).send({ message: 'Working' });
});

router.get('/error', (req, res) => {
    console.log(chalk.italic.redBright('calling /error endpoint'));
    console.log(req.headers['authorization']);
    
    res.status(500).send({ message: 'Error' });
});

router.get('/error/:statusCode', (req, res) => {
    const statusCode = req.params.statusCode;
    
    console.log(chalk.italic.redBright('calling /error endpoint'));
    console.log(req.headers['authorization']);
    
    res.status(statusCode).send({ message: 'Error' });
});

router.post('/success', (req, res) => {
    console.log(chalk.italic.blueBright('calling /success endpoint'));
    console.log(req.headers['authorization']);
  
    res.status(200).send({ message: 'Working' });
});
  
router.post('/error', (req, res) => {
    console.log(chalk.italic.redBright('calling /error endpoint'));
    console.log(req.headers['authorization']);
    
    res.status(500).send({ message: 'Error' });
});

router.post('/error/:statusCode', (req, res) => {
    const statusCode = req.params.statusCode;

    console.log(chalk.italic.redBright('calling /error endpoint'));
    console.log(req.headers['authorization']);
    
    res.status(statusCode).send({ message: 'Error' });
});

module.exports = router;