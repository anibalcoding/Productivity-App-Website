document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');


    toggleButton.addEventListener('click', () => {
        removeActiveClass();
        mobileMenu.classList.toggle('active');
    });

    function removeActiveClass() {
        const links = document.querySelectorAll('.navbar__mobile-menu-item');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            })
        })
    }
})


window.addEventListener('scroll', ()=> {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll')

    }

    else  {
        navbar.classList.remove('navbar--scroll')
    };
});