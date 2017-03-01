function addCheck(){
$('ul').on('click', '.shopping-item-toggle', function(event){
  event.preventDefault();
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});
};

function removeElement(){
  $('ul').on('click', '.shopping-item-delete', function(event){
    event.preventDefault();
    $(this).closest('li').remove();
  });
};

function addItem(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
     var item = $('#shopping-list-entry').val();
     var element = '<li>' +
        '<span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">'+
        '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button> ' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
  
    $('ul').append(element);
  });
}


$(function(){
  
  addCheck();
  removeElement();
  addItem();

});