const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server');
let token;

describe('Product', () => {

    it('register for test product', (done) => {
        request(app).post('/register')
        .send({ "nom": "tes778787878t", "prenom": "test78758788", "tel": "0751796180", "email": "test3b5785788@test.fr", "password": "testtest", "role": "admin" })
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('login for test product', (done) => {
        request(app).post('/login')
        .send({ "tel": "0751796180", "password": "testtest" })
        .then((res) => {
            const body = res.body;
            token = body.accessToken
            expect(body).to.contain.property('accessToken')
            expect(body).to.contain.property('refreshToken')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, create product work', (done) => {
        request(app).post('/product')
        .send({ "name": "soft", "description": "rouge", "categoryId": "rouge", "capacity": "rouge", "quantity": "rouge", "price": "rouge" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('description')
            expect(body).to.contain.property('categoryId')
            expect(body).to.contain.property('capacity')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('price')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, update product work', (done) => {
        request(app).put('/product/soft')
        .send({ "name": "bierre", "description": "rdouge", "categoryId": "roduge", "capacity": "roduge", "quantity": "roduge", "price": "roduge" })
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('description')
            expect(body).to.contain.property('categoryId')
            expect(body).to.contain.property('capacity')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('price')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get one product work', (done) => {
        request(app).get('/product/bierre')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('_id')
            expect(body).to.contain.property('name')
            expect(body).to.contain.property('description')
            expect(body).to.contain.property('categoryId')
            expect(body).to.contain.property('capacity')
            expect(body).to.contain.property('quantity')
            expect(body).to.contain.property('price')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, get All product work', (done) => {
        request(app).get('/product')
        .set('Authorization', `Token ${token}`)
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('product')
            done();
        })
        .catch((err) => done(err));
    })

    it('OK, delete product work', (done) => {
        request(app).delete('/product/bierre')
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
