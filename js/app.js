/* variables */

const btnEnviar = document.getElementById("enviar");

/* variables campos */
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensajer = document.getElementById("mensaje");
const formulario = document.getElementById('formulario')

/* variables alertas */

const parrafo = document.querySelector(".mensaje");
const alerta = document.createElement("h4");
const spinner = document.getElementById('spinner')

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", iniciarApp);

  email.addEventListener("blur", validaFormulario);
  asunto.addEventListener("blur", validaFormulario);
  mensaje.addEventListener("blur", validaFormulario);


  formulario.addEventListener('submit', Enviar)
}

/* funciones */

function iniciarApp() {
  btnEnviar.disabled = true;
}

function validaFormulario(e) {
  if (e.target.value.length <= 0) {
    e.target.style.borderColor = "red";

    switch (e.target.id) {
      case "email":
        Alerta("email");

        break;

      case "asunto":
        Alerta("asunto");

        break;

      case "mensaje":
        Alerta("mensaje");

      default:
        break;
    }
  } else if (
    email.value !== "" &&
    asunto.value !== "" &&
    mensaje.value !== ""
  ) {
    btnEnviar.disabled = false;
  } else {
    e.target.style.borderColor = "green";
  }
}

function Alerta(mensaje) {
  alerta.textContent = `El ${mensaje}  es requerido`;
  alerta.classList.add("text-red");

  parrafo.appendChild(alerta);

  setTimeout(() => {
    alerta.textContent = "";
  }, 1000);
}

 

function Enviar(e) {
    e.preventDefault()


    spinner.classList.remove('visually-hidden')
    spinner.classList.add('visible')
   

    setTimeout(() => {
        spinner.classList.remove('visible')
        spinner.classList.add('visually-hidden')


        alerta.textContent = `El mensaje ha sido enviado`;
        alerta.classList.add("text-green");

      
        parrafo.appendChild(alerta);


        setTimeout(() => {
            alerta.innerHTML = ''
            alerta.classList.remove('text-green')
            resetarFormulario()
            iniciarApp()

            

        }, 1500);





        


        
    }, 2000);
    
    
}



function resetarFormulario () {

    email.value = '';
    asunto.value = '';
    mensaje.value = '';
    
}