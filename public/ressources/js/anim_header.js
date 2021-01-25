animationHeader = () => {
    const navBar = document.getElementById('navBar');
    const headerH2 = document.getElementById('header_h2');
    const headerH1 = document.getElementById('header_h1');

    navBar.setAttribute('class', 'header__nav--flex');
    headerH2.setAttribute('class', 'header__div_2__h2--style');
    headerH1.setAttribute('class', 'header__div_2__h1--style');
};

animationHeader();