const canvas  = document.querySelector('canvas');
const generateButton  = document.querySelector('.generate-tree-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');//canvas rendering context 2d object
let curve = 15;
let curve2 = 50;

function drawTree(startX, startY, len, angle, branchWidth, color1, color2){

    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'black';
    ctx.lineWidth = branchWidth;

    ctx.translate(startX, startY);

    ctx.rotate(angle * Math.PI/180);

    ctx.moveTo(0,0);

    ctx.lineTo(0,-len);

    // if(angle > 0){
    //     ctx.bezierCurveTo(curve2, -len/2, curve2, len/2, 0, -len);
    // }else{
    //     ctx.bezierCurveTo(curve2, -len/2, -curve2, -len/2, 0 , -len)
    // }

    ctx.stroke();


    if(len < 10){
        ctx.beginPath();
        ctx.arc(0, -len , 10, 0, Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }

    //curve = (Math.random()*10)+10;

    
    drawTree(0, -len, len * 0.75,  angle + curve, branchWidth* 0.6);
    drawTree(0, -len, len * 0.75,  angle - curve, branchWidth* 0.6);
    // drawTree(0, -len, len * 0.70,  -45, branchWidth* 0.5);
    // drawTree(0, -len, len * 0.50,  -15, branchWidth* 0.5);
    // drawTree(0, -len, len * 0.50,  -75, branchWidth* 0.5);
    // drawTree(0, -len, len * 0.50,  -135, branchWidth* 0.5);

    ctx.restore();


}
drawTree(canvas.width/2,canvas.height - 80,150, 0, 25, "brown", "green")

function Random(){
    ctx.clearRect(0,0,canvas.width, canvas.height);

    let centerPointX = canvas.width/2;
    let len = Math.floor((Math.random() * 20)+165);
    let angle = 0;
    let branchWidth = (Math.random()* 100) + 1;
    let color1 = 'rgba('+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
    let color2 = 'rgba('+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";

    generateButton.style.background = color1;
    curve = (Math.random()*10)+13;
    curve2 = (Math.random()*50);
    drawTree(centerPointX,canvas.height - 80,len, angle, branchWidth, color1, color2)
}

generateButton.addEventListener('click',Random)