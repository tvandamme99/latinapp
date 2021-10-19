const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;
let eventId;

describe('Event', () => {

    it('register for test event', (done) => {
        request(app).post('/register')
        .send({ "nom": "te4st", "prenom": "test8488", "tel": "0751796167", "email": "test878724834@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test event', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796167", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create event work', (done) => {
        request(app).post('/event')
        .send({ "name": "soft", "recurrence": "rt", "description": "quantity" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            eventId = body._id;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('recurrence')
            expect(body).to.contain.property('description')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update event work', (done) => {
        request(app).put('/event/soft')
        .send({ "name": "soddukft", "recurrence": "rdukdt", "description": "dddd" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('recurrence')
            expect(body).to.contain.property('description')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one event work', (done) => {
        request(app).get(`/event/soddukft`)
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('recurrence')
            expect(body).to.contain.property('description')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All event work', (done) => {
        request(app).get('/event')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('event')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete event work', (done) => {
        request(app).delete('/event/soddukft')
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
