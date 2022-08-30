let btn = document.querySelector('#send')
let propietario = document.querySelector('#name')
let patente = document.querySelector('#licence')

let localStorage = window.localStorage

cargarVehiculos()

btn.addEventListener('click',()=>{
    const vehiculo = {
        propietario: propietario.value,
        patente: validarPatente(patente.value),
        entrada: new Date()
    }
    if(datosCompletos()){
        if(vehiculo.patente === false && vehiculo.propietario.length > 3){
            alert('Asegurate de ingresar bien la patente')
        }else if(vehiculo.patente && vehiculo.propietario.length < 3){
            alert('Asegurate de ingresar bien tu nombre')
        }else{
            guardarEnLocalStorage(vehiculo)
            ingresarVehiculo(vehiculo)
        }
    }else{
        alert('Los campos deben estar completos')
    }
})

let btnDelete = document.querySelector('#garage')
btnDelete.addEventListener('click', e => {
    if(e.target.className === 'delete'){
        checkOut(e.target.parentElement.parentElement.cells)
    }
})