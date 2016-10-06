var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am actually learning this stuff');
});


app.get('/nickname', function(request, response){
    response.send('smiling-bison');
});

app.listen(process.env.PORT || 4000);