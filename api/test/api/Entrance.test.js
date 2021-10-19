const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;
let entranceId;

describe('Entrance', () => {

    it('register for test entrance', (done) => {
        request(app).post('/register')
        .send({ "nom": "test", "prenom": "test8888", "tel": "0751796164", "email": "test878783@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test entrance', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796164", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create entrance work', (done) => {
        request(app).post('/entrance')
        .send({ "eventId": "soft", "date": "1999-06-02T00:00:00.000Z", "typePaiement": "cb", "total": "6,5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            entranceId = body._id;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('date')
            expect(body).to.contain.property('typePaiement')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update entrance work', (done) => {
        request(app).put(`/entrance/${entranceId}`)
        .send({ "eventId": "soft1", "date": "1999-06-02T00:00:00.000Z", "typePaiement": "cb", "total": "6,5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('date')
            expect(body).to.contain.property('typePaiement')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one entrance work', (done) => {
        request(app).get(`/entrance/${entranceId}`)
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('date')
            expect(body).to.contain.property('typePaiement')
            expect(body).to.contain.property('total')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All entrance work', (done) => {
        request(app).get('/entrance')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('entrance')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete entrance work', (done) => {
        request(app).delete(`/entrance/${entranceId}`)
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
