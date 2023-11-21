const net = require('net');
const { Rms } = require("./models/Rms");

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on('data', async (data) => {
        const dataStr = data.toString().trim(); // Convertir datos a cadena y eliminar espacios en blanco

        // Verificar que la cadena inicie con "[" y termine con "]"
        if (dataStr.startsWith('[') && dataStr.endsWith(']')) {
          // Eliminar los corchetes "[" y "]" de la cadena
          const dataWithoutBrackets = dataStr.slice(1, -1);
          console.log(dataWithoutBrackets);
          
          // Dividir la cadena por comas para obtener los valores
          const dataArray = dataWithoutBrackets.split(',');
          if (dataArray.length === 8) {
            const equipmentId = parseInt(dataArray[0]);
            const controlId = parseInt(dataArray[1]);
            const voltage = parseFloat(dataArray[2]);
            const current = parseFloat(dataArray[3]);
            const power = parseFloat(dataArray[4]);
            const energyConsumption = parseFloat(dataArray[5]);
            const frequency = parseFloat(dataArray[6]);
            const time = dataArray[7]
        
            const rms = await Rms.create({
                equipmentId,
                controlId,
                voltage,
                current,
                power,
                energyConsumption,
                time,
                frequency
            }).catch(error => {
                console.error('Error al crear el objeto Rms:', error);
            });

            socket._write('Insercion generada correctamente')
            
        }}
            
    });

    socket.on('close', () => {
        console.log('Comunicación finalizada');
    });

    socket.on('error', (err) => {
        console.log(err.message);
    });
});


module.exports = server;