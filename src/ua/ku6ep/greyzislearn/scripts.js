var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 15000); // Change image every 15 seconds
}

const pictures = [
"https://look.com.ua/pic/201711/1920x1080/look.com.ua-258814.jpg", 
"https://s1.1zoom.ru/b5650/207/School_English_Pencils_531050_1920x1080.jpg",
"https://s1.1zoom.ru/b5050/677/School_Clock_Handbag_Vector_Graphics_White_544558_1920x1080.jpg"
]
const vraper=document.getElementsByClassName("slideshow-container") [0]
for (var i = pictures.length - 1; i >= 0; i--) {
   let picture = pictures[i]
   let div = document.createElement("div")
   div.classList.add("mySlides")
   div.classList.add("fade")
   let divNumber = document.createElement("div")
   divNumber.innerText=i+"/"+pictures.length
   divNumber.classList.add("numbertext")
   let divSlide = document.createElement("div")
   divSlide.classList.add("slide")
   let divText = document.createElement("div")
   divText.classList.add("text")
   divText.innerText=i+"/"+pictures.length
   divSlide.style.backgroundImage="url("+picture+")"
   div.appendChild(divNumber)
   div.appendChild(divSlide)
   div.appendChild(divText)
   vraper.appendChild(div)






}

