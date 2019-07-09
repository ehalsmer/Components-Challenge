class Modal {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Modal.constructor toggleElement:", toggleElement); //
    this.toggleElement = toggleElement;

    // Get the target's ID:
    this.target = this.toggleElement.dataset.target;
    // console.log(this.target);

    // Get the target by ID:
    this.modal = document.querySelector(`${this.target}`);

    // Add event listener to button, toggleElement:
    this.toggleElement.addEventListener('click', this.clicked.bind(this));

    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax
  }
  clicked(){
    // alert('clicked?!');
    this.modal.style="display: block; padding-right: 16px;"
    const outsideModal = document.querySelector(`:not(${this.target})`)
    outsideModal.style="border: 1px solid red";
    outsideModal.addEventListener('click', function clickOut(event){
      console.log('click');
      // const modalAgain = document.querySelector(`${this.target}`)
      document.querySelector(`${this.target}`).style="display: none;"
      event.stopPropagation();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

  modalToggles.forEach(button => new Modal(button));
});


//           style="display: block; padding-right: 16px;"
