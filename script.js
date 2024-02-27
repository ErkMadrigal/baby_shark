


let btn_baby_shark = document.querySelector("#btn_baby_shark")
let dad_shark = document.querySelector("#dad_shark")
let mom_shark = document.querySelector("#mom_shark")
let text_1 = document.querySelector("#text_1")
let text_2 = document.querySelector("#text_2")
let baby_shark = document.querySelector("#baby_shark")
let contenedor_1 = document.querySelector("#contenedor_1")
let contenedor_2 = document.querySelector("#contenedor_2")
let neneso2 = document.querySelector("#neneso2")


btn_baby_shark.onclick = () => {
    btn_baby_shark.classList.remove('puff-in-center');
    btn_baby_shark.classList.add('slide-out-blurred-top');

    mom_shark.classList.remove('bounce-in-right');
    mom_shark.classList.add('slide-out-bck-left');


    dad_shark.classList.remove('bounce-in-left');
    dad_shark.classList.add('slide-out-bck-right');
    
    baby_shark.classList.remove('tilt-in-fwd-br');
    baby_shark.classList.add('puff-out-center');


    text_1.classList.add('tracking-out-contract-bck');
    text_2.classList.add('tracking-out-contract-bck');
    setInterval(() => {
        contenedor_1.classList.add('d-none')
        contenedor_2.classList.remove('d-none')
    }, 1500);
    setInterval(() => {
        neneso2.classList.add('slide-in-elliptic-top-fwd')
        neneso2.classList.remove('d-none')

    }, 3000);
}

