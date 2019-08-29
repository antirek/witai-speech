'use strict';

const fetch = require('node-fetch');
const fs = require('fs');

/**
 *
 */
class WitaiASR {
  /**
   *
   * @param {*} options
   */
  constructor(options) {
    this.witaiUrl = 'https://api.wit.ai/speech';
    this.token = options.token;
  }

  /**
   *
   * @param {*} filepath
   * @return {Promise}
   */
  async recognize(filepath) {
    const stream = fs.createReadStream(filepath);
    return fetch(this.witaiUrl, {
      method: 'POST',      
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'audio/wav',
      },
      body: stream,
    });
  }
}

module.exports = WitaiASR;
