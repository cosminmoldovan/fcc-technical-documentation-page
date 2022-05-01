const navBtn = document.getElementById('nav-btn');
const navLinks = document.getElementsByClassName('nav-link');
function displayNav(){
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('display-nav');
}
navBtn.addEventListener('click', displayNav);
navLinks.forEach(link=>{
    link.addEventListener('click', displayNav);     
});

