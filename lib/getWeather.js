const request = require ('request');
const {promisify} = require('util');
const fs = require('fs');


const promisifiedRequest = promisify(request);

const getWeather = async (location) => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/find?q=${location},uk&APPID=${process.env.APPID}`,
        json:true
        
    })
        return data.body;
    }
//         fs.writeFileSync('../weather-app/weatherData.json', data.body)
//         var contents = fs.readFileSync("weatherData.json")
//         var jsonContent = JSON.parse(contents);
//         console.log("name:", jsonContent.message)
//         console.log("name:", jsonContent.cod)
//         console.log("name:", jsonContent.list)
// 


module.exports = getWeather;