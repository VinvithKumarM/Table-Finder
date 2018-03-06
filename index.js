// $( "div" ).html( "<b>Wow!</b> Such excitement..." );
// $( "div b" )
//   .append( document.createTextNode( "!!!" ) )
//   .css( "color", "red" );
var currentTable;
var number;
$('.minidiv').on('click', 'button', function(){
  $( ".modal-content" ).show();
  number = $(this).text();
  currentTable = $(this);

  $('h6').text(`Table Number: ${number}`);
});

$('.Close').on('click', function(){


});

var tables = [];
$('#saveButton').on('click', function(){
  currentTable.css('background-color', '#ff0000');
  var input1 = $('#Name').val();
  var input2 = $('#Contact').val();
  var input3 = $('#dropdown').val();
  var input4 = number;
  var reserved = {
  name: input1,
  number:input2,
  size: input3,
  TableNo: input4

};
  tables.push(reserved);
  console.log(tables);
  currentTable.attr('disabled', true);
  // $(".minidiv").setAttribute("onclick", "false");
    $( ".modal-content" ).hide();
});



// $("#dd1").on("click", function(event){
//   $("dropdownButton2").empty;
//   $("dropdownButton2").append("10")
// });
// $("#dd2").on("click", function(event){
//   $("dropdownButton2").empty;
//   $("dropdownButton2").append("20")
// });
// $("#dd3").on("click", function(event){
//   $("dropdownButton2").empty;
//   $("dropdownButton2").append("30")
// });
