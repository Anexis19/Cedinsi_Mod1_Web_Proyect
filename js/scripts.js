const fieldName     = document.getElementById("inputName");
const fieldLastName = document.getElementById("inputLastName");
const fieldId       = document.getElementById("inputId");
const fieldCel      = document.getElementById("inputCel");
const fieldDir      = document.getElementById("inputDir");
// PASSWORD FIELDS
const fieldPsw      = document.getElementById("inputPsw");
const fieldPsw2     = document.getElementById("inputPws2");
// RADIO FIELD
const fieldRadio    = document.querySelector("input[name='radio__sexo']:checked")
const noFieldRadio  = document.querySelector("input[name='radio__sexo']")
// SELECTED FIELD
const fieldSelect   = document.querySelector("option[name='option__select']:checked");
console.log(fieldSelect)
console.log(noFieldRadio)

const flagError     = document.getElementById("flag__error");
const divRadio      = document.getElementById("contenedor__radio__sexo")


function sendData(){

    validateField(fieldName)
    validateField(fieldLastName)
    validateField(fieldId)
    validateField(fieldCel)
    validateField(fieldDir)
    validateField(fieldPsw)
    // validateField(fieldPsw2)
    validateField(fieldRadio)
    // validateField(fieldSelect)
    return false;
}


// FIELD VALIDATION
function validateField( userInformation ){
    console.log("You're in the VALIDATION",userInformation)

    if(userInformation == null){
        console.log("Null Conversion", userInformation,noFieldRadio)
        divRadio.classList.add("Error");
    }
    if (userInformation && userInformation.value == '' ){

        // alert(`El campo ${userInformation.name} se encuentra VACIO`)
        userInformation.classList.add("Error");
        flagError.innerHTML = `<p>No se han diligenciado los datos</p>`
        return false;
    }else{
        console.log("Validacion Exitosa");
    }
}

