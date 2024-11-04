//for color functions


let color1 = document.getElementById('clr1');
let color2 = document.getElementById('clr2');
let color3 = document.getElementById('clr3');
let image = document.getElementById('big-img');

function white() {
    color1.innerText = `white`
    color2.innerText = " "
    color3.innerText = " "
    image.style.filter = 'none'; F
}
function gray() {
    color2.innerText = `gray`
    color1.innerText = " "
    color3.innerText = " "
    image.style.filter = 'brightness(0.5) contrast(1) saturate(0%)';
}
function blue() {
    color3.innerText = `blue`
    color1.innerText = " "
    color2.innerText = " "
    image.style.filter = 'hue-rotate(0deg) saturate(5) brightness(0.8)';
}




//for size functions
let pricenum = document.getElementById('prr');
let weightnum = document.getElementById('wrr');

function small() {
    pricenum.textContent = `$1800`;
    weightnum.textContent = `12.18kg`;
}
function medium() {
    pricenum.textContent = `$2,500`;
    weightnum.textContent = `14.18kg`;
}
function large() {
    pricenum.textContent = `$3000`;
    weightnum.textContent = `17.22kg`;
}





//paragraph heading
let paraHead = document.getElementById('para-select1');
let para = document.getElementById('para-select2');
function spec() {
    paraHead.textContent = `Enhanced Comfort:`;
    para.textContent = `Built with a durable yet lightweight aluminum frame, perfect for both city commuting and long-distance rides. 

The bike features a modern, aerodynamic design with a matte finish for a stylish and efficient ride 

Equipped with ergonomic handlebars and a comfortable saddle to ensure a smooth and enjoyable journey every time.`
}
function dis() {
    paraHead.textContent = `Be unique with your choice of ride.`;
    para.textContent = `The EUPHORIA turns obstacles into features. Its nimble, poppy feel makes even the most
                mundane rides feel like they're loaded with features to hop, skip and jump over. It's the kind of bike
                that
                makes new trails feel as familiar as the back of your hand. 27.5 is the fun-sized wheel size.
                Smaller wheels provide an ideal balance between toughness and weight saving making them the most
                fleet-footed (or quick fingered) whether launching logs or weaving through stumps. With its quick and
                agile
                character, the 5010 has become a go-to plaything for progressive riders the world over and the only
                contender on any backyard trails.`
}







//cart count function
let ButtonOne = document.getElementById('ButtonOne');
let count = document.getElementById('count');
let incree = 0;
ButtonOne.addEventListener('click', function () {
    incree++;
    count.innerText = `${incree}`;
})






// slider
const sliderImages = document.querySelectorAll('.slider-img');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showThreeImages() {
    sliderImages.forEach((img, index) => {
        img.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
    });
}
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    if (currentIndex + 3 > sliderImages.length) {
        currentIndex = 0;
    }
    showThreeImages();
});
showThreeImages();








