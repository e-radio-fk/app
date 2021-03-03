//
//  helpers
//

/* get a copy of the sign_in_up_space node */
const sign_in_up_space_copy = document.getElementById('sign-in-or-up-space-id').cloneNode(true);

function sign_in_up_box_set_visibility(id, visibility) {
    document.getElementById(id).style.visibility = visibility;
    
    var nodes = document.getElementById(id).children;
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.visibility = visibility;
    }

    var inverse_visibility = (visibility == 'visible') ? 'hidden' : 'visible';

    document.getElementById('sign-in-button').style.visibility = inverse_visibility;
    document.getElementById('sign-in-text').style.visibility = inverse_visibility;
}

//
// Sign-in Box
//
function show_login_box() {
    document.getElementById('sign-in-button').remove();
    document.getElementById('sign-in-text').remove();

    sign_in_up_box_set_visibility('login-box', 'visible');
}
function hide_login_box() {
    document.getElementById('sign-in-or-up-space-id').innerHTML = sign_in_up_space_copy.innerHTML;

    sign_in_up_box_set_visibility('login-box', 'hidden');
}

//
// Sign-up Box
//
function show_signup_box() {
    document.getElementById('sign-in-button').remove();
    document.getElementById('sign-in-text').remove();
    document.getElementById('login-box').remove();

    sign_in_up_box_set_visibility('signup-box', 'visible');
}
function hide_signup_box() {
    document.getElementById('sign-in-or-up-space-id').innerHTML = sign_in_up_space_copy.innerHTML;

    sign_in_up_box_set_visibility('signup-box', 'hidden');
}

//
// Methods
//

function sign_in() {
    var email = document.getElementById('login-form-uname').value;
    var passw = document.getElementById('login-form-passw').value;

    // TODO: implement 

    /* set sign-in persistance to be LOCAL: even after the browser closes the user is still logged in! */
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
        /* Now sign-in with email & password */
        firebase.auth().signInWithEmailAndPassword(email, passw)
        .then((user) => {
            /* change url (without logging to history => no back and forth)  */
            window.location.replace('control-panel.html');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error (' + errorCode + '): ' + errorMessage);
        });
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Error (' + errorCode + '): ' + errorMessage);
    });
}

function sign_up() {
    // TODO: ...
}

function sign_out() {
    firebase.auth().signOut().then(() => {
        window.location.replace('/');
    }).catch((error) => {
        alert("error: ", error);
    });
}