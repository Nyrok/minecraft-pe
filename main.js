'use strict';
const fetch = require("node-fetch");
require('colors');

module.exports = class Connect {
    constructor(server_api_key) {
        this.server_api_key = server_api_key;

        /**
         * Get JSON informations of your Minecraft BE Server.
         * @returns {Object} JSON Object 
         */
        this.getInformations = async () => {
            return await new Promise(async (resolve, reject) => {
                if (typeof this.server_api_key !== "string" || this.server_api_key.length !== 35 || !this.server_api_key)
                    return reject(new Error("[minecraft-pe] The provided Server API Key isn't a valid API Key.".red));
                return await fetch(`https://minecraftpocket-servers.com/api/?object=servers&element=detail&key=${server_api_key}`)
                    .then(async function (request) {
                        return resolve(request.json().then(data => {
                            return data;
                        }).catch(function (error) {
                            throw reject(new Error(`[minecraft-pe] Bad Request Response. ${error}`.red));
                        }));
                    })
                    .catch(function (error) {
                        throw reject(new Error(`[minecraft-pe] I couldn't make this request. ${error}`.red));
                    })
            })
        }
    }
}