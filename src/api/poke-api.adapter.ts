import axios from "axios"

// substitution principle -> Liskov
export interface HttpAdapter {
	get<T>(url: string): Promise<T>
}

export class PokeApiFetchAdapter implements HttpAdapter {
	async get<T>(url: string): Promise<T> {
		const response = await fetch(url)
		const data = await response.json()
		console.log('With Fetch')
		return data
	}
}

export class PokeApiAdapter implements HttpAdapter {
	private readonly axios = axios

	// ussing generics
	async get<T>(url: string) {
		const { data } = await this.axios.get<T>(url)
		console.log('With Axios')
		return data
	}
}
