document.getElementById('confettiButton').addEventListener('click', function(){
  
    const confettiSettings = {
        target: 'confettiCanvas',
        size: 100,
        max: 500,
        animate: true,
        props: ['circle', 'square'],
        colors: [[255, 165, 0], [255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 0, 255]],
      };
  
      // Trigger the confetti effect
      confetti(confettiSettings);

});

let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementToShow = 3;

if(document.body.clientWidth<1000){
    elementToShow = 1;
} else if(document.body.clientWidth<1500){
    elementToShow = 2;
}
let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth/elementToShow;

slider.style.width = cards.length*cardWidth+'px';
slider.style.transition='margin';
slider.style.transitionDuration ='1s';
for (let i = 0; i < cards.length; i++) {
    
    const element = cards[i];
    element.style.width = cardWidth+'px';
}

function prev() {
    if(+slider.style.marginLeft.slice(0,-2) !=-cardWidth*(cards.length-elementToShow))
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth) + 'px' //100px
}

function next() {
    if (+slider.style.marginLeft.slice(0,-2) !=0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth) + 'px' //100px

}