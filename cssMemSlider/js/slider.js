const slides = document.querySelectorAll('.slide');
const squares = document.querySelectorAll('.square');
const text = document.getElementById('slider-text');
const arrText = [
    'Осень наступила... (Autumn has come ...)',
    '... листья все опали (... the leaves all fell)',
    'Яблоки собрали...(Apples were harvested ...)',
    '... и дожди пошли (...and it falling rain)',
    'Птицы улетают ... (The birds fly away...)',
    '... и зима придет ( ...and winter will come )',
]

let counter = 0;

function prepareCurrentSlide(n) {
    for (slide of slides) {
        slide.classList.remove('slide-active');
    }
    slides[n].classList.add('slide-active');
    for (square of squares) {
        square.classList.remove('slide-active');
    }
    squares[n].classList.add('slide-active');
    text.innerHTML = arrText[n];
}

// function nextSlide() {
//     if (counter == slides.length - 1) {
//         counter = 0;
//         prepareCurrentSlide(counter);
//     } else {
//         counter += 1;
//         prepareCurrentSlide(counter);
//     }
// }

squares.forEach(function (item, indexSquare) {
    item.addEventListener('click', function () {
        counter = indexSquare;
        prepareCurrentSlide(counter);
    });
});

// setInterval(nextSlide, 10000);
