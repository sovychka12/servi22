document.addEventListener('DOMContentLoaded', function () {
    //Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Service Button function
    const serviceButtons = document.querySelectorAll('.service-button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            const allDetailsSections = document.querySelectorAll('.services-details');
            allDetailsSections.forEach(section => {
                if(section.id === targetId){
                    section.classList.remove('hidden');
                }else{
                    section.classList.add('hidden')
                }
            });
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    menuToggle.addEventListener('click', function () {
        navWrapper.classList.toggle('open');
        menuToggle.classList.toggle('open')
    });
});
