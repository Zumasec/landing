var activitiesmostrar = document.getElementById('activitiesmostrar');

var actividadesocul = document.getElementById('actividadesocul');
var actividades =document.getElementById ('actividades')
function aplicar(){
    if(activitiesmostrar.getAttribute('style') == 'display: none;'){
        activitiesmostrar.setAttribute('style','display: ;')
        actividadesocul.setAttribute('style','display: none;')
        actividades.setAttribute('style','display: ;')
    }else{
        actividades.setAttribute('style','display: none;')
        actividadesocul.setAttribute('style','display: ;')
        activitiesmostrar.setAttribute('style','display: none;')
    }
}


var servmostrar = document.getElementById('servmostrar');
var services = document.getElementById('services');
var servocultar = document.getElementById('servocultar');
var servicios =document.getElementById ('servicios')
function aplicarserv(){
    if(servmostrar.getAttribute('style') == 'display: none;'){
        servmostrar.setAttribute('style','display: ;')
        servocultar.setAttribute('style','display: none;')
        servicios.setAttribute('style','display: ;')
    }else{
        servicios.setAttribute('style','display: none;')
        servocultar.setAttribute('style','display: ;')
        servmostrar.setAttribute('style','display: none;')
    }
}