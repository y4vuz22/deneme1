const panelT = document.querySelector('.panel');
const imgElement = document.querySelector('.changingPictures1');

const panelT1 = document.querySelectorAll('.panel');


let index = 0;

let images = [
    "/images/changingPictures/degisen1.jpg",
    "/images/changingPictures/degisen2.jpg"


]




function change() {
    imgElement.src = images[index];
    index > 0 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 3000);
    setInterval(changeBodyImages, 2000);
};

let indexTwo = 0;

let bodyImages = [
    "/images/mainPageImages/res1.jpg",
    "/images/mainPageImages/res2.jpg",
    "/images/mainPageImages/res3.jpg",
    "/images/mainPageImages/res4.jpg",
    "/images/mainPageImages/res5.jpg",
]

function changeBodyImages() {
    panelT.src = bodyImages[indexTwo];
    indexTwo > 3 ? indexTwo = 0 : indexTwo++;
}

// window.onload = function () {
//     setInterval(changeBodyImages, 3000);
// };






selectImage();



function selectImage() {

    panelT1.forEach(panel => {
        panel.addEventListener("click", () => {
            // console.log('dasdas')
            changeBodyImages();
            // removeActive();
            // panel.classList.add("active");
        })
    })

}


// function removeActive() {
//     panelT.forEach(panel => {
//         panel.classList.remove("active");
//     })
// }


const navbarPlaceholder = document.getElementById('navbar-placeholder');
fetch('/htmlPages/navbar.html')
    .then(response => response.text())
    .then(html => {
        navbarPlaceholder.innerHTML = html;
        // document.body.style.overflowX = 'hidden '

    });




    
const footerPlaceHolder = document.getElementById('footerPlaceHolder');
fetch('/htmlPages/footer.html')
    .then(response => response.text())
    .then(html => {
        footerPlaceHolder.innerHTML = html;
        document.body.style.overflowX = 'hidden '

    });