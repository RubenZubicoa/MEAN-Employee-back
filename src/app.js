const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const employeesRoutes = require('./routes/employees.routes')

const app = express();

// configuracion del puerto
app.set('PORT', process.env.PORT || 4000)

// logger
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// rutas de los empleados
app.use('/employees', employeesRoutes)

module.exports = app;