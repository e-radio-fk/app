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