// Remove the main element with id 'main'
const mainElement = document.querySelector('#main');
if (mainElement) {
  mainElement.remove();
}

//new <h1> element && newHeader variable
const newHeader = document.createElement('h1');

//new <h1> element id to 'victory'
newHeader.id = 'victory';

//innerHTML of the new <h1> element to include "is the champion"
newHeader.innerHTML = 'Wilson is the champion';

// Append the newHeader
document.body.appendChild(newHeader);
