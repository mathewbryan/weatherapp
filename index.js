const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser')


const getWeather = require('./lib/getWeather')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

app.get('/', async(req, res) => {
   
    res.render('index')
});
app.post('/', async(req, res) => {
    let location = req.body.location
    let data = await getWeather(location)
    console.log(location)
    let name = data.list[0].name
    let temp = data.list[0].main.temp
    let hum = data.list[0].main.humidity
    let rain = data.list[0].rain
    let wind = data.list[0].wind.speed
    let pressure = data.list[0].main.pressure
    console.log(data.list)
    res.render('index', {data: {name, temp, hum, rain, wind, pressure}})
});


app.listen(3000, ()=> {
    console.log('server listening on port 3000');

});


// APPID="29b8d23194b3f9e5d570001263abcca1" node index.js
