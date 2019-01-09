const witaiSpeech = require('../index');

const ACCESS_TOKEN = '6SQV3DEGQWIXW3R2EDFUMPQCVGOEIBCR';

const witai = new witaiSpeech.ASR({token: ACCESS_TOKEN});

witai.recognize('./demo.wav').then((result) => {
  console.log('res', result);
});
