'use strict'

// Кнопка "Make a friend"

const ourFriend = document.querySelector('.section-our');
const homeBtn = document.querySelector('.home-btn');

homeBtn.addEventListener('click', () => {
    ourFriend.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
});

// Кнопка "Get to know the rest"

const ourFriendsPage = document.querySelector('.our-btn')
ourFriendsPage.addEventListener('click', () => {
    location.href = '../pets/index.html';
})

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

// Слайдер

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

const preBtn = document.querySelector('.slider-btn-pre');
const nextBtn = document.querySelector('.slider-btn-next');
const pagBtnPre = document.querySelector('.pag-btn-pre');
const pagBtnNext = document.querySelector('.pag-btn-next');

const slider = document.querySelector('.slider');
const itemLeft = document.querySelector('#item-left');
const itemRight = document.querySelector('#item-right');
const itemActive = document.querySelector('#item-active');

function moveRight() {
    slider.classList.add('next-slide');
    nextBtn.removeEventListener('click', moveRight)
    preBtn.removeEventListener('click', moveLeft)
    pagBtnNext.removeEventListener('click', moveRight)
    pagBtnPre.removeEventListener('click', moveLeft)

}

function moveLeft() {
    slider.classList.add('pre-slide');
    preBtn.removeEventListener('click', moveLeft)
    nextBtn.removeEventListener('click', moveRight)
    pagBtnNext.removeEventListener('click', moveRight)
    pagBtnPre.removeEventListener('click', moveLeft)
}

function buildNewCard(obj1, obj2, obj3, side) {
    const card1 = document.createElement('div');
    card1.classList.add('card');
    card1.setAttribute('data-name', `${obj1.name}`)
    card1.innerHTML = `<img src=${obj1.img} data-name="${obj1.name}" alt="${obj1.name}">
                        <h4 class="name" data-name="${obj1.name}">${obj1.name}</h4>
                        <button class="card-btn" type="button" data-name="${obj1.name}">Learn more</button>`;

    const card2 = document.createElement('div');
    card2.classList.add('card');
    card2.setAttribute('data-name', `${obj2.name}`)
    card2.innerHTML = `<img src=${obj2.img} data-name="${obj2.name}" alt="${obj2.name}">
                        <h4 class="name" data-name="${obj2.name}">${obj2.name}</h4>
                        <button class="card-btn" type="button" data-name="${obj2.name}">Learn more</button>`;

    const card3 = document.createElement('div');
    card3.classList.add('card');
    card3.setAttribute('data-name', `${obj3.name}`)
    card3.innerHTML = `<img src=${obj3.img} data-name="${obj3.name}" alt="${obj3.name}">
                        <h4 class="name" data-name="${obj3.name}">${obj3.name}</h4>
                        <button class="card-btn" type="button" data-name="${obj3.name}">Learn more</button>`;

    side.innerHTML = '';
    side.appendChild(card1);
    side.appendChild(card2);
    side.appendChild(card3);
}

nextBtn.addEventListener('click', moveRight)
preBtn.addEventListener('click', moveLeft)
pagBtnNext.addEventListener('click', moveRight)
pagBtnPre.addEventListener('click', moveLeft)

function rand(value) {
    let res1 = Math.floor(Math.random() * value)
    let res2 = Math.floor(Math.random() * value)
    let res3 = Math.floor(Math.random() * value)

    if(res1 !== res2 && res1 !== res3 && res2 !== res3) {
        return [res1, res2, res3]
    } else {
        return rand(value);
    }

}

slider.addEventListener('animationstart', (animationEvent) => {
    let changeItem;
    if (animationEvent) {
        if (animationEvent.animationName === 'move-left') {
            changeItem = itemLeft;
        } else {
            changeItem = itemRight;
        }
        let currentPetsName = [...itemActive.getElementsByClassName('name')]
        currentPetsName = currentPetsName.map(elem => elem.dataset.name);
    
        let namePets = petsArray.map(elem => elem.name);
        let generatePetsName = new Set(currentPetsName)
        generatePetsName = namePets.filter(elem => !generatePetsName.has(elem))
        
        let inedexGenerate = rand(5);
        
        let objForCard1, objForCard2, objForCard3;
    
        objForCard1 = petsArray.filter(elem => elem.name === generatePetsName[inedexGenerate[0]])
        objForCard2 = petsArray.filter(elem => elem.name === generatePetsName[inedexGenerate[1]])
        objForCard3 = petsArray.filter(elem => elem.name === generatePetsName[inedexGenerate[2]])
    
        objForCard1 = objForCard1[0];
        objForCard2 = objForCard2[0];
        objForCard3 = objForCard3[0];
    
        buildNewCard(objForCard1, objForCard2, objForCard3, changeItem);
    }
})

slider.addEventListener('animationend', (animationEvent) => {

    let itemChanged;
    
    if (animationEvent.animationName === 'move-left') {
        slider.classList.remove('pre-slide');      

        itemChanged = itemLeft

        itemActive.innerHTML = itemLeft.innerHTML;

    } else {
        slider.classList.remove('next-slide');

        itemChanged = itemRight

        itemActive.innerHTML = itemRight.innerHTML;
    }
    
    nextBtn.addEventListener('click', moveRight)
    preBtn.addEventListener('click', moveLeft)
    pagBtnNext.addEventListener('click', moveRight)
    pagBtnPre.addEventListener('click', moveLeft)

})

// Попап

const popupBg = document.querySelector('.popup-bg');
const popupWrapper = document.querySelector('.popup-wrapper')
const closeBtn = document.querySelector('.close-btn');
const card = document.querySelectorAll('.card');
const popup = document.querySelector('.popup')
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

function createPopup(obj) {
    popup.childNodes[1].style.backgroundImage = `url(${obj.img})`;
    popup.childNodes[3].innerHTML = `<h3 class="popup-title">${obj.name}</h3>
    <h4 class="popup-subtitle">${obj.type} - ${obj.breed}</h4>
    <div class="popup-text">`;
    document.querySelector('.popup-text').innerHTML = `<p>${obj.description}</p>
    <li><span class="bold-text">Age:</span> <span>${obj.age}</span></li>
    <li><span class="bold-text">Inoculations:</span> <span>${obj.inoculations}</span></li>
    <li><span class="bold-text">Diseases:</span> <span>${obj.diseases}</span></li>
    <li><span class="bold-text">Parasites:</span> <span>${obj.parasites}</span></li>`;
                 
}
