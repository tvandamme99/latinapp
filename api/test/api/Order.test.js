const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;
let orderId;

describe('Order', () => {

    it('register for test order', (done) => {
        request(app).post('/register')
        .send({ "nom": "test", "prenom": "test8888", "tel": "0751796174", "email": "test74877474878372@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test order', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796174", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create order work', (done) => {
        request(app).post('/order')
        .send({ "date": "1999-06-02T00:00:00.000Z", "userId": "sdsd", "eventId": "sds", "typePaiement": "cb", "total": "6,fd5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            orderId = body._id;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('date')
            expect(body).to.contain.property('userId')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('typePaiement')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update order work', (done) => {
        request(app).put(`/order/${orderId}`)
        .send({ "date": "1999-06-02T00:00:00.000Z", "userId": "sddsd", "eventId": "sdds", "typePaiement": "cb", "total": "6,dfd5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('date')
            expect(body).to.contain.property('userId')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('typePaiement')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one order work', (done) => {
        request(app).get(`/order/${orderId}`)
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('date')
            expect(body).to.contain.property('userId')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('typePaiement')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All order work', (done) => {
        request(app).get('/order')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('order')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete order work', (done) => {
        request(app).delete(`/order/${orderId}`)
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
