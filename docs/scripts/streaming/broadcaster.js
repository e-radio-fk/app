function start_mic() {
    /* lets ask only for audio */
    const constraints = {
        'audio': true
    }

    /* ask our browser for permission to use microphone */
    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            // console.log('Got MediaStream:', stream);
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
        });
}

const peerConnections = {};
const config = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"]
    }
  ]
};

const socket = io.connect(window.location.origin);
const video = document.querySelector("video");

// Media contrains
const constraints = {
  video: { facingMode: "user" }
  // Uncomment to enable audio
  // audio: true,
};