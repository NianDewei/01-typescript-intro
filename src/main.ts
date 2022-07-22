import "./style.css"
import { age, isValid, name } from "./bases/01-types"
import { pikachu } from "./bases/02-objects"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1> Hello ${name} | you've got -> ${age} | Yes or No : ${
	isValid ? "Yes" : "No"
} </h1>
<p> My Pokemon is : ${pikachu.name}</p>
`
