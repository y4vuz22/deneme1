const panelT = document.querySelectorAll('.panel');


let images = ["images/changingPictures/degisen1.jpg",
    "images/changingPictures/degisen2.jpg"
    
]
let index = 0;

const imgElement = document.querySelector('.changingPictures1');


function change() {
    imgElement.src = images[index];
    index > 0 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 3000);
};



selectImage();



function selectImage() {

    panelT.forEach(panel => {
        panel.addEventListener("click", () => {

            removeActive();
            panel.classList.add("active");
        })
    })

}


function removeActive() {
    panelT.forEach(panel => {
        panel.classList.remove("active");
    })
}




