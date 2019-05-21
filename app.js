const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk')
const app = express();
app.use(express.static(path.resolve(__dirname, './')))

app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
    res.send(html)
})
app.listen(5656, res => {
    console.log(chalk.yellow('Start Service On 5656'));
});
