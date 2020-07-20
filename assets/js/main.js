$("#delete").click(function(e) {

    e.preventDefault();

    var estudiante_id = $("#estudiante_id").val();

    $.ajax({
        url: '/estudiante/' + estudiante_id,
        type: 'DELETE',
        success: function(result) {
            window.location.replace("/");
        }
    });

});

$("#update").click(function(e) {

    //Prevenir submit
    e.preventDefault();
    var estudiante_id = $("#estudiante_id").val();
    var estudiante = { nombre: $("#nombre").val(), edad: $("#edad").val() }

    $.ajax({
        url: '/estudiante/' + estudiante_id,
        type: 'PUT',
        data: estudiante,
        success: function(result) {
            console.log(result);
            window.location.replace("/");
        }
    });

});