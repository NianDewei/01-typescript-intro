import { Move, PokeAPIResponse } from "../interfaces/pokeapo-res.interface"
import {
	HttpAdapter,
	// PokeApiAdapter,
	PokeApiFetchAdapter
} from "../api/poke-api.adapter"

export class Hero {
	// getter
	get imageUrl(): string {
		return `Https//heroes/${this.id}`
	}

	constructor(
		public readonly id: number, // read only, not writable
		public name: string, // public imageUrl: string
		// TODO: dependency injection
		private readonly http: HttpAdapter // interface
	) {
		console.log("Initialized constructor")
	}

	// methods
	scream() {
		console.log(`${this.name.toUpperCase()}!!!`)
	}

	speak() {
		console.log(`${this.name} , ${this.name}`)
	}

	// methods asyncronous
	async getMoves(): Promise<Move[]> {
		// example with poke api
		const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`
		const data = await this.http.get<PokeAPIResponse>(url)
		console.log(data.moves)
		return data.moves
	}
}
// const PokeApiAxios = new PokeApiAdapter()
const PokeApiFetch = new PokeApiFetchAdapter()

export const goku = new Hero(2, "Goku SS4", PokeApiFetch)
// goku.id = 28 --> error in build
goku.scream()
goku.speak()
goku.getMoves()
