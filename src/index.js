require('./database')
const app = require('./app');
    
// ejecuta la aplicacion en el puerto configurado previamente
app.listen(app.get('PORT'), () => {
    console.log('Server on port', app.get('PORT'))
})

