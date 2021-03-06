/* get current user */
var user = JSON.parse(sessionStorage.getItem('currentUser'));

/* construct photo path */
var serverFilePath = '/' + user.uid + '/user_photo.png';
var photoURL = 'https://eradiofk.sirv.com' + serverFilePath;

console.log('got photo: ', photoURL);

/* set user photo */
document.getElementById('banner-user-img').src = photoURL;