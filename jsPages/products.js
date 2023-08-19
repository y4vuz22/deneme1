


const navbarPlaceholder = document.getElementById('navbar-placeholder');
fetch('/htmlPages/navbar.html')
    .then(response => response.text())
    .then(html => {
        navbarPlaceholder.innerHTML = html;
        document.body.style.overflowX = 'hidden '

    });




    
const footerPlaceHolder = document.getElementById('footerPlaceHolder');
fetch('/htmlPages/footer.html')
    .then(response => response.text())
    .then(html => {
        footerPlaceHolder.innerHTML = html;
        document.body.style.overflowX = 'hidden '

    });