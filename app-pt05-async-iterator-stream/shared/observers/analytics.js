export default class AnalyticsObserver {
    #url
    constructor({ url }) {
        this.#url = url
    }

    async notify(data) {
        await fetch(`${this.#url}/analytics`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}

