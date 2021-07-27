let move = document.querySelector(".slide");
let person = document.querySelectorAll("div.person");
console.log(person);
document.addEventListener("click", (event) => {
  if (event.target.textContent === `` && event.target.nodeName === `DIV`) {
    for (let i = 0; i < person.length; i++) {
      if (person[i].getAttribute(`style`) === `display: none;`) {
        person[i].style.display = "block";
      } else if (person[i].getAttribute(`style`) === `display: block;`) {
        person[i].style.display = "none";
      }
    }
  }
});
