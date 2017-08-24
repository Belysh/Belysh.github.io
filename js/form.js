var MyForm = function(form, url) {
  this.form = form;
  this.url = url;
  this.addListener(this.form);
};

MyForm.prototype.addListener = function(form) {
  $(form).on('submit', $.proxy(this.submitForm, this));
};

MyForm.prototype.submitForm = function(e) {
  e.preventDefault();
  var $form = $(this.form);
  var defObject = this.ajaxForm($form, this.url);

  if (defObject) {
    defObject.done(function(ans) {
      var mes = ans.mes,
        status = ans.status;
      if ((status = 'OK')) {
        $.form.trigger('reset');
        $form.find('.server-mes__text').text(mes);
        $form.find('.success-mes').show();
      } else {
        $form.find('.server-mes__text').text(mes);
        $form.find('.error-mes').show();
      }
    });
  }
};

$('.server-mes__button').on('click', function () {
      $('.server-mes').hide();
});

MyForm.prototype.ajaxForm = function(form, url) {
  if (!validation.validateForm(form)) {
    return false; // Возвращает false, если не проходит валидацию
  }
  // запрос
  var data = form.serialize(); // собираем данные из формы в объект data

  return $.ajax({
    // Возвращает Deferred Object
    type: 'POST',
    url: this.url,
    dataType: 'JSON',
    data: data
  }).fail(function(ans) {
    console.log('Проблемы в PHP');
    form.find('.server-mes__text').text('На сервере произошла ошибка');
    form.find('.error-mes').show();
  });
};




















