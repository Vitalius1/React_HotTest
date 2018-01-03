// webpack-dev-middleware
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);
// express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// making sure we can access the files by typing the names into the browser
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));

app.get('/api/hotsauces.json', (req, res) => {
    let rawdata = fs.readFileSync('./hotsauces_copy.json');
    let hotsauces = JSON.parse(rawdata);
    res.json(hotsauces);
});

app.post('/api/newSauce.json', (req, res) => {
    fs.readFile('./hotsauces_copy.json', 'utf-8', function (err, data) {
        if (err) throw err
        let jsonObj = JSON.parse(data),
            listLength = jsonObj.list.length;
        jsonObj.list.push({
            id: jsonObj.list[listLength - 1].id + 1,
            title: req.body.title,
            subtitle: req.body.subtitle,
            description: req.body.description,
            imageURL: req.body.imageURL
        })

        fs.writeFile('./hotsauces_copy.json', JSON.stringify(jsonObj), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
            res.redirect('/api/hotsauces.json');
        })
    })
});

app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
    },
}));


app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
    console.log('To STOP application press CTRL + C');
});