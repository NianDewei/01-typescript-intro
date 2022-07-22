import "./style.css"
import { age, isValid, name } from "./bases/01-types"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1> Hello ${name} | you've got -> ${age} | Yes or No : ${
	isValid ? "Yes" : "No"
} </h1>
`
