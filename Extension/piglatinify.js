import main1 from "../js/main.js"
const main = new main1()

const elementList = [
  "div", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "p", "li", "footer", "span", "button", "a"
]

for (let i = 0; i < elementList.length; i++){
    console.log("in")
  let element = document.querySelectorAll(elementList[i]);
    console.log(element)
  for (let i = 0; i < element.length; i++){
     let text = element[i].innerText;
     let paragraphsList = text.split("\n")
     for (let i = 0; i < paragraphsList.length; i++){
        element.innerText = main.execute(paragraphsList[i]);
     }
  }
}