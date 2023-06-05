let visor=document.getElementById("imgvisor");
let imagenes=["../Imagenes/Silvestre1.jpg","../Imagenes/Silvestre2.jpg","../Imagenes/Silvestre3.jpg","../Imagenes/Silvestre4.jpg","../Imagenes/Silvestre5.jpg"];
let punt=-1;
let puntFinal=imagenes.length-1;
let izq=document.getElementById("izquierda");
let der=document.getElementById("derecha");

window.addEventListener("load",()=>{
    punt++;
    visor.setAttribute("src",imagenes[punt]);
});

izq.addEventListener("click",()=>{
    punt--;
    if(punt<0){
        punt=puntFinal;
    }
    visor.setAttribute("src",imagenes[punt]);
});

der.addEventListener("click",()=>{
    punt++;
    if(punt>puntFinal){
        punt=0;
    }
    visor.setAttribute("src",imagenes[punt]);
});
