const startingPoint = () => {

    const drawLine = (color, xi, yi, xf, yf) => {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xi,yi);
        lienzo.lineTo(xf,yf);
        lienzo.stroke();
        lienzo.closePath();
    }

    const keyPressed = (e) => {
        if (e.keyCode === 40) {
            console.log('Felcha Hacia Abajo');
        }
        else if (e.keyCode === 38) {
            console.log('Felcha Hacia Arriba');
        }
        else if (e.keyCode === 39) {
            console.log('Felcha Hacia la Derecha');
        }
        else if (e.keyCode === 37) {
            console.log('Felcha Hacia la Izquierda');
        }
        else {
            console.log('Utilice las flechas del teclado');
        }
        
    }


    let canvasElement = document.getElementById('drawing_area');
    lienzo = canvasElement.getContext('2d');
    document.addEventListener('keydown', keyPressed, false);


    
    
    
    


    
}
window.addEventListener('load', startingPoint, false);


        