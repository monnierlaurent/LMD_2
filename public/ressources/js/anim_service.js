animationService = () => {

    const btnService = document.getElementById('btn_service');

    const serviceDiv1 = document.getElementById('service_1');

    serviceDiv1.scrollIntoView({ inline: "center" });

    const serviceDiv2 = document.getElementById('service_2');
    const serviceDiv3 = document.getElementById('service_3');
    const serviceDiv4 = document.getElementById('service_4');

    const sectionService = document.getElementById('section_1');

    sectionService.addEventListener('mouseover', () => {
        console.log('survole')

        setTimeout(() => {
            serviceDiv1.setAttribute('class', 'section_1__div_1--flex');

            setTimeout(() => {
                serviceDiv2.setAttribute('class', 'section_1__div_2--flex');
                setTimeout(() => {
                    serviceDiv3.setAttribute('class', 'section_1__div_3--flex');
                    setTimeout(() => {
                        serviceDiv4.setAttribute('class', 'section_1__div_4--flex');
                    }, 500);
                }, 500);
            }, 500);
        }, 0);
    });

    btnService.addEventListener('click', () => {

        setTimeout(() => {
            serviceDiv1.setAttribute('class', 'section_1__div_1--flex');

            setTimeout(() => {
                serviceDiv2.setAttribute('class', 'section_1__div_2--flex');
                setTimeout(() => {
                    serviceDiv3.setAttribute('class', 'section_1__div_3--flex');
                    setTimeout(() => {
                        serviceDiv4.setAttribute('class', 'section_1__div_4--flex');
                    }, 500);
                }, 500);
            }, 500);
        }, 0);
    });
};

animationService();