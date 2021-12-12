const Event = require('../classes/Event.js');

module.exports = new Event('ready', () => {
    console.log("ready!");
});