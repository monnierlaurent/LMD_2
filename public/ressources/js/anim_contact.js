const section_4 = document.getElementById('section_4');

const img_1 = document.getElementById('img_1');
const img_2 = document.getElementById('img_2');
const img_3 = document.getElementById('img_3');
const img_4 = document.getElementById('img_4');

section_4.addEventListener('mouseover', () => {
    setTimeout(() => {
        img_2.setAttribute('class', 'section_4__img--seize_2 animation_1');
        img_3.setAttribute('class', 'section_4__img--seize_3 animation_2');

        setTimeout(() => {

            img_1.setAttribute('class', 'section_4__img--seize_1 animation_1');
            img_4.setAttribute('class', 'section_4__img--seize_4 animation_2');

        }, 300);

    }, 0);
});