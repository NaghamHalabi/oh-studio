let faders = document.querySelectorAll(".fade-up");

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-70px 0px 0px 0px'
};

let observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

for (let fader of faders) {
    observer.observe(fader);
}