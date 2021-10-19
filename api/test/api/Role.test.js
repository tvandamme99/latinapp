const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;

describe('Role', () => {

    it('register for test role', (done) => {
        request(app).post('/register')
        .send({ "nom": "test", "prenom": "test", "tel": "0751796162", "email": "test@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test role', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796162", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create role work', (done) => {
        request(app).post('/role')
        .send({ "name": "admin" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update role work', (done) => {
        request(app).put('/role/admin')
        .send({ "name": "SuperAdmin" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one role work', (done) => {
        request(app).get('/role/SuperAdmin')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All role work', (done) => {
        request(app).get('/role')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('role')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete role work', (done) => {
        request(app).delete('/role/SuperAdmin')
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
