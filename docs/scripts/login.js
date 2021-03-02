function show_login_box() {
    document.getElementById('login-box').style.visibility = 'visible';
    
    var nodes = document.getElementById('login-box').children;
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.visibility = 'visible';
    }

    document.getElementById('sign-in-button').style.visibility = 'hidden';
    document.getElementById('sign-in-text').style.visibility = 'hidden';
}
function hide_login_box() {
    document.getElementById('login-box').style.visibility = 'hidden';
    
    var nodes = document.getElementById('login-box').children;
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.visibility = 'hidden';
    }
    
    document.getElementById('sign-in-button').style.visibility = 'visible';
    document.getElementById('sign-in-text').style.visibility = 'visible';
}

function sign_in() {
    var email = document.getElementById('Uname').value;
    var passw = document.getElementById('Pass').value;

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