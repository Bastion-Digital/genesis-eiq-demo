const axios = require('axios');

const WEATHERAPI = '2950f71791469f19a3a64dd761846fb0';

exports.handler = function (event, context, callback) {
  const lat = event.queryStringParameters.lat;
  const lng = event.queryStringParameters.long;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&units=metric&appid=${WEATHERAPI}`;
  
  axios.get(url)
    .then(json => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json.data)
      });
    })
    .catch(ex => callback(ex));
}