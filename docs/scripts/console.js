/* get current user */
var user = JSON.parse(sessionStorage.getItem('currentUser'));
if (user == 'no-user')
    window.location.pathname = "/";

/* construct photo path */
var serverFilePath = '/' + user.uid + '/user_photo';
var photoURL = 'https://eradiofk.sirv.com' + serverFilePath;

console.log('got photo: ', photoURL);

var userPhoto = document.getElementById('banner-user-img');

if (photoURL)
    userPhoto.style.borderRadius = '35%';

/* set user photo */
userPhoto.src = photoURL;