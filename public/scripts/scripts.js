

function hamburgerDropdown() {
  document.getElementById("hamburgerDropdown").classList.toggle("hamburger-show");
}



function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

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
  let checkboxes = document.getElementsByClass('ingredient-item');
  let result = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value)
    }
  }
} // make a form  button that makes a post request
// value could be replaced with id