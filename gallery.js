const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const fullImage = document.querySelector(".full-image");
const closeBtn = document.querySelector(".close-btn");
const images = Array.from(gallery.querySelectorAll("a"));



let currentIndex = 0;

gallery.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.tagName === "IMG") {
        currentIndex = images.findIndex(img => img.href === e.target.parentElement.href);
        updateImage();
        lightbox.style.display = "flex";
        
    }
});

function updateImage() {
    fullImage.src = images[currentIndex].href;
    
}

function closeLightbox() {
    lightbox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }
});



// gallery.addEventListener("click", (e) => {
//   e.preventDefault(); // Bağlantıya tıklamayı engelle

//   if (e.target.tagName === "IMG") {
//     const largeImageUrl = e.target.parentElement.href;

//     fullImage.src = largeImageUrl;
//     lightbox.style.display = "flex";
//   }
// });

// function closeLightbox() {
//   lightbox.style.display = "none";
// }

// closeBtn.addEventListener("click", closeLightbox);

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     closeLightbox();
//   }
// });

































// console.log(gallery)

// gallery.addEventListener("click", (e) => {
//     if (e.target.tagName === "IMG") {
//         const smallImageUrl = e.target.src;
//         const largeImageUrl = smallImageUrl.replace("thumbs_abmvitra2.jpg", "abmvitra2.jpg");
//         fullImage.src = largeImageUrl;
//         lightbox.style.display = "flex";
//     }
// });






// function closeLightbox() {
//     lightbox.style.display = "none";
// }

// closeBtn.addEventListener("click", closeLightbox);

// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//         closeLightbox();
//     }
// });









// const largeImageUrl = smallImageUrl.replace("thumbs_abmvitra2.jpg", "abmvitra2.jpg");