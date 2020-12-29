function show_login_box() {
    document.getElementById('login-box').style.visibility = 'visible';
    var nodes = document.getElementById('login-box').children;
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.visibility = 'visible';
    }
}

function login() {
    // enable login box
    show_login_box();
}