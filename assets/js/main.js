$("#delete").click(function(e) {

    //Prevenir submit
    e.preventDefault();

    //Valor del campo id oculto 
    var estudiante_id = $("#estudiante_id").val();

    //Sustitución de DELETE
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

    //Valor del campo id oculto
    var estudiante_id = $("#estudiante_id").val();

    //datos del formulario
    var estudiante = { nombre: $("#nombre").val(), edad: $("#edad").val() }

    //Sustitución de Update
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