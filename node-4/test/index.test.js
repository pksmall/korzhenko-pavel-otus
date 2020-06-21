const app = require('../src/app');
const supertest = require('supertest')
const request = supertest(app)

describe('#Test RestApi end points', () => {
    it('should load test data', async done => {
        const res = await request.get('/');
        expect(res.status).toBe(200)
        done();
    });
    it('should get urls', async done => {
        const res = await request.get('/urls');
        expect(res.status).toBe(200)
        done();
    })
    it('should get urls', async done => {
        const res = await request.get('/data');
        expect(res.status).toBe(200)
        done();
    })
});
