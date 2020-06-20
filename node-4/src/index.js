const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const ads = [
    {title: 'Hello, node-4 (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));
// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});
