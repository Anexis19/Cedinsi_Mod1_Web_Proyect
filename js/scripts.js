const fieldName     = document.getElementById("inputName")
const fieldLastName = document.getElementById("inputLastName")
const fieldSelect   = document.getElementById("inputSelect")
const fieldId       = document.getElementById("inputId")
const fieldCel      = document.getElementById("inputCel")
const fieldDir      = document.getElementById("inputDir")
const fieldPsw      = document.getElementById("inputPsw")
const fieldPsw2     = document.getElementById("inputPsw2")
const fieldRadio    = document.getElementsByName("radio__sexo")
// DEFINICION DE ELEMENTOS QUE SE ACTIVAN EN CASO DE ERROR EN FORMULARIO
const flagError = document.getElementById("flag__error")
const divRadio  = document.getElementById("contenedor__radio__sexo")

let contador =0 ;

function sendData(){


    validateField(fieldName)
    validateField(fieldLastName)
    validateField(fieldSelect)
    validateField(fieldId)
    validateField(fieldRadio)
    validateField(fieldCel)
    validateField(fieldDir)
    validateField(fieldPsw)
    validateField(fieldPsw2)


    return false;
}
function validateField(userInformation){
    flagState = false

    // console.log("Ingreso a funcion validateField", "CAMPO ACTUAL: ", userInformation.value)

    if(userInformation == fieldSelect){
        console.log("Ingreso a select")
        if (userInformation.value == ' '){
            // console.log("VALIDACION ERRONEA - SELECT")
            userInformation.classList.add("Error")
            flagState=true
        }else{
            contador+=1
        }

    }
    else if(userInformation == fieldRadio){
        // console.log("Ingreso a radio")
            // BANDERA DE VERIFICACION
        flagRadio = false

        // BUCLE QUE RECORRE TODOS LOS ELEMENTOS DEL FIELD RADIO
        for(let i = 0; i < userInformation.length; i++){

            // DEPURACION E IMPRESION DEL RADIO Y SU ESTADO
            // console.log("radio", i, userInformation[i].checked)

            // CONDICIONAL QUE VERIFICA SI SE HA SELECCIONADO ALGUN ELEMENTO
            if(userInformation[i].checked == true){

                // CAMBIO DE ESTADO DE BANDERA SI SE HA SELECCIONADO UN BOTON
                flagRadio = true
            }
        }
        if(!flagRadio){
            // console.log("VALIDACION ERRONEA - RADIO")
            divRadio.classList.add("Error")
            flagState = true
        }
        else{
            contador+=1
        }
    }
    else{
        // console.log("Ingreso a input normal")
        if(userInformation.value == ''){
            // console.log("VALIDACION ERRONEA - INPUT")
            userInformation.classList.add("Error")
            flagState = true
        }
        else{
            contador+=1
        }
    }
    if(flagState){
        flagError.innerHTML=`<p>NO se han diligenciado todos los datos</p>`
    }

    console.log("V", contador)
    if(contador == 9){
        // console.log('VALIDACION COMPLETADA')
        flagError.innerHTML=`<p>Validacion Correcta</p>`
    }

}
// VALIDACION DE CELULAR
fieldCel.addEventListener('input', function(){

    console.log('Dentro del campo', fieldCel.value,fieldCel.validity.patternMismatch)
    if(fieldCel.validity.patternMismatch){
        console.log('Esta incompleto')
        fieldCel.setCustomValidity('Ingrese el formato de teléfono correctamente')
        fieldCel.reportValidity()
    }else{
        fieldCel.setCustomValidity('')
    }

})



