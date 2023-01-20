
const modalBtn = document.querySelector('.js-modal')
const downloadBtn = document.querySelector('.js_download')
const closeBtn = document.querySelector('.js_close')
const fake = document.querySelector('.js_fake')

function showAddress () {
    downloadBtn.classList.add('open')
}

function hideAddress () {
    downloadBtn.classList.remove('open')
}

modalBtn.addEventListener('click', showAddress)
closeBtn.addEventListener('click', hideAddress)
fake.addEventListener('click',  hideAddress)


//----------------------------------------- 
// Change img

window.addEventListener("load", function() {
    const slider = document.querySelector('.slider')
    const sliderMain = document.querySelector('.slider-man')
    const sliderItems = document.querySelectorAll('.slider-item')
    const nextBtn = document.querySelector('.js_tour')
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length; 
    let index = 0;
    let positionX = 0;
    nextBtn.addEventListener("click", function() {
        handleChangSlier(1)
    })
  
    function handleChangSlier(direction) {
        if (direction === 1) {
            index++;
            if(index > sliderLength - 1)  {
                index = sliderLength;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
        }
    }
})

// -----------------------------------------------------------------

const Application = document.querySelector('.js_btn-content')

Application.addEventListener('click', showAddress)

// drectional 

const drectionalClick = document.querySelector('.js-drectional')
const premiumClick = document.querySelector('.js-Premium')

drectionalClick.addEventListener('click', showAddress)
premiumClick.addEventListener('click', showAddress)