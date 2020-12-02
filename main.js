const myHexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let y;
const hexBtn = document.getElementById("btn");
const containers = document.getElementById("containers");

const body = document.querySelector("body");
const display = document.getElementById("display");
// Responsive Toggle NavBar
const mobileDisplay = document.getElementById("mobileDisplay");
// Portfolio
const nextBtn = document.getElementsByClassName('nextBtn');
const prevBtn = document.getElementsByClassName('prevBtn');
const imagesContainer = document.querySelector('.images');
let counter = 0;


const pictures = [`url(img/Andy-${0}.jpg)`, `url(img/Andy-${1}.jpg)`, `url(img/Andy-${2}.jpg)`, `url(img/Andy-${3}.jpg)`, `url(img/Andy-${4}.jpg)`];

// Portfolio Picture Slide
const nextSlide = () => {
    if (counter === pictures.length) {
        counter = 0;
    }
        
    imagesContainer.style.backgroundImage = `url(img/Andy-${counter}.jpg)`;
    counter++;  
}

const prevSlide = () => {
    if (counter === pictures.length) {   
        counter = 0;
    }
    imagesContainer.style.backgroundImage = `url(img/Andy-${counter}.jpg)`;
    counter++;
} 

// Hex Background Color 
const hexControl = () => {
    let hexHasch = "#";
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * myHexNumber.length);   
        hexHasch += myHexNumber[random];          
    }
    body.style.backgroundColor = hexHasch;
    containers.style.color = hexHasch;
    display.textContent = hexHasch;  
}

// Responsive Toggle NavBar
const navMobile = () => {
    if (y !== 1) {
        mobileDisplay.style.display = 'block';
        return y = 1;
    } else {     
        mobileDisplay.style.display = 'none';
        return y = 0;
    }  
}




