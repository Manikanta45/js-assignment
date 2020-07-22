function disco(){
    let arrColor = ['Red', 'Blue', 'Yellow', 'Skyblue'];
 
    function changeBg() {
        const arrColorLength = arrColor.length;
        let random = Math.trunc(Math.random() * arrColorLength);
        console.log(arrColor[random]);
        document.body.style.backgroundColor = arrColor[random];
    }

    setInterval(changeBg, 5000);
}
document.querySelector('.one').addEventListener("click",disco);
