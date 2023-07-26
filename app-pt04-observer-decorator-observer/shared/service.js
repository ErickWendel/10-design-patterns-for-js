export default class Service {
    #url
    #database
    constructor({ url }) {
        this.#url = url
    }
    async getData() {
        try {
            const response = await fetch(this.#url)
            const database = await response.text()
            this.#database = database.split('\n').filter(i => !!i).map(JSON.parse)

            return this.#database

        } catch (error) {
            console.log('error', error)
            return []
        }
    }

    searchLocallyByName(search = '') {
        return this.#database.filter(({ name }) => {
            return name.toLowerCase().includes(search.toLowerCase())
        })
    }
}