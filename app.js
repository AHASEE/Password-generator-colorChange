
function change(){
 var pass= Math.random()* 200000000

 var result= Math.round(pass)

 document.getElementById('result').innerHTML = `Password# ${result}`;

let randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

 let changeColor = document.querySelector('h1');
changeColor.style.backgroundColor = randomColor;


}



// let changeColor = document.getElementById('Password');
// changeColor.style.backgroundColor = 'blue';
// let chnage2 = document.getElementById('Password');
// changeColor.style.backgroundColor = 'yellow';
