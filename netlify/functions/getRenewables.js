const axios = require("axios");

exports.handler = function (event, context, callback) {
  const epoch = Date.now();
  const url = `https://www.transpower.co.nz/em6/data/renewables_generation?_=${epoch}`;

  axios
    .get(url)
    .then((json) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json.data),
      });
    })
    .catch((ex) => callback(ex));
};
