const panelT = document.querySelector('.mainPageImage');
const imgElement = document.querySelector('.changingPictures1');

const panelT1 = document.querySelectorAll('.panel');

// console.log('dasdsadsadsa')

let index = 0;





window.onload = function () {
    setInterval(changeBodyImages, 3000);
};

let indexTwo = 0;

let bodyImages = [
    "/images/mainPageImages/intemaInova.jpeg",
    "/images/mainPageImages/vitraMain.jpg",
    "/images/mainPageImages/sienaIntema.jpg",
    "/images/mainPageImages/toscanaIntema.jpeg",
    "/images/mainPageImages/vegaIntema.jpeg",
    
]

function changeBodyImages() {
    panelT.src = bodyImages[indexTwo];
    indexTwo > 3 ? indexTwo = 0 : indexTwo++;
}







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

        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.boxSizing = 'border-box';


    });



const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');


const word1 = ["ALIŞVERİŞLERİNİZ İÇİN İNTERNET SİTEMİZİ ZİYARET EDEBİLİRSİNİZ"];


const typingDelay = 100;
const erasingDelay = 100;



let indexAutoText = 0;
let charIndex = 0;
const newLetterDelay = 1000;

document.addEventListener('DOMContentLoaded', () => {

    // if (words.length) {

    setTimeout(type, newLetterDelay);
    // }
});




function type() {

    if (charIndex < word1[indexAutoText].length) {

        typedTextSpan.textContent += word1[indexAutoText].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);

    } else {
        setTimeout(erase, newLetterDelay);
    }
}


function erase() {

    if (charIndex > 0) {


        typedTextSpan.textContent = word1[indexAutoText].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingDelay)

    } else {
        indexAutoText++;
        if (indexAutoText < word1.length) {
            type()
        }
        else {
            indexAutoText = 0;
            type();
        }
    }
}




// let anasayfa = document.querySelector('/htmlPages/navbar.html .anasayfa');

fetch('/htmlPages/navbar.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const elements = doc.querySelectorAll('.anasayfa'); // '.your-class' yerine kullanmak istediğiniz sınıf adını verin

        console.log(elements)


        // elements, tüm seçilen elementleri içeren bir NodeList'dir
        elements.forEach(element => {
            // Her bir element üzerinde işlem yapabilirsiniz
            console.log(element.textContent);
        });
    })
    .catch(error => {
        console.error('HTML alınırken hata oluştu:', error);
    });