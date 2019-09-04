const startingPoint = () => {
    const canvasElement = document.getElementById('drawing_area');
    lienzo = canvasElement.getContext('2d');

    const drawLine = (color, xi, yi, xf, yf) => {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xi,yi);
        lienzo.lineTo(xf,yf);
        lienzo.stroke();
        lienzo.closePath();
    }
    
    drawLine('blue', 0, 0, 500, 500);
    
    


    
}
window.addEventListener('load', startingPoint, false);


        