const express = require('express');
const helmet = require('helmet');

// Busca as rotas cadastradas
const routes = require('./app/routes/routes')

var app = express();

app.use(helmet());

routes(app)

app.listen(3000, () => console.log(`Serving in : 3000`))
