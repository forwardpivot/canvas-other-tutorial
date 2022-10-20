const resizeCanvas = document.querySelector('#resizeCanvas');
//Resizes the canvas to fit the screen
resizeCanvas.width = window.innerWidth;
resizeCanvas.height = window.innerHeight;

const ctx = resizeCanvas.getContext('2d');

//rectangle
ctx.fillStyle = '#f532c1'
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = '#ff7'
ctx.fillRect(200, 200, 100, 100);
ctx.fillStyle = '#a56'
ctx.fillRect(300, 300, 100, 100);
ctx.fillStyle = 'green'
ctx.fillRect(400, 400, 100, 100);

//lines
ctx.beginPath();
ctx.moveTo(110,300);
ctx.lineTo(210,410);
ctx.lineTo(210, 650);
ctx.lineTo(510, 50);
ctx.strokeStyle = "#da6731"
ctx.closePath(); //This connects the first, and last points of a line
ctx.stroke();

//arc
ctx.beginPath();
ctx.arc(500, 500, 30, 0, Math.PI * 2);
ctx.strokeStyle = 'red';
ctx.stroke();

for (let i = 0, x = 200, y = 200 ; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    x += 100;
    y += 100;
}

for (let i = 0; i < 5; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.strokeStyle = 'orange';
    ctx.stroke();
    x += 100;
    y += 100;
}