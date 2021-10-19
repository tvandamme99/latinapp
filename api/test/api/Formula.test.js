const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;

describe('Formula', () => {

    it('register for test formula', (done) => {
        request(app).post('/register')
        .send({ "nom": "tes77878787478t", "prenom": "test7875847788", "tel": "0751796171", "email": "test357185788@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test formula', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796171", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create formula work', (done) => {
        request(app).post('/formula')
        .send({ "name": "soft", "description": "rouge", "price": "price" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('description')
            expect(body).to.contain.property('price')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update formula work', (done) => {
        request(app).put('/formula/soft')
        .send({ "name": "bierre", "description": "bierre", "price": "bierre" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('description')
            expect(body).to.contain.property('price')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one formula work', (done) => {
        request(app).get('/formula/bierre')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('description')
            expect(body).to.contain.property('price')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All formula work', (done) => {
        request(app).get('/formula')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('formula')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete formula work', (done) => {
        request(app).delete('/formula/bierre')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            expect(res.statusCode).equal(200)
            done();
        })
        .catch((err) => done(err));
    })
    it('OK, delete user work', (done) => {
        request(app).delete('/user/delete')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            expect(res.statusCode).equal(200)
            done();
        })
        .catch((err) => done(err));
    })
})
