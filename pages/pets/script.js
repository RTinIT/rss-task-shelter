'use strict'

const petsArray = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

// Меню-бургер
const burgerBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('.nav')
const mask = document.querySelector('.mask')
const navMenu = document.querySelector('.nav-menu')
const navMenuItem = document.querySelectorAll('.nav-menu-item')
const logo = document.querySelector('.logo2')

function openMenu() {
    burgerBtn.classList.toggle('rotate')
    menu.classList.toggle('closed')
    mask.classList.toggle('hidden')
    
    if(document.documentElement.scrollWidth <= 767) {
       document.querySelector('body').classList.toggle('block')
    }
}

burgerBtn.addEventListener('click', () => {
    openMenu();
})

mask.addEventListener('click', () => {
    openMenu();
})

logo.addEventListener('click', () => {
    openMenu();
})

navMenuItem.forEach(e => e.addEventListener('click', openMenu)) 

// Пагинация

const arrayCards = document.querySelectorAll('.card')
const nextBtn = document.querySelector('.slider-btn-next')
const lastBtn = document.querySelector('.slider-btn-last')
const prevBtn = document.querySelector('.slider-btn-prev')
const firstBtn = document.querySelector('.slider-btn-first')
let pageNumber = document.querySelector('.page-number')
let curPageIndex = 0
let curPage = 1

const windowWidth = document.documentElement.clientWidth;

let page1, page2, page3, page4, page5, page6;
page1 = shake(page1);
page2 = shake(page2);
page3 = shake(page3);
page4 = shake(page4);
page5 = shake(page5);
page6 = shake(page6);
const randomArray = [page1, page2, page3, page4, page5, page6];

createPage(randomArray[0])

function getNextSlide() {
    curPageIndex++
    curPage++
    pageNumber.innerText = curPage
    createPage(randomArray[curPageIndex])
    includeLeftBtn();

    if(curPage == 6) {
        disableRightBtn(); 
        includeLeftBtn();
        
    }
}

function getLastSlide() {
    curPageIndex = 5
    curPage = 6
    pageNumber.innerText = curPage
    createPage(randomArray[curPageIndex])
    disableRightBtn();
    includeLeftBtn();

}

nextBtn.addEventListener('click', getNextSlide)
lastBtn.addEventListener('click', getLastSlide)



function getPrevSlide() {

    curPageIndex--
    curPage--
    pageNumber.innerText = curPage
    createPage(randomArray[curPageIndex])
    includeRightBtn()

    if(curPage == 1) {
        disableLeftBtn()
        includeRightBtn()
    }

}

function getFirstSlide() {
    curPageIndex = 0
    curPage = 1
    pageNumber.innerText = curPage
    createPage(randomArray[curPageIndex])
    disableLeftBtn();
    includeRightBtn()

}

prevBtn.addEventListener('click', getPrevSlide)
firstBtn.addEventListener('click', getFirstSlide)


function disableLeftBtn() {
    prevBtn.removeEventListener('click', getPrevSlide)
    prevBtn.classList.remove('active')
    prevBtn.classList.add('inactive')
    prevBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-left-prev-inactive.svg" alt="less sign"></img>`;


    firstBtn.removeEventListener('click', getFirstSlide)
    firstBtn.classList.remove('active')
    firstBtn.classList.add('inactive')
    firstBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-left-last-inactive.svg" alt="less sign"></img>`;

}

function disableRightBtn(){
    nextBtn.removeEventListener('click', getNextSlide)
    nextBtn.classList.remove('active')
    nextBtn.classList.add('inactive')
    nextBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-right-next-inactive.svg" alt="less sign"></img>`;


    lastBtn.removeEventListener('click', getLastSlide)
    lastBtn.classList.remove('active')
    lastBtn.classList.add('inactive')
    lastBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-right-last-inactive.svg" alt="less sign"></img>`;

}

function includeRightBtn() {
    nextBtn.addEventListener('click', getNextSlide)
    nextBtn.classList.add('active')
    nextBtn.classList.remove('inactive')
    nextBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-right-next.svg" alt="less sign"></img>`;


    lastBtn.addEventListener('click', getLastSlide)
    lastBtn.classList.add('active')
    lastBtn.classList.remove('inactive')
    lastBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-right-last.svg" alt="less sign"></img>`;

}

function includeLeftBtn() {
    prevBtn.addEventListener('click', getPrevSlide)
    prevBtn.classList.add('active')
    prevBtn.classList.remove('inactive')
    prevBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-left-prev.svg" alt="less sign"></img>`;

    firstBtn.addEventListener('click', getFirstSlide)
    firstBtn.classList.add('active')
    firstBtn.classList.remove('inactive')
    firstBtn.innerHTML = `<img src="../../assets/icons/btn-paginator-left-last.svg" alt="less sign"></img>`;
}



function shake(page, arr) {
    arr = []
    page = petsArray.map((e, i ) => {        
        return i
    })
    shuffle(page)
    for(let e of page){
        arr.push(petsArray[e])
    }
    return arr
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex ;
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]] 
    }
    return array;
}



function createPage(page) {
    for (let e of arrayCards){

    }

    for(let i = 0; i < arrayCards.length; i++) {
        arrayCards[i].setAttribute('data-name', `${page[i].name}`)
        arrayCards[i].children[0].outerHTML =`<img src=\"${page[i].img}\" data-name=\"${page[i].name}\" alt=\"${page[i].name}\">`;
        arrayCards[i].children[1].outerHTML = `<h4 class="name" data-name=\"${page[i].name}\">${page[i].name}</h4>`;
        arrayCards[i].children[2].outerHTML = `<button class="card-btn" type="button" data-name=\"${page[i].name}\">Learn more</button>`;
        
    }
}


// Попап

const popupBg = document.querySelector('.popup-bg');
const popupWrapper = document.querySelector('.popup-wrapper')
const closeBtn = document.querySelector('.close-btn');
const card = document.querySelectorAll('.card');
const popup = document.querySelector('.popup')
const slider = document.querySelector('.slider')
let foundPet;


closeBtn.addEventListener('click', () => {
    popupBg.classList.remove('show-popup')
    document.querySelector('body').classList.remove('block')

})

popupBg.addEventListener('click', (event) => {
    if(event.target === popupBg || event.target === popupWrapper) {
        popupBg.classList.remove('show-popup')

        document.querySelector('body').classList.remove('block')

    }
})

slider.addEventListener('click', (event) => {
   if(event.target.classList.contains('card') 
   || event.target.classList.contains('card-btn')
   || event.target.tagName === 'IMG'
   || event.target.classList.contains('name')) {

        popupBg.classList.add('show-popup')

        document.querySelector('body').classList.add('block')

        searchPet(event.target.dataset.name);
        createPopup(foundPet);
   }
})

popup.addEventListener('mouseenter', () => {
    closeBtn.style.backgroundColor = 'transparent';
    closeBtn.style.border = '2px solid #FDDCC4';

})

popup.addEventListener('mouseleave', () => {
    closeBtn.style.backgroundColor = '#FDDCC4';
    closeBtn.style.border = 'transparent';

})


function searchPet(name) {
    let pet = petsArray.filter(elem => elem.name === name);
    foundPet = pet[0];


}
console.log(arrayCards[0].children[0].attributes(name));


function createPopup(obj) {
    popup.children[0].style.backgroundImage = `url(${obj.img})`;
    popup.children[1].innerHTML = `<h3 class="popup-title">${obj.name}</h3>
    <h4 class="popup-subtitle">${obj.type} - ${obj.breed}</h4>
    <div class="popup-text">`;
    document.querySelector('.popup-text').innerHTML = `<p>${obj.description}</p>
    <li><span class="bold-text">Age:</span> <span>${obj.age}</span></li>
    <li><span class="bold-text">Inoculations:</span> <span>${obj.inoculations}</span></li>
    <li><span class="bold-text">Diseases:</span> <span>${obj.diseases}</span></li>
    <li><span class="bold-text">Parasites:</span> <span>${obj.parasites}</span></li>`;
                 
}