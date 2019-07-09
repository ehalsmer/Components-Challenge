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

    // Get close buttons:
    this.close = document.querySelectorAll('.close, .btn-secondary')
    // console.log(this.close);

    this.close[0].addEventListener('click', this.closeModal.bind(this));
    this.close[1].addEventListener('click', this.closeModal.bind(this));
  }
  clicked(){
    // alert('clicked?!');
    this.modal.style="display: block; padding-right: 16px;"
  }
  closeModal(){
    this.modal.style="none;"
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

  modalToggles.forEach(button => new Modal(button));
});


//           style="display: block; padding-right: 16px;"
