const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'orange';
    document.body.style.fontFamily = 'Helvetica';
    
   
}
const lmode = document.getElementById('light');

lmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'Green';
    document.body.style.fontFamily = 'Timesnewroman';
    
   
}


const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);
