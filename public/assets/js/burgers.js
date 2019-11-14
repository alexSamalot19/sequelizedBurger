// Attach handlers until the DOM is fully loaded.
//========================================================
$(function() {
  $('.change-devoured').on('click', function(event) {
    const id = $(this).data('id');
    const newDevoured = $(this).data('newdevoured');
console.log($(this).data)
    const newDevouredState = {
      devoured: newDevoured,
    };

    // Send the PUT request.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevouredState,
    }).then(
        function() {
          console.log('changed devoured to', newDevoured);
          // Reload the page to get the updated list
          location.reload();
        },
    );
  });

  $('.delete-burger').on('click', function(event) {
    const id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/api/burgers/' + id, {
      type: 'DELETE',
    }).then(
        function() {
          console.log('DELETED burger #' + id);
          // Reload the page to get the updated list
          location.reload();
        },
    );
  });

  $('.create-form').on('submit', function(event) {
    // PreventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $('#ca').val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(
        function() {
          console.log('created new burger');
          // Reload the page to get the updated list
          location.reload();
        },
    );
  });
});
