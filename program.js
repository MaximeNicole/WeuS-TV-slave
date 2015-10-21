var omx = require('./lib/omxdirector/main');

var settingsVideo = {};

var program = {

    /**
     * OMXPlayer
     */
    omx: {
        launchVideo: function (path, name) {
            if (omx.isLoaded) {
                this.stopVideo();
            }

            settingsVideo.path = path;
            settingsVideo.name = name;

            omx.setVideoDir(path);
            omx.play(name, {
                audioOutput: 'hdmi',
                modeCinema: true
            });
        },

        timeStartVideo: function (second, path, name) {
            if (omx.isLoaded) {
                var settingsVideoTmp = settingsVideo;
                this.stopVideo();
                settingsVideo = settingsVideoTmp;
            } else {
                settingsVideo.path = path;
                settingsVideo.name = name;
            }

            omx.setVideoDir(path);
            omx.play(name, {
                audioOutput: 'hdmi',
                modeCinema: true,
                timeStart: second
            });
        },

        pauseVideo: function () {
            omx.pause();
        },

        stopVideo: function () {
            omx.stop();
            settingsVideo = {};
        },

        resumeVideo: function () {
            omx.play();
        },

        upVolumeVideo: function () {
            omx.volup();
        },

        downVolumeVideo: function () {
            omx.voldown();
        },

        omxStatus: function () {
            return omx.getStatus();
        }
    }
};

module.exports = program;
