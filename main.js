cursor = document.querySelector(".cursor")
cursor2 = document.querySelector(".cursor2")
cabecera = document.getElementById("cabecera")
cabecera2 = document.getElementById("cabecera2")
imagen = document.querySelector(".imgIn")
mensaje1 = document.querySelector(".mensaje1")
mensaje2 = document.querySelector(".mensaje2")

contactanos = document.getElementById("btn1")
overlay = document.querySelector(".overlay")
cerrar = document.querySelector(".btn-cerrar-popup")
popup = document.querySelector(".popup")
mensaje3 = document.querySelector(".mensaje3")
correo = document.querySelector(".correo")
copiar = document.querySelector(".copiar")



var anx = 0;
var aly = 0;
var y = 0;
var flag = false;



var ancho = screen.width;



if(ancho >= 778){
    cabecera2.remove("cabecera2");
    imagen.classList.remove('imgIN');
    // ---------------------------------- CURSOR ----------------------------------
        
    document.addEventListener('mousemove', e => {
        anx = (e.clientX);
        aly = (e.clientY);
        var al = aly + y;
        cursor2.setAttribute("style", "top: "+(al+20)+"px; left: "+(anx+20)+"px;");
        cursor.setAttribute("style", "top: "+(al+5)+"px; left: "+(anx+5)+"px;");

    
    });
    window.addEventListener('scroll', e=>{
        y = window.scrollY;
        var Y1 = y + aly;
        cursor2.setAttribute("style", "top: "+(Y1+20)+"px; left: "+(anx+20)+"px;");
        cursor.setAttribute("style", "top: "+(Y1+5)+"px; left: "+(anx+5)+"px;");
    }); 

    // ---------------------------------- CURSOR ----------------------------------
}else{
    cursor.style.opacity = "0";
    cursor2.style.opacity = "0";
    imagen.classList.add('imgIN');
    cabecera.remove("cabecera");

}

function agra(ancho){
    cursor.classList.add('cur');
    cursor2.classList.add('cur2');
}
function agra2(ancho){
    cursor.classList.remove('cur');
    cursor2.classList.remove('cur2');
}

window.addEventListener('scroll', e=>{
    var n = window.scrollY
    if(n>20){
        cabecera.style.background = "rgba(0,0,0,1)";
        cabecera2.style.background = "rgba(0,0,0,1)";
    }else{
        cabecera.style.background = "rgba(0,0,0,0)";
        cabecera2.style.background = "rgba(0,0,0,0)";
    }
})

function conmutar() {
    if(flag){
        mensaje2.classList.remove("visible")
        setTimeout(() => {
            mensaje1.classList.add("visible")
        }, 500);
        flag=false
    }else{
        flag=true
        mensaje1.classList.remove("visible")
        setTimeout(() => {
            mensaje2.classList.add("visible")
        }, 500);
    }
}

setInterval(conmutar, 9000);

// POPUP redes sociales

contactanos.addEventListener('click', e=>{
    // console.log("click")
    overlay.classList.add("active")
    popup.classList.add("active")
})
cerrar.addEventListener('click', e=>{
    // console.log("click")
    overlay.classList.remove("active")
    popup.classList.remove("active")
})


correo.addEventListener('click',async ()=>{
    mensaje3.classList.add('active2')
    await navigator.clipboard.writeText(copiar.value)
    setTimeout(() => {
        mensaje3.classList.remove('active2')
    }, 2000);
})