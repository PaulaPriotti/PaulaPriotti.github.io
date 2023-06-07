let nombre=document.getElementById("fname");
let apellido=document.getElementById("flastname");
let email=document.getElementById("femail");
let check1=document.getElementById("mot1");
let check2=document.getElementById("mot2");
let check3=document.getElementById("mot3");
let f=document.getElementById("formu");
let error=document.getElementById("errores");


f.addEventListener("submit", (e)=>{
    e.preventDefault();
    let patronNombre=/^[A-z]+$/;
    let patronEmail=/^\w+@\w+\.\w{2,}(\.\w+)*$/;
    let bandera=false;
    error.innerHTML=""; 
    let elementos=f.querySelectorAll('input')	
    elementos.forEach(i=>{
        i.classList.remove('mal');
    })
    check1.parentElement.classList.remove('mal');
    check2.parentElement.classList.remove('mal');
    check3.parentElement.classList.remove('mal');

    if(nombre.value==""||!patronNombre.test(nombre.value)){
        bandera=true;
        let li=document.createElement("li");
        li.innerHTML="Error en el nombre";
        error.appendChild(li);
        nombre.classList.add('mal');
    }
    if(apellido.value==""||!patronNombre.test(apellido.value)){
        bandera=true;
        let li=document.createElement("li");
        li.innerHTML="Error en el apellido";
        error.appendChild(li);
        apellido.classList.add('mal');
    }
    if(email.value==""||!patronEmail.test(email.value)){
        bandera=true;
        let li=document.createElement("li");
        li.innerHTML="Error en el email";
        error.appendChild(li);
        email.classList.add('mal');
    }
    if(!check1.checked && !check2.checked && !check3.checked){
        bandera=true;
        let li=document.createElement("li");
        li.innerHTML="Seleccione una casilla";
        error.appendChild(li);
        check1.parentElement.classList.add('mal');
        check2.parentElement.classList.add('mal');
        check3.parentElement.classList.add('mal');
    }

    if(!bandera){
        let carga=document.getElementById("carga");
        let lista=document.createElement("ul");
        let liNombre=document.createElement("li");
        liNombre.innerHTML=nombre.value;
        let liApellido=document.createElement("li");
        liApellido.innerHTML=apellido.value;
        let liCorreo=document.createElement("li");
        liCorreo.innerHTML=email.value;
        let liCheck=document.querySelectorAll(".ch");
        let liMotivo=document.createElement("li");

        liCheck.forEach(e=>{
            if(e.checked){
                liMotivo.innerHTML+=e.value+" - ";
            }
        })

        lista.appendChild(liNombre);
        lista.appendChild(liApellido);
        lista.appendChild(liCorreo);
        lista.appendChild(liMotivo);

        carga.appendChild(lista);

        f.reset();
        nombre.focus();
    }
    

});



