import "./style.css"
import { age, isValid, name } from "./bases/01-types"
import { pikachu } from "./bases/02-objects"
// import { goku } from "./bases/06-decorators"
import { goku } from "./bases/07-decorators.examp"
// import { pokemons } from "./bases/03-arrays"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1> Hello ${name} | you've got -> ${age} | Yes or No : ${
	isValid ? "Yes" : "No"
} </h1>
<p> My Pokemon is : ${pikachu.name}</p>
<p> My Hero is : ${goku.name} , ${goku.id} , ${goku.imageUrl}</p>
`
