const express = require('express');
const helmet = require('helmet');

// Busca as rotas cadastradas
const routes = require('./app/routes/routes')

var app = express();

app.use(helmet());

routes(app)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Serving in : ${port}`))
