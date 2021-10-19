const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;
let oneEventId;

describe('OneEvent', () => {

    it('register for test oneEvent', (done) => {
        request(app).post('/register')
        .send({ "nom": "test", "prenom": "test8888", "tel": "0751796172", "email": "test87878372@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test oneEvent', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796172", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create oneEvent work', (done) => {
        request(app).post('/oneEvent')
        .send({ "eventId": "soft", "dateDebut": "1999-06-02T00:00:00.000Z", "dateFin": "1999-06-02T00:00:00.000Z", "description": "6,f5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            oneEventId = body._id;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('dateDebut')
            expect(body).to.contain.property('dateFin')
            expect(body).to.contain.property('description')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update oneEvent work', (done) => {
        request(app).put(`/oneEvent/${oneEventId}`)
        .send({ "eventId": "sfoft", "dateDebut": "1999-06-02T00:00:00.000Z", "dateFin": "1999-06-02T00:00:00.000Z", "description": "6,ff5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('dateDebut')
            expect(body).to.contain.property('dateFin')
            expect(body).to.contain.property('description')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one oneEvent work', (done) => {
        request(app).get(`/oneEvent/${oneEventId}`)
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('eventId')
            expect(body).to.contain.property('dateDebut')
            expect(body).to.contain.property('dateFin')
            expect(body).to.contain.property('description')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All oneEvent work', (done) => {
        request(app).get('/oneEvent')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('oneEvent')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete oneEvent work', (done) => {
        request(app).delete(`/oneEvent/${oneEventId}`)
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
