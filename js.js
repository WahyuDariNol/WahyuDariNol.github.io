const hamburger = document.getElementById("hamburger");
const span1 = document.getElementById('list1');
const span2 = document.getElementById('list2');
const span3 = document.getElementById('list3');
const navMenu = document.getElementById('nav-menu');

// JavaScript to handle hamburger menu toggle


  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    span1.classList.toggle('gerak1');
    span2.classList.toggle('gerak2');
    span3.classList.toggle('gerak3');
  });
for (let i = 1; i < 20; i++) {
  i += 1;
  console.log(i);
}