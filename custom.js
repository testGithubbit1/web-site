particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

var typed = new Typed('.element', {
    strings: ['Web desiner', 'web Developer'],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,

});