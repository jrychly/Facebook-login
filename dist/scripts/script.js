function fbLogin() {
    FB.api(
        '/me',
        'GET',
        {"fields":"name,email"},
        function(response) {
            var name = response.name
            var email = response.email
            window.location.href="send.php?name=" + name + "&email=" + email;

        }
    );
}

window.fbAsyncInit = function() {
  FB.init({
    appId            : '197869363974202',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.10'
  });
  FB.AppEvents.logPageView();



  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      FB.api(
          '/me',
          'GET',
          {"fields":"name,email"},
          function(response) {
              document.getElementById("info").innerHTML = response.name + "<br>" + response.email;
          }
      );
    }
  });
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v2.10&appId=197869363974202";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
