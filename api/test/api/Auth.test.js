const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;
let refreshToken;

describe('User', () => {

    it('OK, register work', (done) => {
        request(app).post('/register')
        .send({ "nom": "test79", "prenom": "test79", "tel": "0751796162", "email": "test79@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, register without tel work', (done) => {
        request(app).post('/register')
        .send({ "nom": "test776", "prenom": "test776", "email": "test776@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            expect(res.statusCode).equal(422)
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, register unique work', (done) => {
        request(app).post('/register')
        .send({ "nom": "test7773", "prenom": "test7773", "tel": "0751796162", "email": "test7773@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            expect(res.statusCode).equal(409)
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, register password size < 6 work', (done) => {
        request(app).post('/register')
        .send({ "nom": "testze98", "prenom": "testze98", "tel": "0554659898", "email": "test9898@test.fr", "password": "te", "role": "admin" })
        .then((res) => {
            expect(res.statusCode).equal(422)
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, login work', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796162", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            refreshToken = body.refreshToken;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, profil work', (done) => {
        request(app).get('/user/profil')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('nom')
            expect(body).to.contain.property('prenom')
            expect(body).to.contain.property('tel')
            expect(body).to.contain.property('email')
            expect(body).to.contain.property('role')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update User work', (done) => {
        request(app).put('/user/update')
        .send({ "nom": "test19879", "prenom": "test198797", "tel": "0451796262", "email": "test987971@test.fr", "password": "testtest1", "role": "admin" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('nom')
            expect(body).to.contain.property('prenom')
            expect(body).to.contain.property('tel')
            expect(body).to.contain.property('email')
            expect(body).to.contain.property('password')
            expect(body).to.contain.property('role')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update User without input', (done) => {
        request(app).put('/user/update')
        .send({ "email": "test9875", "password": "testtest5" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(res.statusCode).equal(422)
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, refresh Token work', (done) => {
        request(app).post('/refresh-token')
        .set('Authorization', `Token ${refreshToken}`)
        .then((res) => {
            const body = res.body;
            token = body.accessToken;
            refreshToken = body.refreshToken;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, logout work', (done) => {
        request(app).delete('/user/logout')
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
