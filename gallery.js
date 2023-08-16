const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const fullImage = document.querySelector(".full-image");
const closeBtn = document.querySelector(".close-btn");

gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        const smallImageUrl = e.target.src;
        const largeImageUrl = smallImageUrl.replace("thumbs_abmvitra2.jpg", "abmvitra2.jpg");
        fullImage.src = largeImageUrl;
        lightbox.style.display = "flex";
    }
});

function closeLightbox() {
    lightbox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});









const largeImageUrl = smallImageUrl.replace("thumbs_abmvitra2.jpg", "abmvitra2.jpg");