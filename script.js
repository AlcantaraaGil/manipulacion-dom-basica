const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


h1.innerHTML = 'Gil <br> Guapo '; //modifica el html, no solo el texto
//innerText.    modifica el texto
console.log (h1.getAttribute('pantalla'));
h1.setAttribute('pantalla','SamsungTV');
console.log (h1.getAttribute('pantalla'));

h1.classList.add('rojo');
h1.classList.add('verde');
h1.classList.add('amarillo');

h1.classList.remove('rojo');


input.value = "456";


const img = (document.createElement('img'));

img.setAttribute('src', 'https://t2.ea.ltmcdn.com/es/posts/0/1/5/en_que_consiste_humanizar_a_un_perro_23510_0_600.jpg')
console.log(img);


pid.innerHTML="";
pid.append(img);