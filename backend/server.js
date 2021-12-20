require('dotenv').config();

const app = require('./api/index');




const port = process.env.PORT || 8093;
console.dir("Starting server with mode: " + process.env.NODE_ENV);

async function start() {
    // Listen the server
    app.listen(port, '0.0.0.0');
    console.log('Server listening on `localhost:' + port + '`.');
}

start();
