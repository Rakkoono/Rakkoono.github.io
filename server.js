let express = require('express');
let app = express();

app.use(express.static(__dirname));

let server = app.listen(1414, function () {
    console.log('Server open on localhost:' +  server.address().port);
});