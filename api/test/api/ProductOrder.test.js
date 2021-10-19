const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;
let productOrderId;

describe('ProductOrder', () => {

    it('register for test productOrder', (done) => {
        request(app).post('/register')
        .send({ "nom": "test", "prenom": "test8888", "tel": "0751796197", "email": "test87jjjjj8783@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test productOrder', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796197", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create productOrder work', (done) => {
        request(app).post('/productOrder')
        .send({ "name": "soft", "quantity": "rt", "orderId": "quantity", "total": "6,5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            productOrderId = body._id;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('orderId')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update productOrder work', (done) => {
        request(app).put(`/productOrder/${productOrderId}`)
        .send({ "name": "sdoft", "quantity": "rdt", "orderId": "quandtity", "total": "6,d5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('orderId')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one productOrder work', (done) => {
        request(app).get(`/productOrder/${productOrderId}`)
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('orderId')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All productOrder work', (done) => {
        request(app).get('/productOrder')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('productOrder')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete productOrder work', (done) => {
        request(app).delete(`/productOrder/${productOrderId}`)
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
