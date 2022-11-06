//funciones
function totalPagar(){
    if(validarIdentidad() == true && validarNumero() == true && validarCorreo() == true){
        let cantXvalor = (cantidad.value) * valorTicket;
        if  ((categoria.value) == 1){
            //estudiante
            cantXvalor = cantXvalor - (cantXvalor * descuentoEstudiante);
        } 
        else if ((categoria.value) == 2){
            //trainee
            cantXvalor = cantXvalor - (cantXvalor * descuentoTrainee);

        }
        else if ((categoria.value) == 3){
            //junior
            cantXvalor = cantXvalor - (cantXvalor * descuentoJunior);
        }
        total.innerHTML = 'Total a pagar: $' + cantXvalor;
    }
}

//funciones de validacion
function validarCorreo(){
    const correo = document.getElementById('correo');
    let c = correo.value;
    //metodo includes, para saber si está incluido el arroba
    if((c.includes('@') && c.includes('.')) && ((c[c.length-7]) == ".") && ((c[c.length-3]) == ".") || ((c[c.length-4]) == ".") ){
        return true;
    }
    else{
        alert("Correo electrónico no válido, por favor intente nuevamente");
        return false;
    }
}

function validarNumero(){
    if((cantidad.value) <= 0){
        alert('La cantidad de tickets ingresada no es válida, por favor intente nuevamente');
        return false;
    }
    else{
        return true;
    }
}

function validarIdentidad(){
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    n = nombre.value;
    a = apellido.value;
    vn = validarIdentidadBis(n);
    va = validarIdentidadBis(a);
    if(vn == false || va == false){
        alert("Su identidad no es válida, por favor ingrese nuevamente su Nombre o Apellido")
        return false;
    }
    else{
        return true;
    }
}

function validarIdentidadBis(palabra){
    //console.log(palabra.length);
    let valido = true;
    let i = 0;
    while (valido == true && (i <= palabra.length)){
         //convierto a numero, las letras seran NaN y los numeros numeros y vacio un 0.
        console.log(Number(palabra[i]), i);
        if(Number(palabra[i]) >=0){
            console.log(Number(palabra[i]));
            valido = false;
        }
        i = i + 1;
    }
    //console.log(valido);
    return valido;
}

//borrar lo escrito en Total a pagar: 
function resetear(){
    total.innerHTML = 'Total a pagar: ';
}



//valor del ticket estatico
const valorTicket = 200;

//descuentos a aplicar 
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//"atrapo" los valores del formulario
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
//botones
const botonCalcular = document.getElementById('calcular');
const botonBorrar = document.getElementById('borrar');
//total (etiqueta p)
const total = document.getElementById('total');

//boton evento / llamada a la funcion 
botonCalcular.addEventListener('click', totalPagar);

botonBorrar.addEventListener('click', resetear);

