'use strict';

var wit = require('node-wit');
var fs = require('fs');

var WitaiASR = function (options, callback) {    
    
    //reqired
    var params = {
        key: options['developer_key'],
        file: options['file'],
        filetype: options['filetype'] || 'audio/wav'
    };
    
    var stream = fs.createReadStream(params.file);
    wit.captureSpeechIntent(params.key, stream, params.filetype, callback);
};

module.exports = WitaiASR;