const Client = require('./js/classes/Client.js');
const Command = require('./js/classes/Command.js');
const { setup } = require('../secrets/config.json');
const fs = require('fs');

const client = new Client();

client.start(setup.botToken);