let PIXEL_SIZE = 16; // Tamaño del pixel del dibujo
let canvas = document.getElementById('canvas'); // Cogemos el canvas creado
let context = canvas.getContext('2d');



/*Esta función dibujara en el canvas tomando 
* tomando como referencia los puntos cardinales del canvas 
* y tamaño del pixel */
function draw(x, y){
    context.fillRect(
    x * PIXEL_SIZE,
    y * PIXEL_SIZE,
    PIXEL_SIZE,
    PIXEL_SIZE,
    );
 
}
/* esta función 
* controlara los eventos del mouse
*/
canvas.onmousedown = function(e) {
    canvas.onmousemove = motion;
    motion(e); 
}

canvas.onmouseup = function(e){
    canvas.onmousemove = null;
}

/* Esta función motion controlara las dimensiones del canvas
donde no pueda salir del canvas hecho */
function motion(e) {
    draw(
        Math.floor((e.clientX - canvas.offsetLeft)/ PIXEL_SIZE),
        Math.floor((e.clientY - canvas.offsetTop) / PIXEL_SIZE),
    );

}




