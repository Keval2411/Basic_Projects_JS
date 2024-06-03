const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for( i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor());
let intervalID;
const startchangingColor = function(){
    intervalID = setInterval(changeBgColor, 1000);
    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    }
};
const stopchangingColor = function(){
    clearInterval(intervalID);
};

document.querySelector('#start').addEventListener('click', startchangingColor);
document.querySelector('#stop').addEventListener('click', stopchangingColor);
