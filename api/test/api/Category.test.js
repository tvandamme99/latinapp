const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;

describe('Category', () => {

    it('register for test category', (done) => {
        request(app).post('/register')
        .send({ "nom": "tes778787878t", "prenom": "test78758788", "tel": "0751796163", "email": "test35785788@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test category', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796163", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create category work', (done) => {
        request(app).post('/category')
        .send({ "name": "soft", "color": "rouge" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('color')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update category work', (done) => {
        request(app).put('/category/soft')
        .send({ "name": "bierre", "color": "rouge" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('color')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one category work', (done) => {
        request(app).get('/category/bierre')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('color')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All category work', (done) => {
        request(app).get('/category')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('category')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete category work', (done) => {
        request(app).delete('/category/bierre')
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
