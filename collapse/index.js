// console.log('test');

class Collapse {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Collapse.constructor toggleElement:", toggleElement); //
    this.toggleElement = toggleElement;

    // Getting #secretKitten id, which is our target, from data-target attribute:
    this.target = this.toggleElement.dataset.target;
    // console.log(this.target);

    // Get the hidden div by using this.target id from above:
    this.hiddenItem = document.querySelector(`${this.target}`);
    // console.log(this.hiddenItem);

    // Add an event listener to toggleElement, on click, which triggers method clicked, below. We bind the this keyword to send to the method.
    this.toggleElement.addEventListener('click', this.clicked.bind(this));

    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax
  }
  clicked(){
    // alert('clicked !');
    // grab the thing you want to toggle a class on:
    // console.log(this.hiddenItem.classList); 
    this.hiddenItem.classList.toggle('collapse');
  }
}


// On load, grab anything with data-toggle="collapse" (should be buttons) and create an instance of the Collapse class from it. See above for class.
document.addEventListener("DOMContentLoaded", () => {
  const collapseToggles = document.querySelectorAll(`[data-toggle="collapse"]`);

  collapseToggles.forEach(button => new Collapse(button));
});
