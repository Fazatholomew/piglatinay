import main from "../main.js"

const elementList = [
  "div", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "p", "li", "footer", "span", "button", "a"
]

for (let i = 0; i < elementList.lenght; i++){
  let element = document.querySelectorAll(elementList[i]);
  for (let i = 0; i < element.lenght; i++){
     let text = element[i].innerText;
     element.innerText = main.execute(text);
  }
}
