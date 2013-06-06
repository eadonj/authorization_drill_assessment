$(document).ready(function () {

  var signIn = "a#sign-in";

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
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();

    var request = $.ajax({ 
      url: $(this).attr('href'), 
      type: 'delete' 
    });

    request.done(function () { 
      window.location = "/"; 
    });
  });

});
