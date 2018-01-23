$(document).ready(function() {
  setTimeout(function() {
    $("#splash").fadeOut(500);
  }, 3000); /*oculta la pantalla inicial*/
  setTimeout(function() {
    $("#main").fadeIn(500);
  }, 3000); /*Muestra la pantalla Principal*/
  $(".modal").modal();

});



/*+++++++++ Variables Globales++++++++*/
var $inputPhone = $("#input-phone");
var $btnNext = $("#btnNext");
var $inputCode = $("#input-code");
var $inputValidate = $("#input2");
var $reset = $("#reset");
var $btnNext3 = $("#btnNext3");


/*+++++++++ Validando Numero Telefonico (pag2)++++++++*/
/* --habilitar botón --*/
$inputPhone.keyup(function() {
  if ($(this).val().trim().length === 10) {
    $btnNext.removeAttr("disabled");
  } else {
    $btnNext.attr("disabled", true);
  }
});



$btnNext.click(function() {
  var code = Math.floor(Math.random() * 900) + 100;
  alert("LAB-- " + code);
  localStorage.labCode = code;
  localStorage.telephone = $inputPhone.val();
});

/*+++++++++ Validando Codigo (pag3)++++++++*/
$inputValidate.keyup(function() {
  if ($(this).val().trim().length === 3) {
    $btnNext3.removeAttr("disabled");
  } else if ($(this).val().trim().length !== 3 || $(this).val().trim().length === "") {
    $btnNext3.attr("disabled", true);
  }
});


$reset.click(function() {
  var code = Math.floor(Math.random() * 900) + 100;
  alert("LAB-- " + code);
});


/*+++++++++ Validando Nombre/Email ++++++++*/


function validateDate() {
  var $formDate = $("#btnDate");

  if ($(this).val().trim().length > 0) {
    $formDate.removeAttr("disabled");
  } else {
    $formDate.attr("disabled", true);
  }
}
