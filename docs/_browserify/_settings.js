//
// SETTINGS
//

import sirv from './_sirv.js';

// TODO: add a modal for waiting the file to get uploaded!

function upload_photo(file) {
    var user = firebase.auth().currentUser;
    if (!user)
        console.log("Failure getting the user!");

    /* SIRV login */
    var s = new sirv();
    s.login(function() {
        /* prepare file path inside the server */
        var serverFilePath = '/pylarinosnick@gmail.com/user_photo.png';

        console.log(serverFilePath);

        s.uploadFile(serverFilePath, file);
    });
}

function set_photo() {
    /*
     * Open File Manager
     */
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = false;
    input.onchange = e => { 
        /* get the file; we allow only one */
        var file = e.target.files[0];

        // TODO: if not png, convert to png!

        /* upload photo */
        upload_photo(file);
    }

    /* open file manager */
    input.click();
}

/*
 * At this point we have defined our functions, but normal html cannot
 *  see our Node.JS functions (e.g. set_photo()).  Therefore, we assign
 *  onclick handlers through here!
 */
document.getElementById('change_user_photo_button').onclick = set_photo;