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

    const keyPressed = (e) => {
        const lineColor = 'magenta';
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
    
    // const detectarMouse = (e) =>{
    //     alert('FUNCIONA CARAJO!');
    // }

    let canvasElement = document.getElementById('drawing_area');
    lienzo = canvasElement.getContext('2d');
    document.addEventListener('keydown', keyPressed, false);
    // document.addEventListener('mousedown', detectarMouse , false);

    let x =0;
    let y =0;

    let teclas = {
        up:38,
        down:40,
        left:37,
        right:39
    };

    
    
    
    


    
}
window.addEventListener('load', startingPoint, false);


        