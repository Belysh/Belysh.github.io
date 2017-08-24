if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', mapGoogle.init);
}

if ($('#order').length) {
  var formMail = new MyForm($('#order'), '/send-form.php');
}

if ($('#form-login').length) {
  var formLogin = new MyForm($('#form-login'), '/login.php');
}