const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// --- CONFIGURATION ---
// CHANGE THIS to your Arduino Port (e.g., "COM3" on Windows, "/dev/ttyUSB0" on Mac)
const portName = "COM10"; 
const port = new SerialPort({ path: portName, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

app.use(express.static('public')); // Serve the HTML file

// Handle serial port errors
port.on('error', (err) => {
    console.error('Serial port error:', err.message);
    console.log('\nTroubleshooting:');
    console.log('1. Close Arduino IDE Serial Monitor if it\'s open');
    console.log('2. Unplug and replug the Arduino');
    console.log('3. Check the port name is correct (currently: ' + portName + ')');
});

parser.on('data', (data) => {
    try {
        const jsonData = JSON.parse(data); // Parse Arduino JSON
        io.emit('sensorData', jsonData);   // Send to Web Page
        console.log("Data:", jsonData);
    } catch (e) {
        console.log("Partial data error (skipping frame)");
    }
});

http.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});