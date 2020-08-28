const Express = require('express')
const Router = Express.Router();

Router.use('/', (req, res) => res.render('index'));



module.exports = Router