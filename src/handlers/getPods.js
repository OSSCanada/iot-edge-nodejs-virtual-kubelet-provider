// const IOTHUB = require('azure-iothub');
// const HUB_CONNECTION_STRING = process.env['HUB_CONNECTION_STRING'];
// const registry = IOTHUB.Registry.fromConnectionString(HUB_CONNECTION_STRING);

module.exports = function(req, res, next){
  res.send();
  // registry.list(function(err, devices, status){
  //   if(err) res.send("error"); next();
  //   res.send(devices);
  // });
}