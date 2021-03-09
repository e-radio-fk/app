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

var user_photo_container = document.getElementById('user-photo-container');
var user_photo_caption = document.getElementsByClassName('user-photo-caption');
var user_photo = document.getElementById('user-photo');

var s = new sirv();

//
// Methods
//

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
  
    bytes.forEach((b) => binary += String.fromCharCode(b));
  
    return window.btoa(binary);
  };

function update_photo() {
    user_photo.src = photoURL;
    // s.downloadFile(photoURL, true, (result) => {
    //     result.arrayBuffer().then((buffer) => {
    //         var base64Flag = 'data:image/jpeg;base64,';
    //         var imageStr = arrayBufferToBase64(buffer);
        
    //         user_photo.src = base64Flag + imageStr;
    //         console.log('got: ', user_photo.src);
    //     });
    // });
}

function upload_photo(file) {
    /* SIRV login */
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

    /*
    * At this point we have defined our functions, but normal html cannot
    *  see our Node.JS functions (e.g. set_photo()).  Therefore, we assign
    *  onclick handlers through here!
    */
    user_photo_container.onclick = set_photo;

    update_photo();
}