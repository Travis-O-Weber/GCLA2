/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // Retrieve the form element with the specified 'id'
  let formElement = document.getElementById(id);

  // If no element with the given 'id' is found, return a not-found message with the 'id'
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  // Get the value entered by the user in the form element
  let value = formElement.value;

  // If the value is empty or consists only of spaces, return the placeholder text from the form element
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  // Otherwise, return the entered value
  return value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  console.log("button clicked.");

  // Get values from input fields (replace these ids with actual input ids from your form)
  let relative = formValue("firstFormElement");
  let adjective1 = formValue("adjective1");
  let adjective2 = formValue("adjective2");
  let famousPerson = formValue("famousPerson");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("petName");

  // Build the custom Mad Libs story with new values
  let story = `Dear ${relative},<br><br>
  I've been having such a ${adjective1} time at the new job! The boss is super ${adjective2}, and I even met ${famousPerson}. We instantly became ${noun}. Can't wait to see you soon!<br><br>
  Sincerely, your favorite ${dessert},<br>
  ${petName}`;

  // Insert the generated story into the output div
  document.getElementById("output").innerHTML = story;

  // Add the 'generated' class to the container to trigger any CSS transitions
  addClassToElement("container", "generated");
}
