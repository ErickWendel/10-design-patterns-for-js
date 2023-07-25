export default class FetchResponseDataBuilder {
    // by default all data is valid
    #responseData = {
        status: '200',
        statusText: 'OK',
        text: () => Promise.resolve(
            `{"id":1,"name":"Mrs. Misty Rempel-Lehner","age":8,"email":"Monique.Leffler@yahoo.com","phone":"(551) 801-5964","vehicle":"Land Cruiser"}\n`
        )
    }

    static aResponse() {
        return new FetchResponseDataBuilder()
    }

    withStatus500() {
        this.#responseData = {
            ...this.#responseData,
            status: 500,
            statusText: 'Internal Server Error',
            text: () => Promise.resolve('')
        }

        return this
    }

    withStatus404() {
        this.#responseData = {
            ...this.#responseData,
            status: 500,
            statusText: 'Not Found',
            text: () => Promise.resolve('')
        }

        return this
    }

    withInvalidBody() {
        this.#responseData = {
            ...this.#responseData,
            text: () => Promise.resolve('{"id":1,"name":')
        }

        return this
    }

    build() {
        return Promise.resolve(this.#responseData)
    }

}

