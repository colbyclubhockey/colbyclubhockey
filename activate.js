//hamburger menu
const hamburger = document.querySelector(".hamburger");
//queryselectorall returns all items that have that class
//right now, queryselector just locks only onto about section, so menu only exits if about section is selected
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    
})
const navMenu = document.querySelector(".nav-menu");
//e stands for event
//gets rid of sidebar menu if user clicks option
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
  let banner = document.getElementsByClassName("banner");
  for (let i = 0; i < banner.length; i++) {
    banner[i].style.display = "none";  
  }
 bannerIndex++;
  if (bannerIndex > banner.length){
    bannerIndex=1;
  }
  banner[bannerIndex-1].style.display = "block";  
  setTimeout(showBanner, 10000); // Change image every 5 seconds
}
//image carousel
let imageIndex = 0;
showImage();
const image1 = document.querySelector(".image1");
function showImage() {
  let image = document.getElementsByClassName("image");
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = "none";  
  }
 imageIndex++;
  if (imageIndex > image.length){
    imageIndex=1;
  }
  image[imageIndex-1].style.display = "block";  
  setTimeout(showImage, 5000); // Change image every 5 seconds
}
//creates buttons
document.querySelectorAll(".roster-carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".roster-table");
  const buttonsHtml = Array.from(items, ()=> {
    //Use `` to be able to use ""
    return `<span class="roster-button"></span>`;
  });
  carousel.insertAdjacentHTML("beforeend", `
    <div class="roster-nav">
      ${buttonsHtml.join("")}
    </div>
  `);
  const buttons = carousel.querySelectorAll(".roster-button");
  buttons.forEach((button, i) =>{
    button.addEventListener("click", ()=>{
      //unselect all tiems
      items.forEach(item => item.classList.remove("roster-table-selected"));
      buttons.forEach(button=>button.classList.remove("roster-button-selected"))

      items[i].classList.add("roster-table-selected");
      button.classList.add("roster-button-selected");
    });
  });
  items[0].classList.add("roster-table-selected");
  buttons[0].classList.add("roster-button-selected");
});
