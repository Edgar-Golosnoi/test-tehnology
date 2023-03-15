/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index').default;
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


// обработка ошибки
app.use(errorHandler)




const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}


start();