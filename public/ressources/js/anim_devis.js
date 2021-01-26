const section3 = document.getElementById('section_3');
const btnDevis = document.getElementById('btn_devis');

const imgDevis = document.getElementById('img_devis');


section3.addEventListener('mouseover', () => {
    console.log('suvole');
    imgDevis.setAttribute('class', ' animation_appear section_3__img__h3--seize')
});

btnDevis.addEventListener('click', () => {
    console.log('click');
    imgDevis.setAttribute('class', 'animation_appear section_3__img__h3--seize')
});