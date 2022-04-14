const express = require('express');
const pm2 = require('pm2');
const app = express();

app.set('port', 80);

app.use(express.static('resource'));

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});