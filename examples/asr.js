const witaiSpeech = require('../index');

const ACCESS_TOKEN = '6SQV3DEGQWIXW3R2EDFUMPQCVGOEIBCR';

const witai = new witaiSpeech.ASR({token: ACCESS_TOKEN});

witai.recognize('./demo.wav').then(res => {
  console.log('res.status', res.status)
  return res.json();
}).then((result) => {
  console.log('result json', result);
});
