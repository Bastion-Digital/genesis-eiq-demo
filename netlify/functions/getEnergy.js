const axios = require("axios");

exports.handler = function (event, context, callback) {
  const url = `https://www.transpower.co.nz/aws/data/current_generation/1663709400?_=1663713617726`;

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
