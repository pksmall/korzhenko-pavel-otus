const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {insertAd, getAds, getUrls, getData} = require('./ads');
const {deleteAd, updateAd} = require('./ads');

const router = express.Router();

// adding Helmet to enhance your API's security
router.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// enabling CORS for all requests
router.use(cors());

// adding morgan to log HTTP requests
router.use(morgan('combined'));

// defining an endpoint to return all ads
// replace the endpoint responsible for the GET requests
router.get('/', async (req, res) => {
    res.send(await getAds());
});

router.get('/urls', async (req, res) => {
    try {
        res.send(await getUrls());
    } catch (err) {
        console.log(err);
    }
});

router.get('/data', async (req, res) => {
    try {
        res.send(await getData());
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    const newAd = req.body;
    await insertAd(newAd);
    res.send({ message: 'New ad inserted.' });
});

// endpoint to delete an ad
router.delete('/:id', async (req, res) => {
    await deleteAd(req.params.id);
    res.send({ message: 'Ad removed.' });
});

// endpoint to update an ad
router.put('/:id', async (req, res) => {
    const updatedAd = req.body;
    await updateAd(req.params.id, updatedAd);
    res.send({ message: 'Ad updated.' });
});

module.exports = router;
