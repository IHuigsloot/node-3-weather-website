const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d3be9c8c5897ef4cdd60f99d3336ee86/' + longitude + ',' + latitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            temperature = body.currently.temperature;
            rainChance = body.currently.precipProbability * 100

            callback(undefined, body.daily.data[0].summary + " It's currently " + temperature + " degrees out. There is a " + rainChance + "% chance of rain")
        }
    })
}

module.exports = forecast