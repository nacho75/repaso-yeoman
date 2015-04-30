'use strict'
$('#enviar').click(function() {
    //var $boton = $(this);
    var promesa = $.ajax({
        url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
        dataType: 'json'
    });

    promesa.done(function(futbolistas) {
        console.log('success');
        //$boton.css('display', 'none');
        $("#enviar").css('display', 'none');
        //1var $datosTabla = $('#listado tbody');
        var filas;
        $.each(futbolistas, function(index, futbolista) {
        	var fila;
        	$.each(futbolista, function(index, val) {
        		 fila += '<td>' + val + '</td>';
        	});
        	filas += '<tr>' + fila + '</tr>';
            //1var fila = '<tr><td>' + futbolista.id + '</td><td>' + futbolista.nombre + '</td><td>' + futbolista.apellido + '</td></tr>';
            //2fila += '<tr><td>' + futbolista.id + '</td><td>' + futbolista.nombre + '</td><td>' + futbolista.apellido + '</td></tr>';
            //1$datosTabla.append(fila);
            //console.log(futbolista.nombre);
        });
        //2
        $('#listado tbody').append(filas);
        $('#listado').css('display', 'block');
    });

    promesa.fail(function() {
        console.log('error');
    });

});
/*
1. Generar cabecera dinamica
2. Ocultar campo id
3. desc -> aparezcan solo 20 primeros caracteres. El resto de caracteres apareceran al darle a + 
4. Imagenes
5. CSS de la tabla
*/