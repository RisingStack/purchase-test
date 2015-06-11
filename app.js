var Suite = require('suite-js-sdk').api;
var api = Suite.create();

api.purchase.list(process.env.CUSTOMER_ID, '2015-06-08T12:45:00.000Z', '2015-06-13T12:45:00.000Z', 0, 10000)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
