const server = require('./methods');
const { conn } = require('./BD.js');

conn.sync({ alter: true }).then(() => {
    server.listen(4000, () => {
      console.log('Servidor escuchando en el puerto', server.address().port);
    })
  })