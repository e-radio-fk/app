function get_photo_contents() {

}

function upload_photo(file) {
    /* get current user */
    var user = firebase.auth().currentUser;

    /*
     * upload photo to Firebase-cloud
     *
     * Must be saved in: /users/(email)/(photoName)
     */
    var photoRef = storage.child("users/" + user.email + "/" + file.name);

    /* upload js-file */
    photoRef.put(file).then((snapshot) => {
        console.log('Uploaded ' + file.name);

        snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);

            /* set photoURL in user-API */
            user.updateProfile({
                photoURL: photoURL
            }).then(function() {
                // Update successful.
            }).catch(function(error) {
                // An error happened.
            });
        });
    });

    // TODO: add a modal for waiting the file to get uploaded!
}

function set_photo() {
    /*
     * Open File Manager
     */
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = false;
    input.onchange = e => { 
        var file = e.target.files[0];

        upload_photo(file);
    }

    /* open file manager */
    input.click();
}

handleClientLoad();