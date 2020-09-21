const app = require('./app');

app.set('port', 3333);
const server = app.listen(app.get('port'), () => {
  console.log(`Servidor rodando na porta ${server.address().port}`)
});