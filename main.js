// First we create a variable to grab the input element.
let filterInput = document.getElementById('filterInput');

// Next we grab the event listener.
filterInput.addEventListener('keyup', filterContactNames);


function filterContactNames(){
  // Next we get the value of the input.
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  
  // Next we get the names inside the ul's.
  let ul = document.getElementById('contactName');

  // Next we get the items inside the li's.
  let li = ul.querySelectorAll('li.panel-block');

  // Next we loop through the items.
  for(let i = 0; i < li.length; i++){
    let p = li[i].getElementsByTagName('p')[0];

    // If match
    if(p.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    }else {
      li[i].style.display = 'none';
    }
  }
}
