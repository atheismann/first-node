// load express module
const express = require('express');

// create our express app
const app = express();

//define a "root" route directly on app
//Tomorrow, we'll use best practice routing
app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

// tell the app to listed on port 3000
// for HTTP requests from clients
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

