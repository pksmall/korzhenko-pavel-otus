const app = require('../src/app');
const {startDatabase} = require('../src/database/mongo');
const {insertAd} = require('../src/ads/ads');

// A simple example test
describe('#Test RestApi function', () => {
    it('should load user data', () => {
        startDatabase();
        return insertAd({title: 'test data'})
            .then(data => {
                expect(data).toBeDefined();
                expect(data.url).toBeDefined()
            })
    })
});
