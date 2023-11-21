const server = require('./methods');
const { sq } = require('./utils/db.js');

sq.sync({ alter: true }).then(() => {
    server.listen(4000, () => {
      console.log('Servidor escuchando en el puerto', server.address().port);
    })
  })