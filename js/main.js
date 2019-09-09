const startingPoint = () => {

    const drawLine = (color, width, xi, yi, xf, yf) => {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.lineWidth = width;
        lienzo.moveTo(xi,yi);
        lienzo.lineTo(xf,yf);
        lienzo.stroke();
        lienzo.closePath();
    }

    const trazado = (e)=>{
        let xpos = e.offsetX;
        let ypos = e.offsetY;
        const pixeles = 10;

        drawLine('blue', 2, xpos + pixeles, ypos + pixeles, xpos - pixeles, ypos -pixeles);
    }

    const detenerDibujo = ()=>{
        canvasElement.removeEventListener('mousemove', trazado, false);
    }

    const dibujarConTeclado = (e) => {
        const lineColor = 'black';
        const desplazamiento = 10; 
        const anchoDeLinea = 3;

        switch(e.keyCode) {
            case teclas.up:
                drawLine(lineColor, anchoDeLinea, x, y, x, y - desplazamiento);
                y = y - desplazamiento
            break;
            case teclas.down:
                drawLine(lineColor, anchoDeLinea, x, y, x, y + desplazamiento);
                y = y + desplazamiento
            break;
            case teclas.right:
                drawLine(lineColor, anchoDeLinea, x, y, x + desplazamiento, y);
                x = x + desplazamiento
            break;
            case teclas.left:
                drawLine(lineColor, anchoDeLinea, x, y, x - desplazamiento, y);
                x = x - desplazamiento
            break;

        }        
    }

    const dibujarConMouse = (e)=>{
        if (e.buttons === 1) {
            canvasElement.addEventListener('mousemove', trazado, false);
            canvasElement.addEventListener('mouseup', detenerDibujo, false);
        }
    }
  

    let canvasElement = document.getElementById('drawing_area');
    lienzo = canvasElement.getContext('2d');
    document.addEventListener('keyup', dibujarConTeclado, false);
    canvasElement.addEventListener('mousedown', dibujarConMouse, false);

    let x =250;
    let y =250;

    let teclas = {
        up:38,
        down:40,
        left:37,
        right:39
    };    
}
window.addEventListener('load', startingPoint, false);        