const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;
let entranceDetailId;

describe('EntranceDetail', () => {

    it('register for test entranceDetail', (done) => {
        request(app).post('/register')
        .send({ "nom": "test", "prenom": "test8888", "tel": "0751796165", "email": "test878783@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test entranceDetail', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796165", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create entranceDetail work', (done) => {
        request(app).post('/entranceDetail')
        .send({ "entranceId": "soft", "formulaId": "rt", "quantity": "quantity", "total": "6,5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            entranceDetailId = body._id;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('entranceId')
            expect(body).to.contain.property('formulaId')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update entranceDetail work', (done) => {
        request(app).put(`/entranceDetail/${entranceDetailId}`)
        .send({ "entranceId": "so7f45t", "formulaId": "r457t", "quantity": "quant475ity", "total": "6,4755" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('entranceId')
            expect(body).to.contain.property('formulaId')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one entranceDetail work', (done) => {
        request(app).get(`/entranceDetail/${entranceDetailId}`)
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('entranceId')
            expect(body).to.contain.property('formulaId')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All entranceDetail work', (done) => {
        request(app).get('/entranceDetail')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('entranceDetail')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete entranceDetail work', (done) => {
        request(app).delete(`/entranceDetail/${entranceDetailId}`)
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
