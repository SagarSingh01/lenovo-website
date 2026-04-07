// Off Canvas

function offCanvas () {
    document.querySelector("aside").classList.toggle("aside-show");
    document.querySelector(".backdrop").classList.toggle("backdrop-show");
    document.querySelector("body").classList.toggle("body-overflow");
}


// FAQS

function faqs (e) {
    e.target.parentElement.nextElementSibling.classList.toggle("para-show")
}


// BOM - TimeOut 

function popup() {
    document.querySelector(".backdrop-timeout").classList.toggle("backdrop-timeout-show");
}

setTimeout(popup,4000)

function pop() {
    document.querySelector(".popup-card").classList.toggle("popup-card-show");
}

setTimeout(pop,4100)

// Counter - Lenovo 

let num = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;

let int = setInterval(() => {

    if(num <= 100) {
       document.querySelector("#one").innerHTML = num++;
    }

    if(num1 <= 180) {
        document.querySelector("#two").innerHTML = num1++;
    }

    if(num2 <= 500) {
        document.querySelector("#three").innerHTML = num2++;
    }

    if(num3 <= 40) {
        document.querySelector("#four").innerHTML = num3++;
    }
}, 1);

