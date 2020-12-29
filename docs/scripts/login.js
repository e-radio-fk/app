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
    // enable login box
    show_login_box();
}

function sign_up() {

}