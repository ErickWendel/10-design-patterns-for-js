export default class Service {
    #url
    #database = []
    constructor({ url }) {
        this.#url = url
    }

    #readChunks(reader) {
        return {
            async *[Symbol.asyncIterator]() {
                let readResult = await reader.read();
                while (!readResult.done) {
                    yield readResult.value;
                    readResult = await reader.read();
                }
            },
        };
    }

    async * getData() {
        try {
            const response = await fetch(this.#url)
            const reader = response.body
                .pipeThrough(
                    new TextDecoderStream()
                )
                .getReader()

            for await (const chunk of this.#readChunks(reader)) {
                const item = JSON.parse(chunk)
                this.#database.push(item)
                yield item
            }

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