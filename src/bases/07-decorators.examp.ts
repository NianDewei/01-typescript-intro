const Deprecated = (deprecationReason: string) => {
	return (
		target: any,
		memberName: string,
		propertyDescriptor: PropertyDescriptor
	) => {
		// console.log({target})
		return {
			get() {
				const wrapperFn = (...args: any[]) => {
					console.warn(
						`Method ${memberName} is deprecated with reason: ${deprecationReason}`
					)
					//! Llamar la función propiamente con sus argumentos
					propertyDescriptor.value.apply(this, args)
				}
				return wrapperFn
			}
		}
	}
}

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
	@Deprecated("Most use screamv2 method instead")
	scream() {
		console.log(`${this.name.toUpperCase()}!!`)
	}

    screamv2() {
		console.log(`${this.name.toUpperCase()}!!!`)
	}

	speak() {
		console.log(`${this.name} , ${this.name}!`)
	}
}

export const goku = new Hero(2, "Goku SS4")
// goku.scream()
goku.screamv2()