/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (size % 1 === 0 &&
    size >= 2 &&
    size <= 50);
}
/* takes 2 sides and calculates area of triangle */
function calculateArea(sideA, sideB) {
  return (sideA * sideB) / 2
}
/* takes 2 sides and calculates hypotenuse of triangle */
function calculateHypotenuse(sideA, sideB) {
  return Math.floor(Math.sqrt(sideA ** 2 + sideB ** 2));
}
/* Handle UI: get form data & update HTML */
function processForm(evt) {
  evt.preventDefault();
  let sideA = parseInt(document.getElementById("side-a").value);
  let sideB = parseInt(document.getElementById("side-b").value);
  let [sideAisValid, sideBisValid] = validateTriangle(sideA, sideB);
  setMessages(sideAisValid, sideBisValid, sideA, sideB);
}
/* Takes 2 sides and returns if triangle is valid. */
function validateTriangle(sideA, sideB) {
  let sideAisValid = validateEdge(sideA);
  let sideBisValid = validateEdge(sideB);
  return [sideAisValid, sideBisValid];
}
/* Called by processForm, sets messages in DOM*/
function setMessages(sideAisValid, sideBisValid, sideA, sideB) {
  let aMsg = sideAisValid ? "" : "Invalid!";
  let bMsg = sideBisValid ? "" : "Invalid!";
  let calcMessage = "";
  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;

  if (sideAisValid && sideBisValid) {
    let area = calculateArea(sideA, sideB);
    let hypot = calculateHypotenuse(sideA, sideB);
    calcMessage = `Hypotenuse is ${hypot} and area is ${area}.`;
    if (area > 50) {
      calcMessage += ` That's a really big triangle!`;
    }
    // console.log(`Area: ${area}, hypot:${hypot}, msg:${msg}`)
  } else {
    calcMessage = "";
  }
  document.getElementById("msg").innerHTML = calcMessage;
}
