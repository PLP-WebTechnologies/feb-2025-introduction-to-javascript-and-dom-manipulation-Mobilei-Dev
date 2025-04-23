function changeTextAndStyle()
 {
  const heading = document.getElementById("mainText");
  heading.textContent = "The text has changed!";
  heading.classList.toggle("highlight");
}

function toggleElement() {
  const existing = document.getElementById("newElement");

  if (existing) {
    existing.remove(); // Removes the element if it exists
  } else {
    const newEl = document.createElement("p");
    newEl.id = "newElement";
    newEl.textContent = "Hello! I’m a dynamically added element.";
    document.body.appendChild(newEl); // Adds the element to the body
  }
}

  