const Discord = require('discord.js');
const client = require('./Client.js');

/**
 * @template {keyof Discord.ClientEvents} K
 * @param {client} client 
 * @param  {Discord.ClientEvents[K]} eventArgs
 */
function runFunction(event, ...eventArgs) {}

/**
 * @template {keyof Discord.ClientEvents} K
 */
class Event {
    /**
     * 
     * @param {K} event 
     * @param {runFunction<K>} runFunction 
     */
    constructor(event, runFunction) {
        this.event = event;
        this.run = runFunction;
    }
}

module.exports = Event;