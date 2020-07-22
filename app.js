const express = require('express');
const { response } = require('express');

const app = express();

app.get('/home', function(request, response) {
    response.send('ASDF Nice job');
});

app.listen(3000);