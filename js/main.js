const startingPoint = () => {
    
    const drawLine = (color,width, xi, yi, xf, yf) => {
        lienzo.beginPath();
        lienzo.strokeStyle =color;
        lienzo.lineWidth = width;
        lienzo.moveTo(xi,yi);
        lienzo.lineTo(xf,yf);
        lienzo.stroke();
        lienzo.closePath();
    }
    
    const colorLinea = () => {
        let paletaColores = document.querySelector('#colores').value;
        return paletaColores;
    }

    const borrador = ()=>{ //PENDIENTE POR IMPLEMENTAR
        let borrador = document.querySelector('#colores');
            borrador ="#FFF";
            return borrador;
    }
    //EMPIEZA DIBUJO CON MOUSE
    const activarMouse = () => {
        canvasElement.addEventListener('mousedown', restricciones, false);
    }

    const restricciones = (e)=>{  
        if(e.buttons === 1){
            canvasElement.addEventListener('mousemove', dibujarConMouse, false);
            canvasElement.addEventListener('mouseup', detenerDibujoConMouse, false);  
        }      
              
    }  

    const dibujarConMouse = (e)=>{
        let xpos = e.offsetX;
        let ypos = e.offsetY;        
        drawLine(colorLinea(), 2, xpos - e.movementX, ypos - e.movementY, xpos, ypos);      
    }

    const detenerDibujoConMouse = ()=>{
        canvasElement.removeEventListener('mousemove', dibujarConMouse, false);
    }

    //EMPIEZA DIBUJO CON TECLADO
    const activarTeclado = () =>{
        document.addEventListener('keyup', dibujarConTeclado, false);
    }
    const dibujarConTeclado = (e) => {        
        const desplazamiento = 10; 
        const anchoDeLinea = 3;

        switch(e.keyCode) {
            case teclas.up:
                drawLine(colorLinea(), anchoDeLinea, x, y, x, y - desplazamiento);
                y = y - desplazamiento
            break;
            case teclas.down:
                drawLine(colorLinea(), anchoDeLinea, x, y, x, y + desplazamiento);
                y = y + desplazamiento
            break;
            case teclas.right:
                drawLine(colorLinea(), anchoDeLinea, x, y, x + desplazamiento, y);
                x = x + desplazamiento
            break;
            case teclas.left:
                drawLine(colorLinea(), anchoDeLinea, x, y, x - desplazamiento, y);
                x = x - desplazamiento
            break;

        }        
    }
    //DECLARACIONES GENERALES
    let canvasElement = document.getElementById('drawing_area');
    lienzo = canvasElement.getContext('2d');  
         
   
    let x =250;
    let y =250;

    let teclas = {
        up:38,
        down:40,
        left:37,
        right:39
    };    
    let activarDibujoTeclas = document.querySelector('#teclado');
        activarDibujoTeclas.addEventListener('click', activarTeclado, false);
    let activarDibujoMouse = document.querySelector('#mouse');
        activarDibujoMouse.addEventListener('click', activarMouse, false);
}
window.addEventListener('load', startingPoint, false);        