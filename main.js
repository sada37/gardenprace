'use strict'

{
  const click = document.getElementById('click');
  const background = document.querySelector('.menu-background');

  const window = document.querySelector('.click-menu-content');

  const close = document.getElementById('close');
  const closebutton = document.querySelector('.close-bottom');




  click.addEventListener('click', () => {
    background.classList.add('background-open');
    window.classList.add('open');
  });

  close.addEventListener('click', () => {
    background.classList.remove('background-open');
    window.classList.remove('open');
  });

  closebutton.addEventListener('click', () => {
    background.classList.remove('background-open');
    window.classList.remove('open');
  });


  const accordion = document.getElementById('accordionButton');
  const Aclose = document.querySelector('.close-button');
  const Aopen = document.querySelector('.accordion-button');
  const Adown = document.querySelector('.Adown');

  accordion.addEventListener('click', () => {
    Aopen.classList.toggle('none');
    Aclose.classList.toggle('block');
    Adown.classList.toggle('Aup');
  });

  const accordion2 = document.getElementById('accordionButton2');
  const Aclose2 = document.querySelector('.close-button2');
  const Aopen2 = document.querySelector('.accordion-button2');
  const Adown2 = document.querySelector('.Adown2');

  accordion2.addEventListener('click', () => {
    Aopen2.classList.toggle('none');
    Aclose2.classList.toggle('block');
    Adown2.classList.toggle('Aup');
  });


  // accordion.addEventListener('click', () => {
  //   Aopen.classList.remove('none');
  //   Aclose.classList.remove('block');
  // });



}

// const  = document.querySelectorAll('dt');
// const A = document.querySelector('dd');


// Q.forEach(dt => {
//   dt.addEventListener('click', () => {
//     dt.parentNode.classList.toggle('appear');
//   })
// });

// Q.forEach(el => {
//   if (dt !== el) {
//     el.parentNode.classList.remove('appear');
//   }
// });