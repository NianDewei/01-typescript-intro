export class NewHero {
	// getter
	get imageUrl(): string {
		return `Https//heroes/${this.id}`
	}
	constructor(
		public readonly id: number, // read only, not writable
		public name: string // public imageUrl: string
	) {}

	// methods
	scream() {
		console.log("Change Level")
	}

	speak() {
		console.log("Ultra instinct")
	}
}

// decorators
const MyDecorator = () => {
	return (target: Function) => {
		return NewHero
	}
}

@MyDecorator()
export class Hero {
	// getter
	get imageUrl(): string {
		return `Https//heroes/${this.id}`
	}
	constructor(
		public readonly id: number, // read only, not writable
		public name: string // public imageUrl: string
	) {}

	// methods
	scream() {
		console.log(`${this.name.toUpperCase()}!!`)
	}

	speak() {
		console.log(`${this.name} , ${this.name}!`)
	}
}

export const goku = new Hero(10, "Goku Mode God")
goku.scream()
goku.speak()
