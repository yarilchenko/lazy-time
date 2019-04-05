const net = require('net');
const port = 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port}, () => {
        client.end();
        if(!startedElectron) {
            console.log('starting electron');
            startedElectron = true;
            const exec = require('child_process').exec;
            exec('npm run start:electron');
        }
    }
);

tryConnection();

client.on('error', () => {
    setTimeout(tryConnection, 1000);
});