// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(headerObj) {

    // Creating the elements

    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement('span');

    //Adding the elements onto the page

    headerDiv.appendChild('div');
    spanDate.appendChild('span');
    h1.appendChild('h1');
    spanTemp.appendChild('span')
}

