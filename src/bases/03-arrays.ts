import { pikachu, Pokemon, Charmander } from "./02-objects"

export const pokemons: Pokemon[] = []
// pokemon.push(1, "string", pikachu) --> error type never
pokemons.push(pikachu, Charmander)

console.log(pokemons)
