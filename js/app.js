/*
Manipulating the DOM exercise.
Exercise programmatically builds navigation,
scrolls to anchors from navigation,
and highlights section in viewport upon scrolling.
 
Dependencies: None

JS Version: ES2015/ES6

JS Standard: ESlint
*/

/* ------------------------------------------------------- */
/* 1) GLOBAL VARIABLES */
/* ------------------------------------------------------- */
const startingTime = performance.now();
const allSections = document.querySelectorAll('section');

/* ------------------------------------------------------- */
/* 2) BUILDER */
/* ------------------------------------------------------- */

/*  2-1) NAV: Build navigation bar */
for(let i = 0; i < allSections.length; i++){

    const navUl = document.querySelector('#navbar__list');

    let navLi = document.createElement('li');
    navLi.className = 'menu__link';

    let navLink = document.createElement('a');
    let navLinkNumber = i + 1;
    
    navLink.href = '#section' + String(navLinkNumber);
    navLink.textContent = allSections[i].getAttribute('data-nav');

    navLi.appendChild(navLink);
    navUl.appendChild(navLi);
}

/* ------------------------------------------------------- */
/* 3) FUNCTIONS */
/* ------------------------------------------------------- */

/*  3-1) makeActiv(): add 'active' class to section and nav-item when in viewport */
function makeActive(){

    for (const section of allSections){

        const box = section.getBoundingClientRect();

        if (box.top <= 150 && box.bottom >= 150){

            section.classList.add('active');
            let navLink = document.querySelector(`a[href='#${section.id}']`);

            navLink.classList.add('active');
            navLink.parentElement.classList.add('active');

        } else {

            section.classList.remove('active');
            let navLink = document.querySelector(`a[href='#${section.id}']`);

            navLink.classList.remove('active');
            navLink.parentElement.classList.remove('active');
        }
    }
}

/*  3-2) scrollToSection(): scroll smoothly to section on nav item click */
function scrollToSection(link, e){

    e.preventDefault();

    const destination = document.querySelector(link.getAttribute('href'));
    let coll = document.getElementById(`coll_${destination.id}`);
    let section = coll.nextElementSibling;

    /* Expand section if collapsed */
    if(!(coll.classList.contains('active_coll'))){

        section.style.maxHeight = section.scrollHeight + 'px';

    }
    
    destination.scrollIntoView({
        behavior: 'smooth'
    });
    
}

/*  3-3) scrollToTop(): scroll smoothly to the top of the page */
function scrollToTop(e){

    e.preventDefault();

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

/* ------------------------------------------------------- */
/* 4) EVENTS */
/* ------------------------------------------------------- */

/*
    4-1) Scroll event: add class 'active' to section and nav-item when
         near top of viewport
*/       
document.addEventListener('scroll', () => {
    makeActive();
});    

/*  4-2) Click event: scroll smoothly from navitem to section */
document.querySelectorAll('.menu__link a').forEach((link) => {

    link.addEventListener('click', (e) => {
        scrollToSection(link, e);
    });

});

/*  4-3) Scroll event: hide navigation bar when not scrolling */
let timer = null;

document.addEventListener('scroll', () => {

    const hideNav = document.querySelector('nav');

    if(timer !== null) {
        clearTimeout(timer);
        hideNav.style.display = 'block';
    }

    timer = setTimeout( () => {
        hideNav.style.display = 'none';
    }, 10000);

});

/* 
    4-4) Click event: add a smooth scrolling behaviour to
         scroll-to-top button
*/
const scrollToTopBtn = document.querySelector('#scrollToTop');

scrollToTopBtn.addEventListener('click', (e) => {
    scrollToTop(e);
});

/*  
    4-5) Scroll event: Make the scroll-to-top button only visible when the
         user finds himself at the bottom of the page
*/
const scrollToTopDiv = document.querySelector('.scrollToTopDiv');

window.addEventListener('scroll', () => {

    if((window.innerHeight + window.scrollY) === document.body.scrollHeight){
        scrollToTopDiv.style.display = 'table';

    } else {
        scrollToTopDiv.style.display = 'none';
    }

});

/*  4-6) Click event: Make sections collapsible */
document.querySelectorAll('.collapsible_btn').forEach(coll => {

    coll.addEventListener('click', () => {

        coll.classList.toggle('active_coll');
        let section = coll.nextElementSibling;

        if(coll.classList.contains('active_coll')){
            section.style.maxHeight = section.scrollHeight + 'px';

        } else {
            section.style.maxHeight = 0;
        }

    });
});

/* ------------------------------------------------------- */
/* 5.) PERFORMANCE */
/* ------------------------------------------------------- */

/*  5-1) Performance tracker */
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

/*  5-2) Logs */
window.addEventListener('scroll', () => {
    console.log('scrollY:' + String(scrollY));
    console.log('innerHeight:' + String(window.innerHeight));
    console.log('scrollY + innerHeight:' + (window.scrollY + window.innerHeight));
    console.log('ScrollHeight:' + String(document.body.scrollHeight));
});