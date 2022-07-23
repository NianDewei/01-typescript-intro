// Explicit assignment
// export class Hero {
// 	public id: number
// 	public name: string

// 	constructor(id: number, name: string) {
// 		this.id = id
// 		this.name = name
// 		console.log("Initialized constructor")
// 	}
// }

// Short assignment

export class Hero {
	// getter
	get imageUrl(): string {
		return `Https//heroes/${this.id}`
	}

	constructor(
		public readonly id: number, // read only, not writable
		public name: string // public imageUrl: string
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
}

export const goku = new Hero(2, "Goku SS4")
// goku.id = 28 --> error in build
goku.scream()
goku.speak()
