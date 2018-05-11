const restify = require('restify');
const server = restify.createServer();
const port = process.env['PROVIDER_SERVER_PORT'] || 3000;
const HUB_CONNECTION_STRING = process.env['HUB_CONNECTION_STRING'];

// Routes && Handlers
server.post('/createPod', require('./handlers/createPods.js'));
server.get('/getPods', require('./handlers/getPods'));
server.get('/getPod', require('./handlers/getPod'));
server.get('/getPodStatus', require('./handlers/getPodStatus'));
server.put('/updatePod', require('./handlers/updatePod'));
server.del('/deletePod', require('./handlers/deletePod'));
server.get('/getContainerLogs', require('./handlers/getContainerLogs'));
server.get('/capacity', require('./handlers/capacity'));
server.get('/nodeConditions', require('./handlers/nodeConditions'));
server.get('/nodeAddresses', require('./handlers/nodeAddresses'));

server.listen(port, function(){
  console.log('%s listening at %s', server.name, server.url);
});