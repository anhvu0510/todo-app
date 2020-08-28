const Express = require('express')

const app = Express();

const Port = process.env.Port || 3000

app.set('view engine','ejs')
app.set('Views','./Views')

app.use('/', require('./Routes/index.route'));

app.listen(Port , () => console.log(`Server is Listening At ${Port}`))