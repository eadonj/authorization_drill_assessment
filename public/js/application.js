$(document).ready(function () {

  var signIn = "#sign-in";
  var signOut = "#sign-out";

  $(signIn).on('click', function(e) {
    e.preventDefault();

    var authenticate_user = $.ajax({
      method: "POST",
      url: "/sessions",
      data: $(signIn).serialize()
    });

    authenticate_user.done(function() {
     window.location = "/";
    });
  });

  // send an HTTP DELETE request for the sign-out link
  $(signOut).on("click", function(e) {
      e.preventDefault();

    $.ajax({
       url: $(this).attr('href'),
       type: "delete"
     }).done(function() {
       window.location = '/';
    });
  });

});
