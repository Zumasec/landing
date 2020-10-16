var token = "c52f46bf3aa5c2441847e9fdee3f4583fb77e7aaca0995826d45bc165940fac4";
var idtablero = "5bbf3603a494cc5b0124bdbf"
var idlist = "5bbf3603a494cc5b0124bdc0"
var appkey = "a358184ea95073f09071d85c1ede7453"
/* valores a recojer */


function hola() {
    var empresa = document.getElementById('empresa').value;
    var nombre = document.getElementById('nombre').value;
    var mcorreo = document.getElementById('mcorreo').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var comentario = document.getElementById('comentario').value;

    var fecha = new Date();
    var fechaTrello = fecha.getFullYear() + '-' + ("0" + (fecha.getMonth() + 1)).slice(-2) + '-' + ("0" + fecha.getDate()).slice(-2);
    var hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

    var desc = 'Fecha ' + fechaTrello + ' a las ' + hora + '\n' + ' Empresa: ' + empresa + '\n' + ' Nombre: ' + nombre + '\n' + ' Correo: ' + mcorreo + '\n' + ' Telefono: ' + telefono + '\n' + ' Direccion: ' + direccion + '\n' + ' Comentario: ' + comentario;
    crearCarta(desc)
}

function crearCarta(desc) {
    var checkBox = document.getElementById('myCheck')
    if (empresa.value == "" || nombre.value == "" || mcorreo.value == "" || telefono.value == "" || direccion.value == "") {
        swal({
            text: "Rellena todos los campos!",
            icon: "warning",
            button: "Volver a intentar!",
        });
    }
    if (checkBox.checked == false) {
        swal({
            text: "Tiene que aceptar los terminos de privacidad",
            icon: "warning",
            button: "Volver a intentar!",
        });
    }
    else {
        swal({
            text: "Perfecto nos pondremos en contacto con usted",
            icon: "success",
            button: "Volver",
        }).then((value) => {
            var data = null;
            var name = 'Contactar FED:';
            var xhr = new XMLHttpRequest();
            var url = "https://api.trello.com/1/cards?name=" + encodeURI(name) + "&desc=" + encodeURI(desc) + "&pos=top&idList=" + idlist + "&keepFromSource=all&key=" + appkey + "&token=" + token;
            url = url.replace(/#/g, '%23');
            xhr.open("POST", url);
            xhr.send(data);
            setTimeout(function () { location.reload(); }, 1000);
        });
    }

}

function comentario() {
    var name1 = 'Comentario FED: ';
    var fecha = new Date();
    var fechaTrello = fecha.getFullYear() + '-' + ("0" + (fecha.getMonth() + 1)).slice(-2) + '-' + ("0" + fecha.getDate()).slice(-2);
    var hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    var comenta = document.getElementById('comenta').value
    var Seudonimo = document.getElementById('Seudonimo').value;
    var dd = 'Fecha ' + fechaTrello + ' a las ' + hora + '\n' + 'Seudónimo: ' + Seudonimo + '\n' + 'Comentario: ' + comenta;
    if(Seudonimo == "" || comenta == ""){
        swal({
            text: "Tiene que rellenar todos los campos",
            icon: "warning",
            button: "Volver a intentar!",
        });
    }else{
         swal({
        text: "Perfecto valoramos vuestra opinión",
        icon: "success",
        button: "Volver",
    }).then((value) => {
        var data = null;
        var xhr = new XMLHttpRequest();
        var url = "https://api.trello.com/1/cards?name=" + encodeURI(name1) + "&desc=" + encodeURI(dd) + "&pos=top&idList=" + idlist + "&keepFromSource=all&key=" + appkey + "&token=" + token;
        url = url.replace(/#/g, '%23');
        xhr.open("POST", url);
        xhr.send(data);
        setTimeout(function () { location.reload(); }, 1000);
    });
    }
   
}

function novedades() {
    var name2 = 'Novedades FED: ';
    var fecha = new Date();
    var fechaTrello = fecha.getFullYear() + '-' + ("0" + (fecha.getMonth() + 1)).slice(-2) + '-' + ("0" + fecha.getDate()).slice(-2);
    var hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    var ex1 = document.getElementById('ex1').value
    var dd = 'Fecha ' + fechaTrello + ' a las ' + hora + '\n' + 'Enviar novedades a: ' + ex1;
    if (ex1 == "") {
        swal({
            text: "Tiene que rellenar con el correo electrónico",
            icon: "warning",
            button: "Volver a intentar!",
        });
    } else {
        swal({
            text: "Perfecto te enviaremos nuestras novedades",
            icon: "success",
            button: "Volver",
        }).then((value) => {
            var data = null;
            var xhr = new XMLHttpRequest();
            var url = "https://api.trello.com/1/cards?name=" + encodeURI(name2) + "&desc=" + encodeURI(dd) + "&pos=top&idList=" + idlist + "&keepFromSource=all&key=" + appkey + "&token=" + token;
            url = url.replace(/#/g, '%23');
            xhr.open("POST", url);
            xhr.send(data);
            setTimeout(function () { location.reload(); }, 1000);
        });
    }
}

