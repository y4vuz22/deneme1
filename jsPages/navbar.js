


console.log('adsads')


function myFunction() {
    var x = document.getElementById("ulDiv");
    var icon1 = document.querySelector('.fa-bars')
    var icon2 = document.querySelector('.fa-x')
    // var y = documentge
// console.log(x)





    if (x.className === "ulDiv") {
      x.className += " responsive";
      icon1.style.display="none";
      icon2.style.display="block";
     
    } else {
      x.className = "ulDiv";
      icon1.style.display="block";
      icon2.style.display="none";
     
      
    }
  }