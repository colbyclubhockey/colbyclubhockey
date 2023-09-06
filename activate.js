//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
//queryselectorall returns all items that have that class
//right now, queryselector just locks only onto about section, so menu only exits if about section is selected
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    
})
//e stands for event
navMenu.addEventListener("click", (e)=>{
    //must use nav-link because i assume that text is most closely surrounded by class nav-link
    if(e.target.classList.contains("nav-link")){
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    }
})
//banner carousel
let bannerIndex = 0;
showBanner();

function showBanner() {
  let i;
  let banner = document.getElementsByClassName("banner");
  for (i = 0; i < banner.length; i++) {
    banner[i].style.display = "none";  
  }
 bannerIndex++;
  if (bannerIndex > banner.length){
    bannerIndex=1;
  }
  banner[bannerIndex-1].style.display = "block";  
  setTimeout(showBanner, 10000); // Change image every 5 seconds
}
//image carosel
let imageIndex = 0;
showImage();

function showImage() {
  let i;
  let image = document.getElementsByClassName("image");
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";  
  }
 imageIndex++;
  if (imageIndex > image.length){
    imageIndex=1;
  }
  image[imageIndex-1].style.display = "block";  
  setTimeout(showImage, 5000); // Change image every 5 seconds
}

