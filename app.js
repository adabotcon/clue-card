function placeCheckBoxes(){
	console.log("Hello!");
  $('ul li').each(function(index){
    var checkBoxes = '<div><input type="checkbox"/><input type="checkbox"/><input type="checkbox"/>' + 
    '<input type="checkbox"/></div>';
    $(this).append(checkBoxes);
  });
}

$(function(){
	placeCheckBoxes();
})