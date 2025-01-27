document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', function () {
        const currentScrollPos = window.pageYOffset;
        if(currentScrollPos > 50){
            header.classList.add('sticky');
        }else{
            header.classList.remove('sticky')
        }

        prevScrollPos = currentScrollPos;
    });
});
