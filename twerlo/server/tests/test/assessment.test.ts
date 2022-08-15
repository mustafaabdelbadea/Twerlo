import chai, { expect } from 'chai';
import chaiHttp from 'chai-http'

chai.use(chaiHttp);

const app = "http://localhost:8000"
describe('Get words', function () {
    it('should return 10 objects', async function () {
     const res = await chai.request(app).get('/v1/words')
        
     expect(res.body.words).to.be.have.length(10)
    });
});

describe('Get rank', function () {
    it('return calculated rank from score', async function () {
     const res = await chai.request(app).post('/v1/rank').send({score: 50})
        
     expect(res.body.rank).to.be.equals(40)
    });

    it('return no rank provided: bad reqest', async function () {
     const res = await chai.request(app).post('/v1/rank').send()
        
     expect(res.text).to.be.equals("No score provided")
    });
});