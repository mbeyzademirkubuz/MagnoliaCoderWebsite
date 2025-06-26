let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}; 


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY >100);


        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.services-container .services-box', { origin:'left' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
ScrollReveal().reveal('.timeline-item', { origin:'left', distance: '100px', interval: 200 });
ScrollReveal().reveal('.portfolio-box', { origin:'left', distance: '100px', interval: 200 });


const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Author', 'Content Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true


});

function downloadFile() {
    var filepath = 'file/MuruvvetDemirkubuz_CV.pdf';
    var link = document.createElement('a');
    link.href = filepath;
    link.download = filepath.split('/').pop(); // Dosyanın adını korur
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("CV indirildi.");

    var element = document.getElementById("fileid");
    element.style.color = "white";
    element.innerText = "Dosya indirildi.";
};

// Scroll to top button functionality
const backToTopButton = document.querySelector('.back-to-top');

// Initially hide the button
backToTopButton.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll when clicking the button
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});