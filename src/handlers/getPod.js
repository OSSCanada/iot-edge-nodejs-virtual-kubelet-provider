// const IOTHUB = require('azure-iothub');
// const HUB_CONNECTION_STRING = process.env['HUB_CONNECTION_STRING'];
// const registry = IOTHUB.Registry.fromConnectionString(HUB_CONNECTION_STRING);

module.exports = function(req, res, next){
  res.send();
  // if(!req.query || !req.query.podid){
  //   res.send('no pod id');
  //   next();
  // }

  // registry.get(req.query.podid , function(err, device, status){
  //   if(err) {
  //     res.send('error'); 
  //     next();
  //   }
  //   res.send(device);
  // })
}