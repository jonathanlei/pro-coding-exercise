/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}


/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let sideA = +document.getElementById("side-a").value;
  let sideB = +document.getElementById("side-b").value;

  let sideAisValid = validateEdge(a);
  let sideBisValid = validateEdge(b);

  let aMsg = sideAisValid ? "" : "Invalid!";
  let bMsg = sideBisValid ? "" : "Invalid!";

  let msg;

  if (sideAisValid && sideBisValid) {
    let area = sideA * sideB / 2;
    let hypot = Math.floor(Math.sqrt(a * a + b * b));
    let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
    if (area > 50) {
      msg += ` That's a really big triangle!`;
    }
  } else {
    msg = "";
  }

  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
  document.getElementById("msg").innerHTML = msg;
}
