export default class Controller {
    #view
    #service
    constructor({ view, service }) {
        this.#view = view
        this.#service = service
    }
    static async init(deps) {
        const instance = new Controller(deps)
        await instance.#init()
        return instance
    }
    #onClear() {
        this.#view.render(this.#service.searchLocallyByName())
    }

    #onSearch(search) {
        this.#view.render(this.#service.searchLocallyByName(search))
    }

    async #init() {
        this.#view.configureOnSearchClick(this.#onSearch.bind(this))
        this.#view.configureOnClearClick(this.#onClear.bind(this))
        for await (const item of this.#service.getData()) {
            this.#view.render(item)
        }
    }
}