var witai_speech = require('../index');

var ACCESS_TOKEN = "6SQV3DEGQWIXW3R2EDFUMPQCVGOEIBCR";

witai_speech.ASR({file: 'demo.wav', developer_key: ACCESS_TOKEN}, function (err, res) {
  console.log(err, res);
});