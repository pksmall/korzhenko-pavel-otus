const app = require('./app');
const {startDatabase} = require('./database/mongo');
const {insertAd} = require('./ads/ads');

// start the in-memory MongoDB instance
startDatabase().then(async () => {
    // new records for test purpose
    await insertAd({
        title: 'Simple Feed Blog Feed.',
        url: "https://www.feedforall.com/sample-feed.xml"
    });

    const port = process.env.PORT || 3001;
    // start the server
    app.listen(port, async () => {
        console.log('listening on port ' + port);
    });
});
