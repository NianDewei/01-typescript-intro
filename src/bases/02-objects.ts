// export const pokemonsIds = [10, 20, 30, 34, 66]
// pokemonsIds.push("A String")
// console.log(pokemonsIds)
interface Pokemon {
	id: number
	name: string
	age?: number
}

export const pikachu: Pokemon = {
	id: 1,
	name: "Pikachu"
}

export const Charmander: Pokemon = {
	id: 0,
	name: "Charmander",
	age: 10
}

console.log(pikachu)
