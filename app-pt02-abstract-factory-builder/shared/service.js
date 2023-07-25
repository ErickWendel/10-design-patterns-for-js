export default class Service {
    #url
    #database
    constructor({ url }) {
        this.#url = url
    }
    async getData() {
        const database = await (await fetch(this.#url)).text()
        this.#database = database.split('\n').filter(i => !!i).map(JSON.parse)

        return this.#database
    }

    searchLocallyByName(search = '') {
        return this.#database.filter(({ name }) => {
            return name.toLowerCase().includes(search.toLowerCase())
        })
    }
}