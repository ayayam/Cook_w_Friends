const { db } = require("../../models/recipe-model");


function hamburgerDropdown() {
  document.getElementById("hamburgerDropdown").classList.toggle("hamburger-show");
}

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// highlighting current page
// var link = document.getElementsByClassName("navlinks");
// var URL = window.location.pathname;
// URL = URL.substring(URL.lastIndexOf('/'));
// for (var i = 0; i < links.length; i++) {
//   if (links[i].dataset.pathname == URL) {
//     links[i].classList.add("current");
//   }
// }

// let links = document.querySelectorAll(".navbar-new a");
// let bodyId = document.querySelector("body").id;
// for (let link of links) {
//   if (link.dataset.active == bodyId) {
//     link.classList.add("navlinks:active");
//   }
// }

// const current = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         current = i;
//     }
// }
// document.links[current].className = 'current';

// Search: Drag and Drop elements
// document.getElementByClass
  
  // function filterFunction() {
  //   var input, filter, ul, li, a, i;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   div = document.getElementById("myDropdown");
  //   a = div.getElementsByTagName("a");
  //   for (i = 0; i < a.length; i++) {
  //     txtValue = a[i].textContent || a[i].innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       a[i].style.display = "";
  //     } else {
  //       a[i].style.display = "none";
  //     }
  //   }
  // } 

function addCheckedItem() { //make result an array
  let checkboxes = document.getElementsByClass('checkmark');
  let result = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value);
      
      // db.recipes.insertMany(result)?
    }
  }
} // make a form  button that makes a post request
// value could be replaced with id