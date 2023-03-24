const axios = require('axios');
const moment = require('moment');

const home = (req, res) => {
    res.json({
        message: 'Welcome to the Weather API',
    });
}

const fetchWeather = async(req, res) => {
    try {
        const city = req.params.city;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
        const {data} = await axios.get(url);
        res.json({
            city: data.name,
            temperature: (data.main.temp - 273.15).toFixed(2),
            feels_like: (data.main.feels_like - 273.15).toFixed(2),
            description: data.weather[0].description,
            wind_speed: data.wind.speed,
            wind_direction: data.wind.deg,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            sunrise: moment.unix(data.sys.sunrise).format('HH:mm'),
            sunset: moment.unix(data.sys.sunset).format('HH:mm'),
            visibility: data.visibility,
            clouds: data.clouds.all
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

// export the controllers
module.exports = {
    home,
    fetchWeather,
}