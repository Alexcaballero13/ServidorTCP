const net = require('net');
const { Comand } = require('./BD')

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on('data', async (data) => {
        const receivedData = data.toString().trim();
        await Comand.create({comand: receivedData})

        // Verificar si se recibió el comando de solicitud de código de equipo (0 0 A)
        if (receivedData === '0 0 A') {
            // Simular una respuesta válida del equipo
            const codigoEquipo = 'E12345'; // Código de equipo simulado
            const claveTiempo = '210914123456'; // Clave de tiempo simulada
            const numeroSerie = 'S123456'; // Número de serie simulado
            const referencia = 'R789'; // Referencia simulada
            const respuesta = `0 A ${codigoEquipo} ${claveTiempo} ${numeroSerie} ${referencia}`;
            
            console.log('Enviando respuesta al cliente: ' + respuesta);
            socket.write(respuesta);
        } else {
            // Enviar una respuesta de comando incorrecto
            const respuestaIncorrecta = '0 E E E E 0 A 1'; // Indica una longitud de comando incorrecta
            console.log('Enviando respuesta de comando incorrecto al cliente: ' + respuestaIncorrecta);
            socket.write(respuestaIncorrecta);
        }
    });

    socket.on('close', () => {
        console.log('Comunicación finalizada');
    });

    socket.on('error', (err) => {
        console.log(err.message);
    });
});


module.exports = server;