function move_banner()
{
    var before = 0;
    var after = 0;
    
    // get old position
    before = parseInt(document.getElementById('now-playing-banner-text').style.paddingLeft || 0, 10);

    // make sure text will 'cycle'
    if (before + 1 >= 100)
        before = 0;

    // increment position index
    after = before + 1 + "%";

    // set new position
    document.getElementById('now-playing-banner-text').style.paddingLeft = after;

    // make this a recurring function
    setTimeout(move_banner, 230);
}

move_banner();