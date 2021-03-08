//
// SETTINGS
//

import sirv from './_sirv.js';

// TODO: add a modal for waiting the file to get uploaded!
// TODO: check if we are logged in as a user before doing anything!

//
// Variables
//

var user;
var serverFilePath;
var photoURL;

//
// Methods
//

function update_photo() {
    // TODO: ...
}

function upload_photo(file) {
    /* SIRV login */
    var s = new sirv();
    s.login(() => {
        s.uploadFile(serverFilePath, file, function() {
            update_photo();
        });
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

        /* upload photo */
        upload_photo(file);
    }

    /* open file manager */
    input.click();
}

//==========//
//   CODE   //
//==========//

/* get current user */
user = JSON.parse(sessionStorage.getItem('currentUser'));
console.log('settings: user is ', user);

/* sanity checks */
if ((!user) || (user.uid == undefined)) 
{
    console.log("Failure getting the user!");
    window.location.pathname = "..";
    // TODO: show error on main screen!
}
else 
{
    /* construct photo path */
    serverFilePath = '/' + user.uid + '/user_photo';
    photoURL = 'https://eradiofk.sirv.com' + serverFilePath;

    var user_photo_container = document.getElementById('user-photo-container');
    var user_photo_caption = document.getElementsByClassName('user-photo-caption');
    var user_photo = document.getElementById('user-photo');

    /*
    * At this point we have defined our functions, but normal html cannot
    *  see our Node.JS functions (e.g. set_photo()).  Therefore, we assign
    *  onclick handlers through here!
    */
    user_photo_container.onclick = set_photo;

    user_photo_container.onmouseover = function() {
        user_photo_caption.innerHTML = "Change Photo";
        user_photo_caption.style.
    };
    user_photo_container.onmouseout = function() {
        user_photo_caption.innerHTML = "";
    };

    user_photo.src = photoURL;
}