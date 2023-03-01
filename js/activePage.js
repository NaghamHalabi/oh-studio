// Get the current page URL
var currentPage = window.location.pathname;

// Split the URL path by '/'
var pathArray = currentPage.split('/');

// Get the last part of the URL path
var currentPage = pathArray.pop();

console.log('current page' + currentPage)
// Get all the navigation links
var navLinks = document.querySelectorAll('.nav-list a');
console.log(navLinks);
console.log('nfkagjakdjgkgjkgjska');

// Loop through the navigation links and update the "active" class
navLinks.forEach(function(link) {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
        console.log('add active class')
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});