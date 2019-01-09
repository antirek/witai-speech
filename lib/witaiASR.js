'use strict';

const rp = require('request-promise');
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
    return rp({
      method: 'POST',
      url: this.witaiUrl,
      headers: {
        // 'User-Agent': 'Request-Promise',
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'audio/wav',
      },
      encoding: null,
      body: fs.createReadStream(filepath),
    })
        .then((buffer) => {
          return buffer.toString('utf8');
        });
  }
}

module.exports = WitaiASR;
