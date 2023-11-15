







const allProductsGalleryLeftTab = document.getElementById('allProductsGalleryLeftContainer-placeholder');



fetch('/htmlPages/allProductsGalleryLeftTab.html')
    .then(response => response.text())
    .then(html => {
        allProductsGalleryLeftTab.innerHTML = html;
        // document.body.style.overflowX = 'hidden '

    });




    