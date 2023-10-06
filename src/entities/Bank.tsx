class Bank {
	bankName: string
	description: string
	age: number
	url: string

	constructor(bankName: string, description: string, age: number, url: string) {
		this.bankName = bankName
		this.description = description
		this.age = age
		this.url = url
	}
}

export default Bank
