const express = require('express')
const morgan = require('morgan')
require('./helpers/init_mongodb')
require('./helpers/init_redis')
const { verifyAccessToken } = require('./helpers/jwt_helper')
const createError = require('http-errors')
const app = express()
var cors = require('cors');

app.use(cors({origin: 'http://localhost:3000'}));
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const CategoryRoute = require('./Routes/Category.route');
const EntranceRoute = require('./Routes/Entrance.route');
const EntranceDetailRoute = require('./Routes/EntranceDetail.route');
const EventRoute = require('./Routes/Event.route');
const FormulaRoute = require('./Routes/Formula.route');
const OneEventRoute = require('./Routes/OneEvent.route');
const OrderRoute = require('./Routes/Order.route');
const ProductRoute = require('./Routes/Product.route');
const ProductOrderRoute = require('./Routes/ProductOrder.route');
const RoleRoute = require('./Routes/Role.route');
const UserRoute = require('./Routes/User.route');
const AuthRoute = require('./Routes/Auth.route');

app.use('/category', verifyAccessToken, CategoryRoute);
app.use('/entrance', verifyAccessToken, EntranceRoute);
app.use('/entranceDetail', verifyAccessToken, EntranceDetailRoute);
app.use('/event', verifyAccessToken, EventRoute);
app.use('/formula', verifyAccessToken, FormulaRoute);
app.use('/oneEvent', verifyAccessToken, OneEventRoute);
app.use('/order', verifyAccessToken, OrderRoute);
app.use('/product', verifyAccessToken, ProductRoute);
app.use('/productOrder', verifyAccessToken, ProductOrderRoute);
app.use('/role', verifyAccessToken, RoleRoute);
app.use('/user', verifyAccessToken, UserRoute);
app.use('/', AuthRoute);

app.get('/', verifyAccessToken, async (req, res, next) => {
    res.send('Hello from express.');
  });
  
app.use(async (req, res, next) => {
next(createError.NotFound())
})
  
app.use((err, req, res, next) => {
res.status(err.status || 500)
res.send({
    error: {
    status: err.status || 500,
    message: err.message,
    },
})
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app;