const IOTHUB = require('azure-iothub');
const HUB_CONNECTION_STRING = process.env['HUB_CONNECTION_STRING'];
const registry = IOTHUB.Registry.fromConnectionString(HUB_CONNECTION_STRING);


