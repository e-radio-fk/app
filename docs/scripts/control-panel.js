var user = sessionStorage.getItem('currentUser');

if (!user.photoUrl)
{
    alert("No photo whatsoever!");
}
else
{
    console.log('got photo: ', user.photoUrl);

    /* set user photo */
    document.getElementById('banner-user-img').src = user.photoUrl;
}