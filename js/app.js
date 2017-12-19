$(document).ready(function() {
  var containerAddList = $('#container-addlist');
  var containerList = $('#container-list');
  var divList = $('#divList');
  $(divList).click(openList);
  function openList(event) {
  // crear contenedor con clase form
    var formAddList = $('<div/>', {
      'class': 'form'
    });
    // agregar contenedor con clase form al HTML
    $(containerAddList).append(formAddList);
    var nameList = $('<input/>', {
      'placeholder': 'Añadir una lista',
      'class' : 'nameList'
    });
    var save = $('<button/>', {
      'class' : 'save'
    });
    var closeSave = $('<i/>', {
      'class' : 'fa fa-times',
      'aria-hidden' : 'true'
    });
    $(closeSave).click(closeList);
    function closeList(event) {
      console.log(event.target);
      $(formAddList).remove();
      $(containerAddList).append(divList);
    };
    $(formAddList).append(nameList);
    $(formAddList).append(save);
    $(formAddList).append(closeSave);
    $(save).text('Guardar');

  };







  //cierre de función general
});
