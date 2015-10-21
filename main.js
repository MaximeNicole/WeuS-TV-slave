var program = require('./program');

// Connect to server
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected with Master!');
});

// Listeners
socket.on('play', function (data) {
    if (typeof(data.timeStart) !== 'undefined') {
        console.info('play [-> timeStart]');
        program.omx.timeStartVideo(data.timeStart, data.path, data.name);
    } else {
        console.info('play');
        program.omx.launchVideo(data.path, data.name);
    }
});

socket.on('pause', function (data) {
    console.info('pause');
    program.omx.pauseVideo();
});

socket.on('resume', function (data) {
    console.info('resume');
    program.omx.resumeVideo();
});

socket.on('stop', function (data) {
    console.info('stop');
    program.omx.stopVideo();
});

socket.on('status', function (data) {
    console.info('status');
    program.omx.omxStatus();
});

socket.on('upVolume', function (data) {
    console.info('upVolume');
    program.omx.upVolumeVideo();
});

socket.on('downVolume', function (data) {
    console.info('downVolume');
    program.omx.downVolumeVideo();
});