




function myFunction() {
  var x = document.getElementById("ulDiv");
  var icon1 = document.querySelector('.fa-bars')
  var icon2 = document.querySelector('.fa-x')




  if (x.className === "ulDiv") {
    x.className += " responsive";
    icon1.style.display = "none";
    icon2.style.display = "block";

  } else {
    x.className = "ulDiv";
    icon1.style.display = "block";
    icon2.style.display = "none";


  }
}




console.log(galleryShow)
console.log(dropdown)


// galleryShow.addEventListener('click', showDropDown);


function showDropDown() {

  var galleryShow = document.querySelector('.dropdownGallery');
  var dropdown = document.querySelector('.dropdownDiv');

  dropdown.classList.toggle('dropdownOpen');

}