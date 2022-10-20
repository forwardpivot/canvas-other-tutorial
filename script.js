const resizeCanvas = document.querySelector('#resizeCanvas');
//Resizes the canvas to fit the screen
resizeCanvas.width = window.innerWidth;
resizeCanvas.height = window.innerHeight;

const ctx = resizeCanvas.getContext('2d');

ctx.fillStyle = '#f532c1'
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = '#ff7'
ctx.fillRect(200, 200, 100, 100);
ctx.fillStyle = '#a56'
ctx.fillRect(300, 300, 100, 100);
ctx.fillStyle = 'green'
ctx.fillRect(400, 400, 100, 100);

ctx.beginPath();
ctx.moveTo(110,300);
ctx.lineTo(210,410);
ctx.lineTo(210, 650);
ctx.lineTo(510, 50);
ctx.strokeStyle = "#da6731"
ctx.stroke();