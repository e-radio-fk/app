//
// SETTINGS
//

import sirv from './_sirv.js';

function upload_photo(file) {
    /* get current user */
    var user = firebase.auth().currentUser;

    // TODO: add a modal for waiting the file to get uploaded!
}

function set_photo() {
    var s = new sirv();

    s.login();
    
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

/*
 * At this point we have defined our functions, but normal html cannot
 *  see our Node.JS functions (e.g. set_photo()).  Therefore, we assign
 *  onclick handlers through here!
 */
document.getElementById('change_user_photo_button').onclick = set_photo;